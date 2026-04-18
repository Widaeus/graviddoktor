# Gravid Doktor Website Launch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Launch `graviddoktor.se` — a Swedish guide for pregnant doctors in Stockholm — by porting the Claude Design prototype to a production Vite+React build deployed on Cloudflare Pages with the custom domain.

**Architecture:** Static single-page React site built with Vite. The design source at `.design-source/project/` (persisted copy from the Claude Design export) is ported into `src/` as proper ES modules (replacing the prototype's `window.X` global pattern and in-browser Babel). The Claude-Design-specific edit-mode handshake and Tweaks panel are removed. Repo hosted on GitHub (public); Cloudflare Pages auto-deploys on push to `main`. Custom domain served via Cloudflare (nameservers moved from Loopia → Cloudflare).

**Tech stack:** Vite 5, React 18, vanilla CSS, GitHub, Cloudflare Pages, Wrangler CLI.

**Scope note — on TDD:** This plan is mostly scaffolding + mechanical JSX ports + deploy wiring. Classic TDD (failing test → minimal code) does not fit; there is no behavior to assert beyond "does the page render." Validation is smoke-level: `npm run dev` renders all 8 chapters, `npm run build` succeeds, deployed site loads at custom domain. Each task ends with explicit verify steps.

**Out of scope (explicitly deferred — user will iterate after go-live):**
- Responsive/mobile layout (design is fixed `width=1280`; keep as-is for v1)
- SEO meta tags beyond basic title + description
- Analytics
- Tweaks UI panel (removed — it was a Claude Design editing feature)
- Content edits beyond the prototype's text

---

## File Structure

Target layout at `/home/jacob-widaeus/Projects/Dev/graviddoktor/`:

```
graviddoktor/
├── .gitignore                  # node_modules, dist, .env
├── README.md                   # short project readme
├── index.html                  # Vite entry (replaces design's "Gravid Doktor.html")
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg             # simple clinical favicon (GD monogram)
├── src/
│   ├── main.jsx                # React root entry
│   ├── App.jsx                 # from design/app.jsx — refactored to imports
│   ├── styles.css              # from design/styles.css — EDITMODE stripped, tweaks CSS removed
│   ├── data/
│   │   └── pages.js            # PAGES array (from design/pages-data.jsx)
│   ├── hooks/
│   │   └── scroll.js           # useScroll, useReveal, useActivePage
│   ├── components/
│   │   ├── Rail.jsx            # left-rail nav (from design/app.jsx:Rail)
│   │   ├── Nav.jsx             # secondary nav (from design/app.jsx:Nav)
│   │   ├── End.jsx             # footer (from design/app.jsx:End)
│   │   ├── PageHead.jsx        # shared page header (from design/page-arbetsmiljo.jsx:PageHead)
│   │   └── Geo.jsx             # GeoArcs, GeoGrid, GeoCross, GeoSquare, GeoScale
│   └── pages/
│       ├── Hero.jsx            # from design/page-hero.jsx
│       ├── Arbetsmiljo.jsx     # from design/page-arbetsmiljo.jsx
│       ├── Foraldra.jsx        # from design/page-foraldra.jsx
│       ├── Ersattning.jsx      # from design/page-ersattning.jsx
│       ├── Avstangning.jsx     # from design/page-avstangning.jsx
│       ├── FAQ.jsx             # from design/page-rest.jsx
│       ├── Resurser.jsx        # from design/page-rest.jsx
│       └── Kontakt.jsx         # from design/page-rest.jsx
├── generell_info/              # existing research, untouched
└── docs/
    └── superpowers/plans/2026-04-18-graviddoktor-website-launch.md
```

The design prototype keeps helpers (hooks, PAGES array, Geo components) shared via `window.*` globals because it used in-browser Babel with separate `<script>` tags. In the Vite build we replace every `window.X` reference with an `import`.

---

## Task 1: Scaffold Vite + React project

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx` (stub), `src/styles.css` (stub), `.gitignore`, `README.md`, `public/.gitkeep`

- [ ] **Step 1: Create `.gitignore`**

File: `/home/jacob-widaeus/Projects/Dev/graviddoktor/.gitignore`

```
node_modules
dist
.env
.env.local
.DS_Store
*.log
.wrangler
```

- [ ] **Step 2: Create `package.json`**

File: `/home/jacob-widaeus/Projects/Dev/graviddoktor/package.json`

```json
{
  "name": "graviddoktor",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^5.4.10"
  }
}
```

- [ ] **Step 3: Create `vite.config.js`**

File: `/home/jacob-widaeus/Projects/Dev/graviddoktor/vite.config.js`

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
```

