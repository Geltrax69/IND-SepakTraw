import React from 'react';
import { CATEGORY_TILES } from '../../data/nikeData';
import { PillButton } from '../../components/ui/PillButton';

export const CategoryGrid = ({ onOpenPortal, onSelectNav }) => {
  return (
    <section style={{ backgroundColor: 'var(--surface-paper-white)', padding: '60px 0' }}>
      <div className="max-width-container" style={{ marginBottom: '24px' }}>
        <h2 className="heading-sm" style={{ textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
          Federation Pillars & Portals
        </h2>
      </div>

      {/* 2x2 Grid Tiles */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '16px',
          width: '100%',
          maxWidth: 'var(--page-max-width)',
          margin: '0 auto',
          padding: '0 24px'
        }}
      >
        {CATEGORY_TILES.map(tile => (
          <div
            key={tile.id}
            style={{
              position: 'relative',
              height: '440px',
              overflow: 'hidden',
              borderRadius: '0px',
              backgroundColor: 'var(--color-obsidian)',
              cursor: 'pointer'
            }}
            onClick={() => {
              if (tile.id === 'cat-myas') onOpenPortal('myas');
              else if (tile.id === 'cat-rules') onOpenPortal('rules');
              else if (tile.id === 'cat-events') onOpenPortal('events');
              else onSelectNav('notice');
            }}
          >
            {/* Edge to edge Image */}
            <img
              src={tile.image}
              alt={tile.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />

            {/* Dark Gradient Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(17, 17, 17, 0.88) 0%, rgba(17, 17, 17, 0.15) 60%)',
                pointerEvents: 'none'
              }}
            />

            {/* Bottom-left Overlaid Content */}
            <div
              style={{
                position: 'absolute',
                bottom: '32px',
                left: '32px',
                right: '32px',
                zIndex: 2,
                color: 'var(--color-paper-white)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                alignItems: 'flex-start'
              }}
            >
              <span className="label-uppercase" style={{ opacity: 0.9 }}>
                {tile.categoryLabel}
              </span>
              <h3 className="heading-lg" style={{ color: 'var(--color-paper-white)', fontSize: '26px' }}>
                {tile.title}
              </h3>
              <div style={{ marginTop: '8px' }}>
                <PillButton variant="paper" size="sm">
                  {tile.ctaPrimary}
                </PillButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
