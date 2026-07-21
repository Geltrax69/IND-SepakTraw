import React, { useState } from 'react';
import { Description as FileText, GetApp as Download, VerifiedUser as ShieldCheck, CheckCircle as CheckCircle2, Campaign as CampaignIcon } from '@mui/icons-material';
import { PillButton } from '../../components/ui/PillButton';
import { useContent } from '../../content/ContentContext';

export const ProductGrid = ({ onOpenPortal }) => {
  const { content } = useContent();
  const STFI_NOTICES = content.notices || [];
  const STFI_RULES_DATA = content.rules || [];
  const [activeTab, setActiveTab] = useState('notices');

  return (
    <section id="stfi-content-section" style={{ backgroundColor: 'var(--surface-paper-white)', padding: '64px 0 96px 0' }}>
      <div className="max-width-container">
        {/* Section Header & Tab Switcher */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '30px', backgroundColor: 'var(--surface-soft-mist)', color: 'var(--color-obsidian)', fontSize: '12px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            <CampaignIcon style={{ fontSize: 16, color: 'var(--brand-green)' }} /> FEDERATION DISCLOSURES
          </div>

          <h2 className="section-title-center" style={{ fontSize: 'clamp(30px, 4.5vw, 48px)' }}>
            LATEST INFO, NEWS &amp; NOTICES…
            <span className="accent-bar" />
          </h2>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', gap: '10px', borderBottom: '1px solid var(--color-concrete-gray)', paddingBottom: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => setActiveTab('notices')}
              style={{
                padding: '10px 24px',
                borderRadius: 'var(--radius-buttons)',
                border: 'none',
                backgroundColor: activeTab === 'notices' ? 'var(--color-obsidian)' : 'var(--surface-soft-mist)',
                color: activeTab === 'notices' ? 'var(--color-paper-white)' : 'var(--color-obsidian)',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Latest Notices & Circulars ({STFI_NOTICES.length})
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              style={{
                padding: '10px 24px',
                borderRadius: 'var(--radius-buttons)',
                border: 'none',
                backgroundColor: activeTab === 'rules' ? 'var(--color-obsidian)' : 'var(--surface-soft-mist)',
                color: activeTab === 'rules' ? 'var(--color-paper-white)' : 'var(--color-obsidian)',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
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
                  borderTop: '4px solid var(--brand-green)',
                  borderRadius: '12px',
                  padding: '28px',
                  backgroundColor: 'var(--surface-paper-white)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '16px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  transition: 'transform 0.25s ease, boxShadow 0.25s ease, borderColor 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.03)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 800,
                        backgroundColor: 'var(--color-obsidian)',
                        color: 'var(--color-paper-white)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-tags)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {notice.category}
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--color-steel)', fontWeight: 600 }}>
                      {notice.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, lineHeight: 1.35, marginBottom: '10px', color: 'var(--color-obsidian)', fontFamily: 'var(--font-helvetica-now-display-medium)' }}>
                    {notice.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: 'var(--color-steel)', lineHeight: 1.6 }}>
                    {notice.desc}
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--surface-soft-mist)' }}>
                  <button
                    onClick={() => alert(`Downloading Official Circular PDF: ${notice.documentPdf}`)}
                    className="btn-pill btn-paper btn-sm"
                    style={{ border: '1px solid var(--color-concrete-gray)', width: '100%', display: 'flex', gap: '8px', justifyContent: 'center', fontWeight: 700 }}
                  >
                    <Download style={{ fontSize: 16 }} />
                    <span>Download Official Circular PDF</span>
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
                  borderRadius: '12px',
                  padding: '28px',
                  backgroundColor: 'var(--surface-soft-mist)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '16px',
                  transition: 'transform 0.25s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <ShieldCheck style={{ fontSize: 20, color: 'var(--brand-green)' }} />
                    <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-obsidian)' }}>
                      {rule.players}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '6px' }}>
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
                  <FileText style={{ fontSize: 16 }} />
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
