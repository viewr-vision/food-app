// Build dist/ from the one-page source (index.html) and public/.
// Each article gets its own real page (dist/<id>/index.html) holding only that article, with its own head
// (description, canonical, Open Graph, Twitter, BlogPosting structured data). The home page keeps the list and
// links out. Also writes 404.html, sitemap.xml and llms.txt. Unknown paths get the 404 page (see vercel.json).
import { cpSync, rmSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { posts, ORG, SITE, ALLOY_LINKS } from './site-meta.mjs';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const text = (h) => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const firstSentence = (s) => (s.match(/^.*?[.!?](?=\s|$)/) || [s])[0].slice(0, 300);
const abs = (u) => (u.startsWith('http') ? u : SITE + u);
const ARTICLE_RE = /<article class="view" data-view="([a-z0-9-]+)" hidden>[\s\S]*?<\/article>\n?/g;
const HOME_RE = /<section class="view" data-view="home" data-nav="home">[\s\S]*?<\/section>\n?/; // the home section holds no nested sections

function isoDate(s) {
  const d = new Date(s.includes(',') ? s : `1 ${s}`);
  if (isNaN(d)) return null;
  return s.includes(',') ? d.toISOString().slice(0, 10) : d.toISOString().slice(0, 7);
}

function articleInfo(id, html) {
  const block = html.match(new RegExp(`<article class="view" data-view="${id}" hidden>[\\s\\S]*?</article>`))[0];
  const field = (name) => { const m = block.match(new RegExp(`<dt>${name}</dt><dd>([\\s\\S]*?)</dd>`)); return m ? text(m[1]) : null; };
  const lead = block.match(/<p class="summary">([\s\S]*?)<\/p>/) || block.match(/<div class="prose">[\s\S]*?<p>([\s\S]*?)<\/p>/);
  const img = (block.match(/<img[^>]+src="([^"]+\.(?:jpe?g|png|webp))"/) || block.match(/poster="([^"]+\.(?:jpe?g|png|webp))"/) || [])[1];
  const meta = posts.find((p) => p.id === id) || {};
  return {
    id, block,
    title: text(block.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]),
    description: meta.description || (lead ? firstSentence(text(lead[1])) : ORG.description),
    date: isoDate(field('Published') || meta.date || ''),
    authors: (field('Authors?') || 'Argon Robotics team').split(/,\s*|\s+and\s+/),
    image: img ? abs(img) : null,
    about: meta.about || null,
  };
}

function headTags({ title, description, url, image, type, jsonld, noindex }) {
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:site_name" content="Argon Robotics" />`,
    image ? `<meta property="og:image" content="${image}" />` : '',
    `<meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    image ? `<meta name="twitter:image" content="${image}" />` : '',
    jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, '\\u003c')}</script>` : '',
  ].filter(Boolean).join('\n    ');
}

// Replace the source's site-wide head tags (title .. twitter:card) with page-specific ones.
const HEAD_RE = /<title>[\s\S]*?<meta name="twitter:card" content="[^"]*" \/>/;
const withHead = (html, tags) => html.replace(HEAD_RE, tags);
const stripArticles = (html, keep) => html.replace(ARTICLE_RE, (m, id) => (id === keep ? m.replace(' hidden>', '>') : ''));

const orgLd = { '@type': 'Organization', '@id': `${SITE}/#org`, name: ORG.name, url: `${SITE}/`, logo: ORG.logo, description: ORG.description, sameAs: ORG.sameAs };

function buildArticle(src, info) {
  const url = `${SITE}/${info.id}`;
  const ld = { '@context': 'https://schema.org', '@graph': [orgLd, {
    '@type': 'BlogPosting', headline: info.title, description: info.description, url, mainEntityOfPage: url,
    datePublished: info.date, author: info.authors.map((n) => (/team$/i.test(n) ? { '@id': `${SITE}/#org` } : { '@type': 'Person', name: n })),
    publisher: { '@id': `${SITE}/#org` }, ...(info.image ? { image: info.image } : {}),
    ...(info.about ? { about: info.about, mentions: info.about } : {}),
  }] };
  let page = withHead(src, headTags({ title: `${info.title} · Argon Robotics`, description: info.description, url, image: info.image, type: 'article', jsonld: ld }));
  page = stripArticles(page, info.id).replace(HOME_RE, '');
  mkdirSync(`dist/${info.id}`, { recursive: true });
  writeFileSync(`dist/${info.id}/index.html`, page);
  return { url, lastmod: info.date };
}

function buildHome(src) {
  const ld = { '@context': 'https://schema.org', '@graph': [orgLd, { '@type': 'WebSite', name: ORG.name, url: `${SITE}/`, publisher: { '@id': `${SITE}/#org` } }] };
  writeFileSync('dist/index.html', stripArticles(withHead(src, headTags({ title: 'Argon Robotics', description: ORG.description, url: `${SITE}/`, image: null, type: 'website', jsonld: ld })), null));
}

function build404(src) {
  const body = '<section class="view" data-view="home" data-nav="home">\n  <h1 class="ph1">Page not found</h1>\n  <p>There is nothing at this address. <a href="/">Go to the home page</a>.</p>\n</section>\n';
  const page = stripArticles(withHead(src, headTags({ title: 'Page not found · Argon Robotics', description: ORG.description, url: `${SITE}/404`, image: null, type: 'website', noindex: true })), null).replace(HOME_RE, body);
  writeFileSync('dist/404.html', page);
}

function buildSitemapAndLlms(entries, infos) {
  const urls = [{ url: `${SITE}/`, lastmod: entries.map((e) => e.lastmod).filter(Boolean).sort().pop() }, ...entries];
  writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${u.url}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`);
  const lines = [`# Argon Robotics`, '', `> ${ORG.description}`, '', '## Articles', '',
    ...infos.map((i) => `- [${i.title}](${SITE}/${i.id}): ${i.description}`), '', '## Alloy', '',
    ...ALLOY_LINKS.map(([name, url, note]) => `- [${name}](${url}): ${note}`), ''];
  writeFileSync('dist/llms.txt', lines.join('\n'));
}

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
cpSync('public', 'dist', { recursive: true });
const src = readFileSync('index.html', 'utf8');
const ids = [...src.matchAll(/<article class="view" data-view="([a-z0-9-]+)" hidden>/g)].map((m) => m[1]);
const infos = ids.map((id) => articleInfo(id, src));
const entries = infos.map((info) => { const e = buildArticle(src, info); console.log(`/${info.id} → ${info.title} (${info.date})`); return e; });
buildHome(src);
build404(src);
buildSitemapAndLlms(entries, infos);
console.log('Built dist/ (home, 404, sitemap.xml, llms.txt)');
