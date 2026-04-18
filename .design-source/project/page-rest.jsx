// FAQ + Resurser + Kontakt
const FAQ_ITEMS = [
  {
    q: "När måste jag berätta om graviditeten för min arbetsgivare?",
    a: "Det finns ingen lagstadgad gräns, men för att aktivera arbetsgivarens skyldigheter enligt AFS 2007:5 bör du anmäla graviditeten skriftligt så snart du själv bekräftat den. Vid arbete med strålning, cytostatika eller smittämnen bör det ske omedelbart."
  },
  {
    q: "Kan jag fortsätta gå jour under graviditeten?",
    a: "Ja, så länge riskbedömningen inte visar annat. Från graviditetsvecka 20 har du rätt att avstå nattjour av medicinska skäl. Diskutera med din läkare och chef i god tid — många väljer att trappa ned jourtjänstgöring successivt."
  },
  {
    q: "Hur påverkas min ST-tid av föräldraledigheten?",
    a: "ST-tiden förlängs med exakt den tid du varit ledig. Delmoment som inte hunnit genomföras flyttas fram utan nackdel för specialistbevis enligt Socialstyrelsens föreskrifter."
  },
  {
    q: "Vad händer med min lön om jag blir avstängd från arbete?",
    a: "Du får graviditetspenning via Försäkringskassan — 80 % av SGI upp till takbeloppet. För lön över taket kan arbetsgivaren vara skyldig att betala mellanskillnad enligt kollektivavtalet. Kontrollera det lokala avtalet och kontakta facket om du är osäker."
  },
  {
    q: "Får jag nekas befordran eller lönerevision för att jag är föräldraledig?",
    a: "Nej. 16 § föräldraledighetslagen är tydlig: du får inte missgynnas i fråga om anställningsvillkor, lön, befordran eller kompetensutveckling på grund av att du har eller har utnyttjat din rätt till ledighet."
  },
  {
    q: "Vad gör jag om min chef vägrar göra en riskbedömning?",
    a: "Kontakta omedelbart skyddsombudet på arbetsplatsen. Skyddsombudet har rätt att begära åtgärder enligt 6 kap. 6a § arbetsmiljölagen, och om så krävs vända sig till Arbetsmiljöverket. Dokumentera alla kontakter skriftligt."
  },
  {
    q: "Hur många dagars semester tjänar jag in under ledigheten?",
    a: "Upp till 120 dagars föräldraledighet per förälder är semesterlönegrundande enligt 17a § semesterlagen. Vid flerbarnsfödsel gäller 180 dagar. Över den gränsen tjänas ingen ny semester in."
  },
  {
    q: "Kan jag jobba deltid när jag kommer tillbaka?",
    a: "Ja. Du har rätt att förkorta arbetstiden med upp till 25 % av normal arbetstid tills barnet fyller 8 år eller avslutat första skolåret — helt utan krav på föräldrapenninguttag."
  },
];

const PageFAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="page" data-page="faq" data-screen-label="06 FAQ">
      <PageHead
        num="06"
        title="Vanliga"
        titleEm="frågor"
        eyebrow="KAP. 6"
        lede="Frågor som läkarföreningar, skyddsombud och studierektorer får återkommande — samlade och med källhänvisning till lag, förordning eller kollektivavtal."
      />
      <div className="grid">
        <div className="grid__label"><strong>6.1</strong>Q · A</div>
        <div className="section reveal">
          <div className="section__kicker">8 återkommande frågor</div>
          <div>
            {FAQ_ITEMS.map((it, i) => (
              <div key={i} className={`faq__item ${open === i ? "open" : ""}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <div className="faq__q">
                  <div className="faq__n">Q.{String(i+1).padStart(2, "0")}</div>
                  <div className="faq__t">{it.q}</div>
                  <div className="faq__plus"></div>
                </div>
                <div className="faq__a"><p>{it.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

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

const PageResurser = () => (
  <section className="page" data-page="resurser" data-screen-label="07 Resurser">
    <PageHead
      num="07"
      title="Resurser &"
      titleEm="länkar"
      eyebrow="KAP. 7"
      lede="Samlade källor och primära rättskällor. Allt material här hänvisar till officiella svenska myndigheter, lagar och kollektivavtal."
    />
    <div className="grid">
      <div className="grid__label"><strong>7.1</strong>Källor</div>
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

const PageKontakt = () => (
  <section className="page" data-page="kontakt" data-screen-label="08 Kontakt">
    <PageHead
      num="08"
      title="Kontakt &"
      titleEm="stöd"
      eyebrow="KAP. 8"
      lede="Om du har frågor, befinner dig i en akut situation eller vill få rådgivning kring din specifika situation — här är de viktigaste vägarna framåt."
    />
    <div className="grid">
      <div className="grid__label"><strong>8.1</strong>Stöd</div>
      <div className="section reveal">
        <div className="section__kicker">Vem kontaktar jag?</div>
        <div className="contact">
          <div className="contact__card">
            <h5>Sveriges Läkarförbund</h5>
            <div className="sub">Juridisk &amp; facklig rådgivning</div>
            <div className="contact__row"><span>Telefon</span><span>08-790 33 00</span></div>
            <div className="contact__row"><span>Medlemsrådgivning</span><span>medlemsradgivning@slf.se</span></div>
            <div className="contact__row"><span>Öppet</span><span>Mån–fre 09:00–15:00</span></div>
            <div className="contact__row"><span>Akut</span><span>Lokalförening, första linje</span></div>
          </div>
          <div className="contact__card">
            <h5>Skyddsombud / HR</h5>
            <div className="sub">Lokalt på din arbetsplats</div>
            <div className="contact__row"><span>Primärt</span><span>Lokalt skyddsombud</span></div>
            <div className="contact__row"><span>Sekundärt</span><span>Huvudskyddsombud</span></div>
            <div className="contact__row"><span>Arbetsmiljöverket</span><span>010-730 90 00</span></div>
            <div className="contact__row"><span>Anmälan</span><span>av.se/anmalan</span></div>
          </div>
          <div className="contact__card">
            <h5>Försäkringskassan</h5>
            <div className="sub">Ersättning &amp; ansökningar</div>
            <div className="contact__row"><span>Kundcenter</span><span>0771-524 524</span></div>
            <div className="contact__row"><span>Mina sidor</span><span>fk.se → logga in</span></div>
            <div className="contact__row"><span>Blanketter</span><span>HSP · FP · TFP</span></div>
            <div className="contact__row"><span>Ansök senast</span><span>90 d efter barns födelse</span></div>
          </div>
          <div className="contact__card">
            <h5>Företagshälsovård</h5>
            <div className="sub">Medicinsk bedömning</div>
            <div className="contact__row"><span>Typiskt</span><span>Avonova · Feelgood · Previa</span></div>
            <div className="contact__row"><span>Kontakt</span><span>Via chef eller HR</span></div>
            <div className="contact__row"><span>Väntetid</span><span>Vanligen ≤ 5 arbetsdagar</span></div>
            <div className="contact__row"><span>Syfte</span><span>Oberoende riskbedömning</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

window.PageAvstangning = window.PageAvstangning;
window.PageFAQ = PageFAQ;
window.PageResurser = PageResurser;
window.PageKontakt = PageKontakt;
