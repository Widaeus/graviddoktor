import { useState } from 'react';
import PageHead from '../components/PageHead.jsx';

const FAQ_ITEMS = [
  {
    q: "När måste jag berätta om graviditeten för min arbetsgivare?",
    a: "Det finns ingen lagstadgad gräns, men för att aktivera arbetsgivarens skyldigheter enligt AFS 2007:5 bör du anmäla graviditeten skriftligt så snart du själv bekräftat den. Vid arbete med strålning, cytostatika eller smittämnen bör det ske omedelbart."
  },
  {
    q: "Kan jag fortsätta gå jour under graviditeten?",
    a: "Ja, så länge riskbedömningen inte visar annat. Från graviditetsvecka 20 har du rätt att avstå nattjour av medicinska skäl. Diskutera med din läkare och chef i god tid — många väljer att trappa ned jourtjänstgöring successivt."
  },
  {
    q: "Hur påverkas min ST-tid av föräldraledigheten?",
    a: "ST-tiden förlängs med exakt den tid du varit ledig. Delmoment som inte hunnit genomföras flyttas fram utan nackdel för specialistbevis enligt Socialstyrelsens föreskrifter."
  },
  {
    q: "Vad händer med min lön om jag blir avstängd från arbete?",
    a: "Du får graviditetspenning via Försäkringskassan — 80 % av SGI upp till takbeloppet. För lön över taket kan arbetsgivaren vara skyldig att betala mellanskillnad enligt kollektivavtalet. Kontrollera det lokala avtalet och kontakta facket om du är osäker."
  },
  {
    q: "Får jag nekas befordran eller lönerevision för att jag är föräldraledig?",
    a: "Nej. 16 § föräldraledighetslagen är tydlig: du får inte missgynnas i fråga om anställningsvillkor, lön, befordran eller kompetensutveckling på grund av att du har eller har utnyttjat din rätt till ledighet."
  },
  {
    q: "Vad gör jag om min chef vägrar göra en riskbedömning?",
    a: "Kontakta omedelbart skyddsombudet på arbetsplatsen. Skyddsombudet har rätt att begära åtgärder enligt 6 kap. 6a § arbetsmiljölagen, och om så krävs vända sig till Arbetsmiljöverket. Dokumentera alla kontakter skriftligt."
  },
  {
    q: "Hur många dagars semester tjänar jag in under ledigheten?",
    a: "Upp till 120 dagars föräldraledighet per förälder är semesterlönegrundande enligt 17a § semesterlagen. Vid flerbarnsfödsel gäller 180 dagar. Över den gränsen tjänas ingen ny semester in."
  },
  {
    q: "Kan jag jobba deltid när jag kommer tillbaka?",
    a: "Ja. Du har rätt att förkorta arbetstiden med upp till 25 % av normal arbetstid tills barnet fyller 8 år eller avslutat första skolåret — helt utan krav på föräldrapenninguttag."
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="page" data-page="faq" data-screen-label="06 FAQ">
      <PageHead
        num="06"
        title="Vanliga"
        titleEm="frågor"
        eyebrow="KAP. 6"
        lede="Frågor som läkarföreningar, skyddsombud och studierektorer får återkommande — samlade och med källhänvisning till lag, förordning eller kollektivavtal."
      />
      <div className="grid">
        <div className="grid__label"><strong>6.1</strong>Q · A</div>
        <div className="section reveal">
          <div className="section__kicker">8 återkommande frågor</div>
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
