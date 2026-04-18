# Kap 02 "Översikt & tidslinje" — Design

**Datum:** 2026-04-18
**Status:** Design godkänd, klar för plan
**Ägare:** Jacob Widaeus

---

## 1. Mål

Lägga till ett nytt kapitel 02 som ger läkaren en **visuell, kronologisk översikt** av alla centrala händelser, skyldigheter och möjligheter från graviditetens början till återgång i arbete efter 1 år. Ersätter den befintliga (mer begränsade och delvis felaktiga) tidslinjen i nuvarande Föräldraledighet 3.3.

Kapitlet är rent översiktligt — ingen ny faktatext utöver det som kondenseras från kap 03 Arbetsmiljö och kap 04 Föräldraledighet. Inga kryssrutor, ingen checklista.

## 2. Motiv

- En nyligen gravid läkare landar på sajten och vill omedelbart se *"vad händer när, och vad gör jag"* utan att läsa igenom 10+ sektioner arbetsmiljöjuridik.
- Den existerande tidslinjen i Föräldra 3.3 är gömd mitt i ett textkapitel och har ett sakfel: den buntar ihop två olika typer av graviditetspenning (fysiskt tungt arbete vs arbetsförbud p.g.a. risk) som om de hade samma tidsfönster. Se `reference_docs/1_Arbetsmiljö/deep-research-report.md` rader 118–120.
- Kapitlet blir sajtens "kom-igång-vy" och kan länkas direkt för att stödja konkret handling.

## 3. Omfång — vad som bygger

### 3.1 Nytt kapitel

- **Id:** `tidslinje`
- **Num:** `02`
- **Label i nav:** `Översikt & tidslinje`
- **Title (kort):** `Tidslinje`
- **PageHead-titel:** `Översikt &` + `titleEm="tidslinje"`
- **Eyebrow:** `KAP. 2`
- **Ed:** `Ed. 2026/I` (default)
- **Lede:** Kort beskrivande ingress som förklarar att detta är ett visuellt index över hela förloppet — innehållet fördjupas i efterföljande kapitel.
- **Läs-tid:** 4 min (främst visuellt innehåll).

### 3.2 Omnumrering

Alla efterföljande kapitel får sitt nummer höjt med 1. Internumreringen i varje kapitel (t.ex. `2.1`, `2.2`) glider med till det nya nummerhuvudet.

| Gammal | Ny | Kapitel | Intern renumrering |
|---|---|---|---|
| 01 | 01 | Hem | — (ingen ändring) |
| — | **02** | **Översikt & tidslinje (ny)** | 2.1 (vid behov) |
| 02 | 03 | Arbetsmiljö | 2.1–2.10 → 3.1–3.10 |
| 03 | 04 | Föräldraledighet | 3.1–3.11 → 4.1–4.2, 4.3–4.10 (gamla 3.3 borttagen, efterföljande glider upp med en) |
| 04 | 05 | Vanliga frågor | 4.1 → 5.1 |
| 05 | 06 | Resurser | 5.1 → 6.1 |
| 06 | 07 | Kontakt | 6.1–6.4 → 7.1–7.4 |

### 3.3 Borttagning

Det gamla `.timeline`-blocket i Föräldra.jsx (nuvarande 3.3) tas bort i sin helhet. Den ersätts funktionellt av kap 02. CSS-klasserna `.timeline`, `.tl__item`, `.tl__dot`, `.tl__w`, `.tl__t`, `.tl__d` och `.timeline::before` i `src/styles.css` blir oanvända och tas bort.

Faktauppgifterna som fanns i den gamla 3.3-tidslinjen (om inte redan representerade på annat ställe) flyttas in antingen i den nya tidslinjens noder eller som löptext till Föräldra-kapitlet.

### 3.4 Tillhörande ändringar

- **Hero TOC-kopia** (`src/pages/Hero.jsx`): `"Innehåll — sex kapitel"` → `"Innehåll — sju kapitel"`.
- **SEO meta** (`index.html`):
  - `<title>` förblir `Gravid Doktor — Handbok 2026`.
  - `<meta name="description">` uppdateras för att nämna tidslinjen. Förslag:
    > `Kronologisk översikt och rättigheter för dig som är läkare och gravid i Stockholm — från anmälan till återgång efter ledighet.`
