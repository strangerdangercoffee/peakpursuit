# Peak Pursuit

Everest-region trekking company website, built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

This is a rewrite of the original static multi-page HTML site. Structure and functionality are preserved; styling now runs through the Tailwind pipeline (design tokens live in the Tailwind theme, shared component classes in `app/globals.css`). All data and interactions are in-memory and client-side, matching the original.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm start` (serve the build), `npm run lint`.

## Structure

```
app/
  layout.tsx            Root layout (html/body, global reveal observer)
  globals.css           Tailwind directives + shared design system
  (site)/               Public pages, wrapped with Nav + Footer
    layout.tsx
    page.tsx            Home  (/)
    home.css
    treks/page.tsx      Treks (/treks)        — ?trek= deep-link
    prepare/page.tsx    Prepare (/prepare)
    gear/page.tsx       Gear rental (/gear)
    book/page.tsx       Booking flow (/book)  — ?trek= deep-link
  admin/page.tsx        Guide portal (/admin) — own layout, no site chrome
components/
  Nav.tsx, Footer.tsx, RevealObserver.tsx
public/images/          Site imagery
legacy/                 Original static HTML (kept for reference)
```

Routes map from the old files: `index.html` → `/`, `treks.html` → `/treks`,
`prepare.html` → `/prepare`, `gear.html` → `/gear`, `book.html` → `/book`,
`admin.html` → `/admin`. Query strings (e.g. `?trek=ebc`) are preserved.
