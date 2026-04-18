// Föräldraledighet
const PageForaldra = () => (
  <section className="page" data-page="foraldraledighet" data-screen-label="03 Föräldraledighet">
    <PageHead
      num="03"
      title="Föräldra-"
      titleEm="ledighet"
      eyebrow="KAP. 3"
      lede="Föräldraledighetslagen (1995:584) ger dig som förälder en omfattande rätt till ledighet — med eller utan föräldrapenning. För läkare innebär det planering av schema, jour och tjänstgöringsgrad långt innan barnet är fött."
    />

    <div className="grid">
      <div className="grid__label"><strong>3.1</strong>Former</div>
      <div className="section reveal">
        <div className="section__kicker">Ledighetsformer</div>
        <ol className="list-num">
          <li>
            <div>
              <h4>Hel ledighet med föräldrapenning</h4>
              <p>Rätt att vara helt ledig så länge föräldrapenning utbetalas — upp till 480 dagar per barn varav 90 är reserverade för vardera föräldern.</p>
            </div>
          </li>
          <li>
            <div>
              <h4>Hel ledighet utan föräldrapenning</h4>
              <p>Rätt att vara helt ledig från arbetet tills barnet fyller 18 månader, oavsett om du tar ut föräldrapenning eller inte.</p>
            </div>
          </li>
          <li>
            <div>
              <h4>Delledighet med föräldrapenning</h4>
              <p>Rätt att förkorta arbetstiden med motsvarande 25 %, 50 % eller 75 % vid uttag av föräldrapenning.</p>
            </div>
          </li>
          <li>
            <div>
              <h4>Delledighet utan föräldrapenning</h4>
              <p>Rätt att förkorta arbetstiden med upp till 25 % av normal arbetstid fram till barnet fyller 8 år eller avslutat första skolåret.</p>
            </div>
          </li>
          <li>
            <div>
              <h4>Tillfällig vård av barn (VAB)</h4>
              <p>Rätt till ledighet vid barns sjukdom upp till 120 dagar/år och barn. För läkare innebär detta normalt snabb återgång efter avslutad ledighet.</p>
            </div>
          </li>
        </ol>
      </div>
    </div>

    <div className="grid">
      <div className="grid__label"><strong>3.2</strong>Tidslinje</div>
      <div className="section reveal">
        <div className="section__kicker">Vad händer när</div>
        <h3 className="section__h">En typisk tidslinje från graviditet till återgång</h3>
        <div className="timeline">
          <div className="tl__item">
            <div className="tl__dot filled"></div>
            <div className="tl__w">V. 0–12 · Tidig graviditet</div>
            <div className="tl__t">Skriftlig anmälan till arbetsgivaren</div>
            <div className="tl__d">Initiera riskbedömning. Diskutera jour, nattarbete och exponering med närmaste chef och skyddsombud.</div>
          </div>
          <div className="tl__item">
            <div className="tl__dot filled"></div>
            <div className="tl__w">V. 12–28 · Andra trimestern</div>
            <div className="tl__t">Planera schemaläggning</div>
            <div className="tl__d">Semesteruttag, eventuell havandeskapspenning och beräknad ledighetsperiod meddelas senast två månader före ledighetens början.</div>
          </div>
          <div className="tl__item">
            <div className="tl__dot filled"></div>
            <div className="tl__w">V. 28–38 · Tredje trimestern</div>
            <div className="tl__t">Havandeskapspenning vid behov</div>
            <div className="tl__d">Upp till 50 dagar om arbetet är fysiskt påfrestande, 60 dagar vid omplaceringssvårigheter. Utbetalas tidigast 60 dagar före beräknad förlossning.</div>
          </div>
          <div className="tl__item">
            <div className="tl__dot"></div>
            <div className="tl__w">Förlossning · Vecka 38–42</div>
            <div className="tl__t">Föräldrapenning aktiveras</div>
            <div className="tl__d">Modern har rätt till ledighet med havandeskapspenning fram till förlossning. Från förlossningsdagen räknas föräldrapenningdagarna.</div>
          </div>
          <div className="tl__item">
            <div className="tl__dot"></div>
            <div className="tl__w">Efter 0–18 mån</div>
            <div className="tl__t">Hel ledighet utan krav på föräldrapenning</div>
            <div className="tl__d">Rätt till sammanhängande ledighet i upp till tre perioder per år. Anmäl återgång minst en månad i förväg.</div>
          </div>
          <div className="tl__item">
            <div className="tl__dot"></div>
            <div className="tl__w">Återgång · &amp; efter</div>
            <div className="tl__t">Arbetsförhållanden får ej försämras</div>
            <div className="tl__d">Enligt 16 § föräldraledighetslagen får du inte missgynnas i fråga om anställningsvillkor, kompetensutveckling, lönerevision eller befordran.</div>
          </div>
        </div>
      </div>
    </div>

    <div className="grid">
      <div className="grid__label"><strong>3.3</strong>Jour & ST</div>
      <div className="section reveal">
        <div className="section__kicker">Särskilt för läkare</div>
        <div className="prose">
          <p className="lead">För ST-läkare förlängs utbildningstiden motsvarande ledighetens längd. Socialstyrelsens föreskrifter medger att delmoment som ej hunnit genomföras flyttas fram utan nackdel för specialistbevis.</p>
          <p>Jourkompensation, beredskap och nattarbete upphör automatiskt vid ledighetens start. Vid återgång har du rätt att fasa in dessa moment successivt enligt lokalt kollektivavtal — typiskt 4–8 veckor utan jour beroende på ledighetens längd.</p>
        </div>
        <div className="callout callout--warn">
          <div className="callout__tag">Obs</div>
          <div>
            <h5>Ledigheten ska anmälas senast två månader i förväg</h5>
            <p>Enligt 13 § föräldraledighetslagen. För läkare med långa schemacykler rekommenderas tidigare anmälan — gärna vid halva graviditeten — för att möjliggöra rekrytering av vikarie och undvika hål i bemanningen.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

window.PageForaldra = PageForaldra;
