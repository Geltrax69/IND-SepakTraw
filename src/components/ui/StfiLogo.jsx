import React from 'react';

export const StfiLogo = ({ className = 'w-10 h-10', color = 'currentColor' }) => {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <svg
        className={className}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '36px', height: '36px' }}
      >
        <circle cx="18" cy="18" r="17" stroke={color} strokeWidth="2" />
        <path d="M8 18 C12 10, 24 10, 28 18 C24 26, 12 26, 8 18 Z" stroke={color} strokeWidth="1.75" fill="none" />
        <circle cx="18" cy="18" r="5" fill={color} />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'var(--font-nike-futura-nd)', letterSpacing: '0.05em', color: color }}>
          STFI
        </span>
        <span style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.12em', color: color, opacity: 0.8, textTransform: 'uppercase' }}>
          SepakTakraw India
        </span>
      </div>
    </div>
  );
};
