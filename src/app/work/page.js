'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { photographyData } from '../work/photographyData'; 
import Image from 'next/image';

export default function Work() {
  const [filter, setFilter] = useState('all');
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

  // Extracted first 5 YouTube elements per heading with round brackets removed from badges [cite: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
  const youtubeVideoData = [
    // Event Productions
    { category: 'video', badge: 'Event Testimonial', title: 'Sharjah Ladies Club', videoUrl: 'https://www.youtube.com/watch?v=uMwgrpkAqZo' },
    { category: 'video', badge: 'Event Testimonial', title: 'Informa', videoUrl: 'https://www.youtube.com/watch?v=ZsnbWnpyiWo' },
    { category: 'video', badge: 'Event', title: 'HR Summit & Expo', videoUrl: 'https://www.youtube.com/watch?v=pVkCroer8oc' },
    { category: 'video', badge: 'Group Discussion', title: 'Etisalat Group', videoUrl: 'https://www.youtube.com/watch?v=Up7tTIW4eg0' },
    { category: 'video', badge: 'Event Testimonial', title: 'Unify', videoUrl: 'https://www.youtube.com/watch?v=ONGN9eTNUzs' },

    // Corporate Videos
    { category: 'video', badge: 'Corporate Presentation', title: 'Al Khaleej', videoUrl: 'https://www.youtube.com/watch?v=T2QXEV3bwcg' },
    { category: 'video', badge: 'Corporate Presentation', title: 'Scitra', videoUrl: 'https://www.youtube.com/watch?v=5lLXv-CsmUk' },
    { category: 'video', badge: 'Corporate Presentation', title: 'ACME', videoUrl: 'https://www.youtube.com/watch?v=ORqROH8rsJ4' },
    { category: 'video', badge: 'Corporate Presentation', title: 'Mirr Oils', videoUrl: 'https://www.youtube.com/watch?v=Xsym-oTEwEw' },
    { category: 'video', badge: 'Corporate Presentation', title: 'Al Khaleej', videoUrl: 'https://www.youtube.com/watch?v=sd_Pzgf0hjo' },

    // Timelapse Productions
    { category: 'video', badge: 'Timelapse', title: 'Enova', videoUrl: 'https://www.youtube.com/watch?v=m7s_bBwnkxU' },
    { category: 'video', badge: 'Timelapse', title: 'Majid Al Futtaim', videoUrl: 'https://www.youtube.com/watch?v=BKM4ROd5nr8' },
    { category: 'video', badge: 'Timelapse', title: 'Scan Electro Mechanical', videoUrl: 'https://www.youtube.com/watch?v=IacUWAZwgls' },
    { category: 'video', badge: 'Timelapse', title: 'Enova', videoUrl: 'https://www.youtube.com/watch?v=r1gTHQhUXOM' },
    { category: 'video', badge: 'Timelapse', title: 'Enova', videoUrl: 'https://www.youtube.com/watch?v=UtHhr5yNJRo' },

    // Drone Productions
    { category: 'video', badge: 'Drone Footage', title: 'Drone Showcase', videoUrl: 'https://www.youtube.com/watch?v=3UHRsLUKDNg' },
    { category: 'video', badge: 'Drone Footage', title: 'Drone Showcase', videoUrl: 'https://www.youtube.com/watch?v=VCBpPd-_w2w' },
    { category: 'video', badge: 'Drone Footage Timelapse', title: 'Enova', videoUrl: 'https://www.youtube.com/watch?v=szc17K-ZsG0' },
    { category: 'video', badge: 'Drone Footage', title: 'Enova', videoUrl: 'https://www.youtube.com/watch?v=YUg2iVqLPzo' },
    { category: 'video', badge: 'Drone Footage', title: 'Emitech', videoUrl: 'https://www.youtube.com/watch?app=desktop&v=cSrsOeWn5I4' },

    // Testimonial Videos
    { category: 'video', badge: 'Testimonial', title: 'Al Sharq Hospital', videoUrl: 'https://www.youtube.com/watch?v=0Q6nbRPw6FM&t=388s' },
    { category: 'video', badge: 'Testimonial', title: 'Canon', videoUrl: 'https://www.youtube.com/watch?v=q0LbDWQghSE' },
    { category: 'video', badge: 'Testimonial', title: 'Power Group', videoUrl: 'https://www.youtube.com/watch?v=ijygND8UMi8' },
    { category: 'video', badge: 'Testimonial', title: 'Western Union', videoUrl: 'https://www.youtube.com/watch?v=Ukok_pkecaQ' },
    { category: 'video', badge: 'Testimonial', title: 'Informa', videoUrl: 'https://www.youtube.com/watch?v=CVrthZ1vHMY' },

    // 360° Videos
    { category: 'video', badge: '360° Footage', title: '360° Experience', videoUrl: 'https://www.youtube.com/watch?v=3JYKRGzJ4og' },
    { category: 'video', badge: '360° Footage', title: '360° Experience', videoUrl: 'https://www.youtube.com/watch?v=Kwnb64MnGbw' },
    { category: 'video', badge: '360° Footage', title: '360° Experience', videoUrl: 'https://www.youtube.com/watch?v=aRTLsRoA_CI' },
    { category: 'video', badge: '360° Footage', title: '360° Experience', videoUrl: 'https://www.youtube.com/watch?v=43VvUTAoE2o' },

    // Tutorial & E-Learning
    { category: 'video', badge: 'E-Learning', title: 'Driving Classes', videoUrl: 'https://www.youtube.com/watch?v=vENU9kXnZRA' },
    { category: 'video', badge: 'E-Learning', title: 'Driving Classes', videoUrl: 'https://www.youtube.com/watch?v=mdSOGQcRiMQ' },
    { category: 'video', badge: 'Tutorial Animation', title: 'TCL GCC', videoUrl: 'https://www.youtube.com/watch?v=LhFD5ksDn3U' },
    { category: 'video', badge: 'E-Learning', title: 'Driving Classes', videoUrl: 'https://www.youtube.com/watch?v=P8R2fYMU1ug' },
    { category: 'video', badge: 'E-Learning', title: 'Driving Classes', videoUrl: 'https://www.youtube.com/watch?v=MyI7wCHAnV4' },

    // Commercials
    { category: 'video', badge: 'Commercial', title: 'Buraq Car Rental', videoUrl: 'https://www.youtube.com/watch?v=2zyRRmCpTSA' },
    { category: 'video', badge: 'Commercial Animation', title: 'BNC Network', videoUrl: 'https://www.youtube.com/watch?v=KZmduB-zE2E' },
    { category: 'video', badge: 'Commercial', title: 'Buraq Car Rental', videoUrl: 'https://www.youtube.com/watch?v=rPLxJIXUul4' },
    { category: 'video', badge: 'Commercial Animation', title: 'Finance House', videoUrl: 'https://www.youtube.com/watch?v=RWyYvHb67uk' },
    { category: 'video', badge: 'Commercial Animation', title: 'Cavallo', videoUrl: 'https://www.youtube.com/watch?v=c8vyaPRNxn4' },

    // Dubbing
    { category: 'video', badge: 'Dubbing', title: 'Urdu', videoUrl: 'https://www.youtube.com/watch?v=qJxg9lSLpD8' },
    { category: 'video', badge: 'Dubbing', title: 'English', videoUrl: 'https://www.youtube.com/watch?v=AlinFX6ePJE' },
    { category: 'video', badge: 'Dubbing', title: 'Hindi', videoUrl: 'https://www.youtube.com/watch?v=MsVVtI_0_o4' },
    { category: 'video', badge: 'Dubbing', title: 'Hindi', videoUrl: 'https://www.youtube.com/watch?v=S0wyGudHueo' },

    // Animation
    { category: 'video', badge: 'Animation', title: 'House Tour', videoUrl: 'https://www.youtube.com/watch?v=MTuwPmqcFKQ' },
    { category: 'video', badge: 'Animation', title: 'Dell', videoUrl: 'https://www.youtube.com/watch?v=0BbudrtTAQY' },
    { category: 'video', badge: 'Animation E-Learning', title: 'Car Driving Test', videoUrl: 'https://www.youtube.com/watch?v=JO0kED7fNb8' },
    { category: 'video', badge: 'Animation E-Learning', title: 'Car Driving Test', videoUrl: 'https://www.youtube.com/watch?v=K1FainlGRUM' },
    { category: 'video', badge: 'Animation E-Learning', title: 'Car Driving Test', videoUrl: 'https://www.youtube.com/watch?v=LxNPHBqH_Y0' },

    // AR / VR
    { category: 'video', badge: 'Augmented Reality', title: 'AR Experience', videoUrl: 'https://www.youtube.com/watch?app=desktop&v=4StiZ_bQW7Q' },
    { category: 'video', badge: 'Virtual Reality', title: 'VR Experience', videoUrl: 'https://www.youtube.com/watch?app=desktop&v=LQFUyO7pVH0' },
    { category: 'video', badge: 'Augmented Reality', title: 'AR Experience', videoUrl: 'https://www.youtube.com/watch?v=z4RjEz0Wg5M' },

    // Social Media Reels
    { category: 'video', badge: 'Social Media Reel', title: 'Social Media Reel 01', videoUrl: 'https://www.youtube.com/shorts/jTyHmCd4HBU' },
    { category: 'video', badge: 'Social Media Reel', title: 'Social Media Reel 02', videoUrl: 'https://www.youtube.com/shorts/mwwpkud5Yzc' },
    { category: 'video', badge: 'Social Media Reel', title: 'Social Media Reel 03', videoUrl: 'https://www.youtube.com/shorts/F6OQvgGwSI0' },
    { category: 'video', badge: 'Social Media Reel', title: 'Social Media Reel 04', videoUrl: 'https://www.youtube.com/shorts/uCvg7sHNgfw' },
    { category: 'video', badge: 'Social Media Reel', title: 'Social Media Reel 05', videoUrl: 'https://www.youtube.com/shorts/VPb_LEDLSws' }
  ];

  const structuralPortfolioItems = [
    { category: 'audio', badge: 'Audio', title: 'DEWA — Multilingual IVR System', desc: 'Complete 6-language IVR recording and production.' }, 
    { category: 'ai', badge: 'AI Production', title: 'Retail Brand — AI Product Campaign', desc: '100+ AI-generated product visuals for e-commerce launch.' },
    { category: 'digital', badge: 'Digital', title: 'Corporate Group — E-Learning Platform', desc: 'Full LMS development with 40+ interactive modules.' },
    { category: 'audio', badge: 'Audio', title: 'National Brand — Jingle Production', desc: 'Original brand jingle composed and produced in 5 languages.' }
  ];

  const extractYouTubeId = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };

