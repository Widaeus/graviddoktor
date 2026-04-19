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
    d: '16 § FLL — bevislättnadsregel vid tvist i 24 §.',
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
        title="Tidslinje"
        eyebrow="KAP. 2"
        readTime="4 min"
        lede="En kronologisk karta med praktisk arbetsgång från besked om graviditet till återgång efter ledigheten — rekommenderad process snarare än lagstadgade tidsfrister."
      />

      <div className="grid">
        <div className="grid__label"><strong>2.1</strong>Från anmälan till återgång</div>
        <div className="section reveal">
          <div className="section__kicker">Tidslinje · bör och kan per fas</div>

          <div className="htl__scroll">
            <div className="htl__phase-band">
              <div className="htl__phase-seg htl__phase-seg--grav" style={{ width: '1100px' }}>Graviditet · anmälan → BF</div>
              <div className="htl__phase-seg htl__phase-seg--led" style={{ width: '660px' }}>Ledighet · förlossning → 12 mån</div>
              <div className="htl__phase-seg htl__phase-seg--ret" style={{ width: '440px' }}>Återgång · 12 mån →</div>
            </div>
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
