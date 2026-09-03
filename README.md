# site-facilitr

Static Astro reconstruction of facilitr.org for Cloudflare Pages review.

Source material, kept outside this repository:

- Public audit package: `facilitr-public-audit-2026-09-03.tar.gz`
- Sensitive read-only package attached to issue ALD-711

The sensitive package was used only to confirm WordPress completeness and asset availability. Do not commit SQL dumps, `wp-config.php`, credentials, private manifests, or unnecessary WordPress source.

## Commands

```bash
npm install
npm run build
npm run check:links
```

Cloudflare Pages build command: `npm run build`

Cloudflare Pages output directory: `dist`
