import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { flowData } from '../utils/finance';
import type { Summary } from '../types';

const gold = '#d4af37';
const soft = '#f2d77a';
const red = '#ff6b6b';
const green = '#5ee6a8';

export function CashFlowChart() {
  return (
    <div className="chart-card large">
      <div className="section-title"><h3>Fluxo de caixa</h3><span>Entradas x saídas</span></div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={flowData}>
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={gold} stopOpacity={0.65}/>
              <stop offset="95%" stopColor={gold} stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={red} stopOpacity={0.45}/>
              <stop offset="95%" stopColor={red} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
          <XAxis dataKey="mes" stroke="rgba(255,255,255,.55)" />
          <YAxis stroke="rgba(255,255,255,.55)" />
          <Tooltip contentStyle={{ background: '#090909', border: '1px solid rgba(212,175,55,.35)', color: '#fff' }} />
          <Area type="monotone" dataKey="entradas" stroke={gold} fill="url(#goldGradient)" strokeWidth={3} />
          <Area type="monotone" dataKey="saidas" stroke={red} fill="url(#redGradient)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PortfolioChart({ summary }: { summary: Summary }) {
  const data = [
    { name: 'Receber', value: Math.max(summary.totalReceber, 1), color: gold },
    { name: 'Recebido', value: Math.max(summary.totalRecebido, 1), color: green },
    { name: 'Despesas', value: Math.max(summary.despesasMes + summary.gastosCartoes, 1), color: red },
    { name: 'Empresas', value: Math.max(summary.rendasEmpresas, 1), color: soft }
  ];
  return (
    <div className="chart-card">
      <div className="section-title"><h3>Carteira geral</h3><span>Distribuição financeira</span></div>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie data={data} innerRadius={65} outerRadius={95} paddingAngle={4} dataKey="value">
            {data.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
          </Pie>
          <Tooltip contentStyle={{ background: '#090909', border: '1px solid rgba(212,175,55,.35)', color: '#fff' }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="legend-grid">
        {data.map(item => <span key={item.name}><i style={{ background: item.color }} />{item.name}</span>)}
      </div>
    </div>
  );
}

export function CompaniesChart() {
  const data = [
    { nome: 'TH', lucro: 5900 },
    { nome: 'Pit Stop', lucro: 5800 },
    { nome: 'Rendas', lucro: 2200 }
  ];
  return (
    <div className="chart-card">
      <div className="section-title"><h3>Empresas</h3><span>Lucro líquido</span></div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
          <XAxis dataKey="nome" stroke="rgba(255,255,255,.55)" />
          <Tooltip contentStyle={{ background: '#090909', border: '1px solid rgba(212,175,55,.35)', color: '#fff' }} />
          <Bar dataKey="lucro" fill={gold} radius={[12, 12, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
