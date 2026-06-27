import Link from 'next/link';
import ChatWidget from './ChatWidget';

export default function Footer() {
  return (
    <footer>
      <div className="ft-grid">
        <div className="ft-brand">
          <div className="logo" style={{ cursor: 'default',marginTop:'-100px' }}>
            <img 
              src="/assets/images/logo/main-logo.png" 
              alt="IBC Studio Logo" 
              style={{ 
                height: '300px', 
                width: 'auto', 
                objectFit: 'contain',
                display: 'block'
              }} 
            />
          </div>
          <p style={{ cursor: 'default',marginTop:'-60px' }}>Dubai-based media production house delivering audio, video, photography, AI-powered content, and digital media solutions with over 19 years of experience.</p>
          <div className="ft-social">
            <a href="https://www.facebook.com/profile.php?id=61575559854140" title="Facebook"><svg className="social-ico fb" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 8.6V6.9c0-.8.2-1.3 1.4-1.3H17V2.3c-.8-.1-1.7-.2-2.5-.2-2.6 0-4.4 1.6-4.4 4.5v2H7.2V12h2.9v9.9H14V12h2.8l.4-3.4H14z"/></svg></a>
            <a href="https://www.instagram.com/ibcstudio_uae/" title="Instagram"><svg className="social-ico ig" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="igFooter" x1="3" y1="21" x2="21" y2="3"><stop stopColor="#f58529"/><stop offset=".35" stopColor="#dd2a7b"/><stop offset=".7" stopColor="#8134af"/><stop offset="1" stopColor="#515bd4"/></linearGradient></defs><rect x="3" y="3" width="18" height="18" rx="5" fill="url(#igFooter)"/><circle cx="12" cy="12" r="4" fill="none" stroke="#fff" strokeWidth="2"/><circle cx="17.4" cy="6.6" r="1.35" fill="#fff"/></svg></a>
            <a href="https://www.linkedin.com/company/ibcstudiouae/" title="LinkedIn"><svg className="social-ico in" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.7 8.9H3.2v11.4h3.5V8.9zM5 3.3a2 2 0 1 0 0 4.1 2 2 0 0 0 0-4.1zm15.8 10.5c0-3.1-1.7-5.2-4.4-5.2-1.7 0-2.7.9-3.1 1.7h-.1V8.9H9.9v11.4h3.5v-5.6c0-1.5.3-3 2.2-3 1.8 0 1.8 1.7 1.8 3.1v5.5h3.5v-6.5z"/></svg></a>
            <a href="https://wa.me/971559958905" title="WhatsApp"><svg className="social-ico wa" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.4 21.9l5.2-1.2A9.7 9.7 0 1 0 12 2.2zm0 17.7c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-3 .7.7-2.9-.2-.3A8 8 0 1 1 12 19.9zm4.5-5.9c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z"/></svg></a>
          </div>
        </div>
        
        <div className="ft-col">
          <h4>Pages</h4>
          <Link href="/#pg-home">Home</Link>
          <Link href="/about/#pg-about">About Us</Link>
          <Link href="/clients/#pg-clients">Our Clients</Link>
          <Link href="/services/#pg-services">Our Services</Link>
          <Link href="/work/#pg-work">Work Samples</Link>
          <Link href="/ibc-intelligence#pg-intel">IBC Intelligence</Link>
          <Link href="/blogs#pg-blogs">Blogs</Link>
          <Link href="/contact#pg-contact">Contact Us</Link>
        </div>
        
       <div className="ft-col">
          <h4>Services</h4>
          <Link href="/services#audio" scroll={false}>Audio Production</Link>
          <Link href="/services#video" scroll={false}>Video Production</Link>
          <Link href="/services#photo" scroll={false}>Photography</Link>
          <Link href="/services#ai" scroll={false}>AI Production</Link>
          <Link href="/services#digital" scroll={false}>Digital & Dev</Link>
          <Link href="/services#motion" scroll={false}>Motion & VR/AR</Link>
          <Link href="/ibc-intelligence#pg-intel" scroll={false}>IBC Intelligence</Link>
        </div>
        
        <div className="ft-col">
          <h4>Contact</h4>
          <div className="ft-citem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg><span>Dubai, United Arab Emirates</span></div>
          <div className="ft-citem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg><span>+971 55 291 2810</span></div>
          <div className="ft-citem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg><span>+971 55 995 8905</span></div>
          <div className="ft-citem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><span>info@ibcstudio.com</span></div>
          <div style={{ marginTop: '14px', display: 'flex' }}>
            <Link 
              href="/contact#pg-contact" 
              className="btn-p" 
              style={{ 
                fontSize: '11px',          // Slightly lowered font height for a tighter aesthetic
                padding: '8px 14px',       // Tight, proportional padding boundaries
                width: 'max-content',      // Locks the element strictly to text dimensions
                display: 'inline-flex'     // Erases block-level expansion loops
              }}
            >
              Get In Touch →
            </Link>
          </div>
        </div>
      </div>
      <div className="ft-bottom"><p>© 2026 IBC Studio. All rights reserved. Dubai, UAE.</p><p>Privacy Policy · Terms of Service</p></div>

      {/* INTEGRATED GLOBAL ASSISSANT MODULE */}
      <ChatWidget />
    </footer>
  );
}