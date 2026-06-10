import type { DashboardData } from '../types';
import { brl } from '../utils/finance';

export function Cartoes({ data }: { data: DashboardData }) {
  return (
    <section className="page-stack">
      <div className="page-header"><div><span className="eyebrow">Cartões</span><h2>Faturas e limites</h2></div><p>Gastos atuais e limites disponíveis.</p></div>
      <div className="cards-grid">
        {data.cartoes.map(c => (
          <article className="credit-card" key={c.id}>
            <div><span>{c.banco}</span><strong>{brl(c.valorFatura)}</strong></div>
            <p>Limite: {brl(c.limite)} • Disponível: {brl(c.limiteDisponivel)}</p>
            <small>Fecha dia {c.fechamento} • Vence dia {c.vencimento}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
