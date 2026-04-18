// Main app — scroll wiring, rail, tweaks
const { useState, useEffect, useRef, useCallback } = React;

// ScrollY hook
function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        raf = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return { scrollY };
}
window.useScroll = useScroll;

// Reveal observer
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("in");
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// Active page tracker
function useActivePage() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-page]"));
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let idx = 0;
      sections.forEach((s, i) => {
        if (s.offsetTop <= y) idx = i;
      });
      setActive(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return active;
}

// Rail — numbered, morphs with scroll
const Rail = ({ active }) => {
  const page = window.PAGES[active] || window.PAGES[0];
  return (
    <aside className="rail">
      <div className="rail__mark">G<br/>D</div>
      <div className="rail__num" key={page.num}>
        <span style={{ transition: "all .4s" }}>{page.num}</span>
        <small>kap.</small>
      </div>
      <div className="rail__dots">
        {window.PAGES.map((p, i) => (
          <div key={p.id}
               className={`rail__dot ${i === active ? "is-active" : ""}`}
               data-label={p.num + " · " + p.title}
               onClick={() => document.querySelector(`[data-page="${p.id}"]`)?.scrollIntoView({ behavior: 'smooth' })}>
          </div>
        ))}
      </div>
    </aside>
  );
};

// Secondary nav — page list
const Nav = ({ active }) => (
  <nav className="nav">
    <div className="nav__eyebrow">Handbok · 2026:1</div>
    <div className="nav__title">Gravid <em>Doktor</em></div>
    <p className="nav__sub">Rättigheter, skyldigheter och rutiner för dig som är läkare och gravid i Stockholm.</p>
    <ul className="nav__list">
      {window.PAGES.map((p, i) => (
        <li key={p.id}
            className={`nav__item ${i === active ? "is-active" : ""}`}
            onClick={() => document.querySelector(`[data-page="${p.id}"]`)?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="nav__item__num">{p.num}</span>
          <span className="nav__item__label">{p.label}</span>
        </li>
      ))}
    </ul>
    <div className="nav__foot">
      <strong>Källor</strong>
      AML · AFS 2007:5<br/>
      FLL · SFB · AB 2023<br/>
      Socialstyrelsen HSLF-FS
    </div>
  </nav>
);

// Tweaks
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "blue": "#2E7BC4",
  "density": "comfortable",
  "motion": "on"
}/*EDITMODE-END*/;

const BLUES = [
  { name: "Klinisk", value: "#2E7BC4", deep: "#143D8A", ink: "#0A2540", wash: "#F3F7FC", soft: "#E6EFF8" },
  { name: "Marin", value: "#1E5AA8", deep: "#0F3A7A", ink: "#061E44", wash: "#EFF3F9", soft: "#DCE7F4" },
  { name: "Arkiv", value: "#0B3B6F", deep: "#08284C", ink: "#051932", wash: "#EEF2F7", soft: "#D7E0EC" },
  { name: "Ljus", value: "#4E95D0", deep: "#1E5AA8", ink: "#0A2540", wash: "#F4F8FC", soft: "#E6EFF8" },
];

const Tweaks = ({ on, tweaks, setTweaks }) => {
  if (!on) return null;
  const pick = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };
  return (
    <div className="tweaks on">
      <h6>Tweaks · kliniska justeringar</h6>
      <div className="tweak">
        <label>Blå nyans</label>
        <div className="tweak__swatches">
          {BLUES.map(b => (
            <div key={b.value}
                 className={`tweak__sw ${tweaks.blue === b.value ? "on" : ""}`}
                 style={{ background: b.value }}
                 title={b.name}
                 onClick={() => pick("blue", b.value)} />
          ))}
        </div>
      </div>
      <div className="tweak">
        <label>Täthet</label>
        <div className="tweak__seg">
          {["comfortable", "compact"].map(d => (
            <button key={d} className={tweaks.density === d ? "on" : ""} onClick={() => pick("density", d)}>
              {d === "comfortable" ? "Luftig" : "Tät"}
            </button>
          ))}
        </div>
      </div>
      <div className="tweak">
        <label>Rörelse</label>
        <div className="tweak__seg">
          {["on", "off"].map(m => (
            <button key={m} className={tweaks.motion === m ? "on" : ""} onClick={() => pick("motion", m)}>
              {m === "on" ? "På" : "Av"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// End plate
const End = () => (
  <footer className="end">
    <div className="end__t">En handbok av <em>läkare</em>, för <em>läkare</em> — utgiven 2026.</div>
    <div className="end__meta">
      <div>Utg. 2026:1 · rev. 2026-04-12</div>
      <div>Fritt att sprida · Icke-kommersiellt</div>
    </div>
  </footer>
);

// Tweak effects
function applyTweaks(t) {
  const blue = BLUES.find(b => b.value === t.blue) || BLUES[0];
  const r = document.documentElement;
  r.style.setProperty("--blue", blue.value);
  r.style.setProperty("--blue-deep", blue.deep);
  r.style.setProperty("--blue-ink", blue.ink);
  r.style.setProperty("--blue-wash", blue.wash);
  r.style.setProperty("--blue-soft", blue.soft);
  document.body.classList.toggle("density-compact", t.density === "compact");
  document.body.classList.toggle("motion-off", t.motion === "off");
}

const App = () => {
  const active = useActivePage();
  useReveal();
  const { scrollY } = useScroll();

  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);
  const [tweaksOn, setTweaksOn] = useState(false);

  useEffect(() => { applyTweaks(tweaks); }, [tweaks]);

  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setTweaksOn(true);
      if (e.data.type === "__deactivate_edit_mode") setTweaksOn(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  return (
    <>
      <Rail active={active} />
      <Nav active={active} />
      <main className="stage">
        <Hero />
        <PageArbetsmiljo />
        <PageForaldra />
        <PageErsattning />
        <PageAvstangning />
        <PageFAQ />
        <PageResurser />
        <PageKontakt />
        <End />
      </main>
      <Tweaks on={tweaksOn} tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
