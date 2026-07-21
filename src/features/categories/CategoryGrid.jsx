import React from 'react';
import { PillButton } from '../../components/ui/PillButton';
import { Img } from '../../components/ui/Img';
import { Reveal } from '../../components/ui/Motion';
import { useContent } from '../../content/ContentContext';

export const CategoryGrid = ({ onOpenPortal, onSelectNav }) => {
  const { content } = useContent();
  const CATEGORY_TILES = content.categories;
  return (
    <section style={{ backgroundColor: 'var(--surface-paper-white)', padding: '60px 0' }}>
      <div className="max-width-container" style={{ marginBottom: '36px' }}>
        <h2 className="section-title-center">
          Federation Pillars
          <span className="accent-bar" />
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
        {CATEGORY_TILES.map((tile, i) => (
          <Reveal
            key={tile.id}
            delay={0.08 * i}
            style={{
              position: 'relative',
              height: '440px',
              overflow: 'hidden',
              borderRadius: '0px',
              backgroundColor: 'var(--color-obsidian)',
              cursor: 'pointer'
            }}
            onClick={() => {
              if (['myas', 'rules', 'events'].includes(tile.target)) onOpenPortal(tile.target);
              else onSelectNav(tile.target || 'notice');
            }}
          >
            {/* Edge to edge Image */}
            <Img
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
          </Reveal>
        ))}
      </div>
    </section>
  );
};
