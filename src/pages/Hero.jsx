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
        <span><strong>Gravid Doktor</strong> — En guide för läkare i Stockholm</span>
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
            Det är svårt att hitta vad det är som gäller när man är gravid, och det är inte alltid det stämmer överens med det man får höra. Denna guide  försöker samla de rättigheter, skyldigheter och rutiner som gäller dig som gravid läkare i Region Stockholm: från riskbedömning på avdelningen till föräldraledighet, ersättning och det stöd du har rätt till av arbetsgivaren.
          </p>
          <div className="hero__toc">
            <div className="hero__toc__t">Innehåll — åtta kapitel</div>
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
