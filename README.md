# Argon Robotics — landing page

Vite + React + TypeScript. Static site, no backend.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Deploying

The site is hosted on Vercel from this repo at https://argonrobotics.ai: every push to `main` deploys, and pull requests get preview URLs. `vercel.json` rewrites all paths to `index.html`, so `/careers` loads directly. The default build base is `/`, for the root domain.

## Where things live

- `src/content/site.ts` — every piece of copy and the open roles. Edit here first.
- `src/pages/` — `Home` (front page) and `Careers` (`/careers`, the open roles). Routing is `react-router-dom`; the host must serve `index.html` for unknown paths (SPA fallback).
- `src/components/` — one component per section (`Hero`, `Research`, `NotifyModal`, `JoinUs`, `RoleList`, `Footer`), each with its own CSS file.

## "Get notified" form

The button on the paper card opens a modal that collects an email. It POSTs `{ email, source }` as JSON to `VITE_NOTIFY_ENDPOINT` (copy `.env.example` to `.env` and set it; Formspree, Buttondown, a Worker or an Apps Script URL all work). With no endpoint configured it falls back to opening a pre-filled email to hello@argonrobotics.ai, so no address is lost.

## Contact addresses

`hello@argonrobotics.ai` (general, "Get notified") and `careers@argonrobotics.ai` (roles) are set in `src/content/site.ts`. Locations: San Francisco for the research and robotics roles, Bengaluru for Member of Technical Staff.
