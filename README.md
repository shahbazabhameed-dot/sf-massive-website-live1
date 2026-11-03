# SF MASSIVE Website

Static corporate website for SF MASSIVE, prepared for Cloudflare Workers static assets and Cloudflare Pages.

## Local preview

Open `index.html` in a browser, or serve the project root with any static file server.

## Cloudflare Workers deployment

The project includes `wrangler.jsonc` for the existing Worker name `sfmassivewebsite`. The `build.mjs` script creates a curated `dist/` output from the public website files and excludes the internal Word profile documents in the project root.

For Workers Builds, configure:

- Build command: `node build.mjs`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

Cloudflare Pages can instead deploy the generated `dist/` directory as the static output directory.

Do not commit private documents or credentials. Keep the existing contact and Formspree configuration in the source files unchanged.

## Deployment (automatic from GitHub)

The `sfmassivewebsite` Worker is connected to this GitHub repository (branch `main`). Every push to `main` runs `node build.mjs` and `npx wrangler deploy`, so commit and push changes to publish them. Manual dashboard uploads are no longer needed.

## Languages

English pages live at the site root and Arabic (RTL) pages live under `ar/`. Each page has a language switch button and `hreflang` links to its counterpart.
