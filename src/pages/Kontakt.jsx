import PageHead from '../components/PageHead.jsx';

export default function Kontakt() {
  return (
    <section className="page" data-page="kontakt" data-screen-label="07 Kontakt">
      <PageHead
        num="07"
        title="Kontakt &"
        titleEm="stöd"
        eyebrow="KAP. 7"
        lede="Om du har frågor, befinner dig i en akut situation eller vill få rådgivning kring din specifika situation — här är de viktigaste vägarna framåt."
      />
      <div className="grid">
        <div className="grid__label"><strong>7.1</strong>Stöd</div>
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
}
