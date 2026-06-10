import { Download, FileText } from 'lucide-react';
import { gerarRelatorioMensalPDF } from '../services/pdfService';
import type { DashboardData, Summary } from '../types';
import { brl } from '../utils/finance';

export function Relatorios({ data, summary }: { data: DashboardData; summary: Summary }) {
  return (
    <section className="page-stack">
      <div className="page-header"><div><span className="eyebrow">Relatórios</span><h2>Resumo mensal em PDF</h2></div><p>Gere um PDF com empréstimos, cartões, despesas, empresas e lucros.</p></div>
      <div className="report-card">
        <FileText size={42} />
        <h3>Relatório mensal TH EMPREENDIMENTOS</h3>
        <p>Saldo geral {brl(summary.saldoGeral)} • Lucro líquido {brl(summary.lucroLiquidoGeral)}</p>
        <button className="primary-button" onClick={() => gerarRelatorioMensalPDF(summary, data)}><Download size={18} /> Gerar PDF mensal</button>
      </div>
    </section>
  );
}
