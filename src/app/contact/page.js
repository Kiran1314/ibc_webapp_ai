'use client';
import { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const containerRef = useRef(null);
  const captchaRef = useRef(null);
  
  // Local state watcher to dynamically capture actual browser screen layout metrics
  const [windowWidth, setWindowWidth] = useState(1200);

  // --- Form State Management ---
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Set baseline view metric safely on layout mount
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Initialize fade-in scroll listener across structural layout markers
    const revealElements = containerRef.current?.querySelectorAll('.reveal');
    if (!revealElements || revealElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('resize', handleResize);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Handle reCAPTCHA execution change
  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  // --- EmailJS Form Submission Handling ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please complete the reCAPTCHA verification step.");
      return;
    }

    setIsSubmitting(true);

    const serviceId = 'service_1ab1vfl';
    const templateId = 'template_u4f1im2';
    const publicKey = 'uo5jzZ8z_im3yAOGc';

    const templateParams = {
      // Legacy template parameters (Old Form)
      from_name: `${firstName} ${lastName}`.trim(),
      from_email: email,
      to_name: 'IBC',
      subject: service ? `Enquiry for ${service}` : 'New Website General Enquiry',
      message: message,
      mobile: mobile,
      
      // Modern layout specific parameters
      first_name: firstName,
      last_name: lastName,
      company_name: companyName,
      service_interest: service,

      // Pass token inside both variants to cover older and newer verification formats
      'g-recaptcha-response': captchaToken,
      'g_recaptcha_response': captchaToken
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success("Email sent successfully!");
      
      // Reset State Fields on completion
      setFirstName('');
      setLastName('');
      setEmail('');
      setMobile('');
      setCompanyName('');
      setService('');
      setMessage('');
      setCaptchaToken(null);
      captchaRef.current?.reset();
    } catch (error) {
      console.error('Detailed EmailJS Error:', error);
      
      // Extract specific error details returned by the EmailJS server response
      const errorMessage = error?.text || error?.message || "Check browser developer tools console log.";
      toast.error(`EmailJS Error: ${errorMessage}`, { autoClose: 6000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Determine structural padding boundaries based on current breakpoint width
  const isMobile = windowWidth < 768;

  return (
    <>
      {/* INLINE JSX SEO META TAGS */}
      <title>Contact Us | IBC Studio</title>
      <meta name="description" content="Discover how AI video generation and professional photography services in Dubai are helping businesses scale faster, build credibility, and modernize marketing, training, and corporate communications." />
      <meta name="keywords" content="AI video generation in dubai,AI video generation in UAE,AI promotional videos in dubai,AI promotional videos in uae,AI powered video creation in dubai,AI powered video creation in abu dabi,AI Corporate video production in abudhabi,AI Corporate video production in dubai,AI Corporate video production in uae,AI for corporate presentations in dubai,AI video for marketing in dubai,AI generated training videos in dubai,AI for employee onboarding videos in dubai,AI video for internal communications in dubai,AI explainer videos in dubai, professional photography Dubai, industrial photography Dubai, corporate photography Dubai, commercial photographer Dubai, AI corporate video Dubai, post production studio Dubai, video production company UAE, 360 video production UAE, AR video production Dubai" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ibcstudio.com/ai-video-generation-professional-photography-dubai" />
      <meta property="og:title" content="How AI Video Generation and Professional Photography Are Transforming Dubai Businesses" />
      <meta property="og:description" content="Dubai businesses are combining AI-powered video creation with professional photography to stay competitive in marketing, training, and corporate communication." />
      <meta property="og:site_name" content="IBC Studio" />
      <meta property="og:locale" content="en_US" />

      <div className="page active" id="pg-contact" ref={containerRef}>
        <div 
          className="pw" 
          style={{ 
            width: '100%',
            paddingLeft: isMobile ? '0px' : 'clamp(38px, 6vw, 80px)',
            paddingRight: isMobile ? '0px' : 'clamp(38px, 6vw, 80px)',
            paddingBottom: '80px'
          }}
        >
          
          <div 
            className="cwrap reveal" 
            style={{ 
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: isMobile ? '36px' : '64px',
              alignItems: 'start',
              paddingTop: 'clamp(110px, 12vh, 150px)',
              width: '100%',
              paddingLeft: isMobile ? '20px' : '0px',
              paddingRight: isMobile ? '20px' : '0px'
            }}
          >
            
            {/* LEFT SIDE: CORPORATE INFO COLUMN */}
            <div className="cinfo" style={{ width: '100%' }}>
              <div className="lbl">Get In Touch</div>
              <h1 
                style={{ 
                  fontSize: 'clamp(32px, 5vw, 54px)', 
                  lineHeight: '1.1', 
                  letterSpacing: '-.03em', 
                  marginBottom: '18px',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word'
                }}
              >
                Let's Create Something Great Together.
              </h1>
              <p style={{ color: 'var(--mid)', fontSize: '16px', lineHeight: '1.75', marginBottom: '36px', wordBreak: 'break-word' }}>
                Whether you have a brief ready or just an idea, we'd love to hear from you. Our team will respond within 24 hours.
              </p>
              
              <div className="cdet">
                <div className="cion" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📍</div>
                <div className="ctxt"><h4>Location</h4><p>Dubai, United Arab Emirates</p></div>
              </div>
              <div className="cdet">
                <div className="cion" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📞</div>
                <div className="ctxt"><h4>Phone</h4><p>+971 55 291 2810</p></div>
              </div>
              <div className="cdet">
                <div className="cion" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✉️</div>
                <div className="ctxt"><h4>Email</h4><p>info@ibcstudio.com</p></div>
              </div>
              <div className="cdet">
                <div className="cion" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>💬</div>
                <div className="ctxt"><h4>WhatsApp</h4><p>+971 55 995 8905</p></div>
              </div>
              
              <div style={{ marginTop: '28px', width: '100%' }}>
                <div style={{ fontFamily: "'Red Hat Display', sans-serif", fontSize: '12px', fontWeight: '700', letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '14px' }}>
                  Working Hours
                </div>
                <div className="trow"><span className="td">Monday – Friday</span><span className="th">9:00 AM – 6:00 PM</span></div>
                <div className="trow"><span className="td">Saturday</span><span className="th">10:00 AM – 4:00 PM</span></div>
                <div className="trow"><span className="td">Sunday</span><span className="tcl">Closed</span></div>
              </div>
              
              <div style={{ marginTop: '28px' }}>
                <div style={{ fontFamily: "'Red Hat Display', sans-serif", fontSize: '12px', fontWeight: '700', letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '14px' }}>
                  Follow Us
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a className="ft-social-ico-btn" style={{ width: '40px', height: '40px', border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--dim)', cursor: 'pointer' }} title="Facebook">
                    <svg className="social-ico fb" viewBox="0 0 24 24" aria-hidden="true" style={{ width: '18px', height: '18px' }}><path fill="currentColor" d="M14 8.6V6.9c0-.8.2-1.3 1.4-1.3H17V2.3c-.8-.1-1.7-.2-2.5-.2-2.6 0-4.4 1.6-4.4 4.5v2H7.2V12h2.9v9.9H14V12h2.8l.4-3.4H14z"/></svg>
                  </a>
                  <a className="ft-social-ico-btn" style={{ width: '40px', height: '40px', border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--dim)', cursor: 'pointer' }} title="Instagram">
                    <svg className="social-ico ig" viewBox="0 0 24 24" aria-hidden="true" style={{ width: '18px', height: '18px' }}><defs><linearGradient id="igContact" x1="3" y1="21" x2="21" y2="3"><stop stopColor="#f58529"/><stop offset=".35" stopColor="#dd2a7b"/><stop offset=".7" stopColor="#8134af"/><stop offset="1" stopColor="#515bd4"/></linearGradient></defs><rect x="3" y="3" width="18" height="18" rx="5" fill="url(#igContact)"/><circle cx="12" cy="12" r="4" fill="none" stroke="#fff" strokeWidth="2"/><circle cx="17.4" cy="6.6" r="1.35" fill="#fff"/></svg>
                  </a>
                  <a className="ft-social-ico-btn" style={{ width: '40px', height: '40px', border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--dim)', cursor: 'pointer' }} title="LinkedIn">
                    <svg className="social-ico in" viewBox="0 0 24 24" aria-hidden="true" style={{ width: '18px', height: '18px' }}><path fill="currentColor" d="M6.7 8.9H3.2v11.4h3.5V8.9zM5 3.3a2 2 0 1 0 0 4.1 2 2 0 0 0 0-4.1zm15.8 10.5c0-3.1-1.7-5.2-4.4-5.2-1.7 0-2.7.9-3.1 1.7h-.1V8.9H9.9v11.4h3.5v-5.6c0-1.5.3-3 2.2-3 1.8 0 1.8 1.7 1.8 3.1v5.5h3.5v-6.5z"/></svg>
                  </a>
                  <a className="ft-social-ico-btn" style={{ width: '40px', height: '40px', border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--dim)', cursor: 'pointer' }} title="WhatsApp">
                    <svg className="social-ico wa" viewBox="0 0 24 24" aria-hidden="true" style={{ width: '18px', height: '18px' }}><path fill="currentColor" d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.4 21.9l5.2-1.2A9.7 9.7 0 1 0 12 2.2zm0 17.7c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-3 .7.7-2.9-.2-.3A8 8 0 1 1 12 19.9zm4.5-5.9c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: ENQUIRY FORM CARD */}
            <div 
              className="cform" 
              style={{ 
                borderRadius: isMobile ? '0px' : '14px',
                borderLeft: isMobile ? 'none' : '1px solid var(--border)',
                borderRight: isMobile ? 'none' : '1px solid var(--border)',
                marginLeft: isMobile ? '-20px' : '0px',
                marginRight: isMobile ? '-20px' : '0px',
                padding: isMobile ? '32px 20px' : '44px',
                width: isMobile ? 'calc(100% + 40px)' : '100%'
              }}
            >
              <h2>Send an Enquiry</h2>
              <p style={{ fontSize: '13.5px', color: 'var(--dim)', marginBottom: '28px' }}>Fill in the form and we'll be in touch within 24 hours.</p>
              
              <form onSubmit={handleSubmit}>
                <div className="frow" style={{ width: '100%', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '0px' : '14px' }}>
                  <div className="fg" style={{ width: '100%' }}>
                    <label>First Name</label>
                    <input type="text" placeholder="Your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                  </div>
                  <div className="fg" style={{ width: '100%' }}>
                    <label>Last Name</label>
                    <input type="text" placeholder="Your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                  </div>
                </div>
                
                <div className="fg">
                  <label>Email Address</label>
                  <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="fg">
                  <label>Phone / WhatsApp</label>
                  <input type="tel" placeholder="+971 55 291 2810" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                </div>
                <div className="fg">
                  <label>Company Name</label>
                  <input type="text" placeholder="Your company" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                </div>
                
                <div className="fg">
                  <label>Service of Interest</label>
                  <select style={{ color: '#fff' }} value={service} onChange={(e) => setService(e.target.value)} required>
                    <option value="" style={{ background: 'var(--bg3)' }}>Select a service...</option>
                    <option value="Audio Production" style={{ background: 'var(--bg3)' }}>Audio Production</option>
                    <option value="Video Production" style={{ background: 'var(--bg3)' }}>Video Production</option>
                    <option value="Photography" style={{ background: 'var(--bg3)' }}>Photography</option>
                    <option value="AI Production" style={{ background: 'var(--bg3)' }}>AI Production</option>
                    <option value="Digital & Development" style={{ background: 'var(--bg3)' }}>Digital & Development</option>
                    <option value="Motion Graphics / VR / AR" style={{ background: 'var(--bg3)' }}>Motion Graphics / VR / AR</option>
                    <option value="IBC Intelligence" style={{ background: 'var(--bg3)' }}>IBC Intelligence</option>
                    <option value="Multiple Services" style={{ background: 'var(--bg3)' }}>Multiple Services</option>
                    <option value="General Enquiry" style={{ background: 'var(--bg3)' }}>General Enquiry</option>
                  </select>
                </div>
                
                <div className="fg">
                  <label>Tell Us About Your Project</label>
                  <textarea rows={4} placeholder="Describe your project, goals, timeline, and any specific requirements..." value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>

                {/* reCAPTCHA Layout Box */}
                <div className="fg" style={{ marginTop: '16px', marginBottom: '20px' }}>
                  <ReCAPTCHA 
                    ref={captchaRef}
                    sitekey="6LeFuosUAAAAAMHGuHM25M14zdNbTz83ADNMG9AE" 
                    onChange={onCaptchaChange}
                    theme="dark"
                  /> 
                </div>
                
                <button className="fsub" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Enquiry →'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" theme="dark" />
    </>
  );
}