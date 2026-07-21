import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { StfiLogo } from '../../components/ui/StfiLogo';
import { useCart } from '../../context/CartContext';
import { useSearchFilter } from '../../context/SearchFilterContext';

export const TopNav = ({ onOpenStfiPortal, onSelectNav }) => {
  const { setIsCartOpen, totalItemsCount } = useCart();
  const { searchQuery, setSearchQuery } = useSearchFilter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const mainNavItems = [
    { id: 'home', label: 'Home' },
    {
      id: 'notice',
      label: 'Notice',
      children: [
        { id: 'news', label: 'News & Announcements' },
        { id: 'results', label: 'Tournament Results' }
      ]
    },
    {
      id: 'rules',
      label: 'Rules & Regulations',
      children: [
        { id: 'rule-beach', label: 'Beach Event Rules' },
        { id: 'rule-regu', label: 'Regu Team Rules' },
        { id: 'rule-double', label: 'Double Event Rules' },
        { id: 'rule-quad', label: 'Quad Event Rules' }
      ]
    },
    {
      id: 'events',
      label: 'Events',
      children: [
        { id: 'national-championships', label: 'National Championships' },
        { id: 'selection-trials', label: 'Selection Trials' },
        { id: 'training-camps', label: 'Training Camps' },
        { id: 'event-calendar', label: 'Event Calendar' }
      ]
    },
    { id: 'myas', label: 'MYAS Compliance' },
    { id: 'antidoping', label: 'Anti Doping' },
    { id: 'rti', label: 'RTI' },
    { id: 'elections', label: 'Elections' },
    { id: 'history', label: 'History' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header style={{ backgroundColor: 'var(--surface-paper-white)', position: 'relative', zIndex: 40, borderBottom: '1px solid var(--color-concrete-gray)' }}>
      {/* Top Utility Disclosure Bar */}
      <div style={{ backgroundColor: 'var(--color-obsidian)', padding: '6px 24px', fontSize: '12px', color: 'var(--color-paper-white)' }}>
        <div className="max-width-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 600, letterSpacing: '0.04em' }}>
            SEPAKTAKRAW FEDERATION OF INDIA (STFI) — Recognized by MYAS, ISTAF & ASTAF
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', fontWeight: 500 }}>
            <span style={{ cursor: 'pointer', textDecoration: 'underline' }} onClick={() => onOpenStfiPortal('myas')}>
              MYAS Mandatory Disclosures (28)
            </span>
            <span>|</span>
            <span style={{ cursor: 'pointer' }} onClick={() => onOpenStfiPortal('rti')}>RTI Information</span>
            <span>|</span>
            <span style={{ cursor: 'pointer' }} onClick={() => onOpenStfiPortal('elections')}>Elections 2024-2028</span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-width-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        {/* Left: STFI Logo */}
        <div style={{ cursor: 'pointer' }} onClick={() => onSelectNav('home')}>
          <StfiLogo color="var(--color-obsidian)" />
        </div>

        {/* Center Desktop Navigation */}
        <nav className="desktop-categories" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {mainNavItems.map(item => (
            <div
              key={item.id}
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => {
                  if (item.id === 'myas' || item.id === 'rti' || item.id === 'elections') {
                    onOpenStfiPortal(item.id);
                  } else {
                    onSelectNav(item.id);
                  }
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-helvetica-now-text)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--color-obsidian)',
                  padding: '8px 4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>{item.label}</span>
                {item.children && <ChevronDown size={14} color="var(--color-steel)" />}
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
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
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
                        padding: '10px 16px',
                        background: 'none',
                        border: 'none',
                        fontSize: '13px',
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

        {/* Right Actions: Search & Gear Cart */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--surface-soft-mist)',
              borderRadius: 'var(--radius-nav)',
              padding: '6px 14px',
              gap: '8px',
              width: '160px'
            }}
          >
            <Search size={16} color="var(--color-steel)" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontSize: '13px',
                fontFamily: 'var(--font-helvetica-now-text)',
                fontWeight: 500,
                color: 'var(--color-obsidian)',
                width: '100%'
              }}
            />
          </div>

          <button
            aria-label="STFI Gear Cart"
            onClick={() => setIsCartOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', position: 'relative' }}
          >
            <ShoppingBag size={22} color="var(--color-obsidian)" strokeWidth={1.75} />
            {totalItemsCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-4px',
                  backgroundColor: 'var(--color-obsidian)',
                  color: 'var(--color-paper-white)',
                  fontSize: '10px',
                  fontWeight: 700,
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {totalItemsCount}
              </span>
            )}
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
          >
            {mobileMenuOpen ? <X size={24} color="var(--color-obsidian)" /> : <Menu size={24} color="var(--color-obsidian)" />}
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
          {mainNavItems.map(item => (
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
