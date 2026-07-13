'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image'; 
import Lenis from 'lenis'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // --- Initialize Global Lenis Smooth Scrolling ---
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
        document.body.classList.remove('home-hero-top');
      } else {
        setIsScrolled(false);
        if (pathname === '/') {
          document.body.classList.add('home-hero-top');
        }
      }
    };

    if (pathname === '/' && window.scrollY <= 10) {
      document.body.classList.add('home-hero-top');
    } else {
      document.body.classList.remove('home-hero-top');
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('home-hero-top');
    };
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const isActive = (path) => pathname === path ? 'active' : '';

  return (
    <header id="hdr" className={`${isOpen ? 'menu-open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      {/* HIGH-RES LOGO LINK PANEL */}
      <Link href="/" className="logo" onClick={closeMenu}>
        <Image 
          src="/assets/images/logo/main-logo.png" 
          alt="IBC Studio Logo" 
          width={145}          
          height={100}         
          priority={true}      // Fixes the LCP warning by preloading the image
          loading="eager"      // Explicitly silences the browser console warning
          unoptimized          // Bypasses Next.js compression for maximum sharpness
          style={{
            width: '145px',    
            height: 'auto',    // Fixes the aspect ratio warning
            maxWidth: '100%',  // Prevents overflow on tiny screens
            display: 'block'
          }}
        />
      </Link>
      
      {/* RESPONSIVE MOBILE ACCORDION HAMBURGER TOGGLE */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Open navigation menu">
        <span></span>
      </button>
      
      {/* NAVIGATION SELECTIONS LAYOUT PANEL */}
      <nav className={isOpen ? 'nav-open' : ''}>
        <Link href="/#pg-home" onClick={closeMenu} className={isActive('/')} id="n-home">Home</Link>
        <Link href="/about#pg-about" onClick={closeMenu} className={isActive('/about')} id="n-about">About Us</Link>
        <Link href="/clients#pg-clients" onClick={closeMenu} className={isActive('/clients')} id="n-clients">Our Clients</Link>
        <Link href="/services#pg-services" onClick={closeMenu} className={isActive('/services')} id="n-services">Our Services</Link>
        <Link href="/work#pg-work" onClick={closeMenu} className={isActive('/work')} id="n-work">Work Samples</Link>
        <Link href="/ibc-intelligence#pg-intel" onClick={closeMenu} className={isActive('/ibc-intelligence')} id="n-intel">IBC Intelligence</Link>
        <Link href="/blogs#pg-blogs" onClick={closeMenu} className={isActive('/blogs')} id="n-blogs">Blogs</Link>
        <Link href="/contact#pg-contact" onClick={closeMenu} className={`nav-cta ${isActive('/contact')}`} id="n-contact">Contact Us</Link>
      </nav>
      <div className="nav-overlay" onClick={closeMenu}></div>
    </header>
  );
}