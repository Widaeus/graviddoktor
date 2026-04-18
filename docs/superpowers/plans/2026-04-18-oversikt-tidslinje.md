# Kap 02 "Översikt & tidslinje" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Lägg till nytt kapitel 02 "Översikt & tidslinje" (horisontell tidslinje på desktop, vertikal stack på mobil), renumrera efterföljande kapitel, ta bort gammal tidslinje i Föräldra 3.3, och gör `PageHead.readTime` konfigurerbar.

**Architecture:** Rent front-end. Ny sidkomponent `Tidslinje.jsx` med data-driven `NODES`-array. Ny BEM-stil `.htl__*` i `styles.css`. Alla befintliga kapitel (gamla 02–06) renumreras till 03–07 i nav-metadata, `data-screen-label`, `PageHead.num`, `eyebrow` och interna `grid__label`-koder. Föräldra 3.3 tas bort. Obsolet `.timeline`/`.tl__*`-CSS tas bort. `PageHead.jsx` byter `läs: 6 min` mot valfri `readTime`-prop.

**Tech Stack:** Vite 6, React 18 (SPA, ingen SSR), vanilla CSS, inga tester (projektet har inget testframework). Verifiering per task: `npm run build` + visuell browser-kontroll via `npm run dev`.

---

## Kontext och bakgrund

Specen ligger i `docs/superpowers/specs/2026-04-18-oversikt-tidslinje-design.md`. Läs den innan du börjar — planen är uppbyggd av bitmässiga commits, men specen ger motiveringen.

**Förhandsinformation som utvecklaren behöver:**

- `src/App.jsx` är shell: importerar sidor, monterar `Rail`, `Nav`, `End`. Renderar sidor i tur och ordning i `<main className="stage">`.
- `src/data/pages.js` är *singel sanningskälla* för nav-metadata. `Rail`, `Nav` och `Hero`-TOC:n läser från den.
- Varje `pages/*.jsx`-fil exporterar en komponent som returnerar `<section className="page" data-page="..." data-screen-label="NN Titel">`. Scroll-aktivering bygger på `data-page`.
- `src/components/PageHead.jsx` renderar kapitelhuvudet och används av alla kapitel utom `Hero`.
- Befintliga CSS-klasser `.callout`, `.callout--warn`, `.callout__tag`, `.callout h5`, `.callout p` återanvänds rakt av för warn-callout i kap 02.
- Mobilbrytpunkt är **768 px**. Befintlig `@media (max-width: 768px)`-block ligger i slutet av `styles.css`.
- Inga tester finns. Verifiering = `npm run build` passerar + `npm run dev` + browser-inspektion (desktop och ≤ 768 px).

**Innan du startar:** `npm install` (om ej gjort), `git status` (bör vara ren eller bara ha ospårade reference_docs).

---

## Task 1: Uppdatera `PageHead` till att ta `readTime`-prop + uppdatera alla callers i samma commit

**Varför först:** Isolerat från tidslinjen. Befriar alla sidor från hårdkodade `läs: 6 min`. Görs atomärt för att undvika mellantillstånd där något kapitel visar fel värde.

**Files:**
- Modify: `src/components/PageHead.jsx`
- Modify: `src/pages/Arbetsmiljo.jsx`
- Modify: `src/pages/Foraldra.jsx`
- Modify: `src/pages/FAQ.jsx`
- Modify: `src/pages/Resurser.jsx`
- Modify: `src/pages/Kontakt.jsx`

- [ ] **Step 1.1: Uppdatera `PageHead.jsx` så läs-tiden är valfri**

Ersätt hela innehållet i `src/components/PageHead.jsx` med:

```jsx
export default function PageHead({ num, title, titleEm, lede, eyebrow, ed, readTime }) {
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
        {readTime ? <span>läs: {readTime}</span> : null}
      </div>
    </header>
  );
}
```

- [ ] **Step 1.2: Lägg till `readTime="12 min"` i `src/pages/Arbetsmiljo.jsx`**

I `Arbetsmiljo()` ändra `<PageHead ... />` genom att lägga till `readTime="12 min"` direkt efter `lede`-propen:

```jsx
<PageHead
  num="02"
  title="Arbetsmiljö &"
  titleEm="riskbedömning"
  eyebrow="KAP. 2"
  readTime="12 min"
  lede="Så snart du har meddelat din graviditet är arbetsgivaren skyldig att göra en individuell, skriftlig riskbedömning av just din tjänstgöring. Bedömningen ska omfatta fysiska, kemiska, biologiska och psykosociala faktorer — och den ska leda till konkreta åtgärder enligt en bestämd prioritetsordning."
/>
```

(`num` och `eyebrow` är fortfarande "02" och "KAP. 2" i denna task — renumreras i Task 6.)

- [ ] **Step 1.3: Lägg till `readTime="10 min"` i `src/pages/Foraldra.jsx`**

I `Foraldra()` lägg till `readTime="10 min"` i `PageHead`-anropet:

```jsx
<PageHead
  num="03"
  title="Föräldra-"
  titleEm="ledighet"
  eyebrow="KAP. 3"
  readTime="10 min"
  lede="Rätten till ledighet styrs av föräldraledighetslagen (SFS 1995:584) och socialförsäkringsbalken. Den ekonomiska utfyllnaden ovanpå Försäkringskassan styrs av kollektivavtalet AB 25 (§ 29). För dig som läkare i Region Stockholm innebär kombinationen omkring 90 % av ordinarie lön under merparten av ledigheten — men också tidigare anmälningstider och strikta regler för ST-tjänstgöringen."
/>
```

- [ ] **Step 1.4: `FAQ.jsx`, `Resurser.jsx`, `Kontakt.jsx` — ingen `readTime`-prop**

Öppna `src/pages/FAQ.jsx`, `src/pages/Resurser.jsx`, `src/pages/Kontakt.jsx`. Verifiera att `<PageHead .../>` inte har någon `readTime`-prop. Inget behöver ändras i dessa tre filer i denna task (deras `PageHead` kommer, p.g.a. Step 1.1, nu inte längre visa "läs: 6 min").

- [ ] **Step 1.5: Build-verifiering**

Run:
```bash
npm run build
```
Expected: Grön build, inga varningar om saknade props.

- [ ] **Step 1.6: Visuell verifiering**

