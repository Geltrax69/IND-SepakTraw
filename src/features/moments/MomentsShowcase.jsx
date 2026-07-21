import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Img } from '../../components/ui/Img';
import { Reveal } from '../../components/ui/Motion';
import { useContent } from '../../content/ContentContext';

// FIFA / sepaktakraw.one-style news showcase: one big lead story + a grid of cards.
export const MomentsShowcase = ({ onOpenPortal, onSelectNav }) => {
  const { content } = useContent();
  const items = content.highlights || [];
  if (!items.length) return null;
  const [lead, ...rest] = items;

  const go = (t) => (['myas', 'rules', 'events'].includes(t) ? onOpenPortal(t) : onSelectNav(t || 'notice'));

  return (
    <section className="section-sand" style={{ padding: '64px 0' }}>
      <div className="max-width-container">
        <div style={{ marginBottom: 36 }}>
          <h2 className="section-title-center">
            News &amp; Moments
            <span className="accent-bar" />
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {/* Lead story spans two columns on wide screens */}
          <Reveal className="moment-lead" style={{ gridColumn: 'span 2', minWidth: 320 }}>
            <div style={{ position: 'absolute', inset: 0 }} onClick={() => go(lead.target)}>
              <Img src={lead.image} alt={lead.title} />
              <div className="veil" />
            </div>
            <div style={{ position: 'relative', padding: 32, color: '#fff', display: 'flex', flexDirection: 'column', gap: 12, pointerEvents: 'none' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                {lead.live && <span className="badge-live">Live</span>}
                <span className="kicker">{lead.kicker}</span>
                <span style={{ fontSize: 12, opacity: 0.85, fontWeight: 600 }}>{lead.date}</span>
              </div>
              <h3 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.12, maxWidth: 620, fontFamily: 'var(--font-helvetica-now-display-medium)' }}>
                {lead.title}
              </h3>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 700, fontSize: 14 }}>
                Read story <ArrowUpRight size={16} />
              </span>
            </div>
          </Reveal>

          {rest.map((it, i) => (
            <Reveal key={it.id} className="moment-card" delay={0.08 * (i + 1)}>
              <div style={{ position: 'absolute', inset: 0 }} onClick={() => go(it.target)}>
                <Img src={it.image} alt={it.title} />
                <div className="veil" />
              </div>
              <div style={{ position: 'relative', padding: 20, color: '#fff', display: 'flex', flexDirection: 'column', gap: 8, pointerEvents: 'none' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  {it.live && <span className="badge-live">Live</span>}
                  <span className="kicker">{it.kicker}</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.3 }}>{it.title}</h3>
                <span style={{ fontSize: 12, opacity: 0.8, fontWeight: 600 }}>{it.date}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
