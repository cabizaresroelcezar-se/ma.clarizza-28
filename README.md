# follosoclarizza

Personal site for Clarizza — a small Astro + Tailwind site celebrating Ma. Clarizza's 28th birthday.

**Live demo:** https://cabizaresroelcezar-se.github.io/ma.clarizza-28

## Development

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Build and preview the production site locally:

```bash
npm run build
npm run preview
```

## Deployment (GitHub Pages)

- This project is published to the `gh-pages` branch and served at the URL shown above.
- The site is built with Astro; the `astro.config.mjs` `base` is set to `/ma.clarizza-28/` to match the Pages path.
- The deployment flow used in this repository places the `dist/` output on the `gh-pages` branch and includes a `.nojekyll` file so `_astro` assets are served correctly.

Automated deployment is also provided via GitHub Actions (`.github/workflows/gh-pages.yml`) which runs the build and publishes `dist` on pushes to `main`.

## Notes & troubleshooting

- If the site shows stale styles or missing assets after a change, hard-refresh the browser (or open in an incognito window) to clear cached HTML/CSS.
- If you want to push from your machine over SSH, add your SSH public key to your GitHub account (Settings → SSH and GPG keys). An ed25519 key was generated during setup — add that key and switch `origin` to the SSH URL if preferred.
- When publishing, ensure `astro.config.mjs` `base` matches the repo Pages path. Also keep `.nojekyll` in the deployment root to prevent GitHub Pages from ignoring underscored build folders like `_astro`.

## Repo rename

The repository was renamed for GitHub Pages hosting. The canonical repo name used for deployment is `ma.clarizza-28`.

---
If you want the original Astro starter README, see the project template at https://astro.build
