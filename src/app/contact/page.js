import ContactClient  from '../components/ContactClient';

export const metadata = {
  title: 'Contact Our Production Studio | Book Your Dubai Session',
  description: 'Ready to upscale your brand&apos;s digital presence? Get in touch with us to book a pro recording studio session or consult on high-end commercial video shoots.',
  keywords: 'best audio recording studio in dubai, photo studio in dubai, cheap website design dubai, commercial video production dubai, corporate video production uae, professional photography dubai, corporate photography dubai, corporate video production dubai, corporate video production abu dhabi, corporate video production sharjah, corporate video production ajman, corporate video production fujairah, corporate video production ras al khaimah, corporate video production umm al quwain',
  openGraph: {
    type: 'website',
    url: 'https://www.ibcstudio.com/contact',
    title: 'Contact Our Production Studio | Book Your Dubai Session',
    description: 'Ready to upscale your brand&apos;s digital presence? Get in touch with us to book a pro recording studio session or consult on high-end commercial video shoots.',
    siteName: 'IBC Studio',
    locale: 'en_US',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "IBC Studio",
      "image": "https://www.ibcstudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9a5f742b.png&w=640&q=75",
      "url": "https://www.ibcstudio.com/contact",
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
  return <ContactClient />;
}