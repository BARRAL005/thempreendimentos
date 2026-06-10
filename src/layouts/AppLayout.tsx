import type { ReactNode } from 'react';
import { CreditCard, FileText, Home, Landmark, Users } from 'lucide-react';
import { Sidebar } from '../components/Sidebar';
import { Topbar } from '../components/Topbar';
import type { PageKey } from '../App';

export function AppLayout({ children, page, setPage, theme, toggleTheme }: { children: ReactNode; page: PageKey; setPage: (page: PageKey) => void; theme: 'dark' | 'light'; toggleTheme: () => void; }) {
  const mobileItems: Array<{ key: PageKey; label: string; icon: React.ReactNode }> = [
    { key: 'dashboard', label: 'Início', icon: <Home size={20} /> },
    { key: 'clientes', label: 'Clientes', icon: <Users size={20} /> },
    { key: 'emprestimos', label: 'Crédito', icon: <Landmark size={20} /> },
    { key: 'cartoes', label: 'Cartões', icon: <CreditCard size={20} /> },
    { key: 'relatorios', label: 'PDF', icon: <FileText size={20} /> }
  ];

  return (
    <div className="app-shell">
      <Sidebar page={page} setPage={setPage} />
      <main className="main-content">
        <Topbar theme={theme} toggleTheme={toggleTheme} />
        {children}
      </main>
      <nav className="mobile-nav">
        {mobileItems.map(item => (
          <button key={item.key} className={page === item.key ? 'active' : ''} onClick={() => setPage(item.key)}>
            {item.icon}<span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
