import { PAGES } from '../data/pages.js';

export default function Rail({ active }) {
  const page = PAGES[active] || PAGES[0];
  return (
    <aside className="rail">
      <div className="rail__mark">G<br/>D</div>
      <div className="rail__num" key={page.num}>
        <span style={{ transition: 'all .4s' }}>{page.num}</span>
        <small>kap.</small>
      </div>
      <div className="rail__dots">
        {PAGES.map((p, i) => (
          <div
            key={p.id}
            className={`rail__dot ${i === active ? 'is-active' : ''}`}
            data-label={p.num + ' · ' + p.title}
            onClick={() => document.querySelector(`[data-page="${p.id}"]`)?.scrollIntoView({ behavior: 'smooth' })}
          />
        ))}
      </div>
    </aside>
  );
}
