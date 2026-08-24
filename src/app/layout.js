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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle Mouse Wheel Zoom (Ctrl + Wheel)
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        setScale((prevScale) => {
          const newScale = prevScale - e.deltaY * 0.005;
          return Math.min(Math.max(newScale, 1), 3); // Zoom between 1x and 3x
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // Handle Click-and-Drag Panning (Hand Cursor) when Zoomed In
  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    if (e.target.closest('button, a, input, select, textarea')) return;
    setIsDragging(true);
    setStartX(e.pageX - window.scrollX);
    setScrollLeft(window.scrollX);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging || scale <= 1) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 1.5;
    window.scrollTo({ left: scrollLeft - walk, behavior: 'instant' });
  };

  return (
    <html lang="en" className={`${redHat.variable} ${workSans.variable}`}>
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <style>{`
          body {
            cursor: ${scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'};
            overflow-x: ${scale > 1 ? 'auto' : 'hidden'};
          }
          .zoom-scaled-wrapper {
            width: 100%;
            transform: scale(${scale});
            transform-origin: top center;
            transition: transform 0.1s ease-out;
          }
          /* Custom horizontal scrollbar appearance on body when scaled */
          body::-webkit-scrollbar {
            height: 8px;
            width: 8px;
          }
          body::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.05);
          }
          body::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.25);
            border-radius: 4px;
          }
          body::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 0, 0, 0.4);
          }
        `}</style>
      </head>
      <body
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {/* Super-fast scroll configuration: Higher wheelMultiplier for distance, higher lerp for instant snappy response */}
        <ReactLenis 
          root 
          options={{ 
            lerp: 0.60,          // Snappier and faster follow-through (higher = faster response)
            wheelMultiplier: 9,  // ~5x multiplier for intense scroll distance per movement tick
            smoothWheel: true, 
            syncTouch: false 
          }}
        >
          {/* Header remains outside the zoom-scaled container so it stays cleanly anchored and sticky to the viewport */}
          <Header />

          {/* Scaled container wrapping page content and footer */}
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