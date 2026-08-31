import IBCIntelligenceClient from '../components/IBCIntelligenceClient';

export const metadata = {
  title: 'Corporate AI Workflow Automation Tools | IBC Studio',
  description: 'We analyze your corporate processes to find workflow issues. Leverage advanced AI workflow automation tools and enterprise AI integrations to optimize ROI.',
  keywords: 'AI workflow automation tools, business process automation tools, AI operations consulting, corporate workflow optimization, corporate AI integrations, workplace automation platforms, enterprise AI agent orchestration, AI Consultancy, AI Advisory, AI Consulting, Business AI Solutions, AI Strategy, AI Implementation, AI Integration, AI Solutions, AI Transformation, Workflow Optimization, Process Automation, Business Process Optimization, Operational Efficiency, Workflow Automation, Productivity Improvement, Decision Support Systems, Knowledge Management, Knowledge Retrieval Systems, Business Intelligence, Process Improvement, Operational Intelligence, Workflow Analysis, AI Assistants, AI Chatbots, Internal Knowledge Systems, Semantic Search, Enterprise Search, Intelligent Document Retrieval, AI-Powered Analytics, Custom AI Solutions, AI Automation Systems, Generative AI Solutions, Lead Qualification Automation, Sales Process Automation, Customer Support Automation, AI Content Workflows, Marketing Automation, AI Content Generation, AI Consultancy Dubai, AI Consulting UAE, Business AI Consulting Dubai, AI Advisory Services UAE, Digital Transformation Dubai, Enterprise AI Solutions UAE, Knowledge Management Systems, Operational Efficiency Solutions, AI-Driven Decision Support, AI Integration Services, AI Implementation Dubai, AI Strategy Consulting UAE, AI Transformation Services Dubai, Workflow Optimization Tools UAE, Process Automation Solutions Dubai, Business Process Optimization UAE, Intelligent Document Retrieval Systems, AI-Powered Analytics Solutions, Custom AI Solutions Dubai, Generative AI Solutions UAE, Lead Qualification Automation Tools Dubai, Sales Process Automation UAE, Customer Support Automation Solutions Dubai, AI Content Workflows UAE, Marketing Automation Tools Dubai',
  openGraph: {
    type: 'website',
    url: 'https://www.ibcstudio.com/ibc-intelligence',
    title: 'Corporate AI Workflow Automation Tools | IBC Studio',
    description: 'We work closely with teams to understand their workflows and implement custom AI solutions that solve real business challenges and deliver measurable results.',
    siteName: 'IBC Studio',
    locale: 'en_US',
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "IBC Intelligence",
      "image": "https://www.ibcstudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9a5f742b.png&w=640&q=75",
      "url": "https://www.ibcstudio.com/ibc-intelligence",
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
  return <IBCIntelligenceClient />;
}