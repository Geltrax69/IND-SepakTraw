import React, { useEffect, useState } from 'react';
import { CalendarDays, MapPin } from 'lucide-react';
import { Img } from '../../components/ui/Img';
import { useContent } from '../../content/ContentContext';

// ponytail: one interval, plain Date math. No date lib for a countdown.
function diff(target) {
  const ms = Math.max(0, new Date(target).getTime() - Date.now());
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
    done: ms === 0,
  };
}

export const EventCountdown = ({ onOpenPortal }) => {
  const { content } = useContent();
  const ev = content.featuredEvent;
  const [t, setT] = useState(() => (ev?.date ? diff(ev.date) : null));

  useEffect(() => {
    if (!ev?.date) return;
    const id = setInterval(() => setT(diff(ev.date)), 1000);
    return () => clearInterval(id);
  }, [ev?.date]);

  if (!ev || !t) return null;
  const blocks = [['Days', t.days], ['Hrs', t.hours], ['Min', t.mins], ['Sec', t.secs]];

  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-obsidian)' }}>
      <Img src={ev.image} alt={ev.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(17,17,17,0.9), rgba(17,17,17,0.55))' }} />
      <div className="max-width-container" style={{ position: 'relative', zIndex: 2, padding: '48px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 28, flexWrap: 'wrap', color: '#fff' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 520 }}>
          <span className="kicker" style={{ alignSelf: 'flex-start' }}>{ev.kicker}</span>
          <h2 style={{ fontFamily: 'var(--font-nike-futura-nd)', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, textTransform: 'uppercase', lineHeight: 1.05 }}>
            {ev.title}
          </h2>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', fontSize: 14, fontWeight: 600, opacity: 0.9 }}>
            <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><CalendarDays size={16} /> {new Date(ev.date).toDateString()}</span>
            <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><MapPin size={16} /> {ev.venue}</span>
          </div>
          {onOpenPortal && (
            <button className="btn-pill btn-yellow btn-sm" style={{ alignSelf: 'flex-start', marginTop: 6 }} onClick={() => onOpenPortal('events')}>
              {ev.cta || 'Event Details'}
            </button>
          )}
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          {blocks.map(([label, val]) => (
            <div key={label} className="count-block">
              <div key={val} className="count-num count-tick">{String(val).padStart(2, '0')}</div>
              <div className="count-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
