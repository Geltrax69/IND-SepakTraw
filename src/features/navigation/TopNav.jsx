import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, Award } from 'lucide-react';
import { NikeSwoosh } from '../../components/ui/NikeSwoosh';
import { useCart } from '../../context/CartContext';
import { useSearchFilter } from '../../context/SearchFilterContext';

export const TopNav = ({ onOpenStfiPortal }) => {
  const { setIsCartOpen, totalItemsCount } = useCart();
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useSearchFilter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { id: 'New Releases', label: 'New Releases' },
    { id: 'STFI Official', label: 'STFI SepakTakraw' },
    { id: 'Men', label: 'Men' },
    { id: 'Women', label: 'Women' },
    { id: 'Kids', label: 'Kids' }
  ];

  return (
    <header style={{ backgroundColor: 'var(--surface-paper-white)', position: 'relative', zIndex: 40 }}>
      {/* Top Thin Utility Bar with STFI Federation Banner */}
      <div style={{ backgroundColor: 'var(--color-obsidian)', padding: '6px 24px', fontSize: '12px', color: 'var(--color-paper-white)' }}>
        <div className="max-width-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600, letterSpacing: '0.04em' }}>
            <Award size={14} color="var(--color-paper-white)" />
            <span>STFI — SepakTakraw Federation of India (MYAS / ISTAF / ASTAF Recognized)</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', fontWeight: 500 }}>
            <button
              onClick={onOpenStfiPortal}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-paper-white)',
                cursor: 'pointer',
                fontWeight: 600,
                textDecoration: 'underline'
              }}
            >
              STFI Official Portal & MYAS Compliance
            </button>
            <span>|</span>
            <span style={{ cursor: 'pointer' }}>Help</span>
            <span>|</span>
            <span style={{ cursor: 'pointer', fontWeight: 600 }}>Sign In</span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-width-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        {/* Left: Nike Swoosh */}
        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }} onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}>
          <NikeSwoosh className="w-16 h-8" color="var(--color-obsidian)" />
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', borderLeft: '1px solid var(--color-concrete-gray)', paddingLeft: '10px', textTransform: 'uppercase' }}>
            STFI Partner
          </span>
        </div>

        {/* Center Desktop Category Navigation */}
        <nav className="desktop-categories" style={{ display: 'flex', gap: '28px' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: 'var(--font-helvetica-now-text)',
                fontSize: '15px',
                fontWeight: selectedCategory === cat.id ? 700 : 600,
                color: 'var(--color-obsidian)',
                borderBottom: selectedCategory === cat.id ? '2px solid var(--color-obsidian)' : '2px solid transparent',
                paddingBottom: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        {/* Right Actions: Search Field, Wishlist, Bag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Search Field */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--surface-soft-mist)',
              borderRadius: 'var(--radius-nav)',
              padding: '8px 16px',
              gap: '10px',
              width: '180px'
            }}
          >
            <Search size={18} color="var(--color-steel)" />
            <input
              type="text"
              placeholder="Search gear..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontSize: '14px',
                fontFamily: 'var(--font-helvetica-now-text)',
                fontWeight: 500,
                color: 'var(--color-obsidian)',
                width: '100%'
              }}
            />
          </div>

          {/* Wishlist Icon */}
          <button
            aria-label="Favorites"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
          >
            <Heart size={22} color="var(--color-obsidian)" strokeWidth={1.75} />
          </button>

          {/* Cart Bag Icon */}
          <button
            aria-label="Bag"
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

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
          >
            {mobileMenuOpen ? <X size={24} color="var(--color-obsidian)" /> : <Menu size={24} color="var(--color-obsidian)" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="hairline-border-top"
          style={{
            padding: '16px 24px',
            backgroundColor: 'var(--surface-paper-white)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setMobileMenuOpen(false);
              }}
              style={{
                textAlign: 'left',
                background: 'none',
                border: 'none',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--color-obsidian)',
                cursor: 'pointer'
              }}
            >
              {cat.label}
            </button>
          ))}
          <button
            onClick={() => {
              onOpenStfiPortal();
              setMobileMenuOpen(false);
            }}
            className="btn-pill btn-obsidian btn-sm"
            style={{ marginTop: '8px' }}
          >
            STFI Federation & MYAS Portal
          </button>
        </div>
      )}
    </header>
  );
};
