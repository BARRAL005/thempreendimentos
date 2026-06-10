export type StatusCliente = 'Em dia' | 'Atenção' | 'Inadimplente' | 'Quitado';
export type StatusEmprestimo = 'Aberto' | 'Pago' | 'Atrasado' | 'Renovado';

export interface Cliente {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  whatsapp: string;
  endereco: string;
  status: StatusCliente;
  observacoes?: string;
}

export interface Emprestimo {
  id: string;
  clienteId: string;
  cliente: string;
  valor: number;
  jurosPercentual: number;
  jurosMensalPago: number;
  parcelas: number;
  vencimento: string;
  multa: number;
  jurosDiario: number;
  garantia: string;
  status: StatusEmprestimo;
}

export interface Pagamento {
  id: string;
  clienteId: string;
  emprestimoId: string;
  cliente: string;
  data: string;
  valor: number;
  tipo: 'Total' | 'Parcial' | 'Juros mensal';
}

export interface Despesa {
  id: string;
  data: string;
  categoria: string;
  descricao: string;
  valor: number;
  tipo: 'Pessoal' | 'Empresarial' | 'Fixa' | 'Variável';
  empresa: string;
}

export interface Cartao {
  id: string;
  banco: string;
  limite: number;
  fechamento: string;
  vencimento: string;
  valorFatura: number;
  limiteDisponivel: number;
  status: 'Aberta' | 'Paga' | 'Atrasada';
}

export interface Empresa {
  id: string;
  nome: string;
  tipo: string;
  receitaMensal: number;
  despesaMensal: number;
  lucroLiquido: number;
}

export interface DashboardData {
  clientes: Cliente[];
  emprestimos: Emprestimo[];
  pagamentos: Pagamento[];
  despesas: Despesa[];
  cartoes: Cartao[];
  empresas: Empresa[];
}

export interface Summary {
  saldoGeral: number;
  capitalEmprestado: number;
  totalReceber: number;
  totalRecebido: number;
  lucroEmprestimos: number;
  rendasEmpresas: number;
  despesasMes: number;
  gastosCartoes: number;
  lucroLiquidoGeral: number;
  clientesAtivos: number;
  inadimplentes: number;
}
