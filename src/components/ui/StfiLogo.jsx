import React, { useState } from 'react';

// Uses the real logo at /stfi-logo.png. Until that file is added, falls back to a
// stylized sunburst + woven-ball mark in the brand colors.
// ponytail: onError swap — no build step, drop the PNG in /public and it appears.
export const StfiLogo = ({ color = 'var(--color-obsidian)' }) => {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      {imgOk ? (
        <img
          src="/stfi-logo.png"
          alt="STFI logo"
          onError={() => setImgOk(false)}
          style={{ height: '46px', width: 'auto', display: 'block' }}
        />
      ) : (
        <SunburstMark />
      )}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
        <span style={{ fontSize: '19px', fontWeight: 800, fontFamily: 'var(--font-nike-futura-nd)', letterSpacing: '0.04em', color }}>
          STFI
        </span>
        <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.11em', color, opacity: 0.75, textTransform: 'uppercase' }}>
          SepakTakraw Federation India
        </span>
      </div>
    </div>
  );
};

function SunburstMark() {
  const rays = Array.from({ length: 28 });
  return (
    <svg viewBox="0 0 100 100" style={{ width: 46, height: 46 }} xmlns="http://www.w3.org/2000/svg">
      {rays.map((_, i) => (
        <rect
          key={i}
          x="49" y="2" width="2.4" height="20" rx="1.2"
          fill="var(--brand-red)"
          transform={`rotate(${(360 / rays.length) * i} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="30" fill="var(--brand-yellow)" />
      <circle cx="50" cy="50" r="21" fill="#111" />
      {/* stylized woven ball */}
      <g stroke="var(--brand-yellow)" strokeWidth="3" fill="none">
        <ellipse cx="50" cy="50" rx="16" ry="7" transform="rotate(0 50 50)" />
        <ellipse cx="50" cy="50" rx="16" ry="7" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="16" ry="7" transform="rotate(120 50 50)" />
      </g>
    </svg>
  );
}