Starta dev-servern:
```bash
npm run dev
```
Öppna http://localhost:5173. Bekräfta:
- Arbetsmiljö visar `läs: 12 min` i page-head-meta.
- Föräldraledighet visar `läs: 10 min`.
- FAQ, Resurser, Kontakt visar **ingen** `läs: ...`-text (bara `KAP. N` och `Ed. 2026/I`).

Stoppa servern.

- [ ] **Step 1.7: Commit**

```bash
git add src/components/PageHead.jsx src/pages/Arbetsmiljo.jsx src/pages/Foraldra.jsx
git commit -m "$(cat <<'EOF'
feat(pagehead): make read-time a prop, set per-chapter values

Arbetsmiljö → 12 min, Föräldraledighet → 10 min. FAQ, Resurser, Kontakt
omit the prop and no longer render the label. Hard-coded "läs: 6 min"
is gone.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 2: Lägg till `.htl__*` CSS i `styles.css` (desktop + mobil)

**Varför nu:** CSS kan läggas till utan att något refererar till klasserna — påverkar ingen befintlig rendering förrän `Tidslinje.jsx` skapas i Task 3.

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 2.1: Lägg till desktop-CSS för `.htl__*`**

Öppna `src/styles.css`. Scrolla till slutet av desktop-sektionen — direkt *före* `/* density + motion toggles */` (nuvarande rad 1059). Klistra in följande block:

```css
/* ---------- kap 02: horisontell tidslinje ---------- */

/* legend */
.htl__legend {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin: 20px 0 20px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--rule);
}
.htl__legend-item { display: flex; align-items: center; gap: 8px; }
.htl__legend-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  border: 2px solid var(--blue);
  background: var(--blue);
}

/* fas-band (desktop) */
.htl__phase-band {
  display: flex;
  min-width: max-content;
}
.htl__phase-seg {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 6px 18px;
  border-bottom: 2px solid;
  white-space: nowrap;
}
.htl__phase-seg--grav { color: var(--blue); border-bottom-color: var(--blue); }
.htl__phase-seg--led { color: var(--warm); border-bottom-color: var(--warm); }
.htl__phase-seg--ret { color: var(--blue-deep); border-bottom-color: var(--blue-deep); }

/* fas-etikett (mobil only, default hidden) */
.htl__phase-mobile { display: none; }

/* scroll container */
.htl__scroll {
  overflow-x: auto;
  padding-bottom: 14px;
}
.htl__scroll::-webkit-scrollbar { height: 6px; }
.htl__scroll::-webkit-scrollbar-thumb { background: var(--rule); border-radius: 3px; }

/* root timeline grid */
.htl {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 220px;
  position: relative;
  padding: 24px 0 8px 0;
  min-width: max-content;
}
.htl::before {
  content: "";
  position: absolute;
  left: 28px; right: 28px; top: 44px;
  height: 1px;
  background: var(--rule);
}

/* timeline item */
.htl__item {
  padding: 0 18px;
  position: relative;
}
.htl__dot {
  width: 14px; height: 14px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid var(--blue);
  margin: 20px 0 12px;
  position: relative;
  z-index: 1;
}
.htl__item--filled .htl__dot { background: var(--blue); }
.htl__w {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 6px;
  min-height: 26px;
}
.htl__t {
  font-family: var(--serif);
  font-size: 16px;
  letter-spacing: -0.01em;
  font-weight: 400;
  margin-bottom: 8px;
  line-height: 1.25;
  color: var(--ink);
}
.htl__d {
  font-size: 14px;
  line-height: 1.5;
  color: var(--ink-2);
  margin-bottom: 10px;
}
.htl__acts { display: flex; flex-direction: column; gap: 4px; }

/* act tags (återanvändbara) */
.act__row {
  display: flex;
  gap: 8px;
  font-size: 11.5px;
  color: var(--ink-2);
  line-height: 1.4;
  align-items: baseline;
}
.act__tag {
  font-family: var(--mono);
  font-size: 8.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: 2px;
  white-space: nowrap;
  flex-shrink: 0;
  font-weight: 400;
}
.act__tag--bor { background: var(--blue); color: #fff; }
.act__tag--kan { background: var(--blue-soft); color: var(--blue-deep); }

/* scroll hint */
.htl__scroll-hint {
  font-family: var(--mono);
  font-size: 9.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-top: 6px;
  text-align: right;
}
```

- [ ] **Step 2.2: Lägg till mobil-CSS inuti befintlig `@media (max-width: 768px)`-block**

Scrolla ned till det sista `}` i `@media (max-width: 768px)`-blocket (nuvarande rad 1293). Klistra in följande *före* det avslutande `}`:

```css

  /* kap 02 — tidslinje mobil fallback */
  .htl__phase-band { display: none; }

  .htl__scroll {
    overflow-x: visible;
    padding-bottom: 0;
  }

  .htl {
    display: flex;
    flex-direction: column;
    grid-auto-flow: initial;
    grid-auto-columns: initial;
    padding: 20px 0 0 32px;
    min-width: 0;
  }
  .htl::before {
    left: 4px;
    right: auto;
    top: 10px;
    bottom: 10px;
    height: auto;
    width: 1px;
  }

  .htl__item {
    padding: 0 0 24px 0;
  }
  .htl__dot {
    position: absolute;
    left: -30px;
    top: 26px;
    width: 11px;
    height: 11px;
    margin: 0;
  }
  .htl__w { min-height: auto; margin-bottom: 4px; }
  .htl__t { font-size: 17px; margin-bottom: 6px; }
  .htl__d { font-size: 13.5px; margin-bottom: 8px; max-width: none; }

  .htl__legend {
    gap: 14px;
    font-size: 9px;
    margin: 14px 0 14px;
    padding-bottom: 10px;
  }

  .htl__phase-mobile {
    display: block;
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 8px 0;
    margin: 10px -32px 16px -32px;
    text-align: center;
    background: var(--paper);
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    position: relative;
    z-index: 2;
  }
  .htl__phase-mobile--led { color: var(--warm); }
  .htl__phase-mobile--ret { color: var(--blue-deep); }

  .htl__scroll-hint { display: none; }
```

- [ ] **Step 2.3: Build-verifiering**

```bash
npm run build
```
Expected: Grön build. Inga nya varningar.

- [ ] **Step 2.4: Commit**

```bash
git add src/styles.css
git commit -m "$(cat <<'EOF'
feat(css): add .htl__* classes for the kap 02 horizontal timeline

