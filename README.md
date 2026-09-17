# Aerochrise Portfolio

A responsive React + Vite portfolio for Aerochrise Kim Melendres.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The production files are created in `dist/`.

## Cloudflare Pages

1. Push this project to a GitHub repository.
2. In Cloudflare, open **Workers & Pages** and create a Pages project connected to GitHub.
3. Select this repository.
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Deploy.
7. In your Pages project, add your custom domain (for example `aerochrise.com`).

Cloudflare will provide HTTPS/SSL for the custom domain.

## Customize

The main content is in `src/main.jsx`.
Visual styling is in `src/styles.css`.

Replace the three placeholder projects with real public projects, screenshots, demos, or case studies when ready.