- [ ] **Step 4: Create `index.html`**

File: `/home/jacob-widaeus/Projects/Dev/graviddoktor/index.html`

```html
<!doctype html>
<html lang="sv">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=1280" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>Gravid Doktor — Handbok 2026</title>
    <meta name="description" content="Rättigheter, skyldigheter och rutiner för dig som är läkare och gravid i Stockholm." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..700;1,8..60,300..700&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Note: `viewport width=1280` preserves the prototype's fixed-width design. Mobile work is explicitly deferred.

- [ ] **Step 5: Create stub `src/main.jsx`**

File: `/home/jacob-widaeus/Projects/Dev/graviddoktor/src/main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- [ ] **Step 6: Create stub `src/App.jsx`**

File: `/home/jacob-widaeus/Projects/Dev/graviddoktor/src/App.jsx`

```jsx
export default function App() {
  return <div style={{ padding: 40 }}>Gravid Doktor — scaffold works</div>;
}
```

- [ ] **Step 7: Create empty `src/styles.css`**

File: `/home/jacob-widaeus/Projects/Dev/graviddoktor/src/styles.css`

```css
/* populated in Task 3 */
```

- [ ] **Step 8: Create placeholder favicon**

File: `/home/jacob-widaeus/Projects/Dev/graviddoktor/public/favicon.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#0A2540"/>
  <text x="32" y="42" font-family="Georgia, serif" font-size="34" font-style="italic" fill="#2E7BC4" text-anchor="middle">G</text>
</svg>
```

- [ ] **Step 9: Create short `README.md`**

File: `/home/jacob-widaeus/Projects/Dev/graviddoktor/README.md`

```markdown
# Gravid Doktor

En guide för läkare i Stockholm som är gravida — rättigheter, skyldigheter och rutiner.

## Utveckling

```
npm install
npm run dev
```

## Produktion

```
npm run build
```

Build-artefakter hamnar i `dist/` och deployas till Cloudflare Pages.
```

- [ ] **Step 10: Install dependencies**

Run:
```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && npm install
```
Expected: creates `node_modules/` and `package-lock.json`, no errors.

- [ ] **Step 11: Verify dev server boots**

Run:
```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && timeout 8 npm run dev -- --port 5173 2>&1 | head -20
```
Expected: `VITE vX.Y.Z  ready in ... ms` and `Local:   http://localhost:5173/`.

- [ ] **Step 12: Initial commit**

Run:
```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && git init -b main && git add . && git commit -m "chore: scaffold Vite + React project"
```

---

## Task 2: Port PAGES data + scroll hooks + Geo components

**Files:**
- Create: `src/data/pages.js`, `src/hooks/scroll.js`, `src/components/Geo.jsx`

- [ ] **Step 1: Create `src/data/pages.js`**

```js
export const PAGES = [
  { id: 'hem',              num: '01', label: 'Hem / Översikt',              title: 'Hem' },
  { id: 'arbetsmiljo',      num: '02', label: 'Arbetsmiljö & riskbedömning', title: 'Arbetsmiljö' },
  { id: 'foraldraledighet', num: '03', label: 'Föräldraledighet',            title: 'Föräldraledighet' },
  { id: 'ersattning',       num: '04', label: 'Ersättning & försäkring',     title: 'Ersättning' },
  { id: 'avstangning',      num: '05', label: 'Avstängning från arbete',     title: 'Avstängning' },
  { id: 'faq',              num: '06', label: 'Vanliga frågor',              title: 'Vanliga frågor' },
  { id: 'resurser',         num: '07', label: 'Resurser & länkar',           title: 'Resurser' },
  { id: 'kontakt',          num: '08', label: 'Kontakt & stöd',              title: 'Kontakt' },
];
```

- [ ] **Step 2: Create `src/hooks/scroll.js`**