Desktop: horizontal scroll-stepper with phase-band, dot line, 220px
node columns. Mobile (≤ 768px): vertical stack with left-rail
timeline, hidden phase-band replaced by full-width phase labels.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 3: Skapa `src/pages/Tidslinje.jsx`

**Varför nu:** CSS är på plats. Komponenten existerar "off-stage" — den importeras inte av App.jsx förrän Task 4, så ingen rendering sker ännu.

**Files:**
- Create: `src/pages/Tidslinje.jsx`

- [ ] **Step 3.1: Skapa `src/pages/Tidslinje.jsx`**

Skapa filen med exakt innehåll:

```jsx
import { Fragment } from 'react';
import PageHead from '../components/PageHead.jsx';

const PHASE_NAMES = { led: 'LEDIGHET', ret: 'ÅTERGÅNG' };

const NODES = [
  {
    w: 'V. 0–8',
    t: 'Anmäl skriftligt',
    d: 'Skyddet aktiveras av din anmälan — AFS 2023:2 kap 7.',
    acts: [
      { tag: 'bor', txt: 'Mejla chef' },
      { tag: 'kan', txt: 'Åberopa lokalt jouravtal (Region Stockholm 2008)' },
    ],
    filled: true,
  },
  {
    w: 'Inom 1–2 v',
    t: 'Riskbedömning',
    d: 'Skriftlig bedömning med chef och skyddsombud enligt § 5 AFS 2023:2.',
    acts: [
      { tag: 'bor', txt: 'Dokumentera risker' },
      { tag: 'kan', txt: 'Begär serologi (CMV, parvovirus B19)' },
    ],
    filled: true,
  },
  {
    w: '≥ 3 mån före ledighet',
    t: 'Ledighetsanmälan',
    d: 'AB 25 skärper FLL — tre månader, inte två. Ange start, slut, omfattning, typ.',
    acts: [{ tag: 'bor', txt: 'Skriftligt till HR' }],
  },
  {
    w: 'Dag 60 före BF · A',
    t: 'GP · fysiskt tungt arbete',
    d: <>Om omplacering inte går: 80 % av SGI, <strong>max 50 dagar</strong> t.o.m. dag 11 före BF.</>,
    acts: [{ tag: 'kan', txt: 'Ansök hos FK' }],
  },
  {
    w: 'Dag 60 före BF · B',
    t: 'Föräldrapenning kan tas ut',
    d: 'Tidigaste FP-uttag för den som föder. Båda föräldrar: mödravård + föräldrautbildning.',
    acts: [{ tag: 'kan', txt: 'Ansök på Mina sidor' }],
  },
  {
    w: 'Förlossning',
    t: 'Mammaledighet + 10-dagar',
    d: 'Min. 7 v före + 7 v efter. Andra föräldern: 10-dagar tillfällig FP.',
    acts: [{ tag: 'bor', txt: 'Anmäl 10-d till FK senast 30 dagar efter första hemmadagen' }],
    phase: 'led',
  },
  {
    w: '0–180 d postpartum',
    t: 'FP-tillägg + föräldralön',
    d: '10 % av lönebortfall i 180 d. Mellanskillnad över FK-tak i upp till 270 d. AB § 29.',
    acts: [{ tag: 'bor', txt: 'Lämna FK-utbetalningsspec till HR månadsvis' }],
  },
  {
    w: '120 d FP',
    t: 'Semestertaket',
    d: '120 d är semesterlönegrundande (180 d för ensam vårdnadshavare). Därefter ingen intjäning.',
    acts: [{ tag: 'kan', txt: 'Planera intjänad semester i anslutning till ledigheten' }],
  },
  {
    w: '1 år',
    t: 'SGI kräver FP-uttag',
    d: '80 % arbete kräver 20 % FP/vecka för att skydda SGI.',
    acts: [{ tag: 'bor', txt: 'Stäm av med FK innan deltid påbörjas' }],
  },
  {
    w: 'Återgång',
    t: 'Samma eller likvärdigt arbete',
    d: '16 § FLL — omvänd bevisbörda vid tvist.',
    acts: [
      { tag: 'bor', txt: 'Skriftligt återgångsbesked' },
      { tag: 'kan', txt: 'Flexibla arbetsformer för barn < 8 år' },
    ],
    phase: 'ret',
  },
];

export default function Tidslinje() {
  return (
    <section className="page" data-page="tidslinje" data-screen-label="02 Tidslinje">
      <PageHead
        num="02"
        title="Översikt &"
        titleEm="tidslinje"
        eyebrow="KAP. 2"
        readTime="4 min"
        lede="En visuell, kronologisk översikt av allt som händer från besked om graviditet till återgång efter ledigheten. Detta kapitel är sajtens index — innehållet fördjupas i efterföljande kapitel."
      />

      <div className="grid">
        <div className="grid__label"><strong>2.1</strong>Från anmälan till återgång</div>
        <div className="section reveal">
          <div className="section__kicker">Tidslinje · bör och kan per fas</div>

          <div className="callout callout--warn">
            <div className="callout__tag">Parallellt spår</div>
            <div>
              <h5>Arbetsförbud p.g.a. risk — kan inträffa när som helst under graviditeten</h5>
              <p>Om riskbedömningen visar allvarlig risk (strålning över 1 mSv-tak, cytostatika utan skydd, immunnegativ mot CMV/parvovirus under utbrott, smittsam TB utan FFP3) <strong>och omplacering inte är möjlig</strong>, fattar arbetsgivaren beslut om skyddsledighet enligt § 20 FLL → <strong>graviditetspenning hela förbudsperioden</strong> t.o.m. dag 11 före BF.</p>
              <p>Detta är <em>ett annat rättsligt spår</em> än GP vid fysiskt tungt arbete (som har ett fast fönster från dag 60 före BF). Blanda inte ihop dem — de baseras på olika paragrafer och kan inte tas samtidigt för samma dag.</p>
            </div>
          </div>

          <div className="htl__legend">
            <div className="htl__legend-item">
              <span className="htl__legend-dot"></span>
              <span>Diskret händelse</span>
            </div>
            <div className="htl__legend-item">
              <span className="act__tag act__tag--bor">Bör</span>
              <span>Du eller arbetsgivaren måste</span>
            </div>
            <div className="htl__legend-item">
              <span className="act__tag act__tag--kan">Kan</span>
              <span>Valfritt eller villkorat</span>
            </div>
          </div>

          <div className="htl__phase-band">
            <div className="htl__phase-seg htl__phase-seg--grav" style={{ width: '1100px' }}>Graviditet · anmälan → BF</div>
            <div className="htl__phase-seg htl__phase-seg--led" style={{ width: '660px' }}>Ledighet · förlossning → 12 mån</div>
            <div className="htl__phase-seg htl__phase-seg--ret" style={{ width: '440px' }}>Återgång · 12 mån →</div>
          </div>

          <div className="htl__scroll">
            <div className="htl">
              {NODES.map((n, i) => (
                <Fragment key={i}>
                  {n.phase && (
                    <div className={`htl__phase-mobile htl__phase-mobile--${n.phase}`}>
                      — {PHASE_NAMES[n.phase]} —
                    </div>
                  )}
                  <div className={`htl__item${n.filled ? ' htl__item--filled' : ''}`}>
                    <div className="htl__dot"></div>
                    <div className="htl__w">{n.w}</div>
                    <div className="htl__t">{n.t}</div>
                    <div className="htl__d">{n.d}</div>
                    <div className="htl__acts">
                      {n.acts.map((a, j) => (
                        <div key={j} className="act__row">
                          <span className={`act__tag act__tag--${a.tag}`}>
                            {a.tag === 'bor' ? 'Bör' : 'Kan'}
                          </span>
                          <span>{a.txt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="htl__scroll-hint">Skrolla för senare faser →</div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3.2: Build-verifiering**

```bash
npm run build
```
Expected: Grön build. Tidslinje.jsx kompilerar även om inget importerar den ännu (Vite tar inte med orörda filer i `dist/`).

- [ ] **Step 3.3: Commit**

```bash
git add src/pages/Tidslinje.jsx
git commit -m "$(cat <<'EOF'
feat(pages): add Tidslinje (kap 02) component

