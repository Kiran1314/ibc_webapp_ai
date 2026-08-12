'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const SLIDER_IMAGES = [
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_1.webp?alt=media&token=b69d5885-1cfc-4e7c-9ede-8e88e78c392e",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_2.webp?alt=media&token=99168ff8-43ab-442a-af3f-0bab436baea4",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_3.webp?alt=media&token=0f93c1c7-a732-4fcf-b5e6-d3eb87fd5605",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_4.webp?alt=media&token=c0fd58e1-ce38-414c-aa24-e7ed23a895e1",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_5.webp?alt=media&token=46b06470-576b-4b63-b376-e73321532bd6",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_6.webp?alt=media&token=8994c640-153e-4325-8766-90f15aa47a30",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_7.webp?alt=media&token=04a356d9-2752-43b7-b07f-d13817ba7b9c",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_8.webp?alt=media&token=d5ab1265-a11d-459f-8406-86fac2bf0486",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_9.webp?alt=media&token=115b7eda-6b66-4e49-9085-21d71c72834c",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_10.webp?alt=media&token=666437fd-a5b4-45d9-bf65-65d55cc29e84",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_11.webp?alt=media&token=d7a0cfab-665b-4443-b375-90489724eb34",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_12.webp?alt=media&token=b95ea1c0-78b4-4081-84d3-f8db59783383",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_13.webp?alt=media&token=4926c252-9504-4ac4-aab4-adc5671d2a34",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_14.webp?alt=media&token=793e3d2b-db6d-4864-9906-f67c72d45f34",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_15.webp?alt=media&token=c2a46137-1eb2-471a-8b91-ee172e56f5fa",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_16.jpg?alt=media&token=7ec35f78-64ba-40a7-be63-e4c57c5c4555",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_17.webp?alt=media&token=da651a68-8d70-417d-8529-260662c6d91c",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_18.webp?alt=media&token=0102f0b5-6d49-40ec-8713-76bd26c39d8e",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_19.webp?alt=media&token=1d164d0b-8318-4177-8eee-fc76f91ee036",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_20.webp?alt=media&token=7926b731-0cd1-4450-8ac9-a75bedcc69aa",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_21.webp?alt=media&token=12c04d32-fe66-4e4c-ba72-15242a40e3b4",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_22.webp?alt=media&token=7aa0d9d5-95b0-464a-8092-86b3dd2a5b0e",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_23.webp?alt=media&token=4a469108-1268-42c3-a2cd-93c610044e98",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_24.webp?alt=media&token=3508172c-be9a-44ab-960a-693999e83cdc",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_25.webp?alt=media&token=5e525a14-f771-4653-a6f3-3d49779d7df3",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_26.webp?alt=media&token=8e0dac27-cd4a-4423-8f21-3d1fa9585bb6",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_27.webp?alt=media&token=8331e6e0-ab65-4d26-9305-4fd10aa81dcb",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_28.jpg?alt=media&token=be54386b-2886-453f-a9d4-b055dc2afabb",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_29.webp?alt=media&token=59436439-0714-4728-aa61-2b41efc69e84",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_30.webp?alt=media&token=abba9927-70fa-42cc-8748-834aeea75abc",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_31.webp?alt=media&token=520e2b0a-f8ab-42e8-9f42-3258c73c19c3",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_32.webp?alt=media&token=56d49585-1067-4b2e-aab0-df39e0ea0f59",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_33.webp?alt=media&token=c4e948be-8037-4878-938b-eef0430459fc",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_34.webp?alt=media&token=c0ca558a-21a4-4e80-9906-59cdf75e7415",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_35.webp?alt=media&token=f844d573-55b0-440e-8083-7d04ea615b1b",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_36.webp?alt=media&token=a707ac55-95dc-4fbb-9a1c-1c0270896cab",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_37.webp?alt=media&token=bad44435-b594-4848-8656-9e846bd53e94",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_38.webp?alt=media&token=a3e46165-238a-4f69-a557-4471fd276cdd",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_39.webp?alt=media&token=82b03478-954b-4e1e-a3e8-feb5ac23b2ed",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_40.webp?alt=media&token=35f9856b-c6d6-4dcd-af55-b76c78972f0e",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_41.webp?alt=media&token=98d4295c-5f94-44d1-a571-a0995cfa0b29",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_42.webp?alt=media&token=bea01fc4-3d47-47c6-9510-6320bee4b422",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_43.webp?alt=media&token=ffb0febf-55d3-4044-a060-a8eec6359ab9",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_44.webp?alt=media&token=4ea9d9ba-87da-4fc2-866e-cc862a86df79",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_45.webp?alt=media&token=4eb31681-3e48-492b-9c9e-9f21dcfd3565",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_46.webp?alt=media&token=262dea4a-415e-4dc1-b501-df431efe412d",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_47.webp?alt=media&token=61500016-1d31-4b07-90f2-896674e7c13e",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_48.webp?alt=media&token=1be01437-27ae-4747-8ed5-6630a25da8a1",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_49.webp?alt=media&token=1ebe7182-1558-425a-a29f-9897df6e9c92",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_50.webp?alt=media&token=342dd2e1-2b47-4567-8b95-7cef21ee5fe3",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_51.webp?alt=media&token=f447b8f4-48a8-4e05-888d-0cca2ca99cbd",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_52.webp?alt=media&token=fecfcef8-57ee-41fb-a5bd-4fc41b42c1c7",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_53.webp?alt=media&token=14e9a9f4-fa20-4c56-93dc-a31abc57a2c7",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_54.webp?alt=media&token=516c06a3-8b5e-482c-86b3-24f7bcd68a59",
  "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FHomepage_Slider%2FHP_55.webp?alt=media&token=63e87b4e-7b79-4fb1-9435-5002264d8bac"
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const containerRef = useRef(null);

  // Slider States
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeVid, setActiveVid] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  
  const vidTotal = 3; 
  const cardTotal = 3; 

  // Group images into rows of 3
  const slides = useMemo(() => {
    const s = [];
    for (let i = 0; i < SLIDER_IMAGES.length; i += 3) {
      s.push(SLIDER_IMAGES.slice(i, i + 3));
    }
    return s;
  }, []);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  // Auto-switch slider every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Auto-scroll Timer for Videos
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVid((prev) => (prev + 1) % vidTotal);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Auto-scroll Timer for Text Cards
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cardTotal);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Scroll handling and Observers
  useEffect(() => {
    if (window.location.hash === '#pg-home') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    const handleScrollMetrics = () => {
      if (window.scrollY > 10) document.body.classList.remove('home-hero-top');
      else document.body.classList.add('home-hero-top');
    };
    if (window.scrollY <= 10) document.body.classList.add('home-hero-top');
    window.addEventListener('scroll', handleScrollMetrics);

    const revealElements = containerRef.current?.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Only trigger fade-in when scrolling down into view; do not remove class when scrolling up
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Unobserve once animated so it stays in view permanently
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.05 });
    
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScrollMetrics);
      document.body.classList.remove('home-hero-top');
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const faqs = [
    { q: "What types of clients does IBC Studio work with?", a: "We work with brands, corporations, SMEs, and government entities across the UAE and wider GCC." },
    { q: "Do you offer multilingual production services?", a: "Absolutely. We offer voice-overs, dubbing, and localization in Arabic, English, Hindi, Urdu, French, and more." },
    { q: "How long does a typical video production project take?", a: "A standard corporate video typically takes 2–4 weeks from briefing to delivery." },
    { q: "What is IBC Intelligence?", a: "IBC Intelligence is the AI-powered consultancy and insights division of IBC Studio." },
    { q: "How do I get a quote for my project?", a: "Reach out via our Contact page or WhatsApp for a free consultation." }
  ];

  return (
    <>
      <title>IBC Studio - Leading Media Production Dubai</title>
      <meta name="description" content="Discover how AI video generation and professional photography services in Dubai are helping businesses scale faster, build credibility, and modernize marketing, training, and corporate communications." />
      <meta name="keywords" content="AI video generation in dubai,AI video generation in UAE,AI promotional videos in dubai,AI promotional videos in uae,AI powered video creation in dubai,AI powered video creation in abu dabi,AI Corporate video production in abudhabi,AI Corporate video production in dubai,AI Corporate video production in uae,AI for corporate presentations in dubai,AI video for marketing in dubai,AI generated training videos in dubai,AI for employee onboarding videos in dubai,AI video for internal communications in dubai,AI explainer videos in dubai, professional photography Dubai, industrial photography Dubai, corporate photography Dubai, commercial photographer Dubai, AI corporate video Dubai, post production studio Dubai, video production company UAE, 360 video production UAE, AR video production Dubai" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ibcstudio.com/ai-video-generation-professional-photography-dubai" />
      <meta property="og:title" content="IBC Studio - Leading Media Production Dubai" />
      <meta property="og:description" content="Dubai businesses are combining AI-powered video creation with professional photography to stay competitive in marketing, training, and corporate communication." />
      <meta property="og:site_name" content="IBC Studio" />
      <meta property="og:locale" content="en_US" />

      <style>{`
        @keyframes pageSmoothLoad {
          0% { 
            opacity: 0; 
            transform: translate3d(0, 15px, 0); 
          }
          100% { 
            opacity: 1; 
            transform: translate3d(0, 0, 0); 
          }
        }
        .optimized-hero-load {
          width: 100%;
          opacity: 0;
          animation: pageSmoothLoad 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: opacity, transform;
        }
      `}</style>

      <div className="page active" id="pg-home" ref={containerRef}>
        <div className="pw optimized-hero-load">
          
          {/* HERO SECTION */}
          <section className="hero reveal in-view">
              <div className="hero-gradient-scene" aria-hidden="true"></div>
              <div className="hero-wave-field" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>
              <div className="hero-grain" aria-hidden="true"></div>
              <div className="hvignette" aria-hidden="true"></div>

              <div className="hcontent" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
                
                <div className="heb animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  UAE's Leading Media Production House
                </div>

                <h1 className="htag animate-fade-in" style={{ fontSize: 'clamp(32px, 8vw, 90px)', width: '100%', lineHeight: '1.0', animationDelay: '0.3s' }}>
                  <span className="l1" style={{ display: 'block' }}>WHERE IDEAS</span>
                  <span className="l2" style={{ display: 'block' }}>BECOME</span>
                  <span className="l3" style={{ display: 'block', color: 'var(--sage)' }}>UNFORGETTABLE.</span>
                </h1>

                <p className="hsub animate-fade-in" style={{ width: '100%', animationDelay: '0.6s' }}>
                  Welcome to IBC Studio. We are a full-service media production and digital solutions company creating powerful visual experiences, meaningful brand stories, and impactful content that leaves a lasting impression.
                </p>

                <div className="hact animate-fade-in" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', width: '100%', animationDelay: '0.9s' }}>
                  <Link href="/services" className="btn-p" style={{ display: 'inline-flex', minWidth: '160px', justifyContent: 'center' }}>
                    Explore Our Services →
                  </Link>
                  <Link href="/work" className="btn-o" style={{ display: 'inline-flex', minWidth: '160px', justifyContent: 'center' }}>
                    View Our Work
                  </Link>
                </div>
              </div>
          </section>

          {/* LOGO BAND */}
          <div className="cband reveal" style={{ width: '100%' }}>
            <div className="chdr" style={{ padding: '0 20px', wordBreak: 'break-word' }}>
              <strong>3,000+ Satisfied Clients</strong> trust IBC Studio
            </div>
            <div style={{ overflow: 'hidden', width: '100%' }}>
              <div 
                className="ctrack"
                style={{
                  animationDuration: '200s', 
                  animationTimingFunction: 'linear',
                  animationIterationCount: 'infinite'
                }}
              >
                {[
                  'AECB', 'Abu Dhabi International Airport', 'ADNOC', 'Agnice', 'Ahmed Saddiqi', 'Ahmed Tea', 'Air Arabia', 
                    'Al Ain Holdings', 'Al Fahim', 'Al Futtaim Group', 'Al Jazeera Investment', 'Al Khaleej Steel', 
                    'Al Madallah', 'Al Masraf', 'Al Reyami Advocates', 'American Gulf School – Sharjah', 'ARADA', 
                    'Arab Link', 'ARENCO', 'Asma Hotel', 'Bank Muscat', 'Barraquer Eye Hospital', 'BITS Pilani Dubai', 
                    'Canadian Hospital', 'Carlton Hospital', 'Carrefour', 'Citi Bank', 'Commercial Bank of Dubai', 
                    'CTS Roadside Assistance', 'CTS-KHADA', 'Damac Properties', 'Dana Beach Resort', 'Dana Bay', 
                    'Data Direct', 'Department of Health Abu Dhabi', 'Desert Gate', 'DEWA', 'DIFC', 'DP World', 
                    'Dubai Airports', 'Dubai Frame', 'Dubai Investment Park', 'Dubai Investment Real Estate', 
                    'Dubai Land Department', 'Dubai Mall', 'Dubai Metro', 'Dubai Tourism', 'Du Telecom', 
                    'Earnest Insurance', 'Easy Lease', 'Emaar', 'Emirates Driving Company', 'Emirates NBD', 
                    'Emitech', 'Enova International', 'ENOC', 'Etihad Airways', 'Etisalat Afghanistan', 
                    'Etisalat / e&', 'Excellence Driving Institute', 'FAB Bank', 'Finance House', 'Flydubai', 
                    'Fujairah Customs', 'Fujairah National Group', 'G42', 'Galadari', 'Galadari Driving', 
                    'Geco Mechanical & Electrical', 'GEMS Education', 'Gems Metropole', 'Gems Millennium School', 
                    'Gems World Academy', 'Gewan Hotels & Resorts', 'GFS Ship Management', 'Green Motor', 
                    'Hily Holding', 'Hilton Business Bay', 'Hilton Hotel', 'IKEA', 'Injazat', 'Infosat', 
                    'Infosys', 'Insurance House', 'International Community Schools', 
                    'International Gas Services (Sergas)', 'JAFZA', 'Kalba Health Center (EHS)', 'Lexus', 
                    'Liberty Computer', 'Liwa Insurance', 'Majid Al Futtaim', 'Marks & Spencer', 'Mashreq Bank', 
                    'Masdar City', 'Medcare', 'Meraas', 'Mercure Hotel', 'Ministry of Community Development', 
                    'Ministry of Human Resources and Emiratisation', 'Ministry of Labour', 'Mubadala', 'Nakheel', 
                    'National Finance', 'Next Care (Enaya)', 'Noor Takaful', 'Occidental Hotels and Resorts', 
                    'Omantel', 'Omnisat', 'Omtrack', 'Pan Home', 'Prime Medical Center', 'Progress Group', 
                    'Reem Hospital', 'Reem Neuroscience Centre', 'RTA Dubai', 'SAIF Zone', 'Sautt Technology', 
                    'Scientechnic (Fujairah Port)', 'Scitra', 'Sharjah Islamic Bank', 'Sharjah Women\'s Club', 
                    'Siemcom Hassantuk', 'Skoda', 'SPC Free Zone', 'Swissôtel Al Ghurair', 'TAQA Energy', 'TCT', 
                    'TDRA', 'Tecom Group', 'Telematics', 'Teleperformance', 
                    'The Executive Office of Her Highness Sheikha Jawaher, Sharjah', 'The Westminster School, Dubai', 
                    'Tokio Marine Insurance', 'Toyota', 'Unitech', 'Vision Tech', 'VocalCom', 'WASL Properties', 
                    'Xiaomi', 'Zajel', 'Zulekha Hospital'
                ].map((company, idx) => (
                  <div key={`orig-${idx}`} className="clog" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 28px', whiteSpace: 'nowrap', width: 'auto', boxSizing: 'border-box' }}>{company}</div>
                ))}
                {[
                  'AECB', 'Abu Dhabi International Airport', 'ADNOC', 'Agnice', 'Ahmed Saddiqi', 'Ahmed Tea', 'Air Arabia', 
                    'Al Ain Holdings', 'Al Fahim', 'Al Futtaim Group', 'Al Jazeera Investment', 'Al Khaleej Steel', 
                    'Al Madallah', 'Al Masraf', 'Al Reyami Advocates', 'American Gulf School – Sharjah', 'ARADA', 
                    'Arab Link', 'ARENCO', 'Asma Hotel', 'Bank Muscat', 'Barraquer Eye Hospital', 'BITS Pilani Dubai', 
                    'Canadian Hospital', 'Carlton Hospital', 'Carrefour', 'Citi Bank', 'Commercial Bank of Dubai', 
                    'CTS Roadside Assistance', 'CTS-KHADA', 'Damac Properties', 'Dana Beach Resort', 'Dana Bay', 
                    'Data Direct', 'Department of Health Abu Dhabi', 'Desert Gate', 'DEWA', 'DIFC', 'DP World', 
                    'Dubai Airports', 'Dubai Frame', 'Dubai Investment Park', 'Dubai Investment Real Estate', 
                    'Dubai Land Department', 'Dubai Mall', 'Dubai Metro', 'Dubai Tourism', 'Du Telecom', 
                    'Earnest Insurance', 'Easy Lease', 'Emaar', 'Emirates Driving Company', 'Emirates NBD', 
                    'Emitech', 'Enova International', 'ENOC', 'Etihad Airways', 'Etisalat Afghanistan', 
                    'Etisalat / e&', 'Excellence Driving Institute', 'FAB Bank', 'Finance House', 'Flydubai', 
                    'Fujairah Customs', 'Fujairah National Group', 'G42', 'Galadari', 'Galadari Driving', 
                    'Geco Mechanical & Electrical', 'GEMS Education', 'Gems Metropole', 'Gems Millennium School', 
                    'Gems World Academy', 'Gewan Hotels & Resorts', 'GFS Ship Management', 'Green Motor', 
                    'Hily Holding', 'Hilton Business Bay', 'Hilton Hotel', 'IKEA', 'Injazat', 'Infosat', 
                    'Infosys', 'Insurance House', 'International Community Schools', 
                    'International Gas Services (Sergas)', 'JAFZA', 'Kalba Health Center (EHS)', 'Lexus', 
                    'Liberty Computer', 'Liwa Insurance', 'Majid Al Futtaim', 'Marks & Spencer', 'Mashreq Bank', 
                    'Masdar City', 'Medcare', 'Meraas', 'Mercure Hotel', 'Ministry of Community Development', 
                    'Ministry of Human Resources and Emiratisation', 'Ministry of Labour', 'Mubadala', 'Nakheel', 
                    'National Finance', 'Next Care (Enaya)', 'Noor Takaful', 'Occidental Hotels and Resorts', 
                    'Omantel', 'Omnisat', 'Omtrack', 'Pan Home', 'Prime Medical Center', 'Progress Group', 
                    'Reem Hospital', 'Reem Neuroscience Centre', 'RTA Dubai', 'SAIF Zone', 'Sautt Technology', 
                    'Scientechnic (Fujairah Port)', 'Scitra', 'Sharjah Islamic Bank', 'Sharjah Women\'s Club', 
                    'Siemcom Hassantuk', 'Skoda', 'SPC Free Zone', 'Swissôtel Al Ghurair', 'TAQA Energy', 'TCT', 
                    'TDRA', 'Tecom Group', 'Telematics', 'Teleperformance', 
                    'The Executive Office of Her Highness Sheikha Jawaher, Sharjah', 'The Westminster School, Dubai', 
                    'Tokio Marine Insurance', 'Toyota', 'Unitech', 'Vision Tech', 'VocalCom', 'WASL Properties', 
                    'Xiaomi', 'Zajel', 'Zulekha Hospital'
                ].map((company, idx) => (
                  <div key={`dup-${idx}`} className="clog" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 28px', whiteSpace: 'nowrap', width: 'auto', boxSizing: 'border-box' }}>{company}</div>
                ))}
              </div>
            </div>
          </div>

          {/* TESTIMONIALS */}
          <section className="sec reveal" style={{ width: '100%' }}>
            <div className="lbl">Client Testimonials</div>
            <h2 className="title" style={{ wordBreak: 'break-word' }}>Voices of Trust</h2>
            <p className="desc" style={{ width: '100%', wordBreak: 'break-word' }}>
              Real results, real relationships. Hear directly from the brands who've partnered with us.
            </p>
               
            <div style={{ width: '100%', paddingTop: '20px' }}>
              
              {/* IMAGE SLIDER SECTION */}
              <section className="sec reveal" style={{ width: '100%', padding: '60px 0' }}>
                <div className="slider-wrapper" style={{ height: '300px', position: 'relative', width: '100%', margin: '0 auto' }}>
                  
                  <div style={{ display: 'none' }} aria-hidden="true">
                    {SLIDER_IMAGES.map((url, idx) => (
                      <img key={idx} src={url} alt="" />
                    ))}
                  </div>

                  <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                    {slides.map((slideGroup, slideIndex) => {
                      const isActive = slideIndex === activeSlide;
                      const nextIndex = (activeSlide + 1) % slides.length;
                      const isNext = slideIndex === nextIndex;

                      if (!isActive && !isNext) return null;

                      return (
                        <motion.div 
                          key={slideIndex}
                          initial={false}
                          animate={{ 
                            opacity: isActive ? 1 : 0,
                            pointerEvents: isActive ? 'auto' : 'none'
                          }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          style={{ 
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(3, 1fr)', 
                            gap: '15px'
                          }}
                        >
                          {slideGroup.map((imgUrl, i) => (
                            <div key={i} style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
                              <Image 
                                src={imgUrl} 
                                alt={`Slide ${i}`} 
                                fill 
                                style={{ objectFit: 'cover' }} 
                                unoptimized 
                                priority={isActive || isNext}
                              />
                            </div>
                          ))}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Testimonials Card Section Container Wrapper */}
              <div className="slider-wrapper" style={{ marginTop: '20px' }}>
                <div className="tgrid">
                   {/* Card item 4 */}
                  <div className="tcard reveal">
                    <p className="tquote">
                      "Overall great, smooth, professional & interesting experience.
                       I enjoyed the whole process. It&apos;s a pleasure to work with IBC Studio. I am looking forward to
                       working with you on your upcoming projects. Thank you IBC Studio."
                    </p>
                    <div className="tauthor">
                      <div className="tav">DS</div>
                      <div>
                        <div className="tan">Dina Samy</div>
                        <div className="tat"> </div>
                      </div>
                    </div>
                  </div>

                  {/* Card item 5 */}
                  <div className="tcard reveal">
                    <p className="tquote">
                      "Worked with them in 2 projects so far and I really appreciate their professionalism and honesty.
                       Looking forward to the new projects we will work on together!" 
                    </p><br/>
                    <div className="tauthor">
                      <div className="tav">LA</div>
                      <div>
                        <div className="tan">Lilly Ally</div>
                        <div className="tat"> </div>
                      </div>
                    </div>
                  </div>

                  {/* Card item 6 */}
                  <div className="tcard reveal">
                    <p className="tquote">
                      "I recently had the pleasure of working 
                      with IBC Studio on a timelapse video project, and I couldn't be more impressed! 
                      The team demonstrated exceptional professionalism and creativity from start to finish."
                    </p>
                    <div className="tauthor">
                      <div className="tav">KK</div>
                      <div>
                        <div className="tan">Kishan Krishnan</div>
                        <div className="tat"> </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <div className="divl"></div>

          {/* ABOUT SPLIT SECTION */}
          <section className="sec reveal" style={{ width: '100%' }}>
            <div className="split-grid" style={{ width: '100%' }}>
              <div className="reveal">
                <div className="lbl">About IBC Studio</div>
                <h2 className="title" style={{ wordBreak: 'break-word' }}>The UAE’s Destination for Creative Media & Digital Production</h2>
                <p style={{ fontSize: '16.5px', color: 'var(--mid)', lineHeight: '1.75', marginBottom: '14px', wordBreak: 'break-word' }}>IBC Studio is a Dubai-based media production and digital solutions company with over 19 years of industry experience.</p>
                <p style={{ fontSize: '16.5px', color: 'var(--mid)', lineHeight: '1.75', marginBottom: '26px', wordBreak: 'break-word' }}>We specialize in audio, video, photography, IVR, OHM, event coverage, AI-powered content, and digital media solutions, helping businesses create professional, engaging, and impactful content tailored for modern audiences across the UAE and Middle East.</p>
                <Link href="/about#pg-about" className="btn-o">Learn Our Story →</Link>
              </div>
              <div className="mini-stat-grid" style={{ width: '100%' }}>
                <div className="sitem reveal"><span className="snum">19<span className="a">+</span></span><span className="slbl">Years Experience</span></div>
                <div className="sitem reveal" style={{ borderRight: 'none' }}><span className="snum">1K<span className="a">+</span></span><span className="slbl">Video & Photo Projects</span></div>
                <div className="sitem reveal" style={{ borderTop: '1px solid var(--border)' }}><span className="snum">3K<span className="a">+</span></span><span className="slbl">Audio Projects</span></div>
                <div className="sitem reveal" style={{ borderRight: 'none', borderTop: '1px solid var(--border)' }}><span className="snum">3K<span className="a">+</span></span><span className="slbl">Satisfied Clients</span></div>
              </div>
            </div>
          </section>

          <div className="divl"></div>

          {/* SERVICES GRID */}
          <section className="sec reveal" style={{ width: '100%' }}>
            <div className="lbl">What We Do</div>
            <h2 className="title" style={{ wordBreak: 'break-word' }}>Our Core Services</h2>
            <p className="desc" style={{ width: '100%', wordBreak: 'break-word' }}>Complete media solutions designed to help businesses create professional, impactful, and meaningful content across every platform.</p>
            <div className="srv-grid" style={{ width: '100%' }}>
              <Link href="/services#audio" className="srv-card reveal" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="srv-ic"><svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></div>
                <h3>Audio Production</h3><p style={{ wordBreak: 'break-word' }}>IVR, on-hold messaging, multilingual voice-overs, jingles, dubbing and localization services.</p>
                <div className="srv-arr">Explore Service →</div>
              </Link>
              <Link href="/services#video" className="srv-card reveal" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="srv-ic"><svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3"/></svg></div>
                <h3>Video Production</h3><p style={{ wordBreak: 'break-word' }}>Corporate films, commercials, drone, 360°/VR/AR, editing, and color grading.</p>
                <div className="srv-arr">Explore Service →</div>
              </Link>
              <Link href="/services#photo" className="srv-card reveal" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="srv-ic"><svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg></div>
                <h3>Photography</h3><p style={{ wordBreak: 'break-word' }}>Product, real estate, industrial, corporate and event photography.</p>
                <div className="srv-arr">Explore Service →</div>
              </Link>
              <Link href="/services#ai" className="srv-card reveal" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="srv-ic"><svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg></div>
                <h3>AI Production</h3><p style={{ wordBreak: 'break-word' }}>AI video, AI photography, synthetic media, creative direction, and workflow-aware production systems.</p>
                <div className="srv-arr">Explore Service →</div>
              </Link>
              <Link href="/services#digital" className="srv-card reveal" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="srv-ic"><svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
                <h3>Digital & Development</h3><p style={{ wordBreak: 'break-word' }}>Web design, e-learning platforms, interactive media and custom digital tools.</p>
                <div className="srv-arr">Explore Service →</div>
              </Link>
              <Link href="/ibc-intelligence#pg-intel" className="srv-card reveal" style={{ textDecoration: 'none', display: 'block' }}>
                <div> <div className="srv-ic">
                  <div className="logo" style={{ cursor: 'default' }} >
                    <img src="/assets/images/logo/intel2.webp" alt="IBC Studio Logo" style={{ height: '50px', width: 'auto', objectFit: 'contain', display: 'block' }} />
                  </div></div>
                </div>
                <h3>IBC Intelligence</h3><p style={{ wordBreak: 'break-word' }}>Operator-led AI advisory helping teams find and build practical workflow systems that improve productivity, speed, and decision support.</p>
                <div className="srv-arr">Explore Service →</div>
              </Link>
            </div>
          </section>

          {/* INTEL STRIP BANNER */}
          <section className="sec-sm reveal" style={{ width: '100%' }}>
            <div className="intel-strip" style={{ width: '100%' }}>
              
              {/* Text Side */}
              <div className="reveal">
                <div className="lbl">IBC Intelligence</div>
                <h2 style={{ wordBreak: 'break-word' }}>Business-first AI advisory for real workflows.</h2>
                <p style={{ wordBreak: 'break-word' }}>IBC Intelligence helps businesses identify where AI creates measurable operational leverage...</p>
                
                <div style={{ marginTop: '22px' }}>
                  <Link href="/ibc-intelligence#pg-intel" className="btn-p">
                    Book a Consultancy →
                  </Link>
                </div>
              </div>

              {/* Logo Side */}
              <div className="reveal logo-container">
                <div className="logo" style={{ cursor: 'default' }}>
                  <img 
                    src="/assets/images/logo/intel3.webp" 
                    alt="IBC Studio Logo" 
                    style={{ 
                      width: 'clamp(110px, 15vw, 200px)', 
                      height: 'clamp(110px, 15vw, 200px)', 
                      objectFit: 'contain',
                      display: 'block'
                    }} 
                  />
                </div>
              </div>

            </div>
          </section>

          <div className="divl"></div>

          {/* PROCESS TIMELINE */}
          <section className="sec reveal" style={{ background: 'var(--bg2)', width: '100%' }}>
            <div style={{ textAlign: 'center', width: '100%' }}>
              <div className="lbl lbl-c" style={{ justifyContent: 'center' }}>How We Work</div>
              <h2 
                className="title" 
                style={{ 
                  wordBreak: 'break-word', 
                  textAlign: 'center', 
                  margin: '0 auto 18px' 
                }}
              >
                Our 4-Step Process
              </h2>
              <p className="desc desc-c" style={{ width: '100%', wordBreak: 'break-word' }}>
                From your first idea to final delivery, a streamlined and collaborative approach focused on clarity and results.
              </p>
            </div>
            
            <div className="proc" style={{ width: '100%' }}>
              <div className="pstep reveal"><div className="pnum"><span>01</span></div><h3>Initial Consultation</h3><p style={{ wordBreak: 'break-word' }}>We listen, understand your goals, audience and vision before a single frame is captured.</p></div>
              <div className="pstep reveal"><div className="pnum"><span>02</span></div><h3>Proposal & Agreement</h3><p style={{ wordBreak: 'break-word' }}>A detailed proposal and agreement outlining scope, timeline, and pricing tailored to your needs.</p></div>
              <div className="pstep reveal"><div className="pnum"><span>03</span></div><h3>Production Phase</h3><p style={{ wordBreak: 'break-word' }}>Our team manages scripting, shooting, and editing with regular updates throughout production.</p></div>
              <div className="pstep reveal"><div className="pnum"><span>04</span></div><h3>Delivery & Review</h3><p style={{ wordBreak: 'break-word' }}>Final delivery in your required formats, with a revision process until you're 100% satisfied.</p></div>
            </div>
          </section>

          <div className="divl"></div>

          {/* BLOG FEEDS */}
          <section className="sec reveal" style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '14px', width: '100%' }}>
              <div>
                <div className="lbl">Latest Insights</div>
                <h2 className="title" style={{ marginBottom: 0, wordBreak: 'break-word' }}>From Our Blog</h2>
              </div>
              <Link href="/blogs" className="btn-o">View All Articles →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" style={{ width: '100%', paddingTop: '30px' }}>
              <Link href="/blogs/ai-video-storytelling-2025" className="bcard reveal" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="bthumb" style={{ background: 'linear-gradient(135deg,#111,#1a1a2e 55%,#161e2e)' }}></div>
                <div className="bc" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <span className="btag">AI Production</span>
                    <h3 style={{ wordBreak: 'break-word' }}>How AI Video is Redefining Brand Storytelling in 2025</h3>
                    <p style={{ wordBreak: 'break-word' }}>How UAE brands are leveraging AI-generated video to scale content without sacrificing quality.</p>
                  </div>
                  <div className="bmeta"><span className="bdate">May 2025</span><span className="brm">Read More →</span></div>
                </div>
              </Link>

              <Link href="/blogs/power-of-cinematic-corporate-films" className="bcard reveal" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="bthumb" style={{ background: 'linear-gradient(135deg,#111,#1a1a2e 55%,#161e2e)' }}></div>
                <div className="bc" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <span className="btag">Video Production</span>
                    <h3 style={{ wordBreak: 'break-word' }}>The Power of Cinematic Corporate Films: Why They Work</h3>
                    <p style={{ wordBreak: 'break-word' }}>How a well-crafted corporate film builds credibility, trust and emotional connection.</p>
                  </div>
                  <div className="bmeta"><span className="bdate">Apr 2025</span><span className="brm">Read More →</span></div>
                </div>
              </Link>

              <Link href="/blogs/why-your-ivr-voice-matters" className="bcard reveal" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="bthumb" style={{ background: 'linear-gradient(135deg,#111,#1a1a2e 55%,#161e2e)' }}></div>
                <div className="bc" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <span className="btag">Audio</span>
                    <h3 style={{ wordBreak: 'break-word' }}>Why Your IVR Voice Matters More Than You Think</h3>
                    <p style={{ wordBreak: 'break-word' }}>The first voice a customer hears shapes their entire experience with your brand.</p>
                  </div>
                  <div className="bmeta"><span className="bdate">Mar 2025</span><span className="brm">Read More →</span></div>
                </div>
              </Link>
            </div>
          </section>

          {/* FREQUENTLY ASKED QUESTIONS */}
          <section className="sec reveal" style={{ width: '100%' }}>
            <div style={{ textAlign: 'center', width: '100%' }}>
              <div className="lbl lbl-c">Common Questions</div>
              <h2 className="title" style={{ wordBreak: 'break-word' }}>Frequently Asked</h2>
            </div>
            <div className="faq" style={{ width: '100%', maxWidth: '780px' }}>
              {faqs.map((faq, index) => (
                <div key={index} className="fi reveal">
                  <button className="fq" onClick={() => toggleFaq(index)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
        </div>
      </div>
    </>
  );
}