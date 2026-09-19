// Renders every route to static HTML after the client build, so crawlers,
// link unfurlers and anything else that does not run JavaScript sees the
// real page instead of an empty <div id="root">.
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

// Built by `vite build --ssr` into .prerender, deliberately outside dist so
// the server bundle is never uploaded to the CDN.
const { render, routeMeta, origin } = await import(
  join(root, '.prerender', 'entry-server.js')
)

const template = await readFile(join(dist, 'index.html'), 'utf8')

/** Escapes a value for use inside a double-quoted HTML attribute. */
const attr = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function buildHead({ title, description, url }) {
  return [
    `<title>${attr(title)}</title>`,
    `<meta name="description" content="${attr(description)}" />`,
    `<link rel="canonical" href="${attr(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Argon Robotics" />`,
    `<meta property="og:title" content="${attr(title)}" />`,
    `<meta property="og:description" content="${attr(description)}" />`,
    `<meta property="og:url" content="${attr(url)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${attr(title)}" />`,
    `<meta name="twitter:description" content="${attr(description)}" />`,
  ].join('\n    ')
}

for (const route of routeMeta) {
  const url = origin + (route.path === '/' ? '/' : route.path)
  const body = render(route.path)

  const page = template
    // the template's own title and description are the home-page defaults
    .replace(/<title>[\s\S]*?<\/title>/, '__HEAD__')
    .replace(/\s*<meta name="description"[^>]*\/?>/, '')
    .replace('__HEAD__', buildHead({ ...route, url }))
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)

  // Emit both shapes so the host resolves the route whether it looks for a
  // directory index or a flat .html file.
  const targets =
    route.path === '/'
      ? [join(dist, 'index.html')]
      : [
          join(dist, route.path.slice(1), 'index.html'),
          join(dist, `${route.path.slice(1)}.html`),
        ]

  for (const out of targets) {
    await mkdir(dirname(out), { recursive: true })
    await writeFile(out, page)
    console.log(`prerendered ${route.path} -> ${out.replace(root + '/', '')}`)
  }
}

// Static fallback for any path the router does not know.
await writeFile(join(dist, '404.html'), await readFile(join(dist, 'index.html')))

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routeMeta
  .map(
    (route) =>
      `  <url><loc>${origin}${route.path === '/' ? '/' : route.path}</loc></url>`,
  )
  .join('\n')}
</urlset>
`
await writeFile(join(dist, 'sitemap.xml'), sitemap)
console.log('wrote sitemap.xml')