Data-driven NODES array with 10 timeline events and 2 phase markers.
Includes warn-callout explaining arbetsförbud-risk as a parallel
track, legend for Bör/Kan pills, desktop phase-band, and per-node
act tags. Not wired into App.jsx yet.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 4: Wire upp `Tidslinje` i `pages.js` och `App.jsx` (atomärt)

**Varför atomärt:** Om `pages.js` får ett nytt entry utan att `App.jsx` renderar motsvarande `<section>`, blir nav-länken död. Om `App.jsx` importerar före `Tidslinje.jsx` existerar blir bygget brutet. Båda filerna ändras i samma commit.

**Files:**
- Modify: `src/data/pages.js`
- Modify: `src/App.jsx`

- [ ] **Step 4.1: Uppdatera `src/data/pages.js`**

Ersätt hela filens innehåll med:

```js
export const PAGES = [
  { id: 'hem',              num: '01', label: 'Hem / Översikt',              title: 'Hem' },
  { id: 'tidslinje',        num: '02', label: 'Översikt & tidslinje',        title: 'Tidslinje' },
  { id: 'arbetsmiljo',      num: '03', label: 'Arbetsmiljö & riskbedömning', title: 'Arbetsmiljö' },
  { id: 'foraldraledighet', num: '04', label: 'Föräldraledighet',            title: 'Föräldraledighet' },
  { id: 'faq',              num: '05', label: 'Vanliga frågor',              title: 'Vanliga frågor' },
  { id: 'resurser',         num: '06', label: 'Resurser & länkar',           title: 'Resurser' },
  { id: 'kontakt',          num: '07', label: 'Kontakt & stöd',              title: 'Kontakt' },
];
```

- [ ] **Step 4.2: Uppdatera `src/App.jsx`**

Ersätt hela filens innehåll med:

```jsx
import { useActivePage, useReveal, useCollapsibleChapters } from './hooks/scroll.js';
import Rail from './components/Rail.jsx';
import Nav from './components/Nav.jsx';
import End from './components/End.jsx';
import Hero from './pages/Hero.jsx';
import Tidslinje from './pages/Tidslinje.jsx';
import Arbetsmiljo from './pages/Arbetsmiljo.jsx';
import Foraldra from './pages/Foraldra.jsx';
import FAQ from './pages/FAQ.jsx';
import Resurser from './pages/Resurser.jsx';
import Kontakt from './pages/Kontakt.jsx';

export default function App() {
  const active = useActivePage();
  useReveal();
  const { openChapter } = useCollapsibleChapters();

  return (
    <>
      <Rail active={active} openChapter={openChapter} />
      <Nav active={active} openChapter={openChapter} />
      <main className="stage">
        <Hero />
        <Tidslinje />
        <Arbetsmiljo />
        <Foraldra />
        <FAQ />
        <Resurser />
        <Kontakt />
        <End />
      </main>
    </>
  );
}
```

- [ ] **Step 4.3: Build-verifiering**

```bash
npm run build
```
Expected: Grön build.

- [ ] **Step 4.4: Visuell verifiering**

```bash
npm run dev
```
Öppna http://localhost:5173. Kontrollera:

1. **Rail:** 7 dots. Klick på en dot ska scrolla till kapitlet. Första dot = Hero, andra dot = Tidslinje, tredje = Arbetsmiljö etc.
2. **Nav:** 7 items i listan. Scrolla genom sajten, sektionernas ordning ska vara: Hero → Tidslinje → Arbetsmiljö → Föräldra → FAQ → Resurser → Kontakt → End.
3. **Tidslinje-sidan:**
   - PageHead visar "02", "Översikt &", "tidslinje", "KAP. 2", "läs: 4 min".
   - Warn-callout med varm accent, rubrik "Arbetsförbud p.g.a. risk ..."
   - Legend med fylld prick, "Bör"-pill (blå), "Kan"-pill (ljusblå).
   - Fas-band (Graviditet / Ledighet / Återgång).
   - 10 noder + "Skrolla för senare faser →".
   - Horisontell scroll om fönstret är smalare än tidslinjens totalbredd.