```js
import { useEffect, useState } from 'react';

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return { scrollY };
}

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function useActivePage() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-page]'));
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let idx = 0;
      sections.forEach((s, i) => {
        if (s.offsetTop <= y) idx = i;
      });
      setActive(idx);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return active;
}
```

- [ ] **Step 3: Create `src/components/Geo.jsx`**

Copy the 5 SVG components from `.design-source/project/geo.jsx`, drop the `Object.assign(window, ...)` line, and export each as a named export. Result:

```jsx
export const GeoArcs = ({ opacity = 0.6 }) => (
  <svg viewBox="0 0 400 400" style={{ opacity }}>
    <g className="spin">
      <circle cx="200" cy="200" r="180" fill="none" stroke="#2E7BC4" strokeWidth="0.5" strokeDasharray="2 4" />
      <circle cx="200" cy="200" r="140" fill="none" stroke="#2E7BC4" strokeWidth="0.5" />
    </g>
    <circle cx="200" cy="200" r="100" fill="none" stroke="#143D8A" strokeWidth="0.5" />
    <path d="M 60 200 A 140 140 0 0 1 340 200" fill="none" stroke="#2E7BC4" strokeWidth="1.5" />
    <circle cx="200" cy="200" r="4" fill="#2E7BC4" className="breathe" />
  </svg>
);

export const GeoGrid = ({ opacity = 0.25 }) => (
  <svg viewBox="0 0 600 400" style={{ opacity }}>
    <defs>
      <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.7" fill="#2E7BC4" />
      </pattern>
    </defs>
    <rect width="600" height="400" fill="url(#dots)" />
  </svg>
);

export const GeoCross = ({ opacity = 0.9 }) => (
  <svg viewBox="0 0 200 200" style={{ opacity }}>
    <line x1="100" y1="0" x2="100" y2="200" stroke="#2E7BC4" strokeWidth="0.5" />
    <line x1="0" y1="100" x2="200" y2="100" stroke="#2E7BC4" strokeWidth="0.5" />
    <circle cx="100" cy="100" r="60" fill="none" stroke="#143D8A" strokeWidth="1" />
    <circle cx="100" cy="100" r="30" fill="none" stroke="#2E7BC4" strokeWidth="1" className="breathe" />
  </svg>
);

export const GeoSquare = ({ opacity = 0.7 }) => (
  <svg viewBox="0 0 300 300" style={{ opacity }}>
    <g className="spin" style={{ animationDuration: '160s' }}>
      <rect x="50" y="50" width="200" height="200" fill="none" stroke="#2E7BC4" strokeWidth="0.5" transform="rotate(15 150 150)" />
      <rect x="80" y="80" width="140" height="140" fill="none" stroke="#143D8A" strokeWidth="0.5" transform="rotate(-10 150 150)" />
    </g>
    <rect x="110" y="110" width="80" height="80" fill="none" stroke="#2E7BC4" />
  </svg>
);

export const GeoScale = ({ opacity = 0.6 }) => (
  <svg viewBox="0 0 400 100" style={{ opacity }}>
    {Array.from({ length: 42 }).map((_, i) => (
      <line key={i} x1={i * 10} x2={i * 10} y1="50" y2={i % 5 === 0 ? '20' : i % 2 === 0 ? '38' : '44'} stroke="#2E7BC4" strokeWidth="0.5" />
    ))}
    <line x1="0" y1="50" x2="420" y2="50" stroke="#2E7BC4" strokeWidth="0.5" />
  </svg>
);
```

