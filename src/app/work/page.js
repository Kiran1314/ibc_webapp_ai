import WorkClient from '../components/WorkClient';

export const metadata = {
  title: 'Our Portfolio | Commercial, Ad & Timelapse Showcases',
  description: 'Browse our creative work catalog featuring elite commercial production house showreels, dynamic aerial timelapse footage, and high-end brand assets.',
  keywords: 'tv commercial advertising, tv commercial production company, timelapse video in dubai, aerial timelapse production, corporate video production uae',
  openGraph: {
    type: 'website',
    url: 'https://www.ibcstudio.com/work',
    title: 'Our Portfolio | Commercial, Ad & Timelapse Showcases',
    description: 'Browse our creative work catalog featuring elite commercial production house showreels, dynamic aerial timelapse footage, and high-end brand assets.',
    siteName: 'IBC Studio',
    locale: 'en_US',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "IBC Studio",
      "image": "https://www.ibcstudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9a5f742b.png&w=640&q=75",
      "url": "https://www.ibcstudio.com/work",
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
  return <WorkClient />;
}