4. **Mobil (DevTools responsive 375px):**
   - Fas-band döljs.
   - Noderna stackar vertikalt med vertikal linje till vänster.
   - "— LEDIGHET —" syns ovanför förlossnings-noden.
   - "— ÅTERGÅNG —" syns ovanför sista noden.
   - Ingen horisontell scroll-bar.
   - `Skrolla för senare faser →` är dold.

Stoppa servern.

- [ ] **Step 4.5: Commit**

```bash
git add src/data/pages.js src/App.jsx
git commit -m "$(cat <<'EOF'
feat(app): wire up Tidslinje as kap 02, renumber chapters 03-07

PAGES array gets a new 'tidslinje' entry at position 2. Arbetsmiljö,
Föräldraledighet, FAQ, Resurser, Kontakt are renumbered from
02-06 to 03-07. App.jsx imports and renders Tidslinje between Hero
and Arbetsmiljö.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 5: Ta bort gamla tidslinjen i `Foraldra.jsx` (blocket 3.3)

**Varför nu:** Kap 02 är redan synligt och auktoritativt. Gamla blocket kan nu tas bort utan att användaren förlorar tidslinjeinformation.

**Files:**
- Modify: `src/pages/Foraldra.jsx`

- [ ] **Step 5.1: Ta bort hela `{/* 3.3 Tidslinje */}`-blocket**

Öppna `src/pages/Foraldra.jsx`. Leta upp kommentar `{/* 3.3 Tidslinje */}` (runt rad 95). Ta bort hela `<div className="grid">`-blocket som följer direkt efter kommentaren — inklusive kommentaren själv och allt innehåll t.o.m. det matchande stängande `</div>` före nästa kommentar `{/* 3.4 Försäkringskassan */}`.

Konkret: radera raderna som börjar med `{/* 3.3 Tidslinje */}` och slutar med det `</div>` som omedelbart föregår `{/* 3.4 Försäkringskassan */}`-kommentaren.

Resultatet ska vara att `{/* 3.2 Ledighetsformer */}`-blocket följs direkt av `{/* 3.4 Försäkringskassan */}`-blocket, utan någon mellanliggande 3.3-sektion.

- [ ] **Step 5.2: Build-verifiering**

```bash
npm run build
```
Expected: Grön build. Inga syntaxfel.

- [ ] **Step 5.3: Visuell verifiering**

```bash
npm run dev
```
Öppna kap 04 Föräldraledighet. Bekräfta att:
- Sektion 3.2 (Ledighetsformer) efterföljs direkt av sektion 3.4 (Försäkringskassan).
- Den tidigare `.timeline`-visualiseringen (stor punkt-till-punkt-linje med v. 0–12 osv) är borta.
- Inga trasiga tomrum eller felmellanrum.

(Not: interna numren `3.2`, `3.4` osv renumreras i Task 6 — nu ser det inkonsekvent ut. OK.)

Stoppa servern.

- [ ] **Step 5.4: Commit**

```bash
git add src/pages/Foraldra.jsx
git commit -m "$(cat <<'EOF'
refactor(foraldra): remove the 3.3 timeline block

The timeline is now authoritative in kap 02 Översikt & tidslinje. The
old Föräldra 3.3 inline timeline conflated two distinct graviditets-
penning grounds and is superseded.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 6: Renumrera alla kapitel 02–06 → 03–07 i JSX

**Omfång per fil:**
- `data-screen-label="NN Titel"` uppdateras.
- `PageHead num="NN"` uppdateras.
- `PageHead eyebrow="KAP. N"` uppdateras.
- `grid__label <strong>X.Y</strong>` uppdateras.

Alla fyra per fil, i ett commit per fil.

**Files:**
- Modify: `src/pages/Arbetsmiljo.jsx`
- Modify: `src/pages/Foraldra.jsx`
- Modify: `src/pages/FAQ.jsx`
- Modify: `src/pages/Resurser.jsx`
- Modify: `src/pages/Kontakt.jsx`

- [ ] **Step 6.1: Arbetsmiljö 02 → 03**

I `src/pages/Arbetsmiljo.jsx`:

1. Ändra `data-screen-label="02 Arbetsmiljö"` → `data-screen-label="03 Arbetsmiljö"` (en förekomst).
2. I `<PageHead>`: ändra `num="02"` → `num="03"`, och `eyebrow="KAP. 2"` → `eyebrow="KAP. 3"`.
3. Uppdatera alla 10 `<strong>2.N</strong>` → `<strong>3.N</strong>` (2.1 → 3.1, 2.2 → 3.2, ..., 2.10 → 3.10). **Var noggrann** — 2.10 ska bli 3.10 (inte 3.1 — ordning är avgörande). Byt från lägsta till högsta eller använd exakt strängmatch.

Kör i terminalen för snabb sök-och-ersätt (från repo-roten):
```bash
sed -i 's|<strong>2\.\([0-9]\+\)</strong>|<strong>3.\1</strong>|g' src/pages/Arbetsmiljo.jsx
```

Kontrollera sedan med:
```bash
grep -n "<strong>" src/pages/Arbetsmiljo.jsx
```
Expected output: `<strong>3.1</strong>` till `<strong>3.10</strong>` — inga `2.N` kvar.

- [ ] **Step 6.2: Föräldraledighet 03 → 04 (med 3.3-glidning)**

I `src/pages/Foraldra.jsx`:

1. `data-screen-label="03 Föräldraledighet"` → `data-screen-label="04 Föräldraledighet"`.
2. `num="03"` → `num="04"`, `eyebrow="KAP. 3"` → `eyebrow="KAP. 4"`.
3. Interna labels — **specialfall** eftersom 3.3 redan är borttagen. Renumreringen ser ut så här:

| Befintlig | Ny |
|---|---|
| `<strong>3.1</strong>` | `<strong>4.1</strong>` |
| `<strong>3.2</strong>` | `<strong>4.2</strong>` |
| `<strong>3.4</strong>` | `<strong>4.3</strong>` |
| `<strong>3.5</strong>` | `<strong>4.4</strong>` |
| `<strong>3.6</strong>` | `<strong>4.5</strong>` |
| `<strong>3.7</strong>` | `<strong>4.6</strong>` |
| `<strong>3.8</strong>` | `<strong>4.7</strong>` |
| `<strong>3.9</strong>` | `<strong>4.8</strong>` |
| `<strong>3.10</strong>` | `<strong>4.9</strong>` |
| `<strong>3.11</strong>` | `<strong>4.10</strong>` |

