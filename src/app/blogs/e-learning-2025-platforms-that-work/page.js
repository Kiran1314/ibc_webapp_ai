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
        E-Learning in 2025: Platforms That Actually Work | IBC Studio
      </title>

      <meta
        name="description"
        content="Discover the design principles behind effective e-learning platforms, employee training content and digital learning experiences that people actually use."
      />

      <meta
        name="keywords"
        content="e-learning UAE, e-learning Dubai, corporate training videos Dubai, employee training UAE, digital learning platforms UAE, e-learning content production, online training Dubai"
      />

      <meta
        property="og:type"
        content="article"
      />

      <meta
        property="og:url"
        content="https://www.ibcstudio.com/blogs/e-learning-2025-platforms-that-work"
      />

      <meta
        property="og:title"
        content="E-Learning in 2025: Platforms That Actually Work"
      />

      <meta
        property="og:description"
        content="Design principles behind e-learning platforms that employees actually use and enjoy."
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
                  Digital &middot; Learning
                </div>

                <h1 style={titleStyle}>
                  E-Learning in 2025: Platforms That Actually Work
                </h1>

                <p className="article-standfirst">
                  Design principles behind e-learning platforms that
                  employees actually use and enjoy.
                </p>

                <div className="article-meta" style={metaStyle}>
                  <span>August 2026</span>
                  <span>8 min read</span>
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
                  An e-learning platform can contain excellent courses and
                  still fail if employees do not want to use it. Successful
                  digital learning is therefore about more than uploading
                  training material to a learning management system.
                </p>

                <p style={paragraphStyle}>
                  The experience needs to be clear, accessible, relevant
                  and engaging. Employees should understand what they need
                  to learn, why it matters and how to complete it without
                  unnecessary friction.
                </p>

                <div className="article-callout" style={calloutStyle}>
                  <p style={calloutTextStyle}>
                    "The best learning platform is not the one with the
                    most features. It is the one people actually use."
                  </p>
                </div>

                <h2 style={headingStyle}>
                  Start With the Learner
                </h2>

                <p style={paragraphStyle}>
                  Effective e-learning starts with the people taking the
                  course. Employees have different roles, experience levels
                  and learning preferences.
                </p>

                <h2 style={headingStyle}>
                  Keep Learning Modular
                </h2>

                <p style={paragraphStyle}>
                  Long training sessions can be difficult to fit into busy
                  working days. Breaking learning into focused modules can
                  make content easier to consume and revisit.
                </p>

                <h2 style={headingStyle}>
                  Video Makes Training More Human
                </h2>

                <p style={paragraphStyle}>
                  Video can demonstrate processes, introduce instructors,
                  explain difficult concepts and create a stronger sense of
                  connection than text alone.
                </p>

                <p style={paragraphStyle}>
                  Corporate training videos can combine presenters,
                  animation, screen recordings, demonstrations, graphics
                  and narration to match the subject.
                </p>

                <h2 style={headingStyle}>
                  Mobile Experience Matters
                </h2>

                <p style={paragraphStyle}>
                  Employees increasingly access digital content across
                  multiple devices. Training platforms should therefore
                  provide a consistent and usable experience on desktop,
                  tablet and mobile screens.
                </p>

                <h2 style={headingStyle}>
                  Make Progress Visible
                </h2>

                <p style={paragraphStyle}>
                  Progress indicators, module completion and clear learning
                  paths help users understand where they are and what comes
                  next.
                </p>

                <h2 style={headingStyle}>
                  Measure Learning, Not Just Completion
                </h2>

                <p style={paragraphStyle}>
                  Completing a video does not necessarily mean that someone
                  understood the subject. Effective platforms can combine
                  assessments, feedback and practical exercises with
                  learning analytics.
                </p>

                <h2 style={headingStyle}>
                  E-Learning for UAE Businesses
                </h2>

                <p style={paragraphStyle}>
                  Organisations in the UAE often operate across
                  multilingual and multicultural teams. Learning content
                  can therefore benefit from clear localization, subtitles,
                  multiple voiceovers and culturally appropriate examples.
                </p>

                <p style={paragraphStyle}>
                  At IBC Studio, digital learning content is approached as
                  a communication experience rather than simply a recorded
                  presentation.
                </p>

                <p style={closingStyle}>
                  Effective e-learning ultimately succeeds when technology
                  disappears into the background and the learner can focus
                  on the thing that matters: understanding and applying the
                  knowledge.
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