import { LoanTable } from '../components/LoanTable';
import type { DashboardData } from '../types';
import { brl } from '../utils/finance';

export function Emprestimos({ data }: { data: DashboardData }) {
  return (
    <section className="page-stack">
      <div className="page-header"><div><span className="eyebrow">Crédito</span><h2>Empréstimos</h2></div><p>Controle de capital, juros, vencimentos e garantias.</p></div>
      <div className="panel-card"><LoanTable emprestimos={data.emprestimos} /></div>
      <div className="cards-grid">
        {data.emprestimos.map(e => (
          <article className="detail-card" key={e.id}>
            <strong>{e.cliente}</strong>
            <span>Valor emprestado: {brl(e.valor)}</span>
            <span>Juros mensal pago: {brl(e.jurosMensalPago)}</span>
            <span>Garantia: {e.garantia}</span>
            <small>{e.status}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
