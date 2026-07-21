import React from 'react';
import { PillButton } from '../../components/ui/PillButton';
import { useSearchFilter } from '../../context/SearchFilterContext';

export const EditorialHero = () => {
  const { setSelectedCategory } = useSearchFilter();

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
      {/* Background Featured Product Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0.82,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=2000&q=90"
          alt="Nike Air Max Dn Hero"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%'
          }}
        />
        {/* Dark Gradient Overlay for readability */}
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
          Introducing Nike Air Max Dn
        </span>

        <h1 className="display-headline" style={{ maxWidth: '840px' }}>
          UNREAL POWER
        </h1>

        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.5,
            maxWidth: '560px',
            color: 'var(--surface-soft-mist)',
            fontWeight: 400
          }}
        >
          Feel the unreal. The next generation of Air cushioning has arrived with Dynamic Air technology to revolutionize your stride.
        </p>

        <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
          <PillButton
            variant="paper"
            onClick={() => setSelectedCategory('New Releases')}
          >
            Shop Air Max
          </PillButton>
          <PillButton
            variant="obsidian"
            style={{ border: '1px solid var(--color-paper-white)' }}
            onClick={() => {
              const el = document.getElementById('product-catalog');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Collection
          </PillButton>
        </div>
      </div>
    </section>
  );
};
