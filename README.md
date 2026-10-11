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
