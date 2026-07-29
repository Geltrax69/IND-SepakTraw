import React, { useState } from 'react';
import {
  Event as CalendarIcon,
  EmojiEvents as TrophyIcon,
  Place as LocationIcon,
  GetApp as DownloadIcon,
  Groups as PlayersIcon,
  Timer as ClockIcon,
  Search as SearchIcon,
  CheckCircle as CheckIcon,
  Close as CloseIcon,
  OpenInNew as ExternalLink
} from '@mui/icons-material';
import { useContent } from '../../content/ContentContext';

export const ChampionshipEventsPage = ({ onOpenPortal }) => {
  const { content } = useContent();
  const eventsData = content.events || [];
  const highlightsData = content.highlights || [];

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadNotice, setDownloadNotice] = useState(null);

  // Extended events calendar database
  const ALL_CHAMPIONSHIPS = [
    ...eventsData,
    {
      id: 'evt-5',
      name: '1st All-India Beach SepakTakraw Championship 2026',
      dates: 'December 15–18, 2026',
      venue: 'Miramar Beach Sports Arena, Panaji, Goa',
      category: 'Beach Event',
      events: 'Men & Women Sand Regu & Quad',
    },
    {
      id: 'evt-6',
      name: 'ISTAF World Cup Selection Camp & Coaching Trial',
      dates: 'January 10–20, 2027',
      venue: 'SAI Eastern Centre, Kolkata, West Bengal',
      category: 'Selection Trial',
      events: 'National Probables Squad',
    },
  ];

  const filteredEvents = ALL_CHAMPIONSHIPS.filter((evt) => {
    const matchesSearch =
      evt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === 'all' ||
      (activeFilter === 'senior' && evt.category.toLowerCase().includes('senior')) ||
      (activeFilter === 'junior' && evt.category.toLowerCase().includes('junior') && !evt.category.toLowerCase().includes('sub')) ||
      (activeFilter === 'subjunior' && evt.category.toLowerCase().includes('sub')) ||
      (activeFilter === 'trials' && (evt.category.toLowerCase().includes('trial') || evt.category.toLowerCase().includes('selection')));

    return matchesSearch && matchesFilter;
  });

  const handleDownload = (docName) => {
    setDownloadNotice(`Downloading Official Document: ${docName}`);
    setTimeout(() => setDownloadNotice(null), 4000);
  };

  return (
    <div style={{ backgroundColor: '#0b0c10', color: '#f0f2f5', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundColor: '#12141c', borderBottom: '1px solid #222634', padding: '60px 24px 48px' }}>
        <div className="max-width-container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '30px', backgroundColor: 'rgba(255, 199, 44, 0.12)', border: '1px solid rgba(255, 199, 44, 0.3)', color: '#ffc72c', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
            <TrophyIcon style={{ fontSize: 16 }} />
            <span>STFI National Calendar &amp; Selection Trials 2026–27</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0, color: '#ffffff', fontFamily: 'var(--font-nike-futura-nd, sans-serif)' }}>
            Championship <span style={{ color: '#ffc72c' }}>Events &amp; Calendar</span>
          </h1>

          <p style={{ color: '#a0a5b5', fontSize: 'clamp(15px, 2vw, 18px)', marginTop: '12px', maxWidth: '820px', lineHeight: 1.6 }}>
            Official Schedule for Senior, Junior, Sub-Junior Nationals, Beach Championships, Asian Games Selection Trials, and National Coaching Camps approved by MYAS &amp; ACTC.
          </p>

          {/* Quick Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '36px' }}>
            <div style={{ backgroundColor: '#181b26', padding: '20px', borderRadius: '12px', border: '1px solid #292d3e' }}>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#ffc72c' }}>35th</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>Senior Nationals</div>
              <div style={{ fontSize: '12px', color: '#888e9e', marginTop: '2px' }}>New Delhi (Oct 2025)</div>
            </div>

            <div style={{ backgroundColor: '#181b26', padding: '20px', borderRadius: '12px', border: '1px solid #292d3e' }}>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#00a651' }}>28+ States</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>Affiliated Teams</div>
              <div style={{ fontSize: '12px', color: '#888e9e', marginTop: '2px' }}>Men &amp; Women Categories</div>
            </div>

            <div style={{ backgroundColor: '#181b26', padding: '20px', borderRadius: '12px', border: '1px solid #292d3e' }}>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#3898ec' }}>4 Events</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>Official Disciplines</div>
              <div style={{ fontSize: '12px', color: '#888e9e', marginTop: '2px' }}>Regu, Double, Quad, Beach</div>
            </div>

            <div style={{ backgroundColor: '#181b26', padding: '20px', borderRadius: '12px', border: '1px solid #292d3e' }}>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#ffc72c' }}>2026</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>Asian Games Trials</div>
              <div style={{ fontSize: '12px', color: '#888e9e', marginTop: '2px' }}>SAI CoE Bengaluru</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-width-container" style={{ marginTop: '40px' }}>
        {/* Spotlight Next Featured Championship */}
        <div style={{ backgroundColor: '#141722', border: '2px solid #ffc72c', borderRadius: '20px', padding: '36px', marginBottom: '40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#ffc72c', color: '#0a0a0b', fontWeight: 900, fontSize: '11px', padding: '6px 16px', borderRadius: '0 0 0 12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            FEATURED NATIONAL CHAMPIONSHIP
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#ffc72c', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                SENIOR NATIONAL CHAMPIONSHIP
              </span>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, color: '#ffffff', margin: '8px 0 14px 0', lineHeight: 1.2 }}>
                35th Senior National SepakTakraw Championship
              </h2>
              <p style={{ fontSize: '14.5px', color: '#a0a5b5', lineHeight: 1.6, margin: 0 }}>
                India's premier SepakTakraw tournament featuring 600+ elite athletes representing 28 State Units, Services Sports Control Board (SSB), and Sports Authority of India (SAI) centers.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px', fontSize: '14px', color: '#e0e5f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <LocationIcon style={{ color: '#ffc72c' }} />
                  <span><strong>Venue:</strong> Indira Gandhi Indoor Stadium, New Delhi</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CalendarIcon style={{ color: '#ffc72c' }} />
                  <span><strong>Dates:</strong> October 23–27, 2025</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <PlayersIcon style={{ color: '#ffc72c' }} />
                  <span><strong>Disciplines:</strong> Regu Team, Double Event, Quad Event (Men &amp; Women)</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleDownload('35th_Senior_National_Official_Circular.pdf')}
                  className="btn-pill btn-yellow"
                  style={{ fontWeight: 800, display: 'inline-flex', gap: '8px', alignItems: 'center' }}
                >
                  <DownloadIcon style={{ fontSize: 18 }} />
                  <span>Download Circular &amp; Entry Form PDF</span>
                </button>
                <button
                  onClick={() => onOpenPortal && onOpenPortal('rules')}
                  className="btn-pill"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid #292d3e', fontWeight: 700 }}
                >
                  View Official Playing Rules
                </button>
              </div>
            </div>

            {/* Medals & Discipline Card */}
            <div style={{ backgroundColor: '#0b0c10', padding: '28px', borderRadius: '16px', border: '1px solid #292d3e' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', margin: '0 0 16px 0', borderBottom: '1px solid #222634', paddingBottom: '10px' }}>
                Championship Disciplines &amp; Medals
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 800, color: '#ffffff' }}>Regu Team Event</div>
                    <div style={{ fontSize: '12.5px', color: '#888e9e' }}>3 Players per side • 3 Sets to 21 Points</div>
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#ffc72c', backgroundColor: 'rgba(255, 199, 44, 0.1)', padding: '4px 10px', borderRadius: '4px' }}>Gold / Silver / Bronze</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 800, color: '#ffffff' }}>Double Event</div>
                    <div style={{ fontSize: '12.5px', color: '#888e9e' }}>2 Players per side • High speed aerial spikes</div>
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#ffc72c', backgroundColor: 'rgba(255, 199, 44, 0.1)', padding: '4px 10px', borderRadius: '4px' }}>Gold / Silver / Bronze</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 800, color: '#ffffff' }}>Quad Event</div>
                    <div style={{ fontSize: '12.5px', color: '#888e9e' }}>4 Players per side • Double Net Blocks</div>
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#ffc72c', backgroundColor: 'rgba(255, 199, 44, 0.1)', padding: '4px 10px', borderRadius: '4px' }}>Gold / Silver / Bronze</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div style={{ backgroundColor: '#12141c', padding: '24px', borderRadius: '16px', border: '1px solid #222634', marginBottom: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <SearchIcon style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#ffc72c', fontSize: 22 }} />
              <input
                type="text"
                placeholder="Search events by championship title, city venue, or category..."
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
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Championships' },
                { id: 'senior', label: 'Senior Nationals' },
                { id: 'junior', label: 'Junior Nationals (U-19)' },
                { id: 'subjunior', label: 'Sub-Junior Nationals (U-14)' },
                { id: 'trials', label: 'Selection Trials & Camps' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '25px',
                    border: activeFilter === filter.id ? '1px solid #ffc72c' : '1px solid #292d3e',
                    backgroundColor: activeFilter === filter.id ? '#ffc72c' : 'rgba(255, 255, 255, 0.04)',
                    color: activeFilter === filter.id ? '#0a0a0b' : '#c0c5d0',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Download Toast Notification */}
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

        {/* Championships Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              style={{
                backgroundColor: '#12141c',
                border: '1px solid #222634',
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '20px',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#ffc72c';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#222634';
              }}
            >
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#ffc72c', backgroundColor: 'rgba(255, 199, 44, 0.1)', border: '1px solid rgba(255, 199, 44, 0.25)', padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {evt.category}
                </span>

                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', margin: '12px 0 10px 0', lineHeight: 1.35 }}>
                  {evt.name}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: '#a0a5b5', marginTop: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CalendarIcon style={{ fontSize: 17, color: '#ffc72c' }} />
                    <span style={{ color: '#ffffff', fontWeight: 700 }}>{evt.dates}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <LocationIcon style={{ fontSize: 17, color: '#ffc72c' }} />
                    <span>{evt.venue}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <PlayersIcon style={{ fontSize: 17, color: '#ffc72c' }} />
                    <span>{evt.events}</span>
                  </div>
                </div>
              </div>

              {/* Download buttons */}
              <div style={{ borderTop: '1px solid #1e2230', paddingTop: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleDownload(`${evt.name.replace(/\s+/g, '_')}_Circular.pdf`)}
                  style={{
                    flex: 1,
                    backgroundColor: '#ffc72c',
                    color: '#0a0a0b',
                    border: 'none',
                    borderRadius: '25px',
                    padding: '10px 16px',
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
                  <span>Download Circular</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* State Medals Standings Section */}
        <div style={{ marginTop: '56px', backgroundColor: '#12141c', border: '1px solid #222634', borderRadius: '20px', padding: '36px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff', margin: 0 }}>State Associations Medal Tally (Recent Nationals)</h2>
              <p style={{ fontSize: '13.5px', color: '#a0a5b5', margin: '4px 0 0 0' }}>Overall Championship medal standings from 29th Junior &amp; 28th Sub-Junior Nationals.</p>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#00a651', backgroundColor: 'rgba(0, 166, 81, 0.1)', padding: '6px 14px', borderRadius: '30px' }}>Verified Final Results</span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px', color: '#e0e5f0' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #292d3e', color: '#ffc72c', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  <th style={{ padding: '12px 16px' }}>Rank</th>
                  <th style={{ padding: '12px 16px' }}>State / Union Unit</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center' }}>Gold 🥇</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center' }}>Silver 🥈</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center' }}>Bronze 🥉</th>
                  <th style={{ padding: '12px 16px', textAlign: 'center' }}>Total Medals</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rank: 1, state: 'Manipur SepakTakraw Association', gold: 6, silver: 2, bronze: 1, total: 9 },
                  { rank: 2, state: 'Nagaland SepakTakraw Association', gold: 4, silver: 3, bronze: 2, total: 9 },
                  { rank: 3, state: 'SSB (Services Sports Control Board)', gold: 3, silver: 2, bronze: 2, total: 7 },
                  { rank: 4, state: 'Delhi SepakTakraw Association', gold: 2, silver: 4, bronze: 3, total: 9 },
                  { rank: 5, state: 'Assam SepakTakraw Association', gold: 2, silver: 1, bronze: 4, total: 7 },
                  { rank: 6, state: 'Kerala SepakTakraw Association', gold: 1, silver: 2, bronze: 3, total: 6 },
                ].map((row) => (
                  <tr key={row.rank} style={{ borderBottom: '1px solid #1c202e' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 800, color: '#ffc72c' }}>#{row.rank}</td>
                    <td style={{ padding: '14px 16px', fontWeight: 700, color: '#ffffff' }}>{row.state}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 800, color: '#ffd700' }}>{row.gold}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 800, color: '#c0c0c0' }}>{row.silver}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 800, color: '#cd7f32' }}>{row.bronze}</td>
                    <td style={{ padding: '14px 16px', textAlign: 'center', fontWeight: 900, color: '#ffffff' }}>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
