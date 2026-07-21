import React, { useState } from 'react';
import { STFI_NOTICES, STFI_RULES_DATA } from '../../data/nikeData';
import { FileText, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PillButton } from '../../components/ui/PillButton';

export const ProductGrid = ({ onOpenPortal }) => {
  const [activeTab, setActiveTab] = useState('notices');

  return (
    <section id="stfi-content-section" style={{ backgroundColor: 'var(--surface-paper-white)', padding: '48px 0 80px 0' }}>
      <div className="max-width-container">
        {/* Section Header & Tab Switcher */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span className="label-uppercase" style={{ color: 'var(--color-steel)' }}>Official Federation Documentation</span>
              <h2 className="heading-lg" style={{ fontSize: '32px', marginTop: '4px' }}>
                Notices, Rules & Results
              </h2>
            </div>
            <PillButton variant="obsidian" size="sm" onClick={() => onOpenPortal('myas')}>
              View MYAS 28 Disclosures
            </PillButton>
          </div>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', gap: '10px', borderBottom: '1px solid var(--color-concrete-gray)', paddingBottom: '12px' }}>
            <button
              onClick={() => setActiveTab('notices')}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-buttons)',
                border: 'none',
                backgroundColor: activeTab === 'notices' ? 'var(--color-obsidian)' : 'var(--surface-soft-mist)',
                color: activeTab === 'notices' ? 'var(--color-paper-white)' : 'var(--color-obsidian)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Latest Notices & Circulars ({STFI_NOTICES.length})
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-buttons)',
                border: 'none',
                backgroundColor: activeTab === 'rules' ? 'var(--color-obsidian)' : 'var(--surface-soft-mist)',
                color: activeTab === 'rules' ? 'var(--color-paper-white)' : 'var(--color-obsidian)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Official Playing Rules ({STFI_RULES_DATA.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Notices & Circulars Grid */}
        {activeTab === 'notices' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {STFI_NOTICES.map(notice => (
              <div
                key={notice.id}
                style={{
                  border: '1px solid var(--color-concrete-gray)',
                  padding: '28px',
                  backgroundColor: 'var(--surface-paper-white)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        backgroundColor: 'var(--color-obsidian)',
                        color: 'var(--color-paper-white)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-tags)',
                        textTransform: 'uppercase'
                      }}
                    >
                      {notice.category}
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--color-steel)', fontWeight: 500 }}>
                      {notice.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 700, lineHeight: 1.4, marginBottom: '8px', color: 'var(--color-obsidian)' }}>
                    {notice.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: 'var(--color-steel)', lineHeight: 1.6 }}>
                    {notice.desc}
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--surface-soft-mist)' }}>
                  <button
                    onClick={() => alert(`Downloading ${notice.documentPdf}...`)}
                    className="btn-pill btn-paper btn-sm"
                    style={{ border: '1px solid var(--color-concrete-gray)', width: '100%', display: 'flex', gap: '8px', justifyContent: 'center' }}
                  >
                    <Download size={15} />
                    <span>Download Official PDF Document</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Playing Rules */}
        {activeTab === 'rules' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {STFI_RULES_DATA.map(rule => (
              <div
                key={rule.id}
                style={{
                  border: '1px solid var(--color-concrete-gray)',
                  padding: '28px',
                  backgroundColor: 'var(--surface-soft-mist)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <ShieldCheck size={20} color="var(--color-obsidian)" />
                    <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {rule.players}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>
                    {rule.title}
                  </h3>

                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-steel)', marginBottom: '12px' }}>
                    Court Specification: {rule.court}
                  </div>

                  <p style={{ fontSize: '14px', color: 'var(--color-obsidian)', lineHeight: 1.6 }}>
                    {rule.description}
                  </p>
                </div>

                <button
                  onClick={() => onOpenPortal('rules')}
                  className="btn-pill btn-obsidian btn-sm"
                  style={{ width: '100%', display: 'flex', gap: '8px', justifyContent: 'center' }}
                >
                  <FileText size={15} />
                  <span>View Full Rulebook</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
