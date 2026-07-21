import React, { useState } from 'react';

// ponytail: one img wrapper. Empty or broken src -> neutral placeholder tile,
// so admins can leave images blank until they upload real STFI photos.
const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
      <rect width='100%' height='100%' fill='#e5e5e5'/>
      <text x='50%' y='50%' fill='#707072' font-family='sans-serif' font-size='28'
        text-anchor='middle' dominant-baseline='middle'>Image placeholder</text>
    </svg>`
  );

export function Img({ src, alt = '', style, className, onMouseEnter, onMouseLeave }) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      src={!src || failed ? PLACEHOLDER : src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setFailed(true)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}
