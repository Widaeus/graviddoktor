import PageHead from '../components/PageHead.jsx';

const RESOURCES = [
  {
    tag: "Lag",
    t: "Arbetsmiljölagen (1977:1160)",
    d: "Ramlagen för arbetsmiljöansvar. Kompletteras av Arbetsmiljöverkets föreskrifter.",
    host: "riksdagen.se",
    cta: "Läs författning",
    url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/arbetsmiljolag-19771160_sfs-1977-1160/",
  },
  {
    tag: "Föreskrift",
    t: "AFS 2023:2 kap 7 — Gravida, nyförlösta och ammande",
    d: "Arbetsmiljöverkets föreskrifter om individuell riskbedömning och åtgärdstrappan. Ersätter AFS 2007:5 sedan 1 januari 2025.",
    host: "av.se",
    cta: "Öppna föreskrift",
    url: "https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/planering-och-organisering-av-arbetsmiljoarbetet-afs-20232-foreskrifter/",
  },
  {
    tag: "Lag",
    t: "Föräldraledighetslagen (1995:584)",
    d: "Rätten till ledighet, delledighet och skydd mot missgynnande (16 §). Omvänd bevisbörda i tvister.",
    host: "riksdagen.se",
    cta: "Läs författning",
    url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/foraldraledighetslag-1995584_sfs-1995-584/",
  },
  {
    tag: "Lag",
    t: "Socialförsäkringsbalken (2010:110)",
    d: "10–13 kap. — graviditetspenning, föräldrapenning och tillfällig föräldrapenning.",
    host: "riksdagen.se",
    cta: "Läs författning",
    url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/socialforsakringsbalk-2010110_sfs-2010-110/",
  },
  {
    tag: "Lag",
    t: "Strålskyddslagen (2018:396)",
    d: "4 kap. 7–11 §§ — gravid och ammande arbetstagare. 1 mSv-taket, rätt till omplacering, förbud mot nödsituationer.",
    host: "riksdagen.se",
    cta: "Läs författning",
    url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/stralskyddslag-2018396_sfs-2018-396/",
  },
  {
    tag: "Förordning",
    t: "HSLF-FS 2021:8 — Läkarnas ST",
    d: "Socialstyrelsens föreskrifter om specialiseringstjänstgöring. Föräldraledighet får inte tillgodoräknas i ST-tiden.",
    host: "socialstyrelsen.se",
    cta: "Läs föreskrift",
    url: "https://www.socialstyrelsen.se/kunskapsstod-och-regler/regler-och-riktlinjer/foreskrifter-och-allmanna-rad/konsoliderade-foreskrifter/20218-om-lakarnas-specialiseringstjanstgoring/",
  },
  {
    tag: "Myndighet",
    t: "Försäkringskassan — Förälder",
    d: "Graviditetspenning, föräldrapenning, SGI, 10-dagar. Ansökningar och beräkningsverktyg.",
    host: "forsakringskassan.se",
    cta: "Mina sidor",
    url: "https://www.forsakringskassan.se/privatperson/foralder",
  },
  {
    tag: "Myndighet",
    t: "Försäkringskassan — Graviditetspenning",
    d: "Villkor, underlag från arbetsgivaren, ansökningsrutiner.",
    host: "forsakringskassan.se",
    cta: "Öppna sida",
    url: "https://www.forsakringskassan.se/privatperson/foralder/vantar-barn/graviditetspenning",
  },
  {
    tag: "Myndighet",
    t: "Arbetsmiljöverket — Graviditet och amning",
    d: "Riskbedömning, åtgärdstrappa, arbetsförbud. Tillsyn och anmälningskanaler.",
    host: "av.se",
    cta: "Öppna sida",
    url: "https://www.av.se/halsa-och-sakerhet/graviditet-och-amning/",
  },
  {
    tag: "Region",
    t: "CAMM — Centrum för arbets- och miljömedicin",
    d: "Regional specialistresurs. Kostnadsfri och remissfri rådgivning för gravida i Region Stockholm.",
    host: "camm.regionstockholm.se",
    cta: "Gravid-sida",
    url: "https://www.camm.regionstockholm.se/patientmottagning/arbets--och-miljomedicinska-mottagningen/om-du-ar-gravid/",
  },
  {
    tag: "Facklig",
    t: "Sveriges Läkarförbund — Gravid",
    d: "Samlad råd-och-stöd-sida om graviditet, arbetsmiljö och avtal. Lokalförening ger individuell rådgivning.",
    host: "slf.se",
    cta: "Öppna råd-och-stöd",
    url: "https://slf.se/rad-och-stod/hallbart-arbetsliv/gravid/",
  },
  {
    tag: "Facklig",
    t: "SYLF — Gravid ST-läkare",
    d: "Sveriges Yngre Läkares Förening. ST-specifika frågor om randning, tjänstgöringsförlängning och arbetsmiljö.",
    host: "slf.se/sylf",
    cta: "Öppna sida",
    url: "https://slf.se/sylf/din-karriar/gravid/",
  },
  {
    tag: "Facklig",
    t: "SLF — Föräldraledighet",
    d: "Praktisk guide till föräldraledighet, anmälan, föräldrapenningtillägg och föräldralön.",
    host: "slf.se",
    cta: "Öppna sida",
    url: "https://slf.se/rad-och-stod/lag-och-avtal/foraldraledighet/",
  },
  {
    tag: "Avtal",
    t: "HÖK 25 / AB 25 — Läkaravtalet",
    d: "Huvudöverenskommelse mellan SKR/Sobona och Läkarförbundet. AB § 29 reglerar föräldrapenningtillägg (180 d) och föräldralön (270 d).",
    host: "slf.se",
    cta: "Öppna avtal",
    url: "https://slf.se/rad-och-stod/lag-och-avtal/kollektivavtal/",
  },
  {
    tag: "Försäkring",
    t: "Afa Försäkring — Kollektivavtalade försäkringar",
    d: "AGS-KL (sjuk), TFA-KL (arbetsskada), TGL-KL (tjänstegrupplivförsäkring). Regionanställd omfattas automatiskt.",
    host: "afaforsakring.se",
    cta: "Öppna kund",
    url: "https://www.afaforsakring.se/",
  },
  {
    tag: "Myndighet",
    t: "Diskrimineringsombudsmannen — Föräldraledighet",
    d: "Missgynnande som har samband med föräldraledighet. Omvänd bevisbörda, skadeståndsärenden.",
    host: "do.se",
    cta: "Öppna sida",
    url: "https://www.do.se/",
  },
];

export default function Resurser() {
  return (
    <section className="page" data-page="resurser" data-screen-label="05 Resurser">
      <PageHead
        num="05"
        title="Resurser &"
        titleEm="länkar"
        eyebrow="KAP. 5"
        lede="Samlade primärkällor: lagtext, föreskrifter, myndighetsinformation och fackliga guider. Allt öppnar i ny flik."
      />
      <div className="grid">
        <div className="grid__label"><strong>5.1</strong>Källor</div>
        <div className="section reveal">
          <div className="section__kicker">Primärkällor</div>
          <div className="tiles">
            {RESOURCES.map((r, i) => (
              <a className="tile" key={i} href={r.url} target="_blank" rel="noopener noreferrer">
                <div className="tile__tag">{r.tag} · {String(i+1).padStart(2, "0")}</div>
                <div className="tile__t">{r.t}</div>
                <div className="tile__d">{r.d}</div>
                <div className="tile__x">
                  <span>{r.host}</span>
                  <span className="tile__arrow">{r.cta} →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
