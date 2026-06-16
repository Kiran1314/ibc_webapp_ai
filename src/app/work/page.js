'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Work() {
  const [filter, setFilter] = useState('all');
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

  const filterButtons = [
    { id: 'all', label: 'All Work' },
    { id: 'audio', label: 'Audio' },
    { id: 'video', label: 'Video' },
    { id: 'photo', label: 'Photography' },
    { id: 'ai', label: 'AI Production' },
    { id: 'digital', label: 'Digital' }
  ];

  const portfolioItems = [
    { category: 'video', badge: 'Video', title: 'Emirates — Brand Campaign Film', desc: 'Full corporate brand film, 4K with sound design.' },
    { category: 'audio', badge: 'Audio', title: 'DEWA — Multilingual IVR System', desc: 'Complete 6-language IVR recording and production.' },
    { category: 'photo', badge: 'Photography', title: 'Aldar Properties — Real Estate Campaign', desc: 'Architectural and lifestyle photography across 3 properties.' },
    { category: 'ai', badge: 'AI Production', title: 'Retail Brand — AI Product Campaign', desc: '100+ AI-generated product visuals for e-commerce launch.' },
    { category: 'video', badge: 'Drone', title: 'RTA Dubai — Infrastructure Drone Film', desc: 'Aerial videography of major infrastructure projects across Dubai.' },
    { category: 'digital', badge: 'Digital', title: 'Corporate Group — E-Learning Platform', desc: 'Full LMS development with 40+ interactive modules.' },
    { category: 'audio', badge: 'Audio', title: 'National Brand — Jingle Production', desc: 'Original brand jingle composed and produced in 5 languages.' },
    { category: 'video', badge: 'Events', title: 'GITEX — Multi-Day Event Coverage', desc: 'Full event production, 4-camera live and highlights reel.' },
    { category: 'photo', badge: 'Photography', title: 'Financial Institution — Executive Portraits', desc: 'C-suite portrait photography for annual report.' }
  ];

  // Trigger page load fade-in on structural container mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Synchronize dynamic header top transparency style metrics with body attributes
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

  // High-Performance Intersection Observer Engine for Scroll Fades across nested layout grids
  useEffect(() => {
    const revealElements = containerRef.current?.querySelectorAll('.reveal');
    if (!revealElements || revealElements.length === 0) return;

    const observerOptions = {
      root: null, // Viewport defaults directly to the browser screen window
      rootMargin: '0px 0px -100px 0px', // Triggers 100px before the element fully enters screen bounds
      threshold: 0.05 // Fires immediately when 5% of the portfolio item is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view'); // Re-triggers animations seamlessly when scrolling up/down
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [filter]); // Safely cleans up and re-observes fresh grid blocks whenever sorting state shifts

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <>
      {/* INJECT SEMANTIC SEO DIRECTLY INTO THE HEAD PANEL FOR SINGLE-FILE SETUP */}
      <title>Work Samples | IBC Studio</title>
      <meta name="description" content="Browse our curated selection of high-impact visual campaigns, corporate films, and multilingual audio architectures produced for UAE’s leading brands, government entities, and enterprises." />
      <meta name="keywords" content="video production showcase uae, corporate film portfolio dubai, professional photography samples, dynamic media campaigns dubai, commercial showreel uae" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ibcstudio.com/work" />
      <meta property="og:title" content="Our Work | Corporate Media & Production Portfolio | IBC Studio" />
      <meta property="og:description" content="A curated selection of high-impact client projects across audio, video, photography, AI, and custom digital tool architectures." />
      <meta property="og:site_name" content="IBC Studio" />

      <div className="page active" id="pg-work" ref={containerRef}>
        {/* INNER PAGE WRAPPER WITH LINK-TRANSITION FADE STATE ENGINE */}
        <div 
          className="pw" 
          style={{ 
            width: '100%',
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          
          {/* TOP TITLE JUMBOTRON */}
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

          {/* RESPONSIVE HORIZONTAL FILTER BUTTONS ROW */}
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

          {/* PORTFOLIO GRID - SCROLL-FADES IN REAL-TIME */}
          <div 
            className="wgrid" 
            style={{ 
              width: '100%', 
              paddingBottom: '80px',
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)'
            }}
          >
            {filteredItems.map((item, index) => (
              <div 
                key={`${filter}-${index}`} 
                className="witem reveal"
                style={{ display: 'block', width: '100%' }}
              >
                <div className="wthumb" style={{ background: 'linear-gradient(135deg, #0d1117, #1a2035)', position: 'relative' }}>
                  <span className="wbadge">{item.badge}</span>
                </div>
                <div className="wi">
                  <h3 style={{ wordBreak: 'break-word', overflowWrap: 'break-word', fontSize: '16px', fontWeight: '700' }}>{item.title}</h3>
                  <p style={{ wordBreak: 'break-word', overflowWrap: 'break-word', color: 'var(--dim)', fontSize: '13px' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}