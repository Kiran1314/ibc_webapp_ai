'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Services() {
  const [activeTab, setActiveTab] = useState('audio');
  const containerRef = useRef(null);

  // Initialize intersection animation watcher side-effects
  useEffect(() => {
    const revealElements = containerRef.current?.querySelectorAll('.reveal');
    if (!revealElements || revealElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
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
  }, [activeTab]); // Triggers update loops cleanly when tab selections redraw layout bounds

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
      {/* INJECT COMPACT INLINE SEO METADATA FOR COMPILER SAFETY */}
      <title>Our Services | IBC Studio</title>
      <meta name="description" content="Explore full-service corporate communications media solutions by IBC Studio. Specializing in native multilingual IVR, high-end corporate films, aerial drone cinematography, commercial photography, and practical AI workflow automation systems." />
      <meta name="keywords" content="multilingual voice overs dubai, drone photography dubai, corporate photography dubai, commercial photographer dubai, industrial photography dubai, AI video generation dubai, web design and development dubai" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ibcstudio.com/services" />
      <meta property="og:title" content="Our Services | Audio, Video, Photography & AI Production Dubai" />
      <meta property="og:description" content="Complete media solutions designed to help businesses create professional, impactful, and meaningful content across every platform." />
      <meta property="og:site_name" content="IBC Studio" />

      <div className="page active" id="pg-services" ref={containerRef}>
        <div className="pw" style={{ width: '100%' }}>
          
          {/* TOP TITLE JUMBOTRON - RESPONSIVE PADDING MATCHES GLOBAL CSS THEME */}
          <div 
            className="sec reveal" 
            style={{ 
              paddingTop: 'clamp(120px, 12vh, 160px)', 
              paddingBottom: '36px', 
              width: '100%',
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)'
            }}
          >
            <div className="lbl"  id="all-serv" >Our Services</div>
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
              What We Create
            </h1>
            <p 
              className="desc" 
              style={{ 
                width: '100%', 
                maxWidth: '800px', 
                marginBottom: 0, 
                wordBreak: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              We provide professional audio production, video production, and post-production services for corporate films, commercials, YouTube content, exhibition videos, and a wide range of digital media projects tailored for modern businesses.<br /><br />
              Our services also include commercial photography, AI production, website and software development, e-product catalogues, and professional coverage for events, exhibitions, and corporate gatherings.
            </p>
          </div>

          {/* HORIZONTAL TAB CONTROL TRACK BAR */}
          <div  
            className="stabs reveal" 
            style={{ 
              width: '100%', 
              display: 'flex', 
              overflowX: 'auto', 
              WebkitOverflowScrolling: 'touch',
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)'
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`stab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{ background: 'none', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* ── AUDIO PRODUCTION PANEL ── */}
          <div className={`spanel reveal ${activeTab === 'audio' ? 'active' : ''}`} style={{ display: activeTab === 'audio' ? 'block' : 'none', width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="sphdr" style={{ width: '100%' }}>
              <div>
                <h2>Audio Production</h2>
                <p style={{ wordBreak: 'break-word' }}>Sound shapes perception. Our audio team creates professional voiceovers, sound design, IVR systems, dubbing, and music productions that define how your brand sounds across every platform, audience, and language.</p>
                <Link href="/contact" className="btn-p">Request a Quote →</Link>
              </div>
              <div className="vidph">
                <div className="play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
                <span className="vid-lbl" style={{ textAlign: 'center', padding: '0 10px', display: 'block', width: '100%' }}>Audio Production Showreel</span>
              </div>
            </div>
            <div className="sfeat-grid" style={{ width: '100%' }}>
              {[
                { t: "IVR Systems", d: "Professional interactive voice response for seamless customer experiences." },
                { t: "On-Hold Messaging", d: "Branded on-hold audio that communicates while customers wait." },
                { t: "Multilingual Voice-Overs", d: "Native-quality talent across Arabic, English, Hindi, French and more." },
                { t: "Jingle Production", d: "Original brand jingles composed in our in-house studio." },
                { t: "Dubbing & Localization", d: "Accurate, culturally sensitive dubbing across all markets." },
                { t: "Sound Design", d: "Bespoke audio environments and music for video productions." }
              ].map((feat, i) => (
                <div key={i} className="sfeat">
                  <div className="sfi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/><circle cx="12" cy="12" r="8"/></svg></div>
                  <h4>{feat.t}</h4><p style={{ wordBreak: 'break-word' }}>{feat.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── VIDEO PRODUCTION PANEL ── */}
          <div className={`spanel reveal ${activeTab === 'video' ? 'active' : ''}`} style={{ display: activeTab === 'video' ? 'block' : 'none', width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="sphdr" style={{ width: '100%' }}>
              <div>
                <h2>Video Production</h2>
                <p style={{ wordBreak: 'break-word' }}>From pre-production to post-production, our full-service team captures your brand’s story with cinematic precision, from commercial advertisements and corporate films to documentaries, digital campaigns, and branded content.</p>
                <Link href="/contact" className="btn-p">Request a Quote →</Link>
              </div>
              <div className="vidph">
                <div className="play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
                <span className="vid-lbl" style={{ textAlign: 'center', padding: '0 10px', width: '100%', display: 'block' }}>Video Production Showreel</span>
              </div>
            </div>
            <div className="sfeat-grid" style={{ width: '100%' }}>
              {[
                { t: "Corporate Films", d: "Brand stories, company profiles, and internal communications." },
                { t: "Commercials & Ads", d: "High-impact advertising for broadcast, digital, and out-of-home." },
                { t: "Event Coverage", d: "Live filming, highlight reels, and multi-camera coverage." },
                { t: "Drone & Aerial", d: "Licensed drone cinematography for real estate, events, and landscapes." },
                { t: "Post-Production", d: "Editing, motion graphics, color grading, and sound design." },
                { t: "Corporate Documentaries", d: "Long-form storytelling for brands, leaders, and causes that matter." }
              ].map((feat, i) => (
                <div key={i} className="sfeat">
                  <div className="sfi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/><circle cx="12" cy="12" r="8"/></svg></div>
                  <h4>{feat.t}</h4><p style={{ wordBreak: 'break-word' }}>{feat.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── PHOTOGRAPHY PANEL ── */}
          <div className={`spanel reveal ${activeTab === 'photo' ? 'active' : ''}`} style={{ display: activeTab === 'photo' ? 'block' : 'none', width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="sphdr" style={{ width: '100%' }}>
              <div>
                <h2>Photography</h2>
                <p style={{ wordBreak: 'break-word' }}>A single powerful image can define a brand. Our photography team combines technical expertise with creative vision to deliver impactful visuals for brands, campaigns, events, products, and digital platforms across every medium.</p>
                <Link href="/contact" className="btn-p">Request a Quote →</Link>
              </div>
              <div className="vidph">
                <div className="play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
                <span className="vid-lbl" style={{ textAlign: 'center', padding: '0 10px', width: '100%', display: 'block' }}>Photography Portfolio</span>
              </div>
            </div>
            <div className="sfeat-grid" style={{ width: '100%' }}>
              {[
                { t: "Product Photography", d: "Clean imagery for e-commerce, catalogues, and advertising." },
                { t: "Real Estate & Architecture", d: "Property photography that showcases space, light, and design." },
                { t: "Industrial Photography", d: "Technical photography for manufacturing, energy, and construction." },
                { t: "Corporate Portraits", d: "Professional headshots and team photography done authentically." },
                { t: "Event Photography", d: "Live coverage of conferences, launches, galas, and corporate events." },
                { t: "Post-Production", d: "Expert retouching, color grading, and compositing for every image." }
              ].map((feat, i) => (
                <div key={i} className="sfeat">
                  <div className="sfi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/><circle cx="12" cy="12" r="8"/></svg></div>
                  <h4>{feat.t}</h4><p style={{ wordBreak: 'break-word' }}>{feat.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── AI PRODUCTION PANEL ── */}
          <div className={`spanel reveal ${activeTab === 'ai' ? 'active' : ''}`} style={{ display: activeTab === 'ai' ? 'block' : 'none', width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="sphdr" style={{ width: '100%' }}>
              <div>
                <h2>AI Production</h2>
                <p style={{ wordBreak: 'break-word' }}>We combine creative direction, AI media tools, and workflow thinking to create high-quality visual production systems for brands, campaigns, and operational teams without losing creative control or business context.</p>
                <Link href="/contact" className="btn-p">Request a Quote →</Link>
              </div>
              <div className="vidph">
                <div className="play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
                <span className="vid-lbl" style={{ textAlign: 'center', padding: '0 10px', width: '100%', display: 'block' }}>AI Production Showcase</span>
              </div>
            </div>
            <div className="sfeat-grid" style={{ width: '100%' }}>
              {[
                { t: "AI Video Generation", d: "Cinematic AI video for social, advertising, and brand campaigns." },
                { t: "AI Photography", d: "High-resolution AI imagery for product, lifestyle, and conceptual campaigns." },
                { t: "Synthetic Media", d: "AI avatars, digital presenters, and synthetic voice and video at scale." },
                { t: "AI Creative Direction", d: "Creative guidance, prompt systems, and brand controls that keep AI output visually consistent." },
                { t: "AI Based Automation", d: "Workflow automation for repetitive operational tasks, routing, retrieval, reporting, and production handoffs." },
                { t: "AI Strategy Consulting", d: "IBC Intelligence helps teams identify where AI creates measurable leverage across productivity, speed, decision support, and execution." }
              ].map((feat, i) => (
                <div key={i} className="sfeat">
                  <div className="sfi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/><circle cx="12" cy="12" r="8"/></svg></div>
                  <h4>{feat.t}</h4><p style={{ wordBreak: 'break-word' }}>{feat.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── DIGITAL & DEVELOPMENT PANEL ── */}
          <div className={`spanel reveal ${activeTab === 'digital' ? 'active' : ''}`} style={{ display: activeTab === 'digital' ? 'block' : 'none', width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, vw, 80px)' }}>
            <div className="sphdr" style={{ width: '100%' }}>
              <div>
                <h2>Digital & Development</h2>
                <p style={{ wordBreak: 'break-word' }}>Beyond production, we create the digital platforms your brand needs, including modern websites, interactive e-learning experiences, custom software, and tailored digital solutions designed for today’s businesses.</p>
                <Link href="/contact" className="btn-p">Request a Quote →</Link>
              </div>
              <div className="vidph">
                <div className="play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
                <span className="vid-lbl" style={{ textAlign: 'center', padding: '0 10px', width: '100%', display: 'block' }}>Digital Projects Showcase</span>
              </div>
            </div>
            <div className="sfeat-grid" style={{ width: '100%' }}>
              {[
                { t: "Web Design & Dev", d: "Bespoke websites designed for impact and conversion." },
                { t: "E-Learning Platforms", d: "Custom LMS solutions and interactive training programmes." },
                { t: "Interactive Media", d: "Gamified experiences, interactive presentations, and installations." },
                { t: "Custom Digital Tools", d: "Bespoke web apps, portals, and automation tools." },
                { t: "UI/UX Design", d: "User-centred design prioritizing clarity, beauty, and performance." },
                { t: "SEO & Digital Strategy", d: "Content strategy, SEO, and digital presence management." }
              ].map((feat, i) => (
                <div key={i} className="sfeat">
                  <div className="sfi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/><circle cx="12" cy="12" r="8"/></svg></div>
                  <h4>{feat.t}</h4><p style={{ wordBreak: 'break-word' }}>{feat.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── MOTION GRAPHICS & VR/AR PANEL ── */}
          <div className={`spanel reveal ${activeTab === 'motion' ? 'active' : ''}`} style={{ display: activeTab === 'motion' ? 'block' : 'none', width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="sphdr" style={{ width: '100%' }}>
              <div>
                <h2>Motion Graphics & VR/AR</h2>
                <p style={{ wordBreak: 'break-word' }}>Captivating motion graphics and immersive visual experiences designed to help brands communicate creatively, engage audiences effectively, and stand out across digital platforms.</p>
                <Link href="/contact" className="btn-p">Request a Quote →</Link>
              </div>
              <div className="vidph">
                <div className="play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
                <span className="vid-lbl" style={{ textAlign: 'center', padding: '0 10px', width: '100%', display: 'block' }}>Motion & VR/AR Showcase</span>
              </div>
            </div>
            <div className="sfeat-grid" style={{ width: '100%' }}>
              {[
                { t: "Motion Graphics", d: "Animated titles, infographics, and brand motion identities." },
                { t: "Virtual Reality (VR)", d: "Immersive 360° VR experiences for events, real estate, and training." },
                { t: "Augmented Reality (AR)", d: "AR filters, overlays, and interactive experiences for marketing." },
                { t: "2D Animation", d: "Explainer videos, whiteboard animation, and 2D character work." },
                { t: "3D Visualization", d: "Architectural renders, product 3D, and environment visualization." },
                { t: "360° Video", d: "Immersive 360° video content for VR platforms and social media." }
              ].map((feat, i) => (
                <div key={i} className="sfeat">
                  <div className="sfi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/><circle cx="12" cy="12" r="8"/></svg></div>
                  <h4>{feat.t}</h4><p style={{ wordBreak: 'break-word' }}>{feat.d}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}