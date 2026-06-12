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
            zIndex: 99998, // Sits exactly 1 tier below the active chat dialog panel
            cursor: 'default'
          }}
        />
      )}

      {/* CHAT INTERACTION PANEL - TRANSLATES VIA CLASS TOGGLE */}
      <div 
        className={`chat-panel ${isActive ? 'active' : ''}`} 
        aria-label="IBC Studio chat panel" 
        style={{ 
          position: 'fixed',
          bottom: '90px',
          right: 'clamp(16px, 4vw, 28px)',
          zIndex: 99999, // Safely anchors above footer layout dimensions on all devices
          maxWidth: 'min(calc(100vw - 32px), 360px)', // Prevents clipping on narrow phone displays
          // Overrides stylesheet defaults dynamically to force visual state paint safely
          visibility: isActive ? 'visible' : 'hidden',
          opacity: isActive ? '1' : '0',
          transform: isActive ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="chat-head">
          <div className="chat-avatar">IBC</div>
          <div>
            <h4>IBC Studio Assistant</h4>
            <p>Tell us what you need and we will guide you to the right team.</p>
          </div>
        </div>
        <div className="chat-body">
          <div className="chat-msg"><p>Hello. How can we help with your project today?</p></div>
          <div className="chat-actions">
            <Link href="/services" className="chat-chip" onClick={() => setIsActive(false)}>I need production services</Link>
            <Link href="/ibc-intelligence" className="chat-chip" onClick={() => setIsActive(false)}>I want AI consultancy</Link>
            <Link href="/contact" className="chat-chip" onClick={() => setIsActive(false)}>I want to request a quote</Link>
          </div>
          <a className="btn-p chat-wa" href="https://wa.me/971559958905" target="_blank" rel="noopener noreferrer">
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
          zIndex: 99999,
          cursor: 'pointer'
        }}
      >
        <svg viewBox="0 0 24 24" style={{ width: '65%', height: '100%' }}>
          <path fill="currentColor" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      </div>
    </>
  );
}