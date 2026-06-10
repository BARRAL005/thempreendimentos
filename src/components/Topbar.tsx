import { Bell, Moon, Search, Sun } from 'lucide-react';

interface TopbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export function Topbar({ theme, toggleTheme }: TopbarProps) {
  return (
    <header className="topbar">
      <div>
        <span className="eyebrow">Painel executivo</span>
        <h2>Controle financeiro completo</h2>
      </div>
      <div className="topbar-actions">
        <label className="search-box">
          <Search size={18} />
          <input placeholder="Pesquisar cliente, empréstimo ou empresa" />
        </label>
        <button className="icon-button"><Bell size={18} /></button>
        <button className="icon-button" onClick={toggleTheme}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
        <div className="profile-pill">R</div>
      </div>
    </header>
  );
}
