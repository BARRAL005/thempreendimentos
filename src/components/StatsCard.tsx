import type { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  trend?: string;
  icon: ReactNode;
  variant?: 'gold' | 'green' | 'red' | 'neutral';
}

export function StatsCard({ title, value, trend, icon, variant = 'neutral' }: StatsCardProps) {
  return (
    <article className={`stat-card ${variant}`}>
      <div className="stat-glow" />
      <div className="stat-head">
        <span className="stat-icon">{icon}</span>
        <span className="stat-trend">{trend || 'Atualizado'}</span>
      </div>
      <p>{title}</p>
      <strong>{value}</strong>
    </article>
  );
}
