import { AlertTriangle, Banknote, Building2, CreditCard, Landmark, TrendingDown, TrendingUp, Users, Wallet } from 'lucide-react';
import { CashFlowChart, CompaniesChart, PortfolioChart } from '../components/Charts';
import { ClientCard } from '../components/ClientCard';
import { LoanTable } from '../components/LoanTable';
import { StatsCard } from '../components/StatsCard';
import type { DashboardData, Summary } from '../types';
import { brl } from '../utils/finance';

export function Dashboard({ data, summary }: { data: DashboardData; summary: Summary }) {
  const vencimentos = [...data.emprestimos].sort((a, b) => a.vencimento.localeCompare(b.vencimento)).slice(0, 4);
  return (
    <section className="page-stack">
      <div className="hero-panel">
        <div>
          <span className="eyebrow">TH EMPREENDIMENTOS</span>
          <h2>Controle total de empréstimos, empresas, cartões e despesas.</h2>
          <p>Dados prontos para serem alimentados por Google Planilhas via Apps Script. O app usa demonstração enquanto a URL da planilha não for conectada.</p>
        </div>
        <div className="hero-kpi">
          <span>Lucro líquido geral</span>
          <strong>{brl(summary.lucroLiquidoGeral)}</strong>
        </div>
      </div>

      <div className="stats-grid">
        <StatsCard title="Saldo geral" value={brl(summary.saldoGeral)} trend="Carteira + caixa" icon={<Wallet />} variant="gold" />
        <StatsCard title="Capital emprestado" value={brl(summary.capitalEmprestado)} trend="Aberto" icon={<Landmark />} />
        <StatsCard title="Total a receber" value={brl(summary.totalReceber)} trend="Próximos ciclos" icon={<TrendingUp />} variant="green" />
        <StatsCard title="Total recebido" value={brl(summary.totalRecebido)} trend="Mês atual" icon={<Banknote />} />
        <StatsCard title="Lucro empréstimos" value={brl(summary.lucroEmprestimos)} trend="Juros mensal" icon={<TrendingUp />} variant="gold" />
        <StatsCard title="Rendas empresas" value={brl(summary.rendasEmpresas)} trend="Lucro líquido" icon={<Building2 />} variant="green" />
        <StatsCard title="Despesas" value={brl(summary.despesasMes)} trend="Mês atual" icon={<TrendingDown />} variant="red" />
        <StatsCard title="Cartões" value={brl(summary.gastosCartoes)} trend="Faturas abertas" icon={<CreditCard />} variant="red" />
        <StatsCard title="Clientes ativos" value={String(summary.clientesAtivos)} trend="Carteira" icon={<Users />} />
        <StatsCard title="Inadimplentes" value={String(summary.inadimplentes)} trend="Atenção" icon={<AlertTriangle />} variant="red" />
      </div>

      <div className="dashboard-grid">
        <CashFlowChart />
        <PortfolioChart summary={summary} />
      </div>

      <div className="dashboard-grid three">
        <CompaniesChart />
        <div className="panel-card">
          <div className="section-title"><h3>Próximos vencimentos</h3><span>Controle de cobrança</span></div>
          <div className="due-list">
            {vencimentos.map(v => (
              <div key={v.id} className="due-item">
                <div><strong>{v.cliente}</strong><span>{new Date(v.vencimento).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</span></div>
                <b>{brl(v.valor + (v.valor * v.jurosPercentual / 100))}</b>
              </div>
            ))}
          </div>
        </div>
        <div className="panel-card">
          <div className="section-title"><h3>Clientes em destaque</h3><span>Status da carteira</span></div>
          <div className="mini-list">
            {data.clientes.slice(0, 3).map(c => <ClientCard key={c.id} cliente={c} />)}
          </div>
        </div>
      </div>

      <div className="panel-card">
        <div className="section-title"><h3>Empréstimos recentes</h3><span>Juros por empréstimo e juros pagos mensalmente</span></div>
        <LoanTable emprestimos={data.emprestimos} />
      </div>
    </section>
  );
}
