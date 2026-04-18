import PageHead from '../components/PageHead.jsx';

export default function Avstangning() {
  return (
    <section className="page" data-page="avstangning" data-screen-label="05 Avstängning">
      <PageHead
        num="05"
        title="Avstängning"
        titleEm="från arbete"
        eyebrow="KAP. 5"
        lede="I vissa fall har arbetsgivaren skyldighet att stänga av dig från arbetet — oftast då riskbedömningen visar fara och omplacering inte är möjlig. Avstängning ska alltid ske med bibehållna rättigheter och utan ekonomisk förlust."
      />

      <div className="grid">
        <div className="grid__label"><strong>5.1</strong>När avstängning</div>
        <div className="section reveal">
          <div className="section__kicker">Grunder för avstängning</div>
          <div className="prose">
            <p className="lead">Enligt 4 kap. 6 § arbetsmiljölagen ska arbetsgivaren förbjuda dig att fortsätta arbetet om risken för graviditeten inte kan elimineras genom anpassning eller omplacering.</p>
            <p>I läkaryrket uppstår avstängning oftast vid exponering för joniserande strålning utöver referensvärdet, hantering av cytostatika utan säkra system, eller arbete i miljö med hög smittrisk där skyddsutrustning är otillräcklig.</p>
          </div>
          <ol className="list-num">
            <li>
              <div>
                <h4>Stråldos över 1 mSv</h4>
                <p>Arbetsgivaren är skyldig att stänga av dig från arbete där fosterdosen kan överstiga 1 mSv under graviditetens resterande tid.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Kemisk exponering som inte kan elimineras</h4>
                <p>Exempelvis cytostatika, vissa narkosgaser, ämnen märkta H360 (CMR-klassning).</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Biologiska agenser i smittklass 3–4</h4>
                <p>När adekvat skyddsutrustning och vaccinationsskydd inte finns tillgängligt.</p>
              </div>
            </li>
            <li>
              <div>
                <h4>Våld och hot där omplacering saknas</h4>
                <p>T.ex. sluten psykiatrisk vård där alternativa arbetsuppgifter inte kan erbjudas.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="grid">
        <div className="grid__label"><strong>5.2</strong>Ekonomi</div>
        <div className="section reveal">
          <div className="section__kicker">Ekonomi vid avstängning</div>
          <div className="prose">
            <p>Vid avstängning enligt arbetsmiljölagen har du rätt till <em>graviditetspenning med utökad grund</em> från Försäkringskassan — 60 dagar före beräknad förlossning, utbetalad som 80 % av SGI upp till takbeloppet.</p>
            <p>För ersättning utöver taket är arbetsgivaren i många regioner skyldig att betala mellanskillnad enligt lokalt kollektivavtal. Kontrollera alltid det egna avtalet innan avstängningen träder i kraft.</p>
          </div>
          <div className="callout">
            <div className="callout__tag">Process</div>
            <div>
              <h5>Avstängning ska alltid dokumenteras skriftligt</h5>
              <p>Begär skriftligt beslut från arbetsgivaren som anger grund, period och ekonomisk lösning. Detta är underlag för Försäkringskassan och skyddar dig vid eventuella tvister.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="grid__label"><strong>5.3</strong>Dina rättigheter</div>
        <div className="section reveal">
          <div className="section__kicker">Vad du har rätt till</div>
          <div className="rows">
            <div className="row">
              <div className="row__wk">RÄTT 01</div>
              <div className="row__t">Skriftligt beslut med motivering — inom 10 arbetsdagar</div>
              <div className="row__meta">AML 4:6</div>
            </div>
            <div className="row">
              <div className="row__wk">RÄTT 02</div>
              <div className="row__t">Bibehållen anställning och anställningsvillkor</div>
              <div className="row__meta">FLL 16 §</div>
            </div>
            <div className="row">
              <div className="row__wk">RÄTT 03</div>
              <div className="row__t">Graviditetspenning via Försäkringskassan</div>
              <div className="row__meta">SFB 10 kap.</div>
            </div>
            <div className="row">
              <div className="row__wk">RÄTT 04</div>
              <div className="row__t">Eventuell mellanskillnad för lön över tak</div>
              <div className="row__meta">Kollektivavtal</div>
            </div>
            <div className="row">
              <div className="row__wk">RÄTT 05</div>
              <div className="row__t">Kompetensutveckling får inte avbrytas — ST-tiden förlängs</div>
              <div className="row__meta">HSLF-FS 2021:8</div>
            </div>
            <div className="row">
              <div className="row__wk">RÄTT 06</div>
              <div className="row__t">Rätt att kalla in skyddsombud och facklig representation</div>
              <div className="row__meta">AML 6:4</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
