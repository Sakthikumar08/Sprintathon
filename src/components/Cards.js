import React, { useState } from "react";
import "./CardsStyle.css";
import droneImage from "../assets/icons8-drone-64.png";

const cardData = [
  { name: "Defence and Aerospace", icon:  "fa-jet-fighter-up", points: ["Eco-friendly power", "Sustainable development"] },
  { name: "Wireless and IOT Networks", icon: "fa-solid fa-wifi", points: ["Eco-friendly power", "Sustainable development"] },
  { name: "Renewable Energy", icon: "fa-leaf", points: ["Eco-friendly power", "Sustainable development"] },
  { name: "Health Monitoring", icon: "fa-heartbeat", points: ["Real-time tracking", "Personalized healthcare"] },
  { name: "Waste Management", icon: "fa-recycle", points: ["Smart disposal", "Recycling solutions"] },
  { name: "Smart Farming", icon: "fa-tractor", points: ["Precision agriculture", "Automated irrigation"] },
  { name: "Smart Education", icon: "fa-graduation-cap", points: ["E-learning platforms", "Interactive classrooms"] },
  { name: "Cybersecurity", icon: "fa-lock", points: ["Data protection", "Threat prevention"] },
  { name: "AR & VR", icon: "fa-glasses", points: ["Immersive learning", "Enhanced entertainment"] },
 /*  { name: "Satellite Communication", icon: "fa-satellite", points: ["Global connectivity", "Disaster response"] },
  { name: "Drone Technology", image: droneImage, points: ["Aerial surveillance", "Delivery services"] }, */
  { name: "Edge Computing", icon: "fa-network-wired", points: ["Faster processing", "Decentralized networks"] },
  { name: "Student Innovation", icon: "fa-lightbulb", points: ["Creative solutions", "Tech advancements"] },
];

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <div className="cards-grid">
        {cardData.map((data, index) => (
          <TiltCard key={index} data={data} onClick={() => setSelectedCard(data)} />
        ))}
      </div>
      {selectedCard && <Popup card={selectedCard} onClose={() => setSelectedCard(null)} />}
    </>
  );
};

const TiltCard = ({ data, onClick }) => {
  return (
    <div onClick={onClick} className="tilt-card">
         <div className="bottom-left"></div>
         <div className="bottom-right"></div>
      <div className="tilt-card-inner">
        {data.image ? <img src={data.image} alt={data.name} className="drone-image" /> : <i className={`fa ${data.icon} icon`}></i>}
        <p className="hover-text">{data.name}</p>
      </div>
    </div>
  );
};

const Popup = ({ card, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h2>{card.name}</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="popup-body">
          <ul>
            {card.points?.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
