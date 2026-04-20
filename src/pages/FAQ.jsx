import { useState } from 'react';
import PageHead from '../components/PageHead.jsx';

const FAQ_ITEMS = [
  {
    q: "När måste jag berätta om graviditeten för min arbetsgivare?",
    a: "Det finns ingen lagstadgad gräns. De individuella graviditetsspecifika åtgärderna enligt AFS 2023:2 kap 7 aktualiseras i praktiken när arbetsgivaren fått besked om graviditeten, så det är klokt att anmäla tidigt — särskilt vid arbete med strålning, cytostatika, högsmittsamma patogener eller nattjour. Samtidigt ska arbetsgivaren redan i förväg ha kartlagt risker för gravida i verksamheten."
  },
  {
    q: "Kan jag kräva jourbefrielse, och från när?",
    a: "Läkarförbundet och SKR har centralt avtalat att läkare som vill ska få befrias från jour- och beredskapstjänst under graviditetens sista 60 dagar. I Region Stockholm ger LOK 25 § 9 rätt till befrielse från jour och beredskapsarbete på kvällar och nätter på egen begäran — utan krav på läkarintyg — från det att graviditeten är konstaterad. Befrielse på övrig tid hanteras inom respektive förvaltning. Åberopa avtalet skriftligt till klinikchefen."
  },
  {
    q: "Kan jag slippa nattarbete hela graviditeten?",
    a: "Du kan ofta få nattarbete borttaget eller minskat under graviditeten, men grunden ser olika ut beroende på situation. Enligt AFS 2023:2 får arbetsgivaren inte sysselsätta en gravid i nattarbete om läkarintyg anger att det skulle vara skadligt för hälsan eller säkerheten. Även utan ett sådant intyg kan natt- och jourbelastning behöva anpassas inom ramen för den individuella riskbedömningen."
  },
  {
    q: "Hur påverkas min ST-tid av föräldraledigheten?",
    a: "Enligt HSLF-FS 2021:8 får föräldraledighet inte tillgodoräknas i ST-tiden — specialistbeviset skjuts fram med motsvarande tid. Undantag: alternativ utbildningsaktivitet som auskultation, kurs, simulering eller senarelagd randning post partum kan ersätta klinisk placering om delmål uppfylls. Dokumentera sådana överenskommelser skriftligt med verksamhetschef och studierektor innan placeringen förskjuts."
  },
  {
    q: "När måste jag anmäla föräldraledigheten, och hur lång framförhållning krävs?",
    a: "Föräldraledighetslagen kräver två månaders varsel. AB 25 § 29 skärper detta för region- och kommunsektorn till minst tre månader. För ledighet under juni–augusti får arbetsgivaren kräva anmälan senast 1 april, om arbetsgivaren framställt det kravet senast 15 mars. För läkare med långa schemacykler rekommenderas tidigare anmälan — gärna vid halva graviditeten."
  },
  {
    q: "Vilken ersättning får jag vid arbetsförbud p.g.a. arbetsmiljörisk?",
    a: "Du kan få graviditetspenning från Försäkringskassan — 80 % av SGI upp till taket (10 prisbasbelopp) — för hela den period arbetsförbudet gäller. För lönedelar över taket kan arbetsgivaren enligt AB 25 vara skyldig att betala mellanskillnad. För offentliga arbetsgivare har rättsläget stärkts genom AD 2025 nr 57, och i kommun- och regionsektorn har frågan om kompletterande ersättning därefter hanterats via partsöverenskommelser och facklig tillämpning. Kontrollera därför alltid vad som gäller hos just din arbetsgivare och för vilken period."
  },
  {
    q: "Får min lön eller befordran påverkas av att jag är föräldraledig?",
    a: "Nej. 16 § föräldraledighetslagen förbjuder missgynnande i anställningsvillkor, lön, befordran, kompetensutveckling och arbetsledning av skäl som har samband med föräldraledighet. Arbetsgivaren är skyldig att inkludera dig i den årliga lönerevisionen, och du har rätt till lönesamtal även under pågående ledighet. Vid tvist gäller bevislättnadsregeln i 24 §: om du visar omständigheter som ger anledning att anta ett sådant samband, måste arbetsgivaren visa att missgynnande inte skett eller att åtgärden varit en nödvändig följd av ledigheten."
  },
  {
    q: "Vad gör jag om min chef vägrar göra en riskbedömning?",
    a: "Kontakta omedelbart skyddsombudet. Skyddsombudet kan begära åtgärd skriftligen enligt 6 kap. 6a § arbetsmiljölagen — arbetsgivaren ska då utan dröjsmål lämna besked, i praktiken normalt inom ett par veckor. Om adekvat svar uteblir hänskjuts ärendet till Arbetsmiljöverkets regionkontor i Solna. Dokumentera alla kontakter skriftligt. Parallellt kan CAMM ge en kostnadsfri oberoende bedömning."
  },
  {
    q: "Hur mycket semester tjänar jag in under föräldraledigheten?",
    a: "De första 120 dagarna per barn av föräldraledighet med föräldrapenning är semesterlönegrundande enligt semesterlagen — 180 dagar för ensam vårdnadshavare. Tid utöver det tjänar inte in semester. Vid helårsledighet innebär det ungefär fyra månaders intjänad betald semester som kan sparas eller tas ut i anslutning till ledigheten."
  },
  {
    q: "Vad händer med min tjänstepension under ledigheten?",
    a: "Region Stockholm anger att tjänstepensionsavsättning (AKAP-KR) normalt fortsätter även under föräldraledighet, baserat på den lön du skulle haft om du arbetat. Avsättningen är normalt 6 % av lönen upp till 7,5 inkomstbasbelopp och 31,5 % därutöver. Exakta villkor bör kontrolleras mot aktuell pensionslösning och arbetsgivarens information; upplägget skiljer sig också från många privata lösningar där frånvaroperioder kan pausa inbetalningarna."
  },
  {
    q: "Hur skyddas min SGI om jag går ned till 80 % efter återgång?",
    a: "Fram till barnet fyller 1 år är SGI fullt skyddad. Efter det skyddas SGI endast om du tar ut föräldrapenning i samma omfattning som du gått ned i arbetstid. Går du ned till 80 % måste du alltså ta ut 20 % föräldrapenning. Missar du det omberäknas SGI och påverkar både framtida sjukpenning och föräldrapenning för syskon."
  },
  {
    q: "Kan jag jobba deltid när jag kommer tillbaka?",
    a: "Ja. Delledighet med föräldrapenning ger rätt att gå ned till 7/8, 3/4, 1/2 eller 1/4 av arbetstiden (87,5 %, 75 %, 50 % eller 25 % arbete). Utan föräldrapenning har du rätt att förkorta arbetstiden med upp till 25 % — gå ned till 75 % — tills barnet fyller 8 år eller avslutat första skolåret. För läkare ska jourbelastningen motsvara tjänstgöringsgraden; jourlinjen får inte ligga kvar på 100 % utan ditt samtycke."
  },
  {
    q: "Har jag rätt till betald ledighet för mödravårdsbesök?",
    a: "I kommun- och regionsektorn finns kollektivavtalsregler om ledighet med lön för ett begränsat antal besök på barnmorskemottagning. Kontrollera den exakta lokala tillämpningen och om förmånen gäller dig och den andra föräldern i din anställningsform. För ytterligare besök kan föräldrapenning tas ut från 60 dagar före beräknad förlossning."
  },
  {
    q: "Jag är gravid och inhyrd via bemanningsföretag — gäller samma regler?",
    a: "Själva rätten till ledighet och skydd enligt föräldraledighetslagen gäller mot din formella arbetsgivare — bemanningsföretaget — inte mot Region Stockholm. AB 25 och regionens förmåner gäller inte. Arbetsmiljöansvaret enligt AFS 2023:2 vilar däremot även på det inhyrande verksamhetsstället, så riskbedömning och omplacering kan krävas där du arbetar."
  },
  {
    q: "Kan jag pausa föräldraledigheten om jag blir sjuk?",
    a: "Ja. Anmäl sjukdom till Försäkringskassan och pausa föräldrapenningen. Dag 1–14: sjukpenning betalas endast för dagar du annars skulle ha tagit ut föräldrapenning. Från dag 15: sjukpenning för veckans alla dagar. Samtidig föräldrapenning och sjukpenning för samma tid är inte tillåtet."
  },
  {
    q: "Vad är skillnaden mellan föräldrapenningtillägg och föräldralön?",
    a: "Två separata tillägg enligt AB 25 § 29, båda förutsätter minst 180 sammanhängande kalenderdagars anställning. Föräldrapenningtillägget är 10 % av lönebortfallet under 180 dagar. Föräldralönen är mellanskillnadsersättning för lön över Försäkringskassans tak, under upp till 270 dagar, och förutsätter fast månadslön över tröskeln 10 prisbasbelopp / 12 (≈ 49 300 kr/mån för 2026)."
  },
  {
    q: "Kan jag ta VAB när min partner är sjuk och skulle ha varit hemma med barnet?",
    a: "Ja. Den förälder som inte normalt vårdar barnet kan ta tillfällig föräldrapenning (VAB) när den andra föräldern är sjuk och därför inte kan ta hand om barnet. Huvudregeln är att detta gäller från att barnet är 8 månader — för barn yngre än så är föräldrapenning grundformen. Anmäl till Försäkringskassan från dag 1."
  },
  {
    q: "Vad gäller om jag blir missgynnad efter återgång — fel schema eller omplacering?",
    a: "16 § föräldraledighetslagen förbjuder missgynnande av skäl som har samband med föräldraledighet. Vid tvist gäller bevislättnadsregeln i 24 §: om du visar omständigheter som ger anledning att anta ett sådant samband, måste arbetsgivaren visa att missgynnande inte skett eller att åtgärden varit en nödvändig följd av ledigheten. Skadestånd utgår vid överträdelse. Kontakta först lokal läkarförening, därefter Läkarförbundets medlemsrådgivning. DO kan driva talan i vissa diskrimineringsärenden."
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="page" data-page="faq" data-screen-label="05 FAQ">
      <PageHead
        num="05"
        title="Vanliga"
        titleEm="frågor"
        eyebrow="KAP. 5"
        lede="Frågor som läkarföreningar, skyddsombud och studierektorer får återkommande — sammanställda utifrån lag, föreskrifter, kollektivavtal och offentliga vägledningar."
      />
      <div className="grid">
        <div className="grid__label"><strong>5.1</strong>Q · A</div>
        <div className="section reveal">
          <div className="section__kicker">{FAQ_ITEMS.length} återkommande frågor</div>
          <div>
            {FAQ_ITEMS.map((it, i) => (
              <div key={i} className={`faq__item ${open === i ? "open" : ""}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <div className="faq__q">
                  <div className="faq__n">Q.{String(i+1).padStart(2, "0")}</div>
                  <div className="faq__t">{it.q}</div>
                  <div className="faq__plus"></div>
                </div>
                <div className="faq__a"><p>{it.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
