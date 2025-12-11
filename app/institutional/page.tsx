'use client';

import { useState } from 'react';
import Chatbot from '../components/Chatbot';
import PageShell from '../components/PageShell';

const filters = ['Type of document', 'Level of administration', 'Publication date', 'Publisher', 'Region', 'Country'];

export default function InstitutionalPage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <PageShell title="Institutionalization" subtitle="Upload your own data">
      <div className="card" style={{ background: '#fff3bf' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <div className="info-pill">Docs uploaded 156</div>
          <div className="info-pill">Number of institutions 250</div>
          <div className="info-pill">Initiatives in progress 200</div>
        </div>
        <div className="filter-row" style={{ marginTop: 16 }}>
          {filters.map((label) => (
            <div key={label} className="badge" style={{ background: '#d6f5f5' }}>
              {label}
            </div>
          ))}
        </div>
        <div className="grid-two" style={{ marginTop: 16 }}>
          <div className="card" style={{ background: '#e4f9f5' }}>
            <h3 className="section-title">Local Regulations</h3>
            <div className="filter-row">
              <select className="select" defaultValue="">
                <option value="" disabled>
                  Level of administration
                </option>
                <option>National</option>
                <option>Regional</option>
                <option>Municipal</option>
              </select>
              <select className="select" defaultValue="">
                <option value="" disabled>
                  Type of document
                </option>
                <option>Policy</option>
                <option>Plan</option>
                <option>Report</option>
              </select>
            </div>
            <div className="chart-placeholder" style={{ minHeight: 220 }}>
              Quantitative results placeholder
            </div>
          </div>
          <div className="card" style={{ background: '#ffe1e8', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="section-title" style={{ margin: 0 }}>
                Information by local administration
              </h3>
              <button className="message-button" aria-label="Open chatbot" onClick={() => setChatOpen(true)}>
                💬
              </button>
            </div>
            <div className="chart-placeholder" style={{ minHeight: 280, marginTop: 12 }}>
              Bar chart placeholder
            </div>
          </div>
        </div>
        <div className="card" style={{ background: '#d6f6ff', marginTop: 16 }}>
          <h3 className="section-title">Upload your own data</h3>
          <p style={{ fontWeight: 600 }}>
            Integrate new evidence, regulations, and institutional data. Drag-and-drop upload flows can live here along
            with validation steps and progress indicators.
          </p>
        </div>
      </div>
      <Chatbot open={chatOpen} onClose={() => setChatOpen(false)} />
    </PageShell>
  );
}
