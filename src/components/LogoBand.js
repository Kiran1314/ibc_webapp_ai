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
    <div className="cband" style={{ width: '100%' }}>
      <div className="chdr" style={{ padding: '0 20px', wordBreak: 'break-word' }}>
        <strong>3,000+ Satisfied Clients</strong> trust IBC Studio
      </div>
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div className="ctrack" style={{ animationDuration: '200s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}>
          {companies.concat(companies).map((company, idx) => (
            <div key={idx} className="clog" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 28px', whiteSpace: 'nowrap', width: 'auto', boxSizing: 'border-box' }}>
              {company}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}