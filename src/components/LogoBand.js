'use client';

export default function LogoBand() {
  const companies = [
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
  ];

  return (
    <div className="cband" style={{ width: '100%', overflow: 'hidden', padding: '30px 0' }}>
      <div className="chdr" style={{ padding: '0 20px 20px 20px', wordBreak: 'break-word', textAlign: 'center' }}>
        <strong>3,000+ Satisfied Clients</strong> trust IBC Studio
      </div>
      
      <div style={{ overflow: 'hidden', width: '100%', position: 'relative', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div 
          className="ctrack"
          style={{
            display: 'flex',
            width: 'max-content',
            alignItems: 'stretch',
            animation: 'smoothMarquee 210s linear infinite',
            willChange: 'transform'
          }}
        >
          {companies.concat(companies).map((company, idx) => (
            <div 
              key={idx} 
              className="clog" 
              style={{ 
                display: 'inline-flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center', 
                textAlign: 'center', 
                padding: '14px 18px', 
                margin: '0 8px',
                minWidth: '180px',
                maxWidth: '220px',
                minHeight: '75px',
                boxSizing: 'border-box',
                fontSize: '13.5px',
                fontWeight: 500,
                lineHeight: '1.35',
                color: 'var(--mid, #888)',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '10px',
                wordBreak: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              {company}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes smoothMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}