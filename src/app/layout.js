'use client'; // Required for React context and hooks

import "./globals.css";
import dynamic from 'next/dynamic';
import { Red_Hat_Display, Work_Sans } from 'next/font/google';
import { useState, useRef, useEffect } from 'react';

// Dynamically import non-critical below-the-fold or interactive components
const ReactLenis = dynamic(
  () => import('@studio-freight/react-lenis').then((mod) => mod.ReactLenis),
  { ssr: false }
);

const Header = dynamic(() => import('@/components/Header'), {
  ssr: true,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div style={{ height: '200px', width: '100%' }} />,
});

const ChatWidget = dynamic(() => import('@/components/ChatWidget'), {
  ssr: false,
  loading: () => null,
});

const redHat = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-red-hat',
  preload: true,
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-work-sans',
  preload: true,
});

export default function RootLayout({ children }) {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [startTranslate, setStartTranslate] = useState({ x: 0, y: 0 });

  // Handle Mouse Wheel Zoom (Ctrl + Wheel)
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        setScale((prevScale) => {
          const newScale = prevScale - e.deltaY * 0.005;
          const clampedScale = Math.min(Math.max(newScale, 1), 3);
          if (clampedScale === 1) setTranslate({ x: 0, y: 0 });
          return clampedScale;
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // Handle Multi-directional Click-and-Drag Panning (Hand Cursor) when Zoomed In
  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    if (e.target.closest('button, a, input, select, textarea')) return;
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
    setStartTranslate({ x: translate.x, y: translate.y });
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging || scale <= 1) return;
    e.preventDefault();
    
    const dx = e.clientX - startPos.x;
    const dy = e.clientY - startPos.y;

    // Calculate maximum boundary limits based on current scale factor
    const maxTranslateX = (window.innerWidth * (scale - 1)) / (2 * scale);
    const maxTranslateY = (window.innerHeight * (scale - 1)) / (2 * scale);

    setTranslate({
      x: Math.min(Math.max(startTranslate.x + dx, -maxTranslateX * 1.5), maxTranslateX * 1.5),
      y: Math.min(Math.max(startTranslate.y + dy, -maxTranslateY * 1.5), maxTranslateY * 1.5)
    });
  };

  return (
    <html lang="en" className={`${redHat.variable} ${workSans.variable}`}>
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <style>{`
          body {
            cursor: ${scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'};
            overflow: hidden; /* Lock native scrolling when scaled via transform panning */
          }
          .zoom-scaled-wrapper {
            width: 100%;
            min-height: 100vh;
            transform: translate(${translate.x}px, ${translate.y}px) scale(${scale});
            transform-origin: center center;
            will-change: transform;
            backface-visibility: hidden;
          }
          body::-webkit-scrollbar {
            display: none; /* Hide scrollbars during custom 2D transform dragging */
          }
        `}</style>
      </head>
      <body
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <ReactLenis 
          root 
          options={{ 
            lerp: 0.12, 
            wheelMultiplier: 1.2, 
            smoothWheel: true, 
            syncTouch: false 
          }}
        >
          <Header />

          <div className="zoom-scaled-wrapper">
            <main>{children}</main>
            <Footer />
          </div>

          <ChatWidget />
        </ReactLenis>
      </body>
    </html>
  );
}