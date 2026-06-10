import type { DashboardData, Summary } from '../types';
import { brl } from '../utils/finance';

export function Financeiro({ data, summary }: { data: DashboardData; summary: Summary }) {
  return (
    <section className="page-stack">
      <div className="page-header"><div><span className="eyebrow">Gestão financeira</span><h2>Despesas, rendas e fluxo de caixa</h2></div><p>Visão consolidada pessoal e empresarial.</p></div>
      <div className="finance-summary">
        <div><span>Receitas/Recebidos</span><strong>{brl(summary.totalRecebido + summary.rendasEmpresas)}</strong></div>
        <div><span>Despesas</span><strong>{brl(summary.despesasMes)}</strong></div>
        <div><span>Cartões</span><strong>{brl(summary.gastosCartoes)}</strong></div>
        <div><span>Lucro líquido</span><strong>{brl(summary.lucroLiquidoGeral)}</strong></div>
      </div>
      <div className="panel-card">
        <div className="section-title"><h3>Despesas do mês</h3><span>Pessoais e empresariais</span></div>
        <div className="vertical-list">
          {data.despesas.map(d => <div className="row-item" key={d.id}><div><strong>{d.categoria}</strong><span>{d.descricao} • {d.empresa}</span></div><b>{brl(d.valor)}</b></div>)}
        </div>
      </div>
    </section>
  );
}
