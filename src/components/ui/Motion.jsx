import React, { useEffect, useRef, useState } from 'react';

// Scroll-reveal wrapper. Adds .in when the element enters the viewport (once).
// CSS keeps content visible when prefers-reduced-motion is set, so this is a no-op there.
export function Reveal({ children, className = '', style, delay = 0, as: Tag = 'div', ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}s`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

const easeOut = (p) => 1 - Math.pow(1 - p, 3);

// Counts a numeric value up when scrolled into view, preserving any prefix/suffix
// ("28+", "1.55m"). Non-numeric values ("ISTAF") render as-is.
export function CountUp({ value, duration = 1400 }) {
  const match = String(value).match(/[\d.]+/);
  const ref = useRef(null);
  const [display, setDisplay] = useState(match ? String(value).replace(match[0], '0') : value);

  useEffect(() => {
    if (!match) return;
    const el = ref.current;
    if (!el) return;
    const target = parseFloat(match[0]);
    const decimals = (match[0].split('.')[1] || '').length;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    const run = () => {
      if (reduce) { setDisplay(value); return; }
      const start = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - start) / duration);
        const cur = (target * easeOut(p)).toFixed(decimals);
        setDisplay(String(value).replace(match[0], cur));
        if (p < 1) requestAnimationFrame(step);
        else setDisplay(value);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { run(); io.disconnect(); } },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]); // eslint-disable-line

  return <span ref={ref}>{display}</span>;
}
