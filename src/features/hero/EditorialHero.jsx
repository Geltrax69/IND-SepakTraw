import React from 'react';
import { PillButton } from '../../components/ui/PillButton';

export const EditorialHero = ({ onOpenStfiPortal, onExploreEvents }) => {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-obsidian)',
        color: 'var(--color-paper-white)',
        minHeight: '85vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '64px 24px',
        overflow: 'hidden'
      }}
    >
      {/* Background High Impact SepakTakraw Athlete Action Photo */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0.8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=90"
          alt="STFI SepakTakraw India Action"
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
            background: 'linear-gradient(to top, rgba(17, 17, 17, 0.95) 0%, rgba(17, 17, 17, 0.35) 55%, rgba(17, 17, 17, 0.1) 100%)'
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
          Official Portal • SepakTakraw Federation of India
        </span>

        <h1 className="display-headline" style={{ maxWidth: '960px' }}>
          SEPAKTAKRAW INDIA
        </h1>

        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.5,
            maxWidth: '600px',
            color: 'var(--surface-soft-mist)',
            fontWeight: 400
          }}
        >
          National Sports Federation recognized by the Ministry of Youth Affairs & Sports (MYAS), Government of India. Affiliated with ISTAF & ASTAF.
        </p>

        <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
          <PillButton
            variant="paper"
            onClick={() => onOpenStfiPortal('rules')}
          >
            View Playing Rules
          </PillButton>
          <PillButton
            variant="obsidian"
            style={{ border: '1px solid var(--color-paper-white)' }}
            onClick={onExploreEvents}
          >
            National Championships
          </PillButton>
        </div>
      </div>
    </section>
  );
};
