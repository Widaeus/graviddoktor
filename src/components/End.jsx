export default function End() {
  return (
    <footer className="end">
      <div className="end__col">
        <div className="end__t">En handbok för <em>gravida</em> — utgiven 2026.</div>
        <div className="end__disclaimer">
          Materialet är sammanställt i informationssyfte och utgör varken juridisk, medicinsk eller arbetsrättslig rådgivning. Skaparen lämnar inga garantier för att innehållet är fullständigt, aktuellt eller tillämpligt i ett enskilt fall och tar inget ansvar för beslut som fattas på grundval av informationen. För bindande besked — kontakta arbetsgivare, Försäkringskassan, skyddsombud eller fackförening.
        </div>
      </div>
      <div className="end__col end__col--right">
        <div className="end__meta">
          <div>Utg. 2026:1 · rev. 2026-04-18</div>
          <div>Fritt att sprida · Icke-kommersiellt</div>
        </div>
        <div className="end__author">
          Sammanställt av Jacob Widaeus<br/>
          <a href="mailto:jacob.widaeus@gmail.com">jacob.widaeus@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
