'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ChatWidget() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={`chat-panel ${isActive ? 'active' : ''}`} aria-label="IBC Studio chat panel" style={{ display: isActive ? 'block' : 'none' }}>
        <div className="chat-head">
          <div className="chat-avatar">IBC</div>
          <div><h4>IBC Studio Assistant</h4><p>Tell us what you need and we will guide you to the right team.</p></div>
        </div>
        <div className="chat-body">
          <div className="chat-msg"><p>Hello. How can we help with your project today?</p></div>
          <div className="chat-actions">
            <Link href="/services" className="chat-chip" onClick={() => setIsActive(false)}>I need production services</Link>
            <Link href="/ibc-intelligence" className="chat-chip" onClick={() => setIsActive(false)}>I want AI consultancy</Link>
            <Link href="/contact" className="chat-chip" onClick={() => setIsActive(false)}>I want to request a quote</Link>
          </div>
          <a className="btn-p chat-wa" href="https://wa.me/971559958905" target="_blank" rel="noopener noreferrer">Continue on WhatsApp →</a>
          <p className="chat-note">WhatsApp: +971 55 995 8905</p>
        </div>
      </div>
      
      <div className="chat-fab" title="Chat with us on WhatsApp" onClick={() => setIsActive(!isActive)}>
        <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
      </div>
    </>
  );
}