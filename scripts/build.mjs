// The site is one static page. The build copies it and public/ into dist/,
// then writes a copy per post (dist/<id>/index.html) with that post's title,
// so /vision, /discovery and /simreal load directly and unfurl with the right title.
import { cpSync, rmSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
cpSync('public', 'dist', { recursive: true });

const html = readFileSync('index.html', 'utf8');
writeFileSync('dist/index.html', html);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const views = [...html.matchAll(/<article class="view" data-view="([a-z0-9-]+)"[\s\S]*?<h1[^>]*>([\s\S]*?)<\/h1>/g)];
for (const [, id, rawTitle] of views) {
  const title = rawTitle.replace(/<[^>]+>/g, '').trim() + ' · Argon Robotics';
  const page = html
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1https://www.argonrobotics.ai/${id}`)
    // show this post (not the home page) before any script runs
    .replace('<section class="view" data-view="home" data-nav="home">', '<section class="view" data-view="home" data-nav="home" hidden>')
    .replace(`<article class="view" data-view="${id}" hidden>`, `<article class="view" data-view="${id}">`);
  mkdirSync(`dist/${id}`, { recursive: true });
  writeFileSync(`dist/${id}/index.html`, page);
  console.log(`/${id} → ${title}`);
}
console.log('Built dist/');
