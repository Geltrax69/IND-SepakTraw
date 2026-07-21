import React from 'react';
import { assets } from '../../components/ui/images';

export const SponsorsStrip = () => {
  const sponsors = assets.sponsors || [];

  return (
    <section style={{ backgroundColor: '#0c0c0d', padding: '40px 0', borderTop: '1px solid #222', borderBottom: '1px solid #222' }}>
      <div className="max-width-container">
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--brand-yellow)' }}>
            OFFICIAL PARTNERS & SPONSORS
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '36px',
            flexWrap: 'wrap',
            filter: 'brightness(0.95)'
          }}
        >
          {sponsors.map((src, idx) => (
            <div
              key={idx}
              style={{
                height: '52px',
                padding: '8px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--brand-yellow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <img
                src={src}
                alt={`Official Partner ${idx + 1}`}
                style={{ maxHeight: '36px', maxWidth: '120px', objectFit: 'contain', filter: 'grayscale(15%) contrast(110%)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
