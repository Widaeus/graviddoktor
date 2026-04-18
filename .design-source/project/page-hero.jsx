// Hero / Home page
const Hero = () => {
  const { scrollY } = useScroll();
  return (
    <section className="hero page" data-page="hem" data-screen-label="01 Hem">
      <div className="hero__geo">
        <div className="mark" style={{ left: 40, bottom: 260, width: 300, height: 300, opacity: 0.5, transform: `translateY(${scrollY * 0.08}px)` }}>
          <GeoSquare opacity={0.5} />
        </div>
        <div className="mark" style={{ right: 180, bottom: 180, width: 200, height: 50, opacity: 0.5 }}>
          <GeoScale />
        </div>
      </div>

      <div className="hero__top">
        <span><strong>Gravid Doktor</strong> — En guide för läkare i Stockholm</span>
        <span>
          <span>Senast rev. 2026-04-12</span>
        </span>
      </div>

      <div className="hero__body">
        <div>
          <h1 className="hero__title">
            Att vara <em>läkare</em>,<br/>
            att vara <em>gravid</em>,<br/>
            att vara <em>trygg</em>.
          </h1>
        </div>
        <div>
          <p className="hero__manifesto">
            Som läkare arbetar du i en miljö där patientens behov står i centrum — men under graviditeten är det <em>ditt</em> arbete, <em>din</em> kropp och <em>ditt</em> barn som kräver uppmärksamhet. Denna guide samlar de rättigheter, skyldigheter och rutiner som gäller dig som gravid läkare i Stockholm: från riskbedömning på avdelningen till föräldraledighet, ersättning och det stöd du har rätt till av arbetsgivaren.
          </p>
          <div className="hero__toc">
            <div className="hero__toc__t">Innehåll — åtta kapitel</div>
            <ol className="hero__toc__list">
              {window.PAGES.map(p => (
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
};

window.Hero = Hero;
