import React, { useState } from "react";
import "./CardsStyle.css";
import droneImage from "../assets/icons8-drone-64.png";

const cardData = [
    { 
      name: "Defence and Aerospace", 
      icon: "fa-jet-fighter-up", 
      points: [
        "PSD101 - Affordable Satellite Module for Forest Monitoring & Protection",
        "PSD102 - AI Powered Early Warning & Prediction System",
        "PSD103 - Environmental Monitoring and Conservation",
        "PSD104 - Smart City Surveillance and Security"
      ] 
    },
    { 
      name: "Wireless and IoT Networks", 
      icon: "fa-wifi", 
      points: [
        "PSI201 - Offline Smart Home Assistant with Voice Control and UI Monitoring using Raspberry Pi",
        "PSI202 - Advanced Line Follower Bot for Wi-Fi/IoT Test Facility"
      ] 
    },
    { 
      name: "Renewable Energy", 
      icon: "fa-leaf", 
      points: [
        "PSR501 - Automated Street Light Monitoring & Energy Saving System",
        "PSR502 - Smart Monitoring & Optimization for Solar Efficiency",
        "PSR503 - AI-Driven Energy Management for Smart Cities",
        "PSR504 - Smart Grid Fault Detection & Auto-Recovery System",
        "PSR505 - AI-Integrated Smart Building Energy Controller",
        "PSR506 - Smart AI-Driven Electrical Fault Monitoring System"
      ] 
    },
    { 
      name: "Health Monitoring", 
      icon: "fa-heartbeat", 
      points: [
        "PSH301 - Accessible Mental Health Support",
        "PSH302 - Personalized Fitness and Wellness Management",
        "PSH303 - AI-Powered Healthcare Diagnostics",
        "PSH305 - Fall Detection Wearable for Seniors",
        "PSH306 - Contactless Temperature & Heart Rate Monitor",
        "PSH310 - Smart Navigation Glasses for the Visually Impaired"
      ] 
    },
    { 
      name: "Waste Management", 
      icon: "fa-recycle", 
      points: [
        "PSW701 - IoT Enabled Waste Management for Efficient Collection",
        "PSW702 - E Waste Tracker: Smart Monitoring & Recycling Management System",
        "PSW703 - Smart Waste Segregation System",
        "PSW704 - IoT-Enabled Biodegradable Waste Converter",
        "PSW705 - AI-Powered Waste Collection Route Optimization",
        "PSW706 - Citizen Waste Reporting & Reward App",
        "PSW707 - AI-Powered Waste Recognition & Recycling Assistant"
      ] 
    },
    { 
      name: "Smart Farming", 
      icon: "fa-tractor", 
      points: [
        "PSA601 - Crop and Soil Management System",
        "PSA602 - Effective Farming System",
        "PSA603 - Smart Greenhouse Automation",
        "PSA604 - Blockchain-Based Agri-Supply Chain",
        "PSA605 - AI-Driven Smart Fertilization System",
        "PSA606 - Precision Irrigation Management System",
        "PSA607 - AI-Powered Pest and Disease Detection System"
      ] 
    },
    { 
      name: "Smart Education", 
      icon: "fa-graduation-cap", 
      points: [
        "PSE401 - AI-Based Education and Learning Personalization",
        "PSE402 - Gamified Learning Platform",
        "PSE403 - AI Powered Translation for Regional Accessibility",
        "PSE404 - AI-Powered Virtual Teaching Assistant",
        "PSE405 - Smart Attendance and Engagement Monitoring System",
        "PSE406 - AI-Enabled Career Guidance and Skill Assessment"
      ] 
    },
    { 
      name: "Cybersecurity", 
      icon: "fa-lock", 
      points: [
        "PSC801 - AI Powered Real-Time Phishing Detection & Protection",
        "PSC802 - Energy-Efficient Edge Computing for Smart IoT Networks",
        "PSC803 - AI-Driven Intrusion Detection for IoT Networks",
        "PSC804 - Blockchain-Based Secure Data Sharing",
        "PSC805 - Secure Edge Computing for Healthcare Data",
        "PSC806 - AI-Powered Ransomware Detection & Prevention"
      ] 
    },
    { 
      name: "AR & VR", 
      icon: "fa-glasses",
      points: [
        "PSV901 - Immersive Learning on Climate Change and Ecosystems",
        "PSV902 - Adaptive AR & VR Therapy for Guided Rehabilitation",
        "PSV903 - AR-Based Interactive Learning for STEM Education",
        "PSV904 - VR-Based Fire Safety and Disaster Preparedness Training",
        "PSV905 - AR Navigation and Assistance for Visually Impaired Individuals"
      ] 
    },
    { 
      name: "Edge Computing", 
      icon: "fa-network-wired", 
      points: [
        "PSC802 - Energy-Efficient Edge Computing for Smart IoT Networks",
        "PSC805 - Secure Edge Computing for Healthcare Data"
      ] 
    },
    { 
      name: "Student Innovation", 
      icon: "fa-lightbulb", 
      points: [
        "PS001 - Harnessing the Power of Student Innovation"
      ] 
    },
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
       <i className={`fa-solid ${data.icon} `}></i>
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
