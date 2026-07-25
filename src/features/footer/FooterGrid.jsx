import React from 'react';
import { Link } from 'react-router-dom';
import { EmojiEvents as Award, Email as Mail, Room as MapPin } from '@mui/icons-material';
import { useContent } from '../../content/ContentContext';

export const FooterGrid = ({ onOpenStfiPortal, onSelectNav }) => {
  const { content } = useContent();
  const STFI_FOOTER_COLUMNS = content.footerColumns;
  const contact = content.contact;

  const handleFooterLinkClick = (link) => {
    if (link.includes('MYAS') || link.includes('Audited') || link.includes('Governance') || link.includes('28')) {
      onSelectNav('myas');
    } else if (link.includes('Rules') || link.includes('Regu') || link.includes('Double') || link.includes('Quad') || link.includes('Beach') || link.includes('ISTAF')) {
      onSelectNav('rules');
    } else if (link.includes('Calendar') || link.includes('Event') || link.includes('Championship')) {
      onSelectNav('events');
    } else if (link.includes('Contact') || link.includes('State') || link.includes('Public Information') || link.includes('Elections')) {
      onSelectNav('contact');
    } else if (link.includes('Notice') || link.includes('Circulars') || link.includes('Results')) {
      onSelectNav('notice');
    } else {
      onSelectNav('home');
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#0a0b0e',
        borderTop: '1px solid #1a1d28',
        padding: '64px 0 36px 0',
        color: '#f0f2f5',
      }}
    >
      <div className="max-width-container">
        {/* Four Column Link Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '36px',
            marginBottom: '48px',
          }}
        >
          {STFI_FOOTER_COLUMNS.map((col, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4
                style={{
                  fontSize: '14px',
                  fontWeight: 800,
                  fontFamily: 'var(--font-helvetica-now-display-medium, sans-serif)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#ffc72c',
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <button
                      onClick={() => handleFooterLinkClick(link)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#a0a5b5',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        textAlign: 'left',
                        padding: 0,
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#a0a5b5')}
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
        <div style={{ padding: '24px', backgroundColor: '#12141c', border: '1px solid #222634', borderRadius: '14px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h4 style={{ fontWeight: 800, fontSize: '15px', color: '#ffffff', marginBottom: '4px' }}>{contact.officeName}</h4>
            <p style={{ fontSize: '13px', color: '#a0a5b5' }}>{contact.officeNote}</p>
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', fontSize: '13px', fontWeight: 600, color: '#e0e5f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Mail style={{ fontSize: 16, color: '#ffc72c' }} />
              <span>{contact.email}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin style={{ fontSize: 16, color: '#ffc72c' }} />
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
            borderTop: '1px solid #1a1d28',
            fontSize: '12.5px',
            color: '#888e9e',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award style={{ fontSize: 16, color: '#ffc72c' }} />
            <span style={{ fontWeight: 800, color: '#ffffff' }}>SepakTakraw Federation of India</span>
            <span>© 2026 STFI. All Rights Reserved</span>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontWeight: 600 }}>
            <button onClick={() => onSelectNav('myas')} style={{ background: 'none', border: 'none', color: '#a0a5b5', cursor: 'pointer' }}>MYAS Disclosures (28)</button>
            <button onClick={() => onSelectNav('events')} style={{ background: 'none', border: 'none', color: '#a0a5b5', cursor: 'pointer' }}>Championships</button>
            <button onClick={() => onSelectNav('contact')} style={{ background: 'none', border: 'none', color: '#a0a5b5', cursor: 'pointer' }}>Contact Us</button>
            <button onClick={() => onSelectNav('rules')} style={{ background: 'none', border: 'none', color: '#a0a5b5', cursor: 'pointer' }}>Playing Rules</button>
            <Link to="/admin" style={{ color: '#ffc72c', textDecoration: 'none', fontWeight: 700 }}>Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