const photographyCategoryItems = photographyData.map((cat, idx) => ({
  category: 'photo',
  badge: 'Photography',
  title: cat.label,
  //desc: `View gallery: ${cat.images.length} images`,
  isGallery: true, // This MUST be present
  catIdx: idx      // This index links to photographyData
}));

const baseCombinedItems = filter === 'video' 
  ? youtubeVideoData.map(item => ({ ...item, desc: '' }))
  : [...structuralPortfolioItems, ...youtubeVideoData.map(item => ({ ...item, desc: '' })), ...photographyCategoryItems];

  const filteredItems = filter === 'all'
    ? baseCombinedItems
    : baseCombinedItems.filter(item => item.category === filter);

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
  }, [filter]);

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
              paddingBottom: '20px',
              marginBottom: '20px',
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
                onClick={() => setFilter(btn.id)}
                style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                {btn.label}
              </button>
            ))}
          </div>

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
  key={`${filter}-${index}`} 
  className="witem reveal"
  // Attach the click handler directly to the container
  onClick={() => {
              if (item.category === 'video') openVideoModal(index);
              if (item.isGallery) handlePhotoClick(item);
            }}
         style={{ 
    display: 'block', 
    width: '100%', 
    cursor: 'pointer', // Ensure the cursor shows it's clickable
    pointerEvents: 'auto' // Ensure the div receives pointer events
  }}
        
        
        >
 

        <div 
  className="wthumb" 
  style={{ 
    position: 'relative', // CRITICAL: This fixes the "static" error
    width: '100%',
    aspectRatio: '16/9',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#1a2035'
  }}
