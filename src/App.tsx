import { useEffect, useMemo, useState } from 'react';
import { AppLayout } from './layouts/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { Clientes } from './pages/Clientes';
import { Emprestimos } from './pages/Emprestimos';
import { Financeiro } from './pages/Financeiro';
import { Cartoes } from './pages/Cartoes';
import { Empresas } from './pages/Empresas';
import { Relatorios } from './pages/Relatorios';
import { fetchDashboardData } from './services/sheetsApi';
import type { DashboardData } from './types';
import { calcSummary } from './utils/finance';
import { mockData } from './dataMock';

export type PageKey = 'dashboard' | 'clientes' | 'emprestimos' | 'financeiro' | 'cartoes' | 'empresas' | 'relatorios';

export default function App() {
  const [page, setPage] = useState<PageKey>('dashboard');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [data, setData] = useState<DashboardData>(mockData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    fetchDashboardData().then(setData).finally(() => setLoading(false));
  }, []);

  const summary = useMemo(() => calcSummary(data), [data]);

  function renderPage() {
    if (loading) return <div className="loading-card">Carregando painel TH...</div>;
    switch (page) {
      case 'clientes': return <Clientes data={data} />;
      case 'emprestimos': return <Emprestimos data={data} />;
      case 'financeiro': return <Financeiro data={data} summary={summary} />;
      case 'cartoes': return <Cartoes data={data} />;
      case 'empresas': return <Empresas data={data} />;
      case 'relatorios': return <Relatorios data={data} summary={summary} />;
      default: return <Dashboard data={data} summary={summary} />;
    }
  }

  return (
    <AppLayout page={page} setPage={setPage} theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {renderPage()}
    </AppLayout>
  );
}