- **Läs-tid-etiketten** (`PageHead.jsx`) får inte längre vara hårdkodad till `läs: 6 min`. Se §7 nedan.

## 4. Tidslinjens innehåll

### 4.1 Warn-callout ovanför tidslinjen

Visar att arbetsförbud p.g.a. arbetsmiljörisk är ett *parallellt spår* som inte passar in som enskild nod.

> **Rubrik:** Arbetsförbud p.g.a. risk — kan inträffa när som helst under graviditeten
>
> **Brödtext:** Om riskbedömningen visar allvarlig risk (strålning över 1 mSv-tak, cytostatika utan skydd, immunnegativ mot CMV/parvovirus under utbrott, smittsam TB utan FFP3) **och omplacering inte är möjlig**, fattar arbetsgivaren beslut om skyddsledighet enligt § 20 FLL → **graviditetspenning hela förbudsperioden** t.o.m. dag 11 före BF.
>
> Detta är *ett annat rättsligt spår* än GP vid fysiskt tungt arbete (som har ett fast fönster från dag 60 före BF). Blanda inte ihop dem — de baseras på olika paragrafer och kan inte tas samtidigt för samma dag.

Renderas med `.callout.callout--warn` (sajtens befintliga stil, ingen ny CSS).

### 4.2 Legend

Rad direkt under callout / ovanför tidslinjen:

- Fylld blå prick — **Diskret händelse** (inträffar ett specifikt datum/vecka).
- `Bör`-pill (fylld blå) — **Du eller arbetsgivaren måste** göra detta.
- `Kan`-pill (ljusblå, blå text) — **Valfritt eller villkorat**.

### 4.3 Noder (10 stycken + twin-par)

Kronologisk ordning, utan undantag. Varje nod har: tidsetikett (mono/uppercase/blå), titel (serif, blå accent på nyckelord vid behov), kort beskrivande text (~1–2 meningar, 14 px), och 1–2 `Bör`/`Kan`-taggar.

| # | Tidsetikett | Titel | Beskrivning | Handlingar |
|---|---|---|---|---|
| 1 | V. 0–8 | **Anmäl skriftligt** | Skyddet aktiveras av din anmälan — AFS 2023:2 kap 7. | `Bör`: Mejla chef · `Kan`: Åberopa lokalt jouravtal (Region Stockholm 2008) |
| 2 | Inom 1–2 v | **Riskbedömning** | Skriftlig bedömning med chef och skyddsombud enligt § 5 AFS 2023:2. | `Bör`: Dokumentera risker · `Kan`: Begär serologi (CMV, parvovirus B19) |
| 3 | ≥ 3 mån före ledighet | **Ledighetsanmälan** | AB 25 skärper FLL — tre månader, inte två. Ange start, slut, omfattning, typ. | `Bör`: Skriftligt till HR |
| 4A | Dag 60 före BF | **GP · fysiskt tungt arbete** | Om omplacering inte går: 80 % av SGI, **max 50 dagar** t.o.m. dag 11 före BF. | `Kan`: Ansök hos FK |
| 4B | Dag 60 före BF | **Föräldrapenning kan tas ut** | Tidigaste FP-uttag för den som föder. Båda föräldrar: mödravård + föräldrautbildning. | `Kan`: Ansök på Mina sidor |
| 5 | Förlossning | **Mammaledighet + 10-dagar** | Min. 7 v före + 7 v efter. Andra föräldern: 10-dagar tillfällig FP. | `Bör`: Anmäl 10-d till FK senast 30 dagar efter första hemmadagen |
| 6 | 0–180 d postpartum | **FP-tillägg + föräldralön** | 10 % av lönebortfall i 180 d. Mellanskillnad över FK-tak i upp till 270 d. AB § 29. | `Bör`: Lämna FK-utbetalningsspec till HR månadsvis |
| 7 | 120 d FP | **Semestertaket** | 120 d är semesterlönegrundande (180 d för ensam vårdnadshavare). Därefter ingen intjäning. | `Kan`: Planera intjänad semester i anslutning till ledigheten |
| 8 | 1 år | **SGI kräver FP-uttag** | 80 % arbete kräver 20 % FP/vecka för att skydda SGI. | `Bör`: Stäm av med FK innan deltid påbörjas |
| 9 | Återgång | **Samma eller likvärdigt arbete** | 16 § FLL — omvänd bevisbörda vid tvist. | `Bör`: Skriftligt återgångsbesked · `Kan`: Flexibla arbetsformer för barn <8 år |