- [ ] **Step 4: Commit**

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && git add -A && git commit -m "feat: port PAGES data, scroll hooks, and Geo components"
```

---

## Task 3: Port `styles.css`

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Copy design CSS**

Copy the entire contents of `.design-source/project/styles.css` into `src/styles.css`.

- [ ] **Step 2: Strip Tweaks-panel CSS (no longer used)**

Remove the block between the `/* ---------- tweaks panel ---------- */` comment and the `/* ---------- footer (end of site) ---------- */` comment (the `.tweaks`, `.tweak`, `.tweak__*` selectors). Tweaks UI is being removed in Task 4.

- [ ] **Step 3: Add density/motion body-class rules (from the original inline `<style>`)**

Append to the end of `src/styles.css`:

```css
/* density + motion toggles (reserved for future URL-driven tweaks) */
body.motion-off .spin,
body.motion-off .breathe { animation: none !important; }
body.density-compact .page { padding: 56px 56px 80px; }
body.density-compact .page__head { padding-bottom: 28px; margin-bottom: 36px; }
body.density-compact .section { padding: 28px 0; }
body.density-compact .page__title { font-size: 44px; }
body.density-compact .page__num { font-size: 72px; }
```

- [ ] **Step 4: Verify CSS loads**

Run:
```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && timeout 8 npm run dev -- --port 5173 2>&1 | head -5
```
Expected: starts without error. (Visual check deferred until Task 8.)

- [ ] **Step 5: Commit**

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && git add -A && git commit -m "feat: port styles.css, strip tweaks panel"
```

---

## Task 4: Port Rail, Nav, End, PageHead components

**Files:**
- Create: `src/components/Rail.jsx`, `src/components/Nav.jsx`, `src/components/End.jsx`, `src/components/PageHead.jsx`

- [ ] **Step 1: Create `src/components/Rail.jsx`**

From `design/app.jsx:Rail` — replace `window.PAGES` with an import:

```jsx
import { PAGES } from '../data/pages.js';

export default function Rail({ active }) {
  const page = PAGES[active] || PAGES[0];
  return (
    <aside className="rail">
      <div className="rail__mark">G<br/>D</div>
      <div className="rail__num" key={page.num}>
        <span style={{ transition: 'all .4s' }}>{page.num}</span>
        <small>kap.</small>
      </div>
      <div className="rail__dots">
        {PAGES.map((p, i) => (
          <div
            key={p.id}
            className={`rail__dot ${i === active ? 'is-active' : ''}`}
            data-label={p.num + ' · ' + p.title}
            onClick={() => document.querySelector(`[data-page="${p.id}"]`)?.scrollIntoView({ behavior: 'smooth' })}
          />
        ))}
      </div>
    </aside>
  );
}
```

- [ ] **Step 2: Create `src/components/Nav.jsx`**

```jsx
import { PAGES } from '../data/pages.js';

export default function Nav({ active }) {
  return (
    <nav className="nav">
      <div className="nav__eyebrow">Handbok · 2026:1</div>
      <div className="nav__title">Gravid <em>Doktor</em></div>
      <p className="nav__sub">Rättigheter, skyldigheter och rutiner för dig som är läkare och gravid i Stockholm.</p>
      <ul className="nav__list">
        {PAGES.map((p, i) => (
          <li
            key={p.id}
            className={`nav__item ${i === active ? 'is-active' : ''}`}
            onClick={() => document.querySelector(`[data-page="${p.id}"]`)?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="nav__item__num">{p.num}</span>
            <span className="nav__item__label">{p.label}</span>
          </li>
        ))}
      </ul>
      <div className="nav__foot">
        <strong>Källor</strong>
        AML · AFS 2007:5<br/>
        FLL · SFB · AB 2023<br/>
        Socialstyrelsen HSLF-FS
      </div>
    </nav>
  );
}
```

- [ ] **Step 3: Create `src/components/End.jsx`**

```jsx
export default function End() {
  return (
    <footer className="end">
      <div className="end__t">En handbok av <em>läkare</em>, för <em>läkare</em> — utgiven 2026.</div>
      <div className="end__meta">
        <div>Utg. 2026:1 · rev. 2026-04-12</div>
        <div>Fritt att sprida · Icke-kommersiellt</div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Create `src/components/PageHead.jsx`**

Extracted from `design/page-arbetsmiljo.jsx`:

```jsx
export default function PageHead({ num, title, titleEm, lede, eyebrow, ed }) {
  return (
    <header className="page__head reveal">
      <div className="page__num">{num}</div>
      <div>
        <h2 className="page__title">
          {title}
          {titleEm ? <><br/><em>{titleEm}</em></> : null}
        </h2>
        <p className="page__lede">{lede}</p>
      </div>
      <div className="page__meta">
        <span>{eyebrow}</span>
        <span><strong>{ed || 'Ed. 2026/I'}</strong></span>
        <span>läs: 6 min</span>
      </div>
    </header>
  );
}
```

- [ ] **Step 5: Commit**

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && git add -A && git commit -m "feat: port Rail, Nav, End, PageHead components"
```

