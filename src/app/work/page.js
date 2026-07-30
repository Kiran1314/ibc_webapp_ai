'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { photographyData } from '../work/photographyData'; 
import { audioCategories, audioLanguages, audioTracksData } from '../work/audiotracks';
import Image from 'next/image';

// Modern Mini Audio Player Component with Replay & Clean Metas
function AudioPlayerCard({ track }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [durationTime, setDurationTime] = useState('00:45');

  const formatTime = (secs) => {
    if (isNaN(secs)) return '00:00';
    const mins = Math.floor(secs / 60);
    const remainSecs = Math.floor(secs % 60);
    return `${mins < 10 ? '0' : ''}${mins}:${remainSecs < 10 ? '0' : ''}${remainSecs}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.error("Playback prevented:", err));
    }
  };

  const restartAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(err => console.error("Replay prevented:", err));
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration || 45;
    setProgress((current / duration) * 100);
    setCurrentTime(formatTime(current));
    if (!isNaN(audioRef.current.duration)) {
      setDurationTime(formatTime(audioRef.current.duration));
    }
  };

  const subCategoryLabel = track.category || track.language || 'General';

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(16, 22, 38, 0.95), rgba(10, 14, 26, 0.98))',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '16px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: isPlaying ? '0 0 25px rgba(0, 212, 255, 0.25), inset 0 0 10px rgba(0, 112, 243, 0.15)' : '0 8px 24px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.3s ease'
    }}>
      <audio 
        ref={audioRef} 
        src={track.audioUrl} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Top Audio Player Unit */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        borderRadius: '12px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        marginBottom: '16px'
      }}>
        {/* Play Button */}
        <button 
          onClick={togglePlay}
          style={{
            background: isPlaying ? '#00d4ff' : '#0b0f19',
            border: '2px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '12px',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isPlaying ? '#000' : '#ffffff',
            cursor: 'pointer',
            flexShrink: 0,
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
            transition: 'all 0.2s ease'
          }}
        >
          {isPlaying ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5V19L19 12L8 5Z"/></svg>
          )}
        </button>

        {/* Progress & Waveform Track */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #0070f3, #00d4ff)', transition: 'width 0.1s linear' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#6b7280', fontFamily: 'monospace' }}>
            <span>{currentTime}</span>
            <span>{durationTime}</span>
          </div>
        </div>

        {/* Replay Button */}
        <button 
          onClick={restartAudio}
          title="Restart Audio"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9ca3af',
            cursor: 'pointer',
            fontSize: '13px',
            flexShrink: 0
          }}
        >
          ↺
        </button>

        {/* Mute Button */}
        <button 
          onClick={toggleMute}
          style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: '15px', flexShrink: 0 }}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
      </div>

      {/* Bottom Track Meta */}
      <div>
        <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff', marginBottom: '4px', lineHeight: '1.3' }}>
          {track.title}
        </h3>
        <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>
          {subCategoryLabel} <span style={{ margin: '0 4px', color: '#4b5563' }}>•</span> Voiceover Track
        </p>
      </div>
    </div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState('all');
  const [subFilterType, setSubFilterType] = useState('category'); // 'category' or 'language'
  const [subFilter, setSubFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  const [isMounted, setIsMounted] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const [activeGallery, setActiveGallery] = useState(null);
  const containerRef = useRef(null);
  const stickyFilterRef = useRef(null); // Ref for automatic scrolling to top of sticky filter bar

  const filterButtons = [
    { id: 'all', label: 'All Work' },
    { id: 'audio', label: 'Audio' },
    { id: 'video', label: 'Video' },
    { id: 'photo', label: 'Photography' },
    { id: 'ai', label: 'AI Production' },
    { id: 'digital', label: 'Digital' }
  ];

  const subFiltersMap = {
    video: [
      'Event', 'Testimonial', 'Corporate Presentation', 'Timelapse', 
      'Drone Footage', '360° Footage', 'E-Learning', 'Commercial', 
      'Animation', 'Dubbing', 'Augmented Reality', 'Virtual Reality', 'Social Media Reel'
    ],
    photo: ['Industrial Photography', 'Event Photography', 'Facilities Photography', 'Property Photography'],
    ai: ['Product Campaign', 'Avatar-Based'],
    digital: ['Corporate', 'Ecommerce']
  };

  const youtubeVideoData = [
    { category: 'video', badge1: 'Event', badge2: 'Testimonial', title: 'Sharjah Ladies Club', videoUrl: 'https://www.youtube.com/watch?v=uMwgrpkAqZo' },
    { category: 'video', badge1: 'Event', title: 'Agnice Iftar Event', videoUrl: 'https://www.youtube.com/watch?v=F54oY2qkvZ4' },
    { category: 'video', badge1: 'Event', title: 'HR Summit & Expo', videoUrl: 'https://www.youtube.com/watch?v=pVkCroer8oc' },
    { category: 'video', badge1: 'Corporate Presentation', title: 'Al Khaleej', videoUrl: 'https://www.youtube.com/watch?v=T2QXEV3bwcg' },
    { category: 'video', badge1: 'Corporate Presentation', title: 'Scitra', videoUrl: 'https://www.youtube.com/watch?v=5lLXv-CsmUk' },
    { category: 'video', badge1: 'Corporate Presentation', title: 'ACME', videoUrl: 'https://www.youtube.com/watch?v=ORqROH8rsJ4' },
    { category: 'video', badge1: 'Timelapse', title: 'Enova', videoUrl: 'https://www.youtube.com/watch?v=m7s_bBwnkxU' },
    { category: 'video', badge1: 'Timelapse', title: 'Majid Al Futtaim', videoUrl: 'https://www.youtube.com/watch?v=BKM4ROd5nr8' },
    { category: 'video', badge1: 'Timelapse', badge2: 'Drone Footage', title: 'Enova', videoUrl: 'https://www.youtube.com/watch?v=szc17K-ZsG0' },
    { category: 'video', badge1: 'Timelapse', title: 'Scan Electro Mechanical', videoUrl: 'https://www.youtube.com/watch?v=IacUWAZwgls' },
    { category: 'video', badge1: 'Drone Footage', title: 'Drone Showcase', videoUrl: 'https://www.youtube.com/watch?v=3UHRsLUKDNg' },
    { category: 'video', badge1: 'Drone Footage', title: 'Emitech', videoUrl: 'https://www.youtube.com/watch?app=desktop&v=cSrsOeWn5I4' },
    { category: 'video', badge1: 'Testimonial', title: 'Al Sharq Hospital', videoUrl: 'https://www.youtube.com/watch?v=0Q6nbRPw6FM&t=388s' },
    { category: 'video', badge1: 'Testimonial', title: 'Canon', videoUrl: 'https://www.youtube.com/watch?v=q0LbDWQghSE' },
    { category: 'video', badge1: 'Testimonial', title: 'Power Group', videoUrl: 'https://www.youtube.com/watch?v=ijygND8UMi8' },
    { category: 'video', badge1: '360° Footage', title: '360° Experience 1', videoUrl: 'https://www.youtube.com/watch?v=3JYKRGzJ4og' },
    { category: 'video', badge1: '360° Footage', title: '360° Experience 2', videoUrl: 'https://www.youtube.com/watch?v=Kwnb64MnGbw' },
    { category: 'video', badge1: '360° Footage', title: '360° Experience 3', videoUrl: 'https://www.youtube.com/watch?v=aRTLsRoA_CI' },
    { category: 'video', badge1: 'E-Learning', title: 'Driving Classes 1', videoUrl: 'https://www.youtube.com/watch?v=vENU9kXnZRA' },
    { category: 'video', badge1: 'E-Learning', title: 'Driving Classes 2', videoUrl: 'https://www.youtube.com/watch?v=mdSOGQcRiMQ' },
    { category: 'video', badge1: 'Tutorial', badge2: 'Animation', title: 'TCL GCC', videoUrl: 'https://www.youtube.com/watch?v=LhFD5ksDn3U' },
    { category: 'video', badge1: 'Commercial', title: 'Buraq Car Rental 1', videoUrl: 'https://www.youtube.com/watch?v=2zyRRmCpTSA' },
    { category: 'video', badge1: 'Commercial', badge2: 'Animation', title: 'BNC Network', videoUrl: 'https://www.youtube.com/watch?v=KZmduB-zE2E' },
    { category: 'video', badge1: 'Commercial', title: 'Buraq Car Rental 2', videoUrl: 'https://www.youtube.com/watch?v=rPLxJIXUul4' },
    { category: 'video', badge1: 'Dubbing', title: 'Urdu', videoUrl: 'https://www.youtube.com/watch?v=qJxg9lSLpD8' },
    { category: 'video', badge1: 'Dubbing', title: 'English', videoUrl: 'https://www.youtube.com/watch?v=AlinFX6ePJE' },
    { category: 'video', badge1: 'Dubbing', title: 'Hindi', videoUrl: 'https://www.youtube.com/watch?v=MsVVtI_0_o4' },
    { category: 'video', badge1: 'Animation', title: 'House Tour', videoUrl: 'https://www.youtube.com/watch?v=MTuwPmqcFKQ' },
    { category: 'video', badge1: 'Animation', title: 'Dell', videoUrl: 'https://www.youtube.com/watch?v=0BbudrtTAQY' },
    { category: 'video', badge1: 'Animation', badge2: 'E-Learning', title: 'Car Driving Test', videoUrl: 'https://www.youtube.com/watch?v=JO0kED7fNb8' },
    { category: 'video', badge1: 'Augmented Reality', title: 'AR Experience 1', videoUrl: 'https://www.youtube.com/watch?app=desktop&v=4StiZ_bQW7Q' },
    { category: 'video', badge1: 'Virtual Reality', title: 'VR Experience', videoUrl: 'https://www.youtube.com/watch?app=desktop&v=LQFUyO7pVH0' },
    { category: 'video', badge1: 'Augmented Reality', title: 'AR Experience 2', videoUrl: 'https://www.youtube.com/watch?v=z4RjEz0Wg5M' },
    { category: 'video', badge1: 'Social Media Reel', title: 'Social Media Reel 01', videoUrl: 'https://www.youtube.com/shorts/jTyHmCd4HBU' },
    { category: 'video', badge1: 'Social Media Reel', title: 'Social Media Reel 02', videoUrl: 'https://www.youtube.com/shorts/mwwpkud5Yzc' },
    { category: 'video', badge1: 'Social Media Reel', title: 'Social Media Reel 03', videoUrl: 'https://www.youtube.com/shorts/F6OQvgGwSI0' }
  ];

  const structuralPortfolioItems = [
    { category: 'ai', badge1: 'AI Production', title: 'Retail Brand — AI Product Campaign', desc: '100+ AI-generated product visuals for e-commerce launch.' },
    { category: 'digital', badge1: 'Digital', title: 'Corporate Group — E-Learning Platform', desc: 'Full LMS development with 40+ interactive modules.' }
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

  const getCombinedItems = () => {
    if (filter === 'audio') {
      return audioTracksData.filter(track => {
        if (subFilter === 'all') return true;
        if (subFilterType === 'category') {
          return track.type === 'category' && track.category.toLowerCase() === subFilter.toLowerCase();
        } else {
          return track.type === 'language' && track.language.toLowerCase() === subFilter.toLowerCase();
        }
      });
    }

    if (filter === 'video') {
      return youtubeVideoData.filter(item => {
        const matchesSub = subFilter === 'all' || 
          (item.badge1 && item.badge1.toLowerCase().includes(subFilter.toLowerCase())) ||
          (item.badge2 && item.badge2.toLowerCase().includes(subFilter.toLowerCase())) ||
          (item.title && item.title.toLowerCase().includes(subFilter.toLowerCase()));
        return matchesSub;
      });
    }

    const baseItems = [...structuralPortfolioItems, ...youtubeVideoData, ...photographyCategoryItems];
    return baseItems.filter(item => {
      const matchesCategory = filter === 'all' || item.category === filter;
      const matchesSub = subFilter === 'all' || 
        (item.badge1 && item.badge1.toLowerCase().includes(subFilter.toLowerCase())) ||
        (item.badge2 && item.badge2.toLowerCase().includes(subFilter.toLowerCase())) ||
        (item.title && item.title.toLowerCase().includes(subFilter.toLowerCase()));
      return matchesCategory && matchesSub;
    });
  };

  const allFilteredItems = getCombinedItems();
  const totalPages = Math.ceil(allFilteredItems.length / itemsPerPage);
  const paginatedItems = allFilteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, subFilterType, subFilter]);

  // Handler to change main category and automatically scroll to the sticky filter bar
  const handleMainCategorySelect = (btnId) => {
    setFilter(btnId);
    setSubFilter('all');
    setSubFilterType('category');

    if (stickyFilterRef.current) {
      const yOffset = -64; // Navbar height offset
      const element = stickyFilterRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <title>Work Samples | IBC Studio</title>
      <meta name="description" content="Browse our curated selection of high-impact visual campaigns, corporate films, and multilingual audio architectures produced for UAE’s leading brands." />
      
      <style>{`
        .main-wfbtn {
          white-space: nowrap;
          flex-shrink: 0;
          padding: 10px 22px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #a0aec0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .main-wfbtn:hover, .main-wfbtn.active {
          background: linear-gradient(135deg, #0070f3, #00d4ff);
          border-color: #00d4ff;
          color: #ffffff;
          box-shadow: 0 0 20px rgba(0, 112, 243, 0.5);
        }

        .sub-filters-container {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 4px;
        }
        @media (min-width: 1024px) {
          .sub-filters-container {
            flex-wrap: wrap;
            overflow-x: visible;
            max-height: 120px;
            overflow-y: auto;
          }
        }

        .sub-filter-tab {
          white-space: nowrap;
          flex-shrink: 0;
          font-size: 12px;
          font-weight: 500;
          padding: 7px 14px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #a0aec0;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .sub-filter-tab:hover {
          border-color: rgba(255, 255, 255, 0.3);
          color: #ffffff;
        }
        .sub-filter-tab.active-cat {
          background: #00d4ff !important;
          border-color: #00d4ff !important;
          color: #000000 !important;
          font-weight: 700;
          box-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
        }
        .sub-filter-tab.active-lang {
          background: #0070f3 !important;
          border-color: #00d4ff !important;
          color: #ffffff !important;
          font-weight: 700;
          box-shadow: 0 0 15px rgba(0, 112, 243, 0.5);
        }

        .pagination-bar {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding-bottom: 80px;
          padding-left: clamp(22px, 6vw, 80px);
          padding-right: clamp(22px, 6vw, 80px);
          overflow-x: auto;
          scrollbar-width: none;
        }
        .pagination-bar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="page active" id="pg-work" ref={containerRef} style={{ overflowX: 'clip', width: '100%' }}>
        <div className="pw" style={{ width: '100%', opacity: isMounted ? 1 : 0, transition: 'opacity 0.65s ease' }}>
          
          <div className="sec" style={{ paddingTop: 'clamp(120px, 15vh, 160px)', paddingBottom: '24px', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="lbl">Portfolio</div>
            <h1 className="title" style={{ marginBottom: '16px', fontSize: 'clamp(32px, 5vw, 50px)' }}>
              Work That Speaks
            </h1>
            <p className="desc" style={{ maxWidth: '540px', marginBottom: 0 }}>
              A curated selection of projects across our core service areas.
            </p>
          </div>

          {/* STANDALONE STICKY FILTER SECTION */}
          <div ref={stickyFilterRef} style={{
            position: 'sticky',
            top: '64px',
            zIndex: 999,
            background: 'rgba(10, 14, 26, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '14px',
            paddingBottom: '14px',
            paddingLeft: 'clamp(22px, 6vw, 80px)',
            paddingRight: 'clamp(22px, 6vw, 80px)',
            marginBottom: '35px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px', scrollbarWidth: 'none' }}>
              {filterButtons.map((btn) => (
                <button
                  key={btn.id}
                  className={`main-wfbtn ${filter === btn.id ? 'active' : ''}`}
                  onClick={() => handleMainCategorySelect(btn.id)}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* ANIMATED SLIDE-DOWN SUB-FILTERS FOR AUDIO */}
            <AnimatePresence mode="wait">
              {filter === 'audio' && (
                <motion.div 
                  key="audio-subfilters"
                  initial={{ opacity: 0, y: -15, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -15, height: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  style={{ marginTop: '8px', overflow: 'hidden' }}
                >
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                    <button 
                      onClick={() => { setSubFilterType('category'); setSubFilter('all'); }}
                      style={{
                        padding: '8px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', cursor: 'pointer',
                        background: subFilterType === 'category' ? '#00d4ff' : 'rgba(255,255,255,0.05)',
                        color: subFilterType === 'category' ? '#000000' : '#ffffff',
                        border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '6px',
                        boxShadow: subFilterType === 'category' ? '0 0 15px rgba(0, 212, 255, 0.4)' : 'none',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span>🎧</span> CATEGORIES {subFilterType === 'category' ? '▲' : '▼'}
                    </button>
                    <button 
                      onClick={() => { setSubFilterType('language'); setSubFilter('all'); }}
                      style={{
                        padding: '8px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', cursor: 'pointer',
                        background: subFilterType === 'language' ? '#0070f3' : 'rgba(255,255,255,0.05)',
                        color: '#ffffff',
                        border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '6px',
                        boxShadow: subFilterType === 'language' ? '0 0 15px rgba(0, 112, 243, 0.5)' : 'none',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span>🔊</span> LANGUAGES {subFilterType === 'language' ? '▲' : '▼'}
                    </button>
                  </div>

                  <div className="sub-filters-container">
                    {subFilterType === 'category' ? (
                      audioCategories.map((cat, idx) => {
                        const isImg = cat.icon && (cat.icon.startsWith('http') || cat.icon.startsWith('/') || cat.icon.includes('.'));
                        return (
                          <button
                            key={idx}
                            className={`sub-filter-tab ${subFilter === (cat.name === 'All Categories' ? 'all' : cat.name) ? 'active-cat' : ''}`}
                            onClick={() => setSubFilter(cat.name === 'All Categories' ? 'all' : cat.name)}
                            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                          >
                            {isImg ? (
                              <img src={cat.icon} alt="" width="16" height="12" style={{ borderRadius: '2px', objectFit: 'cover' }} />
                            ) : (
                              <span>{cat.icon}</span>
                            )}
                            <span>{cat.name}</span>
                            <span style={{ opacity: 0.7, fontSize: '11px' }}>({cat.count})</span>
                          </button>
                        );
                      })
                    ) : (
                      audioLanguages.map((lang, idx) => {
                        const isImg = lang.icon && (lang.icon.startsWith('http') || lang.icon.startsWith('/') || lang.icon.includes('.'));
                        return (
                          <button
                            key={idx}
                            className={`sub-filter-tab ${subFilter === (lang.name === 'All Languages' ? 'all' : lang.name) ? 'active-lang' : ''}`}
                            onClick={() => setSubFilter(lang.name === 'All Languages' ? 'all' : lang.name)}
                            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                          >
                            {isImg ? (
                              <img src={lang.icon} alt="" width="16" height="12" style={{ borderRadius: '2px', objectFit: 'cover' }} />
                            ) : (
                              <span>{lang.icon}</span>
                            )}
                            <span>{lang.name}</span>
                            <span style={{ opacity: 0.7, fontSize: '11px' }}>({lang.count})</span>
                          </button>
                        );
                      })
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ANIMATED SLIDE-DOWN SUB-FILTERS FOR OTHER CATEGORIES */}
            <AnimatePresence mode="wait">
              {filter !== 'all' && filter !== 'audio' && subFiltersMap[filter] && (
                <motion.div 
                  key={`${filter}-subfilters`}
                  initial={{ opacity: 0, y: -15, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -15, height: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="sub-filters-container" 
                  style={{ marginTop: '10px', overflow: 'hidden' }}
                >
                  <button className={`sub-filter-tab ${subFilter === 'all' ? 'active-cat' : ''}`} onClick={() => setSubFilter('all')}>
                    All
                  </button>
                  {subFiltersMap[filter].map((sub, idx) => (
                    <button key={idx} className={`sub-filter-tab ${subFilter === sub ? 'active-cat' : ''}`} onClick={() => setSubFilter(sub)}>
                      {sub}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ANIMATED GRID CONTENTS SECTION */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${filter}-${subFilter}-${subFilterType}-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{ 
                paddingBottom: '60px', 
                paddingLeft: 'clamp(22px, 6vw, 80px)', 
                paddingRight: 'clamp(22px, 6vw, 80px)'
              }}
            >
              {filter === 'audio' ? (
                <div className="grid grid-cols-1 lg:grid-cols-4" style={{ display: 'grid', gap: '20px' }}>
                  {paginatedItems.map((track, index) => (
                    <AudioPlayerCard key={track.id || index} track={track} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ display: 'grid', gap: '30px' }}>
                  {paginatedItems.map((item, index) => {
                    const videoId = item.category === 'video' ? extractYouTubeId(item.videoUrl) : null;
                    const imgSrc = item.isGallery 
                      ? photographyData[item.catIdx].images[0] 
                      : (videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : 'https://placehold.co/600x400/000000/FFFFFF/png?text=IBC+Studio');

                    return (
                      <div 
                        key={index} 
                        onClick={() => {
                          if (item.category === 'video') {
                            const realIndex = (currentPage - 1) * itemsPerPage + index;
                            setActiveVideoIndex(realIndex);
                          }
                          if (item.isGallery) {
                            setActiveGallery({ catIdx: item.catIdx, imgIdx: 0 });
                          }
                        }}
                        style={{ cursor: 'pointer', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                      >
                        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', backgroundColor: '#1a2035' }}>
                          <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 10, display: 'flex', gap: '6px' }}>
                            {item.badge1 && <span style={{ fontSize: '11px', padding: '4px 10px', backgroundColor: 'rgba(0,0,0,0.7)', color: '#fff', borderRadius: '12px' }}>{item.badge1}</span>}
                            {item.badge2 && <span style={{ fontSize: '11px', padding: '4px 10px', backgroundColor: 'rgba(0,0,0,0.7)', color: '#fff', borderRadius: '12px' }}>{item.badge2}</span>}
                          </div>
                          <Image src={imgSrc} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                          {item.category === 'video' && (
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#0070f3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M8 5V19L19 12L8 5Z" fill="#ffffff" /></svg>
                            </div>
                          )}
                        </div>
                        <div style={{ padding: '16px' }}>
                          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#fff' }}>{item.title}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="pagination-bar">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => { 
                    setCurrentPage(p); 
                    if (stickyFilterRef.current) {
                      const yOffset = -64;
                      const element = stickyFilterRef.current;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  style={{
                    minWidth: '40px',
                    height: '40px',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    background: currentPage === p ? 'linear-gradient(135deg, #0070f3, #00d4ff)' : 'rgba(255,255,255,0.05)',
                    border: currentPage === p ? '1px solid #00d4ff' : '1px solid rgba(255,255,255,0.1)',
                    color: '#fff',
                    fontWeight: '600',
                    cursor: 'pointer',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Video Modal */}
      {activeVideoIndex !== null && (
        <div onClick={() => setActiveVideoIndex(null)} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(5, 8, 16, 0.95)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: '1000px', aspectRatio: '16/9', background: '#000', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
            <button onClick={() => setActiveVideoIndex(null)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#fff', fontSize: '32px', cursor: 'pointer', zIndex: 100 }}>&times;</button>
            <iframe
              width="100%" height="100%"
              src={`https://www.youtube-nocookie.com/embed/${extractYouTubeId(allFilteredItems[activeVideoIndex]?.videoUrl)}?autoplay=1`}
              title="Video Player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Photo Gallery Modal */}
      {activeGallery && (
        <div onClick={() => setActiveGallery(null)} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', width: '90vw', height: '80vh' }}>
            <button onClick={() => setActiveGallery(null)} style={{ position: 'absolute', top: 10, right: 10, color: '#fff', fontSize: '36px', background: 'none', border: 'none', cursor: 'pointer', zIndex: 100 }}>&times;</button>
            <Image 
              src={photographyData[activeGallery.catIdx].images[activeGallery.imgIdx]} 
              alt="Gallery View" 
              fill 
              style={{ objectFit: 'contain' }} 
            />
          </div>
        </div>
      )}
    </>
  );
}