**Twin-par 4A/4B:** Dessa två noder delar tidpunkt (dag 60 före BF) men är olika sakfrågor. De visas visuellt grupperade (delad tidsetikett eller visuell "brygga") men som separata kort, så att det framgår att båda händer samtidigt.

## 5. Visuell design

### 5.1 Desktop (≥ 769 px)

- **Fas-band** ovanför tidslinjen i full bredd:
  - `Graviditet · anmälan → BF` (blå)
  - `Ledighet · förlossning → 12 mån` (warm)
  - `Återgång · 12 mån →` (blå-deep)
  - Mono, uppercase, 2 px nedre bård i respektive färg. Anger fas-övergångar.
- **Horisontell scrollcontainer** med `overflow-x: auto`. Tunn scrollbar i rule-färg.
- **Nodbredd:** 220 px. Gap: 0 (dot-linjen går genom allt).
- **Horisontell dot-linje** 1 px i `--rule`, vid `top: 44px` i nodkolumnen.
- **Dot:** 14 px cirkel, 2 px blå bård, vit fyllning som standard. Fylld blå för "passerade" eller markanta noder (hela tidslinjen byggs statisk; det finns ingen "nu"-markör såvida vi inte lägger in det i framtiden).
- **Tidsetikett (mono, 10 px, blå, 0.14em letter-spacing, uppercase):** min-höjd 26 px så alla rader linjerar.
- **Titel (serif, 16 px, 400):** 8 px margin-bottom.
- **Beskrivning (14 px, 1.5 line-height, ink-2):** 10 px margin-bottom, `max-width` bred nog för 220 px nod.
- **Act-tags:**
  - `.act__tag.bor`: bakgrund `--blue`, vit text.
  - `.act__tag.kan`: bakgrund `--blue-soft`, text `--blue-deep`.
  - Mono 8.5–9 px, uppercase, 0.16em letter-spacing, 2–6 px padding, 2 px border-radius.
- **Twin-par (4A/4B):** Gemensam etikett "Dag 60 före BF" ovanför de två noderna, eller vertikal 1 px divider mellan dem i `--rule-soft`. Detaljerad lösning i plan — enklaste: nod 4A får tidsetikett `"Dag 60 före BF · A"` och 4B får `"Dag 60 före BF · B"` (som mockup v3).
- **Scrollhint:** liten uppercase-text `"Skrolla för senare faser →"` under tidslinjen.

### 5.2 Mobil (≤ 768 px)

- Hela fas-bandet (`.htl__phase-band`) döljs på mobil. Faserna markeras i stället som smala fas-etiketter som visas vid *fas-övergångarna* mellan noderna: mono, 9 px, 0.18em letter-spacing, uppercase, i respektive fas-färg (warm för Ledighet, blue-deep för Återgång). Konkret: `— LEDIGHET —` ovanför nod 5 (Förlossning), `— ÅTERGÅNG —` ovanför nod 9 (Återgång). Ingen fas-etikett före nod 1 — användaren befinner sig redan i Graviditet-fasen.
- Noderna **stackar vertikalt**. Layouten är likvärdig med hur `.timeline` i gamla 3.3 renderade: vertikal 1 px linje till vänster, dot till vänster om noden, innehåll till höger.
- Scrollcontainern tappar sin horisontella karaktär — `overflow-x: visible` under brytpunkten, `display: flex; flex-direction: column`.
- Twin-par (4A/4B) stackar också vertikalt utan visuell koppling utöver att de delar identisk tidsetikett.
- Warn-callout behåller sin stil men stackar enligt befintlig `.callout` mobilregel.
- Text tätare: beskrivning 13.5 px, titel 17 px.