---

## Task 5: Port Hero page

**Files:**
- Create: `src/pages/Hero.jsx`

- [ ] **Step 1: Create `src/pages/Hero.jsx`**

From `design/page-hero.jsx` — replace `window.PAGES` → import, `window.GeoSquare`/`GeoScale` → imports, `useScroll` → import, drop `window.Hero = Hero`:

```jsx
import { PAGES } from '../data/pages.js';
import { useScroll } from '../hooks/scroll.js';
import { GeoSquare, GeoScale } from '../components/Geo.jsx';

export default function Hero() {
  const { scrollY } = useScroll();
  return (
    <section className="hero page" data-page="hem" data-screen-label="01 Hem">
      <div className="hero__geo">
        <div
          className="mark"
          style={{ left: 40, bottom: 260, width: 300, height: 300, opacity: 0.5, transform: `translateY(${scrollY * 0.08}px)` }}
        >
          <GeoSquare opacity={0.5} />
        </div>
        <div className="mark" style={{ right: 180, bottom: 180, width: 200, height: 50, opacity: 0.5 }}>
          <GeoScale />
        </div>
      </div>

      <div className="hero__top">
        <span><strong>Gravid Doktor</strong> — En guide för läkare i Stockholm</span>
        <span><span>Senast rev. 2026-04-12</span></span>
      </div>

      <div className="hero__body">
        <div>
          <h1 className="hero__title">
            Att vara <em>läkare</em>,<br/>
            att vara <em>gravid</em>,<br/>
            att vara <em>trygg</em>.
          </h1>
        </div>
        <div>
          <p className="hero__manifesto">
            Som läkare arbetar du i en miljö där patientens behov står i centrum — men under graviditeten är det <em>ditt</em> arbete, <em>din</em> kropp och <em>ditt</em> barn som kräver uppmärksamhet. Denna guide samlar de rättigheter, skyldigheter och rutiner som gäller dig som gravid läkare i Stockholm: från riskbedömning på avdelningen till föräldraledighet, ersättning och det stöd du har rätt till av arbetsgivaren.
          </p>
          <div className="hero__toc">
            <div className="hero__toc__t">Innehåll — åtta kapitel</div>
            <ol className="hero__toc__list">
              {PAGES.map((p) => (
                <li key={p.id} onClick={() => document.querySelector(`[data-page="${p.id}"]`)?.scrollIntoView({ behavior: 'smooth' })}>
                  <span className="hero__toc__n">{p.num}</span>
                  <span className="hero__toc__x">{p.label}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && git add -A && git commit -m "feat: port Hero page"
```

---

## Task 6: Port Arbetsmiljö, Föräldra, Ersättning, Avstängning pages

These four pages follow an identical port pattern:

- Copy each page component's body verbatim from its design source file
- Replace `<PageHead ... />` usage with `import PageHead from '../components/PageHead.jsx';`
- Add `export default` in front of the component declaration
- Drop the trailing `window.PageX = PageX` lines
- No other changes

**Files:**
- Create: `src/pages/Arbetsmiljo.jsx`, `src/pages/Foraldra.jsx`, `src/pages/Ersattning.jsx`, `src/pages/Avstangning.jsx`

- [ ] **Step 1: Create `src/pages/Arbetsmiljo.jsx`**

Start the file with:
```jsx
import PageHead from '../components/PageHead.jsx';

export default function Arbetsmiljo() {
```
Then paste the JSX `return (...)` body (lines 22–128) from `.design-source/project/page-arbetsmiljo.jsx`. Close with `}`. Do **not** include the original `PageHead` definition (already in `components/PageHead.jsx`) or the `window.*` assignments.

- [ ] **Step 2: Create `src/pages/Foraldra.jsx`**

Same pattern, sourcing from `.design-source/project/page-foraldra.jsx` (lines 2–115 of that file):
```jsx
import PageHead from '../components/PageHead.jsx';

export default function Foraldra() {
  return (
    /* paste JSX from page-foraldra.jsx */
  );
}
```

- [ ] **Step 3: Create `src/pages/Ersattning.jsx`**

