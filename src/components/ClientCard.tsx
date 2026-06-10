import { MessageCircle } from 'lucide-react';
import type { Cliente } from '../types';

export function ClientCard({ cliente }: { cliente: Cliente }) {
  const link = `https://wa.me/${cliente.whatsapp}`;
  return (
    <article className="client-card">
      <div className="avatar">{cliente.nome.charAt(0)}</div>
      <div className="client-info">
        <strong>{cliente.nome}</strong>
        <span>{cliente.cpf}</span>
        <small>{cliente.telefone}</small>
      </div>
      <span className={`status ${cliente.status.toLowerCase().replace(' ', '-')}`}>{cliente.status}</span>
      <a href={link} target="_blank" rel="noreferrer" className="mini-action"><MessageCircle size={16} /> WhatsApp</a>
    </article>
  );
}
