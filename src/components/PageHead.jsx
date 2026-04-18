export default function PageHead({ num, title, titleEm, lede, eyebrow, ed, readTime }) {
  return (
    <header className="page__head reveal">
      <div className="page__num">{num}</div>
      <div>
        <h2 className="page__title">
          {title}
          {titleEm ? <><br/><em>{titleEm}</em></> : null}
        </h2>
        <p className="page__lede">{lede}</p>
      </div>
      <div className="page__meta">
        <span>{eyebrow}</span>
        <span><strong>{ed || 'Ed. 2026/I'}</strong></span>
        {readTime ? <span>läs: {readTime}</span> : null}
      </div>
    </header>
  );
}