Same pattern, sourcing from `.design-source/project/page-ersattning.jsx`:
```jsx
import PageHead from '../components/PageHead.jsx';

export default function Ersattning() {
  return (
    /* paste JSX from page-ersattning.jsx */
  );
}
```

- [ ] **Step 4: Create `src/pages/Avstangning.jsx`**

Same pattern, sourcing from `.design-source/project/page-avstangning.jsx`:
```jsx
import PageHead from '../components/PageHead.jsx';

export default function Avstangning() {
  return (
    /* paste JSX from page-avstangning.jsx */
  );
}
```

- [ ] **Step 5: Verify no leftover `window.*` references**

Run:
```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && grep -n "window\." src/pages/ -r
```
Expected: no output (all references replaced with imports).

- [ ] **Step 6: Commit**

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && git add -A && git commit -m "feat: port Arbetsmiljo, Foraldra, Ersattning, Avstangning pages"
```

---

## Task 7: Port FAQ, Resurser, Kontakt pages

The design bundles these three in `page-rest.jsx`. We split them into one file per page.

**Files:**
- Create: `src/pages/FAQ.jsx`, `src/pages/Resurser.jsx`, `src/pages/Kontakt.jsx`

- [ ] **Step 1: Create `src/pages/FAQ.jsx`**

Top of file:
```jsx
import { useState } from 'react';
import PageHead from '../components/PageHead.jsx';

const FAQ_ITEMS = [
  /* paste FAQ_ITEMS array from page-rest.jsx, lines 2–35 */
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    /* paste <section className="page" data-page="faq" ... /> JSX from page-rest.jsx, lines 40–66 */
  );
}
```

Note: change `React.useState` (used in design/page-rest.jsx:38) to `useState` from the import.

- [ ] **Step 2: Create `src/pages/Resurser.jsx`**

```jsx
import PageHead from '../components/PageHead.jsx';

const RESOURCES = [
  /* paste RESOURCES array from page-rest.jsx, lines 70–79 */
];

export default function Resurser() {
  return (
    /* paste <section className="page" data-page="resurser" ... /> JSX from page-rest.jsx, lines 82–110 */
  );
}
```

- [ ] **Step 3: Create `src/pages/Kontakt.jsx`**

```jsx
import PageHead from '../components/PageHead.jsx';

export default function Kontakt() {
  return (
    /* paste <section className="page" data-page="kontakt" ... /> JSX from page-rest.jsx, lines 113–161 */
  );
}
```

- [ ] **Step 4: Commit**

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && git add -A && git commit -m "feat: port FAQ, Resurser, Kontakt pages"
```

---

## Task 8: Wire up `App.jsx` and verify locally

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Rewrite `src/App.jsx`**

Replace the stub from Task 1 with:

```jsx
import { useActivePage, useReveal } from './hooks/scroll.js';
import Rail from './components/Rail.jsx';
import Nav from './components/Nav.jsx';
import End from './components/End.jsx';
import Hero from './pages/Hero.jsx';
import Arbetsmiljo from './pages/Arbetsmiljo.jsx';
import Foraldra from './pages/Foraldra.jsx';
import Ersattning from './pages/Ersattning.jsx';
import Avstangning from './pages/Avstangning.jsx';
import FAQ from './pages/FAQ.jsx';
import Resurser from './pages/Resurser.jsx';
import Kontakt from './pages/Kontakt.jsx';

export default function App() {
  const active = useActivePage();
  useReveal();

  return (
    <>
      <Rail active={active} />
      <Nav active={active} />
      <main className="stage">
        <Hero />
        <Arbetsmiljo />
        <Foraldra />
        <Ersattning />
        <Avstangning />
        <FAQ />
        <Resurser />
        <Kontakt />
        <End />
      </main>
    </>
  );
}
```

Note: the design's Tweaks panel and `window.parent.postMessage` edit-mode handshake are intentionally omitted (out of scope).

- [ ] **Step 2: Run dev server and verify all 8 chapters render**

Run in one terminal:
```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && npm run dev -- --port 5173
```

