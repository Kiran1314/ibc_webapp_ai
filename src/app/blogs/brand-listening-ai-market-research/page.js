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
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        },
        {
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
        Brand Listening: How AI is Changing Market Research | IBC Studio
      </title>

      <meta
        name="description"
        content="Explore how AI-powered brand listening and social listening are transforming market research, customer intelligence and marketing strategy."
      />

      <meta
        name="keywords"
        content="AI market research UAE, brand listening AI, AI social listening Dubai, market research Dubai, customer intelligence UAE, social media listening UAE, AI marketing insights"
      />

      <meta
        property="og:type"
        content="article"
      />

      <meta
        property="og:url"
        content="https://www.ibcstudio.com/blogs/brand-listening-ai-market-research"
      />

      <meta
        property="og:title"
        content="Brand Listening: How AI is Changing Market Research"
      />

      <meta
        property="og:description"
        content="How real-time AI social listening is transforming how brands understand their audience."
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
              <div className="article-wrap" style={wrapStyle}>
                <Link href="/blogs" className="article-back">
                  &larr; Back to Blogs
                </Link>

                <div className="article-kicker">
                  IBC Intelligence &middot; Technology
                </div>

                <h1 style={titleStyle}>
                  Brand Listening: How AI is Changing Market Research
                </h1>

                <p className="article-standfirst">
                  How real-time AI social listening is transforming how
                  brands understand their audience.
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
              <div className="article-content" style={contentStyle}>

                <p style={paragraphStyle}>
                  Market research has traditionally relied on surveys,
                  interviews, focus groups and structured datasets. These
                  methods remain valuable, but digital audiences now
                  generate enormous amounts of public conversation every
                  day.
                </p>

                <p style={paragraphStyle}>
                  AI-powered brand listening gives businesses another way
                  to understand those conversations by identifying
                  patterns, topics, sentiment and emerging discussions at
                  a much larger scale.
                </p>

                <div className="article-callout" style={calloutStyle}>
                  <p style={calloutTextStyle}>
                    "The most useful market signal may already be happening
                    in conversations your customers are having every day."
                  </p>
                </div>

                <h2 style={headingStyle}>
                  From Periodic Research to Continuous Listening
                </h2>

                <p style={paragraphStyle}>
                  Traditional research often provides a snapshot of
                  customer opinion. Digital listening can provide a more
                  continuous view of how conversations evolve.
                </p>

                <h2 style={headingStyle}>
                  What AI Can Identify
                </h2>

                <p style={paragraphStyle}>
                  AI systems can help organise large volumes of public
                  content around themes, keywords, sentiment, recurring
                  complaints, product discussions and emerging topics.
                </p>

                <p style={paragraphStyle}>
                  Instead of manually reading thousands of individual
                  comments, marketing teams can use technology to identify
                  patterns that deserve closer human attention.
                </p>

                <h2 style={headingStyle}>
                  Understanding Sentiment
                </h2>

                <p style={paragraphStyle}>
                  Sentiment analysis can help brands understand whether
                  online discussions are broadly positive, negative or
                  mixed. More importantly, the underlying topics can reveal
                  why audiences feel a certain way.
                </p>

                <h2 style={headingStyle}>
                  Competitive Intelligence
                </h2>

                <p style={paragraphStyle}>
                  Brand listening can also extend beyond a company's own
                  name. Monitoring relevant categories and competitors can
                  help reveal market trends, positioning opportunities and
                  recurring customer expectations.
                </p>

                <h2 style={headingStyle}>
                  AI Still Needs Human Interpretation
                </h2>

                <p style={paragraphStyle}>
                  AI can identify patterns, but context matters. Sarcasm,
                  cultural references, regional language and nuanced
                  conversations can be difficult to interpret automatically.
                </p>

                <p style={paragraphStyle}>
                  The strongest workflow therefore combines automated
                  analysis with human judgement. AI finds signals; people
                  decide what those signals mean for the brand.
                </p>

                <h2 style={headingStyle}>
                  Turning Listening Into Action
                </h2>

                <p style={paragraphStyle}>
                  Market intelligence becomes valuable when it influences
                  decisions. Insights from brand listening can inform
                  content strategy, campaign messaging, product
                  positioning, customer experience and communications.
                </p>

                <p style={paragraphStyle}>
                  For brands operating in the UAE, this can be especially
                  useful when audiences are multilingual and culturally
                  diverse.
                </p>

                <h2 style={headingStyle}>
                  The Future of Brand Intelligence
                </h2>

                <p style={paragraphStyle}>
                  AI is moving market research toward a more continuous,
                  responsive model. Instead of waiting for the next formal
                  research cycle, brands can increasingly observe how
                  conversations change and respond with greater speed.
                </p>

                <p style={closingStyle}>
                  At IBC Studio, we see technology as most valuable when it
                  turns information into better creative decisions. Brand
                  listening is ultimately not about collecting more data.
                  It is about understanding people better.
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