En-sed kan inte göra detta säkert pga ordningsproblem (3.10 och 3.11 är känsliga). Använd exakta Edit-tool-anrop eller följande sekvens (kör i ordning, högsta först):
```bash
sed -i 's|<strong>3\.11</strong>|<strong>4.10</strong>|g' src/pages/Foraldra.jsx
sed -i 's|<strong>3\.10</strong>|<strong>4.9</strong>|g' src/pages/Foraldra.jsx
sed -i 's|<strong>3\.9</strong>|<strong>4.8</strong>|g' src/pages/Foraldra.jsx
sed -i 's|<strong>3\.8</strong>|<strong>4.7</strong>|g' src/pages/Foraldra.jsx
sed -i 's|<strong>3\.7</strong>|<strong>4.6</strong>|g' src/pages/Foraldra.jsx
sed -i 's|<strong>3\.6</strong>|<strong>4.5</strong>|g' src/pages/Foraldra.jsx
sed -i 's|<strong>3\.5</strong>|<strong>4.4</strong>|g' src/pages/Foraldra.jsx
sed -i 's|<strong>3\.4</strong>|<strong>4.3</strong>|g' src/pages/Foraldra.jsx
sed -i 's|<strong>3\.2</strong>|<strong>4.2</strong>|g' src/pages/Foraldra.jsx
sed -i 's|<strong>3\.1</strong>|<strong>4.1</strong>|g' src/pages/Foraldra.jsx
```

Uppdatera också kommentarerna `{/* 3.N Rubrik */}` så att de matchar nya numreringen. De är kosmetiska men underlättar läsning:
```bash
sed -i -E 's|\{/\* 3\.([0-9]+) |{/* 4.\1 |g' src/pages/Foraldra.jsx
```
Kommentaren 3.11 → 4.11 blir fel (eftersom vi kodrader om till 4.10). Fixa manuellt:
```bash
sed -i 's|4\.11 Tvister|4.10 Tvister|' src/pages/Foraldra.jsx
# Justera också 4.4 → 4.3 etc. — kommentarerna glider på samma sätt som strong-labels
sed -i 's|{/\* 4\.10 Lokala|{/* 4.9 Lokala|' src/pages/Foraldra.jsx
sed -i 's|{/\* 4\.9 Återgång|{/* 4.8 Återgång|' src/pages/Foraldra.jsx
sed -i 's|{/\* 4\.8 Pension|{/* 4.7 Pension|' src/pages/Foraldra.jsx
sed -i 's|{/\* 4\.7 ST,|{/* 4.6 ST,|' src/pages/Foraldra.jsx
sed -i 's|{/\* 4\.6 Anmälan|{/* 4.5 Anmälan|' src/pages/Foraldra.jsx
sed -i 's|{/\* 4\.5 Kollektivavtalet|{/* 4.4 Kollektivavtalet|' src/pages/Foraldra.jsx
sed -i 's|{/\* 4\.4 Försäkringskassan|{/* 4.3 Försäkringskassan|' src/pages/Foraldra.jsx
```

(Om kommentaren inte finns exakt enligt mönstret — öppna filen och fixa manuellt.)

Verifiera med:
```bash
grep -E "(<strong>[0-9]\.|/\* [0-9]\.)" src/pages/Foraldra.jsx
```
Expected: endast `4.1`–`4.10`, inga `3.N` kvar.

- [ ] **Step 6.3: FAQ 04 → 05**

I `src/pages/FAQ.jsx`:
1. `data-screen-label="04 FAQ"` → `data-screen-label="05 FAQ"`.
2. `num="04"` → `num="05"`, `eyebrow="KAP. 4"` → `eyebrow="KAP. 5"`.
3. `<strong>4.1</strong>` → `<strong>5.1</strong>`.

```bash
sed -i 's|data-screen-label="04 FAQ"|data-screen-label="05 FAQ"|' src/pages/FAQ.jsx
sed -i 's|num="04"|num="05"|' src/pages/FAQ.jsx
sed -i 's|eyebrow="KAP. 4"|eyebrow="KAP. 5"|' src/pages/FAQ.jsx
sed -i 's|<strong>4\.1</strong>|<strong>5.1</strong>|g' src/pages/FAQ.jsx
```

- [ ] **Step 6.4: Resurser 05 → 06**

I `src/pages/Resurser.jsx`:
```bash
sed -i 's|data-screen-label="05 Resurser"|data-screen-label="06 Resurser"|' src/pages/Resurser.jsx
sed -i 's|num="05"|num="06"|' src/pages/Resurser.jsx
sed -i 's|eyebrow="KAP. 5"|eyebrow="KAP. 6"|' src/pages/Resurser.jsx
sed -i 's|<strong>5\.1</strong>|<strong>6.1</strong>|g' src/pages/Resurser.jsx
```

- [ ] **Step 6.5: Kontakt 06 → 07**

I `src/pages/Kontakt.jsx`:
```bash
sed -i 's|data-screen-label="06 Kontakt"|data-screen-label="07 Kontakt"|' src/pages/Kontakt.jsx
sed -i 's|num="06"|num="07"|' src/pages/Kontakt.jsx
sed -i 's|eyebrow="KAP. 6"|eyebrow="KAP. 7"|' src/pages/Kontakt.jsx
sed -i 's|<strong>6\.4</strong>|<strong>7.4</strong>|g' src/pages/Kontakt.jsx
sed -i 's|<strong>6\.3</strong>|<strong>7.3</strong>|g' src/pages/Kontakt.jsx
sed -i 's|<strong>6\.2</strong>|<strong>7.2</strong>|g' src/pages/Kontakt.jsx
sed -i 's|<strong>6\.1</strong>|<strong>7.1</strong>|g' src/pages/Kontakt.jsx
```

- [ ] **Step 6.6: Global renumrering-verifiering**

