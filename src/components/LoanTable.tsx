import type { Emprestimo } from '../types';
import { brl, percent } from '../utils/finance';

export function LoanTable({ emprestimos }: { emprestimos: Emprestimo[] }) {
  return (
    <div className="table-shell">
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Valor</th>
            <th>Juros</th>
            <th>Juros mensal</th>
            <th>Vencimento</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {emprestimos.map(e => (
            <tr key={e.id}>
              <td>{e.cliente}</td>
              <td>{brl(e.valor)}</td>
              <td>{percent(e.jurosPercentual)}</td>
              <td>{brl(e.jurosMensalPago)}</td>
              <td>{new Date(e.vencimento).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</td>
              <td><span className={`status ${e.status.toLowerCase()}`}>{e.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
