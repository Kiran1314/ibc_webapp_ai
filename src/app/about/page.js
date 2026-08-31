import AboutClient from '../components/AboutClient';

export const metadata = {
  title: 'About Our Media Studio | Dubai Pro Creators',
  description: 'Meet the team redefining creative digital media in UAE. Combining over 15 years of world-class production, technical mastery, and brand photography.',
  keywords: 'media production house uae, production companies in dubai, media production company uae',
  openGraph: {
    type: 'website',
    url: 'https://www.ibcstudio.com/about',
    title: 'About Our Media Studio | Dubai Pro Creators',
    description: 'Serving the UAE and Middle East for over 15 years with premier video, audio, photography, and digital development services.',
    siteName: 'IBC Studio',
    locale: 'en_US',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "IBC Studio",
      "image": "https://www.ibcstudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9a5f742b.png&w=640&q=75",
      "url": "https://www.ibcstudio.com/about",
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
  return <AboutClient />;
}