Sök efter alla gamla nummerreferenser som *borde* vara borta:
```bash
grep -rn "<strong>2\." src/pages/
grep -rn "<strong>3\." src/pages/
grep -rn "<strong>4\." src/pages/
grep -rn "<strong>5\." src/pages/
grep -rn "<strong>6\." src/pages/
```
Expected:
- `<strong>2\.`: endast i `Tidslinje.jsx` som `<strong>2.1</strong>`.
- `<strong>3\.`: endast i `Arbetsmiljo.jsx` som `<strong>3.1</strong>` – `<strong>3.10</strong>`.
- `<strong>4\.`: endast i `Foraldra.jsx` som `<strong>4.1</strong>` – `<strong>4.10</strong>`.
- `<strong>5\.`: endast i `FAQ.jsx` som `<strong>5.1</strong>`.
- `<strong>6\.`: endast i `Resurser.jsx` som `<strong>6.1</strong>`.
- `<strong>7\.`: ska finnas i `Kontakt.jsx` (7.1, 7.2, 7.3, 7.4). Kör `grep -rn "<strong>7\." src/pages/` för att verifiera.

Sök också efter gamla `data-screen-label`-värden:
```bash
grep -rn "data-screen-label" src/pages/
```
Expected: samtliga värden börjar med `01`, `02`, `03`, `04`, `05`, `06`, `07` i stigande ordning enligt sidornas renderingsordning.

- [ ] **Step 6.7: Build och dev-verifiering**

```bash
npm run build
```
Expected: Grön.

```bash
npm run dev
```
Kontrollera i http://localhost:5173:
- Arbetsmiljö visar `KAP. 3` och `03` i PageHead, och `3.1`, `3.2`, … i grid-labels.
- Föräldra visar `KAP. 4`, `04`, och `4.1`, `4.2`, `4.3` (som efterträdare till 4.2 — tidigare 3.4), osv.
- FAQ visar `KAP. 5`, `05`, `5.1`.
- Resurser visar `KAP. 6`, `06`, `6.1`.
- Kontakt visar `KAP. 7`, `07`, `7.1`–`7.4`.
- Scrollspy i Rail och Nav highlightar rätt kapitel när du scrollar (verifiera att Rail-numret animerar till respektive nummer).

Stoppa servern.

- [ ] **Step 6.8: Commit**

```bash
git add src/pages/Arbetsmiljo.jsx src/pages/Foraldra.jsx src/pages/FAQ.jsx src/pages/Resurser.jsx src/pages/Kontakt.jsx
git commit -m "$(cat <<'EOF'
refactor(pages): renumber chapters 02-06 to 03-07

After kap 02 Tidslinje was introduced, shift Arbetsmiljö (02→03),
Föräldraledighet (03→04), FAQ (04→05), Resurser (05→06), Kontakt
(06→07). Updates data-screen-label, PageHead num/eyebrow, interior
grid__label numbering, and matching JSX comments. Föräldra gets an
extra -1 shift for sections after the removed 3.3.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 7: Uppdatera Hero-TOC-text

**Files:**
- Modify: `src/pages/Hero.jsx`

- [ ] **Step 7.1: Ändra TOC-kopia**

I `src/pages/Hero.jsx` (runt rad 37):
```bash
sed -i 's|Innehåll — sex kapitel|Innehåll — sju kapitel|' src/pages/Hero.jsx
```

Verifiera:
```bash
grep -n "kapitel" src/pages/Hero.jsx
```
Expected: en rad med `Innehåll — sju kapitel`.

- [ ] **Step 7.2: Visuell verifiering**

```bash
npm run dev
```
Hero-TOC:n ska säga "Innehåll — sju kapitel" och visa alla 7 länkar (hem, tidslinje, arbetsmiljö, föräldra, faq, resurser, kontakt).

- [ ] **Step 7.3: Commit**

```bash
git add src/pages/Hero.jsx
git commit -m "$(cat <<'EOF'
content(hero): update TOC copy to 'sju kapitel' after kap 02 split

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 8: Uppdatera SEO meta description

**Files:**
- Modify: `index.html`

- [ ] **Step 8.1: Uppdatera `<meta name="description">`**

I `index.html` på rad 8, byt:

```html
<meta name="description" content="Rättigheter, skyldigheter och rutiner för dig som är läkare och gravid i Stockholm." />
```

till:

```html
<meta name="description" content="Kronologisk översikt och rättigheter för dig som är läkare och gravid i Stockholm — från anmälan till återgång efter ledighet." />
```

- [ ] **Step 8.2: Build-verifiering**

```bash
npm run build
grep "description" dist/index.html
```
Expected: den nya beskrivningen i den byggda `index.html`.

- [ ] **Step 8.3: Commit**

```bash
git add index.html
git commit -m "$(cat <<'EOF'
seo: update meta description to mention the timeline

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 9: Ta bort obsoleta `.timeline` / `.tl__*` CSS-klasser

**Varför sist bland CSS-tasks:** Ingen JSX refererar längre till `.timeline` efter Task 5. CSS:en är död kod.

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 9.1: Identifiera blocket**

Öppna `src/styles.css`. Leta upp kommentaren `/* ---------- timeline (föräldraledighet) ---------- */` (ungefär rad 901). Blocket sträcker sig t.o.m. rad 947 (slutet på `.tl__d { ... }`).

Verifiera att inga andra filer refererar till dessa klasser:
```bash
grep -rn "tl__\|className=\"timeline\"\|className=\"tl_" src/
```
Expected: **ingen** träff i `src/pages/` eller `src/components/`. Endast eventuella matchningar i `src/styles.css` eller dokumentation.

(Om du hittar träffar i pages: stanna och rapportera — det är ett bevis på att Task 5 inte tog bort allt.)

- [ ] **Step 9.2: Ta bort blocket**

Radera raderna från `/* ---------- timeline (föräldraledighet) ---------- */` t.o.m. det avslutande `}` på `.tl__d { ... }`. Kommentaren `/* ---------- footer (end of site) ---------- */` ska följa direkt efter `/* ---------- callouts ---------- */`-blocket eller vad som nu kommer efter (ev. mellan `.timeline`-blocket och slutet).

Verifiera:
```bash
grep -n "tl__\|.timeline" src/styles.css
```
Expected: inga träffar (förutom möjligen `.htl__*` som är nya klasser — de ska finnas kvar).

- [ ] **Step 9.3: Build och verifiering**

```bash
npm run build
npm run dev
```
Scrolla hela sajten på http://localhost:5173. Inget ska se trasigt ut. Inga vertikala sträck där gamla `.timeline` tidigare renderades.

- [ ] **Step 9.4: Commit**

```bash
git add src/styles.css
git commit -m "$(cat <<'EOF'
chore(css): remove unused .timeline/.tl__* classes

