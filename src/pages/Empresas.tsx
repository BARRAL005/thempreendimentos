import type { DashboardData } from '../types';
import { brl } from '../utils/finance';

export function Empresas({ data }: { data: DashboardData }) {
  return (
    <section className="page-stack">
      <div className="page-header"><div><span className="eyebrow">Empresas e rendas</span><h2>Minhas empresas</h2></div><p>Rendas, despesas e lucro líquido por negócio.</p></div>
      <div className="cards-grid">
        {data.empresas.map(e => (
          <article className="company-card" key={e.id}>
            <span>{e.tipo}</span>
            <strong>{e.nome}</strong>
            <div className="triple"><p>Receita <b>{brl(e.receitaMensal)}</b></p><p>Despesa <b>{brl(e.despesaMensal)}</b></p><p>Lucro <b>{brl(e.lucroLiquido)}</b></p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
