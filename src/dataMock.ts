import type { DashboardData } from './types';

export const mockData: DashboardData = {
  clientes: [
    { id: 'C001', nome: 'João Silva', cpf: '***.123.***-**', telefone: '(18) 99999-1010', whatsapp: '5518999991010', endereco: 'Presidente Prudente - SP', status: 'Em dia', observacoes: 'Cliente recorrente.' },
    { id: 'C002', nome: 'Maria Oliveira', cpf: '***.456.***-**', telefone: '(18) 98888-2020', whatsapp: '5518988882020', endereco: 'Regente Feijó - SP', status: 'Atenção' },
    { id: 'C003', nome: 'Carlos Santos', cpf: '***.789.***-**', telefone: '(18) 97777-3030', whatsapp: '5518977773030', endereco: 'Álvares Machado - SP', status: 'Inadimplente' }
  ],
  emprestimos: [
    { id: 'E001', clienteId: 'C001', cliente: 'João Silva', valor: 2500, jurosPercentual: 15, jurosMensalPago: 375, parcelas: 3, vencimento: '2026-06-15', multa: 5, jurosDiario: 1, garantia: 'Documento assinado', status: 'Aberto' },
    { id: 'E002', clienteId: 'C002', cliente: 'Maria Oliveira', valor: 5000, jurosPercentual: 12, jurosMensalPago: 600, parcelas: 5, vencimento: '2026-06-20', multa: 5, jurosDiario: 1, garantia: 'Celular', status: 'Aberto' },
    { id: 'E003', clienteId: 'C003', cliente: 'Carlos Santos', valor: 1200, jurosPercentual: 20, jurosMensalPago: 240, parcelas: 2, vencimento: '2026-06-03', multa: 8, jurosDiario: 1.5, garantia: 'Promissória', status: 'Atrasado' }
  ],
  pagamentos: [
    { id: 'P001', clienteId: 'C001', emprestimoId: 'E001', cliente: 'João Silva', data: '2026-06-05', valor: 375, tipo: 'Juros mensal' },
    { id: 'P002', clienteId: 'C002', emprestimoId: 'E002', cliente: 'Maria Oliveira', data: '2026-06-06', valor: 600, tipo: 'Juros mensal' },
    { id: 'P003', clienteId: 'C001', emprestimoId: 'E001', cliente: 'João Silva', data: '2026-06-08', valor: 1000, tipo: 'Parcial' }
  ],
  despesas: [
    { id: 'D001', data: '2026-06-01', categoria: 'Aluguel', descricao: 'Despesa fixa', valor: 1500, tipo: 'Fixa', empresa: 'TH EMPREENDIMENTOS' },
    { id: 'D002', data: '2026-06-04', categoria: 'Combustível', descricao: 'Deslocamento', valor: 380, tipo: 'Empresarial', empresa: 'TH EMPREENDIMENTOS' },
    { id: 'D003', data: '2026-06-07', categoria: 'Pessoal', descricao: 'Gasto pessoal', valor: 420, tipo: 'Pessoal', empresa: 'Pessoal' }
  ],
  cartoes: [
    { id: 'CC001', banco: 'Nubank', limite: 8000, fechamento: '10', vencimento: '17', valorFatura: 2350, limiteDisponivel: 5650, status: 'Aberta' },
    { id: 'CC002', banco: 'Inter', limite: 5000, fechamento: '05', vencimento: '12', valorFatura: 980, limiteDisponivel: 4020, status: 'Aberta' }
  ],
  empresas: [
    { id: 'EMP001', nome: 'TH EMPREENDIMENTOS', tipo: 'Financeira', receitaMensal: 8200, despesaMensal: 2300, lucroLiquido: 5900 },
    { id: 'EMP002', nome: 'Pit Stop Cohab', tipo: 'Conveniência', receitaMensal: 18400, despesaMensal: 12600, lucroLiquido: 5800 },
    { id: 'EMP003', nome: 'Outras rendas', tipo: 'Renda extra', receitaMensal: 2600, despesaMensal: 400, lucroLiquido: 2200 }
  ]
};
