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
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const startTranslate = useRef({ x: 0, y: 0 });
  
  const initialPinchDistance = useRef(null);
  const initialScale = useRef(1);

  // Handle Desktop Mouse Wheel Zoom (Ctrl + Wheel) only. Normal scroll works completely unrestricted.
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        setScale((prevScale) => {
          const newScale = prevScale - e.deltaY * 0.005;
          return Math.min(Math.max(newScale, 1), 4); // Zoom range between 1x and 4x
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // Handle Pinch Zoom for Touch Devices (Mobile / Tablets)
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (e.touches.length === 2) {
        initialPinchDistance.current = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        initialScale.current = scale;
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 2 && initialPinchDistance.current !== null) {
        e.preventDefault();
        const currentDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const factor = currentDistance / initialPinchDistance.current;
        const newScale = Math.min(Math.max(initialScale.current * factor, 1), 4);
        setScale(newScale);
      }
    };

    const handleTouchEnd = (e) => {
      if (e.touches.length < 2) {
        initialPinchDistance.current = null;
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scale]);

  // Reset offset translation automatically if scaled back down to 1x
  useEffect(() => {
    if (scale === 1) {
      setTranslate({ x: 0, y: 0 });
    }
  }, [scale]);

  // High-performance direct translation drag listeners when zoomed in
  useEffect(() => {
    const handleMouseDown = (e) => {
      if (scale <= 1) return;
      if (e.target.closest('button, a, input, select, textarea')) return;
      isDragging.current = true;
      startPos.current = { x: e.clientX, y: e.clientY };
      startTranslate.current = { ...translate };
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current || scale <= 1) return;
      e.preventDefault();
      const dx = e.clientX - startPos.current.x;
      const dy = e.clientY - startPos.current.y;
      setTranslate({
        x: startTranslate.current.x + dx,
        y: startTranslate.current.y + dy
      });
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleTouchStart = (e) => {
      if (scale <= 1 || e.touches.length !== 1) return;
      if (e.target.closest('button, a, input, select, textarea')) return;
      isDragging.current = true;
      startPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      startTranslate.current = { ...translate };
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current || scale <= 1 || e.touches.length !== 1) return;
      e.preventDefault();
      const dx = e.touches[0].clientX - startPos.current.x;
      const dy = e.touches[0].clientY - startPos.current.y;
      setTranslate({
        x: startTranslate.current.x + dx,
        y: startTranslate.current.y + dy
      });
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [scale, translate]);

  const content = (
    <>
      <Header />
      <div className="zoom-scaled-wrapper" style={{
        transform: `translate3d(${translate.x}px, ${translate.y}px, 0) scale(${scale})`,
        transformOrigin: 'top left',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        transition: isDragging.current ? 'none' : 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)',
        width: '100%',
        minHeight: '100vh'
      }}>
        <main>{children}</main>
        <Footer />
      </div>
      <ChatWidget />
    </>
  );

  return (
    <html lang="en" className={`${redHat.variable} ${workSans.variable}`}>
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <style>{`
          html, body {
            overflow-x: auto !important;
            overflow-y: auto !important;
            height: auto !important;
            min-height: 100%;
          }
          body {
            cursor: ${scale > 1 ? (isDragging.current ? 'grabbing' : 'grab') : 'default'};
            user-select: ${scale > 1 ? 'none' : 'auto'};
          }
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
      <body>
        <ReactLenis 
          root={scale === 1}
          options={{ 
            lerp: 0.12, 
            wheelMultiplier: 1.2, 
            smoothWheel: true, 
            syncTouch: false 
          }}
        >
          {content}
        </ReactLenis>
      </body>
    </html>
  );
}