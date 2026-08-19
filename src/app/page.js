'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import FaqSection from '@/components/FaqSection';

// Code split below-the-fold components with lightweight skeleton fallbacks
const ImageSlider = dynamic(() => import('@/components/ImageSlider'), { 
  loading: () => <div style={{ height: '300px', width: '100%', background: 'var(--bg2)', borderRadius: '12px' }} /> 
});

const LogoBand = dynamic(() => import('@/components/LogoBand'), { 
  loading: () => <div style={{ height: '80px', width: '100%' }} /> 
});

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === '#pg-home') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    const handleScrollMetrics = () => {
      if (window.scrollY > 10) document.body.classList.remove('home-hero-top');
      else document.body.classList.add('home-hero-top');
    };
    if (window.scrollY <= 10) document.body.classList.add('home-hero-top');
    
    window.addEventListener('scroll', handleScrollMetrics, { passive: true });

    // Optimized Intersection Observer for below-the-fold content sections only
    const revealElements = containerRef.current?.querySelectorAll('.reveal:not(.hero)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.05 });
    
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScrollMetrics);
      document.body.classList.remove('home-hero-top');
    };
  }, []);

  const faqs = [
    { q: "What types of clients does IBC Studio work with?", a: "We work with brands, corporations, SMEs, and government entities across the UAE and wider GCC." },
    { q: "Do you offer multilingual production services?", a: "Absolutely. We offer voice-overs, dubbing, and localization in Arabic, English, Hindi, Urdu, French, and more." },
    { q: "How long does a typical video production project take?", a: "A standard corporate video typically takes 2–4 weeks from briefing to delivery." },
    { q: "What is IBC Intelligence?", a: "IBC Intelligence is the AI-powered consultancy and insights division of IBC Studio." },
    { q: "How do I get a quote for my project?", a: "Reach out via our Contact page or WhatsApp for a free consultation." }
  ];

  return (
    <>
      <title>IBC Studio - Leading Media Production Dubai</title>
      <meta name="description" content="Discover how AI video generation and professional photography services in Dubai are helping businesses scale faster, build credibility, and modernize marketing, training, and corporate communications." />

      <style>{`
        @keyframes staggerFadeUp {
          0% { opacity: 0; transform: translate3d(0, 16px, 0); }
          100% { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        .hero-element-1 {
          opacity: 0;
          animation: staggerFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
          will-change: opacity, transform;
        }
        .hero-element-2 {
          opacity: 0;
          animation: staggerFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
          will-change: opacity, transform;
        }
        .hero-element-3 {
          opacity: 0;
          animation: staggerFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
          will-change: opacity, transform;
        }
        .hero-element-4 {
          opacity: 0;
          animation: staggerFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.55s forwards;
          will-change: opacity, transform;
        }

        /* GPU Accelerated Composite Layers for Heavy Hero Background Elements */
        .hero-gradient-scene, .hero-wave-field, .hero-grain, .hvignette {
          transform: translate3d(0, 0, 0);
          will-change: transform;
          backface-visibility: hidden;
          pointer-events: none;
        }
      `}</style>

      <div className="page active" id="pg-home" ref={containerRef}>
        <div className="pw">
          
          {/* HERO SECTION WITH STAGGERED FADE-IN SEQUENCE */}
          <section className="hero in-view" style={{ position: 'relative', overflow: 'hidden' }}>
              <div className="hero-gradient-scene" aria-hidden="true"></div>
              <div className="hero-wave-field" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>
              <div className="hero-grain" aria-hidden="true"></div>
              <div className="hvignette" aria-hidden="true"></div>

              <div className="hcontent" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 999 }}>
                
                <div className="heb hero-element-1">
                  UAE's Leading Media Production House
                </div>

                <h1 className="htag hero-element-2" style={{ fontSize: 'clamp(32px, 8vw, 90px)', width: '100%', lineHeight: '1.0' }}>
                  <span className="l1" style={{ display: 'block' }}>WHERE IDEAS</span>
                  <span className="l2" style={{ display: 'block' }}>BECOME</span>
                  <span className="l3" style={{ display: 'block', color: 'var(--sage)' }}>UNFORGETTABLE.</span>
                </h1>

                <p className="hsub hero-element-3" style={{ width: '100%' }}>
                  Welcome to IBC Studio. We are a full-service media production and digital solutions company creating powerful visual experiences, meaningful brand stories, and impactful content that leaves a lasting impression.
                </p>

                <div className="hact hero-element-4" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
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
          <LogoBand />

          {/* TESTIMONIALS */}
          <section className="sec reveal" style={{ width: '100%' }}>
            <div className="lbl">Client Testimonials</div>
            <h2 className="title" style={{ wordBreak: 'break-word' }}>Voices of Trust</h2>
            <p className="desc" style={{ width: '100%', wordBreak: 'break-word' }}>
              Real results, real relationships. Hear directly from the brands who've partnered with us.
            </p>
               
            <div style={{ width: '100%', paddingTop: '20px' }}>
              
              <section className="sec" style={{ width: '100%', padding: '60px 0' }}>
                <ImageSlider />
              </section>

              <div className="slider-wrapper" style={{ marginTop: '20px' }}>
                <div className="tgrid">
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
                      </div>
                    </div>
                  </div>

                  <div className="tcard reveal">
                    <p className="tquote">
                      "Worked with them in 2 projects so far and I really appreciate their professionalism and honesty.
                       Looking forward to the new projects we will work on together!" 
                    </p><br/>
                    <div className="tauthor">
                      <div className="tav">LA</div>
                      <div>
                        <div className="tan">Lilly Ally</div>
                      </div>
                    </div>
                  </div>

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
              <div>
                <div className="lbl">About IBC Studio</div>
                <h2 className="title" style={{ wordBreak: 'break-word' }}>The UAE’s Destination for Creative Media & Digital Production</h2>
                <p style={{ fontSize: '16.5px', color: 'var(--mid)', lineHeight: '1.75', marginBottom: '14px', wordBreak: 'break-word' }}>IBC Studio is a Dubai-based media production and digital solutions company with over 19 years of industry experience.</p>
                <p style={{ fontSize: '16.5px', color: 'var(--mid)', lineHeight: '1.75', marginBottom: '26px', wordBreak: 'break-word' }}>We specialize in audio, video, photography, IVR, OHM, event coverage, AI-powered content, and digital media solutions, helping businesses create professional, engaging, and impactful content tailored for modern audiences across the UAE and Middle East.</p>
                <Link href="/about#pg-about" className="btn-o">Learn Our Story →</Link>
              </div>
              <div className="mini-stat-grid" style={{ width: '100%' }}>
                <div className="sitem"><span className="snum">19<span className="a">+</span></span><span className="slbl">Years Experience</span></div>
                <div className="sitem" style={{ borderRight: 'none' }}><span className="snum">1K<span className="a">+</span></span><span className="slbl">Video & Photo Projects</span></div>
                <div className="sitem" style={{ borderTop: '1px solid var(--border)' }}><span className="snum">3K<span className="a">+</span></span><span className="slbl">Audio Projects</span></div>
                <div className="sitem" style={{ borderRight: 'none', borderTop: '1px solid var(--border)' }}><span className="snum">3K<span className="a">+</span></span><span className="slbl">Satisfied Clients</span></div>
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
              <Link href="/services#audio" className="srv-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="srv-ic"><svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></div>
                <h3>Audio Production</h3><p style={{ wordBreak: 'break-word' }}>IVR, on-hold messaging, multilingual voice-overs, jingles, dubbing and localization services.</p>
                <div className="srv-arr">Explore Service →</div>
              </Link>
              <Link href="/services#video" className="srv-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="srv-ic"><svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/></svg></div>
                <h3>Video Production</h3><p style={{ wordBreak: 'break-word' }}>Corporate films, commercials, drone, 360°/VR/AR, editing, and color grading.</p>
                <div className="srv-arr">Explore Service →</div>
              </Link>
              <Link href="/services#photo" className="srv-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="srv-ic"><svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg></div>
                <h3>Photography</h3><p style={{ wordBreak: 'break-word' }}>Product, real estate, industrial, corporate and event photography.</p>
                <div className="srv-arr">Explore Service →</div>
              </Link>
              <Link href="/services#ai" className="srv-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="srv-ic"><svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg></div>
                <h3>AI Production</h3><p style={{ wordBreak: 'break-word' }}>AI video, AI photography, synthetic media, creative direction, and workflow-aware production systems.</p>
                <div className="srv-arr">Explore Service →</div>
              </Link>
              <Link href="/services#digital" className="srv-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="srv-ic"><svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
                <h3>Digital & Development</h3><p style={{ wordBreak: 'break-word' }}>Web design, e-learning platforms, interactive media and custom digital tools.</p>
                <div className="srv-arr">Explore Service →</div>
              </Link>
              <Link href="/ibc-intelligence#pg-intel" className="srv-card" style={{ textDecoration: 'none', display: 'block' }}>
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
              <div>
                <div className="lbl">IBC Intelligence</div>
                <h2 style={{ wordBreak: 'break-word' }}>Business-first AI advisory for real workflows.</h2>
                <p style={{ wordBreak: 'break-word' }}>IBC Intelligence helps businesses identify where AI creates measurable operational leverage...</p>
                <div style={{ marginTop: '22px' }}>
                  <Link href="/ibc-intelligence#pg-intel" className="btn-p">
                    Book a Consultancy →
                  </Link>
                </div>
              </div>
              <div className="logo-container">
                <div className="logo" style={{ cursor: 'default' }}>
                  <img 
                    src="/assets/images/logo/intel3.webp" 
                    alt="IBC Studio Logo" 
                    style={{ 
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
              <h2 className="title" style={{ wordBreak: 'break-word', textAlign: 'center', margin: '0 auto 18px' }}>
                Our 4-Step Process
              </h2>
              <p className="desc desc-c" style={{ width: '100%', wordBreak: 'break-word' }}>
                From your first idea to final delivery, a streamlined and collaborative approach focused on clarity and results.
              </p>
            </div>
            
            <div className="proc" style={{ width: '100%' }}>
              <div className="pstep"><div className="pnum"><span>01</span></div><h3>Initial Consultation</h3><p style={{ wordBreak: 'break-word' }}>We listen, understand your goals, audience and vision before a single frame is captured.</p></div>
              <div className="pstep"><div className="pnum"><span>02</span></div><h3>Proposal & Agreement</h3><p style={{ wordBreak: 'break-word' }}>A detailed proposal and agreement outlining scope, timeline, and pricing tailored to your needs.</p></div>
              <div className="pstep"><div className="pnum"><span>03</span></div><h3>Production Phase</h3><p style={{ wordBreak: 'break-word' }}>Our team manages scripting, shooting, and editing with regular updates throughout production.</p></div>
              <div className="pstep"><div className="pnum"><span>04</span></div><h3>Delivery & Review</h3><p style={{ wordBreak: 'break-word' }}>Final delivery in your required formats, with a revision process until you're 100% satisfied.</p></div>
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
              <Link href="/blogs/ai-video-storytelling-2025" className="bcard" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
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

              <Link href="/blogs/power-of-cinematic-corporate-films" className="bcard" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
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

              <Link href="/blogs/why-your-ivr-voice-matters" className="bcard" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
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
          <FaqSection faqs={faqs} />

        </div>
      </div>
    </>
  );
}