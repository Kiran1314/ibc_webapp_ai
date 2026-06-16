'use client';
import { useState, useEffect, useRef } from 'react';

export default function Clients() {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

  const corporateClients = [
    'AECB', 'Agnice', 'Ahmed Saddiqi', 'Ahmed Tea', 'Air Arabia', 'Al Ain Holdings', 
    'Al Fahim', 'Al Jazeera Investment', 'Al Khaleej Steel', 'Al Madallah', 'Al Masraf', 
    'Al Reyami Advocates', 'American Gulf School – Sharjah', 'ARADA', 'Arab Link', 'ARENCO', 
    'Asma Hotel', 'Bank Muscat', 'Barraquer Eye Hospital', 'BITS Pilani Dubai', 'Canadian Hospital', 
    'Carlton Hotel', 'Citi Bank', 'Commercial Bank of Dubai', 'CTS Roadside Assistance', 'CTS-KHADA', 
    'Damac Properties', 'Dana Beach Resort', 'Dana Bay', 'Data Direct', 'Desert Gate', 'DIFC', 
    'Dubai Airports', 'Dubai Investment Park', 'Dubai Investment Real Estate', 'Dubai Land Department', 
    'Dubai Tourism', 'Du Telecom', 'Earnest Insurance', 'Easy Lease', 'Emaar', 'Emirates Driving Company', 
    'Emitech', 'Enova International', 'ENOC', 'Etihad Airways', 'Etisalat Afghanistan', 'Etisalat / e&', 
    'Excellence Driving Institute', 'FAB Bank', 'Finance House', 'Flydubai', 'Fujairah Customs', 
    'Fujairah National Group', 'G42', 'Galadari', 'Geco Mechanical & Electrical', 'Gems Metropole', 
    'Gems Millennium School', 'Gems World Academy', 'Gewan Hotels & Resorts', 'GFS Ship Management', 
    'Green Motor', 'Hily Holding', 'Hilton Business Bay', 'Hilton Hotel', 'IKEA', 'Injazat', 
    'Infosat', 'Infosys', 'Insurance House', 'International Community Schools', 'International Gas Services (Sergas)', 
    'Kalba Health Center (EHS)', 'Lexus', 'Liberty Computer', 'Liwa Insurance', 'Majid Al Futtaim', 
    'Marks & Spencer', 'Mashreq Bank', 'Masdar City', 'Medcare', 'Meraas', 'Mercure Hotel', 
    'Ministry of Community Development', 'Ministry of Human Resources and Emiratisation', 'Mubadala', 
    'Nakheel', 'National Finance', 'Next Care (Enaya)', 'Noor Takaful', 'Occidental Hotels and Resorts', 
    'Omantel', 'Omnisat', 'Omtrack', 'Pan Home', 'Prime Medical Center', 'Progress Group', 
    'Reem Hospital', 'Reem Neuroscience Centre', 'RTA Dubai', 'SAIF Zone', 'Sautt Technology', 
    'Scientechnic (Fujairah Port)', 'Scitra', 'Sharjah Islamic Bank', 'Sharjah Women\'s Club', 
    'Siemcom Hassantuk', 'Skoda', 'SPC Free Zone', 'Swissôtel Al Ghurair', 'TAQA Energy', 
    'TCT', 'TDRA', 'Tecom Group', 'Telematics', 'Teleperformance', 
    'The Executive Office of Her Highness Sheikha Jawaher, Sharjah', 'The Westminster School, Dubai', 
    'Tokio Marine Insurance', 'Toyota', 'Unitech', 'Vision Tech', 'VocalCom', 'WASL Properties', 
    'Xiaomi', 'Zajel'
  ];

  // Trigger page load entry fade effect on mount execution hook
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

  // High-performance structural observer loop targeting individual items on scroll down
  useEffect(() => {
    const revealElements = containerRef.current?.querySelectorAll('.reveal');
    if (!revealElements || revealElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Triggers slightly before crossing view lines
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view'); // Allows loops to re-trigger on screen pullbacks
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
        {/* PAGE BODY WRAPPER EQUIPPED WITH CLIENT-SIDE INITIAL MOUNT INTERCEPTOR FADE */}
        <div 
          className="pw" 
          style={{ 
            width: '100%',
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          
          {/* HEADER HERO SECTION - BALANCED FLUID PADDING OVERRIDES */}
          <div 
            className="sec reveal in-view" 
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

          {/* METRIC STAT GRID - SECTIONS ANIMATED INDIVIDUALLY */}
          <div 
            className="client-stat-grid" 
            style={{ 
              width: '100%',
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)'
            }}
          >
            <div className="reveal" style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderTop: '2px solid var(--navy)', borderRadius: '9px', padding: '26px', textAlign: 'center' }}>
              <span className="snum" style={{ fontSize: '38px' }}>3K<span className="a">+</span></span>
              <span className="slbl">Total Clients</span>
            </div>
            <div className="reveal" style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderTop: '2px solid var(--green)', borderRadius: '9px', padding: '26px', textAlign: 'center' }}>
              <span className="snum" style={{ fontSize: '38px' }}>15<span className="a">+</span></span>
              <span className="slbl">Campuses & Industries</span>
            </div>
            <div className="reveal" style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderTop: '2px solid var(--sage)', borderRadius: '9px', padding: '26px', textAlign: 'center' }}>
              <span className="snum" style={{ fontSize: '38px' }}>UAE<span className="a">+</span></span>
              <span className="slbl">GCC & Beyond</span>
            </div>
            <div className="reveal" style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderTop: '2px solid rgba(255,255,255,.1)', borderRadius: '9px', padding: '26px', textAlign: 'center' }}>
              <span className="snum" style={{ fontSize: '38px' }}>98<span className="a">%</span></span>
              <span className="slbl">Retention Rate</span>
            </div>
          </div>

          {/* LOGO TILES PLATFORM MATRIX - INDIVIDUAL ITEMS INJECTION */}
          <div 
            className="cpgrid" 
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
                className="cpc reveal"
                style={{
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  fontSize: '11px', 
                  padding: '14px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%'
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