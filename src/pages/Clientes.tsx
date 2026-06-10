import { ClientCard } from '../components/ClientCard';
import type { DashboardData } from '../types';

export function Clientes({ data }: { data: DashboardData }) {
  return (
    <section className="page-stack">
      <div className="page-header"><div><span className="eyebrow">Carteira</span><h2>Clientes</h2></div><p>Lista alimentada pela aba Clientes da planilha.</p></div>
      <div className="cards-grid">
        {data.clientes.map(cliente => <ClientCard key={cliente.id} cliente={cliente} />)}
      </div>
      <div className="panel-card">
        <h3>Colunas esperadas na planilha</h3>
        <p className="muted">id | nome | cpf | telefone | whatsapp | endereco | status | observacoes</p>
      </div>
    </section>
  );
}
