import React from 'react';
import { useContent } from '../../content/ContentContext';
import { CountUp } from '../../components/ui/Motion';

// Headline federation numbers, on a green band — a common trust device on federation sites.
export const StatsStrip = () => {
  const { content } = useContent();
  const stats = content.stats || [];
  if (!stats.length) return null;
  return (
    <section style={{ background: 'var(--brand-green)', color: '#fff' }}>
      <div className="max-width-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24, padding: '32px 24px' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center', borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.18)' }}>
            <div style={{ fontFamily: 'var(--font-nike-futura-nd)', fontSize: 40, fontWeight: 700, lineHeight: 1 }}><CountUp value={s.value} /></div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.9, marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
