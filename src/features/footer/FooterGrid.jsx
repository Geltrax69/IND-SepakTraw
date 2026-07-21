import React from 'react';
import { FOOTER_COLUMNS } from '../../data/nikeData';
import { Globe } from 'lucide-react';

export const FooterGrid = () => {
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
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      style={{
                        color: 'var(--color-steel)',
                        fontSize: '14px',
                        fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-obsidian)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-steel)'}
                    >
                      {link}
                    </a>
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
            <Globe size={14} color="var(--color-obsidian)" />
            <span style={{ fontWeight: 600, color: 'var(--color-obsidian)' }}>United States</span>
            <span>© 2026 Nike, Inc. All Rights Reserved</span>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontWeight: 500 }}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--color-steel)', textDecoration: 'none' }}>Guides</a>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--color-steel)', textDecoration: 'none' }}>Terms of Sale</a>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--color-steel)', textDecoration: 'none' }}>Terms of Use</a>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--color-steel)', textDecoration: 'none' }}>Nike Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
