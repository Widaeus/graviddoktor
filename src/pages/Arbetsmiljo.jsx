import PageHead from '../components/PageHead.jsx';

export default function Arbetsmiljo() {
  return (
    <section className="page" data-page="arbetsmiljo" data-screen-label="02 Arbetsmiljö">
      <PageHead
        num="02"
        title="Arbetsmiljö &"
        titleEm="riskbedömning"
        eyebrow="KAP. 2"
        lede="Arbetsgivaren är skyldig att göra en individuell riskbedömning av din arbetsmiljö så snart graviditeten är känd. Bedömningen omfattar fysiska, kemiska, biologiska och psykosociala faktorer."
      />

      <div className="grid">
        <div className="grid__label"><strong>2.1</strong>Lagstöd</div>
        <div className="section reveal">
          <div className="section__kicker">Rättslig grund</div>
          <h3 className="section__h">Arbetsmiljölagen, AFS 2007:5 och EU-direktiv 92/85/EEG</h3>
          <div className="prose">
            <p className="lead">Arbetsgivaren ansvarar för att gravida, nyligen förlösta och ammande arbetstagare inte utsätts för arbete som kan innebära risker för graviditet eller barn.</p>
            <p>Föreskriften <a className="ref">AFS 2007:5 — Gravida och ammande arbetstagare</a> preciserar de kontrollpunkter som ska ingå i riskbedömningen. Bedömningen ska dokumenteras skriftligt och arbetsgivaren ska vidta åtgärder om risker identifieras — i första hand genom att ta bort riskkällan, i andra hand genom omplacering.</p>
          </div>
          <div className="callout">
            <div className="callout__tag">Viktigt</div>
            <div>
              <h5>Anmäl graviditeten skriftligt</h5>
              <p>Arbetsgivarens skyldigheter enligt AFS 2007:5 aktiveras först när graviditeten är känd. En skriftlig anmälan till närmaste chef (t.ex. via tjänstgöringsschema eller HR-portal) dokumenterar tidpunkten och startar processen.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="grid__label"><strong>2.2</strong>Risker i vården</div>
        <div className="section reveal">
          <div className="section__kicker">Typiska riskkällor</div>
          <ol className="list-num">
            <li>
              <div>
                <h4>Joniserande strålning</h4>
                <p>Radiologi, interventionell kardiologi, ortopedisk genomlysning. Fosterdosen får aldrig överstiga 1 mSv under resterande graviditet. Individuell dosmätning är ett krav — omplacering är regel snarare än undantag.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Smittämnen</h4>
                <p>CMV, parvovirus B19, varicella, röda hund, toxoplasmos, tuberkulos. Bedömning av serologisk status och eventuell omplacering från högriskavdelningar (pediatrik, infektion) ska göras tidigt.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Cytostatika och anestesigaser</h4>
                <p>Hantering av cytostatika på onkologiska mottagningar samt exponering för lustgas/inhalationsanestetika i äldre operationssalar. Stängda system och fungerande utsug krävs; annars omplacering.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Nattarbete och långa pass</h4>
                <p>Från och med graviditetsvecka 20 har du rätt att avstå nattjour om det finns medicinska skäl. Scheman med fler än 10 timmars pass kan omprövas på läkares inrådan.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Fysisk och psykosocial belastning</h4>
                <p>Tunga lyft över 7 kg efter vecka 20, långvarigt stående, hög stressnivå på akutmottagning. Ska ingå i den individuella bedömningen tillsammans med dig.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Hot och våld</h4>
                <p>Psykiatri, rättspsyk, akutmottagning. Arbetsuppgifter där risk för fysiskt våld föreligger ska undvikas; omplacering ska erbjudas omedelbart.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="grid">
        <div className="grid__label"><strong>2.3</strong>Process</div>
        <div className="section reveal">
          <div className="section__kicker">Så går det till</div>
          <div className="rows">
            <div className="row">
              <div className="row__wk">STEG 01</div>
              <div className="row__t">Skriftlig anmälan av graviditet till närmaste chef</div>
              <div className="row__meta">Du / dag 0</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 02</div>
              <div className="row__t">Individuell riskbedömning dokumenteras av AG</div>
              <div className="row__meta">Chef / ≤ 2 veckor</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 03</div>
              <div className="row__t">Åtgärdsplan: eliminera, anpassa eller omplacera</div>
              <div className="row__meta">Chef + skyddsombud</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 04</div>
              <div className="row__t">Om omplacering ej möjlig — ansök havandeskapspenning</div>
              <div className="row__meta">Försäkringskassan</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 05</div>
              <div className="row__t">Löpande avstämning var 4:e vecka fram till ledighet</div>
              <div className="row__meta">Du + chef</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
