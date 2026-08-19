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

    const elements = containerRef.current?.querySelectorAll('.reveal');

    if (elements?.length) {
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
          rootMargin: '0px 0px -60px 0px',
          threshold: 0.12,
        }
      );

      elements.forEach((el) => observer.observe(el));

      return () => {
        window.removeEventListener('resize', handleResize);
        elements.forEach((el) => observer.unobserve(el));
      };
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <>
      <title>
        Jingles Are Back — Why Brands Are Investing Again | IBC Studio
      </title>

      <meta
        name="description"
        content="Discover why jingles and sonic branding are making a comeback and how memorable audio identities can strengthen modern brands across Dubai and the UAE."
      />

      <meta
        name="keywords"
        content="jingles Dubai, jingle production UAE, sonic branding Dubai, audio branding UAE, brand audio identity, radio jingles Dubai, commercial audio production UAE, voiceover and audio production Dubai"
      />

      <meta
        property="og:type"
        content="article"
      />

      <meta
        property="og:url"
        content="https://www.ibcstudio.com/blogs/jingles-are-back-brands-investing"
      />

      <meta
        property="og:title"
        content="Jingles Are Back — Why Brands Are Investing Again"
      />

      <meta
        property="og:description"
        content="The surprising resurgence of brand audio identity and what it means for your marketing."
      />

      <meta property="og:site_name" content="IBC Studio" />

      <div className="page active" ref={containerRef}>
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
              <div style={wrapStyle}>
                <Link href="/blogs" className="article-back">
                  &larr; Back to Blogs
                </Link>

                <div className="article-kicker">
                  Audio &middot; Brand Identity
                </div>

                <h1 style={titleStyle}>
                  Jingles Are Back — Why Brands Are Investing Again
                </h1>

                <p className="article-standfirst">
                  The surprising resurgence of brand audio identity and
                  what it means for modern marketing.
                </p>

                <div className="article-meta" style={metaStyle}>
                  <span>Sep 2024</span>
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
              <div style={contentStyle}>

                <p style={paragraphStyle}>
                  For years, the jingle seemed like an advertising format
                  from another era. Brands moved toward visual identities,
                  digital campaigns and short-form video while memorable
                  pieces of brand audio became less prominent.
                </p>

                <p style={paragraphStyle}>
                  But audio is experiencing a quiet revival. As audiences
                  move between video, podcasts, radio, streaming platforms,
                  social media and voice-enabled experiences, brands are
                  rediscovering the power of being recognisable without
                  needing to be seen.
                </p>

                <div className="article-callout" style={calloutStyle}>
                  <p style={calloutTextStyle}>
                    "A strong visual identity helps people recognise a
                    brand. A strong sonic identity can do the same when the
                    screen is nowhere in sight."
                  </p>
                </div>

                <h2 style={headingStyle}>
                  Why Audio Creates Memory
                </h2>

                <p style={paragraphStyle}>
                  Sound can create emotional associations very quickly.
                  Melody, rhythm, voice and repetition can become connected
                  to a particular brand experience.
                </p>

                <h2 style={headingStyle}>
                  The Modern Jingle Is Different
                </h2>

                <p style={paragraphStyle}>
                  Today's brand audio does not necessarily need to be a
                  traditional thirty-second song. It might be a short sonic
                  logo, a musical signature, a distinctive voice treatment
                  or a recurring audio motif.
                </p>

                <h2 style={headingStyle}>
                  Audio Works Across Platforms
                </h2>

                <p style={paragraphStyle}>
                  A brand can use its audio identity across advertisements,
                  radio spots, videos, podcasts, social content, events,
                  telephone systems and branded experiences.
                </p>

                <h2 style={headingStyle}>
                  Jingles and Radio Advertising
                </h2>

                <p style={paragraphStyle}>
                  Radio remains an important medium for many audiences, and
                  a memorable jingle can help an advertisement stand out
                  from competing messages.
                </p>

                <h2 style={headingStyle}>
                  Sonic Branding in the UAE
                </h2>

                <p style={paragraphStyle}>
                  The UAE's multilingual and media-rich environment creates
                  interesting opportunities for audio branding. Brands can
                  develop sonic identities that work across Arabic, English
                  and other language environments.
                </p>

                <h2 style={headingStyle}>
                  Voice Is Part of Brand Identity
                </h2>

                <p style={paragraphStyle}>
                  Voiceover selection can be as important as the script.
                  Accent, tone, pace, energy and personality all influence
                  how an audience perceives a company.
                </p>

                <h2 style={headingStyle}>
                  From Jingle to Complete Audio Identity
                </h2>

                <p style={paragraphStyle}>
                  The strongest brands think beyond a single advertisement.
                  They create an audio system that can adapt to different
                  lengths, platforms and communication objectives.
                </p>

                <p style={paragraphStyle}>
                  At IBC Studio, audio production can become part of a
                  broader brand communication system, from radio spots and
                  jingles to voiceovers, IVR, on-hold messages and branded
                  audio content.
                </p>

                <h2 style={headingStyle}>
                  Why Brands Are Investing Again
                </h2>

                <p style={paragraphStyle}>
                  As digital platforms become increasingly crowded, brands
                  need more ways to become recognisable. Audio provides an
                  additional layer of identity that can operate alongside
                  visual branding rather than competing with it.
                </p>

                <p style={closingStyle}>
                  Jingles are not simply making a nostalgic comeback. They
                  are being reimagined as part of a broader sonic identity
                  designed for a world where brands communicate everywhere,
                  including places where customers may never see a screen.
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