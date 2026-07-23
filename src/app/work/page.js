'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { photographyData } from '../work/photographyData'; 
import Image from 'next/image';

export default function Work() {
  const [filter, setFilter] = useState('all');
  const [subFilter, setSubFilter] = useState('all');
  const [isMounted, setIsMounted] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  const [activeGallery, setActiveGallery] = useState(null);

  const filterButtons = [
    { id: 'all', label: 'All Work' },
    { id: 'audio', label: 'Audio' },
    { id: 'video', label: 'Video' },
    { id: 'photo', label: 'Photography' },
    { id: 'ai', label: 'AI Production' },
    { id: 'digital', label: 'Digital' }
  ];

  // Sub-filters mapping dictionary based on main filter selection
  const subFiltersMap = {
    audio: ['English', 'Arabic', 'French', 'Hindi', 'Urdu'],
    video: [
      'Event', 
      'Testimonial', 
      'Corporate Presentation', 
      'Timelapse', 
      'Drone Footage', 
      '360° Footage', 
      'E-Learning', 
      'Commercial', 
      'Animation', 
      'Dubbing', 
      'Augmented Reality', 
      'Virtual Reality', 
      'Social Media Reel'
    ],
    photo: [
      'Industrial Photography', 
      'Event Photography', 
      'Facilities Photography', 
      'Property Photography'
    ],
    ai: ['Product Campaign', 'Avatar-Based'],
    digital: ['Corporate', 'Ecommerce']
  };

  const youtubeVideoData = [
    // Event Productions
    { category: 'video', badge1: 'Event', badge2: 'Testimonial', title: 'Sharjah Ladies Club', videoUrl: 'https://www.youtube.com/watch?v=uMwgrpkAqZo' },
    { category: 'video', badge1: 'Event', title: 'Agnice Iftar Event', videoUrl: 'https://www.youtube.com/watch?v=F54oY2qkvZ4' },
    { category: 'video', badge1: 'Event', title: 'HR Summit & Expo', videoUrl: 'https://www.youtube.com/watch?v=pVkCroer8oc' },

    // Corporate Videos
    { category: 'video', badge1: 'Corporate Presentation', title: 'Al Khaleej', videoUrl: 'https://www.youtube.com/watch?v=T2QXEV3bwcg' },
    { category: 'video', badge1: 'Corporate Presentation', title: 'Scitra', videoUrl: 'https://www.youtube.com/watch?v=5lLXv-CsmUk' },
    { category: 'video', badge1: 'Corporate Presentation', title: 'ACME', videoUrl: 'https://www.youtube.com/watch?v=ORqROH8rsJ4' },

    // Timelapse & Drone Productions
    { category: 'video', badge1: 'Timelapse', title: 'Enova', videoUrl: 'https://www.youtube.com/watch?v=m7s_bBwnkxU' },
    { category: 'video', badge1: 'Timelapse', title: 'Majid Al Futtaim', videoUrl: 'https://www.youtube.com/watch?v=BKM4ROd5nr8' },
    { category: 'video', badge1: 'Timelapse', badge2: 'Drone Footage', title: 'Enova', videoUrl: 'https://www.youtube.com/watch?v=szc17K-ZsG0' },
    { category: 'video', badge1: 'Timelapse', title: 'Scan Electro Mechanical', videoUrl: 'https://www.youtube.com/watch?v=IacUWAZwgls' },
    { category: 'video', badge1: 'Drone Footage', title: 'Drone Showcase', videoUrl: 'https://www.youtube.com/watch?v=3UHRsLUKDNg' },
    { category: 'video', badge1: 'Drone Footage', title: 'Emitech', videoUrl: 'https://www.youtube.com/watch?app=desktop&v=cSrsOeWn5I4' },

    // Testimonial Videos (Removed Sharjah Ladies Club duplicate here)
    { category: 'video', badge1: 'Testimonial', title: 'Al Sharq Hospital', videoUrl: 'https://www.youtube.com/watch?v=0Q6nbRPw6FM&t=388s' },
    { category: 'video', badge1: 'Testimonial', title: 'Canon', videoUrl: 'https://www.youtube.com/watch?v=q0LbDWQghSE' },
    { category: 'video', badge1: 'Testimonial', title: 'Power Group', videoUrl: 'https://www.youtube.com/watch?v=ijygND8UMi8' },

    // 360° Videos
    { category: 'video', badge1: '360° Footage', title: '360° Experience 1', videoUrl: 'https://www.youtube.com/watch?v=3JYKRGzJ4og' },
    { category: 'video', badge1: '360° Footage', title: '360° Experience 2', videoUrl: 'https://www.youtube.com/watch?v=Kwnb64MnGbw' },
    { category: 'video', badge1: '360° Footage', title: '360° Experience 3', videoUrl: 'https://www.youtube.com/watch?v=aRTLsRoA_CI' },

    // Tutorial & E-Learning
    { category: 'video', badge1: 'E-Learning', title: 'Driving Classes 1', videoUrl: 'https://www.youtube.com/watch?v=vENU9kXnZRA' },
    { category: 'video', badge1: 'E-Learning', title: 'Driving Classes 2', videoUrl: 'https://www.youtube.com/watch?v=mdSOGQcRiMQ' },
    { category: 'video', badge1: 'Tutorial', badge2: 'Animation', title: 'TCL GCC', videoUrl: 'https://www.youtube.com/watch?v=LhFD5ksDn3U' },

    // Commercials
    { category: 'video', badge1: 'Commercial', title: 'Buraq Car Rental 1', videoUrl: 'https://www.youtube.com/watch?v=2zyRRmCpTSA' },
    { category: 'video', badge1: 'Commercial', badge2: 'Animation', title: 'BNC Network', videoUrl: 'https://www.youtube.com/watch?v=KZmduB-zE2E' },
    { category: 'video', badge1: 'Commercial', title: 'Buraq Car Rental 2', videoUrl: 'https://www.youtube.com/watch?v=rPLxJIXUul4' },

    // Dubbing
    { category: 'video', badge1: 'Dubbing', title: 'Urdu', videoUrl: 'https://www.youtube.com/watch?v=qJxg9lSLpD8' },
    { category: 'video', badge1: 'Dubbing', title: 'English', videoUrl: 'https://www.youtube.com/watch?v=AlinFX6ePJE' },
    { category: 'video', badge1: 'Dubbing', title: 'Hindi', videoUrl: 'https://www.youtube.com/watch?v=MsVVtI_0_o4' },

    // Animation
    { category: 'video', badge1: 'Animation', title: 'House Tour', videoUrl: 'https://www.youtube.com/watch?v=MTuwPmqcFKQ' },
    { category: 'video', badge1: 'Animation', title: 'Dell', videoUrl: 'https://www.youtube.com/watch?v=0BbudrtTAQY' },
    { category: 'video', badge1: 'Animation', badge2: 'E-Learning', title: 'Car Driving Test', videoUrl: 'https://www.youtube.com/watch?v=JO0kED7fNb8' },

    // AR / VR
    { category: 'video', badge1: 'Augmented Reality', title: 'AR Experience 1', videoUrl: 'https://www.youtube.com/watch?app=desktop&v=4StiZ_bQW7Q' },
    { category: 'video', badge1: 'Virtual Reality', title: 'VR Experience', videoUrl: 'https://www.youtube.com/watch?app=desktop&v=LQFUyO7pVH0' },
    { category: 'video', badge1: 'Augmented Reality', title: 'AR Experience 2', videoUrl: 'https://www.youtube.com/watch?v=z4RjEz0Wg5M' },

    // Social Media Reels
    { category: 'video', badge1: 'Social Media Reel', title: 'Social Media Reel 01', videoUrl: 'https://www.youtube.com/shorts/jTyHmCd4HBU' },
    { category: 'video', badge1: 'Social Media Reel', title: 'Social Media Reel 02', videoUrl: 'https://www.youtube.com/shorts/mwwpkud5Yzc' },
    { category: 'video', badge1: 'Social Media Reel', title: 'Social Media Reel 03', videoUrl: 'https://www.youtube.com/shorts/F6OQvgGwSI0' }
  ];

  const structuralPortfolioItems = [
    { category: 'audio', badge1: 'Audio', title: 'DEWA — Multilingual IVR System', desc: 'Complete 6-language IVR recording and production.' }, 
    { category: 'ai', badge1: 'AI Production', title: 'Retail Brand — AI Product Campaign', desc: '100+ AI-generated product visuals for e-commerce launch.' },
    { category: 'digital', badge1: 'Digital', title: 'Corporate Group — E-Learning Platform', desc: 'Full LMS development with 40+ interactive modules.' },
    { category: 'audio', badge1: 'Audio', title: 'National Brand — Jingle Production', desc: 'Original brand jingle composed and produced in 5 languages.' }
  ];

  const extractYouTubeId = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };

  const photographyCategoryItems = photographyData.map((cat, idx) => ({
    category: 'photo',
    badge1: 'Photography',
    title: cat.label,
    isGallery: true,
    catIdx: idx
  }));

  const baseCombinedItems = filter === 'video' 
    ? youtubeVideoData.map(item => ({ ...item, desc: '' }))
    : [...structuralPortfolioItems, ...youtubeVideoData.map(item => ({ ...item, desc: '' })), ...photographyCategoryItems];

  const filteredItems = baseCombinedItems.filter(item => {
    const matchesCategory = filter === 'all' || item.category === filter;
    
    const badge1Match = item.badge1 && item.badge1.toLowerCase().includes(subFilter.toLowerCase());
    const badge2Match = item.badge2 && item.badge2.toLowerCase().includes(subFilter.toLowerCase());
    const titleMatch = item.title && item.title.toLowerCase().includes(subFilter.toLowerCase());

    const matchesSub = subFilter === 'all' || badge1Match || badge2Match || titleMatch;
    
    return matchesCategory && matchesSub;
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (window.scrollY <= 10) {
      document.body.classList.add('home-hero-top');
    } else {
      document.body.classList.remove('home-hero-top');
    }

    const handleScrollMetrics = () => {
      if (window.scrollY > 10) {
        document.body.classList.remove('home-hero-top');
      } else {
        document.body.classList.add('home-hero-top');
      }
    };
    window.addEventListener('scroll', handleScrollMetrics);

    return () => {
      window.removeEventListener('scroll', handleScrollMetrics);
      document.body.classList.remove('home-hero-top');
    };
  }, []);

  useEffect(() => {
    const revealElements = containerRef.current?.querySelectorAll('.reveal');
    if (!revealElements || revealElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [filter, subFilter]);

  const openVideoModal = (index) => {
    const item = filteredItems[index];
    if (item && item.category === 'video' && item.videoUrl) {
      setActiveVideoIndex(index);
    } else {
      console.error("Video data missing for index:", index);
    }
  };

  const closeVideoModal = () => {
    setActiveVideoIndex(null);
  };

  const navigateModalPrev = (e) => {
    e.stopPropagation();
    if (activeVideoIndex === null) return;
    
    let targetIdx = activeVideoIndex - 1;
    while (targetIdx >= 0) {
      if (filteredItems[targetIdx].category === 'video') {
        setActiveVideoIndex(targetIdx);
        return;
      }
      targetIdx--;
    }
  };

  const navigateModalNext = (e) => {
    e.stopPropagation();
    if (activeVideoIndex === null) return;

    let targetIdx = activeVideoIndex + 1;
    while (targetIdx < filteredItems.length) {
      if (filteredItems[targetIdx].category === 'video') {
        setActiveVideoIndex(targetIdx);
        return;
      }
      targetIdx++;
    }
  };

  const handlePhotoClick = (item) => {
    if (item.isGallery && photographyData[item.catIdx]) {
      setActiveGallery({ catIdx: item.catIdx, imgIdx: 0 });
    } else {
      console.error("Gallery data not found for:", item);
    }
  };

  return (
    <>
      <title>Work Samples | IBC Studio</title>
      <meta name="description" content="Browse our curated selection of high-impact visual campaigns, corporate films, and multilingual audio architectures produced for UAE’s leading brands." />
      <meta name="keywords" content="video production showcase uae, corporate film portfolio dubai, professional photography samples" />
      
      <style>{`
        @keyframes fadeInUpModal {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .sub-filter-tab {
          white-space: nowrap;
          flex-shrink: 0;
          font-size: 12px;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #a0aec0;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sub-filter-tab:hover {
          background: linear-gradient(135deg, rgba(0, 112, 243, 0.25), rgba(0, 212, 255, 0.25));
          border-color: rgba(0, 112, 243, 0.6);
          color: #ffffff;
          box-shadow: 0 0 15px rgba(0, 112, 243, 0.4), inset 0 0 10px rgba(0, 212, 255, 0.2);
          transform: translateY(-1px);
        }
        .sub-filter-tab.active {
          background: linear-gradient(135deg, #0070f3, #00d4ff);
          border-color: #00d4ff;
          color: #ffffff;
          box-shadow: 0 0 20px rgba(0, 112, 243, 0.6);
        }
      `}</style>

      <div className="page active" id="pg-work" ref={containerRef}>
        <div 
          className="pw" 
          style={{ 
            width: '100%',
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          
          <div 
            className="sec reveal in-view" 
            style={{ 
              paddingTop: 'clamp(120px, 12vh, 160px)', 
              paddingBottom: '36px', 
              width: '100%',
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)'
            }}
          >
            <div className="lbl">Portfolio</div>
            <h1 
              className="title" 
              style={{ 
                marginBottom: '28px', 
                wordBreak: 'break-word', 
                overflowWrap: 'break-word',
                fontSize: 'clamp(32px, 5vw, 50px)', 
                lineHeight: '1.1' 
              }}
            >
              Work That Speaks
            </h1>
            <p className="desc" style={{ width: '100%', maxWidth: '540px', marginBottom: 0, wordBreak: 'break-word', overflowWrap: 'break-word' }}>
              A curated selection of projects across our core service areas.
            </p>
          </div>

          <div 
            className="wfilter reveal in-view" 
            style={{ 
              width: '100%', 
              display: 'flex', 
              gap: '9px', 
              overflowX: 'auto', 
              WebkitOverflowScrolling: 'touch',
              paddingTop: '4px', 
              paddingBottom: '10px',
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)',
              position: 'relative',
              zIndex: 5 
            }}
          >
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                className={`wfbtn ${filter === btn.id ? 'active' : ''}`}
                onClick={() => {
                  setFilter(btn.id);
                  setSubFilter('all');
                }}
                style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {filter !== 'all' && subFiltersMap[filter] && (
            <div 
              className="wfilter-sub reveal in-view" 
              style={{ 
                width: '100%', 
                display: 'flex', 
                gap: '8px', 
                overflowX: 'auto', 
                WebkitOverflowScrolling: 'touch',
                paddingTop: '4px', 
                paddingBottom: '20px',
                paddingLeft: 'clamp(22px, 6vw, 80px)',
                paddingRight: 'clamp(22px, 6vw, 80px)',
                position: 'relative',
                zIndex: 5 
              }}
            >
              <button
                className={`sub-filter-tab ${subFilter === 'all' ? 'active' : ''}`}
                onClick={() => setSubFilter('all')}
              >
                All {filterButtons.find(b => b.id === filter)?.label}
              </button>
              {subFiltersMap[filter].map((sub, idx) => (
                <button
                  key={idx}
                  className={`sub-filter-tab ${subFilter === sub ? 'active' : ''}`}
                  onClick={() => setSubFilter(sub)}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

        <div 
          className="wgrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20 px-[clamp(22px,6vw,80px)]" 
          style={{ 
            width: '100%', 
            paddingBottom: '80px',
            paddingLeft: 'clamp(22px, 6vw, 80px)',
            paddingRight: 'clamp(22px, 6vw, 80px)',
            display: 'grid', 
            gap: '30px'
          }}
        >
          {filteredItems.map((item, index) => {
            const videoId = item.category === 'video' ? extractYouTubeId(item.videoUrl) : null;
            const imgSrc = item.isGallery 
              ? photographyData[item.catIdx].images[0] 
              : (videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : 'https://placehold.co/600x400/000000/FFFFFF/png?text=No+Video');

            return (
              <div 
                key={`${filter}-${subFilter}-${index}`} 
                className="witem reveal"
                onClick={() => {
                  if (item.category === 'video') openVideoModal(index);
                  if (item.isGallery) handlePhotoClick(item);
                }}
                style={{ 
                  display: 'block', 
                  width: '100%', 
                  cursor: 'pointer',
                  pointerEvents: 'auto' 
                }}
              >
                <div 
                  className="wthumb" 
                  style={{ 
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/9',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: '#1a2035'
                  }}
                >
                  {/* Updated Multi-span Badge Container */}
                  <div style={{
                    position: 'absolute', top: '12px', left: '12px', zIndex: 20,
                    display: 'flex', gap: '8px'
                  }}>
                    {item.badge1 && (
                      <span style={{
                        fontSize: '13px', padding: '6px 14px', fontWeight: '600',
                        backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)',
                        color: '#fff', borderRadius: '20px'
                      }}>
                        {item.badge1}
                      </span>
                    )}
                    {item.badge2 && (
                      <span style={{
                        fontSize: '13px', padding: '6px 14px', fontWeight: '600',
                        backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)',
                        color: '#fff', borderRadius: '20px'
                      }}>
                        {item.badge2}
                      </span>
                    )}
                  </div>

                  <Image 
                    src={imgSrc} 
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />

                  {item.category === 'video' && (
                    <div style={{
                      position: 'absolute', top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%)', zIndex: 10,
                      width: '56px', height: '56px', borderRadius: '50%',
                      backgroundColor: '#0070f3', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      pointerEvents: 'none'
                    }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5V19L19 12L8 5Z" fill="#ffffff" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <div className="wi" style={{ marginTop: '16px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '6px' }}>{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>

      {/* Modal View for Videos */}
      {activeVideoIndex !== null && (
        <div 
          onClick={closeVideoModal}
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100vw', height: '100vh',
            backgroundColor: 'rgba(5, 8, 16, 0.98)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(12px)',
            padding: '10px'
          }}
        >
          <button 
            onClick={closeVideoModal}
            style={{
              position: 'absolute',
              top: '20px', right: '20px',
              background: 'none', border: 'none',
              color: '#ffffff', fontSize: '40px',
              cursor: 'pointer', zIndex: 10001
            }}
          >
            &times;
          </button>

          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '100%', 
              maxWidth: '1600px', 
              position: 'relative' 
            }}
          >
            <button
              onClick={navigateModalPrev}
              disabled={!filteredItems.slice(0, activeVideoIndex).some(i => i.category === 'video')}
              style={{
                position: 'absolute', left: '10px', zIndex: 10002,
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%', width: '50px', height: '50px',
                color: '#ffffff', cursor: 'pointer',
                visibility: filteredItems.slice(0, activeVideoIndex).some(i => i.category === 'video') ? 'visible' : 'hidden'
              }}
            >&#10094;</button>

            <div 
              onClick={(e) => e.stopPropagation()}
              style={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center' 
              }}
            >
              <div style={{ 
                width: '100%', 
                aspectRatio: '16/9', 
                maxHeight: '85vh', 
                background: '#000', 
                borderRadius: '8px', 
                overflow: 'hidden' 
              }}>
                {filteredItems[activeVideoIndex].videoUrl && (
                  <iframe
                    width="100%" height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${extractYouTubeId(filteredItems[activeVideoIndex].videoUrl)}?autoplay=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                    title={filteredItems[activeVideoIndex].title}
                    frameBorder="0"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              <h2 style={{ color: '#ffffff', marginTop: '16px', fontSize: '18px', textAlign: 'center', padding: '0 10px' }}>
                {filteredItems[activeVideoIndex].badge1}{filteredItems[activeVideoIndex].badge2 ? ` | ${filteredItems[activeVideoIndex].badge2}` : ''} - {filteredItems[activeVideoIndex].title}
              </h2>
            </div>

            <button
              onClick={navigateModalNext}
              disabled={!filteredItems.slice(activeVideoIndex + 1).some(i => i.category === 'video')}
              style={{
                position: 'absolute', right: '10px', zIndex: 10002,
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%', width: '50px', height: '50px',
                color: '#ffffff', cursor: 'pointer',
                visibility: filteredItems.slice(activeVideoIndex + 1).some(i => i.category === 'video') ? 'visible' : 'hidden'
              }}
            >&#10095;</button>
          </div>
        </div>
      )}

      {/* Modal View for Image Gallery */}
      {activeGallery && (
        <div className="modal-overlay" onClick={() => setActiveGallery(null)}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            
            <button className="close-btn" onClick={() => setActiveGallery(null)}>&times;</button>
            
            <div className="main-view">
              <Image 
                src={photographyData[activeGallery.catIdx].images[activeGallery.imgIdx]} 
                alt="Large View" 
                fill 
                sizes="(max-width: 1200px) 90vw, 1100px"
                style={{ objectFit: 'contain' }} 
              />
              
              <button 
                className="nav-btn prev" 
                onClick={(e) => { e.stopPropagation(); setActiveGallery({...activeGallery, imgIdx: Math.max(0, activeGallery.imgIdx - 1)})}}
              >&#10094;</button>
              <button 
                className="nav-btn next" 
                onClick={(e) => { e.stopPropagation(); setActiveGallery({...activeGallery, imgIdx: Math.min(photographyData[activeGallery.catIdx].images.length - 1, activeGallery.imgIdx + 1)})}}
              >&#10095;</button>
            </div>

            <div className="thumb-sidebar">
              {photographyData[activeGallery.catIdx].images.map((img, i) => (
                <div 
                  key={i} 
                  className={`thumb-item ${activeGallery.imgIdx === i ? 'active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setActiveGallery({...activeGallery, imgIdx: i})}}
                >
                  <Image src={img} alt="Thumbnail" fill sizes="120px" style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}