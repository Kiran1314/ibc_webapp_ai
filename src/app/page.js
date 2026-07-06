'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

  // Mobile Auto-Scroll Slider States
  const [activeVid, setActiveVid] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  
  const vidTotal = 3; 
  const cardTotal = 3; 

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Auto-scroll Timer for Videos (3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVid((prev) => (prev + 1) % vidTotal);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Auto-scroll Timer for Text Cards (4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cardTotal);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // If the page loads with a home hash tracking fragment, clear it out instantly
    if (window.location.hash === '#pg-home') {
      window.history.replaceState(
        null, 
        '', 
        window.location.pathname + window.location.search
      );
    }
  }, []);


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

  // High-Performance Intersection Observer Engine for Scroll Fades
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
  }, []);

  const faqs = [
    { q: "What types of clients does IBC Studio work with?", a: "We work with brands, corporations, SMEs, and government entities across the UAE and wider GCC. Our portfolio spans real estate, finance, hospitality, healthcare, retail, and government communications." },
    { q: "Do you offer multilingual production services?", a: "Absolutely. We offer voice-overs, dubbing, and localization in Arabic, English, Hindi, Urdu, French, and more — essential for the diverse markets across the region." },
    { q: "How long does a typical video production project take?", a: "A standard corporate video typically takes 2–4 weeks from briefing to delivery. Larger productions may take 4–8 weeks. We always agree on timelines upfront during the proposal stage." },
    { q: "What is IBC Intelligence?", a: "IBC Intelligence is the AI-powered consultancy and insights division of IBC Studio, focused on helping businesses solve modern challenges through strategy, research, analytics, and intelligent technology-driven solutions." },
    { q: "How do I get a quote for my project?", a: "Reach out via our Contact page or WhatsApp. We'll schedule a free consultation to understand your project and provide a detailed proposal within 48 hours." }
  ];

  return (
    <>
      {/* NATIVE SINGLE-FILE INLINE SEO INJECTION */}
      <title>IBC Studio - Leading Media Production Dubai</title>
      <meta name="description" content="Discover how AI video generation and professional photography services in Dubai are helping businesses scale faster, build credibility, and modernize marketing, training, and corporate communications." />
      <meta name="keywords" content="AI video generation in dubai,AI video generation in UAE,AI promotional videos in dubai,AI promotional videos in uae,AI powered video creation in dubai,AI powered video creation in abu dabi,AI Corporate video production in abudhabi,AI Corporate video production in dubai,AI Corporate video production in uae,AI for corporate presentations in dubai,AI video for marketing in dubai,AI generated training videos in dubai,AI for employee onboarding videos in dubai,AI video for internal communications in dubai,AI explainer videos in dubai, professional photography Dubai, industrial photography Dubai, corporate photography Dubai, commercial photographer Dubai, AI corporate video Dubai, post production studio Dubai, video production company UAE, 360 video production UAE, AR video production Dubai" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ibcstudio.com/ai-video-generation-professional-photography-dubai" />
      <meta property="og:title" content="IBC Studio - Leading Media Production Dubai" />
      <meta property="og:description" content="Dubai businesses are combining AI-powered video creation with professional photography to stay competitive in marketing, training, and corporate communication." />
      <meta property="og:site_name" content="IBC Studio" />
      <meta property="og:locale" content="en_US" />

      {/* CORE HOME LAYOUT ARCHITECTURE */}
      <div className="page active" id="pg-home" ref={containerRef}>
        <div 
          className="pw" 
          style={{ 
            width: '100%',
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          
          {/* HERO SECTION */}
          <section className="hero reveal in-view">
              {/* Background elements remain unchanged */}
              <div className="hero-gradient-scene" aria-hidden="true"></div>
              <div className="hero-wave-field" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>
              <div className="hero-grain" aria-hidden="true"></div>
              <div className="hvignette" aria-hidden="true"></div>

              <div className="hcontent" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
                
                <div className="heb animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  UAE's Leading Media Production House
                </div>

                <h1 className="htag animate-fade-in" style={{ fontSize: 'clamp(32px, 8vw, 90px)', width: '100%', lineHeight: '1.0', animationDelay: '0.3s' }}>
                  <span className="l1" style={{ display: 'block' }}>WHERE IDEAS</span>
                  <span className="l2" style={{ display: 'block' }}>BECOME</span>
                  <span className="l3" style={{ display: 'block', color: 'var(--sage)' }}>UNFORGETTABLE.</span>
                </h1>

                <p className="hsub animate-fade-in" style={{ width: '100%', animationDelay: '0.6s' }}>
                  Welcome to IBC Studio. We are a full-service media production and digital solutions company creating powerful visual experiences, meaningful brand stories, and impactful content that leaves a lasting impression.
                </p>

                <div className="hact animate-fade-in" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', width: '100%', animationDelay: '0.9s' }}>
                  <Link href="/services" className="btn-p" style={{ display: 'inline-flex', minWidth: '160px', justifyContent: 'center' }}>
                    Explore Our Services →
                  </Link>
                  <Link href="/work" className="btn-o" style={{ display: 'inline-flex', minWidth: '160px', justifyContent: 'center' }}>
                    View Our Work
                  </Link>
                </div>
              </div>
            </section>

          {/* LOGO BAND */}
          <div className="cband reveal" style={{ width: '100%' }}>
            <div className="chdr" style={{ padding: '0 20px', wordBreak: 'break-word' }}>
              <strong>3,000+ Satisfied Clients</strong> trust IBC Studio
            </div>
            <div style={{ overflow: 'hidden', width: '100%' }}>
              <div 
                className="ctrack"
                style={{
                  animationDuration: '200s', 
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite'
                }}
              >
                {[
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
                ].map((company, idx) => (
                  <div key={`orig-${idx}`} className="clog" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 28px', whiteSpace: 'nowrap', width: 'auto', boxSizing: 'border-box' }}>{company}</div>
                ))}
                {[
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
                ].map((company, idx) => (
                  <div key={`dup-${idx}`} className="clog" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 28px', whiteSpace: 'nowrap', width: 'auto', boxSizing: 'border-box' }}>{company}</div>
                ))}
              </div>
            </div>
          </div>

          {/* TESTIMONIALS */}
         <section className="sec reveal" style={{ width: '100%' }}>
  <div className="lbl">Client Testimonials</div>
  <h2 className="title" style={{ wordBreak: 'break-word' }}>Voices of Trust</h2>
  <p className="desc" style={{ width: '100%', wordBreak: 'break-word' }}>
    Real results, real relationships. Hear directly from the brands who've partnered with us.
  </p>
   
  <div style={{ width: '100%', paddingTop: '20px' }}>
    
    {/* Video Section Container Wrapper */}
    <div className="slider-wrapper">
      <div className="tvid-grid">
        <div className="vidph reveal">
          <div className="play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
          <span className="vid-lbl">Emirates Group — Testimonial</span>
        </div>
        <div className="vidph reveal">
          <div className="play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
          <span className="vid-lbl">DEWA</span>
        </div>
        <div className="vidph reveal">
          <div className="play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
          <span className="vid-lbl">Aldar</span>
        </div>
      </div>
    </div>

    {/* Testimonials Card Section Container Wrapper */}
    <div className="slider-wrapper" style={{ marginTop: '20px' }}>
      <div className="tgrid">
        
        {/* Card item 1 */}
        <div className="tcard reveal">
          <p className="tquote">
            "IBC Studio transformed our brand communications. Their audio and video production quality is unmatched in the region — every project has exceeded our expectations."
          </p>
          <div className="tauthor">
            <div className="tav">AK</div>
            <div>
              <div className="tan">Ahmed Al Kamali</div>
              <div className="tat">Marketing Director, Dubai Corp</div>
            </div>
          </div>
        </div>

        {/* Card item 2 */}
        <div className="tcard reveal">
          <p className="tquote">
            "From concept to delivery, IBC Studio is a true creative partner. Their multilingual voice-over capabilities alone saved us months of coordination work."
          </p>
          <div className="tauthor">
            <div className="tav">SR</div>
            <div>
              <div className="tan">Sara Rashid</div>
              <div className="tat">Head of Brand, Emaar Properties</div>
            </div>
          </div>
        </div>

        {/* Card item 3 */}
        <div className="tcard reveal">
          <p className="tquote">
            "We've worked with many agencies — none come close to IBC's level of professionalism, creativity, and on-time delivery. Simply the best in the UAE."
          </p>
          <div className="tauthor">
            <div className="tav">MH</div>
            <div>
              <div className="tan">Mohammed Hassan</div>
              <div className="tat">CEO, Regional Brands Group</div>
            </div>
          </div>
        </div>

         {/* Card item 4 */}
        <div className="tcard reveal">
          <p className="tquote">
            "Overall great, smooth, professional & interesting experience.
             I enjoyed the whole process. It&apos;s a pleasure to work with IBC Studio. I am looking forward to
             working with you on your upcoming projects. Thank you IBC Studio."
          </p>
          <div className="tauthor">
            <div className="tav">DS</div>
            <div>
              <div className="tan">Dina Samy</div>
              <div className="tat"> </div>
            </div>
          </div>
        </div>

        {/* Card item 5 */}
        <div className="tcard reveal">
          <p className="tquote">
            "Worked with them in 2 projects so far and I really appreciate their professionalism and honesty.
             Looking forward to the new projects we will work on together!" 
          </p><br/>
          <div className="tauthor">
            <div className="tav">LA</div>
            <div>
              <div className="tan">Lilly Ally</div>
              <div className="tat"> </div>
            </div>
          </div>
        </div>

        {/* Card item 6 */}
        <div className="tcard reveal">
          <p className="tquote">
            "I recently had the pleasure of working 
            with IBC Studio on a timelapse video project, and I couldn't be more impressed! 
            The team demonstrated exceptional professionalism and creativity from start to finish."
          </p>
          <div className="tauthor">
            <div className="tav">KK</div>
            <div>
              <div className="tan">Kishan Krishnan</div>
              <div className="tat"> </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

          <div className="divl"></div>

          {/* ABOUT SPLIT SECTION */}
          <section className="sec reveal" style={{ width: '100%' }}>
            <div className="split-grid" style={{ width: '100%' }}>
              <div className="reveal">
                <div className="lbl">About IBC Studio</div>
                <h2 className="title" style={{ wordBreak: 'break-word' }}>The UAE’s Destination for Creative Media & Digital Production</h2>
                <p style={{ fontSize: '16.5px', color: 'var(--mid)', lineHeight: '1.75', marginBottom: '14px', wordBreak: 'break-word' }}>IBC Studio is a Dubai-based media production and digital solutions company with over 19 years of industry experience.</p>
                <p style={{ fontSize: '16.5px', color: 'var(--mid)', lineHeight: '1.75', marginBottom: '26px', wordBreak: 'break-word' }}>We specialize in audio, video, photography, IVR, OHM, event coverage, AI-powered content, and digital media solutions, helping businesses create professional, engaging, and impactful content tailored for modern audiences across the UAE and Middle East.</p>
                <Link href="/about#pg-about" className="btn-o">Learn Our Story →</Link>
              </div>
              <div className="mini-stat-grid" style={{ width: '100%' }}>
                <div className="sitem reveal"><span className="snum">19<span className="a">+</span></span><span className="slbl">Years Experience</span></div>
                <div className="sitem reveal" style={{ borderRight: 'none' }}><span className="snum">1K<span className="a">+</span></span><span className="slbl">Video & Photo Projects</span></div>
                <div className="sitem reveal" style={{ borderTop: '1px solid var(--border)' }}><span className="snum">3K<span className="a">+</span></span><span className="slbl">Audio Projects</span></div>
                <div className="sitem reveal" style={{ borderRight: 'none', borderTop: '1px solid var(--border)' }}><span className="snum">3K<span className="a">+</span></span><span className="slbl">Satisfied Clients</span></div>
              </div>
            </div>
          </section>

          <div className="divl"></div>

          {/* SERVICES GRID */}
          <section className="sec reveal" style={{ width: '100%' }}>
  <div className="lbl">What We Do</div>
  <h2 className="title" style={{ wordBreak: 'break-word' }}>Our Core Services</h2>
  <p className="desc" style={{ width: '100%', wordBreak: 'break-word' }}>Complete media solutions designed to help businesses create professional, impactful, and meaningful content across every platform.</p>
  <div className="srv-grid" style={{ width: '100%' }}>
    <Link href="/services#audio" className="srv-card reveal" style={{ textDecoration: 'none', display: 'block' }}>
      <div className="srv-ic"><svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></div>
      <h3>Audio Production</h3><p style={{ wordBreak: 'break-word' }}>IVR, on-hold messaging, multilingual voice-overs, jingles, dubbing and localization services.</p>
      <div className="srv-arr">Explore Service →</div>
    </Link>
    <Link href="/services#video" className="srv-card reveal" style={{ textDecoration: 'none', display: 'block' }}>
      <div className="srv-ic"><svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/></svg></div>
      <h3>Video Production</h3><p style={{ wordBreak: 'break-word' }}>Corporate films, commercials, drone, 360°/VR/AR, editing, and color grading.</p>
      <div className="srv-arr">Explore Service →</div>
    </Link>
    <Link href="/services#photo" className="srv-card reveal" style={{ textDecoration: 'none', display: 'block' }}>
      <div className="srv-ic"><svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg></div>
      <h3>Photography</h3><p style={{ wordBreak: 'break-word' }}>Product, real estate, industrial, corporate and event photography.</p>
      <div className="srv-arr">Explore Service →</div>
    </Link>
    <Link href="/services#ai" className="srv-card reveal" style={{ textDecoration: 'none', display: 'block' }}>
      <div className="srv-ic"><svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg></div>
      <h3>AI Production</h3><p style={{ wordBreak: 'break-word' }}>AI video, AI photography, synthetic media, creative direction, and workflow-aware production systems.</p>
      <div className="srv-arr">Explore Service →</div>
    </Link>
    <Link href="/services#digital" className="srv-card reveal" style={{ textDecoration: 'none', display: 'block' }}>
      <div className="srv-ic"><svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
      <h3>Digital & Development</h3><p style={{ wordBreak: 'break-word' }}>Web design, e-learning platforms, interactive media and custom digital tools.</p>
      <div className="srv-arr">Explore Service →</div>
    </Link>
    <Link href="/ibc-intelligence#pg-intel" className="srv-card reveal" style={{ textDecoration: 'none', display: 'block' }}>
      <div> <div className="srv-ic">
        <div className="logo" style={{ cursor: 'default' }} >
          <img src="/assets/images/logo/intel2.webp" alt="IBC Studio Logo" style={{ height: '50px', width: 'auto', objectFit: 'contain', display: 'block' }} />
        </div></div>
      </div>
      <h3>IBC Intelligence</h3><p style={{ wordBreak: 'break-word' }}>Operator-led AI advisory helping teams find and build practical workflow systems that improve productivity, speed, and decision support.</p>
      <div className="srv-arr">Explore Service →</div>
    </Link>
  </div>
</section>

          {/* INTEL STRIP BANNER */}
<section className="sec-sm reveal" style={{ width: '100%' }}>
  <div className="intel-strip" style={{ width: '100%' }}>
    
    {/* Text Side */}
    <div className="reveal">
      <div className="lbl">IBC Intelligence</div>
      <h2 style={{ wordBreak: 'break-word' }}>Business-first AI advisory for real workflows.</h2>
      <p style={{ wordBreak: 'break-word' }}>IBC Intelligence helps businesses identify where AI creates measurable operational leverage...</p>
      
      <div style={{ marginTop: '22px' }}>
        <Link href="/ibc-intelligence#pg-intel" className="btn-p">
          Book a Consultancy →
        </Link>
      </div>
    </div>

    {/* Logo Side */}
    <div className="reveal logo-container">
      <div className="logo" style={{ cursor: 'default' }}>
        <img 
          src="/assets/images/logo/intel3.webp" 
          alt="IBC Studio Logo" 
          style={{ 
            // Scales smoothly between 110px (mobile) and 200px (desktop)
            width: 'clamp(110px, 15vw, 200px)', 
            height: 'clamp(110px, 15vw, 200px)', 
            objectFit: 'contain',
            display: 'block'
          }} 
        />
      </div>
    </div>

  </div>
</section>

          <div className="divl"></div>

          {/* PROCESS TIMELINE */}
          <section className="sec reveal" style={{ background: 'var(--bg2)', width: '100%' }}>
            <div style={{ textAlign: 'center', width: '100%' }}>
              <div className="lbl lbl-c" style={{ justifyContent: 'center' }}>How We Work</div>
              <h2 
                className="title" 
                style={{ 
                  wordBreak: 'break-word', 
                  textAlign: 'center', 
                  margin: '0 auto 18px' 
                }}
              >
                Our 4-Step Process
              </h2>
              <p className="desc desc-c" style={{ width: '100%', wordBreak: 'break-word' }}>
                From your first idea to final delivery, a streamlined and collaborative approach focused on clarity and results.
              </p>
            </div>
            
            <div className="proc" style={{ width: '100%' }}>
              <div className="pstep reveal"><div className="pnum"><span>01</span></div><h3>Initial Consultation</h3><p style={{ wordBreak: 'break-word' }}>We listen, understand your goals, audience and vision before a single frame is captured.</p></div>
              <div className="pstep reveal"><div className="pnum"><span>02</span></div><h3>Proposal & Agreement</h3><p style={{ wordBreak: 'break-word' }}>A detailed proposal and agreement outlining scope, timeline, and pricing tailored to your needs.</p></div>
              <div className="pstep reveal"><div className="pnum"><span>03</span></div><h3>Production Phase</h3><p style={{ wordBreak: 'break-word' }}>Our team manages scripting, shooting, and editing with regular updates throughout production.</p></div>
              <div className="pstep reveal"><div className="pnum"><span>04</span></div><h3>Delivery & Review</h3><p style={{ wordBreak: 'break-word' }}>Final delivery in your required formats, with a revision process until you're 100% satisfied.</p></div>
            </div>
          </section>

          <div className="divl"></div>

          {/* BLOG FEEDS */}
          <section className="sec reveal" style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '14px', width: '100%' }}>
              <div>
                <div className="lbl">Latest Insights</div>
                <h2 className="title" style={{ marginBottom: 0, wordBreak: 'break-word' }}>From Our Blog</h2>
              </div>
              <Link href="/blogs" className="btn-o">View All Articles →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" style={{ width: '100%', paddingTop: '30px' }}>
              <Link href="/blogs/ai-video-storytelling-2025" className="bcard reveal" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="bthumb" style={{ background: 'linear-gradient(135deg,#111,#1a1a2e 55%,#161e2e)' }}></div>
                <div className="bc" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <span className="btag">AI Production</span>
                    <h3 style={{ wordBreak: 'break-word' }}>How AI Video is Redefining Brand Storytelling in 2025</h3>
                    <p style={{ wordBreak: 'break-word' }}>How UAE brands are leveraging AI-generated video to scale content without sacrificing quality.</p>
                  </div>
                  <div className="bmeta"><span className="bdate">May 2025</span><span className="brm">Read More →</span></div>
                </div>
              </Link>

              <Link href="/blogs/power-of-cinematic-corporate-films" className="bcard reveal" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="bthumb" style={{ background: 'linear-gradient(135deg,#111,#1a1a2e 55%,#161e2e)' }}></div>
                <div className="bc" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <span className="btag">Video Production</span>
                    <h3 style={{ wordBreak: 'break-word' }}>The Power of Cinematic Corporate Films: Why They Work</h3>
                    <p style={{ wordBreak: 'break-word' }}>How a well-crafted corporate film builds credibility, trust and emotional connection.</p>
                  </div>
                  <div className="bmeta"><span className="bdate">Apr 2025</span><span className="brm">Read More →</span></div>
                </div>
              </Link>

              <Link href="/blogs/why-your-ivr-voice-matters" className="bcard reveal" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="bthumb" style={{ background: 'linear-gradient(135deg,#111,#1a1a2e 55%,#161e2e)' }}></div>
                <div className="bc" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <span className="btag">Audio</span>
                    <h3 style={{ wordBreak: 'break-word' }}>Why Your IVR Voice Matters More Than You Think</h3>
                    <p style={{ wordBreak: 'break-word' }}>The first voice a customer hears shapes their entire experience with your brand.</p>
                  </div>
                  <div className="bmeta"><span className="bdate">Mar 2025</span><span className="brm">Read More →</span></div>
                </div>
              </Link>
            </div>
          </section>

          {/* FREQUENTLY ASKED QUESTIONS */}
          <section className="sec reveal" style={{ width: '100%' }}>
            <div style={{ textAlign: 'center', width: '100%' }}>
              <div className="lbl lbl-c">Common Questions</div>
              <h2 className="title" style={{ wordBreak: 'break-word' }}>Frequently Asked</h2>
            </div>
            <div className="faq" style={{ width: '100%', maxWidth: '780px' }}>
              {faqs.map((faq, index) => (
                <div key={index} className="fi reveal">
                  <button className="fq" onClick={() => toggleFaq(index)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ paddingRight: '10px', wordBreak: 'break-word' }}>{faq.q}</span>
                    <span className="fic">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  <div className="fa" style={{ display: openFaq === index ? 'block' : 'none', maxHeight: openFaq === index ? '100%' : '0' }}>
                    <p style={{ wordBreak: 'break-word', paddingBottom: '22px' }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}