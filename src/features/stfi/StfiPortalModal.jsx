import React, { useState, useEffect } from 'react';
import {
  Close as X,
  VerifiedUser as ShieldCheck,
  Description as FileText,
  Event as Calendar,
  EmojiEvents as Award,
  Launch as ExternalLink,
  GetApp as DownloadIcon,
  Search as SearchIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';
import { useContent } from '../../content/ContentContext';

export const StfiPortalModal = ({ isOpen, onClose, initialTab = 'overview' }) => {
  const { content } = useContent();
  const STFI_MYAS_28_SECTIONS = content.myas || [];
  const STFI_EVENTS = content.events || [];
  const STFI_RULES_DATA = content.rules || [];

  const [activeTab, setActiveTab] = useState(initialTab);
  const [modalSearch, setModalSearch] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  const triggerDownload = (title) => {
    setToastMessage(`Downloading official document: ${title}`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const filteredMyas = STFI_MYAS_28_SECTIONS.filter(
    (item) =>
      item.title.toLowerCase().includes(modalSearch.toLowerCase()) ||
      item.desc.toLowerCase().includes(modalSearch.toLowerCase()) ||
      String(item.id).includes(modalSearch)
  );

  return (
    <div
      className="animate-fade-in"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 6, 9, 0.88)',
        backdropFilter: 'blur(12px)',
        zIndex: 9995,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
      onClick={onClose}
    >
      <div
        className="animate-modal"
        style={{
          backgroundColor: '#12141c',
          color: '#ffffff',
          width: '100%',
          maxWidth: '1020px',
          maxHeight: '92vh',
          overflowY: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          padding: ' clamp(24px, 4vw, 40px)',
          borderRadius: '24px',
          border: '1px solid #282c3c',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95)',
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
            zIndex: 20,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#ffc72c';
            e.currentTarget.style.color = '#0a0a0b';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.color = '#fff';
          }}
        >
          <X style={{ fontSize: 22 }} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <Award style={{ fontSize: 24, color: '#ffc72c' }} />
            <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#ffc72c' }}>
              Official Federation Quick Disclosure Portal
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, margin: 0, color: '#ffffff', textTransform: 'uppercase' }}>
            SepakTakraw Federation of India (STFI)
          </h2>
          <p style={{ color: '#a0a5b5', fontSize: '14px', marginTop: '6px', lineHeight: 1.5 }}>
            Recognized National Sports Federation • Ministry of Youth Affairs &amp; Sports (MYAS) | Affiliated with ISTAF &amp; ASTAF
          </p>
        </div>

        {/* Modal Tabs Navigation */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #222634', paddingBottom: '16px', marginBottom: '24px', overflowX: 'auto', flexWrap: 'nowrap' }}>
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'myas', label: 'MYAS 28 Disclosures' },
            { id: 'events', label: 'Championship Events' },
            { id: 'rules', label: 'Playing Rules' },
            { id: 'governance', label: 'RTI & Elections' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '10px 20px',
                borderRadius: '30px',
                border: activeTab === tab.id ? '1px solid #ffc72c' : '1px solid #282c3c',
                backgroundColor: activeTab === tab.id ? '#ffc72c' : 'rgba(255, 255, 255, 0.05)',
                color: activeTab === tab.id ? '#0a0a0b' : '#d0d5e0',
                fontSize: '13.5px',
                fontWeight: 800,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Download Toast Notification inside modal */}
        {toastMessage && (
          <div style={{ backgroundColor: '#00a651', color: '#fff', padding: '12px 18px', borderRadius: '10px', marginBottom: '20px', fontSize: '13.5px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckIcon style={{ fontSize: 18 }} />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#d0d5e0', margin: 0 }}>
              The SepakTakraw Federation of India (STFI) is the National Governing Body recognized by the Ministry of Youth Affairs &amp; Sports (MYAS), Government of India, and affiliated with the International Sepaktakraw Federation (ISTAF) &amp; Asian Sepaktakraw Federation (ASTAF).
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
              <div style={{ padding: '24px', backgroundColor: '#181b26', borderRadius: '14px', border: '1px solid #282c3c' }}>
                <ShieldCheck style={{ fontSize: 32, color: '#00a651', marginBottom: '10px' }} />
                <h4 style={{ fontWeight: 800, fontSize: '17px', margin: '0 0 6px 0', color: '#fff' }}>MYAS Recognition</h4>
                <p style={{ fontSize: '13.5px', color: '#a0a5b5', lineHeight: 1.5, margin: 0 }}>100% compliance with National Sports Development Code 2011.</p>
              </div>

              <div style={{ padding: '24px', backgroundColor: '#181b26', borderRadius: '14px', border: '1px solid #282c3c' }}>
                <Award style={{ fontSize: 32, color: '#ffc72c', marginBottom: '10px' }} />
                <h4 style={{ fontWeight: 800, fontSize: '17px', margin: '0 0 6px 0', color: '#fff' }}>ISTAF &amp; ASTAF Affiliation</h4>
                <p style={{ fontSize: '13.5px', color: '#a0a5b5', lineHeight: 1.5, margin: 0 }}>Official voting member representing India at World Championships &amp; Asian Games.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: MYAS 28 Compliance Disclosures */}
        {activeTab === 'myas' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, margin: 0, color: '#fff' }}>MYAS Mandatory Disclosures (28 Sections)</h3>
              <div style={{ position: 'relative', width: '280px' }}>
                <SearchIcon style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#ffc72c', fontSize: 18 }} />
                <input
                  type="text"
                  placeholder="Filter section..."
                  value={modalSearch}
                  onChange={(e) => setModalSearch(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#181b26', border: '1px solid #282c3c', borderRadius: '20px', padding: '8px 12px 8px 36px', color: '#fff', fontSize: '13px', outline: 'none' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
              {filteredMyas.map((item) => (
                <div
                  key={item.id}
                  style={{
                    padding: '20px',
                    border: '1px solid #282c3c',
                    borderRadius: '14px',
                    backgroundColor: '#181b26',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '14px',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#ffc72c', textTransform: 'uppercase' }}>Section {item.id}</span>
                    <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', margin: '4px 0 6px 0', lineHeight: 1.35 }}>{item.title}</h4>
                    <p style={{ fontSize: '13px', color: '#a0a5b5', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>

                  <button
                    onClick={() => triggerDownload(item.title)}
                    style={{
                      backgroundColor: 'rgba(255, 199, 44, 0.12)',
                      border: '1px solid rgba(255, 199, 44, 0.3)',
                      color: '#ffc72c',
                      borderRadius: '20px',
                      padding: '8px 14px',
                      fontWeight: 800,
                      fontSize: '12px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      width: 'fit-content',
                    }}
                  >
                    <DownloadIcon style={{ fontSize: 15 }} />
                    <span>Download PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Championship Events */}
        {activeTab === 'events' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, margin: 0, color: '#fff' }}>National Championship Calendar</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {STFI_EVENTS.map((evt) => (
                <div key={evt.id} style={{ padding: '22px', border: '1px solid #282c3c', borderRadius: '14px', backgroundColor: '#181b26', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#ffc72c', textTransform: 'uppercase' }}>{evt.category}</span>
                    <h4 style={{ fontWeight: 800, fontSize: '18px', margin: '4px 0 6px 0', color: '#fff' }}>{evt.name}</h4>
                    <p style={{ fontSize: '13.5px', color: '#a0a5b5', margin: 0 }}>📍 {evt.venue} • {evt.events}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#ffc72c' }}>📅 {evt.dates}</span>
                    <button
                      onClick={() => triggerDownload(`${evt.name}_Circular.pdf`)}
                      className="btn-pill btn-yellow btn-sm"
                      style={{ fontWeight: 800 }}
                    >
                      Circular PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Playing Rules */}
        {activeTab === 'rules' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, margin: 0, color: '#fff' }}>Official Playing Rules</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
              {STFI_RULES_DATA.map((rule, idx) => (
                <div key={idx} style={{ padding: '24px', border: '1px solid #282c3c', borderRadius: '14px', backgroundColor: '#181b26' }}>
                  <h4 style={{ fontWeight: 800, fontSize: '17px', margin: '0 0 6px 0', color: '#fff' }}>{rule.title}</h4>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffc72c', margin: '4px 0 10px 0' }}>{rule.players}</div>
                  <p style={{ fontSize: '13.5px', color: '#a0a5b5', lineHeight: 1.5, margin: 0 }}>{rule.description}</p>
                  <button
                    onClick={() => triggerDownload(rule.title)}
                    style={{ marginTop: '16px', backgroundColor: '#ffc72c', color: '#0a0a0b', border: 'none', borderRadius: '20px', padding: '8px 16px', fontSize: '12px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <DownloadIcon style={{ fontSize: 15 }} />
                    <span>Download Rulebook PDF</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Governance */}
        {activeTab === 'governance' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, margin: 0, color: '#fff' }}>RTI &amp; Executive Body Elections (2024–2028)</h3>
            <div style={{ padding: '24px', backgroundColor: '#181b26', borderRadius: '14px', border: '1px solid #282c3c' }}>
              <h4 style={{ fontWeight: 800, fontSize: '17px', margin: '0 0 8px 0', color: '#fff' }}>RTI Public Information Officer</h4>
              <p style={{ fontSize: '14px', color: '#a0a5b5', lineHeight: 1.6, margin: 0 }}>
                Under Section 4(1)(b) of the Right to Information Act, citizens may request certified records.
              </p>
              <div style={{ marginTop: '14px', fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>
                PIO: {content.contact.rtiOfficer} | Email: {content.contact.rtiEmail}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