### 5.3 CSS-namnrymd

Nya CSS-klasser följer samma BEM-lika stil som övriga sajten (jfr `.callout__tag`, `.callout--warn`, `.row__wk`). Root-prefix **`.htl`** (horizontal timeline) för att inte krocka med den borttagna `.tl__*`-familjen:

- `.htl` — root/container
- `.htl__phase-band`, `.htl__phase-seg`, `.htl__phase-seg--grav`, `.htl__phase-seg--led`, `.htl__phase-seg--ret`
- `.htl__scroll` — horisontell scrollcontainer (desktop) / vertikal stack (mobil)
- `.htl__item`, `.htl__dot`, `.htl__w`, `.htl__t`, `.htl__d`, `.htl__acts`
- `.htl__item--twin` (för 4A/4B)
- `.htl__legend`, `.htl__legend-item`, `.htl__legend-dot`
- `.htl__scroll-hint`
- `.act__row`, `.act__tag`, `.act__tag--bor`, `.act__tag--kan` (delbara — kan återanvändas om annat kapitel senare får bör/kan-taggar)

Befintliga CSS-variabler `--blue`, `--blue-wash`, `--warm`, `--warm-wash`, `--rule` m.fl. återanvänds.

## 6. Filer som ändras eller skapas

### 6.1 Nya

- `src/pages/Tidslinje.jsx` — ny sidkomponent.

### 6.2 Ändrade

- `src/data/pages.js` — lägg till `tidslinje`-entry på position 2, renumrera 03–07.
- `src/App.jsx` — importera `Tidslinje`, rendera den efter `Hero`.
- `src/pages/Hero.jsx` — TOC-text `"sex kapitel"` → `"sju kapitel"`.
- `src/pages/Arbetsmiljo.jsx` — renumrera 2.1–2.10 → 3.1–3.10 i `grid__label` och eventuella textreferenser.
- `src/pages/Foraldra.jsx` — ta bort hela 3.3-blocket, renumrera 3.1→4.1, 3.2→4.2, 3.4→4.3, 3.5→4.4, 3.6→4.5, 3.7→4.6, 3.8→4.7, 3.9→4.8, 3.10→4.9, 3.11→4.10. Verifiera att texten inte på annat ställe felaktigt slår ihop GP-fysiskt och arbetsförbud-GP.
- `src/pages/FAQ.jsx` — 4.1 → 5.1.
- `src/pages/Resurser.jsx` — 5.1 → 6.1. Ta bort `läs: X min` från PageHead (se §7).
- `src/pages/Kontakt.jsx` — 6.1–6.4 → 7.1–7.4. Ta bort `läs: X min` (se §7).
- `src/components/PageHead.jsx` — gör läs-tiden till en prop istället för hårdkodad `läs: 6 min` (se §7).
- `src/styles.css` — lägg till `.htl-*`-klasser + mobil-media-query; ta bort oanvända `.timeline`, `.tl__item`, `.tl__dot`, `.tl__w`, `.tl__t`, `.tl__d` och `.timeline::before`.
- `index.html` — uppdaterad `<meta name="description">`.

### 6.3 Oförändrade

- `src/components/Rail.jsx`, `Nav.jsx` — drivs av `PAGES`-arrayen, ingen strukturell ändring krävs. Rail ska fortfarande visa `01`–`07` snyggt; dot-listan skalar till 7 prickar utan ändringar.
- `src/components/Geo.jsx`, `End.jsx` — orörda.

## 7. Läs-tid-prop

### 7.1 Nuvarande tillstånd

`src/components/PageHead.jsx` renderar hårdkodat:

```jsx
<span>läs: 6 min</span>
```

Varenda PageHead-instans visar `6 min` oavsett sidlängd — inklusive Resurser och Kontakt, som är listor och inte läsinnehåll.

