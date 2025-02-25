import React from 'react';
import './SponsorStyle.css';
import sponsor1 from '../assets/sponsor1.png';
import sponsor2 from '../assets/sponsor2.png';
import sponsor3 from '../assets/sponsor3.png';
import sponsor4 from '../assets/sponsor4.png';
import sponsor5 from '../assets/sponsor5.png';

const sponsors = [
  { img: sponsor2, name: "IQmath Technologies" },
  { img: sponsor1, name: "Converse data solutions" },
  
  
  { img: sponsor4, name: "DADB" },
  { img: sponsor5, name: "Ematix" },
  { img: sponsor3, name: "optica" },
];

const Sponsors = () => {
  return (
    <div className="sponsor">
      <h2 className="sponsor-title">💡 Our Sponsors</h2>
      <div className="sponsor-container">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-card">
            <div className="sponsor-name-box">
              <h3 className="sponsor-name">{sponsor.name}</h3>
            </div>
            <div className="sponsor-img-box">
            <span className="corner-bottom-left"></span>
              <span className="corner-bottom-right"></span>
              <img src={sponsor.img} alt={sponsor.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
