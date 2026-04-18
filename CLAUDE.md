# Gravid Doktor

A Swedish information site for pregnant doctors in Stockholm — rights, obligations, and routines at the workplace. Content is institutional in tone, clinical in style, and Stockholm-specific.

**Production:** https://graviddoktor.se (+ `www.graviddoktor.se`)
**Repo:** https://github.com/Widaeus/graviddoktor (public)

---

## Tech stack

- **Build:** Vite 6 + React 18 (SPA, client-rendered; no SSR)
- **Styling:** vanilla CSS in a single `src/styles.css` (no CSS-in-JS, no preprocessor)
- **Hosting:** Cloudflare Workers with static assets (NOT Cloudflare Pages — the project was migrated to Workers during setup, per Cloudflare's current direction)
- **Domain:** `graviddoktor.se` registered at **Loopia**, DNS delegated to **Cloudflare** nameservers (`*.ns.cloudflare.com`)
- **CI/CD:** push to `main` → Cloudflare builds via GitHub integration → live in ~30–60 s

Fonts: Google Fonts (Source Serif 4, Inter Tight, JetBrains Mono) — loaded via `<link>` in `index.html`.

---

## Repository layout

```
graviddoktor/
├── index.html                  Vite entry (viewport, fonts, meta, #root mount)
├── vite.config.js              Vite + @vitejs/plugin-react
├── package.json                Scripts: dev / build / preview
├── public/
│   └── favicon.svg             GD monogram
├── src/
│   ├── main.jsx                React root, imports App + styles.css
│   ├── App.jsx                 Shell — Rail + Nav + <main className="stage"> with 8 page sections + End
│   ├── styles.css              All styling (~1150 lines incl. mobile block at end)
│   ├── data/
│   │   └── pages.js            PAGES array (8 chapters: id, num, label, title)
│   ├── hooks/
│   │   └── scroll.js           useScroll (rAF-throttled), useReveal (IntersectionObserver), useActivePage
│   ├── components/
│   │   ├── Rail.jsx            72px dark-blue left rail with big kap. number + 8 dots (desktop only)
│   │   ├── Nav.jsx             Secondary nav (desktop side column OR mobile top bar w/ hamburger)
│   │   ├── End.jsx             Dark-blue end footer
│   │   ├── PageHead.jsx        Shared chapter header (num + title + lede + meta)
│   │   └── Geo.jsx             5 decorative SVG components (GeoArcs/Grid/Cross/Square/Scale)
│   └── pages/                  One file per chapter — order matches PAGES
│       ├── Hero.jsx            01 Hem / Översikt (manifesto + TOC)
│       ├── Arbetsmiljo.jsx     02 Arbetsmiljö & riskbedömning
│       ├── Foraldra.jsx        03 Föräldraledighet
│       ├── Ersattning.jsx      04 Ersättning & försäkring
│       ├── Avstangning.jsx     05 Avstängning från arbete
│       ├── FAQ.jsx             06 Vanliga frågor
│       ├── Resurser.jsx        07 Resurser & länkar
│       └── Kontakt.jsx         08 Kontakt & stöd
├── reference_docs/             Research source material per chapter (not bundled)
├── docs/
│   └── superpowers/plans/      Implementation plans
├── .design-source/             Original Claude Design export the site was ported from (kept for reference)
└── CLAUDE.md                   This file
```

### How the pages tie together
- Every chapter `<section>` carries `data-page="<id>"` where `<id>` matches the `PAGES` array.
- `useActivePage` reads scroll position and returns the index of the section currently in view.
- `Rail` and `Nav` both consume that index to highlight the current chapter and animate the rail number.
- `useReveal` adds `.in` to any `.reveal`-marked element as it enters the viewport (triggers CSS transitions for fade-up).
- Clicking a nav item calls `scrollIntoView` with `behavior: 'smooth'` on the target section.

---

## Development

```bash
npm install          # first time only
npm run dev          # http://localhost:5173 (add --host 0.0.0.0 for LAN)
npm run build        # outputs dist/
npm run preview      # serves dist/ locally on 4173
```

Node 20+ recommended.

### Editing content

Most content is inline JSX in `src/pages/*.jsx`. Data arrays live at the top of each page file where relevant:
- FAQ questions → `FAQ_ITEMS` in `src/pages/FAQ.jsx`
- Resource links → `RESOURCES` in `src/pages/Resurser.jsx`
- Contact cards → inline JSX in `src/pages/Kontakt.jsx`
- Chapter metadata (titles, nav labels) → `src/data/pages.js`

Research material under `reference_docs/` is organized by chapter and is the primary source for content edits.

### Responsive layout

Desktop layout is fixed above 768 px (left rail + side nav + content column at `margin-left: 304px`). Below 768 px, a `@media (max-width: 768px)` block at the end of `src/styles.css` takes over:
- Rail hidden
- Side nav → fixed 56 px top bar with a hamburger that expands to full-height drawer (`.nav--open`)
- Multi-column grids (page heads, rows, tiles, hero body, callouts) stack to single column
- Type sizes and padding tightened

The hamburger toggle is the only piece of mobile-specific React state — lives in `Nav.jsx` as a local `useState`.

---

## Deployment

**Pipeline:**
1. `git push` to `main` on GitHub
2. Cloudflare's GitHub integration runs `npm run build`
3. New Worker version serves `dist/` as static assets
4. `https://graviddoktor.se` reflects the change within ~30–60 s (rarely over 2 min)

**No manual deploy step** is needed. If the auto-deploy ever fails, you can fall back to:
```bash
npx wrangler deploy          # or, for Pages projects: wrangler pages deploy dist
```

### Cloudflare setup

- Account: `jacob.widaeus@gmail.com` (account ID `2eb145481e5a6f72c232c3f571e19a72`)
- Worker name: `graviddoktor`
- Custom domains attached: `graviddoktor.se`, `www.graviddoktor.se`
- `workers.dev` subdomain: enabled (`graviddoktor.jacob-widaeus.workers.dev`) but not used in production
- Cloudflare Access: **off** for this Worker (public site)
- Build config: framework preset Vite, command `npm run build`, output `dist`, `NODE_VERSION=20`

### DNS

- Registrar: **Loopia**
- Nameservers at Loopia are set to the two Cloudflare nameservers assigned to the zone (visible in Cloudflare → graviddoktor.se zone → Overview)
- DNSSEC: disabled at Loopia (must stay off unless Cloudflare's DNSSEC keys are explicitly registered at the registrar)
- DNS records for the site (CNAME apex + www) are created automatically when attaching the custom domain on the Worker

### Re-establishing a broken deploy

If the Worker stops serving or the GitHub integration disconnects:
1. Check Cloudflare Dashboard → Workers & Pages → graviddoktor → Deployments for error logs
2. For a quick manual redeploy after a clean local build: `npm run build && npx wrangler deploy`
3. If the Worker was accidentally deleted, recreate it via the dashboard with framework preset Vite and reconnect to `Widaeus/graviddoktor` on branch `main`

---

## History & context

- Design was drafted in Claude Design (claude.ai/design) and exported as an HTML/JSX prototype. The export is preserved at `.design-source/` for reference.
- The prototype used in-browser Babel with `window.X` globals to share code between separate `<script>` tags. The production port replaced that with proper ES module imports.
- The Tweaks panel (color / density / motion toggles) from the prototype was removed — it was an edit-mode feature tied to the Claude Design iframe and isn't relevant in production.
- Cloudflare migrated the project from Pages to Workers+Assets during the initial deploy. The old Pages project (`graviddoktor.pages.dev`) was deleted; only the Worker exists now.

---

## Out of scope / future

- SEO beyond basic `<title>` + `<meta name="description">` (no Open Graph, JSON-LD, sitemap yet)
- Analytics (Cloudflare Web Analytics would be a one-click add)
- Dark mode, language switcher
- Accessibility audit (keyboard focus rings, reduced-motion respect, semantic heading hierarchy)
- Search / index across chapters
- Legal/terms page, cookie banner (none needed yet — no tracking, no cookies)
