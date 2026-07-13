import "./globals.css"; // Keep basic Next structural resets if any
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

 // Import Google Fonts directly through Next.js
import { Red_Hat_Display, Work_Sans } from 'next/font/google';

// Configure the fonts (this self-hosts them at build time)
const redHat = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-red-hat', // Creates a CSS variable you can use in your stylesheets
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-work-sans',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${redHat.variable} ${workSans.variable}`}>
      <head>
         
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
