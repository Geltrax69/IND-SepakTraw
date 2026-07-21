import React from 'react';
import { FOOTER_COLUMNS } from '../../data/nikeData';
import { Globe, Award } from 'lucide-react';

export const FooterGrid = ({ onOpenStfiPortal }) => {
  return (
    <footer
      className="hairline-border-top"
      style={{
        backgroundColor: 'var(--surface-paper-white)',
        padding: '60px 0 36px 0',
        color: 'var(--color-obsidian)'
      }}
    >
      <div className="max-width-container">
        {/* Four Column Link Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '36px',
            marginBottom: '48px'
          }}
        >
          {FOOTER_COLUMNS.map((col, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-helvetica-now-display-medium)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <button
                      onClick={() => onOpenStfiPortal('overview')}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-steel)',
                        fontSize: '14px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        textAlign: 'left',
                        padding: 0,
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-obsidian)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-steel)'}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar with Region Selector & Copyright */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            paddingTop: '24px',
            borderTop: '1px solid var(--color-concrete-gray)',
            fontSize: '12px',
            color: 'var(--color-steel)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={14} color="var(--color-obsidian)" />
            <span style={{ fontWeight: 600, color: 'var(--color-obsidian)' }}>SepakTakraw Federation of India</span>
            <span>© 2026 STFI. All Rights Reserved</span>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontWeight: 500 }}>
            <button onClick={() => onOpenStfiPortal('myas')} style={{ background: 'none', border: 'none', color: 'var(--color-steel)', cursor: 'pointer' }}>MYAS Disclosures</button>
            <button onClick={() => onOpenStfiPortal('rti')} style={{ background: 'none', border: 'none', color: 'var(--color-steel)', cursor: 'pointer' }}>RTI Public Officer</button>
            <button onClick={() => onOpenStfiPortal('rules')} style={{ background: 'none', border: 'none', color: 'var(--color-steel)', cursor: 'pointer' }}>Playing Rules</button>
            <button onClick={() => onOpenStfiPortal('elections')} style={{ background: 'none', border: 'none', color: 'var(--color-steel)', cursor: 'pointer' }}>Elections 2024-2028</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
