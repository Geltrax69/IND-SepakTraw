import React, { useState } from 'react';
import {
  Gavel as GavelIcon,
  GetApp as DownloadIcon,
  SportsKabaddi as SportsIcon,
  CheckCircle as CheckIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { useContent } from '../../content/ContentContext';

export const RulesRegulationsPage = () => {
  const { content } = useContent();
  const rulesData = content.rules || [];

  const [downloadNotice, setDownloadNotice] = useState(null);

  const handleDownload = (pdf) => {
    setDownloadNotice(`Downloading Official ISTAF Rulebook: ${pdf}`);
    setTimeout(() => setDownloadNotice(null), 4000);
  };

  return (
    <div style={{ backgroundColor: '#0b0c10', color: '#f0f2f5', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section className="page-header" style={{ backgroundColor: '#12141c', borderBottom: '1px solid #222634', padding: '60px 24px 48px' }}>
        <div className="max-width-container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '30px', backgroundColor: 'rgba(255, 199, 44, 0.12)', border: '1px solid rgba(255, 199, 44, 0.3)', color: '#ffc72c', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
            <GavelIcon style={{ fontSize: 16 }} />
            <span>ISTAF &amp; STFI Official Code of Rules &amp; Disciplines</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0, color: '#ffffff', fontFamily: 'var(--font-nike-futura-nd, sans-serif)' }}>
            Rules &amp; <span style={{ color: '#ffc72c' }}>Regulations</span>
          </h1>

          <p style={{ color: '#a0a5b5', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: '12px', maxWidth: '820px', lineHeight: 1.6 }}>
            Official Laws of the Game governing SepakTakraw in India for Regu, Double Event, Quad Event, and Beach SepakTakraw — compliant with ISTAF (International Sepaktakraw Federation).
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-width-container" style={{ marginTop: '40px' }}>
        {downloadNotice && (
          <div className="toast-banner" style={{ backgroundColor: '#00a651', color: '#ffffff', padding: '14px 20px', borderRadius: '10px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 700 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckIcon />
              <span>{downloadNotice}</span>
            </div>
            <button onClick={() => setDownloadNotice(null)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
              <CloseIcon style={{ fontSize: 18 }} />
            </button>
          </div>
        )}

        {/* Disciplines Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {rulesData.map((rule, idx) => (
            <div key={idx} style={{ backgroundColor: '#12141c', border: '1px solid #222634', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#ffc72c', backgroundColor: 'rgba(255,199,44,0.1)', padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase' }}>
                  ISTAF DISCIPLINE CODE
                </span>

                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', margin: '12px 0 6px 0' }}>{rule.title}</h3>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#00a651', margin: '4px 0 12px 0' }}>{rule.players}</div>
                <div style={{ fontSize: '12.5px', color: '#ffc72c', fontWeight: 700, marginBottom: '14px' }}>📐 Court Spec: {rule.court}</div>

                <p style={{ fontSize: '14px', color: '#a0a5b5', lineHeight: 1.6, margin: 0 }}>{rule.description}</p>
              </div>

              <button
                onClick={() => handleDownload(rule.pdf)}
                className="btn-pill btn-yellow"
                style={{ fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}
              >
                <DownloadIcon style={{ fontSize: 18 }} />
                <span>Download Rulebook PDF</span>
              </button>
            </div>
          ))}
        </div>

        {/* Technical Court Dimensions Diagram Section */}
        <div style={{ marginTop: '48px', backgroundColor: '#12141c', border: '1px solid #222634', borderRadius: '20px', padding: '36px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff', margin: 0, textTransform: 'uppercase' }}>
            Official Court &amp; Ball Specifications
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '24px' }}>
            <div style={{ backgroundColor: '#0b0c10', padding: '20px', borderRadius: '12px', border: '1px solid #222634' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffc72c' }}>COURT DIMENSIONS</div>
              <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', marginTop: '4px' }}>13.4m × 6.1m</div>
              <div style={{ fontSize: '12.5px', color: '#888e9e', marginTop: '4px' }}>Clear of obstacles up to a height of 8m.</div>
            </div>

            <div style={{ backgroundColor: '#0b0c10', padding: '20px', borderRadius: '12px', border: '1px solid #222634' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffc72c' }}>NET HEIGHT</div>
              <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', marginTop: '4px' }}>1.55m (Men) / 1.45m (Women)</div>
              <div style={{ fontSize: '12.5px', color: '#888e9e', marginTop: '4px' }}>Measured at posts (1.52m at center).</div>
            </div>

            <div style={{ backgroundColor: '#0b0c10', padding: '20px', borderRadius: '12px', border: '1px solid #222634' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffc72c' }}>BALL SPECIFICATIONS</div>
              <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff', marginTop: '4px' }}>170g – 180g</div>
              <div style={{ fontSize: '12.5px', color: '#888e9e', marginTop: '4px' }}>Synthetic woven polymer with 12 holes &amp; 20 intersections.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
