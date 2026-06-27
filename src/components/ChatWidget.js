'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ChatWidget() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {/* OUTSIDE CLICK DISMISSAL INTERCEPTOR OVERLAY */}
      {isActive && (
        <div 
          className="chat-overlay"
          onClick={() => setIsActive(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'transparent',
            zIndex: 99998, // Strictly underneath the chat panel box layers
            pointerEvents: 'auto' // Activates click intercept mapping
          }}
        />
      )}

      {/* CHAT INTERACTION PANEL */}
      <div 
        className={`chat-panel ${isActive ? 'active' : ''}`} 
        aria-label="IBC Studio chat panel" 
        style={{ 
          position: 'fixed',
          bottom: '90px',
          right: 'clamp(16px, 4vw, 28px)',
          zIndex: 99999, // HIGHER THAN OVERLAY: This breaks the pointer block so fields are interactive!
          maxWidth: 'min(calc(100vw - 32px), 360px)',
          visibility: isActive ? 'visible' : 'hidden',
          opacity: isActive ? '1' : '0',
          transform: isActive ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'auto' // Guarantees children receive standard bubble events
        }}
      >
        <div className="chat-head">
          <div className="chat-avatar">IBC</div>
          <div>
            <h4>IBC Studio Assistant</h4>
            <p>Tell us what you need and we will guide you to the right team.</p>
          </div>
        </div>
        <div className="chat-body" style={{ position: 'relative', zIndex: 2 }}>
          <div className="chat-msg"><p>Hello. How can we help with your project today?</p></div>
          <div className="chat-actions" style={{ position: 'relative', zIndex: 3 }}>
            <Link href="/services#pg-services" className="chat-chip" onClick={() => setIsActive(false)}>I need production services</Link>
            <Link href="/ibc-intelligence#pg-intel" className="chat-chip" onClick={() => setIsActive(false)}>I want AI consultancy</Link>
            <Link href="/contact#pg-contact" className="chat-chip" onClick={() => setIsActive(false)}>I want to request a quote</Link>
          </div>
          <a 
              className="btn-p chat-wa" 
              href="https://wa.me/971559958905" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                display: 'block', 
                textAlign: 'center', 
                width: '100%',      // Ensures the tag spans the full width
                boxSizing: 'border-box', // Ensures padding doesn't break the layout
                position: 'relative', 
                zIndex: 3 
              }}
            >
              Continue on WhatsApp →
            </a>
          <p className="chat-note">WhatsApp: +971 55 995 8905</p>
        </div>
      </div>
      
      {/* TRIGGER FLOATING ACTION BUTTON (FAB) */}
      <div 
        className="chat-fab" 
        title="Chat with us on WhatsApp" 
        onClick={() => setIsActive(!isActive)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: 'clamp(16px, 4vw, 28px)',
          zIndex: 99999, // Matches standard action triggers layer stack
          cursor: 'pointer'
        }}
      >
        <svg viewBox="0 0 24 24" style={{ width: '50%', height: '50%' }}>
          <path   d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      </div>
    </>
  );
}
