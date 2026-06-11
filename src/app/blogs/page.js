'use client'; // Kept at the absolute top for client hook compliance

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Blogs() {
  const containerRef = useRef(null);

  // Initialize unified fade-in scroll transitions across structural layouts
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

  const archiveBlogs = [
    { slug: "what-makes-a-great-product-photograph", tag: "Photography", title: "What Makes a Great Product Photograph", desc: "The technical and creative decisions that separate average shots from ones that actually sell.", date: "Feb 2025" },
    { slug: "multilingual-media-arabic-first-uae", tag: "Localization", title: "Multilingual Media: Why Arabic First Matters in the UAE", desc: "The cultural and commercial case for leading with Arabic in your media production strategy.", date: "Jan 2025" },
    { slug: "brand-listening-ai-market-research", tag: "IBC Intelligence", title: "Brand Listening: How AI is Changing Market Research", desc: "How real-time AI social listening is transforming how brands understand their audience.", date: "Dec 2024" },
    { slug: "rise-of-aerial-cinematography-gulf", tag: "Drone", title: "The Rise of Aerial Cinematography in the Gulf", desc: "How drone technology is reshaping real estate, events, and infrastructure storytelling in the UAE.", date: "Nov 2024" },
    { slug: "e-learning-2025-platforms-that-work", tag: "Digital", title: "E-Learning in 2025: Platforms That Actually Work", desc: "Design principles behind e-learning platforms that employees actually use and enjoy.", date: "Oct 2024" },
    { slug: "jingles-are-back-brands-investing", tag: "Audio", title: "Jingles Are Back — Why Brands Are Investing Again", desc: "The surprising resurgence of brand audio identity and what it means for your marketing.", date: "Sep 2024" }
  ];

  return (
    <>
      {/* INJECT INLINE SEO META REVIEWS DIRECTLY INTO THE ASSIGNED DOM HEAD PORT */}
      <title>Blogs | IBC Studio</title>
      <meta name="description" content="Explore fresh industry perspectives covering premium corporate video production, commercial photography strategies, native multilingual audio setups, and practical AI workflow advisory out of Dubai, UAE." />
      <meta name="keywords" content="video production company UAE, AI video generation Dubai, commercial photographer Dubai, industrial photography Dubai, corporate video Dubai, post production studio Dubai, multi language media localization uae" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ibcstudio.com/blogs" />
      <meta property="og:title" content="The IBC Studio Blog | Insights on Media, Production & AI in Dubai" />
      <meta property="og:description" content="Perspectives on media, production, AI, and the future of brand storytelling across the UAE and GCC region." />
      <meta property="og:site_name" content="IBC Studio" />

      <div className="page active" id="pg-blogs" ref={containerRef}>
        <div className="pw" style={{ width: '100%' }}>
          
          {/* TOP HEADER SECTION - FLUID RESPONSIVE THEME PADDING */}
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
            <div className="lbl">Insights & Ideas</div>
            <h1 className="title" style={{ fontSize: 'clamp(32px, 5vw, 50px)', lineHeight: '1.1', wordBreak: 'break-word' }}>
              The IBC Studio Blog
            </h1>
            <p className="desc" style={{ width: '100%', maxWidth: '540px', marginBottom: 0, wordBreak: 'break-word' }}>
              Perspectives on media, production, AI, and the future of brand storytelling.
            </p>
          </div>

          {/* FEATURED ARTICLES SECTION */}
          <div 
            className="bfeat reveal" 
            style={{ 
              width: '100%', 
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)',
              paddingBottom: '44px'
            }}
          >
            {/* Main Hero Card */}
            <Link href="/blogs/ai-video-storytelling-2025" className="bfcard" style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
              <div className="bfthumb" style={{ background: 'linear-gradient(135deg,#0d1117,#1a1a2e 55%,#16213e)' }}></div>
              <div className="bfbody">
                <span className="btag">Featured · AI Production</span>
                <h2 style={{ fontSize: '22px', wordBreak: 'break-word', lineHeight: '1.2' }}>How AI Video is Redefining Brand Storytelling in 2025</h2>
                <p style={{ wordBreak: 'break-word', fontSize: '14.5px', color: 'var(--dim)' }}>UAE brands are leveraging AI-generated video to scale content production without sacrificing quality. The shift is faster than most expected.</p>
                <div className="bmeta" style={{ marginTop: '18px', paddingTop: '18px', borderTop: '1px solid var(--border)' }}>
                  <span className="bdate">May 2025 · 8 min read</span>
                  <span className="brm">Read Article →</span>
                </div>
              </div>
            </Link>

            {/* Right Sidebar Secondary Cards Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
              <Link href="/blogs/power-of-cinematic-corporate-films" className="bfcard secondary-feat" style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                <div className="bthumb secondary-thumb" style={{ background: 'linear-gradient(135deg,#0d1117,#1a1a2e 55%,#16213e)' }}></div>
                <div className="bc" style={{ padding: '20px' }}>
                  <span className="btag">Video Production</span>
                  <h3 style={{ fontSize: '16px', wordBreak: 'break-word' }}>The Power of Cinematic Corporate Films</h3>
                  <div className="bmeta" style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid transparent' }}>
                    <span className="bdate">Apr 2025</span>
                    <span className="brm">Read →</span>
                  </div>
                </div>
              </Link>

              <Link href="/blogs/why-your-ivr-voice-matters" className="bfcard secondary-feat" style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                <div className="bthumb secondary-thumb" style={{ background: 'linear-gradient(135deg,#0d1117,#1a1a2e 55%,#16213e)' }}></div>
                <div className="bc" style={{ padding: '20px' }}>
                  <span className="btag">Audio</span>
                  <h3 style={{ fontSize: '16px', wordBreak: 'break-word' }}>Why Your IVR Voice Matters More Than You Think</h3>
                  <div className="bmeta" style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid transparent' }}>
                    <span className="bdate">Mar 2025</span>
                    <span className="brm">Read →</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* LIST SPLITTER SEGMENT LABEL */}
          <div style={{ padding: '0 20px', paddingLeft: 'clamp(22px, 6vw, 80px)', paddingRight: 'clamp(22px, 6vw, 80px)', marginBottom: '18px' }}>
            <div style={{ fontSize: '11.5px', fontWeight: '600', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--dim)', borderBottom: '1px solid var(--border)', paddingBottom: '14px' }}>
              All Articles
            </div>
          </div>

          {/* GENERAL ARCHIVE TILES GRID */}
          <div 
            className="bgrid reveal" 
            style={{ 
              paddingBottom: '80px',
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)',
              gap: '22px'
            }}
          >
            {archiveBlogs.map((post, idx) => (
              <Link href={`/blogs/${post.slug}`} key={idx} className="bcard" style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                <div className="bthumb" style={{ background: 'linear-gradient(135deg,#111,#1a1a2e 55%,#161e2e)' }}></div>
                <div className="bc">
                  <span className="btag">{post.tag}</span>
                  <h3 style={{ wordBreak: 'break-word', fontSize: '16px' }}>{post.title}</h3>
                  <p style={{ wordBreak: 'break-word', fontSize: '13px', color: 'var(--dim)' }}>{post.desc}</p>
                  <div className="bmeta">
                    <span className="bdate">{post.date}</span>
                    <span className="brm">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}