import { mockData } from '../dataMock';
import type { DashboardData } from '../types';

const API_URL = import.meta.env.VITE_SHEETS_API_URL || '';

export async function fetchDashboardData(): Promise<DashboardData> {
  if (!API_URL) return mockData;
  try {
    const res = await fetch(`${API_URL}?rota=todos`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Erro ao buscar dados da planilha');
    const json = await res.json();
    return {
      clientes: json.clientes || [],
      emprestimos: json.emprestimos || [],
      pagamentos: json.pagamentos || [],
      despesas: json.despesas || [],
      cartoes: json.cartoes || [],
      empresas: json.empresas || []
    };
  } catch (error) {
    console.warn('Usando dados demonstrativos:', error);
    return mockData;
  }
}