### 7.2 Ny ansats

- Ändra `PageHead` till att ta en valfri `readTime`-prop.
- Om `readTime` är angivet renderas `<span>läs: {readTime}</span>`.
- Om `readTime` är utelämnat (eller `null`) renderas **inget** läs-span.

### 7.3 Värden per kapitel

Estimaten är approximativa och får justeras senare. Grundregel: ~200 ord/min.

| Kap | Sida | `readTime` |
|---|---|---|
| 02 | Tidslinje | `"4 min"` |
| 03 | Arbetsmiljö | `"12 min"` |
| 04 | Föräldraledighet | `"10 min"` |
| 05 | Vanliga frågor | `"8 min"` |
| 06 | Resurser | *ej angivet* |
| 07 | Kontakt | *ej angivet* |

Hero (01) använder inte `PageHead` och påverkas inte.

## 8. Acceptanskriterier

- Nytt kapitel 02 "Översikt & tidslinje" syns i Rail, Nav och Hero TOC. TOC-texten säger "sju kapitel".
- Desktop (≥ 769 px): horisontell scrollbar tidslinje med 10 noder, fas-band ovanför, warn-callout ovanför det, legend mellan callout och tidslinje.
- Mobil (≤ 768 px): samma innehåll, men vertikalt stackat; fas-band ersatt av inline fas-etiketter.
- Klick på nav-länken `02 · Översikt & tidslinje` skrollar till kapitlet.
- Rail-nummer animerar till `02` när kapitlet är i viewport.
- Warn-callout förklarar att arbetsförbud-GP är ett separat spår från GP-fysiskt.
- GP-noderna 4A och 4B står på samma plats på tidsaxeln (dag 60 före BF) och är tydligt åtskilda som två olika sakfrågor.
- Läs-tiden `6 min` är borta överallt. Varje kapitel med PageHead visar sin specifika läs-tid (förutom Resurser och Kontakt, där läs-tiden utelämnas helt).
- Det gamla `.timeline`-blocket i Föräldra-kapitlet är borttaget.
- SEO: `<meta name="description">` nämner tidslinjen.
- Alla interna paragrafnummer i kap 03, 04, 05, 06, 07 är konsekvent omnumrerade.
- `npm run build` passerar utan fel; `npm run dev` renderar sidan korrekt på både desktop och mobil.

## 9. Utanför scope

- Allmän granskning av *andra* innehållspåståenden mot `reference_docs/` (GP-felet hittades specifikt; annat kan finnas men hanteras som separat uppgift).
- Interaktivitet utöver scroll och navigering: ingen "var är jag i graviditeten"-markör, inga kryssrutor, ingen personalisering baserat på BF-datum.
- Förändringar i Rail/Nav-komponenterna utöver det som driver sig själv från `PAGES`.
- Ändring av Hero hero-statistikraden (`hero__bottom`) eller övrig Hero-layout.
- Analyticsevent på tidslinje-interaktion.
- Utskriftsvänlig vy.

## 10. Risker och förbehåll

- **Hero TOC "sju kapitel":** om framtida kapitel läggs till eller tas bort måste texten uppdateras manuellt. Alternativt går det att härleda från `PAGES.length`, men det räknas som mindre förbättring utanför scope.
- **Mobil horisontell → vertikal:** CSS-omskrivningen av samma JSX är något omfattande (alla `grid-auto-flow: column` → `column`, scrollcontainern m.m.). Krävs noggrann responsiv testning mellan 600–900 px.
- **Omnumreringen:** lätt att missa en intern `X.Y`-referens. Planen ska inkludera sökning efter strängmönstret `<strong>\d+\.\d+</strong>` i alla pages-filer innan avslutning.
- **GP-felet i övrig text:** Den befintliga `rows`-tabellen i 3.4 (blir 4.4) hanterar skillnaden korrekt. Men löptext i 3.3 (som tas bort) hade formuleringen fel; ingen annan plats verifierad. Planfasen ska söka efter `graviditetspenning` + `trimester` / `vecka 22` för att fånga ev. andra felaktigheter.
