'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Services() {
  // FIX: Initialize state directly from the URL hash
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      const validTabs = ['audio', 'video', 'photo', 'ai', 'digital', 'motion'];
      return validTabs.includes(hash) ? hash : 'audio';
    }
    return 'audio';
  });
  
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleURLAnchorSync = () => {
      const rawHash = window.location.hash;
      if (!rawHash) return;

      const hashParts = rawHash.split('#').filter(Boolean);
      const targetTab = hashParts[hashParts.length - 1];
      const validTabsList = ['audio', 'video', 'photo', 'ai', 'digital', 'motion'];
      
      if (validTabsList.includes(targetTab)) {
        setActiveTab(targetTab);
        
        // Clean the URL to prevent stacking
        window.history.replaceState(null, '', window.location.pathname + '#' + targetTab);

        // Delay scroll to ensure the panel has rendered
        setTimeout(() => {
          const track = document.getElementById('horizontal-tab-track');
          track?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    };

    handleURLAnchorSync();
    window.addEventListener('hashchange', handleURLAnchorSync);
    return () => window.removeEventListener('hashchange', handleURLAnchorSync);
  }, []);

  // High-Performance Intersection Observer Engine for Scroll Fades across nested layout grids
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
  }, [activeTab]);

 const tabs = [
    { id: 'audio', label: 'Audio Production', icon: <svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg> },
    { id: 'video', label: 'Video Production', icon: <svg viewBox="0 0 24 24"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/></svg> },
    { id: 'photo', label: 'Photography', icon: <svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg> },
    { id: 'ai', label: 'AI Production', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg> },
    { id: 'digital', label: 'Digital & Dev', icon: <svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
    { id: 'motion', label: 'Motion & VR/AR', icon: <svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M8 4v16M16 4v16M4 8h16M4 16h16"/></svg> }
  ];

  return (
    <>
      <title>Our Services | IBC Studio</title>
      <meta name="description" content="Explore full-service corporate communications media solutions by IBC Studio." />
      <meta name="keywords" content="multilingual voice overs dubai, drone photography dubai" />

      <div className="page active" id="pg-services" ref={containerRef}>
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
            <div className="lbl" id="all-serv">Our Services</div>
            <h1 className="title" style={{ marginBottom: '28px', fontSize: 'clamp(32px, 5vw, 50px)', lineHeight: '1.1' }}>
              What We Create
            </h1>
            <p className="desc" style={{ width: '100%', maxWidth: '800px', marginBottom: 0 }}>
              We provide professional audio production, video production, and post-production services for corporate projects.
            </p>
          </div>

          {/* HORIZONTAL TAB CONTROL TRACK BAR */}
<div 
  id="horizontal-tab-track"
  className="stabs reveal in-view" 
  style={{ 
    width: '100%', 
    display: 'flex', 
    overflowX: 'auto', 
    WebkitOverflowScrolling: 'touch',
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: 'clamp(22px, 6vw, 80px)',
    paddingRight: 'clamp(22px, 6vw, 80px)',
    position: 'relative',
    zIndex: 5,
    scrollMarginTop: '90px' 
  }}
>
  {tabs.map((tab) => (
    <button
      key={tab.id}
      className={`stab ${activeTab === tab.id ? 'active' : ''}`}
      onClick={() => {
        setActiveTab(tab.id);
        
        // BULLETPROOF FIX: Use the native URL object to completely clean the path
        const freshUrl = new URL(window.location.href);
        freshUrl.hash = tab.id; // Explicitly overwrites whatever hash was there
        
        // Push only the clean pathname + single hash (e.g., /services#ai)
        window.history.pushState(null, '', freshUrl.pathname + freshUrl.hash);
      }}
      style={{ background: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
    >
      {tab.icon}
      {tab.label}
    </button>
  ))}
</div>

          {/* ── AUDIO PRODUCTION PANEL ── */}
          <div className={`spanel ${activeTab === 'audio' ? 'active' : ''}`} style={{ display: activeTab === 'audio' ? 'block' : 'none', width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="sphdr reveal" style={{ width: '100%' }}>
              <div>
                <h2>Audio Production</h2>
                <p>Sound shapes perception. Our audio team creates professional voiceovers, sound design, and IVR systems.</p>
                <Link href="/contact" className="btn-p">Request a Quote →</Link>
              </div>
              <div className="vidph">
                <div className="play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
                <span className="vid-lbl" style={{ textAlign: 'center', padding: '0 10px', display: 'block', width: '100%' }}>Audio Production Showreel</span>
              </div>
            </div>
            <div className="sfeat-grid" style={{ width: '100%' }}>
              {[
                { t: "IVR Systems", d: "Professional interactive voice response for seamless customer experiences.", icon: <><path d="M5 4h14v16H5z"/><path d="M9 8h6M9 12h1M14 12h1M9 16h1M14 16h1"/></> },
                { t: "On-Hold Messaging", d: "Branded on-hold audio that communicates while customers wait.", icon: <><path d="M4 12a8 8 0 0116 0"/><path d="M4 12v4a2 2 0 002 2h2v-6H4zM20 12v4a2 2 0 01-2 2h-2v-6h4z"/></> },
                { t: "Multilingual Voice-Overs", d: "Native-quality talent across Arabic, English, Hindi, French and more.", icon: <><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/><circle cx="12" cy="12" r="8"/></> },
                { t: "Jingle Production", d: "Original brand jingles composed in our in-house studio.", icon: <><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></> },
                { t: "Dubbing & Localization", d: "Accurate, culturally sensitive dubbing across all markets.", icon: <><path d="M4 5h10v8H7l-3 3z"/><path d="M12 11h8v8h-5l-3 3z"/></> },
                { t: "Sound Design", d: "Bespoke audio environments and music for video productions.", icon: <><path d="M4 14v-4M8 17V7M12 20V4M16 17V7M20 14v-4"/></> }
              ].map((feat, i) => (
                <div key={i} className="sfeat reveal">
                  <div className="sfi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{feat.icon}</svg></div>
                  <h4>{feat.t}</h4><p>{feat.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── VIDEO PRODUCTION PANEL ── */}
          <div className={`spanel ${activeTab === 'video' ? 'active' : ''}`} style={{ display: activeTab === 'video' ? 'block' : 'none', width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="sphdr reveal" style={{ width: '100%' }}>
              <div>
                <h2>Video Production</h2>
                <p>From pre-production to post-production, our full-service team captures your brand’s story with cinematic precision.</p>
                <Link href="/contact" className="btn-p">Request a Quote →</Link>
              </div>
              <div className="vidph">
                <div className="play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
                <span className="vid-lbl" style={{ textAlign: 'center', padding: '0 10px', width: '100%', display: 'block' }}>Video Production Showreel</span>
              </div>
            </div>
            <div className="sfeat-grid" style={{ width: '100%' }}>
              {[
                { t: "Corporate Films", d: "Brand stories, company profiles, and internal communications.", icon: <><rect x="3" y="6" width="14" height="12" rx="2"></rect><path d="M17 10l4-3v10l-4-3"/></> },
                { t: "Commercials & Ads", d: "High-impact advertising for broadcast, digital, and out-of-home.", icon: <><path d="M4 14l10-5v10L4 14z"/><path d="M14 10h3a3 3 0 010 6h-3"/></> },
                { t: "Event Coverage", d: "Live filming, highlight reels, and multi-camera coverage.", icon: <><rect x="4" y="5" width="16" height="15" rx="2"></rect><path d="M8 3v4M16 3v4M4 10h16"/></> },
                { t: "Drone & Aerial", d: "Licensed drone cinematography for real estate, events, and landscapes.", icon: <><path d="M12 12h.01"/><path d="M7 7l5 5 5-5M7 17l5-5 5 5"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/></> },
                { t: "Post-Production", d: "Editing, motion graphics, color grading, and sound design.", icon: <><path d="M4 6h16v12H4z"/><path d="M8 6v12M16 6v12M4 10h16M4 14h16"/></> },
                { t: "Corporate Documentaries", d: "Long-form storytelling for brands, leaders, and causes that matter.", icon: <><path d="M5 4h10l4 4v12H5z"/><path d="M15 4v4h4M8 13h8M8 17h5"/></> }
              ].map((feat, i) => (
                <div key={i} className="sfeat reveal">
                  <div className="sfi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{feat.icon}</svg></div>
                  <h4>{feat.t}</h4><p>{feat.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── PHOTOGRAPHY PANEL ── */}
          <div className={`spanel ${activeTab === 'photo' ? 'active' : ''}`} style={{ display: activeTab === 'photo' ? 'block' : 'none', width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="sphdr reveal" style={{ width: '100%' }}>
              <div>
                <h2>Photography</h2>
                <p>A single powerful image can define a brand. Our photography team delivers impactful visuals across every medium.</p>
                <Link href="/contact" className="btn-p">Request a Quote →</Link>
              </div>
              <div className="vidph">
                <div className="play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
                <span className="vid-lbl" style={{ textAlign: 'center', padding: '0 10px', display: 'block', width: '100%' }}>Photography Portfolio</span>
              </div>
            </div>
            <div className="sfeat-grid" style={{ width: '100%' }}>
              {[
                { t: "Product Photography", d: "Clean imagery for e-commerce, catalogues, and advertising.", icon: <><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></> },
                { t: "Real Estate & Architecture", d: "Property photography that showcases space, light, and design.", icon: <><path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/></> },
                { t: "Industrial Photography", d: "Technical photography for manufacturing, energy, and construction.", icon: <><path d="M3 20h18"/><path d="M5 20V9l5 3V9l5 3V7h4v13"/></> },
                { t: "Corporate Portraits", d: "Professional headshots and team photography done authentically.", icon: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></> },
                { t: "Event Photography", d: "Live coverage of conferences, launches, galas, and corporate events.", icon: <><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M8 14h8"/></> },
                { t: "Post-Production", d: "Expert retouching, color grading, and compositing for every image.", icon: <><path d="M4 6h16v12H4z"/><path d="M8 6v12M16 6v12M4 10h16M4 14h16"/></> }
              ].map((feat, i) => (
                <div key={i} className="sfeat reveal">
                  <div className="sfi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{feat.icon}</svg></div>
                  <h4>{feat.t}</h4><p>{feat.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── AI PRODUCTION PANEL ── */}
          <div className={`spanel ${activeTab === 'ai' ? 'active' : ''}`} style={{ display: activeTab === 'ai' ? 'block' : 'none', width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="sphdr reveal" style={{ width: '100%' }}>
              <div>
                <h2>AI Production</h2>
                <p>We combine creative direction, AI media tools, and workflow thinking to create high-quality production systems.</p>
                <Link href="/contact" className="btn-p">Request a Quote →</Link>
              </div>
              <div className="vidph">
                <div className="play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
                <span className="vid-lbl" style={{ textAlign: 'center', padding: '0 10px', width: '100%', display: 'block' }}>AI Production Showcase</span>
              </div>
            </div>
            <div className="sfeat-grid" style={{ width: '100%' }}>
              {[
                { t: "AI Video Generation", d: "Cinematic AI video for social, advertising, and brand campaigns.", icon: <><rect x="3" y="6" width="14" height="12" rx="2"></rect><path d="M17 10l4-3v10l-4-3"/><path d="M8 3v3M12 3v3"/></> },
                { t: "AI Photography", d: "High-resolution AI imagery for product, lifestyle, and conceptual campaigns.", icon: <><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><path d="M12 9v8M8 13h8"/></> },
                { t: "Synthetic Media", d: "AI avatars, digital presenters, and synthetic voice and video at scale.", icon: <><rect x="6" y="5" width="12" height="14" rx="4"/><path d="M9 10h.01M15 10h.01M10 15h4"/></> },
                { t: "AI Creative Direction", d: "Creative guidance, prompt systems, and brand controls that keep AI output visually consistent.", icon: <><path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5z"/></> },
                { t: "AI Based Automation", d: "Workflow automation for repetitive operational tasks.", icon: <><path d="M4 12a8 8 0 0113-6"/><path d="M17 2v4h-4M20 12a8 8 0 01-13 6"/><path d="M7 22v-4h4"/></> },
                { t: "AI Strategy Consulting", d: "IBC Intelligence helps teams identify where AI creates measurable leverage.", icon: <><path d="M4 19V5h16v14z"/><path d="M8 15l3-3 2 2 4-5"/></> }
              ].map((feat, i) => (
                <div key={i} className="sfeat reveal">
                  <div className="sfi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{feat.icon}</svg></div>
                  <h4>{feat.t}</h4><p>{feat.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── DIGITAL & DEVELOPMENT PANEL ── */}
          <div className={`spanel ${activeTab === 'digital' ? 'active' : ''}`} style={{ display: activeTab === 'digital' ? 'block' : 'none', width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="sphdr reveal" style={{ width: '100%' }}>
              <div>
                <h2>Digital & Development</h2>
                <p>Beyond production, we create modern websites, interactive e-learning experiences, and custom software tools.</p>
                <Link href="/contact" className="btn-p">Request a Quote →</Link>
              </div>
              <div className="vidph">
                <div className="play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
                <span className="vid-lbl" style={{ textAlign: 'center', padding: '0 10px', width: '100%', display: 'block' }}>Digital Projects Showcase</span>
              </div>
            </div>
            <div className="sfeat-grid" style={{ width: '100%' }}>
              {[
                { t: "Web Design & Dev", d: "Bespoke websites designed for impact and conversion.", icon: <><polyline points="16 18 22 12 16 6"></polyline><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></> },
                { t: "E-Learning Platforms", d: "Custom LMS solutions and interactive training programmes.", icon: <><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5z"/></> },
                { t: "Interactive Media", d: "Gamified experiences, interactive presentations, and installations.", icon: <><rect x="3" y="4" width="18" height="14" rx="2"></rect><path d="M8 22h8M12 18v4M9 11h6"/></> },
                { t: "Custom Digital Tools", d: "Bespoke web apps, portals, and automation tools.", icon: <><path d="M14.7 6.3a4 4 0 015.7 5.7L12 20l-4-4z"/><path d="M4 4l5 5"/></> },
                { t: "UI/UX Design", d: "User-centred design prioritizing clarity, beauty, and performance.", icon: <><rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M8 8h8M8 12h5M8 16h8"/></> },
                { t: "SEO & Digital Strategy", d: "Content strategy, SEO, and digital presence management.", icon: <><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-5-5M8 12l2 2 5-5"/></> }
              ].map((feat, i) => (
                <div key={i} className="sfeat reveal">
                  <div className="sfi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{feat.icon}</svg></div>
                  <h4>{feat.t}</h4><p>{feat.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── MOTION GRAPHICS & VR/AR PANEL ── */}
          <div className={`spanel ${activeTab === 'motion' ? 'active' : ''}`} style={{ display: activeTab === 'motion' ? 'block' : 'none', width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="sphdr reveal" style={{ width: '100%' }}>
              <div>
                <h2>Motion Graphics & VR/AR</h2>
                <p>Captivating motion graphics and immersive visual experiences designed to help brands stand out.</p>
                <Link href="/contact" className="btn-p">Request a Quote →</Link>
              </div>
              <div className="vidph">
                <div className="play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
                <span className="vid-lbl" style={{ textAlign: 'center', padding: '0 10px', width: '100%', display: 'block' }}>Motion & VR/AR Showcase</span>
              </div>
            </div>
            <div className="sfeat-grid" style={{ width: '100%' }}>
              {[
                { t: "Motion Graphics", d: "Animated titles, infographics, and brand motion identities.", icon: <><path d="M4 4h16v16H4z"/><path d="M8 4v16M16 4v16M4 8h16M4 16h16"/></> },
                { t: "Virtual Reality (VR)", d: "Immersive 360° VR experiences for events, real estate, and training.", icon: <><path d="M3 12c0-3 2-5 5-5h8c3 0 5 2 5 5v3a3 3 0 01-3 3h-2l-2-3h-4l-2 3H6a3 3 0 01-3-3z"/></> },
                { t: "Augmented Reality (AR)", d: "AR filters, overlays, and interactive experiences for marketing.", icon: <><path d="M12 2l8 4v12l-8 4-8-4V6z"/><path d="M12 22V12M4 6l8 6 8-6"/></> },
                { t: "2D Animation", d: "Explainer videos, whiteboard animation, and 2D character work.", icon: <><rect x="5" y="5" width="14" height="14" rx="2"></rect><path d="M9 9h6v6H9z"/></> },
                { t: "3D Visualization", d: "Architectural renders, product 3D, and environment visualization.", icon: <><path d="M12 2l8 4v12l-8 4-8-4V6z"/><path d="M12 2v10l8-6M12 12l-8-6"/></> },
                { t: "360° Video", d: "Immersive 360° video content for VR platforms and social media.", icon: <><path d="M4 12a8 8 0 0114-5"/><path d="M18 3v4h-4M20 12a8 8 0 01-14 5"/><path d="M6 21v-4h4"/></> }
              ].map((feat, i) => (
                <div key={i} className="sfeat reveal">
                  <div className="sfi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{feat.icon}</svg></div>
                  <h4>{feat.t}</h4><p>{feat.d}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}