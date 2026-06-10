import type { DashboardData, Summary } from '../types';

export const brl = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value || 0);

export const percent = (value: number) => `${Number(value || 0).toFixed(1).replace('.', ',')}%`;

export function calcSummary(data: DashboardData): Summary {
  const capitalEmprestado = data.emprestimos.filter(e => e.status !== 'Pago').reduce((sum, e) => sum + e.valor, 0);
  const lucroEmprestimos = data.emprestimos.reduce((sum, e) => sum + e.jurosMensalPago, 0);
  const totalRecebido = data.pagamentos.reduce((sum, p) => sum + p.valor, 0);
  const totalReceber = data.emprestimos.reduce((sum, e) => sum + e.valor + (e.valor * e.jurosPercentual) / 100, 0) - totalRecebido;
  const rendasEmpresas = data.empresas.reduce((sum, e) => sum + e.lucroLiquido, 0);
  const despesasMes = data.despesas.reduce((sum, d) => sum + d.valor, 0);
  const gastosCartoes = data.cartoes.reduce((sum, c) => sum + c.valorFatura, 0);
  const lucroLiquidoGeral = totalRecebido + rendasEmpresas - despesasMes - gastosCartoes;
  const saldoGeral = lucroLiquidoGeral + Math.max(totalReceber, 0);
  const clientesAtivos = data.clientes.filter(c => c.status !== 'Quitado').length;
  const inadimplentes = data.clientes.filter(c => c.status === 'Inadimplente').length;

  return { saldoGeral, capitalEmprestado, totalReceber, totalRecebido, lucroEmprestimos, rendasEmpresas, despesasMes, gastosCartoes, lucroLiquidoGeral, clientesAtivos, inadimplentes };
}

export const flowData = [
  { mes: 'Jan', entradas: 9200, saidas: 4100, lucro: 5100 },
  { mes: 'Fev', entradas: 11200, saidas: 5200, lucro: 6000 },
  { mes: 'Mar', entradas: 9800, saidas: 4600, lucro: 5200 },
  { mes: 'Abr', entradas: 13800, saidas: 6100, lucro: 7700 },
  { mes: 'Mai', entradas: 15100, saidas: 6900, lucro: 8200 },
  { mes: 'Jun', entradas: 18400, saidas: 7600, lucro: 10800 }
];
