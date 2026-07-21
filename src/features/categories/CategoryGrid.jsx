import React from 'react';
import { PillButton } from '../../components/ui/PillButton';
import { Img } from '../../components/ui/Img';
import { Reveal } from '../../components/ui/Motion';
import { useContent } from '../../content/ContentContext';
import { assets } from '../../components/ui/images';
import { ArrowForward as ArrowIcon } from '@mui/icons-material';

export const CategoryGrid = ({ onOpenPortal, onSelectNav }) => {
  const { content } = useContent();
  const CATEGORY_TILES = content.categories || [];

  return (
    <section style={{ backgroundColor: '#0c0c0e', padding: '80px 0', borderTop: '1px solid #1a1a1e' }}>
      <div className="max-width-container" style={{ marginBottom: '44px', textAlign: 'center' }}>
        <span style={{ color: 'var(--brand-yellow)', fontSize: '12px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          CORE GOVERNANCE & COMPETITION FORMATS
        </span>
        <h2 className="section-title-center" style={{ color: '#ffffff', marginTop: '8px' }}>
          FEDERATION PILLARS
          <span className="accent-bar" style={{ margin: '14px auto 0' }} />
        </h2>
      </div>

      {/* 4 Pillar Grid Tiles */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          width: '100%',
          maxWidth: 'var(--page-max-width)',
          margin: '0 auto',
          padding: '0 24px'
        }}
      >
        {CATEGORY_TILES.map((tile, i) => {
          // Always use authentic local Indian Sepak Takraw photos from src/components/ui/images/moments/
          const pillarImage = (typeof tile.image === 'string' && tile.image.includes('unsplash'))
            ? assets.moments[i % assets.moments.length]
            : (tile.image || assets.moments[i % assets.moments.length]);

          return (
            <Reveal
              key={tile.id || i}
              delay={0.08 * i}
              style={{
                position: 'relative',
                height: '460px',
                overflow: 'hidden',
                borderRadius: '16px',
                backgroundColor: '#111',
                border: '1px solid #222',
                cursor: 'pointer',
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--brand-yellow)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(255, 199, 44, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#222';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onClick={() => {
                if (['myas', 'rules', 'events'].includes(tile.target)) onOpenPortal(tile.target);
                else onSelectNav(tile.target || 'notice');
              }}
            >
              {/* Edge to edge SepakTakraw Moment Image */}
              <Img
                src={pillarImage}
                alt={tile.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />

              {/* Gradient Veil Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 10, 12, 0.95) 0%, rgba(10, 10, 12, 0.45) 55%, transparent 100%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Pillar Content */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '28px',
                  left: '24px',
                  right: '24px',
                  zIndex: 2,
                  color: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  alignItems: 'flex-start'
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--brand-yellow)',
                    backgroundColor: 'rgba(255, 199, 44, 0.12)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                  }}
                >
                  {tile.categoryLabel}
                </span>

                <h3 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, lineHeight: 1.2, margin: 0, fontFamily: 'var(--font-helvetica-now-display-medium)' }}>
                  {tile.title}
                </h3>

                <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brand-yellow)', fontSize: '13px', fontWeight: 700 }}>
                  <span>{tile.ctaPrimary}</span>
                  <ArrowIcon style={{ fontSize: 16 }} />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
