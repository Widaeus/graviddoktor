import PageHead from '../components/PageHead.jsx';

export default function Arbetsmiljo() {
  return (
    <section className="page" data-page="arbetsmiljo" data-screen-label="02 Arbetsmiljö">
      <PageHead
        num="02"
        title="Arbetsmiljö &"
        titleEm="riskbedömning"
        eyebrow="KAP. 2"
        lede="Så snart du har meddelat din graviditet är arbetsgivaren skyldig att göra en individuell, skriftlig riskbedömning av just din tjänstgöring. Bedömningen ska omfatta fysiska, kemiska, biologiska och psykosociala faktorer — och den ska leda till konkreta åtgärder enligt en bestämd prioritetsordning."
      />

      {/* 2.1 Lagstöd */}
      <div className="grid">
        <div className="grid__label"><strong>2.1</strong>Rättsligt fundament</div>
        <div className="section reveal">
          <div className="section__kicker">Regelverket</div>
          <h3 className="section__h">AFS 2023:2 kap 7 — ny struktur sedan 1 januari 2025</h3>
          <div className="prose">
            <p className="lead">Den 1 januari 2025 trädde Arbetsmiljöverkets omstrukturerade regelverk i kraft. De tidigare föreskrifterna om gravida och ammande (AFS 2007:5) har ersatts och inkorporerats i <a className="ref">AFS 2023:2 kapitel 7 — Gravida, nyförlösta och ammande arbetstagare</a>.</p>
            <p>Skyddet vilar på flera lager: Arbetsmiljölagen (SFS 1977:1160) sätter ramarna, AFS 2023:2 kap 7 preciserar rutinerna, och vid strålning trumfar Strålskyddslagen (SFS 2018:396) 4 kap allt annat. Föräldraledighetslagen §§ 18–20 ger rätt till omplacering och skyddsledighet, och Diskrimineringslagen 2 kap 1 § förbjuder missgynnande som har samband med graviditet.</p>
            <p>Skyddet aktiveras av <strong>din anmälan</strong>. Utan anmälan — inget särskilt skydd. Anmäl därför skriftligt (e-post) så fort graviditeten är känd, särskilt om du arbetar i högriskmiljö, eftersom fostret är som mest känsligt under de första veckorna.</p>
          </div>
          <div className="callout">
            <div className="callout__tag">Viktigt</div>
            <div>
              <h5>Hänvisningar till AFS 2007:5 är obsoleta</h5>
              <p>Äldre lokala PM, checklistor och riktlinjer på Karolinska, SÖS, Danderyd, SLSO, Södertälje och S:t Erik hänvisar ofta fortfarande till AFS 2007:5. Substansen i dessa dokument kan vara korrekt, men den formella referensen ska från 2025 vara <strong>AFS 2023:2 kap 7</strong> för gravida och ammande, och <strong>AFS 2023:15</strong> för medicinska kontroller.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2.2 Åtgärdstrappan */}
      <div className="grid">
        <div className="grid__label"><strong>2.2</strong>Åtgärdstrappan</div>
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

      {/* 2.3 Risker — biologiska */}
      <div className="grid">
        <div className="grid__label"><strong>2.3</strong>Biologiska risker</div>
        <div className="section reveal">
          <div className="section__kicker">Smittämnen i riskklass 2–4</div>
          <h3 className="section__h">Smittor som måste bedömas individuellt</h3>
          <div className="prose">
            <p>Sjukhusmiljön är per definition förenad med risk för potenta patogener. För <strong>rubella</strong> och <strong>toxoplasma</strong> gäller absolut förbud om immunitet saknas. För övriga smittor krävs individuell bedömning utifrån exponeringens art, grad och varaktighet.</p>
          </div>
          <ol className="list-num">
            <li>
              <div>
                <h4>Cytomegalovirus (CMV)</h4>
                <p>Den mest omdiskuterade risken i svensk vård. 30–50 % av unga kvinnor är immunnegativa. Primärinfektion under graviditet överförs till fostret i cirka 30–50 % av fallen. Pragmatisk hållning: serologi bör erbjudas <em>före</em> graviditet till personal på pediatrik, neonatologi och barnakut. Immunnegativ gravid kan ofta arbeta kvar med modifierade uppgifter (ingen blöj-/saliv-/urin-kontakt med barn under tre år) snarare än full omplacering.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Parvovirus B19 (femte sjukan)</h4>
                <p>Underskattad risk. Primärinfektion före graviditetsvecka 20 ger cirka 9 % missfallsrisk samt risk för hydrops fetalis. Vid utbrott på barn- eller infektionsavdelning ska immunnegativ gravid omplaceras.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Varicella zoster och mässling</h4>
                <p>Högsmittsamt luftburet. Immunnegativ gravid ska <strong>inte</strong> exponeras för akut vattkoppsfall, disseminerad zoster eller mässling — även FFP3 räcker inte som garanti på grund av bristande rutiner och dörrspaltssmitta.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Tuberkulos</h4>
                <p>Passform-testad FFP3 i enkelrum med sluss ger i regel fullgott skydd. Vid högsmittsam multiresistent TB kan ytterligare åtgärder eller omplacering övervägas. Observera risk för reaktivering av latent TB postpartum.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Rubella (röda hund) och toxoplasma</h4>
                <p>Absoluta förbud enligt AFS 2023:2 vid utebliven immunitet. Brott kan ge sanktionsavgift. Rubella är ovanligt i Sverige tack vare vaccinationsprogrammet men fertil vårdpersonal bör ändå kontrolleras.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Blodburna smittor (HBV, HCV, HIV)</h4>
                <p>Basala hygien- och stickskyddsrutiner räcker. Risken är inte större för gravid än för övrig personal om rutinerna följs. Stickskador hanteras akut enligt Vårdhandboken.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* 2.4 Strålning */}
      <div className="grid">
        <div className="grid__label"><strong>2.4</strong>Joniserande strålning</div>
        <div className="section reveal">
          <div className="section__kicker">Strålskyddslagen 4 kap 7–11 §§</div>
          <h3 className="section__h">Läkarens starkaste skydd</h3>
          <div className="prose">
            <p className="lead">Strålskyddslagen ger en asymmetriskt stark rätt. Efter din anmälan ska arbetet planeras så att fostrets effektiva dos <strong>inte förväntas överstiga 1 mSv</strong> under återstoden av graviditeten.</p>
            <p><strong>4 kap 9 § SSL</strong> ger dig en nästan ovillkorlig rätt: på egen begäran ska arbetsgivaren erbjuda arbetsuppgifter utan exponering utöver allmänhetens nivå. Det betyder att en gravid interventionell kardiolog, radiolog, ortoped med C-båge, urolog eller kärlkirurg kan begära att slippa genomlysningsmomenten även om historisk badgedos ligger långt under gränsen.</p>
            <p>1 mSv är ett <em>tak</em>, inte ett riktvärde — ALARA-principen gäller även under tröskeln. Dessutom är det <strong>absolut förbjudet</strong> enligt 4 kap 10 § att gravid eller ammande deltar i radiologiska nödsituationer.</p>
            <p>MR-kamerans statiska magnetfält har inte i kontrollerade studier visat fosterskada. Enligt försiktighetsprincipen — bred praxis i svensk vård — bör gravid personal ändå undvika att vistas i magnetrummet under pågående skanning. Granskning av bilder utanför undersökningsrummet är oproblematiskt.</p>
          </div>
        </div>
      </div>

      {/* 2.5 Kemiska och fysiska risker */}
      <div className="grid">
        <div className="grid__label"><strong>2.5</strong>Kemiska och fysiska</div>
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
                <p>Formalin är reproduktionstoxiskt — gravid patolog ska inte utföra makroskopiska snittningar eller arbeta vid fixeringsbänk. Metylmetakrylat (bencement) i ortopedi bör undvikas under härdningsfasen. Organiska lösningsmedel ökar missfallsrisken vid höggradig exponering.</p>
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
                <p>Sedan 2025 är <strong>nattarbete i jourverksamhet med krav på akuta insatser</strong> explicit utpekat som riskfaktor i AFS 2023:2 bilaga 1 — tidigare låg detta endast i allmänna råd. Det öppnar för jourreduktion långt tidigare än de sista 60 dagarna om den individuella bedömningen stöder det.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Hot, våld och psykosocial belastning</h4>
                <p>Psykiatri, rättspsyk och akutmottagning. Fysiskt trauma mot buken kan direkt skada fostret; kraftigt stresspåslag vid hot är i sig en negativ faktor. Gravid läkare ska undvika triage-zon, hög-våld-områden och arbete med kända våldsbenägna patienter.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* 2.6 Stockholms-avtalet om jourbefrielse */}
      <div className="grid">
        <div className="grid__label"><strong>2.6</strong>Jourbefrielse</div>
        <div className="section reveal">
          <div className="section__kicker">Lokalt avtal Region Stockholm</div>
          <h3 className="section__h">Rätten att befrias från jour från dag ett</h3>
          <div className="prose">
            <p className="lead">Stockholms läkarförening slöt i september 2008 ett lokalt kollektivavtal med dåvarande Stockholms läns landsting som ger gravida läkare rätt att <strong>på egen begäran</strong> befrias från jourarbete på kvällar, nätter och helger <strong>omedelbart från det att graviditeten konstaterats</strong>.</p>
            <p>Detta avtal eliminerar kravet på medicinska intyg och väntetider. Det bygger på att fostret är som mest känsligt under organogenesen tidigt i graviditeten. Rätten till tidig jourbefrielse är ett av de mest potenta arbetsmiljöverktygen inom Region Stockholm — men den medför också ett stort schemapussel för verksamheten, vilket kan skapa friktion.</p>
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

      {/* 2.7 Process */}
      <div className="grid">
        <div className="grid__label"><strong>2.7</strong>Processen steg för steg</div>
        <div className="section reveal">
          <div className="section__kicker">Från anmälan till uppföljning</div>
          <div className="rows">
            <div className="row">
              <div className="row__wk">STEG 01</div>
              <div className="row__t">Skriftlig anmälan (e-post) till närmaste chef — daterar skyddets ikraftträdande</div>
              <div className="row__meta">Du / dag 0</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 02</div>
              <div className="row__t">Chef bekräftar skriftligt och kallar till riskbedömningsmöte inom en vecka</div>
              <div className="row__meta">Chef + skyddsombud</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 03</div>
              <div className="row__t">Undersökning enligt bilaga 1 — exponeringens art, grad och varaktighet dokumenteras</div>
              <div className="row__meta">§ 5 AFS 2023:2</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 04</div>
              <div className="row__t">Individuell bedömning — risk klassas som acceptabel, risk eller allvarlig risk</div>
              <div className="row__meta">§ 5 p 2</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 05</div>
              <div className="row__t">Skriftlig information om resultat och planerade åtgärder till dig</div>
              <div className="row__meta">§ 6</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 06</div>
              <div className="row__t">Åtgärd enligt trappan: eliminera → anpassa → omplacera → arbetsförbud</div>
              <div className="row__meta">§ 7–8</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 07</div>
              <div className="row__t">Revidering per trimester, vid ny placering och inför sista 60 dagarna</div>
              <div className="row__meta">Levande dokument</div>
            </div>
            <div className="row">
              <div className="row__wk">STEG 08</div>
              <div className="row__t">Vid arbetsförbud — arbetsgivarutlåtande till Försäkringskassan utan dröjsmål</div>
              <div className="row__meta">Graviditetspenning</div>
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

      {/* 2.8 Eskalering */}
      <div className="grid">
        <div className="grid__label"><strong>2.8</strong>När processen brakar samman</div>
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
              <p>Centrum för arbets- och miljömedicin (Solnavägen 4, plan 10, 113 65 Stockholm, tel 08-123 372 22) erbjuder kostnadsfri rådgivning till gravida skrivna i Region Stockholm. Remissfritt och konfidentiellt. Parallell bedömning kan vara värdefull när du känner att lokal process inte räcker.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2.9 ST/AT/BT */}
      <div className="grid">
        <div className="grid__label"><strong>2.9</strong>ST, AT och BT</div>
        <div className="section reveal">
          <div className="section__kicker">Specifik problematik för läkare under utbildning</div>
          <h3 className="section__h">Varje ny placering är en ny riskbedömning</h3>
          <div className="prose">
            <p>En gravid ST-läkare inför randning till anestesi, pediatrik, akut eller operation ska ha <strong>ny skriftlig riskbedömning för mottagande placering minst 2–4 veckor före tillträde</strong>, med möte med mottagande chef, studierektor och skyddsombud. Detta försummas systematiskt — Läkartidningens granskning 2018 visade att endast 3 av 39 studierektorer kunde redovisa dokumenterade individuella riskbedömningar.</p>
            <p>Studierektorn är <strong>inte</strong> arbetsmiljöansvarig — det är verksamhetschefen. Studierektorns roll är samordning: planera om rotationer, bevaka utbildningsvärdet, dokumentera att delmål kan uppfyllas via alternativ aktivitet. <a className="ref">HSLF-FS 2021:8</a> är kompetensbaserad — det är kompetensen, inte tiden på en viss placering, som räknas.</p>
            <p>Att <strong>stanna kvar på en lågriskplacering</strong> är en legitim åtgärd enligt § 7 och ofta den enklaste lösningen. Läkarförbundets linje: gravid ST-läkare ska inte tvingas påbörja rotation till riskfylld placering om alternativ finns som ger meriteringsvärde.</p>
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

      {/* 2.10 Gråzoner */}
      <div className="grid">
        <div className="grid__label"><strong>2.10</strong>Gråzoner</div>
        <div className="section reveal">
          <div className="section__kicker">Tolkningsfrågor</div>
          <h3 className="section__h">Där evidens, försiktighet och praxis kolliderar</h3>
          <div className="prose">
            <p><strong>CMV i barnsjukvård.</strong> Vårdhandboken säger att basala hygienrutiner räcker; många regioner praktiserar ändå strängare individuell hantering för immunnegativa. Balanserad linje: serologi före graviditet, modifierade uppgifter (ingen blöj-/saliv-/urin-kontakt med barn under tre år) snarare än full omplacering.</p>
            <p><strong>Strålning under 1 mSv.</strong> Lagens ord "inte förväntas överstiga 1 mSv" är ett tak — inte en målnivå. ALARA gäller även under tröskeln, och 4 kap 9 § SSL ger ovillkorlig rätt till omplacering oavsett uppmätt dos.</p>
            <p><strong>Evidens vs försiktighet.</strong> AFS 2023:2 lutar mot försiktighetsprincip, men försiktigheten får inte bli diskriminering. Du har rätt till <em>rimlig anpassning</em> — inte automatisk hemsändning. Schabloner som "alla gravida ST-läkare skickas hem från akuten" är inte förenliga med kravet på individuell bedömning.</p>
            <p><strong>Serologisk screening.</strong> Inget nationellt program utöver rubella finns. CMV-kontroll är inte standard men kan starkt motiveras för pediatrik/neonatologi/barnakut. Om screeningen ingår i arbetsgivarens plikt enligt AFS 2023:15 ska den bekostas via företagshälsovården — i praktiken varierar detta.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
