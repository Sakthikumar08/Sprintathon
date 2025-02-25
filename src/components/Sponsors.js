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
  { img: sponsor3, name: "Data patterns" },
];
const Industry = [
  { img: sponsor2, name: "Enthutech" },
  { img: sponsor1, name: "EMBLOCK" },
  { img: sponsor4, name: "DADB" },
  { img: sponsor5, name: "Ematix" },
  { img: sponsor3, name: "optica" },
];

const Sponsors = () => {
  return (
    <div className='spon-container'>
       <video autoPlay loop muted className="background-video">
        <source src="/videos/bg-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
      {/*  */}
      <h2 className="sponsor-title">💡 Industry Partner</h2>
      <div className="sponsor-container">
        {Industry.map((Industry, index) => (
          <div key={index} className="sponsor-card">
            <div className="sponsor-name-box">
              <h3 className="sponsor-name">{Industry.name}</h3>
            </div>
            <div className="sponsor-img-box">
            <span className="corner-bottom-left"></span>
              <span className="corner-bottom-right"></span>
              <img src={Industry.img} alt={Industry.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Sponsors;
