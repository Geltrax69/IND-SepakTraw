import React, { useState, useEffect } from 'react';
import {
  PlayArrow as PlayIcon,
  Verified as VerifiedIcon,
  Launch as LaunchIcon,
  Close as CloseIcon,
  OndemandVideo as VideoIcon,
  AutoAwesome as SparklesIcon,
  NorthEast as ArrowUpRightIcon,
  Movie as MovieIcon,
} from '@mui/icons-material';
import { Img } from '../../components/ui/Img';
import { Reveal } from '../../components/ui/Motion';
import { useContent } from '../../content/ContentContext';

const RELIABLE_VIDEO_URL = 'https://vjs.zencdn.net/v/oceans.mp4';
const FALLBACK_VIDEO_URL = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export const MomentsShowcase = ({ onOpenPortal, onSelectNav }) => {
  const { content } = useContent();
  const highlights = content.highlights || [];
  const xPosts = content.xPosts || [];
  const [activeTab, setActiveTab] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [inlinePlayingId, setInlinePlayingId] = useState(null);

  // Combine highlights and X posts into a unified timeline
  const combinedFeed = [
    ...xPosts.map((p) => ({ ...p, type: 'xPost' })),
    ...highlights.map((h) => ({ ...h, type: 'news' })),
  ];

  const filteredItems = activeTab === 'all'
    ? combinedFeed
    : activeTab === 'x'
    ? combinedFeed.filter((it) => it.type === 'xPost')
    : activeTab === 'news'
    ? combinedFeed.filter((it) => it.type === 'news')
    : combinedFeed.filter((it) => it.isVideo);

  const go = (target) => {
    if (['myas', 'rules', 'events'].includes(target)) onOpenPortal(target);
    else onSelectNav(target || 'notice');
  };

  return (
    <section style={{ backgroundColor: '#0a0a0b', color: '#ffffff', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background ambient lighting */}
      <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '300px', background: 'radial-gradient(circle, rgba(255, 199, 44, 0.08) 0%, rgba(10, 10, 11, 0) 70%)', pointerEvents: 'none' }} />

      <div className="max-width-container">
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '44px', gap: '12px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '30px', backgroundColor: 'rgba(255, 199, 44, 0.1)', border: '1px solid rgba(255, 199, 44, 0.25)', color: 'var(--brand-yellow)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            <SparklesIcon style={{ fontSize: 16 }} /> Official Social &amp; Media Feed
          </div>

          <h2 style={{ fontFamily: 'var(--font-helvetica-now-display-medium)', fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase', lineHeight: 1.05 }}>
            News, Moments &amp; <span style={{ color: 'var(--brand-yellow)' }}>Live X Feed</span>
          </h2>

          <p style={{ fontSize: '16px', color: '#9e9ea0', maxWidth: '620px', lineHeight: 1.5 }}>
            Real-time updates, Asian Games highlights, selection trials, and official posts from <strong style={{ color: '#fff' }}>@Media_SAI</strong> and <strong style={{ color: '#fff' }}>@IndiaSportsHub</strong>.
          </p>

          {/* Filter Bar */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '16px' }}>
            {[
              ['all', 'All Updates'],
              ['x', 'Official X Posts'],
              ['news', 'Federation News'],
              ['video', 'Video Highlights 🎬'],
            ].map(([tabKey, label]) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                style={{
                  padding: '8px 22px',
                  borderRadius: '30px',
                  border: activeTab === tabKey ? '1px solid var(--brand-yellow)' : '1px solid #28282c',
                  backgroundColor: activeTab === tabKey ? 'var(--brand-yellow)' : 'rgba(255, 255, 255, 0.04)',
                  color: activeTab === tabKey ? '#0a0a0b' : '#d0d0d5',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Media Grid Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          {filteredItems.map((item, idx) => {
            const isX = item.type === 'xPost';
            const isPlayingInline = inlinePlayingId === item.id;

            return (
              <Reveal key={item.id || idx} delay={idx * 0.06} style={{ height: '100%' }}>
                <div
                  style={{
                    backgroundColor: '#121215',
                    borderRadius: '16px',
                    border: '1px solid #242429',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = isX ? '#1d9bf0' : 'var(--brand-yellow)';
                    e.currentTarget.style.boxShadow = isX ? '0 15px 35px rgba(29, 155, 240, 0.15)' : '0 15px 35px rgba(255, 199, 44, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#242429';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)';
                  }}
                >
                  {/* Card Header (Author Info for X, Kicker for News) */}
                  <div style={{ padding: '16px 20px', borderBottom: '1px solid #1e1e23', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {isX ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img
                          src={item.authorAvatar}
                          alt={item.authorName}
                          style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #333' }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span style={{ fontWeight: 700, fontSize: '14px', color: '#fff' }}>{item.authorName}</span>
                            <VerifiedIcon style={{ fontSize: 16, color: '#1d9bf0' }} />
                          </div>
                          <span style={{ fontSize: '12px', color: '#888890', fontFamily: 'monospace' }}>{item.authorHandle}</span>
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {item.live && <span className="badge-live">LIVE COVERAGE</span>}
                        <span style={{ backgroundColor: 'var(--brand-yellow)', color: '#000', fontSize: '11px', fontWeight: 800, padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                          {item.kicker}
                        </span>
                      </div>
                    )}

                    <span style={{ fontSize: '12px', color: '#777780', fontWeight: 500 }}>
                      {item.date}
                    </span>
                  </div>

                  {/* Media Container — Direct HTML5 Video Player or Image */}
                  <div style={{ position: 'relative', width: '100%', height: '240px', backgroundColor: '#000', overflow: 'hidden' }}>
                    {item.isVideo && isPlayingInline ? (
                      <video
                        controls
                        autoPlay
                        loop
                        playsInline
                        preload="auto"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      >
                        <source src={item.videoUrl || RELIABLE_VIDEO_URL} type="video/mp4" />
                        <source src={FALLBACK_VIDEO_URL} type="video/mp4" />
                        Your browser does not support playing HTML5 video.
                      </video>
                    ) : (
                      <div
                        style={{ position: 'relative', width: '100%', height: '100%', cursor: 'pointer' }}
                        onClick={() => {
                          if (item.isVideo) {
                            setInlinePlayingId(item.id);
                          } else {
                            setSelectedMedia(item);
                          }
                        }}
                      >
                        <Img
                          src={item.image}
                          alt={item.title || item.text}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,18,21,0.88) 0%, transparent 60%)' }} />

                        {/* Play Video Button Overlay */}
                        {item.isVideo && (
                          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div
                              style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(29, 155, 240, 0.95)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 30px rgba(29, 155, 240, 0.7)',
                                transition: 'transform 0.2s ease',
                              }}
                            >
                              <PlayIcon style={{ fontSize: 36, color: '#fff', marginLeft: '3px' }} />
                            </div>
                            <span style={{ position: 'absolute', bottom: '12px', right: '12px', backgroundColor: 'rgba(0,0,0,0.85)', color: '#fff', fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                              <VideoIcon style={{ fontSize: 14, color: '#1d9bf0' }} /> DIRECT PLAY VIDEO
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Content & Hashtags */}
                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
                    <div>
                      {isX ? (
                        <p style={{ fontSize: '14px', lineHeight: 1.55, color: '#e1e1e6', fontWeight: 400 }}>
                          {item.text}
                        </p>
                      ) : (
                        <h3 style={{ fontSize: '18px', fontWeight: 700, lineHeight: 1.35, color: '#ffffff', fontFamily: 'var(--font-helvetica-now-display-medium)' }}>
                          {item.title}
                        </h3>
                      )}

                      {/* Hashtag Pills */}
                      {item.hashtags && item.hashtags.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                          {item.hashtags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                color: '#1d9bf0',
                                backgroundColor: 'rgba(29, 155, 240, 0.12)',
                                padding: '3px 9px',
                                borderRadius: '4px',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Footer */}
                    <div style={{ paddingTop: '14px', borderTop: '1px solid #1e1e23', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button
                        onClick={() => {
                          if (item.isVideo) setInlinePlayingId(item.id);
                          else setSelectedMedia(item);
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: isX ? '#1d9bf0' : 'var(--brand-yellow)',
                          fontSize: '13px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        {item.isVideo ? 'Play Video Inline' : 'View Full Post'}
                        <ArrowUpRightIcon style={{ fontSize: 16 }} />
                      </button>

                      {isX && (
                        <a
                          href={item.url}
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
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Interactive Direct Video & Story Lightbox Modal */}
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
