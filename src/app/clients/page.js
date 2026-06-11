'use client';
import { useEffect, useRef } from 'react';

export default function Clients() {
  const containerRef = useRef(null);

  const corporateClients = [
    "Emirates Group", "Etihad Airways", "Du Telecom", "Majid Al Futtaim", "DEWA",
    "RTA Dubai", "Aldar Properties", "Emaar", "Damac Properties", "ADNOC",
    "Mashreq Bank", "FAB Bank", "Dubai Tourism", "DIFC", "Abu Dhabi Health",
    "Flydubai", "Al Futtaim", "Nakheel", "DP World", "ENOC",
    "Sharjah Tourism", "RAK Government", "Mubadala", "G42", "Etisalat / e&",
    "Dubai Airports", "Meraas", "Dubai Land Dept", "Abu Dhabi Ports", "Taqa Energy"
  ];

  // Initialize fade-in intersection animations across structural sections
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
  }, []);

  return (
    <>
      {/* INJECT SEMANTIC SEO META DIRECTLY INTO HEAD REGIONS FOR SINGLE-FILE COMPLIANCE */}
      <title>Our Clients | IBC Studio</title>
      <meta name="description" content="Discover why 3,000+ brands and government entities across Dubai, Abu Dhabi, and the wider GCC trust IBC Studio for corporate video production, commercial photography, and audio localization solutions." />
      <meta name="keywords" content="video production showcase uae, corporate film portfolio dubai, professional photography samples, dynamic media campaigns dubai, commercial showreel uae" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ibcstudio.com/clients" />
      <meta property="og:title" content="Our Clients | Corporate Media & Production Portfolio | IBC Studio" />
      <meta property="og:description" content="A curated selection of high-impact client projects across audio, video, photography, AI, and custom digital tool architectures." />
      <meta property="og:site_name" content="IBC Studio" />
      <meta property="og:locale" content="en_US" />

      <div className="page active" id="pg-clients" ref={containerRef}>
        <div className="pw" style={{ width: '100%' }}>
          
          {/* HEADER HERO SECTION - BALANCED FLUID PADDING OVERRIDES */}
          <div 
            className="sec reveal" 
            style={{ 
              paddingTop: 'clamp(120px, 12vh, 160px)', 
              paddingBottom: '36px', 
              textAlign: 'center', 
              width: '100%', 
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)'
            }}
          >
            <div className="lbl lbl-c" style={{ justifyContent: 'center' }}>Our Clients</div>
            <h1 
              style={{ 
                fontSize: 'clamp(32px, 5vw, 62px)', 
                letterSpacing: '-.03em', 
                marginBottom: '18px',
                lineHeight: '1.1',
                wordBreak: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              3,000+ Brands.<br />One Shared Standard.
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--mid)', maxWidth: '580px', margin: '0 auto', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
              From government entities to global corporations, IBC Studio has become a trusted media partner for thousands of organizations across the UAE, GCC, and beyond.
            </p>
          </div>

          {/* METRIC STAT GRID - SCALES VIA GLOBAL CSS Breakpoints */}
          <div 
            className="client-stat-grid reveal" 
            style={{ 
              width: '100%',
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)'
            }}
          >
            <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderTop: '2px solid var(--navy)', borderRadius: '9px', padding: '26px', textAlign: 'center' }}>
              <span className="snum" style={{ fontSize: '38px' }}>3K<span className="a">+</span></span>
              <span className="slbl">Total Clients</span>
            </div>
            <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderTop: '2px solid var(--green)', borderRadius: '9px', padding: '26px', textAlign: 'center' }}>
              <span className="snum" style={{ fontSize: '38px' }}>15<span className="a">+</span></span>
              <span className="slbl">Industries Served</span>
            </div>
            <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderTop: '2px solid var(--sage)', borderRadius: '9px', padding: '26px', textAlign: 'center' }}>
              <span className="snum" style={{ fontSize: '38px' }}>UAE<span className="a">+</span></span>
              <span className="slbl">GCC & Beyond</span>
            </div>
            <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderTop: '2px solid rgba(255,255,255,.1)', borderRadius: '9px', padding: '26px', textAlign: 'center' }}>
              <span className="snum" style={{ fontSize: '38px' }}>98<span className="a">%</span></span>
              <span className="slbl">Retention Rate</span>
            </div>
          </div>

          {/* LOGO TILES PLATFORM GRID */}
          <div 
            className="cpgrid reveal" 
            style={{ 
              width: '100%', 
              paddingBottom: '80px',
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)',
              marginTop: '44px'
            }}
          >
            {corporateClients.map((client, index) => (
              <div 
                key={index} 
                className="cpc"
                style={{
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  fontSize: '13px',
                  padding: '12px 8px'
                }}
              >
                {client}
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}