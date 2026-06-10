import jsPDF from 'jspdf';
import type { DashboardData, Summary } from '../types';
import { brl } from '../utils/finance';

export function gerarRelatorioMensalPDF(summary: Summary, data: DashboardData) {
  const doc = new jsPDF();
  const hoje = new Date();
  const mesAno = hoje.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

  doc.setFillColor(5, 5, 5);
  doc.rect(0, 0, 210, 297, 'F');
  doc.setTextColor(212, 175, 55);
  doc.setFontSize(22);
  doc.text('TH EMPREENDIMENTOS', 18, 24);
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.text(`Relatório Mensal - ${mesAno}`, 18, 34);

  const lines = [
    ['Saldo geral', brl(summary.saldoGeral)],
    ['Capital emprestado', brl(summary.capitalEmprestado)],
    ['Total a receber', brl(summary.totalReceber)],
    ['Total recebido', brl(summary.totalRecebido)],
    ['Lucro dos empréstimos', brl(summary.lucroEmprestimos)],
    ['Rendas das empresas', brl(summary.rendasEmpresas)],
    ['Despesas do mês', brl(summary.despesasMes)],
    ['Gastos em cartões', brl(summary.gastosCartoes)],
    ['Lucro líquido geral', brl(summary.lucroLiquidoGeral)],
    ['Clientes ativos', String(summary.clientesAtivos)],
    ['Clientes inadimplentes', String(summary.inadimplentes)]
  ];

  let y = 52;
  doc.setFontSize(11);
  lines.forEach(([label, value]) => {
    doc.setTextColor(180, 180, 180);
    doc.text(label, 18, y);
    doc.setTextColor(255, 255, 255);
    doc.text(value, 110, y);
    y += 10;
  });

  y += 8;
  doc.setTextColor(212, 175, 55);
  doc.setFontSize(14);
  doc.text('Resumo por empresas', 18, y);
  y += 10;
  doc.setFontSize(10);
  data.empresas.forEach((empresa) => {
    doc.setTextColor(255, 255, 255);
    doc.text(`${empresa.nome} • Receita ${brl(empresa.receitaMensal)} • Despesa ${brl(empresa.despesaMensal)} • Lucro ${brl(empresa.lucroLiquido)}`, 18, y);
    y += 8;
  });

  doc.save(`TH-Relatorio-Mensal-${hoje.getMonth() + 1}-${hoje.getFullYear()}.pdf`);
}
