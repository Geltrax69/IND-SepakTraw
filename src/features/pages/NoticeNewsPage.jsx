import React, { useState } from 'react';
import {
  Description as FileIcon,
  GetApp as DownloadIcon,
  Search as SearchIcon,
  CheckCircle as CheckIcon,
  Close as CloseIcon,
  Campaign as AnnounceIcon
} from '@mui/icons-material';
import { useContent } from '../../content/ContentContext';

export const NoticeNewsPage = () => {
  const { content } = useContent();
  const noticesData = content.notices || [];

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [downloadNotice, setDownloadNotice] = useState(null);

  const filteredNotices = noticesData.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'results' && notice.category.toLowerCase().includes('result')) ||
      (activeTab === 'trials' && notice.category.toLowerCase().includes('trial')) ||
      (activeTab === 'circulars' && (notice.category.toLowerCase().includes('circular') || notice.category.toLowerCase().includes('championship')));

    return matchesSearch && matchesTab;
  });

  const handleDownload = (pdf) => {
    setDownloadNotice(`Downloading Official Document: ${pdf}`);
    setTimeout(() => setDownloadNotice(null), 4000);
  };

  return (
    <div style={{ backgroundColor: '#0b0c10', color: '#f0f2f5', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header Banner */}
      <section className="page-header" style={{ backgroundColor: '#12141c', borderBottom: '1px solid #222634', padding: '60px 24px 48px' }}>
        <div className="max-width-container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '30px', backgroundColor: 'rgba(255, 199, 44, 0.12)', border: '1px solid rgba(255, 199, 44, 0.3)', color: '#ffc72c', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
            <AnnounceIcon style={{ fontSize: 16 }} />
            <span>Official Federation Notices &amp; Championship Results</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0, color: '#ffffff', fontFamily: 'var(--font-nike-futura-nd, sans-serif)' }}>
            Notices &amp; <span style={{ color: '#ffc72c' }}>Circulars</span>
          </h1>

          <p style={{ color: '#a0a5b5', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: '12px', maxWidth: '820px', lineHeight: 1.6 }}>
            Official notices, championship results, team merit standings, selection trial criteria, and MYAS administrative notifications.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-width-container" style={{ marginTop: '40px' }}>
        {/* Search & Filter Toolbar */}
        <div style={{ backgroundColor: '#12141c', padding: '24px', borderRadius: '16px', border: '1px solid #222634', marginBottom: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <SearchIcon style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#ffc72c', fontSize: 22 }} />
              <input
                type="text"
                placeholder="Search circulars, results, or selection trials by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', backgroundColor: '#0b0c10', border: '1px solid #292d3e', borderRadius: '10px', padding: '14px 16px 14px 50px', color: '#ffffff', fontSize: '15px', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Circulars & Results' },
                { id: 'results', label: 'Championship Results' },
                { id: 'trials', label: 'Selection Trials' },
                { id: 'circulars', label: 'National Circulars' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '25px',
                    border: activeTab === tab.id ? '1px solid #ffc72c' : '1px solid #292d3e',
                    backgroundColor: activeTab === tab.id ? '#ffc72c' : 'rgba(255, 255, 255, 0.04)',
                    color: activeTab === tab.id ? '#0a0a0b' : '#c0c5d0',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

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

        {/* Notices Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              style={{
                backgroundColor: '#12141c',
                border: '1px solid #222634',
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '18px',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#ffc72c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#222634';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#ffc72c', backgroundColor: 'rgba(255,199,44,0.1)', padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    {notice.badge || notice.category}
                  </span>
                  <span style={{ fontSize: '12px', color: '#888e9e', fontWeight: 600 }}>{notice.date}</span>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', margin: '0 0 10px 0', lineHeight: 1.4 }}>
                  {notice.title}
                </h3>

                <p style={{ fontSize: '13.5px', color: '#a0a5b5', margin: 0, lineHeight: 1.6 }}>
                  {notice.desc}
                </p>
              </div>

              <button
                onClick={() => handleDownload(notice.documentPdf)}
                style={{
                  backgroundColor: '#ffc72c',
                  color: '#0a0a0b',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '10px 18px',
                  fontSize: '13px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <DownloadIcon style={{ fontSize: 16 }} />
                <span>Download Official PDF Circular</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
