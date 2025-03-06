import React, { useState } from "react";
import "./CardsStyle.css";
import droneImage from "../assets/icons8-drone-64.png";

const cardData = [
  { name: "Defence and Aerospace", icon:  "fa-jet-fighter-up", points: ["PSD901 - Environmental Monitoring and Conservation",
"PSD902 - Smart City Surveillance and Security",
"PSD903 - Affordable Satellite Module for Forest Monitoring & Protection",
"PSD904 - AI Powered Early Warning & Prediction System"] },
  { name: "Wireless and IoT Networks", icon: "fa-solid fa-wifi", points: ["PSI101: Offline Smart Home Assistant with Voice Control and UI Monitoring using Raspberry Pi"] },
  { name: "Renewable Energy", icon: "fa-leaf", points: ["PSR801 - Automated Street Light Monitoring & Energy Saving System",
"PSR802 - Smart Monitoring & Optimization for Solar Efficiency",
"PSR803 - AI-Driven Energy Management for Smart Cities",
"PSR804 - Smart Grid Fault Detection & Auto-Recovery System",
"PSR805 - AI-Integrated Smart Building Energy Controller",
"PSR806 - Smart AI-Driven Electrical Fault Monitoring System"] },
  { name: "Health Monitoring", icon: "fa-heartbeat", points: ["PSH201 - Accessible Mental Health Support",
"PSH202 - Personalized Fitness and Wellness Management",
"PSH203 - AI-Powered Healthcare Diagnostics",
"PSH204 - AI-Powered Early Disease Detection System"] },
  { name: "Waste Management", icon: "fa-recycle", points: ["PSW501 - IoT Enabled Waste Management for Efficient Collection","PSW502 - E Waste Tracker: Smart Monitoring & Recycling Management System"
,"PSW503 - Smart Waste Segregation System",
"PSW504 - IoT-Enabled Biodegradable Waste Converter",
"PSW505 - AI-Powered Waste Collection Route Optimization",
"PSW506 - Citizen Waste Reporting & Reward App",
"PSW507 - AI-Powered Waste Recognition & Recycling Assistant"] },
  { name: "Smart Farming", icon: "fa-tractor", points: ["PSA301 - Crop and Soil Management System",
"PSA302 - Effective Farming System",
"PSA303 - Smart Greenhouse Automation",
"PSA304 - Blockchain-Based Agri-Supply Chain",
"PSA305 - AI-Driven Smart Fertilization System",
"PSA306 - Precision Irrigation Management System",
"PSA307 - AI-Powered Pest and Disease Detection System"] },
  { name: "Smart Education", icon: "fa-graduation-cap", points: [" PSE401 - AI-Based Education and Learning Personalization", "PSE302 - Gamified Learning Platform","PSE403 - AI Powered Translation for Regional Accessibility", "PSE404 - AI-Powered Virtual Teaching Assistant","PSE405 - Smart Attendance and Engagement Monitoring System", " PSE406 - AI-Enabled Career Guidance and Skill Assessment"] },
  { name: "Cybersecurity", icon: "fa-lock", points: ["PSC601 - AI Powered Real-Time Phishing Detection & Protection",
    "PSC602 - Energy-Efficient Edge Computing for Smart IoT Networks",
    "PSC603 - AI-Driven Intrusion Detection for IoT Networks",
    "PSC604 - Blockchain-Based Secure Data Sharing",
    "PSC605 - Secure Edge Computing for Healthcare Data",
    "PSC606 - AI-Powered Ransomware Detection & Prevention"]  },
  { name: "AR & VR", icon: "fa-glasses",points:["PSV701 - Immersive Learning on Climate Change and Ecosystems",
"PSV702 - Adaptive AR & VR Therapy for Guided Rehabilitation",
"PSV703 - AR-Based Interactive Learning for STEM Education",
"PSV704 - VR-Based Fire Safety and Disaster Preparedness Training",
"PSV705 - AR Navigation and Assistance for Visually Impaired Individuals"] },
 /*  { name: "Satellite Communication", icon: "fa-satellite", points: ["Global connectivity", "Disaster response"] },
  { name: "Drone Technology", image: droneImage, points: ["Aerial surveillance", "Delivery services"] }, */
  { name: "Edge Computing", icon: "fa-network-wired", points: ["PSC601 - AI Powered Real-Time Phishing Detection & Protection",
    "PSC602 - Energy-Efficient Edge Computing for Smart IoT Networks",
    "PSC603 - AI-Driven Intrusion Detection for IoT Networks",
    "PSC604 - Blockchain-Based Secure Data Sharing",
    "PSC605 - Secure Edge Computing for Healthcare Data",
    "PSC606 - AI-Powered Ransomware Detection & Prevention"] },
  { name: "Student Innovation", icon: "fa-lightbulb", points: [" PS001 -  Harnessing the Power of Student Innovation"] },
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
