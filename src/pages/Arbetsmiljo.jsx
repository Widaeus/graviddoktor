import PageHead from '../components/PageHead.jsx';

export default function Arbetsmiljo() {
  return (
    <section className="page" data-page="arbetsmiljo" data-screen-label="03 Arbetsmiljö">
      <PageHead
        num="03"
        title="Arbetsmiljö &"
        titleEm="riskbedömning"
        eyebrow="KAP. 3"
        readTime="12 min"
        lede="Så snart du har meddelat din graviditet är arbetsgivaren skyldig att göra en individuell, skriftlig riskbedömning av just din tjänstgöring. Bedömningen ska omfatta fysiska, kemiska, biologiska och psykosociala faktorer — och den ska leda till konkreta åtgärder enligt en bestämd prioritetsordning."
      />

      {/* 3.1 Lagstöd */}
      <div className="grid">
        <div className="grid__label"><strong>3.1</strong>Rättsligt fundament</div>
        <div className="section reveal">
          <div className="section__kicker">Regelverket</div>
          <h3 className="section__h">AFS 2023:2 kap 7 — ny struktur sedan 1 januari 2025</h3>
          <div className="prose">
            <p className="lead">Den 1 januari 2025 trädde Arbetsmiljöverkets omstrukturerade regelverk i kraft. De tidigare föreskrifterna om gravida och ammande (AFS 2007:5) har ersatts och inkorporerats i <a className="ref">AFS 2023:2 kapitel 7 — Gravida, nyförlösta och ammande arbetstagare</a>.</p>
            <p>Skyddet vilar på flera lager: Arbetsmiljölagen (SFS 1977:1160) sätter ramarna, AFS 2023:2 kap 7 preciserar rutinerna, och vid strålning trumfar Strålskyddslagen (SFS 2018:396) 4 kap allt annat. Föräldraledighetslagen §§ 18–20 ger rätt till omplacering och skyddsledighet, och Diskrimineringslagen 2 kap 1 § förbjuder missgynnande som har samband med graviditet.</p>
            <p>De individuella graviditetsspecifika åtgärderna aktualiseras i praktiken när arbetsgivaren fått besked om graviditeten — utan anmälan blir det därför svårare att utlösa de individuella skyddsåtgärderna. Anmäl skriftligt (e-post) så fort graviditeten är känd, särskilt om du arbetar i högriskmiljö, eftersom fostret är som mest känsligt under de första veckorna. Samtidigt ska arbetsgivaren redan i förväg ha kartlagt risker för gravida i verksamheten.</p>
          </div>
          <div className="callout">
            <div className="callout__tag">Viktigt</div>
            <div>
              <h5>Hänvisningar till AFS 2007:5 är föråldrade</h5>
              <p>Äldre lokala PM, checklistor och riktlinjer på Karolinska, SÖS, Danderyd, SLSO, Södertälje och S:t Erik hänvisar ofta fortfarande till AFS 2007:5. Substansen i dessa dokument kan vara korrekt, men den formella referensen ska från 2025 vara <strong>AFS 2023:2 kap 7</strong> för gravida och ammande, och <strong>AFS 2023:15</strong> för medicinska kontroller.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3.2 Åtgärdstrappan */}
      <div className="grid">
        <div className="grid__label"><strong>3.2</strong>Åtgärdstrappan</div>
        <div className="section reveal">
          <div className="section__kicker">§ 7 AFS 2023:2 kap 7</div>
          <h3 className="section__h">Fyra steg i tvingande ordning</h3>
          <div className="prose">
            <p>När en risk har identifierats är arbetsgivaren juridiskt bunden att agera utifrån en strikt prioritetsordning. Avstängning är sista utvägen — inte den första. Ett arbetsförbud är ett skyddsbeslut, inte ett sjukdomsbeslut, och det är den handling som öppnar dörren till graviditetspenning från Försäkringskassan.</p>
          </div>
          <div className="rows">
            <div className="row">
              <div className="row__wk">STEG 01</div>
              <div className="row__t">Eliminera — ta bort riskkällan i arbetsmiljön</div>
              <div className="row__meta">Svårt i klinisk miljö</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 02</div>
              <div className="row__t">Anpassa — ändra arbetsuppgifter, schema eller teknik</div>
              <div className="row__meta">Ofta möjligt</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 03</div>
              <div className="row__t">Omplacera tillfälligt till riskfria uppgifter</div>
              <div className="row__meta">Ny riskbedömning krävs</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 04</div>
              <div className="row__t">Arbetsförbud enligt § 8 — fullständig avstängning</div>
              <div className="row__meta">Sista utväg</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3.3 Risker — biologiska */}
      <div className="grid">
        <div className="grid__label"><strong>3.3</strong>Biologiska risker</div>
        <div className="section reveal">
          <div className="section__kicker">Smittämnen i riskklass 2–4</div>
          <h3 className="section__h">Smittor som måste bedömas individuellt</h3>
          <div className="prose">
            <p>AFS 2023:2 kap 7 har <strong>endast två uttryckliga förbud</strong> vid saknad immunitet: <strong>rubella</strong> och <strong>toxoplasma</strong> (7 kap 6 §) — brott ger sanktionsavgift.<sup>1</sup> Övriga smittämnen (CMV, parvovirus B19, varicella, mässling, TB, blodburna smittor) omfattas av <strong>individuell riskbedömning</strong> enligt 7 kap 4 §, inte förbud.</p>
            <p>Rätten till serologisk provtagning är inte fri. <strong>En arbetstagare kan inte ensidigt kräva serologi</strong> — behovet avgörs av arbetsgivarens riskbedömning i samråd med företagshälsovården eller CAMM.<sup>2</sup> InfPreg avråder t.ex. från rutinmässig CMV- och parvovirus-screening av vårdpersonal, medan MPR-status (rubella) regelmässigt kontrolleras hos fertil vårdpersonal.<sup>3,4</sup></p>
          </div>
          <ol className="list-num">
            <li>
              <div>
                <h4>Cytomegalovirus (CMV)</h4>
                <p>Cirka <strong>30 % av unga kvinnor i Sverige är CMV-seronegativa</strong>.<sup>3</sup> Vid maternell primärinfektion överförs viruset till fostret i ca 40 % av fallen.<sup>3</sup> Svenska studier har inte kunnat visa en arbetsrelaterad överrisk för CMV hos vårdpersonal. <strong>InfPreg avråder från rutinmässig CMV-serologi av personal</strong> och anger att omplacering av gravid som regel inte är befogad.<sup>3</sup> Fokus ligger på god handhygien vid saliv-, urin- och blöjkontakt med barn under tre år.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Parvovirus B19 (femte sjukan)</h4>
                <p>Vid maternell primärinfektion smittas fostret i ca 30 %. Risken för allvarlig fetal skada (hydrops fetalis, fosterdöd) är <strong>5–10 % vid symtomatisk primärinfektion</strong>, främst under senare delen av första och tidig andra trimester.<sup>5</sup> Vid pågående utbrott kan omplacering av mottaglig gravid övervägas i samråd — smittrisken är låggradig och utdragen. <strong>Rutinmässig serologisk screening av personal rekommenderas inte.</strong><sup>5</sup></p>
              </div>
            </li>
            <li>
              <div>
                <h4>Varicella zoster och mässling</h4>
                <p>Högsmittsamt luftburet. Vid bekräftad eller misstänkt exponering för mässling eller vattkoppor hos icke-immun gravid arbetstagare ska sådan kontakt undvikas — ordna arbetsuppgifter utan exponering snarare än förlita sig enbart på FFP3.<sup>6,7</sup> Postexpositionsprofylax (VZIG vid varicella, MPR inom 3 dygn vid mässling) övervägs enligt infektionsklinik. All vårdpersonal bör vara MPR-vaccinerad (två doser).<sup>4</sup></p>
              </div>
            </li>
            <li>
              <div>
                <h4>Tuberkulos</h4>
                <p>Passform-testad FFP3 i enkelrum med sluss är standard vid vård av smittsam TB. Vid högsmittsam multiresistent TB kan ytterligare åtgärder eller omplacering övervägas. Observera risk för reaktivering av latent TB postpartum. Ingen AFS-specifik paragraf om TB och gravida — individuell bedömning enligt 7 kap 4 §.<sup>1</sup></p>
              </div>
            </li>
            <li>
              <div>
                <h4>Rubella (röda hund)</h4>
                <p>AFS 2023:2 7 kap 6 § <strong>förbjuder</strong> arbete med rubella vid saknad immunitet; brott ger sanktionsavgift.<sup>1</sup> I praktiken aktualiseras förbudet sällan i Sverige tack vare MPR-programmet. Fertil vårdpersonal utan dokumenterad tvådos-MPR bör erbjudas serologi och vaccination via företagshälsovården.<sup>4,8</sup></p>
              </div>
            </li>
            <li>
              <div>
                <h4>Toxoplasma</h4>
                <p>Formellt samma uttryckliga förbud som rubella enligt 7 kap 6 §.<sup>1</sup> I klinisk vårdpraxis <strong>sällan aktuellt</strong> — toxoplasma smittar inte människa-till-människa utan är främst en laboratorie-, obduktions- och mikrobiologifråga. Rutinmässig serologisk screening av vårdpersonal rekommenderas inte.<sup>9</sup></p>
              </div>
            </li>
            <li>
              <div>
                <h4>Blodburna smittor (HBV, HCV, HIV)</h4>
                <p>Basala hygien- och stickskyddsrutiner räcker.<sup>10</sup> Risken är inte större för gravid än för övrig personal om rutinerna följs. Stickskador hanteras akut enligt Vårdhandboken.</p>
              </div>
            </li>
          </ol>

          <div className="src">
            <div className="src__h">Källor · Vancouver</div>
            <ol className="src__list">
              <li>Arbetsmiljöverket. Planering och organisering av arbetsmiljöarbete (AFS 2023:2), kap 7 — Gravida, nyförlösta och ammande arbetstagare. Stockholm: Arbetsmiljöverket; 2023. Tillgänglig: av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-20232/</li>
              <li>Centrum för arbets- och miljömedicin (CAMM), Region Stockholm. Om du är gravid. Tillgänglig: camm.regionstockholm.se/patientmottagning/arbets--och-miljomedicinska-mottagningen/om-du-ar-gravid/</li>
              <li>InfPreg (MedSciNet). Cytomegalovirus (CMV) — information för hälso- och sjukvården. Tillgänglig: medscinet.se/infpreg/healthcareinfomore.aspx?topic=8</li>
              <li>Folkhälsomyndigheten. Rekommendationer om vaccination mot mässling, påssjuka och röda hund (MPR). Stockholm: Folkhälsomyndigheten. Tillgänglig: folkhalsomyndigheten.se/smittskydd-beredskap/vaccinationer/rekommendationer-for-vaccination/</li>
              <li>InfPreg (MedSciNet). Parvovirus B19V. Tillgänglig: medscinet.se/infpreg/healthcareinfoMore.aspx?topic=27</li>
              <li>InfPreg (MedSciNet). Varicella zoster. Tillgänglig: medscinet.se/infpreg/healthcareinfomore.aspx?topic=32</li>
              <li>InfPreg (MedSciNet). Mässling (morbilli). Tillgänglig: medscinet.se/infpreg/healthcareinfoMore.aspx?topic=42</li>
              <li>InfPreg (MedSciNet). Rubella (röda hund). Tillgänglig: medscinet.se/infpreg/healthcareinfoMore.aspx?topic=28</li>
              <li>InfPreg (MedSciNet). Toxoplasma. Tillgänglig: medscinet.se/infpreg/healthcareinfoMore.aspx?topic=30</li>
              <li>Vårdhandboken. Basala hygienrutiner och personlig hygien; Stick- och skärskador samt exponering med risk för blodburen smitta. Tillgänglig: vardhandboken.se</li>
            </ol>
          </div>
        </div>
      </div>

      {/* 3.4 Strålning */}
      <div className="grid">
        <div className="grid__label"><strong>3.4</strong>Joniserande strålning</div>
        <div className="section reveal">
          <div className="section__kicker">Strålskyddslagen 4 kap 7–11 §§</div>
          <h3 className="section__h">Strålskyddslagen</h3>
          <div className="prose">
            <p className="lead">Strålskyddslagen ger ett starkt skydd. Efter att graviditeten anmälts ska arbetet planeras så att fosterdosen blir så låg som möjligt och <strong>inte förväntas överstiga 1 mSv</strong> under återstoden av graviditeten.</p>
            <p>Enligt <strong>4 kap 9 § SSL</strong> ska arbetsgivaren, om den gravida begär det, erbjuda arbetsuppgifter som inte innebär exponering utöver allmänhetens nivåer. Det betyder att en gravid interventionell kardiolog, radiolog, ortoped med C-båge, urolog eller kärlkirurg kan begära att slippa genomlysningsmomenten även om historisk badgedos ligger långt under gränsen.</p>
            <p>1 mSv är ett <em>tak</em>, inte ett riktvärde — ALARA-principen gäller även under tröskeln. Enligt 4 kap 10 § är det dessutom <strong>uttryckligen förbjudet</strong> att gravid eller ammande deltar i radiologiska nödsituationer.</p>
            <p>MR-kamerans statiska magnetfält har inte i kontrollerade studier visat fosterskada. Enligt försiktighetsprincipen — bred praxis i svensk vård — bör gravid personal ändå undvika att vistas i magnetrummet under pågående skanning. Granskning av bilder utanför undersökningsrummet är oproblematiskt.</p>
          </div>
        </div>
      </div>

      {/* 3.5 Kemiska och fysiska risker */}
      <div className="grid">
        <div className="grid__label"><strong>3.5</strong>Kemiska och fysiska</div>
        <div className="section reveal">
          <div className="section__kicker">Läkemedel, gaser och belastning</div>
          <ol className="list-num">
            <li>
              <div>
                <h4>Cytostatika (AFS 2023:10 kap 10)</h4>
                <p>Sedan 1 januari 2025 återfinns reglerna om cytostatika och andra läkemedel med bestående toxisk effekt i AFS 2023:10 kapitel 10 (avdelning V, kemiska riskkällor) — AFS 2005:5 är upphävd. Gravid läkare ska inte bereda eller administrera cytostatika, inte hantera utsöndring (urin, kräkning, avföring) från patient behandlad senaste 48–72 h, och inte närvara vid extravasationer. Modern beredning i slutna system på sjukhusapotek minskar exponeringen, men klinisk patientkontakt kräver uppmärksamhet.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Anestesigaser och lustgas</h4>
                <p>Moderna operationssalar med aktiv utsugning ger normalt exponering under gränsvärdena. Det största praktiska problemet är <strong>lustgas på förlossningsavdelning och BB</strong> — inte på operation. Lokal ventilation är ofta begränsad och exponeringstopparna kan vara höga. Gravid förlossningsläkare eller anestesiolog bör undvika masknarkos och minimera tid i rum där lustgas används aktivt.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Formaldehyd, bencement, lösningsmedel</h4>
                <p>Formalin är reproduktionstoxiskt — vid arbete med formalin eller annan reproduktionstoxisk exponering bör gravid patolog få en tydlig individuell bedömning; i praktiken innebär det ofta att makroskopiska moment och arbete vid fixeringsbänk tas bort. Metylmetakrylat (bencement) i ortopedi bör normalt undvikas under härdningsfasen. Organiska lösningsmedel ökar missfallsrisken vid höggradig exponering och kräver individuell bedömning.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Fysisk belastning och ergonomi (AFS 2012:2)</h4>
                <p>Tunga lyft, HLR-kompressioner, långvarigt stående vid operation och obekväma arbetsställningar. Avlastning från rutinmässiga tunga lyft senast vecka 20, från HLR-kompressioner kontinuerligt. Operationer {'>'}2–3 timmar bör undvikas från vecka 20–24 när ledbanden luckras upp och tyngdpunkten förskjuts.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Nattarbete i jourverksamhet</h4>
                <p>Nattarbete bör vara en central fråga i riskbedömningen för gravida läkare med jour eller nattpass. Enligt AFS 2023:2 får arbetsgivaren inte sysselsätta en gravid i nattarbete om läkarintyg anger att det skulle vara skadligt för hälsa eller säkerhet. Även utan ett sådant intyg kan jour- och nattbelastning behöva anpassas utifrån den individuella riskbedömningen — det öppnar för jourreduktion tidigare än de sista 60 dagarna om bedömningen stöder det.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Hot, våld och psykosocial belastning</h4>
                <p>Psykiatri, rättspsyk och akutmottagning. Fysiskt trauma mot buken kan direkt skada fostret; kraftigt stresspåslag vid hot är i sig en negativ faktor. Gravid läkare bör i regel inte arbeta i triage-zon, hög-våld-områden eller med kända våldsbenägna patienter — den exakta avvägningen bygger på individuell riskbedömning och lokal tillämpning.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* 3.6 Stockholms-avtalet om jourbefrielse */}
      <div className="grid">
        <div className="grid__label"><strong>3.6</strong>Jourbefrielse</div>
        <div className="section reveal">
          <div className="section__kicker">Lokalt avtal Region Stockholm</div>
          <h3 className="section__h">Rätten att befrias från jour från dag ett</h3>
          <div className="prose">
            <p className="lead">Stockholms läkarförening slöt i september 2008 ett lokalt kollektivavtal med dåvarande Stockholms läns landsting som ger gravida läkare rätt att <strong>på egen begäran</strong> befrias från jourarbete på kvällar, nätter och helger <strong>omedelbart från det att graviditeten konstaterats</strong>.</p>
            <p>Avtalet innebär att kravet på medicinska intyg och väntetider bortfaller inom dess tillämpningsområde, och bygger på att fostret är som mest känsligt under organogenesen tidigt i graviditeten. Det är ett lokalt avtals- och tillämpningsspår som kan ge tidigare jourbefrielse än de centrala reglerna — men den exakta innebörden och giltigheten bör verifieras med lokal läkarförening eller HR, inte åberopas som en universell regel utan kontroll. Rätten medför också ett schemapussel för verksamheten, vilket kan skapa friktion.</p>
          </div>
          <div className="callout">
            <div className="callout__tag">Så gör du</div>
            <div>
              <h5>Åberopa avtalet skriftligt</h5>
              <p>Skicka en kort skriftlig begäran till din klinikchef med hänvisning till det lokala avtalet mellan Region Stockholm och Stockholms läkarförening (2008). Du behöver inget läkarintyg. Kopia till skyddsombud rekommenderas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3.7 Process */}
      <div className="grid">
        <div className="grid__label"><strong>3.7</strong>Processen steg för steg</div>
        <div className="section reveal">
          <div className="section__kicker">Från anmälan till uppföljning</div>
          <div className="prose">
            <p>Följande steg är en <strong>praktisk arbetsgång</strong> — en rekommenderad process snarare än lagstadgade tidsfrister. Exakta tider kan variera mellan verksamheter; det viktiga är att arbetsgivaren agerar skyndsamt och dokumenterar besluten.</p>
          </div>
          <div className="rows rows--2col">
            <div className="row">
              <div className="row__wk">STEG 01</div>
              <div className="row__t">Skriftlig anmälan (e-post) till närmaste chef — daterar skyddets ikraftträdande</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 02</div>
              <div className="row__t">Chef bekräftar skriftligt och kallar till riskbedömningsmöte inom en vecka</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 03</div>
              <div className="row__t">Undersökning enligt bilaga 1 — exponeringens art, grad och varaktighet dokumenteras</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 04</div>
              <div className="row__t">Individuell bedömning — risk klassas som acceptabel, risk eller allvarlig risk</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 05</div>
              <div className="row__t">Skriftlig information om resultat och planerade åtgärder till dig</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 06</div>
              <div className="row__t">Åtgärd enligt trappan: eliminera → anpassa → omplacera → arbetsförbud</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 07</div>
              <div className="row__t">Revidering per trimester, vid ny placering och inför sista 60 dagarna</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 08</div>
              <div className="row__t">Vid arbetsförbud — arbetsgivarutlåtande till Försäkringskassan utan dröjsmål</div>
            </div>
          </div>
          <div className="callout">
            <div className="callout__tag">Dokumentation</div>
            <div>
              <h5>Protokollet är beviskedjan</h5>
              <p>Ett hållbart riskbedömningsprotokoll ska innehålla identifierande uppgifter, arbetsbeskrivning med schema, individuella medicinska faktorer, riskidentifiering mot bilaga 1, bedömning per risk, åtgärdsplan med ansvarig och tidpunkt, nästa uppföljningsdatum och underskrifter från chef, gravid och skyddsombud. <strong>Vid oenighet ska minoritetsmening antecknas</strong> — ett underskattat men avgörande krav.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3.8 Eskalering */}
      <div className="grid">
        <div className="grid__label"><strong>3.8</strong>När processen brakar samman</div>
        <div className="section reveal">
          <div className="section__kicker">Eskaleringskedjan</div>
          <h3 className="section__h">Från påminnelse till skyddsstopp</h3>
          <div className="prose">
            <p>Om din chef inte agerar, använd eskaleringen i rätt ordning. Varje steg är juridiskt starkare än det föregående — och varje steg lämnar skriftliga spår som stärker din sak.</p>
          </div>
          <ol className="list-num">
            <li>
              <div>
                <h4>Skriftlig påminnelse till chef</h4>
                <p>Kort e-post med datum för ursprunglig anmälan och begäran om skriftligt besked inom 7 dagar. Kopia till HR och skyddsombud.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Skyddsombud</h4>
                <p>Lokalt skyddsombud (ofta Läkarförbundet eller Vårdförbundet) har formell rätt till handlingar och upplysningar enligt AML 6 kap.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Stockholms läkarförening / Sylf Stockholm</h4>
                <p>Aktiv arbetsmiljögrupp som kan bistå med råd, kontakt med skyddsombud och facklig förhandling. För ST-läkare är Sylf parallell stödresurs.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>6 kap 6a § AML — skriftlig begäran om åtgärd</h4>
                <p>Skyddsombudet begär skriftligen att arbetsgivaren vidtar specifik åtgärd. Arbetsgivaren ska utan dröjsmål bekräfta mottagandet och lämna besked — i praktiken normalt inom ett par veckor. Ofta det mest effektiva eskaleringssteget.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Arbetsmiljöverket — tillsyn</h4>
                <p>Om adekvat svar uteblir hänskjuter skyddsombudet ärendet till Arbetsmiljöverkets regionkontor i Solna. Verket kan besluta om föreläggande och förbud, eventuellt med vite.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>6 kap 7 § AML — skyddsstopp</h4>
                <p>Skyddsombudet kan stoppa arbetet vid omedelbar och allvarlig fara för liv eller hälsa. Tröskeln är hög; används vid exempelvis oskyddad genomlysning, obehandlad smittsam TB utan FFP3, eller akut beordring trots nonchalerad riskbedömning.</p>
              </div>
            </li>
          </ol>
          <div className="callout callout--warn">
            <div className="callout__tag">Parallell kanal</div>
            <div>
              <h5>CAMM kan kontaktas utan arbetsgivarens vetskap</h5>
              <p>Centrum för arbets- och miljömedicin (Solnavägen 4, plan 10, 113 65 Stockholm, tel 08-123 372 22) ger kostnadsfri rådgivning till gravida som är skrivna i Region Stockholm eller Gotland. För gravida som saknar tillgång till företagshälsovård behövs ingen remiss; i andra fall bör arbetsgivaren i första hand koppla in företagshälsovården. Parallell bedömning kan ändå vara värdefull när du känner att lokal process inte räcker.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3.9 ST/AT/BT */}
      <div className="grid">
        <div className="grid__label"><strong>3.9</strong>ST, AT och BT</div>
        <div className="section reveal">
          <div className="section__kicker">Specifik problematik för läkare under utbildning</div>
          <h3 className="section__h">Varje ny placering är en ny riskbedömning</h3>
          <div className="prose">
            <p>Det som följer gäller gravida läkare under utbildning i bred mening — AT, BT och ST — eftersom alla tre tjänstgöringsformerna bygger på roterande placeringar med skiftande riskprofil. En praktisk och säker arbetsgång inför randning till anestesi, pediatrik, akut eller operation är att <strong>ny skriftlig riskbedömning för mottagande placering görs i god tid före tillträde — gärna 2–4 veckor</strong>, med möte med mottagande chef, studierektor och skyddsombud. Detta försummas systematiskt — Läkartidningens granskning 2018 visade att endast 3 av 39 studierektorer kunde redovisa dokumenterade individuella riskbedömningar.</p>
            <p>Studierektorn är <strong>inte</strong> arbetsmiljöansvarig — det är verksamhetschefen. Studierektorns roll är samordning: planera om rotationer, bevaka utbildningsvärdet, dokumentera att delmål kan uppfyllas via alternativ aktivitet.</p>
            <p>Att <strong>stanna kvar på en lågriskplacering</strong> är en legitim åtgärd enligt § 7 och ofta den enklaste lösningen. Läkarförbundets linje: en gravid AT-, BT- eller ST-läkare ska inte tvingas påbörja rotation till riskfylld placering om alternativ finns som ger meriteringsvärde.</p>
          </div>
          <div className="callout">
            <div className="callout__tag">ST-tid</div>
            <div>
              <h5>ST-tiden ska inte förlängas utan kompensationsprövning</h5>
              <p>Föräldraledighet räknas inte in i ST-tiden, men alternativ utbildningsaktivitet (auskultation, kurs, simulering, senare randning post partum) kan ersätta klinisk placering. Skriftlig överenskommelse mellan ST-läkare, verksamhetschef och studierektor om kompensation för förskjuten randning är nödvändig — innan den förskjuts.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3.10 Gråzoner */}
      <div className="grid">
        <div className="grid__label"><strong>3.10</strong>Gråzoner</div>
        <div className="section reveal">
          <div className="section__kicker">Tolkningsfrågor</div>
          <h3 className="section__h">Där evidens, försiktighet och praxis kolliderar</h3>
          <div className="prose">
            <p><strong>CMV i barnsjukvård.</strong> Vårdhandboken säger att basala hygienrutiner räcker; många regioner praktiserar ändå strängare individuell hantering för immunnegativa. Balanserad linje: serologi före graviditet, modifierade uppgifter (ingen blöj-/saliv-/urin-kontakt med barn under tre år) snarare än full omplacering.</p>
            <p><strong>Strålning under 1 mSv.</strong> Lagens ord "inte förväntas överstiga 1 mSv" är ett tak — inte en målnivå. ALARA gäller även under tröskeln, och 4 kap 9 § SSL ger en stark rätt till omplacering oavsett uppmätt dos.</p>
            <p><strong>Evidens vs försiktighet.</strong> AFS 2023:2 lutar mot försiktighetsprincip, men försiktigheten får inte bli diskriminering. Du har rätt till <em>rimlig anpassning</em> — inte automatisk hemsändning. Schabloner som "alla gravida ST-läkare skickas hem från akuten" är inte förenliga med kravet på individuell bedömning.</p>
            <p><strong>Serologisk screening.</strong> Inget nationellt program utöver rubella finns. CMV-kontroll är inte standard men kan starkt motiveras för pediatrik/neonatologi/barnakut. Om screeningen ingår i arbetsgivarens plikt enligt AFS 2023:15 ska den bekostas via företagshälsovården — i praktiken varierar detta.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
