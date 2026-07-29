import React, { useState } from 'react';
import {
  VerifiedUser as ShieldCheck,
  GetApp as DownloadIcon,
  Search as SearchIcon,
  Description as FileText,
  Gavel as GavelIcon,
  AccountBalance as BankIcon,
  Assignment as TaskIcon,
  CheckCircle as CheckIcon,
  OpenInNew as ExternalLink,
  InfoOutlined as InfoIcon,
  Close as CloseIcon
} from '@mui/icons-material';
import { useContent } from '../../content/ContentContext';

export const MyasCompliancePage = ({ onOpenPortal }) => {
  const { content } = useContent();
  const myasData = content.myas || [];

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [previewDoc, setPreviewDoc] = useState(null);
  const [downloadNotice, setDownloadNotice] = useState(null);

  // Groupings for disclosures
  const getCategoryForId = (id) => {
    if ([1, 3, 8, 9, 10, 11, 12].includes(id)) return 'constitution';
    if ([2, 4, 19, 24, 28].includes(id)) return 'elections';
    if ([6, 7, 21, 22, 23].includes(id)) return 'financials';
    if ([5, 13, 14, 15, 25, 26, 27].includes(id)) return 'events';
    if ([16, 17, 18, 20].includes(id)) return 'integrity';
    return 'constitution';
  };

  const filteredDisclosures = myasData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(item.id).includes(searchQuery);

    const cat = getCategoryForId(item.id);
    const matchesCategory = activeCategory === 'all' || cat === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const handleDownload = (item) => {
    setDownloadNotice(`Downloading MYAS Compliance Document: Section ${item.id} - ${item.title}`);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 4000);
  };

  return (
    <div style={{ backgroundColor: '#0b0c10', color: '#f0f2f5', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Top Banner / Hero */}
      <section className="page-header" style={{ backgroundColor: '#12141c', borderBottom: '1px solid #222634', padding: '60px 24px 48px' }}>
        <div className="max-width-container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '30px', backgroundColor: 'rgba(255, 199, 44, 0.12)', border: '1px solid rgba(255, 199, 44, 0.3)', color: '#ffc72c', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
            <ShieldCheck style={{ fontSize: 16 }} />
            <span>Ministry of Youth Affairs &amp; Sports (MYAS) Governance Portal</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0, color: '#ffffff', fontFamily: 'var(--font-nike-futura-nd, sans-serif)' }}>
            MYAS Compliance <span style={{ color: '#ffc72c' }}>(28 Disclosures)</span>
          </h1>

          <p style={{ color: '#a0a5b5', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: '12px', maxWidth: '820px', lineHeight: 1.6 }}>
            Mandatory disclosures in strict compliance with the National Sports Development Code of India 2011, MYAS recognition directives, and Sports Authority of India (SAI) transparency guidelines.
          </p>

          {/* Compliance Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '36px' }}>
            <div style={{ backgroundColor: '#181b26', padding: '20px', borderRadius: '12px', border: '1px solid #292d3e' }}>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#ffc72c' }}>28 / 28</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>Mandatory Disclosures</div>
              <div style={{ fontSize: '12px', color: '#888e9e', marginTop: '2px' }}>100% Up to Date (FY 2026-27)</div>
            </div>

            <div style={{ backgroundColor: '#181b26', padding: '20px', borderRadius: '12px', border: '1px solid #292d3e' }}>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#00a651' }}>ACTIVE</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>MYAS Recognition</div>
              <div style={{ fontSize: '12px', color: '#888e9e', marginTop: '2px' }}>Govt. of India Certified NSF</div>
            </div>

            <div style={{ backgroundColor: '#181b26', padding: '20px', borderRadius: '12px', border: '1px solid #292d3e' }}>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#ffc72c' }}>2024–2028</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>Elected Executive Body</div>
              <div style={{ fontSize: '12px', color: '#888e9e', marginTop: '2px' }}>Returning Officer Certified</div>
            </div>

            <div style={{ backgroundColor: '#181b26', padding: '20px', borderRadius: '12px', border: '1px solid #292d3e' }}>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#3898ec' }}>NADA / WADA</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>Anti-Doping Compliant</div>
              <div style={{ fontSize: '12px', color: '#888e9e', marginTop: '2px' }}>Zero Tolerance Policy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-width-container" style={{ marginTop: '40px' }}>
        {/* Search & Category Filter Toolbar */}
        <div style={{ backgroundColor: '#12141c', padding: '24px', borderRadius: '16px', border: '1px solid #222634', marginBottom: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', width: '100%' }}>
              <SearchIcon style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#ffc72c', fontSize: 22 }} />
              <input
                type="text"
                placeholder="Search disclosures by section number, keyword (e.g. Auditor, ACTC, Elections, Constitution)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: '#0b0c10',
                  border: '1px solid #292d3e',
                  borderRadius: '10px',
                  padding: '14px 16px 14px 50px',
                  color: '#ffffff',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={(e) => e.target.style.borderColor = '#ffc72c'}
                onBlur={(e) => e.target.style.borderColor = '#292d3e'}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#888e9e', cursor: 'pointer' }}
                >
                  <CloseIcon style={{ fontSize: 18 }} />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: `All Disclosures (${myasData.length})` },
                { id: 'constitution', label: 'Constitution & Legal' },
                { id: 'elections', label: 'Elections & Committee' },
                { id: 'financials', label: 'Financials & Audit' },
                { id: 'events', label: 'ACTC & Events' },
                { id: 'integrity', label: 'Anti-Doping & Integrity' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '25px',
                    border: activeCategory === cat.id ? '1px solid #ffc72c' : '1px solid #292d3e',
                    backgroundColor: activeCategory === cat.id ? '#ffc72c' : 'rgba(255, 255, 255, 0.04)',
                    color: activeCategory === cat.id ? '#0a0a0b' : '#c0c5d0',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Download Toast Notification */}
        {downloadNotice && (
          <div className="toast-banner" style={{ backgroundColor: '#00a651', color: '#ffffff', padding: '14px 20px', borderRadius: '10px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 700, boxShadow: '0 8px 24px rgba(0, 166, 81, 0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckIcon />
              <span>{downloadNotice}</span>
            </div>
            <button onClick={() => setDownloadNotice(null)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
              <CloseIcon style={{ fontSize: 18 }} />
            </button>
          </div>
        )}

        {/* Disclosures Count Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: 0 }}>
            Showing {filteredDisclosures.length} of {myasData.length} Mandatory Disclosures
          </h2>
          <button
            onClick={() => onOpenPortal && onOpenPortal('myas')}
            style={{ background: 'none', border: 'none', color: '#ffc72c', fontSize: '13px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Open Quick Portal Modal</span>
            <ExternalLink style={{ fontSize: 16 }} />
          </button>
        </div>

        {/* 28 Disclosures Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
          {filteredDisclosures.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#12141c',
                border: '1px solid #222634',
                borderRadius: '14px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px',
                transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#ffc72c';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#222634';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                {/* Section Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#ffc72c', backgroundColor: 'rgba(255, 199, 44, 0.1)', border: '1px solid rgba(255, 199, 44, 0.25)', padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Section {item.id < 10 ? `0${item.id}` : item.id}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#00a651', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckIcon style={{ fontSize: 14 }} /> Verified PDF
                  </span>
                </div>

                {/* Title & Description */}
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#ffffff', margin: '0 0 10px 0', lineHeight: 1.4 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: '#a0a5b5', margin: 0, lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ borderTop: '1px solid #1e2230', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <button
                  onClick={() => setPreviewDoc(item)}
                  style={{ background: 'none', border: 'none', color: '#888e9e', fontSize: '13px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <InfoIcon style={{ fontSize: 16 }} />
                  <span>Details</span>
                </button>

                <button
                  onClick={() => handleDownload(item)}
                  style={{
                    backgroundColor: '#ffc72c',
                    color: '#0a0a0b',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '8px 16px',
                    fontSize: '12.5px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'transform 0.15s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <DownloadIcon style={{ fontSize: 16 }} />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RTI & Legal Officer Information Footer Section */}
        <div style={{ marginTop: '48px', backgroundColor: '#12141c', border: '1px solid #222634', borderRadius: '16px', padding: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <GavelIcon style={{ fontSize: 28, color: '#ffc72c' }} />
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: 0 }}>Right to Information (RTI) Act Compliance Cell</h3>
              <p style={{ fontSize: '13.5px', color: '#a0a5b5', margin: '4px 0 0 0' }}>Under Section 4(1)(b) of the RTI Act 2005, citizens may request certified records or federation disclosures.</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '20px', backgroundColor: '#0b0c10', padding: '20px', borderRadius: '12px', border: '1px solid #222634' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#ffc72c', textTransform: 'uppercase' }}>Public Information Officer (PIO)</div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', marginTop: '4px' }}>{content.contact.rtiOfficer}</div>
              <div style={{ fontSize: '13px', color: '#a0a5b5', marginTop: '2px' }}>Email: {content.contact.rtiEmail}</div>
            </div>

            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#ffc72c', textTransform: 'uppercase' }}>First Appellate Authority</div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', marginTop: '4px' }}>President / Hony. General Secretary, STFI</div>
              <div style={{ fontSize: '13px', color: '#a0a5b5', marginTop: '2px' }}>Federation Headquarters, New Delhi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Detail Preview Modal */}
      {previewDoc && (
        <div
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
          onClick={() => setPreviewDoc(null)}
        >
          <div
            style={{ backgroundColor: '#12141c', border: '1px solid #292d3e', borderRadius: '16px', padding: '32px', maxWidth: '540px', width: '100%', color: '#fff', position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewDoc(null)}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
            >
              <CloseIcon />
            </button>

            <span style={{ fontSize: '11px', fontWeight: 800, color: '#ffc72c', textTransform: 'uppercase' }}>
              OFFICIAL MYAS DISCLOSURE ITEM #{previewDoc.id}
            </span>
            <h3 style={{ fontSize: '22px', fontWeight: 800, marginTop: '8px', marginBottom: '12px' }}>{previewDoc.title}</h3>
            <p style={{ fontSize: '14px', color: '#a0a5b5', lineHeight: 1.6 }}>{previewDoc.desc}</p>

            <div style={{ marginTop: '24px', backgroundColor: '#0b0c10', padding: '16px', borderRadius: '10px', border: '1px solid #222634', fontSize: '13px', color: '#d0d5e0' }}>
              <div><strong>Document Reference:</strong> STFI/MYAS/2026/SEC-{previewDoc.id}</div>
              <div style={{ marginTop: '6px' }}><strong>Verification Authority:</strong> Ministry of Youth Affairs &amp; Sports</div>
              <div style={{ marginTop: '6px' }}><strong>Status:</strong> Verified &amp; Publicly Audited</div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setPreviewDoc(null)}
                style={{ backgroundColor: 'transparent', border: '1px solid #292d3e', color: '#fff', padding: '10px 20px', borderRadius: '30px', fontWeight: 700, cursor: 'pointer' }}
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleDownload(previewDoc);
                  setPreviewDoc(null);
                }}
                style={{ backgroundColor: '#ffc72c', color: '#0a0a0b', border: 'none', padding: '10px 22px', borderRadius: '30px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <DownloadIcon style={{ fontSize: 16 }} />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
