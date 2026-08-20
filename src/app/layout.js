'use client'; // Required for React context and hooks

import "./globals.css";
import dynamic from 'next/dynamic';
import { Red_Hat_Display, Work_Sans } from 'next/font/google';

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
  return (
    <html lang="en" className={`${redHat.variable} ${workSans.variable}`}>
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
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
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
        </ReactLenis>
      </body>
    </html>
  );
}