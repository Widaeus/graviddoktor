import { PAGES } from '../data/pages.js';
import { useScroll } from '../hooks/scroll.js';
import { GeoSquare, GeoScale } from '../components/Geo.jsx';

export default function Hero() {
  const { scrollY } = useScroll();
  return (
    <section className="hero page" data-page="hem" data-screen-label="01 Hem">
      <div className="hero__geo">
        <div
          className="mark"
          style={{ left: 40, bottom: 260, width: 300, height: 300, opacity: 0.5, transform: `translateY(${scrollY * 0.08}px)` }}
        >
          <GeoSquare opacity={0.5} />
        </div>
        <div className="mark" style={{ right: 180, bottom: 180, width: 200, height: 50, opacity: 0.5 }}>
          <GeoScale />
        </div>
      </div>

      <div className="hero__top">
        <span><strong>Gravid Doktor</strong> — En guide för läkare i Region Stockholm</span>
        <span><span>Senast rev. 2026-04-18</span></span>
      </div>

      <div className="hero__body">
        <div>
          <h1 className="hero__title">
            Vad är det som <em>gäller</em>?
          </h1>
        </div>
        <div>
          <p className="hero__manifesto">
            Det är ofta svårt att få en tydlig bild av vad som gäller vid graviditet och föräldraskap i läkaryrket. Den här guiden samlar lagregler, myndighetsinformation, kollektivavtal och praktiska erfarenheter för läkare som i första hand är anställda i Region Stockholm: från riskbedömning och arbetsanpassning till föräldraledighet, ersättning och återgång i arbete. Där rättsläget är lokalt, avtalsbundet eller beroende av individuell bedömning försöker guiden ange det uttryckligen.
          </p>
          <p className="hero__manifesto" style={{ fontSize: '15px', opacity: 0.78, marginTop: '-12px' }}>
            För privata arbetsgivare, bemanningsanställningar, kombinationsanställningar och andra regioner kan delar av innehållet skilja sig. Guiden är ett arbetsmaterial och ersätter inte juridisk rådgivning, medicinsk bedömning eller uppgifter från Försäkringskassan, arbetsgivare eller facklig rådgivning.
          </p>
          <div className="hero__toc">
            <div className="hero__toc__t">Innehåll — sju kapitel</div>
            <ol className="hero__toc__list">
              {PAGES.map((p) => (
                <li key={p.id} onClick={() => document.querySelector(`[data-page="${p.id}"]`)?.scrollIntoView({ behavior: 'smooth' })}>
                  <span className="hero__toc__n">{p.num}</span>
                  <span className="hero__toc__x">{p.label}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