The old Föräldra 3.3 inline timeline is gone; its CSS is now dead
code. Removed. Not to be confused with the new .htl__* classes used
by kap 02.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 10: Granskning — finns GP-fysiskt/arbetsförbud-GP-konflation någon annanstans?

**Varför:** Spec §10 flaggar att texten kan ha samma fel på fler ställen. Görs som en separat granskningstask så det syns i git-historiken om något behöver rättas.

**Files:**
- Potentially Modify: `src/pages/Arbetsmiljo.jsx`, `src/pages/Foraldra.jsx`, `src/pages/FAQ.jsx`

- [ ] **Step 10.1: Sök efter misstänkta mönster**

```bash
grep -nE "graviditetspenning.*(trimester|V\. 22|vecka 22|andra trimester)" src/pages/
grep -nE "(trimester|V\. 22|vecka 22|andra trimester).*graviditetspenning" src/pages/
```

- [ ] **Step 10.2: Manuell granskning av varje träff**

För varje rad som matchar — läs meningen i sin kontext. Om den skulle kunna tolkas som "GP-fysiskt *börjar* i andra trimestern" eller "graviditetspenning är bundet till trimester" utan att skilja mellan arbetsförbud-GP och fysiskt-tungt-GP: flagga som problem.

Förväntat utfall: **inga** träffar efter Task 5 (där 3.3-blocket togs bort). Om ändå någon träff finns, dokumentera i kommentar nedan och fixa texten.

- [ ] **Step 10.3: Verifiera `rows`-tabellen i Föräldra 4.3 (gamla 3.4)**

Öppna `src/pages/Foraldra.jsx`. Leta efter kommentar `{/* 4.3 Försäkringskassan */}` (eller liknande). I `<div className="rows">`-blocket ska det finnas två separata rader:
- En med `row__wk` "GP" (GP vid fysiskt ansträngande arbete, max 50 dagar).
- En med `row__wk` "GP · risk" (GP vid arbetsförbud, hela förbudsperioden).

Det är korrekt struktur — lämna orört. Om raderna av någon anledning har slagits ihop: stopp, diskutera med spec-ägaren.

- [ ] **Step 10.4: Commit (även om inga ändringar)**

Om du inte gjorde några JSX-ändringar i denna task behöver du inte commita. Annars:

```bash
git add src/pages/
git commit -m "$(cat <<'EOF'
content: fix remaining GP-physical/arbetsförbud conflation

Audited after removing the timeline in Task 5. [Describe exact
locations you fixed, or state 'no issues found'.]

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

## Task 11: Slutlig helhetsverifiering

**Files:** Inga ändringar — bara verifiering.

- [ ] **Step 11.1: Clean build**

```bash
rm -rf dist node_modules/.vite
npm run build
```
Expected: Grön build, ingen varning om oanvända imports.

- [ ] **Step 11.2: Desktop-verifiering**

```bash
npm run dev
```
Öppna http://localhost:5173 i 1400 × 900 px-fönster. Kontrollera:

- [ ] Rail visar 7 dots; alla klickbara och scrollar till respektive kapitel.
- [ ] Nav listar alla 7 kapitel-nummer i rätt ordning (01–07).
- [ ] **Hero (01):** "Innehåll — sju kapitel". TOC:n har 7 entries.
- [ ] **Tidslinje (02):** PageHead visar 02/Översikt &/tidslinje/KAP. 2/läs: 4 min/Ed. 2026/I. Warn-callout. Legend. Fas-band (blå/warm/blå-deep). Horisontell scroll. 10 noder i ordning. Scrollhint-text.
- [ ] **Arbetsmiljö (03):** PageHead visar 03/Arbetsmiljö &/riskbedömning/KAP. 3/läs: 12 min. grid-labels 3.1–3.10.
- [ ] **Föräldra (04):** PageHead 04/Föräldra-/ledighet/KAP. 4/läs: 10 min. grid-labels 4.1, 4.2, 4.3, …, 4.10. Den gamla timeline-visualiseringen är borta.
- [ ] **FAQ (05):** PageHead 05/.../KAP. 5/ingen läs-tid. grid-label 5.1.
- [ ] **Resurser (06):** PageHead 06/.../KAP. 6/ingen läs-tid. grid-label 6.1.
- [ ] **Kontakt (07):** PageHead 07/.../KAP. 7/ingen läs-tid. grid-labels 7.1, 7.2, 7.3, 7.4.
- [ ] Rail-nummer animerar korrekt när du scrollar genom varje kapitel.

- [ ] **Step 11.3: Mobil-verifiering**

I DevTools, byt viewport till 375 × 667 (iPhone). Kontrollera:

- [ ] Rail är dold.
- [ ] Top-bar med hamburger syns.
- [ ] Klick på hamburgern öppnar nav-drawer med alla 7 kapitel.
- [ ] **Tidslinje (02):** Horisontell scroll är ersatt med vertikal stack. Fas-band är dolt. `— LEDIGHET —` syns ovanför "Förlossning"-noden. `— ÅTERGÅNG —` syns ovanför "Återgång"-noden. Scroll-hint är dold.
- [ ] Övriga sidor renderar utan horisontell scrollbar på viewport-nivå.

- [ ] **Step 11.4: Responsiv brytning 700–900 px**

Dra DevTools-viewportens bredd mellan 700 och 900 px. Tidslinjen ska:
- Vid 768 px och nedåt: vertikal.
- Vid 769 px och uppåt: horisontell.
- Ingen visuell glitch vid brytpunkten.

- [ ] **Step 11.5: Git-status och slutcommit (om något städbehov)**

```bash
git status
git log --oneline -15
```
Ska visa commits från task 1–11 (task 10 valfri). Arbetsträdet ska vara rent.

- [ ] **Step 11.6: Final verifieringscommit (valfri, om du hittade justeringar)**

Om allt redan fungerar: ingen commit behövs.

---

## Efteråt

När planen är klar:

1. Uppdatera projektets `CLAUDE.md` om du vill nämna det nya kapitlet explicit. (Valfritt — dokumentationsskulle inom spec nästa gång.)
2. Push till `main`. GitHub-integration på Cloudflare bygger automatiskt och deployer inom 30–60 s.
3. Verifiera produktionsbygget på https://graviddoktor.se efter deploy.
