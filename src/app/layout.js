"use client"; // Required for React context and hooks

import "./globals.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

import { Red_Hat_Display, Work_Sans } from 'next/font/google';

const redHat = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-red-hat',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-work-sans',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${redHat.variable} ${workSans.variable}`}>
      <head>
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        {/* Lenis Provider wraps the content for global smooth scroll */}
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
        </ReactLenis>
      </body>
    </html>
  );
}