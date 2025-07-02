import React from 'react';
import './SponsorStyle.css';
import sponsor1 from '../assets/sponsor1.png';
import sponsor2 from '../assets/sponsor2.png';
import sponsor3 from '../assets/sponsor3.png';
import sponsor4 from '../assets/sponsor4.png';
import sponsor5 from '../assets/sponsor5.png';
import sponsor6 from "../assets/data.png";
import sponsor7 from "../assets/enthutech.png";
import sponsor8 from "../assets/emblock.png";


const sponsors = [
  { img: sponsor6, name: "Data patterns" },
/*   { img: sponsor2, name: "IQmath Technologies" },
  { img: sponsor1, name: "Converse data solutions" }, */
  
];
const Industry = [
  { img: sponsor2, name: "IQmath Technologies" },
  { img: sponsor1, name: "Converse data solutions" },
  { img: sponsor7, name: "Enthutech" },
 /*  { img: sponsor8, name: "EMBLOCK" }, */
  { img: sponsor4, name: "DADB" },
  { img: sponsor5, name: "Ematix" },
  
];

const Sponsors = () => {
  return (
    <div className='spon-container relative py-12 px-4 sm:px-6 lg:px-8 bg-gray-900'  >
      
    <div className="sponsor">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center py-5">
  Our Sponsors
</h1>
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
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center py-5">
  Our Partners
</h1>
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
