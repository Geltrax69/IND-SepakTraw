import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Mail, Phone, MapPin } from 'lucide-react';
import { useContent } from '../../content/ContentContext';

export const FooterGrid = ({ onOpenStfiPortal, onSelectNav }) => {
  const { content } = useContent();
  const STFI_FOOTER_COLUMNS = content.footerColumns;
  const contact = content.contact;
  return (
    <footer
      className="hairline-border-top"
      style={{
        backgroundColor: 'var(--surface-paper-white)',
        padding: '64px 0 36px 0',
        color: 'var(--color-obsidian)'
      }}
    >
      <div className="max-width-container">
        {/* Four Column Link Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '36px',
            marginBottom: '48px'
          }}
        >
          {STFI_FOOTER_COLUMNS.map((col, idx) => (
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
                      onClick={() => {
                        if (link.includes('MYAS') || link.includes('Audited') || link.includes('RTI') || link.includes('Anti Doping')) {
                          onOpenStfiPortal('myas');
                        } else if (link.includes('Rules')) {
                          onOpenStfiPortal('rules');
                        } else if (link.includes('Elections')) {
                          onOpenStfiPortal('governance');
                        } else {
                          onSelectNav('notice');
                        }
                      }}
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

        {/* Federation Contact & Address Bar */}
        <div style={{ padding: '24px', backgroundColor: 'var(--surface-soft-mist)', borderRadius: '4px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h4 style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{contact.officeName}</h4>
            <p style={{ fontSize: '13px', color: 'var(--color-steel)' }}>{contact.officeNote}</p>
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', fontSize: '13px', fontWeight: 600 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Mail size={16} />
              <span>{contact.email}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={16} />
              <span>{contact.location}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
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
            <button onClick={() => onOpenStfiPortal('myas')} style={{ background: 'none', border: 'none', color: 'var(--color-steel)', cursor: 'pointer' }}>MYAS Disclosures (28)</button>
            <button onClick={() => onOpenStfiPortal('governance')} style={{ background: 'none', border: 'none', color: 'var(--color-steel)', cursor: 'pointer' }}>RTI Public Officer</button>
            <button onClick={() => onOpenStfiPortal('rules')} style={{ background: 'none', border: 'none', color: 'var(--color-steel)', cursor: 'pointer' }}>Playing Rules</button>
            <button onClick={() => onOpenStfiPortal('governance')} style={{ background: 'none', border: 'none', color: 'var(--color-steel)', cursor: 'pointer' }}>Elections 2024-2028</button>
            <Link to="/admin" style={{ color: 'var(--color-steel)', textDecoration: 'none' }}>Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
