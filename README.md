# Novum — landing page

Vite + React + TypeScript. Static site, no backend.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Deploying

The site is hosted on Vercel from this repo: every push to `main` deploys, and pull requests get preview URLs. `vercel.json` rewrites all paths to `index.html` (so `/careers` loads directly) and sets long cache headers on `/media`. The default build base is `/`, for the root domain.

`.github/workflows/pages.yml` still publishes a copy to GitHub Pages at https://codnay.github.io/novum/ with `VITE_BASE=/novum/`; delete the workflow if that mirror is not wanted.

## Where things live

- `src/content/site.ts` — every piece of copy, the three clips, and the open roles. Edit here first.
- `src/pages/` — `Home` (front page) and `Careers` (`/careers`, the open roles). Routing is `react-router-dom`; the host must serve `index.html` for unknown paths (SPA fallback).
- `src/components/` — one component per section (`Hero`, `Comparison`, `Research`, `NotifyModal`, `JoinUs`, `RoleList`, `Footer`), each with its own CSS file.
- `src/components/ClipPanel.tsx` — a looping video with a progress bar tied to the real footage.
- `public/media/` — the clips (H.264 MP4 + JPEG poster).

## Clips

Both come from the top camera of runs in the `PranayTest/piper-speedup-evals` dataset (PiPER bimanual plate hand-over):

| Slot | Run | Speed | Hand-over complete |
| --- | --- | --- | --- |
| Autonomous panel | `act_PhubR_c30_50k_best_reach_v6/2026-09-10T03-13-42` | 6.0× | 8.9 s after start |
| Teleop stand-in | `act_PhubR_50k_hub_prior/2026-09-10T02-16-08` | 1.0× | 39.6 s |

The teleop slot is a **stand-in**: it is a 1.0× policy run, not human teleoperation. Swap `public/media/teleop-standin-1x.mp4` for real teleop footage and update `completeAt` in `site.ts` before launch.

Clip `t = 0` is one second before the run start, so `completeAt` values in `site.ts` are the manifest's release time plus one second. Each clip is trimmed to end one second after the hand-over completes.

## "Get notified" form

The button on the paper card opens a modal that collects an email. It POSTs `{ email, source }` as JSON to `VITE_NOTIFY_ENDPOINT` (copy `.env.example` to `.env` and set it; Formspree, Buttondown, a Worker or an Apps Script URL all work). With no endpoint configured it falls back to opening a pre-filled email to hello@novum.build, so no address is lost.

## Contact addresses

`hello@novum.build` (general, "Get notified") and `careers@novum.build` (roles) are set in `src/content/site.ts`. Locations: San Francisco for the research and robotics roles, Bengaluru for Member of Technical Staff.

Clips are rotated 90° clockwise (`-vf transpose=1`, the top camera is mounted sideways) and encoded at a constant 30 fps (`-fps_mode cfr -r 30`) so the browser plays them without timing jitter. Both play at 1× real time; the tags say the autonomous policy was trained on data at the speed shown in the teleop panel.
