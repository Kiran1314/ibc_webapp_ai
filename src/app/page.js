import HomeClient from './components/HomeClient';

export const metadata = {
  title: 'Audio-Video Production House Dubai | IBC Studio',
  description: 'Discover the best audio-video production house in Dubai. We offer top-notch digital media creation, professional audio recording, and production services.',
  keywords: [
    'AI video generation in dubai', 'AI video generation in UAE', 'AI promotional videos in dubai', 
    'AI promotional videos in uae', 'AI powered video creation in dubai', 'AI powered video creation in abu dabi', 
    'AI Corporate video production in abudhabi', 'AI Corporate video production in dubai', 'AI Corporate video production in uae', 
    'AI for corporate presentations in dubai', 'AI video for marketing in dubai', 'AI generated training videos in dubai', 
    'AI for employee onboarding videos in dubai', 'AI video for internal communications in dubai', 'AI explainer videos in dubai', 
    'audio video company in dubai', 'studio voice recorder', 'jingles signature tunes in dubai', 'professional recording', 
    'sound studio', 'ivr recording', 'music studio', 'commercial photography service', 'photography industrial', 
    'manufacturing photography', 'photo industrial', 'commercial property photography', 'corporate photography services', 
    'industrial portraits', 'commercial portrait', 'professional photographer studio', 'commercial portrait photography', 
    'commercial photo studio', 'hotel photographer dubai', '360 photography services in dubai', 'commercial food photography dubai', 
    'company photographer', 'business portraits dubai', 'corporate photo studio', 'editorial photographer dubai', 
    'photography services dubai', 'commercial photography', 'tv commercial advertising', 'television commercial production company', 
    'aerial video and photography', 'videography', 'production studio', 'Best Corporate Video Production in Dubai', 
    'videography in sharjah', 'product video makers in dubai', 'event video dubai', '3d video production in dubai', 
    'television commercial production companies', 'tv commercial production house', 'tv ad production company', 
    'video editing services dubai', 'tv production agency dubai', 'production services in dubai', 'production services company', 
    'media production services dubai', 'corporate video production agency in dubai', 'corporate video company in dubai', 
    'best video production company in dubai', 'animation video company uae', 'servicing production house', 'best production company in dubai', 
    'tv commercial production company', '3d animation video dubai', 'infographic dubai', 'media production house uae', 
    'media production company uae', 'video production companies in abu dhabi', 'voice over agency dubai', 'timelapse video in dubai', 
    'aerial time lapse', 'aerial services dubai', 'augmented reality dubai', 'studio 360 dubai', 'dubai360', 'production houses in uae', 
    'animation studios in dubai', 'video production company abu dhabi', 'production companies in dubai', 'production house in dubai', 
    'media production company', 'media production company in dubai', 'corporate video in dubai', 'production studios in dubai', 
    'corporate video production company in dubai', 'post production studio in dubai', 'event video production services', 
    'video production in dubai', 'animation studio in dubai', 'tv production companies in dubai', 'media production houses in dubai', 
    'production company dubai', 'production house', 'production houses in dubai', 'videography studio', 'tv commercial production', 
    'television commercial advertising', 'tv commercials production', 'augmented reality production', 'home studio video equipment', 
    'time lapse video company', 'media production studio', 'aerial video services', 'timelapse videography', 'post production company in dubai', 
    'multi media companies', 'motion graphic in dubai', 'Photo Studio in Dubai', 'Best Recording Studio in UAE', 'Media Production Studio UAE', 
    'television commercial advertising', 'hotel photographer dubai', 'tv commercial advertising', 'Audio-Video Production House Dubai', 
    'ivr recording', 'ivr recording uae', 'top media production houses in dubai', 'professional photography', 'professional photographer', 
    'voice over recording', 'voice Recording', 'voice over dubai', 'voice record studio', 'wedding photography', 'voice recording', 
    'video studiodubai', 'video production company uae', 'recording studio', 'videographer dubai', 'audio recording', 
    'audio recording studio', 'video production company dubai', 'digital printing', 'product photography', 'video shoot', 
    'audio recording studio', 'Audio recording studios', 'Audio & video production companies', 'web developing', 'web designing', 
    'post production dubai', 'corporate video production dubai', 'event photographer', 'event photography', 'event photography in dubai', 
    'nearby recording studios', 'dubai recording studio', 'Professional photography', 'good recording studio', 'sound record studio', 
    'designing', 'industrial photography', 'photography studio', 'products photography', 'photo studio in dubai', 'photo studio near me', 
    'photograph', 'dubai photography', 'uae photography', 'lifestyle photography', 'modeling photography', 'video shooting', 
    'timelapse', 'photography company in dubai', 'commercial', 'cheap website design dubai', '4k video', 'video services', 
    'post production', 'ibcdubai', 'corporate video', 'commercial video production', 'studios in dubai', 'studios in uae', 
    'dubbing', 'ivr recording dubai', 'telephone hold', 'telephone hold message', 'sound record studio', 'audio recorder', 
    'signature tunes', 'radio spot', 'audio video company in dubai', 'production house in dubai', 'media production company in dubai', 'best production company in dubai'
  ],
  openGraph: {
    type: 'website',  
    url: 'https://www.ibcstudio.com/',  
    title: 'Audio-Video Production House Dubai | IBC Studio',  
    description: 'Discover the best audio-video production house in Dubai. We offer top-notch digital media creation, professional audio recording, and production services',
    siteName: 'IBC Studio',  
    locale: 'en_US',  
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "IBC Studio",
      "image": "https://www.ibcstudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9a5f742b.png&w=640&q=75",
      "url": "https://www.ibcstudio.com",
      "telephone": "+971552912810",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "IBN Batuta Gate Office, P.O. Box: 120472, Dubai, UAE",
        "addressLocality": "Dubai",
        "postalCode": "25314",
        "addressCountry": "AE"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      },
      "sameAs": [
         "https://www.facebook.com/profile.php?id=61575559854140",
         "https://www.instagram.com/ibcstudio_uae/",
         "https://www.linkedin.com/company/ibcstudiouae/",
         "https://www.youtube.com/@ibcstudiome" 
      ]
    })
  }
};

export default function Page() {
  return <HomeClient />;
}