'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Synchronize React state with legacy document body selectors
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  // Clean navigation drawer closure when path shifts
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const isActive = (path) => pathname === path ? 'active' : '';

  return (
    <header id="hdr" className={isOpen ? 'menu-open' : ''}>
      {/* HIGH-RES LOGO LINK PANEL */}
      <Link href="/" className="logo" onClick={closeMenu}>
        <img 
          src="/assets/images/logo/main-logo.png" 
          alt="IBC Studio Logo" 
          style={{ 
            height: '135px', 
            width: 'auto', 
            objectFit: 'contain',
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
        <Link href="/" onClick={closeMenu} className={isActive('/')} id="n-home">Home</Link>
        <Link href="/about" onClick={closeMenu} className={isActive('/about')} id="n-about">About Us</Link>
        <Link href="/clients" onClick={closeMenu} className={isActive('/clients')} id="n-clients">Our Clients</Link>
        <Link href="/services" onClick={closeMenu} className={isActive('/services')} id="n-services">Our Services</Link>
        <Link href="/work" onClick={closeMenu} className={isActive('/work')} id="n-work">Work Samples</Link>
        <Link href="/ibc-intelligence" onClick={closeMenu} className={isActive('/ibc-intelligence')} id="n-intel">IBC Intelligence</Link>
        <Link href="/blogs" onClick={closeMenu} className={isActive('/blogs')} id="n-blogs">Blogs</Link>
        <Link href="/contact" onClick={closeMenu} className={`nav-cta ${isActive('/contact')}`} id="n-contact">Contact Us</Link>
      </nav>
      <div className="nav-overlay" onClick={closeMenu}></div>
    </header>
    
  );
}
