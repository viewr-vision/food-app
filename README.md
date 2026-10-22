# Argon Robotics — website

A single static page: `index.html` holds the markup, styles and scripts. There are no dependencies; the build copies `index.html` and `public/` into `dist/`.

```bash
npm run build    # outputs dist/
npm run dev      # builds, then serves dist/ at http://localhost:3000
```

## Deploying

Hosted on Vercel from this repo at https://argonrobotics.ai. Every push to `main` deploys; pull requests get preview URLs.

## Where things live

- `index.html` — the home page and every post. Posts are `<article data-view="…">` blocks, each at its own address (`/vision`, `/discovery`, `/simreal`). The build writes a copy of the page per post with that post's title, so direct links and link previews work; old `/#id` links redirect to `/id`.
- The post list on the home page is the `posts` array in the first `<script>` at the bottom of `index.html`. Add an entry there when you add a post.
- `public/img/` — Discovery-0 figures (`d0-*.jpg`).
- `public/img/pool/` — the 98 frames for "The Turing test for virtual worlds". Answers are the `POOL` array in the game script (`1` = real, `0` = sim); file names are shuffled so they don't give the answer away.
