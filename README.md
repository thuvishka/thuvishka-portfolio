# Thuvishka Portfolio — exact HTML UI

This Next.js project serves the supplied portfolio HTML unchanged at `/portfolio.html` and displays it full-screen at the site root. The original HTML file is copied byte-for-byte to `public/portfolio.html`; its styling, content, animations, interactions, and scripts have not been edited.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Deploy

Push the project root to GitHub and connect the repository to Netlify. Use the Next.js framework preset and `npm run build`; leave the publish directory at its default so the Netlify Next.js Runtime plugin can handle it.
