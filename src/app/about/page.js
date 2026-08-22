'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [isMuted, setIsMuted] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // Trigger page layout entry animation immediately on mount hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Track window dimensions for mobile responsiveness
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Force-trigger video play programmatically on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.6;
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented by browser policy:", error);
      });
    }
  }, []);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Synchronize dynamic header top transparency style metrics with body attributes
  useEffect(() => {
    if (window.scrollY <= 10) {
      document.body.classList.add('home-hero-top');
    } else {
      document.body.classList.remove('home-hero-top');
    }

    let ticking = false;
    const handleScrollMetrics = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 10) {
            document.body.classList.remove('home-hero-top');
          } else {
            document.body.classList.add('home-hero-top');
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScrollMetrics, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollMetrics);
      document.body.classList.remove('home-hero-top');
    };
  }, []);

  // High-Performance Intersection Observer Engine (Scroll Down Only - Stays Visible)
  useEffect(() => {
    const revealElements = containerRef.current?.querySelectorAll('.reveal');
    if (!revealElements || revealElements.length === 0) return;

    const observerOptions = {
      root: null, 
      rootMargin: '0px 0px -50px 0px', 
      threshold: 0.05 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <>
      <title>About Us | IBC Studio </title>
      <meta name="description" content="Learn the story behind UAE’s premier full-service media production house. Founded by K. Banerjee, IBC Studio has delivered corporate films, multilingual audio production, and custom digital infrastructure across the GCC." />
      <meta name="keywords" content="media production company UAE, video production company UAE, corporate video Dubai, audio production studio Dubai, post production studio Dubai, creative agency Dubai" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ibcstudio.com/about" />
      <meta property="og:title" content="About IBC Studio | 19+ Years of Creative Media Production in Dubai" />
      <meta property="og:description" content="Serving the UAE and Middle East for over 15 years with premier video, audio, photography, and digital development services." />
      <meta property="og:site_name" content="IBC Studio" />

      <div className="page active" id="pg-about" ref={containerRef}>
        {/* INNER PAGE WRAPPER WITH LINK-TRANSITION FADE STATE ENGINE */}
        <div 
          className="pw" 
          style={{ 
            width: '100%',
            paddingLeft: isMobile ? '0px' : 'clamp(38px, 6vw, 80px)',
            paddingRight: isMobile ? '0px' : 'clamp(38px, 6vw, 80px)',
            paddingBottom: '80px',
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
      
          {/* HERO STORY SECTION */}
          <div 
            className="ahwrap reveal in-view" 
            style={{ 
              width: '100%', 
              paddingTop: 'clamp(110px, 12vh, 150px)', 
              paddingBottom: '0px',
              paddingLeft: isMobile ? '20px' : '0px',
              paddingRight: isMobile ? '20px' : '0px'
            }}
          >
            {/* Padded Content Block for Text and Buttons */}
            <div style={{ width: '100%', marginBottom: '40px' }}>
              <div className="lbl">Our Story</div>
              <h1 style={{ wordBreak: 'break-word', fontSize: 'clamp(32px, 4.8vw, 58px)', lineHeight: '1.1' }}>
                More Than a Studio.<br />A Creative Force.
              </h1>
              <p style={{ marginTop: '18px', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                Founded in Dubai, IBC Studio began with a vision to combine creativity, technology, and storytelling under one roof. With over 19 years of industry experience, we have grown into a trusted media production company delivering high-quality audiovisual and digital solutions for brands and businesses across the region.
              </p>
              <div style={{ display: 'flex', gap: '14px', marginTop: '28px', flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-p" style={{ display: 'inline-flex', width: isMobile ? '100%' : 'auto', minWidth: '160px', justifyContent: 'center' }}>
                  Work With Us →
                </Link>
                <Link href="/work" className="btn-o" style={{ display: 'inline-flex', width: isMobile ? '100%' : 'auto', minWidth: '160px', justifyContent: 'center' }}>
                  See Our Work
                </Link>
              </div>
            </div>
            
            {/* Rounded End-to-End Video Wrapper */}
            <div 
              className="avwrap" 
              style={{ 
                width: isMobile ? 'calc(100% + 40px)' : '100%', 
                marginLeft: isMobile ? '-20px' : '0px',
                marginRight: isMobile ? '-20px' : '0px',
                marginTop: '30px', 
                marginBottom: '30px', 
                overflow: 'hidden', 
                position: 'relative', 
                aspectRatio: '16/9', 
                background: '#000', 
                borderRadius: isMobile ? '0px' : '16px' 
              }}
            >
              <video 
                ref={videoRef}
                src="https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FAUSpage_main%2FIBC%202026%20Services%20video%2010th%20august_1.webm?alt=media&token=73d07e33-1c41-4d9d-9c72-51460dd1ca98" 
                autoPlay 
                loop  
                playsInline
                controls
                controlsList="nodownload"
                disablePictureInPicture
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: 'inherit' }}
              />

              {/* Custom Sound Toggle Overlay Button */}
              <button
                type="button"
                onClick={toggleAudio}
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  zIndex: 10,
                  background: 'rgba(0, 0, 0, 0.75)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '30px',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backdropFilter: 'blur(4px)',
                  transition: 'background 0.2s ease',
                }}
              >
                {isMuted ? '🔇 Unmute Video' : '🔊 Sound On'}
              </button>
            </div>
          </div>

          <div className="divl"></div>

          {/* STATS COUNTER BAR */}
          <section className="sec reveal" style={{ width: '100%', paddingLeft: isMobile ? '20px' : '0px', paddingRight: isMobile ? '20px' : '0px' }}>
            <div className="stats-bar" style={{ width: '100%' }}>
              <div className="sitem reveal">
                <span className="snum">19<span className="a">+</span></span>
                <span className="slbl">Years Experience</span>
              </div>
              <div className="sitem reveal">
                <span className="snum">1K<span className="a">+</span></span>
                <span className="slbl">Video & Photo Projects</span>
              </div>
              <div className="sitem reveal">
                <span className="snum">3K<span className="a">+</span></span>
                <span className="slbl">Audio Projects</span>
              </div>
              <div className="sitem reveal">
                <span className="snum">3K<span className="a">+</span></span>
                <span className="slbl">Satisfied Clients</span>
              </div>
            </div>
          </section>

          <div className="divl"></div>

          {/* CORE CAPABILITIES SECTION */}
          <section className="sec reveal" style={{ width: '100%', paddingLeft: isMobile ? '20px' : '0px', paddingRight: isMobile ? '20px' : '0px' }}>
            <div className="split-grid" style={{ width: '100%' }}>
              <div className="reveal">
                <div className="lbl">What We Do</div>
                <h2 className="title" style={{ wordBreak: 'break-word' }}>End-to-End Media Production</h2>
                <p style={{ fontSize: '16.5px', color: 'var(--mid)', lineHeight: '1.75', marginBottom: '14px', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                  IBC Studio provides end-to-end media production and digital solutions including audio recording, dubbing, video production, photography, IVR systems, event coverage, AI-generated content, and digital development.
                </p>
                <p style={{ fontSize: '16.5px', color: 'var(--mid)', lineHeight: '1.75', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                  From corporate productions and commercials to social media and branded content, we create professional media experiences designed to communicate ideas clearly and effectively.
                </p>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
                {/* Audio Production */}
                <div className="reveal" style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '9px', padding: '20px', display: 'flex', gap: '13px', alignItems: 'flex-start' }}>
                  <div style={{ width: '20px', height: '20px', flexShrink: 0, color: 'var(--accent, currentColor)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18V5l12-2v13"/>
                      <circle cx="6" cy="18" r="3"/>
                      <circle cx="18" cy="16" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14.5px', fontWeight: 700, marginBottom: '5px' }}>Audio Production</h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--dim)', lineHeight: '1.58', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                      IVR, on-hold messaging, multilingual voice-overs, jingles, dubbing, and multilingual localization.
                    </p>
                  </div>
                </div>
                
                {/* Video & Photography */}
                <div className="reveal" style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '9px', padding: '20px', display: 'flex', gap: '13px', alignItems: 'flex-start' }}>
                  <div style={{ width: '20px', height: '20px', flexShrink: 0, color: 'var(--accent, currentColor)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="6" width="14" height="12" rx="2"/>
                      <path d="M16 10l5-3v10l-5-3"/>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14.5px', fontWeight: 700, marginBottom: '5px' }}>Video & Photography</h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--dim)', lineHeight: '1.58', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                      Corporate films, commercials, events, drone, color grading, and photography.
                    </p>
                  </div>
                </div>
                
                {/* AI & Digital */}
                <div className="reveal" style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '9px', padding: '20px', display: 'flex', gap: '13px', alignItems: 'flex-start' }}>
                  <div style={{ width: '20px', height: '20px', flexShrink: 0, color: 'var(--accent, currentColor)' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                    </svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14.5px', fontWeight: 700, marginBottom: '5px' }}>AI & Digital</h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--dim)', lineHeight: '1.58', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                      AI content, synthetic media, web development, e-learning, and custom tools.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <div className="divl"></div>

          {/* FOUNDER & LEADERSHIP MESSAGE */}
          <section className="sec reveal" style={{ background: 'var(--bg2)', width: '100%', paddingLeft: isMobile ? '20px' : '0px', paddingRight: isMobile ? '20px' : '0px' }}>
            <div className="lbl">Leadership</div>
            <h2 className="title" style={{ wordBreak: 'break-word' }}>From the Founder's Desk</h2>
            <div className="fwrap" style={{ width: '100%' }}>
              <div 
                className="fcard reveal" 
                style={{ 
                  position: 'relative', 
                  overflow: 'hidden', 
                  borderRadius: '20px', 
                  width: '100%',
                  aspectRatio: '3/4', 
                  maxWidth: '600px'
                }}
              >
                <Image 
                  className="fade-in-image"
                  src="https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FAUSpage_main%2FAU_2.webp?alt=media&token=2fd33e6e-50f8-41dd-bce8-425f50cd4bb3" 
                  alt="IBC Studio Founder" 
                  fill
                  sizes="(max-width: 768px) 100vw, 600px" 
                  unoptimized 
                  quality={100} 
                  priority 
                  style={{ objectFit: 'cover', display: 'block', zIndex: 1 }} 
                />

                <div 
                  className="finfo" 
                  style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    width: '100%', 
                    padding: '24px', 
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent)', 
                    color: '#ffffff',
                    boxSizing: 'border-box',
                    zIndex: 2 
                  }}
                >
                  <h3 style={{ margin: '0 0 8px 0' }}> </h3>
                  <span> </span>
                </div>
              </div>

              <div className="fquote reveal">
                <blockquote style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                  "We didn’t build IBC Studio to simply create content. We built it to help brands tell stories with impact, deliver quality without compromise, and create work that people genuinely remember."
                </blockquote>
                <p>Dear Valued Clients,</p>
                <p style={{ marginTop: '14px', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                  I am K. Banerjee, Founder of IBC Studio, and I sincerely thank you for the trust you continue to place in our work. My journey in the media industry began over 30 years ago in Mumbai, India, where I worked across films, television serials, and commercial productions.
                </p>
                <p style={{ marginTop: '14px', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                  With a vision to build a globally recognized production company, IBC Studio has proudly served clients across the UAE and the Middle East for over 15 years, deeply valuing every client relationship while combining creativity, technology, and storytelling to create impactful media experiences.
                </p>
                <div style={{ marginTop: '28px', display: 'flex', gap: '18px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ width: '44px', height: '1px', background: 'var(--sage)' }}></div>
                  <div>
                    <div style={{ fontFamily: "'Red Hat Display', sans-serif", fontWeight: 700, fontSize: '15px' }}>Founder & Director</div>
                    <div style={{ fontSize: '12px', color: 'var(--sage)' }}>IBC Studio — Dubai, UAE</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}