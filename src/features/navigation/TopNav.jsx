import React, { useState } from 'react';
import { KeyboardArrowDown as ChevronDown, Menu as MenuIcon, Close as CloseIcon, VerifiedUser as ShieldCheck } from '@mui/icons-material';
import { StfiLogo } from '../../components/ui/StfiLogo';
import { useContent } from '../../content/ContentContext';

export const TopNav = ({ currentView, onOpenStfiPortal, onSelectNav }) => {
  const { content } = useContent();
  const STFI_NAVIGATION_ITEMS = content.nav;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleNavClick = (id) => {
    if (['myas', 'rti', 'elections', 'governance'].includes(id)) {
      onSelectNav('myas');
    } else if (['events', 'nationals', 'selection', 'camps', 'calendar'].includes(id)) {
      onSelectNav('events');
    } else if (['rules', 'rule-regu', 'rule-double', 'rule-quad', 'rule-beach'].includes(id)) {
      onSelectNav('rules');
    } else if (['notice', 'news', 'results', 'trials'].includes(id)) {
      onSelectNav('notice');
    } else if (id === 'contact') {
      onSelectNav('contact');
    } else {
      onSelectNav('home');
    }
  };

  return (
    <header style={{ backgroundColor: '#12141c', position: 'sticky', top: 0, zIndex: 90, borderBottom: '1px solid #222634' }}>
      {/* Top Utility Bar */}
      <div style={{ backgroundColor: '#0a0b0e', padding: '6px 24px', fontSize: '12px', color: '#a0a5b5', borderBottom: '1px solid #1a1d28' }}>
        <div className="max-width-container util-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div className="util-bar-org" style={{ fontWeight: 700, letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: '8px', color: '#ffc72c' }}>
            <ShieldCheck style={{ fontSize: 15 }} />
            <span>{content.meta.orgName.toUpperCase()} — {content.meta.tagline}</span>
          </div>

          <div className="util-bar-links" style={{ display: 'flex', gap: '16px', alignItems: 'center', fontWeight: 600 }}>
            <button
              onClick={() => onSelectNav('myas')}
              style={{ background: 'none', border: 'none', color: currentView === 'myas' ? '#ffc72c' : '#ffffff', cursor: 'pointer', fontWeight: 700, textDecoration: 'underline' }}
            >
              MYAS Disclosures (28)
            </button>
            <span className="util-bar-sep" style={{ opacity: 0.3 }}>|</span>
            <button
              onClick={() => onSelectNav('events')}
              style={{ background: 'none', border: 'none', color: currentView === 'events' ? '#ffc72c' : '#ffffff', cursor: 'pointer', fontWeight: 700 }}
            >
              Championship Calendar
            </button>
            <span className="util-bar-sep" style={{ opacity: 0.3 }}>|</span>
            <button
              onClick={() => onSelectNav('contact')}
              style={{ background: 'none', border: 'none', color: currentView === 'contact' ? '#ffc72c' : '#ffffff', cursor: 'pointer', fontWeight: 700 }}
            >
              Contact Federation
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-width-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Left: STFI Logo */}
        <div className="nav-logo-wrap" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', minWidth: 0 }} onClick={() => onSelectNav('home')}>
          <StfiLogo color="#ffffff" />
        </div>

        {/* Center: Desktop Nav Items */}
        <nav className="desktop-categories" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {STFI_NAVIGATION_ITEMS.map((item) => {
            const isActive =
              (item.id === 'home' && currentView === 'home') ||
              (item.id === 'governance' && currentView === 'myas') ||
              (item.id === 'events' && currentView === 'events') ||
              (item.id === 'rules' && currentView === 'rules') ||
              (item.id === 'notice' && currentView === 'notice') ||
              (item.id === 'contact' && currentView === 'contact');

            return (
              <div
                key={item.id}
                style={{ position: 'relative' }}
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    borderBottom: `2px solid ${isActive ? '#ffc72c' : 'transparent'}`,
                    fontFamily: 'var(--font-helvetica-now-text, sans-serif)',
                    fontSize: '14.5px',
                    fontWeight: isActive ? 800 : 600,
                    color: isActive ? '#ffc72c' : '#e0e5f0',
                    padding: '10px 4px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'color 0.15s ease',
                  }}
                >
                  <span>{item.label}</span>
                  {item.children && <ChevronDown style={{ fontSize: 16, color: isActive ? '#ffc72c' : '#888e9e' }} />}
                </button>

                {/* Submenu Dropdown */}
                {item.children && activeDropdown === item.id && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      backgroundColor: '#12141c',
                      border: '1px solid #282c3c',
                      borderRadius: '12px',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
                      minWidth: '230px',
                      padding: '8px 0',
                      zIndex: 100,
                    }}
                  >
                    {item.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => {
                          handleNavClick(child.id);
                          setActiveDropdown(null);
                        }}
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          padding: '12px 20px',
                          background: 'none',
                          border: 'none',
                          fontSize: '13.5px',
                          fontWeight: 600,
                          color: '#e0e5f0',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 199, 44, 0.15)';
                          e.currentTarget.style.color = '#ffc72c';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#e0e5f0';
                        }}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={() => onSelectNav('myas')}
            className="btn-pill btn-yellow btn-sm nav-cta-desktop"
            style={{ fontWeight: 800 }}
          >
            MYAS Compliance (28)
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#fff' }}
          >
            {mobileMenuOpen ? <CloseIcon style={{ fontSize: 26 }} /> : <MenuIcon style={{ fontSize: 26 }} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            padding: '20px 24px',
            backgroundColor: '#12141c',
            borderTop: '1px solid #222634',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          {[
            { id: 'home', label: 'Home Page' },
            { id: 'myas', label: 'MYAS Compliance (28 Disclosures)' },
            { id: 'events', label: 'Championship Events & Calendar' },
            { id: 'contact', label: 'Contact Us & State Directory' },
            { id: 'rules', label: 'Playing Rules & Regulations' },
            { id: 'notice', label: 'Notices & Results' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectNav(item.id);
                setMobileMenuOpen(false);
              }}
              style={{
                textAlign: 'left',
                background: 'none',
                border: 'none',
                fontSize: '16px',
                fontWeight: 700,
                color: currentView === item.id ? '#ffc72c' : '#ffffff',
                cursor: 'pointer',
                padding: '8px 0',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
