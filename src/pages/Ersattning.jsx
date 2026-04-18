import PageHead from '../components/PageHead.jsx';

export default function Ersattning() {
  return (
    <section className="page" data-page="ersattning" data-screen-label="04 Ersättning">
      <PageHead
        num="04"
        title="Ersättning &"
        titleEm="försäkring"
        eyebrow="KAP. 4"
        lede="Din lön, dina tillägg och dina försäkringar förändras under graviditet och ledighet. Här en överblick över föräldrapenning, havandeskapspenning, kollektivavtalad föräldralön och sjukförsäkring."
      />

      <div className="grid">
        <div className="grid__label"><strong>4.1</strong>Försäkringskassan</div>
        <div className="section reveal">
          <div className="section__kicker">Statliga ersättningar</div>
          <div className="rows">
            <div className="row">
              <div className="row__wk">FP · 390 d</div>
              <div className="row__t">Föräldrapenning på sjukpenningnivå — cirka 80 % av SGI upp till takbelopp 588 000 kr/år</div>
              <div className="row__meta">max 1 250 kr/dag</div>
            </div>
            <div className="row">
              <div className="row__wk">FP · 90 d</div>
              <div className="row__t">Föräldrapenning på lägstanivå</div>
              <div className="row__meta">180 kr/dag</div>
            </div>
            <div className="row">
              <div className="row__wk">HSP · 50 d</div>
              <div className="row__t">Havandeskapspenning — fysiskt ansträngande arbete, 80 % av SGI</div>
              <div className="row__meta">t.o.m. 10 d före BF</div>
            </div>
            <div className="row">
              <div className="row__wk">HSP · 60 d</div>
              <div className="row__t">Havandeskapspenning — omplacering ej möjlig p.g.a. risk i arbetsmiljön</div>
              <div className="row__meta">t.o.m. 10 d före BF</div>
            </div>
            <div className="row">
              <div className="row__wk">TFP · 10 d</div>
              <div className="row__t">Tillfällig föräldrapenning — i samband med barns födelse</div>
              <div className="row__meta">andra föräldern</div>
            </div>
            <div className="row">
              <div className="row__wk">GB · 1 250</div>
              <div className="row__t">Graviditetspenning — utöver HSP vid viss sjukskrivning</div>
              <div className="row__meta">per dag max</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="grid__label"><strong>4.2</strong>Kollektivavtal</div>
        <div className="section reveal">
          <div className="section__kicker">Föräldralön — AB 2023 &amp; Läkaravtalet</div>
          <div className="prose">
            <p className="lead">Utöver statlig föräldrapenning betalar arbetsgivaren — via kollektivavtalet Allmänna Bestämmelser (AB) och specialbestämmelser för läkare — ett tillägg om cirka 10 % av månadslönen under 180 dagars ledighet.</p>
            <p>Det innebär att din totala ersättning under ledigheten normalt motsvarar ungefär 90 % av ordinarie månadslön (upp till 10 prisbasbelopp) — detta förutsätter oavbruten anställning om minst 365 dagar vid ledighetens start.</p>
            <p>För lön <em>över</em> takbeloppet i Försäkringskassan betalas tillägget som kompensation för hela den del av lönen som överstiger taket — en viktig post för specialister och överläkare.</p>
          </div>

          <div className="callout">
            <div className="callout__tag">Räkneexempel</div>
            <div>
              <h5>Specialistläkare, 78 000 kr/mån</h5>
              <p>Försäkringskassan betalar ut cirka 37 500 kr/mån (takbegränsat). Arbetsgivaren kompletterar via AB-avtalet med ca 32 000 kr/mån under 180 dagar. Totalt: cirka 69 500 kr/mån brutto under ledighetens första halvår.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="grid__label"><strong>4.3</strong>Pension & SGI</div>
        <div className="section reveal">
          <div className="section__kicker">Långsiktigt skydd</div>
          <ol className="list-num">
            <li>
              <div>
                <h4>Sjukpenninggrundande inkomst (SGI) — skyddad</h4>
                <p>Din SGI skyddas under föräldraledighet fram till att barnet fyller ett år, och även därefter om du återgår till arbete i normal omfattning. Viktigt att ansöka om föräldrapenning i rätt tid — minst 8 timmar per månad räcker för att bibehålla SGI.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Tjänstepension — fortsatt inbetalning</h4>
                <p>Region/arbetsgivare fortsätter betala in till KAP-KL/AKAP-KR under den kollektivavtalade föräldralönens 180 dagar. Övrig tid inget automatiskt tillskott — överväg egen pensionsavsättning.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Gruppförsäkringar</h4>
                <p>Sjuk- och olycksfallsförsäkring via Sveriges Läkarförbund (Salus Ansvar) gäller oavbrutet. Graviditet räknas inte som förekommande sjukdom; dock kan vissa tilläggsförsäkringar ha karenstid.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Lönerevision under ledighet</h4>
                <p>Enligt 16 § föräldraledighetslagen får du inte missgynnas — din lön ska revideras enligt samma principer som om du varit i tjänst. Kontrollera utfallet vid återgång och kontakta facket vid tveksamhet.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
