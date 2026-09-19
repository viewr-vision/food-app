# Argon Robotics — landing page

Vite + React + TypeScript. Static site, no backend.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Deploying

The site is hosted on Vercel from this repo at https://argonrobotics.ai: every push to `main` deploys, and pull requests get preview URLs. `vercel.json` rewrites unknown paths to `index.html`; real routes are prerendered files and win the filesystem check first.

`npm run build` runs three steps: the client bundle, an SSR bundle into `.prerender/`, then `scripts/prerender.mjs`, which renders every route in `src/content/routes.ts` to static HTML and writes `sitemap.xml`. That is what makes the site readable to crawlers and link unfurlers, which do not run JavaScript. Adding a route means adding it to `routeMeta` and to `App.tsx`; the prerender and sitemap follow automatically. `public/robots.txt` points at the sitemap.

## Where things live

- `src/content/site.ts` — site copy and the open roles. Edit here first.
- `src/content/post.ts` and `src/pages/Post.tsx` — the research post. Its prose is transcribed verbatim from the source document; do not reword it. Tables live in `post.ts` and render through `DataTable`.
- `src/pages/` — `Home` (front page) and `Careers` (`/careers`, the open roles). Routing is `react-router-dom`; the host must serve `index.html` for unknown paths (SPA fallback).
- `src/components/` — one component per section (`Hero`, `Research`, `NotifyModal`, `JoinUs`, `RoleList`, `Footer`), each with its own CSS file.

## Contact addresses

`hello@argonrobotics.ai` (general, "Get notified") and `careers@argonrobotics.ai` (roles) are set in `src/content/site.ts`. Locations: San Francisco for the research and robotics roles, Bengaluru for Member of Technical Staff.
