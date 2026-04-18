import PageHead from '../components/PageHead.jsx';

export default function Kontakt() {
  return (
    <section className="page" data-page="kontakt" data-screen-label="06 Kontakt">
      <PageHead
        num="06"
        title="Kontakt &"
        titleEm="stöd"
        eyebrow="KAP. 6"
        lede="Vem du vänder dig till beror på vilken typ av fråga du har. Fackligt stöd för arbetsrätt, skyddsombud för arbetsmiljö, Försäkringskassan för ersättning, CAMM för oberoende medicinsk bedömning."
      />

      {/* 6.1 Fackligt stöd */}
      <div className="grid">
        <div className="grid__label"><strong>6.1</strong>Fackligt stöd</div>
        <div className="section reveal">
          <div className="section__kicker">Läkarförbundet och lokala föreningar</div>
          <div className="contact">
            <div className="contact__card">
              <h5>Sveriges Läkarförbund</h5>
              <div className="sub">Central medlemsrådgivning</div>
              <div className="contact__row"><span>Telefon</span><span>08-790 33 00</span></div>
              <div className="contact__row"><span>Medlemsrådgivning</span><span>medlemsradgivning@slf.se</span></div>
              <div className="contact__row"><span>Webb</span><span>slf.se</span></div>
              <div className="contact__row"><span>Öppet</span><span>Mån–fre 09:00–15:00</span></div>
            </div>
            <div className="contact__card">
              <h5>Stockholms läkarförening</h5>
              <div className="sub">Lokalförening — första linjen</div>
              <div className="contact__row"><span>E-post</span><span>info@slf.se</span></div>
              <div className="contact__row"><span>Webb</span><span>slf.se/stockholms-lakarforening</span></div>
              <div className="contact__row"><span>Arbetsmiljö</span><span>Aktiv arbetsmiljögrupp</span></div>
              <div className="contact__row"><span>Förhandling</span><span>Lokalt mandat</span></div>
            </div>
            <div className="contact__card">
              <h5>SYLF — Yngre Läkares Förening</h5>
              <div className="sub">ST, BT och underläkare</div>
              <div className="contact__row"><span>Webb</span><span>slf.se/sylf</span></div>
              <div className="contact__row"><span>Sylf Stockholm</span><span>lokal kontakt via SLF</span></div>
              <div className="contact__row"><span>Fokus</span><span>Randning · ST-tid · utbildning</span></div>
              <div className="contact__row"><span>Gravid-sida</span><span>slf.se/sylf/din-karriar/gravid</span></div>
            </div>
            <div className="contact__card">
              <h5>Medlemsförsäkringar</h5>
              <div className="sub">Inkomst- och sjukförsäkring via SLF</div>
              <div className="contact__row"><span>Inkomstförsäkring</span><span>via medlemskap i SLF</span></div>
              <div className="contact__row"><span>Sjuk- och olycksfall</span><span>SLF gruppförsäkring</span></div>
              <div className="contact__row"><span>Kontakt</span><span>slf.se/medlem/forsakringar</span></div>
              <div className="contact__row"><span>Info</span><span>Graviditet räknas ej som sjukdom</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* 6.2 Arbetsplats */}
      <div className="grid">
        <div className="grid__label"><strong>6.2</strong>Arbetsplats</div>
        <div className="section reveal">
          <div className="section__kicker">Lokala kanaler</div>
          <div className="contact">
            <div className="contact__card">
              <h5>Skyddsombud</h5>
              <div className="sub">Arbetsmiljö — första steget</div>
              <div className="contact__row"><span>Primärt</span><span>Lokalt skyddsombud på kliniken</span></div>
              <div className="contact__row"><span>Sekundärt</span><span>Huvudskyddsombud för förvaltningen</span></div>
              <div className="contact__row"><span>Lagstöd</span><span>6 kap. AML — rätt till handlingar</span></div>
              <div className="contact__row"><span>Begäran</span><span>6 kap. 6a § — formell framställan</span></div>
            </div>
            <div className="contact__card">
              <h5>Närmaste chef &amp; HR</h5>
              <div className="sub">Anmälan, riskbedömning och lön</div>
              <div className="contact__row"><span>Verksamhetschef</span><span>Arbetsmiljöansvar</span></div>
              <div className="contact__row"><span>HR-avdelning</span><span>Föräldrapenningtillägg · föräldralön</span></div>
              <div className="contact__row"><span>Schemaansvarig</span><span>Jour, beredskap, delledighet</span></div>
              <div className="contact__row"><span>Studierektor</span><span>ST-plan, randning, delmål</span></div>
            </div>
            <div className="contact__card">
              <h5>Företagshälsovård</h5>
              <div className="sub">Medicinsk bedömning</div>
              <div className="contact__row"><span>Karolinska</span><span>Hälsocentrum</span></div>
              <div className="contact__row"><span>Danderyd</span><span>Falck Hälsopartner</span></div>
              <div className="contact__row"><span>SÖS · SLSO</span><span>Lokal leverantör — via HR</span></div>
              <div className="contact__row"><span>Syfte</span><span>Oberoende riskbedömning</span></div>
            </div>
            <div className="contact__card">
              <h5>CAMM</h5>
              <div className="sub">Centrum för arbets- och miljömedicin</div>
              <div className="contact__row"><span>Telefon</span><span>08-123 372 22</span></div>
              <div className="contact__row"><span>Webb</span><span>camm.regionstockholm.se</span></div>
              <div className="contact__row"><span>Tillgång</span><span>Remissfri, kostnadsfri</span></div>
              <div className="contact__row"><span>Konfidentiell</span><span>Utan arbetsgivarens vetskap</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* 6.3 Myndigheter */}
      <div className="grid">
        <div className="grid__label"><strong>6.3</strong>Myndigheter</div>
        <div className="section reveal">
          <div className="section__kicker">Statliga kanaler</div>
          <div className="contact">
            <div className="contact__card">
              <h5>Försäkringskassan</h5>
              <div className="sub">Ersättning &amp; ansökningar</div>
              <div className="contact__row"><span>Kundcenter</span><span>0771-524 524</span></div>
              <div className="contact__row"><span>Mina sidor</span><span>forsakringskassan.se</span></div>
              <div className="contact__row"><span>Graviditetspenning</span><span>Ansök i god tid</span></div>
              <div className="contact__row"><span>Föräldrapenning</span><span>Ansök senast 90 d efter födsel</span></div>
            </div>
            <div className="contact__card">
              <h5>Arbetsmiljöverket</h5>
              <div className="sub">Tillsyn &amp; anmälan</div>
              <div className="contact__row"><span>Telefon</span><span>010-730 90 00</span></div>
              <div className="contact__row"><span>Anmälan</span><span>av.se/anmalan</span></div>
              <div className="contact__row"><span>Regionkontor</span><span>Solna</span></div>
              <div className="contact__row"><span>Befogenhet</span><span>Föreläggande med vite</span></div>
            </div>
            <div className="contact__card">
              <h5>Diskrimineringsombudsmannen</h5>
              <div className="sub">Missgynnande föräldralediga</div>
              <div className="contact__row"><span>Webb</span><span>do.se</span></div>
              <div className="contact__row"><span>Telefon</span><span>08-120 20 700</span></div>
              <div className="contact__row"><span>Bevisbörda</span><span>Omvänd enligt 16 § FLL</span></div>
              <div className="contact__row"><span>Talan</span><span>Kan drivas av DO</span></div>
            </div>
            <div className="contact__card">
              <h5>Strålsäkerhetsmyndigheten</h5>
              <div className="sub">Strålning &amp; gravid personal</div>
              <div className="contact__row"><span>Telefon</span><span>08-799 40 00</span></div>
              <div className="contact__row"><span>Webb</span><span>stralsakerhetsmyndigheten.se</span></div>
              <div className="contact__row"><span>Lagstöd</span><span>SSL 4 kap. 7–11 §§</span></div>
              <div className="contact__row"><span>Tröskel</span><span>1 mSv för foster</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* 6.4 Feedback */}
      <div className="grid">
        <div className="grid__label"><strong>6.4</strong>Feedback</div>
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
