import PageHead from '../components/PageHead.jsx';

export default function Foraldra() {
  return (
    <section className="page" data-page="foraldraledighet" data-screen-label="04 Föräldraledighet">
      <PageHead
        num="04"
        title="Föräldra-"
        titleEm="ledighet"
        eyebrow="KAP. 4"
        readTime="10 min"
        lede="Rätten till ledighet styrs av föräldraledighetslagen (SFS 1995:584) och socialförsäkringsbalken. Den ekonomiska utfyllnaden ovanpå Försäkringskassan styrs av kollektivavtalet AB 25 (§ 29). För regionanställda läkare kan kombinationen i många fall ge en ersättningsnivå nära 90 % under delar av ledigheten — den faktiska nivån beror dock på lön, uttag, kollektivavtal och arbetsgivarens tillämpning. Därtill gäller tidigare anmälningstider och särskilda regler för ST-tjänstgöringen."
      />

      {/* 4.1 Rättsligt fundament */}
      <div className="grid">
        <div className="grid__label"><strong>4.1</strong>Rättsligt fundament</div>
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

      {/* 4.2 Ledighetsformer */}
      <div className="grid">
        <div className="grid__label"><strong>4.2</strong>Ledighetsformer</div>
        <div className="section reveal">
          <div className="section__kicker">Åtta distinkta ledighetsrättigheter</div>
          <h3 className="section__h">Rätt till ledighet — med eller utan föräldrapenning</h3>
          <ol className="list-num">
            <li>
              <div>
                <h4>Mammaledighet · 7 + 7 veckor <span className="law-ref">4 § FLL</span></h4>
                <p>Den som föder barnet har rätt till en sammanhängande ledighet om minst sju veckor före beräknad förlossning och sju veckor efter. Denna ledighet kräver <em>inte</em> att föräldrapenning tas ut. Amning ger därutöver rätt till ledighet så länge amningen pågår.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Hel ledighet tills barnet är 18 månader <span className="law-ref">5 § FLL</span></h4>
                <p>Stark rätt enligt lag att vara helt ledig från arbetet tills barnet fyller 1,5 år, <em>oavsett</em> om du tar ut föräldrapenning eller inte. Detta är grundrätten som arbetsgivaren inte kan neka av bemanningsskäl.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Hel ledighet med föräldrapenning <span className="law-ref">5 § FLL</span></h4>
                <p>Rätt till hel ledighet så länge du tar ut hel föräldrapenning, fram till barnet är 12 år eller slutat årskurs 5. Totalt 480 dagar per barn — 390 dagar på sjukpenningnivå och 90 dagar på lägstanivå (180 kr/dag). Vid två vårdnadshavare delas dagarna 240/240, varav 90 sjukpenningdagar per förälder är reserverade och inte kan överlåtas.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Delledighet med föräldrapenning <span className="law-ref">6 § FLL</span></h4>
                <p>Rätt att gå ned till <strong>7/8, 3/4, 1/2 eller 1/4</strong> av arbetstiden (87,5 %, 75 %, 50 % respektive 25 % arbete) i takt med uttag av motsvarande föräldrapenning. Förläggningen ska ske i samråd — arbetsgivaren får inte ensidigt dela upp delledigheten mitt i arbetsdagen utan ditt samtycke.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Delledighet utan föräldrapenning <span className="law-ref">7 § FLL</span></h4>
                <p>Rätt att minska normal arbetstid med upp till <strong>25 %</strong> — alltså gå ned till 75 % — utan att ta ut föräldrapenning, fram till barnet fyller 8 år eller avslutat första skolåret. Rätten följer av lag; förläggningen samråds.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Tillfällig föräldrapenning (VAB) <span className="law-ref">8 § FLL</span></h4>
                <p>Upp till <strong>120 dagar per barn och år</strong> vid barnets sjukdom. VAB kan även tas ut av den ena föräldern när den andra — som normalt skulle ha vårdat barnet — är sjukskriven; huvudregeln är att detta gäller från att barnet är 8 månader. Anmäls till Försäkringskassan från dag 1.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>10-dagar i samband med födseln <span className="law-ref">8 § FLL</span></h4>
                <p>Den förälder som inte föder barnet har rätt till 10 dagar med tillfällig föräldrapenning i anslutning till barnets födsel. Måste normalt sökas senast 30 dagar efter första hemmadagen. Vid adoption av barn under 10 år: 10 dagar till den ena eller båda föräldrarna.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Ledighet med omvårdnadsbidrag <span className="law-ref">9 § FLL</span></h4>
                <p>Rätt att förkorta normal arbetstid med upp till <strong>25 %</strong> när omvårdnadsbidrag (SFB 22 kap) utgår för barnet. Avsedd för föräldrar till barn med funktionsnedsättning eller långvarig sjukdom som kräver särskild tillsyn eller vård.</p>
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

      {/* 4.3 Försäkringskassan */}
      <div className="grid">
        <div className="grid__label"><strong>4.3</strong>Försäkringskassan</div>
        <div className="section reveal">
          <div className="section__kicker">Statlig grund — socialförsäkringsbalken</div>
          <h3 className="section__h">480 dagar — och fallgroparna</h3>
          <div className="prose">
            <p>Av 480 dagar per barn är <strong>390 dagar på sjukpenningnivå</strong> (cirka 80 % av SGI upp till 10 prisbasbelopp — prisbasbeloppet 2026 är 59 200 kr, dvs. 10 pbb = 592 000 kr/år, motsvarande ett tak kring 1 260 kr/dag) och <strong>90 dagar på lägstanivå</strong> om 180 kr/dag. Sedan 1 juli 2024 kan varje vårdnadshavare dessutom överlåta upp till 45 dagar till annan vuxen än andra vårdnadshavaren; ensam vårdnadshavare kan överlåta 90 dagar.</p>
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

      {/* 4.4 Kollektivavtalet — föräldrapenningtillägg och föräldralön */}
      <div className="grid">
        <div className="grid__label"><strong>4.4</strong>AB 25 § 29</div>
        <div className="section reveal">
          <div className="section__kicker">Arbetsgivarens utfyllnad</div>
          <h3 className="section__h">Föräldrapenningtillägg och föräldralön</h3>
          <div className="prose">
            <p className="lead">Ovanpå Försäkringskassans ersättning betalar Region Stockholm två separata tillägg via AB 25 § 29. Kvalifikationskravet är <strong>minst 180 sammanhängande kalenderdagars anställning</strong> innan ledigheten börjar — inte 356 dagar, inte 365 dagar.</p>
            <p><strong>Föräldrapenningtillägget</strong> lämnas i upp till 180 kalenderdagar per födsel och motsvarar 10 % av lönebortfallet. Det kan tas ut fram till barnet fyller 24 månader och förutsätter att du samtidigt tar ut föräldrapenning över grund- eller lägstanivå.</p>
            <p><strong>Föräldralönen</strong> (utfyllnadslön) är en mellanskillnadsersättning för den del av lönen som ligger över Försäkringskassans tak. Den betalas i upp till <strong>270 kalenderdagar per födsel</strong> om din fasta kontanta månadslön överstiger tröskeln <strong>10 prisbasbelopp / 12</strong> — för 2026 cirka 49 300 kr/mån.</p>
            <p>För regionanställda läkare kan kombinationen av föräldrapenning, föräldrapenningtillägg och föräldralön i många fall ge en ersättningsnivå <strong>nära 90 % av ordinarie månadslön</strong> under delar av ledigheten. Den faktiska nivån beror dock på lön, uttag, kollektivavtal och arbetsgivarens tillämpning.</p>
          </div>
          <div className="callout">
            <div className="callout__tag">Räkneexempel</div>
            <div>
              <h5>Specialistläkare med 78 000 kr/mån, heltid</h5>
              <p>Försäkringskassan betalar föräldrapenning på sjukpenningnivå upp till taket ≈ 37 800 kr/mån. Arbetsgivaren betalar föräldrapenningtillägg (10 % av lönebortfallet ≈ 4 000 kr/mån) under de första 180 dagarna och föräldralön (mellanskillnadsersättning för lön över taket ≈ 26 000 kr/mån) under upp till 270 dagar. Totalt ca 67 800 kr/mån brutto — ≈ 87 % av ordinarie lön — under ledighetens första halvår.</p>
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

      {/* 4.5 Anmälan och process */}
      <div className="grid">
        <div className="grid__label"><strong>4.5</strong>Anmälan & samråd</div>
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

      {/* 4.6 ST, BT, randning */}
      <div className="grid">
        <div className="grid__label"><strong>4.6</strong>ST, BT & randning</div>
        <div className="section reveal">
          <div className="section__kicker">Socialstyrelsens föreskrifter</div>
          <h3 className="section__h">Föräldraledighet får inte tillgodoräknas</h3>
          <div className="prose">
            <p className="lead">Enligt HSLF-FS 2021:8 ska ST innehålla minst <strong>60 månaders klinisk tjänstgöring under handledning</strong>, ovanpå BT om minst 6 månader — det lagstadgade minimum är alltså 66 månader (5,5 år). Socialstyrelsen anger uttryckligen att föräldraledighet <strong>inte</strong> får räknas in i tjänsteförteckningen. Deltid är tillåten, men tjänstgöringstiden förlängs proportionellt så att den motsvarar heltid.</p>
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

      {/* 4.7 Pension, semester och försäkringar */}
      <div className="grid">
        <div className="grid__label"><strong>4.7</strong>Pension & semester</div>
        <div className="section reveal">
          <div className="section__kicker">Långsiktigt skydd</div>
          <ol className="list-num">
            <li>
              <div>
                <h4>Tjänstepension (AKAP-KR) — normalt fortsatt inbetalning</h4>
                <p>Region Stockholm anger att tjänstepensionsavsättning <strong>normalt fortsätter även under föräldraledighet</strong>, baserat på den lön du skulle haft om du arbetat. Avsättningen är normalt 6 % av lönen upp till 7,5 inkomstbasbelopp och 31,5 % därutöver. Eftersom villkoren kan bero på pensionsavtal och anställningsform bör uppgiften kontrolleras mot aktuell pensionsinformation — upplägget skiljer sig också från många privata lösningar där frånvaroperioder kan pausa inbetalningarna.</p>
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
                <p>AGS-KL (sjukförsäkring), TFA-KL (arbetsskada) och TGL-KL (tjänstegrupplivförsäkring) via Afa Försäkring löper normalt vidare under föräldraledighet. Inför större ekonomiska beslut eller långa frånvaroperioder: kontrollera exakta villkor hos Afa/KPA och HR — viss karens kan påverka enskilda tilläggsskydd.</p>
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

      {/* 4.8 Återgång och delledighet */}
      <div className="grid">
        <div className="grid__label"><strong>4.8</strong>Återgång</div>
        <div className="section reveal">
          <div className="section__kicker">Från ledighet till tjänst</div>
          <h3 className="section__h">Rätten att få tillbaka sitt arbete</h3>
          <div className="prose">
            <p>Du har rätt att avbryta ledigheten och återgå till samma arbetstid som före ledigheten. Om den planerade ledigheten var minst en månad kan arbetsgivaren skjuta upp återgången i högst en månad. Vid återgång har du rätt till <strong>samma eller likvärdigt arbete</strong> — med samma innehåll, omfattning och villkor. Missgynnande av skäl som har samband med föräldraledighet är förbjudet enligt 16 § föräldraledighetslagen; en sämre omplacering efter ledigheten kan utgöra ett sådant missgynnande.</p>
            <p>Stegvis återgång sker praktiskt genom delledighet. För läkare som går ned till 80 % gäller att <strong>jourbelastningen ska motsvara tjänstgöringsgraden</strong> enligt Läkarförbundets linje — jourlinjen får alltså inte ligga kvar på 100 % utan ditt samtycke. Samrådet om schemaförläggning ska dokumenteras skriftligt.</p>
            <p>Sedan 2022 finns dessutom en rätt att <strong>begära flexibla arbetsformer</strong> av omsorgsskäl för barn under åtta år, förutsatt minst sex månaders anställning. Arbetsgivaren ska svara inom skälig tid och motivera avslag eller senareläggning skriftligt.</p>
          </div>
          <div className="callout">
            <div className="callout__tag">Bevislättnad · 24 § FLL</div>
            <div>
              <h5>Arbetsgivaren måste motbevisa missgynnande</h5>
              <p>16 § föräldraledighetslagen förbjuder missgynnande av skäl som har samband med föräldraledighet. Om tvist uppstår gäller bevislättnadsregeln i 24 §: om du visar omständigheter som ger anledning att <em>anta</em> ett sådant samband — till exempel uteblivet löneutfall, indragen arbetsledning eller omplacering — måste arbetsgivaren visa att missgynnande inte skett eller att åtgärden varit en nödvändig följd av ledigheten. Skadestånd utgår vid överträdelse. För läkare inom Region Stockholm hanteras tvisten i första hand via lokal läkarförening; i sista hand via Diskrimineringsombudsmannen eller Arbetsdomstolen.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4.9 Tvister */}
      <div className="grid">
        <div className="grid__label"><strong>4.9</strong>Tvister</div>
        <div className="section reveal">
          <div className="section__kicker">Två separata spår</div>
          <h3 className="section__h">Försäkringskassan respektive arbetsgivaren</h3>
          <div className="prose">
            <p><strong>Tvist om Försäkringskassans beslut</strong> — begär omprövning hos Försäkringskassan. Omprövningsbeslutet kan överklagas till förvaltningsrätten inom två månader från mottagandet. Därefter kan ärendet gå vidare till kammarrätten efter prövningstillstånd.</p>
            <p><strong>Tvist om arbetsgivaren</strong> — uteblivet föräldrapenningtillägg, felaktig schemaläggning vid delledighet, missgynnande vid lönesättning eller omplacering efter återgång. Kontakta lokal läkarförening och Läkarförbundets medlemsrådgivning. Föräldraledighetslagens skadeståndsbestämmelse och bevislättnadsregeln i 24 § ger en stark rättslig position. DO kan driva talan i vissa diskrimineringsärenden; i arbetsrättsliga tvister leder fackliga förhandlingar och i sista hand Arbetsdomstolen.</p>
            <p>För gråzonsfrågor — rätt tillämpning av AB § 29, samråd om delledighet, eskalering vid utebliven löneutfyllnad — finns stödtexten i Läkarförbundets centrala material och i Region Stockholms centrala förmånssida. Lokal intranätinformation kompletterar men ersätter inte AB.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
