'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Blogs() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null);

  const BLOGS_PER_PAGE = 6;

  // Trigger full structural page load fade-in on initial layout mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Synchronize dynamic header top transparency style metrics with body attributes
  useEffect(() => {
    if (window.scrollY <= 10) {
      document.body.classList.add('home-hero-top');
    } else {
      document.body.classList.remove('home-hero-top');
    }

    const handleScrollMetrics = () => {
      if (window.scrollY > 10) {
        document.body.classList.remove('home-hero-top');
      } else {
        document.body.classList.add('home-hero-top');
      }
    };

    window.addEventListener('scroll', handleScrollMetrics);

    return () => {
      window.removeEventListener('scroll', handleScrollMetrics);
      document.body.classList.remove('home-hero-top');
    };
  }, []);

  // High-Performance Intersection Observer Engine
  useEffect(() => {
    const revealElements =
      containerRef.current?.querySelectorAll('.reveal');

    if (!revealElements || revealElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [currentPage]);

  /*
   * ============================================================
   * ALL BLOG DATA
   * ============================================================
   *
   * Keep newest blogs first.
   *
   * The first 3 are displayed in the "Latest Articles" section.
   *
   * All remaining blogs are displayed in the paginated archive.
   *
   * Add future blogs at the TOP of this array.
   */

  const archiveBlogs = [
    {
      slug: 'what-makes-a-great-product-photograph',
      tag: 'Photography',
      title: 'What Makes a Great Product Photograph',
      desc: 'The technical and creative decisions that separate average shots from ones that actually sell.',
      date: 'Aug 2026',
      image: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FWhat%20Makes%20a%20Great%20Product%20Photograph.webp?alt=media&token=4a22068a-f2f9-4b3d-b690-3a0ceef846a2',
    },

    {
      slug: 'multilingual-media-arabic-first-uae',
      tag: 'Localization',
      title: 'Multilingual Media: Why Arabic First Matters in the UAE',
      desc: 'The cultural and commercial case for leading with Arabic in your media production strategy.',
      date: 'Aug 2026',
      image: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FMultilingual%20Media%20Why%20Arabic%20First%20Matters%20in%20the%20UAE.webp?alt=media&token=5b257d61-e35e-4972-83fb-c6002df284e3',
    },

    {
      slug: 'brand-listening-ai-market-research',
      tag: 'IBC Intelligence',
      title: 'Brand Listening: How AI is Changing Market Research',
      desc: 'How real-time AI social listening is transforming how brands understand their audience.',
      date: 'Aug 2026',
      image: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FBrand%20Listening%20How%20AI%20is%20Changing%20Market%20Research.webp?alt=media&token=d4fc52c9-9b50-4537-ae26-d5678260a2c2',
    },

    {
      slug: 'rise-of-aerial-cinematography-gulf',
      tag: 'Drone',
      title: 'The Rise of Aerial Cinematography in the Gulf',
      desc: 'How drone technology is reshaping real estate, events, and infrastructure storytelling in the UAE.',
      date: 'Aug 2026',
      image: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FThe%20Rise%20of%20Aerial%20Cinematography%20in%20the%20Gulf-clean.webp?alt=media&token=9afb33e6-4a3b-40bf-8b89-385bb00108ca',
    },

    {
      slug: 'e-learning-2026-platforms-that-work',
      tag: 'Digital',
      title: 'E-Learning in 2026: Platforms That Actually Work',
      desc: 'Design principles behind e-learning platforms that employees actually use and enjoy.',
      date: 'Aug 2026',
      image: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FE-Learning%20in%202026%20Platforms%20That%20Actually%20Work-clean.webp?alt=media&token=8c918a22-0dee-493c-b894-707dbcd72e2d',
    },

    {
      slug: 'jingles-are-back-brands-investing',
      tag: 'Audio',
      title: 'Jingles Are Back — Why Brands Are Investing Again',
      desc: 'The surprising resurgence of brand audio identity and what it means for your marketing.',
      date: 'Aug 2026',
      image: 'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FJingles%20Are%20Back%20%E2%80%94%20Why%20Brands%20Are%20Investing%20Again.webp?alt=media&token=279e5fcf-f00a-4e4c-8e6c-3c52c252e6ee',
    },
  ];

  /*
   * ============================================================
   * LATEST 3 ARTICLES
   * ============================================================
   */

  const latestBlogs = archiveBlogs.slice(0, 3);

  /*
   * ============================================================
   * OLDER ARTICLES
   * ============================================================
   *
   * Everything after the first 3 goes into the archive.
   */

  const olderBlogs = archiveBlogs.slice(3);

  /*
   * ============================================================
   * PAGINATION
   * ============================================================
   */

  const totalPages = Math.ceil(olderBlogs.length / BLOGS_PER_PAGE);

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;

  const currentBlogs = olderBlogs.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  /*
   * ============================================================
   * PAGE CHANGE
   * ============================================================
   */

  const handlePageChange = (page) => {
    setCurrentPage(page);

    // Scroll back to the archive section
    setTimeout(() => {
      const archiveSection =
        document.getElementById('blog-archive');

      if (archiveSection) {
        archiveSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 50);
  };

  return (
    <>
      <title>Blogs | IBC Studio</title>

      <meta
        name="description"
        content="Explore fresh industry perspectives covering premium corporate video production, commercial photography strategies, native multilingual audio setups, and practical AI workflow advisory out of Dubai, UAE."
      />

      <meta
        name="keywords"
        content="video production company UAE, AI video generation Dubai, commercial photographer Dubai, industrial photography Dubai, corporate video Dubai, post production studio Dubai, multi language media localization UAE"
      />

      <meta property="og:type" content="website" />

      <meta
        property="og:url"
        content="https://www.ibcstudio.com/blogs"
      />

      <meta
        property="og:title"
        content="The IBC Studio Blog | Insights on Media, Production & AI in Dubai"
      />

      <meta
        property="og:description"
        content="Perspectives on media, production, AI, and the future of brand storytelling across the UAE and GCC region."
      />

      <meta property="og:site_name" content="IBC Studio" />

      <div
        className="page active"
        id="pg-blogs"
        ref={containerRef}
      >
        <div
          className="pw"
          style={{
            width: '100%',
            opacity: isMounted ? 1 : 0,
            transform: isMounted
              ? 'translateY(0)'
              : 'translateY(12px)',
            transition:
              'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >

          {/* ==================================================
              TOP HEADER SECTION
          ================================================== */}

          <div
            className="sec reveal in-view"
            style={{
              paddingTop: 'clamp(120px, 12vh, 160px)',
              paddingBottom: '36px',
              width: '100%',
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)',
            }}
          >
            <div className="lbl">
              Insights & Ideas
            </div>

            <h1
              className="title"
              style={{
                fontSize: 'clamp(32px, 5vw, 50px)',
                lineHeight: '1.1',
                wordBreak: 'break-word',
              }}
            >
              The IBC Studio Blog
            </h1>

            <p
              className="desc"
              style={{
                width: '100%',
                maxWidth: '540px',
                marginBottom: 0,
                wordBreak: 'break-word',
              }}
            >
              Perspectives on media, production, AI, and the
              future of brand storytelling.
            </p>
          </div>

          {/* ==================================================
              FEATURED ARTICLES
          ================================================== */}

          <div
            className="bfeat"
            style={{
              width: '100%',
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)',
              paddingBottom: '44px',
            }}
          >

            <a
              href="/blogs/ai-video-storytelling-2026"
              className="bfcard reveal"
              style={{
                textDecoration: 'none',
                display: 'block',
                width: '100%',
              }}
            >
              <div
                className="bfthumb"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background:
                    'linear-gradient(135deg,#0d1117,#1a1a2e 55%,#16213e)',
                }}
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FHow%20AI%20Video%20is%20Redefining%20Brand%20Storytelling%20in%202025.webp?alt=media&token=9985875d-48d0-4ffa-9b21-b89dbe3a62e3"
                  alt="How AI Video is Redefining Brand Storytelling in 2026"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>

              <div className="bfbody">

                <span className="btag">
                  Featured · AI Production
                </span>

                <h2
                  style={{
                    fontSize: '22px',
                    wordBreak: 'break-word',
                    lineHeight: '1.2',
                  }}
                >
                  How AI Video is Redefining Brand Storytelling
                  in 2026
                </h2>

                <p
                  style={{
                    wordBreak: 'break-word',
                    fontSize: '14.5px',
                    color: 'var(--dim)',
                  }}
                >
                  UAE brands are leveraging AI-generated video
                  to scale content production without sacrificing
                  quality. The shift is faster than most expected.
                </p>

                <div
                  className="bmeta"
                  style={{
                    marginTop: '18px',
                    paddingTop: '18px',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  <span className="bdate">
                    Aug 2026 · 8 min read
                  </span>

                  <span className="brm">
                    Read Article →
                  </span>
                </div>

              </div>
            </a>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                width: '100%',
              }}
            >

              <a
                href="/blogs/the-power-of-cinematic-corporate-films"
                className="bfcard secondary-feat reveal"
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  width: '100%',
                }}
              >
                <div
                  className="bthumb secondary-thumb"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    background:
                      'linear-gradient(135deg,#0d1117,#1a1a2e 55%,#16213e)',
                  }}
                >
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FThe%20Power%20of%20Cinematic%20Corporate%20Films.webp?alt=media&token=a1db3cf8-cc01-4807-a3e1-d27f40cf0204"
                    alt="The Power of Cinematic Corporate Films"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div
                  className="bc"
                  style={{ padding: '20px' }}
                >
                  <span className="btag">
                    Video Production
                  </span>

                  <h3
                    style={{
                      fontSize: '16px',
                      wordBreak: 'break-word',
                    }}
                  >
                    The Power of Cinematic Corporate Films
                  </h3>

                  <div
                    className="bmeta"
                    style={{
                      marginTop: '10px',
                      paddingTop: '10px',
                      borderTop:
                        '1px solid transparent',
                    }}
                  >
                    <span className="bdate">
                       Aug 2026
                    </span>

                    <span className="brm">
                      Read →
                    </span>
                  </div>
                </div>
              </a>

              <a
                href="/blogs/why-your-ivr-voice-matters-more-than-you-think"
                className="bfcard secondary-feat reveal"
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  width: '100%',
                }}
              >
                <div
                  className="bthumb secondary-thumb"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    background:
                      'linear-gradient(135deg,#0d1117,#1a1a2e 55%,#16213e)',
                  }}
                >
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FBlogpost_thumb%2FWhy%20Your%20IVR%20Voice%20Matters%20More%20Than%20You%20Think.webp?alt=media&token=58b89f68-304a-48bd-8221-cfbdcb4091e3"
                    alt="Why Your IVR Voice Matters More Than You Think"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div
                  className="bc"
                  style={{ padding: '20px' }}
                >
                  <span className="btag">
                    Audio
                  </span>

                  <h3
                    style={{
                      fontSize: '16px',
                      wordBreak: 'break-word',
                    }}
                  >
                    Why Your IVR Voice Matters More Than You
                    Think
                  </h3>

                  <div
                    className="bmeta"
                    style={{
                      marginTop: '10px',
                      paddingTop: '10px',
                      borderTop:
                        '1px solid transparent',
                    }}
                  >
                    <span className="bdate">
                      Aug 2026
                    </span>

                    <span className="brm">
                      Read →
                    </span>
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* ==================================================
              LATEST ARTICLES
          ================================================== */}

          <div
            className="reveal"
            style={{
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)',
              marginBottom: '18px',
            }}
          >
            <div
              style={{
                fontSize: '11.5px',
                fontWeight: '600',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: 'var(--dim)',
                borderBottom:
                  '1px solid var(--border)',
                paddingBottom: '14px',
              }}
            >
              Latest Articles
            </div>
          </div>

          {/* ==================================================
              LATEST 3 BLOGS
          ================================================== */}

          <div
            className="bgrid"
            style={{
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)',
              paddingBottom: '60px',
              gap: '22px',
            }}
          >
            {latestBlogs.map((post) => (
              <a
                href={`/blogs/${post.slug}`}
                key={post.slug}
                className="bcard reveal"
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  width: '100%',
                }}
              >

                <div
                  className="bthumb"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    background:
                      'linear-gradient(135deg,#111,#1a1a2e 55%,#161e2e)',
                  }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div className="bc">

                  <span className="btag">
                    {post.tag}
                  </span>

                  <h3
                    style={{
                      wordBreak: 'break-word',
                      fontSize: '16px',
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    style={{
                      wordBreak: 'break-word',
                      fontSize: '13px',
                      color: 'var(--dim)',
                    }}
                  >
                    {post.desc}
                  </p>

                  <div className="bmeta">

                    <span className="bdate">
                      {post.date}
                    </span>

                    <span className="brm">
                      Read →
                    </span>

                  </div>

                </div>
              </a>
            ))}
          </div>

          {/* ==================================================
              OLDER ARTICLES / PAGINATED ARCHIVE
          ================================================== */}

          <div
            id="blog-archive"
            className="reveal"
            style={{
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)',
              marginBottom: '18px',
              scrollMarginTop: '100px',
            }}
          >
            <div
              style={{
                fontSize: '11.5px',
                fontWeight: '600',
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                color: 'var(--dim)',
                borderBottom:
                  '1px solid var(--border)',
                paddingBottom: '14px',
              }}
            >
              All Articles
            </div>
          </div>

          {/* ==================================================
              PAGINATED BLOG GRID
          ================================================== */}

          <div
            className="bgrid"
            style={{
              paddingBottom: '45px',
              paddingLeft: 'clamp(22px, 6vw, 80px)',
              paddingRight: 'clamp(22px, 6vw, 80px)',
              gap: '22px',
            }}
          >

            {currentBlogs.map((post) => (
              <a
                href={`/blogs/${post.slug}`}
                key={post.slug}
                className="bcard reveal"
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  width: '100%',
                }}
              >

                <div
                  className="bthumb"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    background:
                      'linear-gradient(135deg,#111,#1a1a2e 55%,#161e2e)',
                  }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <div className="bc">

                  <span className="btag">
                    {post.tag}
                  </span>

                  <h3
                    style={{
                      wordBreak: 'break-word',
                      fontSize: '16px',
                    }}
                  >
                    {post.title}
                  </h3>

                  <p
                    style={{
                      wordBreak: 'break-word',
                      fontSize: '13px',
                      color: 'var(--dim)',
                    }}
                  >
                    {post.desc}
                  </p>

                  <div className="bmeta">

                    <span className="bdate">
                      {post.date}
                    </span>

                    <span className="brm">
                      Read →
                    </span>

                  </div>

                </div>
              </a>
            ))}

          </div>

          {/* ==================================================
              PAGINATION
          ================================================== */}

          {totalPages > 1 && (
            <div
              className="reveal"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                paddingBottom: '80px',
                paddingLeft: '22px',
                paddingRight: '22px',
                flexWrap: 'wrap',
              }}
            >

              {/* PREVIOUS */}

              <button
                type="button"
                onClick={() =>
                  handlePageChange(
                    Math.max(1, currentPage - 1)
                  )
                }
                disabled={currentPage === 1}
                aria-label="Previous page"
                style={{
                  minWidth: '42px',
                  height: '42px',
                  padding: '0 14px',
                  border:
                    '1px solid var(--border)',
                  background:
                    currentPage === 1
                      ? 'transparent'
                      : 'var(--card)',
                  color:
                    currentPage === 1
                      ? 'var(--dim)'
                      : 'inherit',
                  borderRadius: '8px',
                  cursor:
                    currentPage === 1
                      ? 'not-allowed'
                      : 'pointer',
                  transition:
                    'all 0.25s ease',
                }}
              >
                ←
              </button>

              {/* PAGE NUMBERS */}

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  type="button"
                  key={page}
                  onClick={() =>
                    handlePageChange(page)
                  }
                  aria-label={`Go to page ${page}`}
                  aria-current={
                    currentPage === page
                      ? 'page'
                      : undefined
                  }
                  style={{
                    width: '42px',
                    height: '42px',
                    border:
                      currentPage === page
                        ? '1px solid currentColor'
                        : '1px solid var(--border)',
                    background:
                      currentPage === page
                        ? 'var(--card)'
                        : 'transparent',
                    color:
                      currentPage === page
                        ? 'inherit'
                        : 'var(--dim)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight:
                      currentPage === page
                        ? '600'
                        : '400',
                    transition:
                      'all 0.25s ease',
                  }}
                >
                  {page}
                </button>
              ))}

              {/* NEXT */}

              <button
                type="button"
                onClick={() =>
                  handlePageChange(
                    Math.min(
                      totalPages,
                      currentPage + 1
                    )
                  )
                }
                disabled={
                  currentPage === totalPages
                }
                aria-label="Next page"
                style={{
                  minWidth: '42px',
                  height: '42px',
                  padding: '0 14px',
                  border:
                    '1px solid var(--border)',
                  background:
                    currentPage === totalPages
                      ? 'transparent'
                      : 'var(--card)',
                  color:
                    currentPage === totalPages
                      ? 'var(--dim)'
                      : 'inherit',
                  borderRadius: '8px',
                  cursor:
                    currentPage === totalPages
                      ? 'not-allowed'
                      : 'pointer',
                  transition:
                    'all 0.25s ease',
                }}
              >
                →
              </button>

            </div>
          )}

        </div>
      </div>
    </>
  );
}