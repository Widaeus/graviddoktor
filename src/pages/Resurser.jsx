import PageHead from '../components/PageHead.jsx';

const RESOURCES = [
  { tag: "Lag", t: "Arbetsmiljölagen (1977:1160)", d: "4 kap. 6 § — särskilda bestämmelser om gravida och ammande arbetstagare.", meta: ["riksdagen.se", "→ Läs författning"] },
  { tag: "Föreskrift", t: "AFS 2007:5 — Gravida och ammande", d: "Arbetsmiljöverkets föreskrifter om riskbedömning och åtgärder.", meta: ["av.se", "→ Öppna PDF"] },
  { tag: "Lag", t: "Föräldraledighetslagen (1995:584)", d: "Omfattande reglering av rätten till ledighet och skydd mot missgynnande.", meta: ["riksdagen.se", "→ Läs författning"] },
  { tag: "Lag", t: "Socialförsäkringsbalken", d: "10–13 kap. — föräldrapenning, havandeskapspenning, graviditetspenning.", meta: ["riksdagen.se", "→ Läs författning"] },
  { tag: "Myndighet", t: "Försäkringskassan — Förälder", d: "Beräkningsverktyg, blanketter, information om SGI-skydd.", meta: ["fk.se", "→ Mina sidor"] },
  { tag: "Organisation", t: "Sveriges Läkarförbund", d: "Rådgivning, lokalförening, tvistestöd. Medlemsförsäkringar via Salus Ansvar.", meta: ["slf.se", "→ Kontakt"] },
  { tag: "Myndighet", t: "Socialstyrelsen — ST", d: "Föreskrifter om ST-utbildning och konsekvenser av ledighet.", meta: ["socialstyrelsen.se", "→ HSLF-FS"] },
  { tag: "Avtal", t: "AB 2023 + Läkaravtalet", d: "Allmänna bestämmelser samt specialbestämmelser för läkare — föräldralön 10 %.", meta: ["skr.se", "→ Avtalstext"] },
];

export default function Resurser() {
  return (
    <section className="page" data-page="resurser" data-screen-label="06 Resurser">
      <PageHead
        num="06"
        title="Resurser &"
        titleEm="länkar"
        eyebrow="KAP. 6"
        lede="Samlade källor och primära rättskällor. Allt material här hänvisar till officiella svenska myndigheter, lagar och kollektivavtal."
      />
      <div className="grid">
        <div className="grid__label"><strong>6.1</strong>Källor</div>
        <div className="section reveal">
          <div className="section__kicker">Primärkällor</div>
          <div className="tiles">
            {RESOURCES.map((r, i) => (
              <div className="tile" key={i}>
                <div className="tile__tag">{r.tag} · {String(i+1).padStart(2, "0")}</div>
                <div className="tile__t">{r.t}</div>
                <div className="tile__d">{r.d}</div>
                <div className="tile__x">
                  <span>{r.meta[0]}</span>
                  <span className="tile__arrow">{r.meta[1]} →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
