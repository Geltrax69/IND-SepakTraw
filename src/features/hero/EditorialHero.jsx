import React from 'react';
import { PillButton } from '../../components/ui/PillButton';
import { STFI_HERO_DATA } from '../../data/nikeData';

export const EditorialHero = ({ onOpenStfiPortal, onExploreRules }) => {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-obsidian)',
        color: 'var(--color-paper-white)',
        minHeight: '80vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '64px 24px',
        overflow: 'hidden'
      }}
    >
      {/* Background High Resolution SepakTakraw Action Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0.75,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src={STFI_HERO_DATA.heroImage}
          alt="SepakTakraw India Championship Action"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 35%'
          }}
        />
        {/* Dark Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(17, 17, 17, 0.95) 0%, rgba(17, 17, 17, 0.45) 55%, rgba(17, 17, 17, 0.15) 100%)'
          }}
        />
      </div>

      {/* Hero Content Overlay */}
      <div
        className="max-width-container"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '16px'
        }}
      >
        <span className="label-uppercase" style={{ color: 'var(--color-concrete-gray)', letterSpacing: '0.12em' }}>
          {STFI_HERO_DATA.bannerTag}
        </span>

        <h1 className="display-headline" style={{ maxWidth: '960px' }}>
          {STFI_HERO_DATA.title}
        </h1>

        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.5,
            maxWidth: '640px',
            color: 'var(--surface-soft-mist)',
            fontWeight: 400
          }}
        >
          {STFI_HERO_DATA.subtitle}
        </p>

        <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
          <PillButton
            variant="paper"
            onClick={onExploreRules}
          >
            Explore Playing Rules
          </PillButton>
          <PillButton
            variant="obsidian"
            style={{ border: '1px solid var(--color-paper-white)' }}
            onClick={() => onOpenStfiPortal('myas')}
          >
            MYAS Disclosures (28)
          </PillButton>
          <PillButton
            variant="obsidian"
            style={{ border: '1px solid var(--color-concrete-gray)' }}
            onClick={() => onOpenStfiPortal('events')}
          >
            Event Calendar 2026
          </PillButton>
        </div>
      </div>
    </section>
  );
};
