'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function BlogPost({ params }) {
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const revealElements =
      containerRef.current?.querySelectorAll('.reveal');

    if (revealElements?.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle(
              'in-view',
              entry.isIntersecting
            );
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -60px 0px',
          threshold: 0.12,
        }
      );

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
      <title>
        Multilingual Media: Why Arabic First Matters in the UAE | IBC Studio
      </title>

      <meta
        name="description"
        content="Discover why Arabic-first media matters in the UAE and how multilingual video, audio and digital content can strengthen communication, trust and brand relevance."
      />

      <meta
        name="keywords"
        content="Arabic media UAE, Arabic video production Dubai, multilingual media UAE, Arabic corporate videos Dubai, Arabic voiceover Dubai, multilingual video production UAE, localization UAE, Arabic first marketing UAE"
      />

      <meta
        property="og:type"
        content="article"
      />

      <meta
        property="og:url"
        content="https://www.ibcstudio.com/blogs/multilingual-media-arabic-first-uae"
      />

      <meta
        property="og:title"
        content="Multilingual Media: Why Arabic First Matters in the UAE"
      />

      <meta
        property="og:description"
        content="The cultural and commercial case for leading with Arabic in your media production strategy."
      />

      <meta
        property="og:site_name"
        content="IBC Studio"
      />

      <div className="page active" id="pg-blog-post" ref={containerRef}>
        <div className="pw" style={{ width: '100%' }}>
          <article>

            <div
              className="article-hero reveal"
              style={{
                ...heroStyle,
                paddingLeft: isMobile ? '20px' : 'clamp(38px, 6vw, 80px)',
                paddingRight: isMobile ? '20px' : 'clamp(38px, 6vw, 80px)',
              }}
            >
              <div className="article-wrap" style={wrapStyle}>
                <Link href="/blogs" className="article-back">
                  &larr; Back to Blogs
                </Link>

                <div className="article-kicker">
                  Localization &middot; UAE Media
                </div>

                <h1 style={titleStyle}>
                  Multilingual Media: Why Arabic First Matters in the UAE
                </h1>

                <p className="article-standfirst">
                  The cultural and commercial case for leading with Arabic
                  in your media production strategy.
                </p>

                <div className="article-meta" style={metaStyle}>
                  <span>August 2026</span>
                  <span>7 min read</span>
                  <span>IBC Studio Editorial</span>
                </div>

                <div className="article-cover" style={coverStyle} />
              </div>
            </div>

            <div
              className="article-body reveal"
              style={{
                ...bodyStyle,
                paddingLeft: isMobile ? '20px' : 'clamp(38px, 6vw, 80px)',
                paddingRight: isMobile ? '20px' : 'clamp(38px, 6vw, 80px)',
              }}
            >
              <div className="article-content" style={contentStyle}>

                <p style={paragraphStyle}>
                  The UAE is one of the world's most culturally diverse
                  business environments. Brands communicate with Arabic
                  speakers, expatriate communities, international
                  visitors and global businesses every day.
                </p>

                <p style={paragraphStyle}>
                  In this environment, multilingual communication is not
                  simply a translation exercise. It is a strategic decision
                  about how a brand wants to be understood.
                </p>

                <div className="article-callout" style={calloutStyle}>
                  <p style={calloutTextStyle}>
                    "Localization is not about translating words. It is
                    about translating meaning, context and emotion."
                  </p>
                </div>

                <h2 style={headingStyle}>
                  Arabic Is More Than Another Language
                </h2>

                <p style={paragraphStyle}>
                  Arabic carries cultural context, emotional nuance and
                  regional identity. A campaign designed with Arabic as an
                  afterthought can feel very different from one created
                  with Arabic audiences in mind from the beginning.
                </p>

                <h2 style={headingStyle}>
                  Why Arabic-First Content Builds Trust
                </h2>

                <p style={paragraphStyle}>
                  Customers are more likely to engage with communication
                  that feels relevant to their language and cultural
                  environment. Arabic-first content can help brands
                  demonstrate respect, familiarity and local understanding.
                </p>

                <h2 style={headingStyle}>
                  Multilingual Video Production
                </h2>

                <p style={paragraphStyle}>
                  Video campaigns can be designed from the beginning to
                  support multiple languages. Scripts, subtitles,
                  voiceovers, graphics and on-screen text can all be
                  planned as part of one production workflow.
                </p>

                <p style={paragraphStyle}>
                  This approach is particularly useful for corporate
                  communications, advertising, training, hospitality,
                  government-facing communication and customer education.
                </p>

                <h2 style={headingStyle}>
                  Arabic Voiceovers Need More Than Translation
                </h2>

                <p style={paragraphStyle}>
                  A professional Arabic voiceover should match the intended
                  audience, tone and communication objective. Pronunciation,
                  pacing and delivery can significantly influence how a
                  message is perceived.
                </p>

                <h2 style={headingStyle}>
                  Designing for Both Arabic and English
                </h2>

                <p style={paragraphStyle}>
                  Strong multilingual production considers typography,
                  right-to-left layouts, subtitle positioning, screen
                  composition and timing before filming or animation begins.
                </p>

                <h2 style={headingStyle}>
                  Arabic-First Does Not Mean Arabic-Only
                </h2>

                <p style={paragraphStyle}>
                  The objective is not to exclude English or other
                  languages. Instead, Arabic-first thinking creates a
                  foundation that allows brands to communicate naturally
                  across the UAE's diverse audience.
                </p>

                <p style={paragraphStyle}>
                  At IBC Studio, multilingual media is approached as a
                  combination of production, localization and cultural
                  understanding, helping businesses create content that
                  works across audiences without losing the original brand
                  message.
                </p>

                <p style={closingStyle}>
                  In the UAE, the most effective multilingual media does not
                  simply speak more languages. It speaks to people in a way
                  that feels genuinely relevant.
                </p>

              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

const heroStyle = {
  paddingTop: 'clamp(120px, 12vh, 160px)',
  paddingBottom: '48px',
  width: '100%',
};

const wrapStyle = {
  width: '100%',
  maxWidth: '880px',
  margin: '0 auto',
};

const titleStyle = {
  fontSize: 'clamp(32px, 5vw, 66px)',
  letterSpacing: '-.04em',
  lineHeight: '1.05',
  marginBottom: '20px',
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
};

const metaStyle = {
  display: 'flex',
  gap: '14px',
  flexWrap: 'wrap',
  marginTop: '28px',
  color: 'var(--dim)',
  fontSize: '14px',
};

const coverStyle = {
  width: '100%',
  marginTop: '42px',
};

const bodyStyle = {
  paddingBottom: '86px',
  width: '100%',
};

const contentStyle = {
  width: '100%',
  maxWidth: '760px',
  margin: '0 auto',
};

const paragraphStyle = {
  fontSize: '17px',
  lineHeight: '1.8',
  color: 'var(--txt2)',
};

const headingStyle = {
  fontSize: 'clamp(24px, 4vw, 30px)',
  letterSpacing: '-.02em',
  margin: '42px 0 16px',
  fontWeight: '700',
};

const calloutStyle = {
  width: '100%',
  margin: '38px 0',
  borderLeft: '3px solid var(--sage)',
  paddingLeft: '20px',
};

const calloutTextStyle = {
  margin: 0,
  fontStyle: 'italic',
  fontSize: '18px',
  color: '#fff',
};

const closingStyle = {
  ...paragraphStyle,
  color: 'var(--dim)',
  marginTop: '44px',
  fontStyle: 'italic',
};