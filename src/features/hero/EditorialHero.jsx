import React from 'react';
import { VerifiedUser as ShieldCheck } from '@mui/icons-material';
import { PillButton } from '../../components/ui/PillButton';
import { Img } from '../../components/ui/Img';
import { useContent } from '../../content/ContentContext';

export const EditorialHero = ({ onOpenStfiPortal, onExploreRules }) => {
  const { content } = useContent();
  const STFI_HERO_DATA = content.hero;
  return (
    <section
      style={{
        backgroundColor: 'var(--color-obsidian)',
        color: 'var(--color-paper-white)',
        minHeight: '90vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '96px 24px',
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
        <Img
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
            background: 'linear-gradient(to top, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.55) 50%, rgba(17,17,17,0.55) 100%)'
          }}
        />
      </div>

      {/* Hero Content — bold, centered (ISTAF-style) */}
      <div
        className="hero-stagger"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 980,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '18px'
        }}
      >
        <span className="eyebrow" style={{ color: 'var(--brand-yellow)' }}>
          {STFI_HERO_DATA.bannerTag}
        </span>

        <h1
          className="display-headline"
          style={{ fontSize: 'clamp(48px, 9vw, 108px)', whiteSpace: 'pre-line', margin: 0 }}
        >
          {STFI_HERO_DATA.title}
        </h1>

        {STFI_HERO_DATA.tagline && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--brand-yellow)' }}>
            <span style={{ width: 40, height: 2, background: 'var(--brand-yellow)' }} />
            <span style={{ fontSize: 15, fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
              {STFI_HERO_DATA.tagline}
            </span>
            <span style={{ width: 40, height: 2, background: 'var(--brand-yellow)' }} />
          </div>
        )}

        <p style={{ fontSize: '18px', lineHeight: 1.55, maxWidth: '640px', color: 'var(--surface-soft-mist)', fontWeight: 400 }}>
          {STFI_HERO_DATA.subtitle}
        </p>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '4px' }}>
          <span className="trust-chip"><ShieldCheck size={13} /> MYAS Recognized</span>
          <span className="trust-chip">ISTAF Member</span>
          <span className="trust-chip">ASTAF Affiliated</span>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="btn-pill btn-yellow" onClick={onExploreRules}>Explore Playing Rules</button>
          <button className="btn-pill btn-accent" onClick={() => onOpenStfiPortal('myas')}>MYAS Disclosures (28)</button>
          <PillButton variant="obsidian" style={{ border: '1px solid rgba(255,255,255,0.4)' }} onClick={() => onOpenStfiPortal('events')}>
            Event Calendar 2026
          </PillButton>
        </div>
      </div>
    </section>
  );
};
