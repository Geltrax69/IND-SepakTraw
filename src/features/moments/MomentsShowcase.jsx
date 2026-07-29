import React, { useState, useEffect } from 'react';
import {
  PlayArrow as PlayIcon,
  Verified as VerifiedIcon,
  Launch as LaunchIcon,
  Close as CloseIcon,
  OndemandVideo as VideoIcon,
  AutoAwesome as SparklesIcon,
  NorthEast as ArrowUpRightIcon,
  CalendarMonth as CalendarIcon,
  Campaign as NoticeIcon,
} from '@mui/icons-material';
import { Img } from '../../components/ui/Img';
import { useContent } from '../../content/ContentContext';

const RELIABLE_VIDEO_URL = 'https://vjs.zencdn.net/v/oceans.mp4';
const FALLBACK_VIDEO_URL = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export const MomentsShowcase = ({ onOpenPortal, onSelectNav }) => {
  const { content } = useContent();
  const highlights = content.highlights || [];
  const xPosts = content.xPosts || [];
  const notices = content.notices || [];

  // Combine highlights and X posts into a unified timeline
  const combinedFeed = [
    ...xPosts.map((p) => ({ ...p, type: 'xPost' })),
    ...highlights.map((h) => ({ ...h, type: 'news' })),
  ];

  // Set the default featured item (e.g., India Sports Hub video post)
  const [featuredItem, setFeaturedItem] = useState(() => {
    const videoPost = combinedFeed.find(item => item.isVideo);
    return videoPost || combinedFeed[0];
  });

  const [inlinePlaying, setInlinePlaying] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Reset playing state if featured item changes
  useEffect(() => {
    setInlinePlaying(false);
  }, [featuredItem]);

  return (
    <section className="section-pad" style={{ backgroundColor: '#070708', color: '#ffffff', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background ambient lighting */}
      <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '300px', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.06) 0%, rgba(7, 7, 8, 0) 70%)', pointerEvents: 'none' }} />

      <div className="max-width-container">
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '48px', gap: '12px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '30px', backgroundColor: 'rgba(255, 199, 44, 0.08)', border: '1px solid rgba(255, 199, 44, 0.2)', color: 'var(--brand-yellow)', fontSize: '11px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            <SparklesIcon style={{ fontSize: 14 }} /> Official Social &amp; Media Feed
          </div>

          <h2 style={{ fontFamily: 'var(--font-helvetica-now-display-medium)', fontSize: 'clamp(32px, 5vw, 50px)', fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase', lineHeight: 1.05, margin: 0 }}>
            NEWS, MOMENTS &amp; <span style={{ color: 'var(--brand-yellow)' }}>LIVE X FEED</span>
          </h2>

          <p style={{ fontSize: '15px', color: '#9e9ea2', maxWidth: '620px', lineHeight: 1.5, margin: 0 }}>
            Real-time updates, Asian Games highlights, selection trials, and official posts from <strong style={{ color: '#fff' }}>@Media_SAI</strong> and <strong style={{ color: '#fff' }}>@IndiaSportsHub</strong>.
          </p>
        </div>

        {/* Premium Editorial Glassmorphic Workspace (theCaris style) */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '24px',
            padding: '24px',
            boxShadow: '0 30px 70px rgba(0,0,0,0.6)',
          }}
        >
          {/* Main 3-Column Layout Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr 0.8fr',
              gap: '24px',
            }}
            className="editorial-grid"
          >
            {/* COLUMN 1: Large Featured Item (Left) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#000', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                {featuredItem.isVideo && inlinePlaying ? (
                  <video
                    controls
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  >
                    <source src={featuredItem.videoUrl || RELIABLE_VIDEO_URL} type="video/mp4" />
                    <source src={FALLBACK_VIDEO_URL} type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>
                ) : (
                  <div
                    style={{ position: 'relative', width: '100%', height: '100%', cursor: 'pointer' }}
                    onClick={() => {
                      if (featuredItem.isVideo) {
                        setInlinePlaying(true);
                      } else {
                        setSelectedMedia(featuredItem);
                      }
                    }}
                  >
                    <Img
                      src={featuredItem.image}
                      alt={featuredItem.title || featuredItem.text}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }} />

                    {/* Play Video Trigger Overlay */}
                    {featuredItem.isVideo && (
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div
                          style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--brand-yellow)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 30px rgba(255, 199, 44, 0.4)',
                            transition: 'transform 0.2s ease',
                          }}
                        >
                          <PlayIcon style={{ fontSize: 32, color: '#000', marginLeft: '3px' }} />
                        </div>
                        <span style={{ position: 'absolute', bottom: '12px', right: '12px', backgroundColor: 'rgba(0,0,0,0.8)', color: '#fff', fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <VideoIcon style={{ fontSize: 14, color: 'var(--brand-yellow)' }} /> DIRECT PLAY VIDEO
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Featured Meta Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--brand-yellow)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {featuredItem.type === 'xPost' ? 'Live X Post' : 'Featured News'}
                    </span>
                    {featuredItem.verified && <VerifiedIcon style={{ fontSize: 14, color: '#1d9bf0' }} />}
                  </div>
                  <span style={{ fontSize: '12px', color: '#777780' }}>{featuredItem.date}</span>
                </div>

                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 800,
                    lineHeight: 1.3,
                    color: '#ffffff',
                    margin: 0,
                    fontFamily: 'var(--font-helvetica-now-display-medium)',
                  }}
                >
                  {featuredItem.type === 'xPost' ? featuredItem.text : featuredItem.title}
                </h3>

                {featuredItem.authorName && (
                  <span style={{ fontSize: '13px', color: '#a0a0aa' }}>
                    Posted by <strong style={{ color: '#fff' }}>{featuredItem.authorName}</strong> ({featuredItem.authorHandle})
                  </span>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                  <button
                    onClick={() => {
                      if (featuredItem.isVideo) setInlinePlaying(true);
                      else setSelectedMedia(featuredItem);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--brand-yellow)',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: 0,
                    }}
                  >
                    <span>Play / View Detail</span>
                    <ArrowUpRightIcon style={{ fontSize: 16 }} />
                  </button>

                  {featuredItem.url && (
                    <a
                      href={featuredItem.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#777780', fontSize: '12px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      Open on X <LaunchIcon style={{ fontSize: 13 }} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* COLUMN 2: Related updates list (Middle) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
                borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '0 20px',
              }}
              className="editorial-mid-col"
            >
              <h4 style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px 0', color: 'rgba(255,255,255,0.6)' }}>
                Related Updates
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto', maxHeight: '420px' }} className="no-scrollbar">
                {combinedFeed
                  .filter(item => item.id !== featuredItem.id)
                  .map((item, index) => (
                    <div
                      key={item.id || index}
                      onClick={() => setFeaturedItem(item)}
                      style={{
                        display: 'flex',
                        gap: '12px',
                        padding: '10px',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease',
                        backgroundColor: 'transparent',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      {/* Row Left Content */}
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#a0a0aa' }}>
                          <span style={{ fontWeight: 700, color: item.type === 'xPost' ? '#1d9bf0' : 'var(--brand-yellow)' }}>
                            {item.type === 'xPost' ? '@' + item.authorName : 'News'}
                          </span>
                          <span>•</span>
                          <span>{item.date}</span>
                        </div>
                        <p
                          style={{
                            fontSize: '13.5px',
                            lineHeight: 1.4,
                            color: '#ffffff',
                            margin: 0,
                            fontWeight: 600,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {item.type === 'xPost' ? item.text : item.title}
                        </p>
                      </div>

                      {/* Row Right Thumbnail */}
                      <div style={{ width: '80px', height: '60px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(255,255,255,0.06)' }}>
                        <Img src={item.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* COLUMN 3: Official Announcements / Circulars (Right) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="editorial-right-col">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0, color: 'rgba(255,255,255,0.6)' }}>
                  Latest Notices
                </h4>
                <button
                  onClick={() => onSelectNav('notice')}
                  style={{ background: 'none', border: 'none', color: 'var(--brand-yellow)', fontSize: '11px', fontWeight: 700, cursor: 'pointer', padding: 0 }}
                >
                  View All
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', overflowY: 'auto', maxHeight: '420px' }} className="no-scrollbar">
                {notices.slice(0, 5).map((notice, index) => (
                  <div
                    key={notice.id || index}
                    onClick={() => {
                      // Find matching item in combined feed if any, or trigger portal callback
                      const matchedItem = combinedFeed.find(f => f.title === notice.title);
                      if (matchedItem) setFeaturedItem(matchedItem);
                      else onOpenPortal('notice');
                    }}
                    style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                      paddingBottom: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          fontSize: '9px',
                          fontWeight: 800,
                          backgroundColor: 'rgba(255, 255, 255, 0.08)',
                          color: '#fff',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {notice.category}
                      </span>
                      <span style={{ fontSize: '11px', color: '#777780' }}>{notice.date}</span>
                    </div>

                    <h5
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        lineHeight: 1.35,
                        color: '#ffffff',
                        margin: 0,
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-yellow)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
                    >
                      {notice.title}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Story Lightbox Modal */}
      {selectedMedia && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setSelectedMedia(null)}
        >
          <div
            style={{
              backgroundColor: '#121215',
              border: '1px solid #333',
              borderRadius: '16px',
              maxWidth: '860px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.9)',
              color: '#fff',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMedia(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                backgroundColor: 'rgba(0,0,0,0.7)',
                border: '1px solid #444',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <CloseIcon style={{ fontSize: 20 }} />
            </button>

            {/* Direct Playable HTML5 Video or Full Image Display */}
            <div style={{ width: '100%', backgroundColor: '#000', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {selectedMedia.isVideo ? (
                <video
                  controls
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  style={{ width: '100%', maxHeight: '520px', borderRadius: '16px 16px 0 0' }}
                >
                  <source src={selectedMedia.videoUrl || RELIABLE_VIDEO_URL} type="video/mp4" />
                  <source src={FALLBACK_VIDEO_URL} type="video/mp4" />
                  Your browser does not support HTML5 video playback.
                </video>
              ) : (
                <Img
                  src={selectedMedia.image}
                  alt="Post Detail"
                  style={{ width: '100%', maxHeight: '520px', objectFit: 'contain' }}
                />
              )}
            </div>

            {/* Content info inside modal */}
            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {selectedMedia.authorName && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    src={selectedMedia.authorAvatar}
                    alt={selectedMedia.authorName}
                    style={{ width: '46px', height: '46px', borderRadius: '50%' }}
                  />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontWeight: 700, fontSize: '16px' }}>{selectedMedia.authorName}</span>
                      <VerifiedIcon style={{ fontSize: 17, color: '#1d9bf0' }} />
                    </div>
                    <span style={{ fontSize: '13px', color: '#888890', fontFamily: 'monospace' }}>{selectedMedia.authorHandle}</span>
                  </div>
                </div>
              )}

              <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#e5e5e7' }}>
                {selectedMedia.text || selectedMedia.title}
              </p>

              {selectedMedia.url && (
                <a
                  href={selectedMedia.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill btn-accent"
                  style={{ alignSelf: 'flex-start', marginTop: '8px', display: 'inline-flex', gap: '8px' }}
                >
                  View Direct Link on X <LaunchIcon style={{ fontSize: 16 }} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