In browser, open `http://localhost:5173/` and verify:
- Left rail (dark blue) shows the `GD` monogram and chapter number `01`
- Secondary nav shows 8 chapter titles, first one highlighted
- Hero renders with `Att vara läkare, att vara gravid, att vara trygg.`
- Scrolling down: rail chapter number morphs from 01 → 08; active nav item moves
- Clicking a nav item smooth-scrolls to that section
- FAQ page: clicking a question toggles the answer open/closed
- End footer renders at bottom in dark blue

If any page is blank, check the browser console for missing imports.

- [ ] **Step 3: Production build smoke-test**

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && npm run build
```
Expected: `dist/index.html`, `dist/assets/*.js`, `dist/assets/*.css` written; no errors.

- [ ] **Step 4: Preview production build**

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && timeout 8 npm run preview -- --port 4173 2>&1 | head -5
```
Expected: server on `http://localhost:4173/`; spot-check in browser again.

- [ ] **Step 5: Commit**

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && git add -A && git commit -m "feat: wire App.jsx with all 8 chapters"
```

---

## Task 9: Create GitHub repo and push

- [ ] **Step 1: Verify `gh` CLI is authenticated**

Run:
```
gh auth status
```
Expected: `Logged in to github.com as <username>`. If not, run `gh auth login` interactively (tell the user to type `! gh auth login`).

- [ ] **Step 2: Create public GitHub repo**

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && gh repo create graviddoktor --public --source=. --description "Gravid Doktor — guide för läkare i Stockholm" --push
```
Expected: repo created at `https://github.com/<user>/graviddoktor` and initial push completes.

- [ ] **Step 3: Verify remote is configured and branch pushed**

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && git remote -v && git branch -vv
```
Expected: `origin` points to the new GitHub URL; `main` tracks `origin/main`.

---

## Task 10: Create Cloudflare Pages project via Wrangler

The Cloudflare MCP tools don't include Pages management; use the Wrangler CLI.

- [ ] **Step 1: Install Wrangler as a dev dependency**

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && npm install -D wrangler
```

- [ ] **Step 2: Authenticate Wrangler**

Tell the user to run:
```
! npx wrangler login
```
(This opens a browser for OAuth — must be done interactively by the user.)

Expected: `Successfully logged in.`

- [ ] **Step 3: List Cloudflare accounts to confirm the right one**

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && npx wrangler whoami
```
Expected: shows the account email and account ID. If multiple accounts, note the account ID for `graviddoktor.se`.

- [ ] **Step 4: Create the Pages project**

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && npx wrangler pages project create graviddoktor --production-branch=main
```
Expected: `Successfully created the 'graviddoktor' project.` and a `*.graviddoktor.pages.dev` URL.

- [ ] **Step 5: Deploy the current build to Pages**

First rebuild to be safe:
```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && npm run build
```

Then deploy:
```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && npx wrangler pages deploy dist --project-name=graviddoktor --branch=main
```
Expected: upload succeeds; prints a preview URL like `https://<hash>.graviddoktor.pages.dev` and the production URL `https://graviddoktor.pages.dev`.

- [ ] **Step 6: Open the production URL and verify**

Open `https://graviddoktor.pages.dev/` in a browser. Verify same checklist as Task 8 Step 2 (rail, nav, hero, scroll, FAQ, end footer).

---

## Task 11: Connect GitHub for auto-deploy

The Wrangler CLI cannot connect a Pages project to a GitHub repo — that requires the Cloudflare dashboard.

- [ ] **Step 1: Guide user through dashboard connection**

Instruct the user (they must do this step in a browser):

1. Go to `https://dash.cloudflare.com/` → **Workers & Pages** → select **graviddoktor**.
2. Click **Settings** → **Builds & deployments** → **Manage build configuration**.
3. Click **Connect to Git** (or similar). Authorize Cloudflare's GitHub app if prompted.
4. Select the `graviddoktor` repo, branch `main`.
5. Build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** (leave blank / `/`)
   - **Node version:** `20` (set `NODE_VERSION=20` under Environment variables)
6. Save.

- [ ] **Step 2: Trigger a git-driven deploy by pushing an empty commit**

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && git commit --allow-empty -m "chore: trigger first git-driven Pages deploy" && git push
```

- [ ] **Step 3: Confirm the new deploy appears in the dashboard**

In Cloudflare Dashboard → graviddoktor → **Deployments**, confirm a new deploy triggered by the `main` push succeeds within ~2 minutes.

---

## Task 12: Add custom domain `graviddoktor.se`

This task assumes nameservers are being moved to Cloudflare. If the user later decides to keep Loopia nameservers, substitute Step 2 with a CNAME record at Loopia pointing `graviddoktor.se` and `www` → `graviddoktor.pages.dev` (note: apex CNAME requires Loopia ALIAS/ANAME support; if absent, nameserver transfer is the only clean option).

- [ ] **Step 1: Add site to Cloudflare**

Guide user to:
1. `https://dash.cloudflare.com/` → **+ Add a site** → enter `graviddoktor.se`.
2. Choose the **Free** plan.
3. Cloudflare scans existing DNS — confirm or skip.
4. Cloudflare shows **two assigned nameservers** (e.g. `kim.ns.cloudflare.com`, `lars.ns.cloudflare.com`). Copy them.

- [ ] **Step 2: Switch nameservers at Loopia**

Guide user to:
1. Log in at `https://customerzone.loopia.com/`.
2. **Mina domäner** → `graviddoktor.se` → **Namnservrar**.
3. Replace Loopia's nameservers with the two from Cloudflare.
4. Save.

Propagation: typically 10–60 minutes; can be up to 24 hours.

- [ ] **Step 3: Wait for Cloudflare to activate the zone**

Poll the domain status in the Cloudflare dashboard. Once it shows "Active" (green), move on. Rough check from terminal:

```
dig +short NS graviddoktor.se
```
Expected: returns Cloudflare nameservers once propagated.

- [ ] **Step 4: Attach the custom domain to Pages**

In Cloudflare Dashboard → **Workers & Pages** → **graviddoktor** → **Custom domains** → **Set up a custom domain**:

1. Add `graviddoktor.se` — Cloudflare auto-creates the CNAME.
2. Add `www.graviddoktor.se` — Cloudflare auto-creates the CNAME.
3. TLS certificates are issued automatically within ~1–5 minutes.

- [ ] **Step 5: (Optional) Set a redirect from `www` to apex**

In **Rules** → **Redirect Rules** (or "Bulk Redirects"), add:
- From: `www.graviddoktor.se/*`
- To: `https://graviddoktor.se/$1`
- Status: 301

---

## Task 13: Final verification

- [ ] **Step 1: Verify apex domain**

Open `https://graviddoktor.se/` in a browser. Expected:
- TLS lock is valid (no cert warning)
- All 8 chapters render
- Scroll interactions work (rail morphs, nav highlights)
- FAQ toggles
- No console errors

- [ ] **Step 2: Verify `www` redirect**

Open `https://www.graviddoktor.se/`. Expected: 301 to apex (or serves same content, depending on Step 5 above).

- [ ] **Step 3: Verify git-push-to-deploy loop**

Make a trivial content edit — change the hero's `Senast rev. 2026-04-12` to `2026-04-18` in `src/pages/Hero.jsx`. Commit and push:

```
cd /home/jacob-widaeus/Projects/Dev/graviddoktor && git add src/pages/Hero.jsx && git commit -m "content: bump revision date" && git push
```

Watch Cloudflare Dashboard → Deployments → wait for the new build to complete (~1–2 min). Reload `https://graviddoktor.se/` — new date visible in the hero top strip.

- [ ] **Step 4: Tell the user it's live**

Report:
- Production URL: `https://graviddoktor.se/`
- Pages subdomain: `https://graviddoktor.pages.dev/`
- GitHub repo URL
- Iteration loop: edit files in `src/`, `git push`, wait ~90s, reload.

---

## Post-launch backlog (not in this plan)

Topics to address in follow-up iterations once the user starts fleshing out content:

- Responsive / mobile layout (design is fixed 1280px)
- Proper SEO meta tags (Open Graph, Twitter, JSON-LD for `GuideArticle` or similar)
- Basic analytics (Cloudflare Web Analytics toggle — free, privacy-friendly)
- Favicon refinement
- Content edits/expansions from `generell_info/` research documents
- Accessibility audit (semantic headings, focus rings, reduced-motion respect)
- Optional: dark mode, language switcher
