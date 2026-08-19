'use client';

import { useState } from 'react';

export default function FaqSection({ faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="sec reveal" style={{ width: '100%' }}>
      <div style={{ textAlign: 'center', width: '100%' }}>
        <div className="lbl lbl-c">Common Questions</div>
        <h2 className="title" style={{ wordBreak: 'break-word' }}>Frequently Asked</h2>
      </div>
      <div className="faq" style={{ width: '100%', maxWidth: '780px' }}>
        {faqs.map((faq, index) => (
          <div key={index} className="fi reveal">
            <button 
              className="fq" 
              onClick={() => toggleFaq(index)} 
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span style={{ paddingRight: '10px', wordBreak: 'break-word' }}>{faq.q}</span>
              <span className="fic">{openFaq === index ? '−' : '+'}</span>
            </button>
            <div className="fa" style={{ display: openFaq === index ? 'block' : 'none', maxHeight: openFaq === index ? '100%' : '0' }}>
              <p style={{ wordBreak: 'break-word', paddingBottom: '22px' }}>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}