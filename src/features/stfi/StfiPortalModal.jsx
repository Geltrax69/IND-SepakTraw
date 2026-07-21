import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Calendar, Award, ExternalLink, ChevronRight, Mail, MapPin } from 'lucide-react';
import { PillButton } from '../../components/ui/PillButton';
import { useContent } from '../../content/ContentContext';

export const StfiPortalModal = ({ isOpen, onClose, initialTab = 'overview' }) => {
  const { content } = useContent();
  const STFI_MYAS_28_SECTIONS = content.myas;
  const STFI_EVENTS = content.events;
  const STFI_RULES_DATA = content.rules;
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
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        className="animate-modal"
        style={{
          backgroundColor: 'var(--surface-paper-white)',
          width: '100%',
          maxWidth: '960px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          padding: '36px',
          border: '1px solid var(--color-concrete-gray)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', cursor: 'pointer', zIndex: 10 }}
        >
          <X size={24} color="var(--color-obsidian)" />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <Award size={24} color="var(--color-obsidian)" />
            <span className="label-uppercase" style={{ color: 'var(--color-steel)' }}>Official Federation Disclosure Portal</span>
          </div>
          <h2 className="heading-lg" style={{ fontSize: '32px' }}>
            SepakTakraw Federation of India (STFI)
          </h2>
          <p style={{ color: 'var(--color-steel)', fontSize: '14px', marginTop: '4px' }}>
            Recognized by Ministry of Youth Affairs & Sports (MYAS), Govt of India | Affiliated with ISTAF & ASTAF
          </p>
        </div>

        {/* Portal Navigation Tabs */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--color-concrete-gray)', paddingBottom: '12px', marginBottom: '24px', overflowX: 'auto' }} className="no-scrollbar">
          {[
            { id: 'overview', label: 'Overview & History' },
            { id: 'myas', label: 'MYAS Compliance (28)' },
            { id: 'rules', label: 'Rules & Regulations' },
            { id: 'events', label: 'Championship Events' },
            { id: 'governance', label: 'RTI & Elections 2024-2028' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-buttons)',
                border: 'none',
                backgroundColor: activeTab === tab.id ? 'var(--color-obsidian)' : 'var(--surface-soft-mist)',
                color: activeTab === tab.id ? 'var(--color-paper-white)' : 'var(--color-obsidian)',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--color-obsidian)' }}>
              The SepakTakraw Federation of India (STFI) is the recognized National Sports Federation governing the sport of SepakTakraw in India. STFI promotes grassroot development, selection of national teams, rules compliance, and representation at the Asian Games, World Championships, and Asian Championships.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              <div style={{ padding: '20px', backgroundColor: 'var(--surface-soft-mist)', borderRadius: '4px' }}>
                <ShieldCheck size={24} color="var(--color-obsidian)" style={{ marginBottom: '8px' }} />
                <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>MYAS Recognition</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-steel)', lineHeight: 1.5 }}>Compliance with National Sports Code and Ministry directives.</p>
              </div>

              <div style={{ padding: '20px', backgroundColor: 'var(--surface-soft-mist)', borderRadius: '4px' }}>
                <Award size={24} color="var(--color-obsidian)" style={{ marginBottom: '8px' }} />
                <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>ISTAF & ASTAF Affiliation</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-steel)', lineHeight: 1.5 }}>Official member of Asian & International Sepaktakraw Federations.</p>
              </div>
            </div>

            <div>
              <a
                href={content.meta.externalSite}
                target="_blank"
                rel="noreferrer"
                className="btn-pill btn-obsidian"
                style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}
              >
                <span>Visit {content.meta.externalSite.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        )}

        {/* Tab 2: MYAS 28 Compliance Disclosures */}
        {activeTab === 'myas' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 className="subheading" style={{ fontSize: '20px' }}>MYAS Mandatory Disclosures (28 Sections)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
              {STFI_MYAS_28_SECTIONS.map(item => (
                <div
                  key={item.id}
                  style={{
                    padding: '16px',
                    border: '1px solid var(--color-concrete-gray)',
                    backgroundColor: 'var(--surface-paper-white)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '8px'
                  }}
                >
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-obsidian)' }}>{item.title}</h4>
                  <p style={{ fontSize: '12px', color: 'var(--color-steel)' }}>{item.desc}</p>
                  <button
                    onClick={() => alert(`Downloading MYAS Section Document: ${item.title}`)}
                    style={{ background: 'none', border: 'none', color: 'var(--color-obsidian)', fontWeight: 600, fontSize: '12px', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}
                  >
                    <span>Download Compliance Document</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Playing Rules */}
        {activeTab === 'rules' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 className="subheading" style={{ fontSize: '20px' }}>Official Playing Rules & Formats</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {STFI_RULES_DATA.map((rule, idx) => (
                <div key={idx} style={{ padding: '20px', border: '1px solid var(--color-concrete-gray)' }}>
                  <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '6px' }}>{rule.title}</h4>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-steel)', display: 'block', marginBottom: '8px' }}>
                    {rule.players}
                  </span>
                  <p style={{ fontSize: '13px', color: 'var(--color-steel)', lineHeight: 1.5 }}>{rule.description}</p>
                  <button
                    onClick={() => alert(`Downloading official PDF for ${rule.title}...`)}
                    style={{ marginTop: '12px', background: 'none', border: 'none', color: 'var(--color-obsidian)', fontWeight: 600, fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>Download Rulebook PDF</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Events */}
        {activeTab === 'events' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 className="subheading" style={{ fontSize: '20px' }}>National Championship Calendar</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {STFI_EVENTS.map(evt => (
                <div key={evt.id} style={{ padding: '20px', border: '1px solid var(--color-concrete-gray)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-steel)', textTransform: 'uppercase' }}>{evt.category}</span>
                    <h4 style={{ fontWeight: 700, fontSize: '17px', margin: '4px 0' }}>{evt.name}</h4>
                    <p style={{ fontSize: '13px', color: 'var(--color-steel)' }}>{evt.venue} • {evt.events}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '14px', backgroundColor: 'var(--surface-soft-mist)', padding: '8px 14px', borderRadius: '4px' }}>
                    <Calendar size={16} />
                    <span>{evt.dates}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Governance, RTI & Elections */}
        {activeTab === 'governance' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 className="subheading" style={{ fontSize: '20px' }}>RTI & Elections (2024–2028 Term)</h3>
            <div style={{ padding: '24px', backgroundColor: 'var(--surface-soft-mist)', borderRadius: '4px' }}>
              <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>RTI Public Information Officer</h4>
              <p style={{ fontSize: '14px', color: 'var(--color-steel)', lineHeight: 1.6 }}>
                Under the Right to Information Act, citizens may file RTI applications regarding federation disclosures, grants, or selection criteria.
              </p>
              <div style={{ marginTop: '12px', fontSize: '14px', fontWeight: 600, color: 'var(--color-obsidian)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div>Public Information Officer: {content.contact.rtiOfficer}</div>
                <div>Official Email: {content.contact.rtiEmail}</div>
              </div>
            </div>

            <div style={{ padding: '24px', border: '1px solid var(--color-concrete-gray)', borderRadius: '4px' }}>
              <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>Executive Body Elections 2024–2028</h4>
              <p style={{ fontSize: '14px', color: 'var(--color-steel)', lineHeight: 1.6 }}>
                View election notification, returning officer reports, electoral list, and nomination details.
              </p>
              <button
                onClick={() => alert('Downloading STFI Electoral Roll & Election Guidelines PDF...')}
                className="btn-pill btn-obsidian btn-sm"
                style={{ marginTop: '12px' }}
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
