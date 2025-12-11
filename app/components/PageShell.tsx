import React from 'react';

interface PageShellProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <div style={{ padding: '28px 0' }}>
      <div className="container">
        <div className="card" style={{ background: 'var(--bg-primary)', border: '3px solid #000' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <h1 style={{ margin: 0 }}>{title}</h1>
            {subtitle && <span className="badge">{subtitle}</span>}
          </div>
        </div>
        <div style={{ marginTop: 20 }}>{children}</div>
      </div>
    </div>
  );
}
