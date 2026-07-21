import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Calendar, Award, ExternalLink, ChevronRight } from 'lucide-react';
import { STFI_FEDERATION_DATA } from '../../data/nikeData';
import { PillButton } from '../../components/ui/PillButton';

export const StfiPortalModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

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
          maxWidth: '920px',
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
        {/* Close Modal */}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <X size={24} color="var(--color-obsidian)" />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <Award size={24} color="var(--color-obsidian)" />
            <span className="label-uppercase" style={{ color: 'var(--color-steel)' }}>Official Federation Portal</span>
          </div>
          <h2 className="heading-lg" style={{ fontSize: '32px' }}>
            {STFI_FEDERATION_DATA.name}
          </h2>
          <p style={{ color: 'var(--color-steel)', fontSize: '14px', marginTop: '4px' }}>
            Recognized by Ministry of Youth Affairs & Sports (MYAS) | Affiliated with ISTAF & ASTAF
          </p>
        </div>

        {/* Portal Navigation Tabs */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--color-concrete-gray)', paddingBottom: '12px', marginBottom: '24px', overflowX: 'auto' }} className="no-scrollbar">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'rules', label: 'Rules & Regulations' },
            { id: 'myas', label: 'MYAS Compliance (28)' },
            { id: 'events', label: 'Events & Championships' },
            { id: 'governance', label: 'Elections & RTI' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '8px 16px',
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

        {/* Tab Content 1: Overview */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--color-obsidian)' }}>
              The SepakTakraw Federation of India (STFI) is the sole national governing body responsible for promoting, regulating, and advancing the sport of SepakTakraw in India.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div style={{ padding: '20px', backgroundColor: 'var(--surface-soft-mist)', borderRadius: '4px' }}>
                <ShieldCheck size={24} color="var(--color-obsidian)" style={{ marginBottom: '8px' }} />
                <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>MYAS Recognized</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-steel)' }}>Full compliance with National Sports Development Code of India.</p>
              </div>

              <div style={{ padding: '20px', backgroundColor: 'var(--surface-soft-mist)', borderRadius: '4px' }}>
                <Award size={24} color="var(--color-obsidian)" style={{ marginBottom: '8px' }} />
                <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>ISTAF & ASTAF Member</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-steel)' }}>Direct affiliation for Asian Games & World Championship participation.</p>
              </div>

              <div style={{ padding: '20px', backgroundColor: 'var(--surface-soft-mist)', borderRadius: '4px' }}>
                <FileText size={24} color="var(--color-obsidian)" style={{ marginBottom: '8px' }} />
                <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>Anti-Doping Compliant</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-steel)' }}>Strict adherence to NADA & WADA clean sport directives.</p>
              </div>
            </div>

            <div style={{ marginTop: '12px' }}>
              <a
                href={STFI_FEDERATION_DATA.website}
                target="_blank"
                rel="noreferrer"
                className="btn-pill btn-obsidian"
                style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}
              >
                <span>Visit Official STFI Website</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        )}

        {/* Tab Content 2: Rules & Regulations */}
        {activeTab === 'rules' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 className="subheading" style={{ fontSize: '20px' }}>Official Playing Rules & Event Formats</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {STFI_FEDERATION_DATA.rules.map((rule, idx) => (
                <div key={idx} style={{ padding: '20px', border: '1px solid var(--color-concrete-gray)', borderRadius: '4px' }}>
                  <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '6px' }}>{rule.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--color-steel)', lineHeight: 1.5 }}>{rule.desc}</p>
                  <button
                    onClick={() => alert(`Downloading official ${rule.title} PDF rulebook...`)}
                    style={{ marginTop: '12px', background: 'none', border: 'none', color: 'var(--color-obsidian)', fontWeight: 600, fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>Download Official PDF</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 3: MYAS Compliance */}
        {activeTab === 'myas' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 className="subheading" style={{ fontSize: '20px' }}>MYAS Compliance Disclosures (28 Sections)</h3>
            <p style={{ fontSize: '14px', color: 'var(--color-steel)' }}>
              Mandatory disclosures under the Ministry of Youth Affairs & Sports (MYAS) National Sports Federation criteria.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
              {[
                '1. Federation Info', '2. Election Details', '3. International Affiliations', '4. Office Bearers',
                '5. Annual Calendar (ACTC)', '6. Audited Accounts', '7. Auditor Details', '8. Registration Cert.',
                '9. Constitution', '10. Affiliation Criteria', '11. Affiliated Units', '12. State Associations',
                '13. National Championships', '14. International Events', '15. Core Probables', '16. Player ID Cards',
                '17. Certificates', '18. Age Fraud Prevention', '19. Selection Committee', '20. Anti Doping',
                '21. Funding Sources', '22. Revenue', '23. SAI Sanctions', '24. Executive Quota',
                '25. Training Schedule', '26. AGM Minutes', '27. Selection Minutes', '28. Committees'
              ].map((item, idx) => (
                <div key={idx} style={{ padding: '12px', backgroundColor: 'var(--surface-soft-mist)', fontSize: '13px', fontWeight: 600, borderRadius: '4px' }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 4: Events */}
        {activeTab === 'events' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 className="subheading" style={{ fontSize: '20px' }}>Upcoming STFI Championships & Camps</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {STFI_FEDERATION_DATA.upcomingEvents.map((evt, idx) => (
                <div key={idx} style={{ padding: '16px', border: '1px solid var(--color-concrete-gray)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '16px' }}>{evt.name}</h4>
                    <span style={{ fontSize: '13px', color: 'var(--color-steel)' }}>Venue: {evt.venue}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '14px' }}>
                    <Calendar size={16} />
                    <span>{evt.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 5: Governance */}
        {activeTab === 'governance' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 className="subheading" style={{ fontSize: '20px' }}>Elections (2024–2028) & RTI Disclosures</h3>
            <div style={{ padding: '20px', backgroundColor: 'var(--surface-soft-mist)', borderRadius: '4px' }}>
              <h4 style={{ fontWeight: 700, marginBottom: '6px' }}>Right to Information (RTI) Public Information Officer</h4>
              <p style={{ fontSize: '14px', color: 'var(--color-steel)' }}>
                For official RTI requests, contact the Public Information Officer & Appellate Authority at <strong style={{ color: 'var(--color-obsidian)' }}>rti@sepaktrawindia.com</strong>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