>
          <span style={{
            position: 'absolute', top: '12px', left: '12px', zIndex: 20,
            fontSize: '13px', padding: '6px 14px', fontWeight: '600',
            backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)',
            color: '#fff', borderRadius: '20px'
          }}>
            {item.badge}
          </span>

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
          {/* <p style={{ color: 'var(--dim)', fontSize: '14px' }}>{item.desc}</p> */}
        </div>
      </div>
    );
  })}
</div>
        </div>
      </div>

      {activeVideoIndex !== null && (
        <div 
          onClick={closeVideoModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(5, 8, 16, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(12px)',
            padding: '40px'
          }}
        >
          <button 
            onClick={closeVideoModal}
            style={{
              position: 'absolute',
              top: '24px',
              right: '32px',
              background: 'none',
              border: 'none',
              color: '#ffffff',
              fontSize: '40px',
              lineHeight: '1',
              cursor: 'pointer',
              zIndex: 10001,
              opacity: 0.7,
              transition: 'opacity 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}
          >
            &times;
          </button>

          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '1400px',
              position: 'relative'
            }}
          >
            <button
              onClick={navigateModalPrev}
              disabled={!filteredItems.slice(0, activeVideoIndex).some(i => i.category === 'video')}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '54px',
                height: '54px',
                color: '#ffffff',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                visibility: filteredItems.slice(0, activeVideoIndex).some(i => i.category === 'video') ? 'visible' : 'hidden',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
            >
              &#10094;
            </button>

            <div 
              onClick={(e) => e.stopPropagation()}
              style={{
                flex: 1,
                margin: '0 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                maxWidth: '90vw'
              }}
            >
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  maxHeight: '75vh',
                  background: '#000000',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
                }}
              >
                {filteredItems[activeVideoIndex].videoUrl && (
               <iframe
  width="100%"
  height="100%"
  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
  title={item.title}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  style={{ width: '100%', height: '100%', display: 'block' }}
/>
                )}
              </div>

              <h2
                key={activeVideoIndex}
                style={{
                  color: '#ffffff',
                  marginTop: '24px',
                  fontSize: 'clamp(20px, 3vw, 28px)',
                  fontWeight: '600',
                  textAlign: 'center',
                  animation: 'fadeInUpModal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                 {filteredItems[activeVideoIndex].badge} - {filteredItems[activeVideoIndex].title} 
              </h2>
            </div>

            <button
              onClick={navigateModalNext}
              disabled={!filteredItems.slice(activeVideoIndex + 1).some(i => i.category === 'video')}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '54px',
                height: '54px',
                color: '#ffffff',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                visibility: filteredItems.slice(activeVideoIndex + 1).some(i => i.category === 'video') ? 'visible' : 'hidden',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
            >
              &#10095;
            </button>
          </div>
        
 
        
        
        </div>

        
      )}

      {activeGallery && (
  <div className="modal-overlay" onClick={() => setActiveGallery(null)}>
    <div className="modal-container" onClick={e => e.stopPropagation()}>
      
      <button className="close-btn" onClick={() => setActiveGallery(null)}>&times;</button>
      
      {/* Main Image Stage */}
      <div className="main-view">
        <Image 
          src={photographyData[activeGallery.catIdx].images[activeGallery.imgIdx]} 
          alt="Large View" 
          fill 
          sizes="(max-width: 1200px) 90vw, 1100px"
          style={{ objectFit: 'contain' }} 
        />
        
        {/* Floating Nav Buttons */}
        <button 
          className="nav-btn prev" 
          onClick={(e) => { e.stopPropagation(); setActiveGallery({...activeGallery, imgIdx: Math.max(0, activeGallery.imgIdx - 1)})}}
        >&#10094;</button>
        <button 
          className="nav-btn next" 
          onClick={(e) => { e.stopPropagation(); setActiveGallery({...activeGallery, imgIdx: Math.min(photographyData[activeGallery.catIdx].images.length - 1, activeGallery.imgIdx + 1)})}}
        >&#10095;</button>
      </div>

      {/* Thumbnails: Visible on all devices, stacks at bottom on mobile */}
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