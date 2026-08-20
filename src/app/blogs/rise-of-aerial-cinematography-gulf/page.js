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
        The Rise of Aerial Cinematography in the Gulf | IBC Studio
      </title>

      <meta
        name="description"
        content="Discover how drone and aerial cinematography are transforming real estate, events, infrastructure and brand storytelling across Dubai and the Gulf."
      />

      <meta
        name="keywords"
        content="aerial cinematography Dubai, drone videography Dubai, aerial photography UAE, drone video production UAE, real estate drone videography Dubai, aerial filming UAE, drone cinematography Gulf"
      />

      <meta
        property="og:type"
        content="article"
      />

      <meta
        property="og:url"
        content="https://www.ibcstudio.com/blogs/rise-of-aerial-cinematography-gulf"
      />

      <meta
        property="og:title"
        content="The Rise of Aerial Cinematography in the Gulf"
      />

      <meta
        property="og:description"
        content="How drone technology is reshaping real estate, events, and infrastructure storytelling in the UAE."
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
                  Drone &middot; Cinematography
                </div>

                <h1 style={titleStyle}>
                  The Rise of Aerial Cinematography in the Gulf
                </h1>

                <p className="article-standfirst">
                  How drone technology is reshaping real estate, events,
                  infrastructure and visual storytelling across the UAE.
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
              <div style={contentStyle}>

                <p style={paragraphStyle}>
                  Few filmmaking techniques have changed visual
                  storytelling as dramatically as aerial cinematography.
                  Drone technology has made perspectives once associated
                  with helicopters and large production crews significantly
                  more accessible.
                </p>

                <p style={paragraphStyle}>
                  Across the Gulf, the technology is particularly powerful.
                  Dubai and the wider UAE offer dramatic architecture,
                  modern infrastructure, expansive developments and
                  landscapes that benefit naturally from aerial perspectives.
                </p>

                <div className="article-callout" style={calloutStyle}>
                  <p style={calloutTextStyle}>
                    "Aerial cinematography does more than show a location.
                    It changes the viewer's relationship with it."
                  </p>
                </div>

                <h2 style={headingStyle}>
                  Why Aerial Video Works
                </h2>

                <p style={paragraphStyle}>
                  An aerial camera introduces scale. Buildings, roads,
                  developments, landscapes and events can be understood as
                  part of a larger environment.
                </p>

                <h2 style={headingStyle}>
                  Real Estate Storytelling
                </h2>

                <p style={paragraphStyle}>
                  Real estate is one of the clearest applications for drone
                  cinematography. An aerial sequence can show a property's
                  surrounding community, access routes, amenities and
                  relationship to the wider city.
                </p>

                <h2 style={headingStyle}>
                  Infrastructure and Construction
                </h2>

                <p style={paragraphStyle}>
                  Construction companies can use aerial imagery to document
                  progress, communicate project scale and create visual
                  records for stakeholders.
                </p>

                <h2 style={headingStyle}>
                  Events Become More Cinematic
                </h2>

                <p style={paragraphStyle}>
                  Large outdoor events can be difficult to communicate
                  through ground-level footage alone. Aerial sequences can
                  capture crowds, venue layouts and the overall energy of
                  an event.
                </p>

                <h2 style={headingStyle}>
                  Aerial Footage Still Requires Professional Direction
                </h2>

                <p style={paragraphStyle}>
                  Owning a drone does not automatically create cinematic
                  footage. Flight planning, composition, camera movement,
                  lighting conditions, weather and post-production all
                  influence the final result.
                </p>

                <h2 style={headingStyle}>
                  Safety and Regulatory Considerations
                </h2>

                <p style={paragraphStyle}>
                  Professional aerial production must always account for
                  applicable aviation, location and operational requirements.
                  Responsible planning is essential, particularly around
                  urban environments and public spaces.
                </p>

                <h2 style={headingStyle}>
                  The Future of Aerial Storytelling
                </h2>

                <p style={paragraphStyle}>
                  As camera technology, stabilization and production
                  workflows continue to improve, aerial cinematography will
                  remain an important tool for brands looking to communicate
                  scale and place.
                </p>

                <p style={closingStyle}>
                  At IBC Studio, aerial cinematography is treated as part
                  of the story rather than a visual gimmick. The strongest
                  aerial shot is the one that gives the audience a new
                  reason to understand the subject.
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