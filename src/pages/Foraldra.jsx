import PageHead from '../components/PageHead.jsx';

export default function Foraldra() {
  return (
    <section className="page" data-page="foraldraledighet" data-screen-label="03 Föräldraledighet">
      <PageHead
        num="03"
        title="Föräldra-"
        titleEm="ledighet"
        eyebrow="KAP. 3"
        lede="Rätten till ledighet styrs av föräldraledighetslagen (SFS 1995:584) och socialförsäkringsbalken. Den ekonomiska utfyllnaden ovanpå Försäkringskassan styrs av kollektivavtalet AB 25 (§ 29). För dig som läkare i Region Stockholm innebär kombinationen omkring 90 % av ordinarie lön under merparten av ledigheten — men också tidigare anmälningstider och strikta regler för ST-tjänstgöringen."
      />

      {/* 3.1 Rättsligt fundament */}
      <div className="grid">
        <div className="grid__label"><strong>3.1</strong>Rättsligt fundament</div>
        <div className="section reveal">
          <div className="section__kicker">Tre regelverk i samspel</div>
          <h3 className="section__h">Lag, försäkring och kollektivavtal</h3>
          <div className="prose">
            <p className="lead">Själva <strong>rätten till ledighet</strong> följer av föräldraledighetslagen (FLL). <strong>Ersättningen</strong> kommer primärt från Försäkringskassan enligt socialförsäkringsbalken kap 11–13. <strong>Utfyllnaden</strong> — föräldrapenningtillägg och föräldralön — följer av AB 25 § 29 via HÖK 25 mellan SKR/Sobona och Läkarförbundet.</p>
            <p>För anställda läkare i Region Stockholm gäller alla tre lagren samtidigt, även för BT- och ST-läkare. Inhyrd personal via bemanningsföretag utövar sina rättigheter mot sin formella arbetsgivare, inte mot Region Stockholm. Egenföretagande konsulter kan få föräldrapenning från Försäkringskassan men står utanför regionens löneutfyllnad.</p>
            <p>Systemet är könsneutralt. När föräldraskapet är fastställt hos Skatteverket gäller samma regler oavsett familjekonstellation. Vid adoption börjar föräldrapenningen löpa den dag barnet kommer i familjens vård.</p>
          </div>
          <div className="callout">
            <div className="callout__tag">Källhierarki</div>
            <div>
              <h5>När källor säger olika saker</h5>
              <p>Rangordning vid tvist: <strong>(1)</strong> lag <strong>(2)</strong> centralt kollektivavtal HÖK/AB <strong>(3)</strong> Region Stockholms centrala arbetsgivarsida <strong>(4)</strong> lokal sjukhussida eller rutin. Om en lokal sida avviker från AB — begär skriftligt besked från HR innan du planerar ekonomin.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3.2 Ledighetsformer */}
      <div className="grid">
        <div className="grid__label"><strong>3.2</strong>Ledighetsformer</div>
        <div className="section reveal">
          <div className="section__kicker">Sju distinkta ledighetsrättigheter</div>
          <h3 className="section__h">Rätt till ledighet — med eller utan föräldrapenning</h3>
          <ol className="list-num">
            <li>
              <div>
                <h4>Mammaledighet · 7 + 7 veckor</h4>
                <p>Den som föder barnet har rätt till en sammanhängande ledighet om minst sju veckor före beräknad förlossning och sju veckor efter. Denna ledighet kräver <em>inte</em> att föräldrapenning tas ut. Amning ger därutöver rätt till ledighet så länge amningen pågår.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Hel ledighet tills barnet är 18 månader</h4>
                <p>Ovillkorlig rätt att vara helt ledig från arbetet tills barnet fyller 1,5 år, <em>oavsett</em> om du tar ut föräldrapenning eller inte. Detta är grundrätten som arbetsgivaren inte kan neka av bemanningsskäl.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Hel ledighet med föräldrapenning</h4>
                <p>Rätt till hel ledighet så länge du tar ut hel föräldrapenning, fram till barnet är 12 år eller slutat årskurs 5. Totalt 480 dagar per barn — 390 dagar på sjukpenningnivå och 90 dagar på lägstanivå (180 kr/dag). Vid två vårdnadshavare delas dagarna 240/240, varav 90 sjukpenningdagar per förälder är reserverade och inte kan överlåtas.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Delledighet med föräldrapenning</h4>
                <p>Rätt att förkorta arbetstiden med <strong>1/8, 1/4, 1/2 eller 3/4</strong> i takt med uttag av motsvarande föräldrapenning (87,5 %, 75 %, 50 % respektive 25 % arbete). Förläggningen ska ske i samråd — arbetsgivaren får inte ensidigt dela upp delledigheten mitt i arbetsdagen utan ditt samtycke.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Delledighet utan föräldrapenning</h4>
                <p>Rätt att minska normal arbetstid med upp till <strong>25 %</strong> — alltså gå ned till 75 % — utan att ta ut föräldrapenning, fram till barnet fyller 8 år eller avslutat första skolåret. Rätten är absolut; förläggningen samråds.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Tillfällig föräldrapenning (VAB)</h4>
                <p>Upp till <strong>120 dagar per barn och år</strong> vid barnets sjukdom. VAB kan även tas ut av den ena föräldern när den andra — som normalt skulle ha vårdat barnet — är sjukskriven; huvudregeln är att detta gäller från att barnet är 8 månader. Anmäls till Försäkringskassan från dag 1.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>10-dagar i samband med födseln</h4>
                <p>Den förälder som inte föder barnet har rätt till 10 dagar med tillfällig föräldrapenning i anslutning till barnets födsel. Måste normalt sökas senast 30 dagar efter första hemmadagen. Vid adoption av barn under 10 år: 10 dagar till den ena eller båda föräldrarna.</p>
              </div>
            </li>
          </ol>
          <div className="callout">
            <div className="callout__tag">Dubbeldagar</div>
            <div>
              <h5>Upp till 60 dagar gemensamt under första 15 månaderna</h5>
              <p>Båda föräldrarna kan ta ut föräldrapenning för samma dag upp till 60 dagar under barnets första 15 månader. Praktiskt värdefullt vid introduktion, BB-komplikationer, inskolning på förskola och för att samordna stegvis återgång.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3.3 Tidslinje */}
      <div className="grid">
        <div className="grid__label"><strong>3.3</strong>Tidslinje</div>
        <div className="section reveal">
          <div className="section__kicker">Vad händer när</div>
          <h3 className="section__h">Från graviditet till återgång</h3>
          <div className="timeline">
            <div className="tl__item">
              <div className="tl__dot filled"></div>
              <div className="tl__w">V. 0–12 · Tidig graviditet</div>
              <div className="tl__t">Skriftlig anmälan om graviditet</div>
              <div className="tl__d">Initiera riskbedömning enligt kap 2. Beröringspunkt till chef om tänkt omfattning och beräknat startdatum för ledigheten, även om exakt datum inte behöver fastställas än.</div>
            </div>
            <div className="tl__item">
              <div className="tl__dot filled"></div>
              <div className="tl__w">Senast 3 mån före ledighet</div>
              <div className="tl__t">Formell anmälan till arbetsgivaren</div>
              <div className="tl__d">AB § 29 kräver minst tre månaders varsel — inte två som FLL anger. För ledighet juni–augusti får arbetsgivaren kräva anmälan senast 1 april, om arbetsgivaren begärt det senast 15 mars.</div>
            </div>
            <div className="tl__item">
              <div className="tl__dot filled"></div>
              <div className="tl__w">V. 22–28 · Andra trimestern</div>
              <div className="tl__t">Graviditetspenning vid behov</div>
              <div className="tl__d">Om arbetet är fysiskt ansträngande och omplacering inte går: graviditetspenning från Försäkringskassan från tidigast 60 dagar före BF t.o.m. 11 dagar före BF — max 50 dagar. Vid arbetsmiljörisk som kräver arbetsförbud kan graviditetspenning fås även tidigare, hela den period då förbudet gäller.</div>
            </div>
            <div className="tl__item">
              <div className="tl__dot filled"></div>
              <div className="tl__w">60 dagar före BF</div>
              <div className="tl__t">Tidigast uttag av föräldrapenning</div>
              <div className="tl__d">Den som ska föda kan börja ta ut föräldrapenning från dag 60 före BF. Båda föräldrar kan använda föräldrapenning för mödravårdsbesök och föräldrautbildning från denna tidpunkt.</div>
            </div>
            <div className="tl__item">
              <div className="tl__dot"></div>
              <div className="tl__w">Förlossning</div>
              <div className="tl__t">Mammaledighet + 10-dagar</div>
              <div className="tl__d">Den födande har rätt till minst 7 veckors ledighet efter förlossningen. Den andra föräldern tar ut 10-dagar (tillfällig föräldrapenning). Föräldrapenningdagar räknas inte av under de 10-dagarna.</div>
            </div>
            <div className="tl__item">
              <div className="tl__dot"></div>
              <div className="tl__w">0–18 mån</div>
              <div className="tl__t">Hel ledighet garanterad</div>
              <div className="tl__d">Rätt till hel ledighet utan krav på föräldrapenningsuttag. Ledigheten får delas upp i högst tre perioder per kalenderår. Arbetsgivaren kan skjuta upp avbruten återgång i högst en månad om ledigheten varit planerad att pågå minst en månad.</div>
            </div>
            <div className="tl__item">
              <div className="tl__dot"></div>
              <div className="tl__w">1 år</div>
              <div className="tl__t">SGI-skyddet kräver föräldrapenning</div>
              <div className="tl__d">När barnet fyllt 1 år skyddas SGI endast om du tar ut föräldrapenning motsvarande den arbetstidsnedgång du har. Gå du ned till 80 %, ta ut 20 % föräldrapenning. Missar du detta tappar du SGI mot sjuk- och föräldrapenningen.</div>
            </div>
            <div className="tl__item">
              <div className="tl__dot"></div>
              <div className="tl__w">Återgång</div>
              <div className="tl__t">Samma eller likvärdigt arbete</div>
              <div className="tl__d">16 § FLL förbjuder missgynnande i anställningsvillkor, lönerevision, kompetensutveckling och befordran av skäl som har samband med föräldraledighet. Omvänd bevisbörda: om du visar sannolika omständigheter ska arbetsgivaren styrka att missgynnandet inte berott på ledigheten.</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3.4 Försäkringskassan */}
      <div className="grid">
        <div className="grid__label"><strong>3.4</strong>Försäkringskassan</div>
        <div className="section reveal">
          <div className="section__kicker">Statlig grund — socialförsäkringsbalken</div>
          <h3 className="section__h">480 dagar — och fallgroparna</h3>
          <div className="prose">
            <p>Av 480 dagar per barn är <strong>390 dagar på sjukpenningnivå</strong> (cirka 80 % av SGI upp till 10 prisbasbelopp — för 2026 ≈ 593 000 kr/år, motsvarande ett tak kring 1 250 kr/dag) och <strong>90 dagar på lägstanivå</strong> om 180 kr/dag. Sedan 1 juli 2024 kan varje vårdnadshavare dessutom överlåta upp till 45 dagar till annan vuxen än andra vårdnadshavaren; ensam vårdnadshavare kan överlåta 90 dagar.</p>
            <p><strong>240-dagarsregeln:</strong> full sjukpenningnivå förutsätter att du haft en ersättning över 180 kr/dag under minst 240 dagar i följd före beräknad förlossning. Om du inte uppfyller kravet — typiskt vid utlandstjänstgöring utan sammanhängande SGI, eller tidigt i karriären — utgår 250 kr/dag under de första 180 dagarna.</p>
            <p><strong>Regler från 1 april 2025:</strong> för att ta ut föräldrapenning för dagar du ändå inte skulle arbetat (t.ex. helger) krävs normalt uttag av samma omfattning dagen direkt före eller efter. Undantag finns för rotationsscheman med sammanhängande ledighet om minst fem dagar — relevant för akutjourskedjor och operationsveckor.</p>
          </div>
          <div className="rows">
            <div className="row">
              <div className="row__wk">FP · 390 d</div>
              <div className="row__t">Föräldrapenning på sjukpenningnivå — cirka 80 % av SGI upp till 10 prisbasbelopp</div>
              <div className="row__meta">max ≈ 1 250 kr/d</div>
            </div>
            <div className="row">
              <div className="row__wk">FP · 90 d</div>
              <div className="row__t">Föräldrapenning på lägstanivå</div>
              <div className="row__meta">180 kr/d</div>
            </div>
            <div className="row">
              <div className="row__wk">GP</div>
              <div className="row__t">Graviditetspenning vid fysiskt ansträngande arbete — max 50 dagar, t.o.m. 11 d före BF</div>
              <div className="row__meta">80 % av SGI</div>
            </div>
            <div className="row">
              <div className="row__wk">GP · risk</div>
              <div className="row__t">Graviditetspenning vid arbetsförbud p.g.a. arbetsmiljörisk — hela förbudsperioden</div>
              <div className="row__meta">80 % av SGI</div>
            </div>
            <div className="row">
              <div className="row__wk">TFP · 10 d</div>
              <div className="row__t">Tillfällig föräldrapenning — 10-dagar vid födsel eller adoption (barn under 10 år)</div>
              <div className="row__meta">andra föräldern</div>
            </div>
            <div className="row">
              <div className="row__wk">TFP · VAB</div>
              <div className="row__t">Vård av sjukt barn — upp till 120 dagar per barn och år</div>
              <div className="row__meta">80 % av SGI</div>
            </div>
            <div className="row">
              <div className="row__wk">Dubbeldagar</div>
              <div className="row__t">Båda föräldrar samtidigt — upp till 60 dagar under barnets första 15 månader</div>
              <div className="row__meta">räknas av 2 ggr</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3.5 Kollektivavtalet — föräldrapenningtillägg och föräldralön */}
      <div className="grid">
        <div className="grid__label"><strong>3.5</strong>AB 25 § 29</div>
        <div className="section reveal">
          <div className="section__kicker">Arbetsgivarens utfyllnad</div>
          <h3 className="section__h">Föräldrapenningtillägg och föräldralön</h3>
          <div className="prose">
            <p className="lead">Ovanpå Försäkringskassans ersättning betalar Region Stockholm två separata tillägg via AB 25 § 29. Kvalifikationskravet är <strong>minst 180 sammanhängande kalenderdagars anställning</strong> innan ledigheten börjar — inte 356 dagar, inte 365 dagar.</p>
            <p><strong>Föräldrapenningtillägget</strong> lämnas i upp till 180 kalenderdagar per födsel och motsvarar 10 % av lönebortfallet. Det kan tas ut fram till barnet fyller 24 månader och förutsätter att du samtidigt tar ut föräldrapenning över grund- eller lägstanivå.</p>
            <p><strong>Föräldralönen</strong> (utfyllnadslön) är en mellanskillnadsersättning för den del av lönen som ligger över Försäkringskassans tak. Den betalas i upp till <strong>270 kalenderdagar per födsel</strong> om din fasta kontanta lön överstiger 83,33 % av prisbasbeloppet per månad — för 2026 ungefär 49 300 kr/mån.</p>
            <p>Kombinationen av föräldrapenning, föräldrapenningtillägg och föräldralön ger typiskt cirka <strong>90 % av ordinarie månadslön</strong> under merparten av den sammanhängande ledigheten.</p>
          </div>
          <div className="callout">
            <div className="callout__tag">Räkneexempel</div>
            <div>
              <h5>Specialistläkare med 78 000 kr/mån, heltid</h5>
              <p>Försäkringskassan betalar föräldrapenning på sjukpenningnivå upp till taket ≈ 37 500 kr/mån. Arbetsgivaren betalar föräldrapenningtillägg (10 % av lönebortfallet ≈ 4 000 kr/mån) under de första 180 dagarna och föräldralön (mellanskillnadsersättning för lön över taket ≈ 27 000 kr/mån) under upp till 270 dagar. Totalt ca 68 500 kr/mån brutto — ≈ 88 % av ordinarie lön — under ledighetens första halvår.</p>
            </div>
          </div>
          <div className="callout callout--warn">
            <div className="callout__tag">Bevisbörda</div>
            <div>
              <h5>Du måste styrka uttag från Försäkringskassan</h5>
              <p>AB § 29 ger arbetsgivaren rätt att kräva underlag från Försäkringskassan som visar att du faktiskt uppbär föräldrapenning över grund- eller lägstanivå för de dagar som ska lönekompletteras. Lämna in Försäkringskassans utbetalningsspecifikation eller beslut via HR-portalen i samband med lönekörningen.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3.6 Anmälan och process */}
      <div className="grid">
        <div className="grid__label"><strong>3.6</strong>Anmälan & samråd</div>
        <div className="section reveal">
          <div className="section__kicker">Formell process</div>
          <h3 className="section__h">Tre månader — inte två</h3>
          <div className="prose">
            <p>Föräldraledighetslagen kräver två månaders varsel. AB 25 skärper detta till <strong>minst tre månader</strong>, med sommarregel: för ledighet juni–augusti får arbetsgivaren kräva anmälan senast 1 april, förutsatt att arbetsgivaren framställt det kravet senast 15 mars. För läkare med långa schemacykler är tidig anmälan avgörande — gärna vid halva graviditeten — för att möjliggöra vikariatsrekrytering och randningsomplanering.</p>
            <p>Anmälan ska ange <strong>start, slut, omfattning</strong> (heltid/delledighet och i så fall andel) och <strong>typ</strong> av ledighet (med eller utan föräldrapenning). Arbetsgivaren kan inte <em>neka</em> hel ledighet av bemanningsskäl, men <strong>förläggningen av delledighet</strong> ska samrådas. Arbetsgivaren kan gå emot ditt önskemål endast om din förläggning skulle orsaka <em>påtaglig störning</em> i verksamheten — och får aldrig dela upp delledigheten mitt i en arbetsdag utan ditt samtycke.</p>
          </div>
          <div className="rows">
            <div className="row">
              <div className="row__wk">STEG 01</div>
              <div className="row__t">Skriftlig anmälan till chef och HR — period, omfattning, typ, planerad återgång</div>
              <div className="row__meta">≥ 3 mån före</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 02</div>
              <div className="row__t">Samråd om förläggning, jour/beredskap, mottagning/operation och ST-randning</div>
              <div className="row__meta">Chef + studierektor</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 03</div>
              <div className="row__t">Anmälan och ansökan till Försäkringskassan</div>
              <div className="row__meta">Parallellt</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 04</div>
              <div className="row__t">Skriftlig bekräftelse på kvalifikation, utbetalningsmodell och löneperioder</div>
              <div className="row__meta">HR</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 05</div>
              <div className="row__t">Underlag från Försäkringskassan vid löneutfyllnad</div>
              <div className="row__meta">Löpande</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 06</div>
              <div className="row__t">Bemanningsplanering — vikariat eller intern omfördelning ligger på arbetsgivaren</div>
              <div className="row__meta">Inte ditt ansvar</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3.7 ST, BT, randning */}
      <div className="grid">
        <div className="grid__label"><strong>3.7</strong>ST, BT & randning</div>
        <div className="section reveal">
          <div className="section__kicker">Socialstyrelsens föreskrifter</div>
          <h3 className="section__h">Föräldraledighet får inte tillgodoräknas</h3>
          <div className="prose">
            <p className="lead">Enligt HSLF-FS 2021:8 ska ST innehålla minst <strong>60 månaders klinisk tjänstgöring under handledning</strong>, eller 5,5 år inklusive BT. Socialstyrelsen anger uttryckligen att föräldraledighet <strong>inte</strong> får räknas in i tjänsteförteckningen. Deltid är tillåten, men tjänstgöringstiden förlängs proportionellt så att den motsvarar heltid.</p>
            <p>I praktiken skjuts specialistbeviset fram med motsvarande ledighetstid. Undantag finns om alternativ utbildningsaktivitet — auskultation, kurs, simulering, senarelagd randning post partum — ersätter den kliniska placeringen på ett sätt som uppfyller delmål. Sådana överenskommelser måste dokumenteras skriftligt av verksamhetschef och studierektor <em>innan</em> placeringen förskjuts.</p>
            <p>Lönerevision, kompetensutveckling och befordran får inte påverkas negativt. Arbetsgivaren är skyldig att inkludera dig i den årliga lönerevisionen på samma grunder som aktivt tjänstgörande. Du har rätt till lönesamtal även under pågående ledighet.</p>
          </div>
          <div className="callout">
            <div className="callout__tag">Checklista ST</div>
            <div>
              <h5>Gör skriftligt omtag innan du går hem</h5>
              <p>Uppdatera utbildningsplanen och dokumentera: kvarstående delmål, pågående randning och hur den återupptas, bokade kursfönster, handledarbyten, samt planerad sidotjänstgöring. Be om skriftligt intyg från studierektor om att planen är fryst och återupptas vid återkomst — det undviker tolkningstvister långt senare.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3.8 Pension, semester och försäkringar */}
      <div className="grid">
        <div className="grid__label"><strong>3.8</strong>Pension & semester</div>
        <div className="section reveal">
          <div className="section__kicker">Långsiktigt skydd</div>
          <ol className="list-num">
            <li>
              <div>
                <h4>Tjänstepension (AKAP-KR) — fortsatt inbetalning</h4>
                <p>Region Stockholm fortsätter att betala in till tjänstepension under <strong>hela</strong> föräldraledigheten — baserat på den lön du skulle haft om du arbetat. Avsättningen är normalt 6 % av lönen upp till 7,5 inkomstbasbelopp och 31,5 % därutöver. Detta gäller både SLSO och akutsjukhusförvaltningarna och är en tydlig skillnad mot många privata upplägg där inbetalningarna pausar.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Semesterlönegrundande ledighet</h4>
                <p>Semesterlagen gör de <strong>första 120 dagarna</strong> per barn av föräldraledighet med föräldrapenning semesterlönegrundande — <strong>180 dagar</strong> för ensam vårdnadshavare. Tid därutöver tjänar inte in semester. Om du är helt föräldraledig hela året tjänar du alltså in ungefär 4 månaders betald semester, som sparas eller tas ut i anslutning till ledigheten.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Kollektivavtalade försäkringar</h4>
                <p>AGS-KL (sjukförsäkring), TFA-KL (arbetsskada) och TGL-KL (tjänstegrupplivförsäkring) via Afa Försäkring löper normalt vidare under föräldraledighet. Stora ekonomiska beslut vid långa frånvaroperioder: kontrollera exakta villkor hos Afa/KPA och HR — viss karens kan påverka enskilda tilläggsskydd.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>SGI-skydd</h4>
                <p>SGI är fullt skyddad under föräldraledighet fram till barnet fyller 1 år. Efter 1 år skyddas SGI enbart om du tar ut föräldrapenning i <strong>samma omfattning</strong> som du gått ned i arbetstid. Återgår du till 80 % måste du ta ut 20 % föräldrapenning per vecka för att hålla kvar SGI; annars omberäknas den och påverkar både sjukpenning och framtida föräldrapenning för syskon.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Sjukdom under föräldraledighet</h4>
                <p>Blir du sjuk kan du pausa föräldrapenningen och ta sjukpenning. Dag 1–14: sjukpenning endast för de dagar du annars skulle ha tagit ut föräldrapenning. Från dag 15: sjukpenning för veckans alla dagar. Samtidig föräldrapenning och sjukpenning för samma tid är inte tillåtet.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* 3.9 Återgång och delledighet */}
      <div className="grid">
        <div className="grid__label"><strong>3.9</strong>Återgång</div>
        <div className="section reveal">
          <div className="section__kicker">Från ledighet till tjänst</div>
          <h3 className="section__h">Rätten att få tillbaka sitt arbete</h3>
          <div className="prose">
            <p>Du har rätt att avbryta ledigheten och återgå till samma arbetstid som före ledigheten. Om den planerade ledigheten var minst en månad kan arbetsgivaren skjuta upp återgången i högst en månad. Vid återgång har du rätt till <strong>samma eller likvärdigt arbete</strong> — med samma innehåll, omfattning och villkor. Arbetsledningsrätten innebär inte att arbetsgivaren fritt kan omplacera dig till en sämre position efter ledigheten; en sådan omplacering är ett otillåtet missgynnande enligt 16 § FLL.</p>
            <p>Stegvis återgång sker praktiskt genom delledighet. För läkare som går ned till 80 % gäller att <strong>jourbelastningen ska motsvara tjänstgöringsgraden</strong> enligt Läkarförbundets linje — jourlinjen får alltså inte ligga kvar på 100 % utan ditt samtycke. Samrådet om schemaförläggning ska dokumenteras skriftligt.</p>
            <p>Sedan 2022 finns dessutom en rätt att <strong>begära flexibla arbetsformer</strong> av omsorgsskäl för barn under åtta år, förutsatt minst sex månaders anställning. Arbetsgivaren ska svara inom skälig tid och motivera avslag eller senareläggning skriftligt.</p>
          </div>
          <div className="callout">
            <div className="callout__tag">Omvänd bevisbörda</div>
            <div>
              <h5>Arbetsgivaren måste motbevisa missgynnande</h5>
              <p>16 § FLL har omvänd bevisbörda: om du kan visa omständigheter som ger anledning att <em>anta</em> samband mellan missgynnandet och föräldraledigheten — till exempel uteblivet löneutfall, indragen arbetsledning eller omplacering — måste arbetsgivaren visa att det inte berott på ledigheten. Skadestånd utgår vid överträdelse. För läkare inom Region Stockholm hanteras tvisten i första hand via lokal läkarförening; i sista hand via Diskrimineringsombudsmannen eller Arbetsdomstolen.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3.10 Lokala variationer */}
      <div className="grid">
        <div className="grid__label"><strong>3.10</strong>Lokala variationer</div>
        <div className="section reveal">
          <div className="section__kicker">Region Stockholms förvaltningar</div>
          <h3 className="section__h">Huvudsakligen harmoniserat — med undantag</h3>
          <div className="prose">
            <p>Sedan 1 januari 2025 är Danderyds sjukhus, Södersjukhuset, Södertälje sjukhus och S:t Eriks Ögonsjukhus avbolagiserade och ligger som förvaltningar under Akutsjukhusnämnden. Arbetsgivaren är därmed juridiskt Region Stockholm för alla dessa, och den centrala förmånsmodellen ska gälla genomgående. Offentligt publicerad information är dock inte helt harmoniserad — två avvikelser är värda att känna till.</p>
          </div>
          <div className="rows">
            <div className="row">
              <div className="row__wk">RS</div>
              <div className="row__t">Region Stockholm centralt — 180 dagars kvalifikation, 10 % i 180 dagar, föräldralön upp till 270 dagar, ≈ 90 % total ersättning</div>
              <div className="row__meta">Huvudregel</div>
            </div>
            <div className="row">
              <div className="row__wk">SLSO</div>
              <div className="row__t">Stockholms läns sjukvårdsområde — samma modell; uttrycker särskilt att pensionsinbetalning fortsätter under ledighet</div>
              <div className="row__meta">Konsistent</div>
            </div>
            <div className="row">
              <div className="row__wk">KS</div>
              <div className="row__t">Karolinska — utökad möjlighet till heltidsföräldraledighet till att barnet fyllt 3 år samt 75 % arbete till 12 års ålder, med chefs godkännande</div>
              <div className="row__meta">Går över lag</div>
            </div>
            <div className="row">
              <div className="row__wk">DS</div>
              <div className="row__t">Danderyds sjukhus — 180 dagar, 10 % i 180 dagar, mellanskillnadsersättning över 10 prisbasbelopp</div>
              <div className="row__meta">Konsistent</div>
            </div>
            <div className="row">
              <div className="row__wk">SST</div>
              <div className="row__t">Södertälje sjukhus — 180 dagar, 10 % i 180 dagar, föräldralön upp till 270 dagar; AGS-KL/TFA-KL/TGL-KL listade</div>
              <div className="row__meta">Konsistent</div>
            </div>
            <div className="row">
              <div className="row__wk">SÖS</div>
              <div className="row__t">Södersjukhuset — publik sida anger 356 dagars anställning som kvalifikationskrav; avviker från AB 25 och central regionmodell</div>
              <div className="row__meta">Verifiera lokalt</div>
            </div>
            <div className="row">
              <div className="row__wk">S:t Erik</div>
              <div className="row__t">S:t Eriks Ögonsjukhus — 10 % i 180 dagar, föräldralön över FK-tak efter minst sex månader</div>
              <div className="row__meta">Konsistent i sak</div>
            </div>
          </div>
          <div className="callout callout--warn">
            <div className="callout__tag">Södersjukhuset</div>
            <div>
              <h5>356-dagarsuppgiften bör verifieras skriftligt</h5>
              <p>Södersjukhusets offentliga informationssida anger ett strängare kvalifikationskrav än AB 25 och Region Stockholms centrala sida. Det kan handla om inaktuell publik text snarare än faktisk lokal praxis. Begär skriftligt besked från Södersjukhusets HR/lönekontor om vilket kvalifikationskrav som faktiskt tillämpas, innan du planerar ekonomin kring ledigheten.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3.11 Tvister */}
      <div className="grid">
        <div className="grid__label"><strong>3.11</strong>Tvister</div>
        <div className="section reveal">
          <div className="section__kicker">Två separata spår</div>
          <h3 className="section__h">Försäkringskassan respektive arbetsgivaren</h3>
          <div className="prose">
            <p><strong>Tvist om Försäkringskassans beslut</strong> — begär omprövning hos Försäkringskassan. Omprövningsbeslutet kan överklagas till förvaltningsrätten inom två månader från mottagandet. Därefter kan ärendet gå vidare till kammarrätten efter prövningstillstånd.</p>
            <p><strong>Tvist om arbetsgivaren</strong> — uteblivet föräldrapenningtillägg, felaktig schemaläggning vid delledighet, missgynnande vid lönesättning eller omplacering efter återgång. Kontakta lokal läkarförening och Läkarförbundets medlemsrådgivning. Föräldraledighetslagens skadeståndsbestämmelse och omvända bevisbörda ger en stark rättslig position. DO kan driva talan i vissa diskrimineringsärenden; i arbetsrättsliga tvister leder fackliga förhandlingar och i sista hand Arbetsdomstolen.</p>
            <p>För gråzonsfrågor — rätt tillämpning av AB § 29, samråd om delledighet, eskalering vid utebliven löneutfyllnad — finns stödtexten i Läkarförbundets centrala material och i Region Stockholms centrala förmånssida. Lokal intranätinformation kompletterar men ersätter inte AB.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
