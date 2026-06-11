'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function BlogPost({ params }) {
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    // Safely pull initial browser widths post client-side hydration mount
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Initialize fade-in intersection animations across structural article sections
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

  const isMobile = windowWidth < 768;

  return (
    <>
      {/* INJECT INLINE SEO META METRICS DIRECTLY FOR SINGLE-FILE ARCHITECTURE COMPLIANCE */}
      <title>Blog post | IBC Studio</title>
      <meta name="description" content="Discover how AI video generation and professional photography services in Dubai are helping businesses scale faster, build credibility, and modernize marketing, training, and corporate communications." />
      <meta name="keywords" content="AI video generation in dubai, AI video generation in UAE, AI promotional videos in dubai, professional photography Dubai, industrial photography Dubai, corporate photography Dubai" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ibcstudio.com/ai-video-generation-professional-photography-dubai" />
      <meta property="og:title" content="How AI Video Generation and Professional Photography Are Transforming Dubai Businesses" />
      <meta property="og:description" content="Dubai businesses are combining AI-powered video creation with professional photography to stay competitive in marketing, training, and corporate communication." />
      <meta property="og:site_name" content="IBC Studio" />

      <div className="page active" id="pg-blog-post" ref={containerRef}>
        <div className="pw" style={{ width: '100%' }}>
          <article>
            
            {/* ARTICLE HERO MAIN BANNER SECTION - BALANCED FLUID PADDING */}
            <div 
              className="article-hero reveal" 
              style={{ 
                paddingTop: 'clamp(120px, 12vh, 160px)', 
                paddingBottom: '48px',
                // Scales side margins fluidly or down to completely flat edge lines on mobile viewport limits
                paddingLeft: isMobile ? '20px' : 'clamp(38px, 6vw, 80px)',
                paddingRight: isMobile ? '20px' : 'clamp(38px, 6vw, 80px)',
                width: '100%'
              }}
            >
              <div className="article-wrap" style={{ width: '100%', maxWidth: '880px', margin: '0 auto' }}>
                <Link href="/blogs" className="article-back" style={{ textDecoration: 'none' }}>
                  &larr; Back to Blogs
                </Link>
                <div className="article-kicker" style={{ marginTop: '18px' }}>AI Production &middot; Featured Article</div>
                
                <h1 
                  style={{ 
                    fontSize: 'clamp(32px, 5vw, 66px)', 
                    letterSpacing: '-.04em', 
                    lineHeight: '1.05', 
                    marginBottom: '20px',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word'
                  }}
                >
                  How AI Video is Redefining Brand Storytelling in 2025
                </h1>
                
                <p className="article-standfirst" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                  A blueprint for long-form blog posts on the IBC Studio website, designed for case studies, insights, thought leadership, and production breakdowns.
                </p>
                
                <div className="article-meta" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px', color: 'var(--dim)', fontSize: '14px' }}>
                  <span>May 2025</span>
                  <span>8 min read</span>
                  <span>IBC Studio Editorial</span>
                </div>
                
                <div className="article-cover" style={{ width: '100%', marginTop: '42px' }}></div>
              </div>
            </div>

            {/* ARTICLE BODY WRAPPER - SMOOTH REVEAL ON SCROLL */}
            <div 
              className="article-body reveal" 
              style={{ 
                paddingLeft: isMobile ? '20px' : 'clamp(38px, 6vw, 80px)',
                paddingRight: isMobile ? '20px' : 'clamp(38px, 6vw, 80px)',
                paddingBottom: '86px',
                width: '100%'
              }}
            >
              <div className="article-content" style={{ width: '100%', maxWidth: '760px', margin: '0 auto' }}>
                <p style={{ wordBreak: 'break-word', overflowWrap: 'break-word', fontSize: '17px', lineHeight: '1.8', color: 'var(--txt2)' }}>
                  AI video is changing how brands plan, produce, and scale visual communication. The opportunity is not simply faster content creation, but a more flexible production model where ideas can be explored, tested, refined, and localized with far less friction.
                </p>
                
                <p style={{ wordBreak: 'break-word', overflowWrap: 'break-word', fontSize: '17px', lineHeight: '1.8', color: 'var(--txt2)', marginTop: '20px' }}>
                  For businesses, the strongest results come when AI is guided by creative direction, brand context, and a clear understanding of the audience. The technology supports the process, but the story still needs taste, structure, and purpose.
                </p>
                
                <div className="article-callout" style={{ width: '100%', margin: '38px 0', borderLeft: '3px solid var(--sage)', paddingLeft: '20px' }}>
                  <p style={{ wordBreak: 'break-word', overflowWrap: 'break-word', margin: 0, fontStyle: 'italic', fontSize: '18px', color: '#fff' }}>
                    Strong AI production is not about replacing creativity. It is about giving creative teams more room to explore, iterate, and deliver with precision.
                  </p>
                </div>
                
                <h2 style={{ fontSize: 'clamp(24px, 4vw, 30px)', letterSpacing: '-.02em', margin: '42px 0 16px', fontWeight: '700' }}>
                  Where AI Adds Real Value
                </h2>
                
                <p style={{ wordBreak: 'break-word', overflowWrap: 'break-word', fontSize: '17px', lineHeight: '1.8', color: 'var(--txt2)' }}>
                  AI can help teams generate visual directions, produce campaign variations, support localization, build pre-visualizations, and accelerate social content workflows. Used properly, it improves speed without reducing quality.
                </p>
                
                <h2 style={{ fontSize: 'clamp(24px, 4vw, 30px)', letterSpacing: '-.02em', margin: '42px 0 16px', fontWeight: '700' }}>
                  How IBC Studio Approaches It
                </h2>
                
                <p style={{ wordBreak: 'break-word', overflowWrap: 'break-word', fontSize: '17px', lineHeight: '1.8', color: 'var(--txt2)' }}>
                  IBC Studio combines production experience with practical AI workflows, allowing businesses to create visual assets that feel polished, brand-aware, and commercially useful. Each project is shaped around the brand objective, not the tool.
                </p>
                
                <p style={{ wordBreak: 'break-word', overflowWrap: 'break-word', color: 'var(--dim)', marginTop: '44px', fontSize: '14px', fontStyle: 'italic' }}>
                  This layout can be reused for future articles by replacing the title, category, date, cover visual, and article sections while keeping the same polished reading experience.
                </p>
              </div>
            </div>

          </article>
        </div>
      </div>
    </>
  );
}