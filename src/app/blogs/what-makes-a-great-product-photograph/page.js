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

    if (revealElements && revealElements.length > 0) {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.12,
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
      <title>
        What Makes a Great Product Photograph? | IBC Studio
      </title>

      <meta
        name="description"
        content="Discover what makes a great product photograph, from lighting and composition to styling, consistency and commercial storytelling for brands in Dubai and the UAE."
      />

      <meta
        name="keywords"
        content="product photography Dubai, product photographer Dubai, product photography UAE, commercial photography Dubai, product photo studio Dubai, eCommerce product photography UAE, professional product photography"
      />

      <meta
        property="og:type"
        content="article"
      />

      <meta
        property="og:url"
        content="https://www.ibcstudio.com/blogs/what-makes-a-great-product-photograph"
      />

      <meta
        property="og:title"
        content="What Makes a Great Product Photograph?"
      />

      <meta
        property="og:description"
        content="The technical and creative decisions that separate average product photographs from images that actually sell."
      />

      <meta
        property="og:site_name"
        content="IBC Studio"
      />

      <div
        className="page active"
        id="pg-blog-post"
        ref={containerRef}
      >
        <div className="pw" style={{ width: '100%' }}>
          <article>

            <div
              className="article-hero reveal"
              style={{
                paddingTop: 'clamp(120px, 12vh, 160px)',
                paddingBottom: '48px',
                paddingLeft: isMobile
                  ? '20px'
                  : 'clamp(38px, 6vw, 80px)',
                paddingRight: isMobile
                  ? '20px'
                  : 'clamp(38px, 6vw, 80px)',
                width: '100%',
              }}
            >
              <div
                className="article-wrap"
                style={{
                  width: '100%',
                  maxWidth: '880px',
                  margin: '0 auto',
                }}
              >
                <Link
                  href="/blogs"
                  className="article-back"
                  style={{ textDecoration: 'none' }}
                >
                  &larr; Back to Blogs
                </Link>

                <div
                  className="article-kicker"
                  style={{ marginTop: '18px' }}
                >
                  Photography &middot; IBC Studio Insights
                </div>

                <h1
                  style={{
                    fontSize: 'clamp(32px, 5vw, 66px)',
                    letterSpacing: '-.04em',
                    lineHeight: '1.05',
                    marginBottom: '20px',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                  }}
                >
                  What Makes a Great Product Photograph?
                </h1>

                <p
                  className="article-standfirst"
                  style={{
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                  }}
                >
                  The technical and creative decisions that separate
                  average product photographs from images that actually
                  capture attention, communicate value and help sell.
                </p>

                <div
                  className="article-meta"
                  style={{
                    display: 'flex',
                    gap: '14px',
                    flexWrap: 'wrap',
                    marginTop: '28px',
                    color: 'var(--dim)',
                    fontSize: '14px',
                  }}
                >
                  <span>Feb 2025</span>
                  <span>7 min read</span>
                  <span>IBC Studio Editorial</span>
                </div>

                <div
                  className="article-cover"
                  style={{
                    width: '100%',
                    marginTop: '42px',
                  }}
                />
              </div>
            </div>

            <div
              className="article-body reveal"
              style={{
                paddingLeft: isMobile
                  ? '20px'
                  : 'clamp(38px, 6vw, 80px)',
                paddingRight: isMobile
                  ? '20px'
                  : 'clamp(38px, 6vw, 80px)',
                paddingBottom: '86px',
                width: '100%',
              }}
            >
              <div
                className="article-content"
                style={{
                  width: '100%',
                  maxWidth: '760px',
                  margin: '0 auto',
                }}
              >

                <p style={paragraphStyle}>
                  A product photograph is often the first interaction a
                  customer has with a product. Before they read the
                  specifications, compare prices or contact a sales team,
                  they see the image. That makes product photography much
                  more than simply documenting what something looks like.
                  It is a visual sales tool.
                </p>

                <p style={paragraphStyle}>
                  For brands operating in competitive markets such as
                  Dubai and the wider UAE, professional product photography
                  can make the difference between an ordinary product
                  listing and a presentation that immediately communicates
                  quality, confidence and value.
                </p>

                <div className="article-callout" style={calloutStyle}>
                  <p style={calloutTextStyle}>
                    "Great product photography does not simply show a
                    product. It communicates why the product deserves
                    attention."
                  </p>
                </div>

                <h2 style={headingStyle}>
                  Lighting Is the Foundation
                </h2>

                <p style={paragraphStyle}>
                  Lighting determines how a product feels. Soft lighting
                  can create an elegant and premium appearance, while
                  controlled directional lighting can emphasise texture,
                  shape and material.
                </p>

                <p style={paragraphStyle}>
                  Professional photographers carefully control highlights,
                  shadows and reflections, particularly when photographing
                  glass, metal, jewellery, electronics and glossy packaging.
                </p>

                <h2 style={headingStyle}>
                  Composition Creates Visual Hierarchy
                </h2>

                <p style={paragraphStyle}>
                  A strong product photograph immediately tells the viewer
                  where to look. Composition, negative space, scale and
                  perspective all influence how quickly the product can be
                  understood.
                </p>

                <p style={paragraphStyle}>
                  For eCommerce brands, this becomes especially important.
                  Product images need to remain clear when displayed on
                  everything from a large desktop screen to a small mobile
                  shopping interface.
                </p>

                <h2 style={headingStyle}>
                  Styling Adds Context and Personality
                </h2>

                <p style={paragraphStyle}>
                  A clean white-background image may be essential for an
                  online catalogue, but lifestyle photography can tell a
                  completely different story.
                </p>

                <p style={paragraphStyle}>
                  A food product can be photographed in a dining setting.
                  A cosmetic product can be placed within a premium beauty
                  environment. Furniture can be shown inside a carefully
                  styled interior.
                </p>

                <h2 style={headingStyle}>
                  Consistency Builds Brand Recognition
                </h2>

                <p style={paragraphStyle}>
                  A single beautiful photograph is useful. A consistent
                  photography system is even more valuable.
                </p>

                <p style={paragraphStyle}>
                  Consistent lighting, framing, backgrounds, colour
                  treatment and styling allow customers to recognise a
                  brand across websites, marketplaces, catalogues,
                  advertisements and social media.
                </p>

                <h2 style={headingStyle}>
                  Product Photography Should Support the Business
                </h2>

                <p style={paragraphStyle}>
                  The best product photography begins with a commercial
                  objective. Is the goal to increase online conversions,
                  launch a new product, strengthen a premium brand
                  identity, support a catalogue or create social content?
                </p>

                <p style={paragraphStyle}>
                  At IBC Studio, photography is approached as part of a
                  larger communication strategy. From product photography
                  in Dubai to commercial visual content for UAE brands,
                  every image should have a reason to exist.
                </p>

                <h2 style={headingStyle}>
                  The Final Image Is Where Technical Skill Meets Storytelling
                </h2>

                <p style={paragraphStyle}>
                  Camera equipment matters, but equipment alone does not
                  create an effective product photograph. Lighting,
                  composition, styling, retouching and commercial
                  understanding work together to transform a simple object
                  into a compelling visual message.
                </p>

                <p style={closingStyle}>
                  A great product photograph is therefore not merely a
                  technically perfect image. It is an image that makes the
                  product easier to understand, more desirable and more
                  memorable.
                </p>

              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

const paragraphStyle = {
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
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
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
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