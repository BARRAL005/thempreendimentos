import { BarChart3, Building2, CreditCard, FileText, Home, Landmark, Settings, Users, WalletCards } from 'lucide-react';
import type { PageKey } from '../App';

const items: Array<{ key: PageKey; label: string; icon: React.ReactNode }> = [
  { key: 'dashboard', label: 'Dashboard', icon: <Home size={19} /> },
  { key: 'clientes', label: 'Clientes', icon: <Users size={19} /> },
  { key: 'emprestimos', label: 'Empréstimos', icon: <Landmark size={19} /> },
  { key: 'financeiro', label: 'Financeiro', icon: <WalletCards size={19} /> },
  { key: 'cartoes', label: 'Cartões', icon: <CreditCard size={19} /> },
  { key: 'empresas', label: 'Empresas', icon: <Building2 size={19} /> },
  { key: 'relatorios', label: 'Relatórios', icon: <FileText size={19} /> }
];

export function Sidebar({ page, setPage }: { page: PageKey; setPage: (page: PageKey) => void }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">TH</div>
        <div>
          <h1>TH EMPREENDIMENTOS</h1>
          <span>Fintech Control</span>
        </div>
      </div>

      <nav className="nav-list">
        {items.map(item => (
          <button key={item.key} className={page === item.key ? 'active' : ''} onClick={() => setPage(item.key)}>
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-card">
        <BarChart3 size={22} />
        <strong>Backend Planilha</strong>
        <p>Conecte a URL do Apps Script em VITE_SHEETS_API_URL.</p>
      </div>

      <button className="settings-link"><Settings size={18} /> Configurações</button>
    </aside>
  );
}
