'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function IBCIntelligence() {
  const [windowWidth, setWindowWidth] = useState(1200);
  const containerRef = useRef(null);

  useEffect(() => {
    // Set initial viewport layout baseline post-hydration safely
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Initialize Scroll Reveal Intersection Observer Engine
    const revealElements = containerRef.current?.querySelectorAll('.reveal');
    if (revealElements && revealElements.length > 0) {
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
        window.removeEventListener('resize', handleResize);
        revealElements.forEach((el) => observer.unobserve(el));
      };
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Helper resolver providing custom inline grid column overrides for mobile and tablet tiers
  const getGridTemplateColumns = () => {
    if (windowWidth < 768) return '1fr';
    if (windowWidth <= 1024) return 'repeat(2, 1fr)';
    return ''; // Reverts back to main template CSS rules automatically on desktop screens
  };

  const dynamicGridStyle = {
    display: 'grid',
    gridTemplateColumns: getGridTemplateColumns(),
    gap: '20px',
    width: '100%',
    boxSizing: 'border-box'
  };

  return (
    <>
      {/* INJECT INLINE SEO META BLOCK TAGS COMPLIANT WITH SINGLE FILE LAYOUT ARCHITECTURE */}
      <title>IBC Intelligence | IBC Studio</title>
      <meta name="description" content="Discover how AI video generation and professional photography services in Dubai are helping businesses scale faster, build credibility, and modernize marketing, training, and corporate communications." />
      <meta name="keywords" content="AI video generation in dubai,AI video generation in UAE,AI promotional videos in dubai,AI promotional videos in uae,AI powered video creation in dubai,AI powered video creation in abu dabi,AI Corporate video production in abudhabi,AI Corporate video production in dubai,AI Corporate video production in uae,AI for corporate presentations in dubai,AI video for marketing in dubai,AI generated training videos in dubai,AI for employee onboarding videos in dubai,AI video for internal communications in dubai,AI explainer videos in dubai, professional photography Dubai, industrial photography Dubai, corporate photography Dubai, commercial photographer Dubai, AI corporate video Dubai, post production studio Dubai, video production company UAE, 360 video production UAE, AR video production Dubai" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ibcstudio.com/ibc-intelligence" />
      <meta property="og:title" content="How AI Video Generation and Professional Photography Are Transforming Dubai Businesses" />
      <meta property="og:description" content="Dubai businesses are combining AI-powered video creation with professional photography to stay competitive in marketing, training, and corporate communication." />
      <meta property="og:site_name" content="IBC Studio" />

      <div className="page active" id="pg-intel" ref={containerRef}>
        <div className="pw" style={{ width: '100%' }}>
          
          {/* HERO HEADER AREA - INHERITS FADE IN EFFECT NATIVELY */}
          <div 
            className="ih reveal" 
            style={{ 
              width: '100%', 
              paddingTop: 'clamp(120px, 12vh, 170px)', 
              paddingBottom: '72px',
              paddingLeft: 'clamp(22px, 6vw, 80px)', 
              paddingRight: 'clamp(22px, 6vw, 80px)'
            }}
          >
            <div className="ig" aria-hidden="true"></div>
            <div className="igl1" aria-hidden="true"></div>
            <div className="igl2" aria-hidden="true"></div>
            
            <div className="ibdg" style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
              <div className="ibdi">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="2.5"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
                  <path d="M6.5 6.5l3.7 3.7M17.5 6.5l-3.7 3.7M6.5 17.5l3.7-3.7M17.5 17.5l-3.7-3.7"/>
                </svg>
              </div>
              <div className="ibdn">IBC <em>Intelligence</em></div>
              <span className="ibdp">AI Advisory</span>
            </div>

            <div className="ihg" style={{ width: '100%', display: 'flex', flexDirection: windowWidth <= 1024 ? 'column' : 'row', gap: '40px' }}>
              <div style={{ width: '100%' }}>
                <h1 
                  style={{ 
                    wordBreak: 'break-word', 
                    overflowWrap: 'break-word',
                    fontSize: 'clamp(32px, 5vw, 50px)', 
                    lineHeight: '1.1', 
                  	marginBottom: '18px' 
                  }}
                >
                  AI Advisory for<br />Real Business Workflows.
                </h1>
                <p style={{ wordBreak: 'break-word', overflowWrap: 'break-word', color: 'rgba(255,255,255,.66)' }}>
                  We help businesses identify where AI creates measurable operational leverage across productivity, speed, decision support, reporting, and execution.
                </p>
                
                <div style={{ display: 'flex', gap: '11px', flexWrap: 'wrap', marginTop: '18px' }}>
                  <Link href="/contact" className="ibb" style={{ display: 'inline-flex', padding: '12px 20px', fontSize: '13px', textDecoration: 'none', justifyContent: 'center', alignItems: 'center' }}>
                    Book a Consultancy &rarr;
                  </Link>
                  <button 
                    style={{ 
                      padding: '12px 20px', 
                      background: 'transparent', 
                      border: '1px solid rgba(158,182,207,.22)', 
                      color: 'rgba(158,182,207,.65)', 
                      fontFamily: "'Work Sans', sans-serif", 
                      fontSize: '13px', 
                      borderRadius: '4px', 
                      cursor: 'default',
                      textAlign: 'left'
                    }}
                  >
                    Boutique Operator-Led Advisory
                  </button>
                </div>
                
                <div className="itgs" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '24px' }}>
                  <span className="itg">19+ Years in Dubai</span>
                  <span className="itg">Advisory + Execution</span>
                  <span className="itg">Workflow Optimization</span>
                  <span className="itg">Decision Support</span>
                  <span className="itg">In-House Teams</span>
                </div>
              </div>

              <div className="ivp" style={{ width: '100%' }}>
                <div className="ipl">
                  <svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
                </div>
                <span className="ivl" style={{ textAlign: 'center', padding: '0 10px', display: 'block', width: '100%' }}>
                  Business-First AI Opportunity Review
                </span>
              </div>
            </div>
          </div>

          <div className="idv"></div>

          {/* CORE PROBLEM SECTION */}
          <div className="is reveal" style={{ width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="il">The Problem</div>
            <h2 className="it" style={{ wordBreak: 'break-word' }}>Most businesses are applying AI to the wrong workflows.</h2>
            <p className="id" style={{ width: '100%', maxWidth: '780px', wordBreak: 'break-word', marginBottom: '32px' }}>
              Visible AI use cases are not always the ones that improve productivity, margin, turnaround time, or decision quality. The real challenge is knowing where AI creates leverage and where human context still matters.
            </p>
            <div className="ics" style={getGridTemplateColumns() ? dynamicGridStyle : { width: '100%' }}>
              <div className="ic"><div className="icn">01</div><h3>AI without operational context</h3><p style={{ wordBreak: 'break-word' }}>Teams adopt tools before understanding where workflow inefficiencies actually exist.</p></div>
              <div className="ic"><div className="icn">02</div><h3>Automation replacing visibility</h3><p style={{ wordBreak: 'break-word' }}>Processes become fragmented when automation is added without improving operational clarity.</p></div>
              <div className="ic"><div className="icn">03</div><h3>High-impact workflows stay manual</h3><p style={{ wordBreak: 'break-word' }}>Important bottlenecks often remain slow, repetitive, and resource-intensive.</p></div>
              <div className="ic"><div className="icn">04</div><h3>Decision quality suffers</h3><p style={{ wordBreak: 'break-word' }}>AI outputs without business context can reduce clarity instead of improving it.</p></div>
            </div>
          </div>

          <div className="idv"></div>

          {/* APPROACH STRIP LAYER */}
          <div className="is isd reveal" style={{ width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="il">Our Approach</div>
            <h2 className="it" style={{ wordBreak: 'break-word' }}>AI creates value when applied with business context.</h2>
            <p className="id" style={{ width: '100%', maxWidth: '780px', wordBreak: 'break-word', marginBottom: '32px' }}>
              We study how teams actually operate, identify high-leverage bottlenecks, and design practical AI systems that fit the real process instead of forcing disruption.
            </p>
            <div className="ics" style={getGridTemplateColumns() ? dynamicGridStyle : { width: '100%' }}>
              <div className="ic"><div className="icn">01</div><h3>Understand the Workflow</h3><p style={{ wordBreak: 'break-word' }}>We analyze how teams collaborate, retrieve information, execute tasks, and make decisions.</p></div>
              <div className="ic"><div className="icn">02</div><h3>Identify Bottlenecks</h3><p style={{ wordBreak: 'break-word' }}>We focus on workflows affecting productivity, reporting, turnaround time, efficiency, and decision support.</p></div>
              <div className="ic"><div className="icn">03</div><h3>Design Practical AI Systems</h3><p style={{ wordBreak: 'break-word' }}>We build AI solutions around the business process, not around hype or unnecessary complexity.</p></div>
              <div className="ic"><div className="icn">04</div><h3>Improve Execution</h3><p style={{ wordBreak: 'break-word' }}>The outcome is faster workflows, reduced manual overhead, stronger visibility, and better information access.</p></div>
            </div>
          </div>

          <div className="idv"></div>

          {/* PROOF / CASE STUDY AREA */}
          <div className="is reveal" style={{ width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="il">Proof / Case Study</div>
            <h2 className="it" style={{ wordBreak: 'break-word' }}>Accelerating due diligence through AI-assisted comparative analysis.</h2>
            <p className="id" style={{ width: '100%', maxWidth: '780px', wordBreak: 'break-word', marginBottom: '32px' }}>
              For a blockchain funding platform evaluating a large number of projects, analysts needed to manually retrieve, compare, and evaluate similar projects and market performance data.
            </p>
            <div className="iwk" style={getGridTemplateColumns() ? dynamicGridStyle : { width: '100%' }}>
              <div className="ipj">
                <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg,#46b7b7,#244f7d)', borderRadius: '2px', marginBottom: '14px' }}></div>
                <span className="ipt">Solution</span>
                <h3>Telegram-integrated AI assistant</h3>
                <p style={{ wordBreak: 'break-word' }}>We built an AI-powered comparative analysis assistant using semantic retrieval to identify and compare relevant projects and token intelligence beyond rigid tag-based filtering.</p>
                <div className="ipf"><span>Existing workflow</span><i>AI-assisted</i></div>
              </div>
              <div className="ipj">
                <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg,#46b7b7,#244f7d)', borderRadius: '2px', marginBottom: '14px' }}></div>
                <span className="ipt">Impact</span>
                <h3>50% faster due diligence</h3>
                <p style={{ wordBreak: 'break-word' }}>Comparative analysis workflows were completed substantially faster while keeping analyst-driven decision quality intact.</p>
                <div className="ipf"><span>Speed gain</span><i>50%</i></div>
              </div>
              <div className="ipj">
                <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg,#46b7b7,#244f7d)', borderRadius: '2px', marginBottom: '14px' }}></div>
                <span className="ipt">Efficiency</span>
                <h3>~8 hours saved per analyst / week</h3>
                <p style={{ wordBreak: 'break-word' }}>Relevant market intelligence became instantly accessible, reducing repetitive research overhead without increasing headcount.</p>
                <div className="ipf"><span>Weekly saving</span><i>~8 hrs</i></div>
              </div>
            </div>
          </div>

          <div className="idv"></div>

          {/* TEAM LEADERSHIP SECTION */}
          <div className="is isd reveal" style={{ width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="il">Trust / Team</div>
            <h2 className="it" style={{ wordBreak: 'break-word' }}>Built by operators, creators, and technical teams.</h2>
            <p className="id" style={{ width: '100%', maxWidth: '780px', wordBreak: 'break-word', marginBottom: '32px' }}>
              IBC Intelligence combines strategic thinking with in-house execution capability across media, systems, content, and digital infrastructure.
            </p>
            <div className="itm" style={getGridTemplateColumns() ? dynamicGridStyle : { width: '100%' }}>
              <div className="imc">
                <div className="ima">AB</div>
                <h3>Abhishek Banerjee</h3>
                <span className="imr">CEO</span>
                <p style={{ wordBreak: 'break-word' }}>Leads company strategy, business growth, and cross-functional execution across media, digital, and operational initiatives.</p>
              </div>
              <div className="imc">
                <div className="ima">AA</div>
                <h3>Atif Amjad</h3>
                <span className="imr">COO / AI Consultancy Lead</span>
                <p style={{ wordBreak: 'break-word' }}>Built the internal comparative analysis system and leads workflow-focused AI advisory and implementation.</p>
              </div>
              <div className="imc">
                <div className="ima">KS</div>
                <h3>Kabir Saigal</h3>
                <span className="imr">CPO</span>
                <p style={{ wordBreak: 'break-word' }}>Oversees product direction, workflow systems, digital infrastructure, and implementation strategy.</p>
              </div>
            </div>
          </div>

          <div className="idv"></div>

          {/* ENGAGEMENT MATRIX SCALES */}
          <div className="is reveal" style={{ width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <div className="il">Engagement Areas</div>
            <h2 className="it" style={{ wordBreak: 'break-word' }}>Common areas where we support clients.</h2>
            <p className="id" style={{ width: '100%', maxWidth: '780px', wordBreak: 'break-word', marginBottom: '32px' }}>We focus on operational improvement and workflow outcomes, not AI hype.</p>
            <div className="ics" style={getGridTemplateColumns() ? dynamicGridStyle : { width: '100%' }}>
              <div className="ic"><div className="icn">01</div><h3>Internal Knowledge & Retrieval</h3><p style={{ wordBreak: 'break-word' }}>Helping teams access, compare, and retrieve operational information faster.</p></div>
              <div className="ic"><div className="icn">02</div><h3>Workflow & Process Optimization</h3><p style={{ wordBreak: 'break-word' }}>Reducing repetitive manual work and improving operational speed.</p></div>
              <div className="ic"><div className="icn">03</div><h3>Content & Production Workflows</h3><p style={{ wordBreak: 'break-word' }}>Improving creative and production efficiency using AI-assisted systems.</p></div>
              <div className="ic"><div className="icn">04</div><h3>Reporting & Decision Support</h3><p style={{ wordBreak: 'break-word' }}>Enhancing visibility, analysis, and operational decision-making.</p></div>
              <div className="ic"><div className="icn">05</div><h3>Lead & Sales Workflow Support</h3><p style={{ wordBreak: 'break-word' }}>Supporting qualification, routing, and communication workflows.</p></div>
            </div>
          </div>

          <div className="idv"></div>

          {/* BASE BOTTOM CTA ENGAGEMENT REVIEW */}
          <div className="is isd reveal" style={{ width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)', paddingBottom: '80px' }}>
            <div className="il">Consultation</div>
            <h2 className="it" style={{ wordBreak: 'break-word' }}>Book a business-first AI opportunity review.</h2>
            <p className="id" style={{ width: '100%', maxWidth: '780px', wordBreak: 'break-word', marginBottom: '32px' }}>
              We will review your current workflows, identify where AI may create operational leverage, and discuss practical opportunities aligned with how your business actually operates.
            </p>
            <div className="iwk" style={getGridTemplateColumns() ? dynamicGridStyle : { width: '100%' }}>
              <div className="ipj">
                <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg,#46b7b7,#244f7d)', borderRadius: '2px', marginBottom: '14px' }}></div>
                <span className="ipt">Step 1</span>
                <h3>Workflow Review</h3>
                <p style={{ wordBreak: 'break-word' }}>Understanding operational bottlenecks, inefficiencies, team handoffs, and information access issues.</p>
                <div className="ipf"><span>Focus</span><em>Operations</em></div>
              </div>
              <div className="ipj">
                <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg,#46b7b7,#244f7d)', borderRadius: '2px', marginBottom: '14px' }}></div>
                <span className="ipt">Step 2</span>
                <h3>AI Opportunity Identification</h3>
                <p style={{ wordBreak: 'break-word' }}>Identifying where AI can improve productivity, speed, reporting, retrieval, or decision support.</p>
                <div className="ipf"><span>Focus</span><i>Leverage</i></div>
              </div>
              <div className="ipj">
                <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg,#46b7b7,#244f7d)', borderRadius: '2px', marginBottom: '14px' }}></div>
                <span className="ipt">Step 3</span>
                <h3>Practical Recommendations</h3>
                <p style={{ wordBreak: 'break-word' }}>Business-aligned ideas tailored to your operational workflow and implementation reality.</p>
                <div className="ipf"><span>Focus</span><i>Execution</i></div>
              </div>
            </div>
            <div style={{ marginTop: '34px' }}>
              <Link href="/contact" className="ibb" style={{ display: 'inline-flex', padding: '13px 22px', fontSize: '13px', textDecoration: 'none', justifyContent: 'center' }}>
                Schedule a Consultation &rarr;
              </Link>
            </div>
          </div>

          {/* SUB DIVISION EXCLUSIVE FOOTER SLATE */}
          <div className="ift" style={{ width: '100%', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)' }}>
            <p>&#169; 2026 IBC Intelligence &mdash; Boutique Operator-Led AI Advisory by IBC Studio. Dubai, UAE.</p>
          </div>

        </div>
      </div>
    </>
  );
}