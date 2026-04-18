import PageHead from '../components/PageHead.jsx';

const FACKLIGT = [
  { t: "Sveriges Läkarförbund", d: "Central medlemsrådgivning och juridiskt stöd i arbetsrättsliga frågor.", host: "slf.se", url: "https://slf.se/" },
  { t: "Stockholms läkarförening", d: "Lokalförening — första linjen vid arbetsmiljö- och förhandlingsfrågor.", host: "slf.se/stockholms-lakarforening", url: "https://slf.se/stockholms-lakarforening/" },
  { t: "SYLF", d: "Sveriges Yngre Läkares Förening — ST-, BT- och underläkarfrågor.", host: "slf.se/sylf", url: "https://slf.se/sylf/" },
  { t: "Medlemsförsäkringar via SLF", d: "Inkomstförsäkring samt sjuk- och olycksfallsförsäkring genom medlemskap.", host: "slf.se/medlem", url: "https://slf.se/medlem/forsakringar/" },
];

const ARBETSPLATS = [
  { t: "Skyddsombud", d: "Lokalt skyddsombud på kliniken — första steget vid arbetsmiljöfrågor.", host: "på din arbetsplats", url: null },
  { t: "Närmaste chef & HR", d: "Anmälan, riskbedömning, föräldrapenningtillägg och föräldralön.", host: "intern kanal", url: null },
  { t: "Studierektor", d: "ST-plan, randning och delmål — för underläkare under utbildning.", host: "intern kanal", url: null },
  { t: "Företagshälsovård", d: "Oberoende medicinsk bedömning — via HR eller chef.", host: "lokal leverantör", url: null },
  { t: "CAMM", d: "Centrum för arbets- och miljömedicin. Kostnadsfri rådgivning till gravida i Region Stockholm eller Gotland; remissfritt för gravida utan tillgång till företagshälsovård.", host: "camm.regionstockholm.se", url: "https://www.camm.regionstockholm.se/patientmottagning/arbets--och-miljomedicinska-mottagningen/om-du-ar-gravid/" },
];

const MYNDIGHETER = [
  { t: "Försäkringskassan", d: "Graviditetspenning, föräldrapenning, SGI och 10-dagar.", host: "forsakringskassan.se", url: "https://www.forsakringskassan.se/privatperson/foralder" },
  { t: "Arbetsmiljöverket", d: "Tillsyn och anmälan vid brister i arbetsmiljön.", host: "av.se", url: "https://www.av.se/halsa-och-sakerhet/graviditet-och-amning/" },
  { t: "Diskrimineringsombudsmannen", d: "Missgynnande som har samband med graviditet eller föräldraledighet.", host: "do.se", url: "https://www.do.se/" },
  { t: "Strålsäkerhetsmyndigheten", d: "Joniserande strålning och gravid personal — 1 mSv-taket.", host: "stralsakerhetsmyndigheten.se", url: "https://www.stralsakerhetsmyndigheten.se/" },
];

function ContactList({ items }) {
  return (
    <ul className="clist">
      {items.map((it, i) => (
        <li key={i} className="clist__row">
          <div className="clist__t">{it.t}</div>
          <div className="clist__d">{it.d}</div>
          <div className="clist__l">
            {it.url
              ? <a href={it.url} target="_blank" rel="noopener noreferrer">{it.host} →</a>
              : <span>{it.host}</span>}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Kontakt() {
  return (
    <section className="page" data-page="kontakt" data-screen-label="07 Kontakt">
      <PageHead
        num="07"
        title="Kontakt &"
        titleEm="stöd"
        eyebrow="KAP. 7"
        lede="Vem du vänder dig till beror på vilken typ av fråga du har. Fackligt stöd för arbetsrätt, skyddsombud för arbetsmiljö, Försäkringskassan för ersättning, CAMM för oberoende medicinsk bedömning."
      />

      <div className="grid">
        <div className="grid__label"><strong>7.1</strong>Fackligt stöd</div>
        <div className="section reveal">
          <div className="section__kicker">Läkarförbundet och lokala föreningar</div>
          <ContactList items={FACKLIGT} />
        </div>
      </div>

      <div className="grid">
        <div className="grid__label"><strong>7.2</strong>Arbetsplats</div>
        <div className="section reveal">
          <div className="section__kicker">Lokala kanaler</div>
          <ContactList items={ARBETSPLATS} />
        </div>
      </div>

      <div className="grid">
        <div className="grid__label"><strong>7.3</strong>Myndigheter</div>
        <div className="section reveal">
          <div className="section__kicker">Statliga kanaler</div>
          <ContactList items={MYNDIGHETER} />
        </div>
      </div>

      <div className="grid">
        <div className="grid__label"><strong>7.4</strong>Feedback</div>
        <div className="section reveal">
          <div className="feedback">
            <div className="feedback__tag">Rättelser</div>
            <div>
              <h5>Ser du något som förefaller felaktigt eller föråldrat?</h5>
              <p>Innehållet bygger på lagtext, föreskrifter och kollektivavtal som revideras över tid. Om en uppgift avviker från aktuell rättskälla eller din egen erfarenhet — hör gärna av dig. Förslag på korrigeringar, tillägg eller preciseringar tas emot via kontaktuppgifterna i sidfoten.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
