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
  const viewportRef = useRef(null);

  // Handle Mouse Wheel Zoom (Ctrl + Wheel) / Touch Pinch Zoom simulation
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        setScale((prevScale) => {
          const newScale = prevScale - e.deltaY * 0.005;
          return Math.min(Math.max(newScale, 1), 3); // Zoom limit between 1x and 3x
        });
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  // Handle Click-and-Drag Panning (Hand Cursor) when Zoomed In
  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    // Prevent dragging if clicking directly on interactive elements like buttons/links/header
    if (e.target.closest('header') || e.target.closest('button') || e.target.closest('a')) return;
    
    setIsDragging(true);
    setStartX(e.pageX - viewportRef.current.offsetLeft);
    setScrollLeft(viewportRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || scale <= 1) return;
    e.preventDefault();
    const x = e.pageX - viewportRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    viewportRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <html lang="en" className={`${redHat.variable} ${workSans.variable}`}>
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <style>{`
          .zoom-viewport {
            width: 100%;
            min-height: 100vh;
            overflow-x: auto;
            overflow-y: auto;
            cursor: ${scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'};
            position: relative;
          }
          .zoom-content {
            transform: scale(${scale});
            transform-origin: top left;
            transition: transform 0.1s ease-out;
            width: 100%;
          }
          /* Custom horizontal scrollbar when zoomed */
          .zoom-viewport::-webkit-scrollbar {
            height: 8px;
          }
          .zoom-viewport::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.05);
          }
          .zoom-viewport::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.25);
            border-radius: 4px;
          }
          .zoom-viewport::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 0, 0, 0.4);
          }
        `}</style>
      </head>
      <body>
        <Header />
        <div 
          ref={viewportRef}
          className="zoom-viewport"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="zoom-content">
            {/* Super-fast scroll configuration: Higher wheelMultiplier for distance, higher lerp for instant snappy response */}
            <ReactLenis 
              root 
              options={{ 
                lerp: 0.60,       
                wheelMultiplier: 9,  
                smoothWheel: true, 
                syncTouch: false 
              }}
            >
              <main>{children}</main>
              <Footer />
              <ChatWidget />
            </ReactLenis>
          </div>
        </div>
      </body>
    </html>
  );
}