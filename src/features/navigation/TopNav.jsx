import React, { useState } from 'react';
import { KeyboardArrowDown as ChevronDown, Menu as MenuIcon, Close as CloseIcon, VerifiedUser as ShieldCheck } from '@mui/icons-material';
import { StfiLogo } from '../../components/ui/StfiLogo';
import { useContent } from '../../content/ContentContext';

export const TopNav = ({ onOpenStfiPortal, onSelectNav }) => {
  const { content } = useContent();
  const STFI_NAVIGATION_ITEMS = content.nav;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header style={{ backgroundColor: 'var(--surface-paper-white)', position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid var(--color-concrete-gray)' }}>
      {/* Top Utility Announcement Bar */}
      <div style={{ backgroundColor: 'var(--color-obsidian)', padding: '6px 24px', fontSize: '12px', color: 'var(--color-paper-white)' }}>
        <div className="max-width-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 600, letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={14} />
            <span>{content.meta.orgName.toUpperCase()} — {content.meta.tagline}</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', fontWeight: 500 }}>
            <button
              onClick={() => onOpenStfiPortal('myas')}
              style={{ background: 'none', border: 'none', color: 'var(--color-paper-white)', cursor: 'pointer', fontWeight: 600, textDecoration: 'underline' }}
            >
              MYAS Disclosures (28)
            </button>
            <span>|</span>
            <button
              onClick={() => onOpenStfiPortal('rti')}
              style={{ background: 'none', border: 'none', color: 'var(--color-paper-white)', cursor: 'pointer' }}
            >
              RTI Contact
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar — Clean & Spacious */}
      <div className="max-width-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Left: STFI Logo Mark */}
        <div style={{ cursor: 'pointer' }} onClick={() => onSelectNav('home')}>
          <StfiLogo color="var(--color-obsidian)" />
        </div>

        {/* Center: Clean Category Navigation */}
        <nav className="desktop-categories" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          {STFI_NAVIGATION_ITEMS.map(item => (
            <div
              key={item.id}
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => {
                  if (item.id === 'governance') {
                    onOpenStfiPortal('myas');
                  } else {
                    onSelectNav(item.id);
                  }
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: `2px solid ${activeDropdown === item.id ? 'var(--color-accent)' : 'transparent'}`,
                  fontFamily: 'var(--font-helvetica-now-text)',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: activeDropdown === item.id ? 'var(--color-accent)' : 'var(--color-obsidian)',
                  padding: '10px 2px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'color 0.15s ease, border-color 0.15s ease'
                }}
              >
                <span>{item.label}</span>
                {item.children && <ChevronDown size={14} color={activeDropdown === item.id ? 'var(--color-accent)' : 'var(--color-steel)'} />}
              </button>

              {/* Submenu Dropdown */}
              {item.children && activeDropdown === item.id && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    backgroundColor: 'var(--surface-paper-white)',
                    border: '1px solid var(--color-concrete-gray)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                    minWidth: '220px',
                    padding: '8px 0',
                    zIndex: 50
                  }}
                >
                  {item.children.map(child => (
                    <button
                      key={child.id}
                      onClick={() => {
                        onSelectNav(child.id);
                        setActiveDropdown(null);
                      }}
                      style={{
                        display: 'block',
                        width: '100%',
                        textAlign: 'left',
                        padding: '12px 18px',
                        background: 'none',
                        border: 'none',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--color-obsidian)',
                        cursor: 'pointer',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--surface-soft-mist)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => onOpenStfiPortal('myas')}
            className="btn-pill btn-obsidian btn-sm"
          >
            MYAS Compliance
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
          >
            {mobileMenuOpen ? <CloseIcon style={{ fontSize: 26, color: 'var(--color-obsidian)' }} /> : <MenuIcon style={{ fontSize: 26, color: 'var(--color-obsidian)' }} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="hairline-border-top"
          style={{
            padding: '16px 24px',
            backgroundColor: 'var(--surface-paper-white)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {STFI_NAVIGATION_ITEMS.map(item => (
            <div key={item.id}>
              <button
                onClick={() => {
                  onSelectNav(item.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'var(--color-obsidian)',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
