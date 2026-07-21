import React, { useState, useEffect } from 'react';
import {
  Close as X,
  VerifiedUser as ShieldCheck,
  Description as FileText,
  Event as Calendar,
  EmojiEvents as Award,
  Launch as ExternalLink,
  ChevronRight,
  Email as Mail,
  Room as MapPin,
  GetApp as DownloadIcon,
  Policy as PolicyIcon,
} from '@mui/icons-material';
import { useContent } from '../../content/ContentContext';

export const StfiPortalModal = ({ isOpen, onClose, initialTab = 'overview' }) => {
  const { content } = useContent();
  const STFI_MYAS_28_SECTIONS = content.myas || [];
  const STFI_EVENTS = content.events || [];
  const STFI_RULES_DATA = content.rules || [];
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div
      className="animate-fade-in"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.88)',
        backdropFilter: 'blur(10px)',
        zIndex: 9990,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        className="animate-modal"
        style={{
          backgroundColor: '#121215',
          color: '#ffffff',
          width: '100%',
          maxWidth: '980px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          padding: '36px',
          borderRadius: '20px',
          border: '1px solid #282830',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#fff',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
        >
          <X style={{ fontSize: 20 }} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <Award style={{ fontSize: 24, color: 'var(--brand-yellow)' }} />
            <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-yellow)' }}>
              Official Federation Disclosure Portal
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, margin: 0, fontFamily: 'var(--font-helvetica-now-display-medium)' }}>
            SepakTakraw Federation of India (STFI)
          </h2>
          <p style={{ color: '#a0a0aa', fontSize: '14px', marginTop: '6px', lineHeight: 1.5 }}>
            Recognized National Sports Federation • Ministry of Youth Affairs &amp; Sports (MYAS) | Affiliated with ISTAF &amp; ASTAF
          </p>
        </div>

        {/* Portal Navigation Tabs */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #24242c', paddingBottom: '14px', marginBottom: '28px', overflowX: 'auto', flexWrap: 'wrap' }}>
          {[
            { id: 'overview', label: 'Overview & History' },
            { id: 'myas', label: 'MYAS Compliance (28 Disclosures)' },
            { id: 'rules', label: 'Rules & Regulations' },
            { id: 'events', label: 'Championship Events' },
            { id: 'governance', label: 'RTI & Elections 2024-2028' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '10px 22px',
                borderRadius: '30px',
                border: activeTab === tab.id ? '1px solid var(--brand-yellow)' : '1px solid #282830',
                backgroundColor: activeTab === tab.id ? 'var(--brand-yellow)' : 'rgba(255, 255, 255, 0.05)',
                color: activeTab === tab.id ? '#0a0a0b' : '#d0d0d8',
                fontSize: '13.5px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#e0e0e8', margin: 0 }}>
              The SepakTakraw Federation of India (STFI) is the recognized National Sports Federation governing the sport of SepakTakraw in India. STFI promotes grassroots development, selection of national teams, rules compliance, and representation at the Asian Games, World Championships, and Asian Championships.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
              <div style={{ padding: '24px', backgroundColor: '#18181c', borderRadius: '12px', border: '1px solid #282830' }}>
                <ShieldCheck style={{ fontSize: 28, color: 'var(--brand-green)', marginBottom: '10px' }} />
                <h4 style={{ fontWeight: 800, fontSize: '17px', marginBottom: '6px', margin: 0 }}>MYAS Recognition</h4>
                <p style={{ fontSize: '13.5px', color: '#a0a0aa', lineHeight: 1.5, marginTop: 4 }}>Full compliance with National Sports Code 2011 and MYAS directives.</p>
              </div>

              <div style={{ padding: '24px', backgroundColor: '#18181c', borderRadius: '12px', border: '1px solid #282830' }}>
                <Award style={{ fontSize: 28, color: 'var(--brand-yellow)', marginBottom: '10px' }} />
                <h4 style={{ fontWeight: 800, fontSize: '17px', marginBottom: '6px', margin: 0 }}>ISTAF &amp; ASTAF Affiliation</h4>
                <p style={{ fontSize: '13.5px', color: '#a0a0aa', lineHeight: 1.5, marginTop: 4 }}>Official member of Asian &amp; International Sepaktakraw Federations.</p>
              </div>
            </div>

            <div>
              <a
                href={content.meta.externalSite}
                target="_blank"
                rel="noreferrer"
                className="btn-pill btn-yellow"
                style={{ display: 'inline-flex', gap: '8px', alignItems: 'center', fontWeight: 700 }}
              >
                <span>Visit {content.meta.externalSite.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                <ExternalLink style={{ fontSize: 16 }} />
              </a>
            </div>
          </div>
        )}

        {/* Tab 2: MYAS 28 Compliance Disclosures */}
        {activeTab === 'myas' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, margin: 0, color: '#fff' }}>MYAS Mandatory Disclosures (28 Sections)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '16px' }}>
              {STFI_MYAS_28_SECTIONS.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: '20px',
                    border: '1px solid #282832',
                    borderRadius: '12px',
                    backgroundColor: '#18181c',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '12px',
                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = 'var(--brand-yellow)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#282832';
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0', lineHeight: 1.35 }}>{item.title}</h4>
                    <p style={{ fontSize: '13px', color: '#a0a0aa', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                  <button
                    onClick={() => alert(`Downloading MYAS Section Document: ${item.title}`)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--brand-yellow)',
                      fontWeight: 700,
                      fontSize: '12.5px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: 0,
                    }}
                  >
                    <DownloadIcon style={{ fontSize: 15 }} />
                    <span>Download Official PDF Document</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Playing Rules */}
        {activeTab === 'rules' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, margin: 0 }}>Official Playing Rules &amp; Formats</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
              {STFI_RULES_DATA.map((rule, idx) => (
                <div key={idx} style={{ padding: '24px', border: '1px solid #282832', borderRadius: '12px', backgroundColor: '#18181c' }}>
                  <h4 style={{ fontWeight: 800, fontSize: '17px', marginBottom: '6px', margin: 0 }}>{rule.title}</h4>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--brand-yellow)', display: 'block', margin: '6px 0 10px 0', textTransform: 'uppercase' }}>
                    {rule.players}
                  </span>
                  <p style={{ fontSize: '13.5px', color: '#a0a0aa', lineHeight: 1.5, margin: 0 }}>{rule.description}</p>
                  <button
                    onClick={() => alert(`Downloading official PDF for ${rule.title}...`)}
                    style={{ marginTop: '14px', background: 'none', border: 'none', color: '#ffffff', fontWeight: 700, fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
                  >
                    <DownloadIcon style={{ fontSize: 16, color: 'var(--brand-yellow)' }} />
                    <span>Download Rulebook PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Events */}
        {activeTab === 'events' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, margin: 0 }}>National Championship Calendar</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {STFI_EVENTS.map((evt) => (
                <div key={evt.id} style={{ padding: '22px', border: '1px solid #282832', borderRadius: '12px', backgroundColor: '#18181c', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--brand-yellow)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{evt.category}</span>
                    <h4 style={{ fontWeight: 800, fontSize: '18px', margin: '4px 0 6px 0' }}>{evt.name}</h4>
                    <p style={{ fontSize: '13.5px', color: '#a0a0aa', margin: 0 }}>{evt.venue} • {evt.events}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '14px', backgroundColor: 'rgba(255, 199, 44, 0.1)', border: '1px solid rgba(255, 199, 44, 0.25)', color: 'var(--brand-yellow)', padding: '10px 18px', borderRadius: '30px' }}>
                    <Calendar style={{ fontSize: 18 }} />
                    <span>{evt.dates}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Governance, RTI & Elections */}
        {activeTab === 'governance' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, margin: 0 }}>RTI &amp; Elections (2024–2028 Term)</h3>
            <div style={{ padding: '24px', backgroundColor: '#18181c', borderRadius: '12px', border: '1px solid #282832' }}>
              <h4 style={{ fontWeight: 800, fontSize: '17px', marginBottom: '8px', margin: 0 }}>RTI Public Information Officer</h4>
              <p style={{ fontSize: '14px', color: '#a0a0aa', lineHeight: 1.6, marginTop: 6 }}>
                Under the Right to Information Act, citizens may file RTI applications regarding federation disclosures, grants, or selection criteria.
              </p>
              <div style={{ marginTop: '14px', fontSize: '14px', fontWeight: 700, color: '#ffffff', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div>Public Information Officer: {content.contact.rtiOfficer}</div>
                <div>Official Email: {content.contact.rtiEmail}</div>
              </div>
            </div>

            <div style={{ padding: '24px', backgroundColor: '#18181c', borderRadius: '12px', border: '1px solid #282832' }}>
              <h4 style={{ fontWeight: 800, fontSize: '17px', marginBottom: '8px', margin: 0 }}>Executive Body Elections 2024–2028</h4>
              <p style={{ fontSize: '14px', color: '#a0a0aa', lineHeight: 1.6, marginTop: 6 }}>
                View election notification, returning officer reports, electoral list, and nomination details.
              </p>
              <button
                onClick={() => alert('Downloading STFI Electoral Roll & Election Guidelines PDF...')}
                className="btn-pill btn-yellow btn-sm"
                style={{ marginTop: '14px', fontWeight: 700 }}
              >
                Download Electoral Roll PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
