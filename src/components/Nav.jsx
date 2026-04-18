import { useState } from 'react';
import { PAGES } from '../data/pages.js';

export default function Nav({ active, openChapter }) {
  const [open, setOpen] = useState(false);
  const go = (id) => {
    if (openChapter) {
      openChapter(id);
    } else {
      document.querySelector(`[data-page="${id}"]`)?.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <nav className={`nav ${open ? 'nav--open' : ''}`}>
      <button
        className="nav__burger"
        type="button"
        aria-label={open ? 'Stäng meny' : 'Öppna meny'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span></span><span></span><span></span>
      </button>

      <div className="nav__eyebrow">Handbok · 2026:1</div>
      <div className="nav__title">Gravid <em>Doktor</em></div>
      <p className="nav__sub">Rättigheter, skyldigheter och rutiner för dig som är läkare och gravid i Stockholm.</p>
      <ul className="nav__list">
        {PAGES.map((p, i) => (
          <li
            key={p.id}
            className={`nav__item ${i === active ? 'is-active' : ''}`}
            onClick={() => go(p.id)}
          >
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
}
