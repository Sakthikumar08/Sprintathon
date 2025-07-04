"use client"

import { useState } from "react"
import "./CardsStyle.css"

const cardData = [
  {
    name: "Defence and Aerospace",
    icon: "fa-jet-fighter-up",
    problems: [
      {
        id: "PSD101",
        title: "Microphone array‑based direction of arrival for gunshot detection",
        description:
          "Develop a real-time gunshot detection and direction-finding system using FPGA. The system will take inputs from multiple microphones, filter and identify gunshot sounds, and calculate the direction they came from. The final direction should be shown on a simple graphical display.",
      },
      {
        id: "PSD102",
        title: "AI Powered Early Warning & Prediction System",
        description:
          "The Disaster Prediction Platform uses AI to analyze satellite data, predicting natural disasters like floods and wildfires. By processing weather patterns, terrain data, and historical events, it provides early warnings and disaster severity forecasts, helping emergency teams respond faster and minimize damage.",
      },
      {
        id: "PSD103",
        title: "Environmental Monitoring and Conservation",
        description:
          "Develop a drone system that can monitor and track environmental changes in real-time. The drone should be equipped with sensors to detect pollution levels, track wildlife movements, and assess the health of forests and natural habitats. Your solution should provide valuable data to environmentalists and conservationists to help protect ecosystems and biodiversity.",
      },
      {
        id: "PSD104",
        title: "Smart City Surveillance and Security",
        description:
          "Design a drone-based surveillance system to enhance the safety and security of smart cities. The system should include features like real-time video streaming, facial recognition, and anomaly detection to identify potential threats and ensure public safety. Consider the ethical and privacy implications of using drones for surveillance and propose solutions to address these concerns.",
      },
      {
        id: "PSD105",
        title: "Affordable Satellite Module for Forest Monitoring & Protection",
        description:
          "Design a Low-Cost Satellite Module that uses satellite images to monitor deforestation and illegal logging. The module should be affordable and capture clear images to track changes in forests. It should send real-time data to authorities, helping to protect forests and prevent illegal activities.",
      },
    ],
  },
  {
    name: "Wireless and IoT Networks",
    icon: "fa-wifi",
    problems: [
      {
        id: "PSI201",
        title: "Offline Smart Home Assistant with Voice Control and UI Monitoring using Raspberry Pi",
        description:
          "The challenge is to develop an offline smart home solution that enables users to control and monitor home appliances using a Raspberry Pi. The system should function without an internet connection, relying solely on a local hotspot. Users should be able to control appliances via voice commands and monitor their status through a user-friendly UI.",
        requirements: [
          "Offline Functionality: The system must operate without internet access, using a local hotspot created by the Raspberry Pi.",
          "Appliance Control: The Raspberry Pi should connect and control various home appliances using wired or wireless protocols.",
          "Voice Control: The system should integrate voice recognition to process natural language commands.",
          "UI Monitoring & Control: The system must provide a web-based or mobile UI for real-time monitoring.",
          "Device Connection Monitoring: The UI should display connected devices and alert users of malfunctions.",
          "Automation Features: Users should be able to create automation rules.",
          "Security: The system should ensure secured communication between devices.",
        ],
      },
      {
        id: "PSI202",
        title: "Advanced Line Follower Bot for Wi-Fi/IoT Test Facility",
        description:
          "The objective is to build a fully autonomous robotic system that can navigate along a designated trajectory, stop upon detecting NFC tag points, and provide remote monitoring capabilities.",
        requirements: [
          "Autonomous Navigation: The robot must follow a predefined trajectory without manual intervention.",
          "NFC Tag Reading: Upon encountering a designated NFC tag, the robot maintains a stationary position for 20 seconds.",
          "Battery Management: Dual-battery system with one for robot operations and another for charging external devices.",
          "Remote Monitoring: Real-time tracking, live status updates, and digital twin representation.",
          "Seamless Task Execution: Uninterrupted transitions between waypoints with accurate data collection.",
        ],
      },
    ],
  },
  {
    name: "Renewable Energy",
    icon: "fa-leaf",
    problems: [
      {
        id: "PSR501",
        title: "Automated Street Light Monitoring & Energy Saving System",
        description:
          "Develop an intelligent street lighting system that uses ambient light and motion sensors to automate lighting based on real-time conditions. Integrate IoT technology for remote monitoring, energy usage tracking, and fault detection to enhance efficiency, reduce power consumption, and minimize maintenance efforts.",
      },
      {
        id: "PSR502",
        title: "Smart Monitoring & Optimization for Solar Efficiency",
        description:
          "Build a software platform to monitor and optimize the performance of solar panels, ensuring maximum energy generation and reducing maintenance costs.",
      },
      {
        id: "PSR503",
        title: "AI-Driven Energy Management for Smart Cities",
        description:
          "Build an AI-powered energy management system that optimizes energy consumption, predicts demand, and ensures sustainability in smart cities, addressing the complexities of energy management. This system aims to reduce inefficiencies, lower costs, minimize environmental impact, and maximize energy savings.",
      },
      {
        id: "PSR504",
        title: "Smart Grid Fault Detection & Auto-Recovery System",
        description:
          "Develop an IoT-enabled smart grid monitoring system that detects power failures, predicts faults, and automatically reroutes electricity to ensure uninterrupted power supply, reducing outages in urban and rural areas.",
      },
      {
        id: "PSR505",
        title: "AI-Integrated Smart Building Energy Controller",
        description:
          "Design an AI-powered energy management system that autonomously controls lighting, HVAC, and appliances in commercial and residential buildings based on occupancy and weather conditions, improving energy efficiency.",
      },
      {
        id: "PSR506",
        title: "Smart AI-Driven Electrical Fault Monitoring System",
        description:
          "Electrical infrastructure faces challenges in monitoring earth leakage, continuity, and resistance, which can lead to safety hazards, equipment failures, and inefficient maintenance. Traditional inspection methods rely on manual checks, making it difficult to detect faults in real-time.",
      },
    ],
  },
  {
    name: "Health Monitoring",
    icon: "fa-heartbeat",
    problems: [
      {
        id: "PSH301",
        title: "Accessible Mental Health Support",
        description:
          "Design an AI-driven mental health companion that offers real-time emotional support, tracks mood patterns, and recommends personalized interventions, while ensuring privacy and promoting well-being.",
      },
      {
        id: "PSH302",
        title: "Personalized Fitness and Wellness Management",
        description:
          "Create an AI-powered virtual personal trainer that offers dynamic workout plans, real-time feedback, and personalized nutrition guidance by using data from wearables and analytics.",
      },
      {
        id: "PSH303",
        title: "AI-Powered Healthcare Diagnostics",
        description:
          "Build an AI-powered healthcare diagnostic system that analyzes medical data in real-time, predicts conditions, and provides early diagnosis using medical imaging, electronic health records, and patient monitoring data.",
      },
      {
        id: "PSH304",
        title: "Fall Detection Wearable for Seniors",
        description:
          "Develop a wearable device using motion sensors to detect falls in elderly individuals and instantly send alerts to caregivers or emergency contacts. It must be lightweight, comfortable to wear, and capable of operating independently without needing constant internet access.",
      },
      {
        id: "PSH305",
        title: "Contactless Temperature & Heart Rate Monitor",
        description:
          "Build a non-contact system using infrared and pulse sensors to continuously monitor a person's body temperature and heart rate, displaying real-time data on a screen or mobile device. The system should alert users when abnormal readings are detected and store data for periodic health review.",
      },
      {
        id: "PSH306",
        title: "Smart Navigation Glasses for the Visually Impaired",
        description:
          "Design a wearable smart glasses system that uses ultrasonic sensors and voice feedback to detect nearby obstacles and guide visually impaired users safely. The device should provide directional cues through vibration or audio, enabling indoor and outdoor navigation without internet.",
      },
    ],
  },
  {
    name: "Waste Management",
    icon: "fa-recycle",
    problems: [
      {
        id: "PSW701",
        title: "IoT Enabled Waste Management for Efficient Collection",
        description:
          "IoT-Based Smart Waste Management System: Create a smart garbage bin that uses IoT sensors to detect overflow and send alerts for timely waste collection.",
      },
      {
        id: "PSW702",
        title: "E Waste Tracker: Smart Monitoring & Recycling Management System",
        description:
          "E-Waste Monitoring System: Build a software platform to track, monitor, and recycle e-waste generated by government and private organizations.",
      },
      {
        id: "PSW703",
        title: "Smart Waste Segregation System",
        description:
          "Develop a sensor-based waste segregation system using IoT and AI to automatically identify and separate biodegradable, recyclable, and non-recyclable waste at collection points, improving recycling efficiency.",
      },
      {
        id: "PSW704",
        title: "IoT-Enabled Biodegradable Waste Converter",
        description:
          "Design a compact, IoT-powered biodegradable waste converter that speeds up composting using controlled temperature, moisture, and microbial activity, making it suitable for homes and small communities.",
      },
      {
        id: "PSW705",
        title: "AI-Powered Waste Collection Route Optimization",
        description:
          "Create an AI-based waste collection system that analyzes real-time bin fill levels, traffic conditions, and optimized routes to reduce fuel consumption and improve collection efficiency for municipal corporations.",
      },
      {
        id: "PSW706",
        title: "Citizen Waste Reporting & Reward App",
        description:
          "Develop a mobile app that allows citizens to report uncollected waste or overflowing bins, track their environmental contributions, and earn rewards for responsible waste disposal and recycling efforts.",
      },
      {
        id: "PSW707",
        title: "AI-Powered Waste Recognition & Recycling Assistant",
        description:
          "Develop a mobile or web-based application that uses AI and image recognition to help users identify waste types and suggest proper disposal or recycling methods. The system should provide real-time feedback and integrate with local recycling centers for better waste management.",
      },
    ],
  },
  {
    name: "Smart Farming",
    icon: "fa-tractor",
    problems: [
      {
        id: "PSA601",
        title: "Crop and Soil Management System",
        description:
          "Develop an app to assist farmers in crop selection, soil management, and disease identification, improving productivity and sustainability.",
      },
      {
        id: "PSA602",
        title: "Effective Farming System",
        description:
          "Design a cost-effective, mechanized system for puddling, seeding, transplanting, and harvesting crops to improve agricultural efficiency.",
      },
      {
        id: "PSA603",
        title: "Smart Greenhouse Automation",
        description:
          "Create an IoT-enabled smart greenhouse system that monitors and controls temperature, humidity, and soil conditions using AI and automation, improving crop yield and reducing resource wastage.",
      },
      {
        id: "PSA604",
        title: "Blockchain-Based Agri-Supply Chain",
        description:
          "Design a blockchain-integrated agricultural supply chain platform to enhance transparency, traceability, and fair pricing for farmers, reducing post-harvest losses and ensuring better market access.",
      },
      {
        id: "PSA605",
        title: "Precision Irrigation Management System",
        description:
          "Create a smart irrigation system that uses IoT sensors and AI-driven analytics to monitor soil moisture levels, optimize water usage, and enhance crop growth while reducing water wastage.",
      },
      {
        id: "PSA606",
        title: "AI-Powered Pest and Disease Detection System",
        description:
          "Develop an AI-based system that uses image processing and IoT sensors to detect crop diseases and pest infestations in real time, enabling timely interventions and reducing yield losses.",
      },
    ],
  },
  {
    name: "Smart Education",
    icon: "fa-graduation-cap",
    problems: [
      {
        id: "PSE401",
        title: "AI-Based Education and Learning Personalization",
        description:
          "Build an AI-powered personalized learning platform that adapts to individual student needs, offering customized learning paths, dynamic content recommendations, and real-time feedback. This platform aims to address the limitations of traditional education systems by enhancing engagement, improving performance, and fostering a more personalized and effective learning experience for each student.",
      },
      {
        id: "PSE402",
        title: "Gamified Learning Platform",
        description:
          "Build a gamified smart education platform designed to enhance learning through interactive challenges, adaptive learning pathways, and personalized experiences.",
      },
      {
        id: "PSE403",
        title: "AI Powered Translation for Regional Accessibility",
        description:
          "Develop an AI-driven translation system to convert educational resources from English to regional languages with high accuracy. It should preserve context, handle educational terms well, and minimize errors, ensuring accessible learning with minimal human intervention.",
      },
      {
        id: "PSE404",
        title: "AI-Powered Virtual Teaching Assistant",
        description:
          "Develop an AI-driven virtual assistant that provides instant answers to student queries, explains complex topics, and offers personalized study recommendations, enhancing remote and self-paced learning.",
      },
      {
        id: "PSE405",
        title: "Smart Attendance and Engagement Monitoring System",
        description:
          "Create an AI-based system that uses facial recognition and behavioral analytics to automate attendance tracking and assess student engagement during online and offline classes, improving learning outcomes.",
      },
      {
        id: "PSE406",
        title: "AI-Enabled Career Guidance and Skill Assessment",
        description:
          "Design an AI-powered platform that analyzes student interests, skills, and academic performance to recommend suitable career paths, relevant courses, and industry-aligned skill development programs.",
      },
    ],
  },
  {
    name: "Cybersecurity",
    icon: "fa-lock",
    problems: [
      {
        id: "PSC801",
        title: "AI Powered Real-Time Phishing Detection & Protection",
        description:
          "Develop an AI-powered Phishing Detection Tool to protect individuals and organizations from cyber threats by analyzing emails, URLs, and messages for phishing indicators. The tool should provide real-time alerts, flag suspicious content, and educate users on cybersecurity best practices to prevent data breaches.",
      },
      {
        id: "PSC802",
        title: "Energy-Efficient Edge Computing for Smart IoT Networks",
        description:
          "Low-Power Edge Device for IoT: Develop a low-power edge computing device for real-time data processing in IoT networks, such as smart homes.",
      },
      {
        id: "PSC803",
        title: "AI-Driven Intrusion Detection for IoT Networks",
        description:
          "Develop an AI-powered intrusion detection system that monitors IoT network traffic, identifies anomalies, and prevents cyber threats in real-time, ensuring enhanced security for connected devices.",
      },
      {
        id: "PSC804",
        title: "Blockchain-Based Secure Data Sharing",
        description:
          "Design a blockchain-enabled system for secure and tamper-proof data sharing between organizations, ensuring data integrity, privacy, and protection against unauthorized access.",
      },
      {
        id: "PSC805",
        title: "Secure Edge Computing for Healthcare Data",
        description:
          "Create an edge computing solution that enables secure, real-time processing of patient health data while ensuring compliance with privacy regulations and reducing dependency on cloud storage.",
      },
      {
        id: "PSC806",
        title: "AI-Powered Ransomware Detection & Prevention",
        description:
          "Develop an AI-driven system that detects ransomware attacks by analyzing unusual file encryption patterns, alerts users in real time, and provides automated mitigation strategies to prevent data loss.",
      },
    ],
  },
  {
    name: "AR & VR",
    icon: "fa-glasses",
    problems: [
      {
        id: "PSV901",
        title: "Immersive Learning on Climate Change and Ecosystems",
        description:
          "Create a VR simulation to teach students about the impact of climate change on ecosystems. The simulation should let users explore different environments like forests, oceans, and polar regions, showing how they are affected by climate change. It should be interactive, engaging, and easy to use, helping students better understand climate change and its effects on the planet.",
      },
      {
        id: "PSV902",
        title: "Adaptive AR & VR Therapy for Guided Rehabilitation",
        description:
          "The system should use AR & VR to create interactive exercises that assist in physical therapy, allowing patients to perform guided rehabilitation exercises in a virtual environment. The system should track the patient's movements, provide real-time feedback on their progress, and adapt the difficulty based on the patient's recovery level.",
      },
      {
        id: "PSV903",
        title: "AR-Based Interactive Learning for STEM Education",
        description:
          "Develop an AR app that creates interactive 3D models to help students learn STEM concepts easily. Users should be able to view and manipulate virtual objects like molecules or physics experiments through a smartphone or AR device. The app should be intuitive, engaging, and enhance understanding. Keep the design simple and feasible for a college hackathon project.",
      },
      {
        id: "PSV904",
        title: "VR-Based Fire Safety and Disaster Preparedness Training",
        description:
          "Create a VR training module that simulates real-life fire and disaster scenarios, allowing users to practice emergency response procedures in a safe, controlled environment to improve preparedness and decision-making.",
      },
      {
        id: "PSV905",
        title: "AR Navigation and Assistance for Visually Impaired Individuals",
        description:
          "Design an AR-based navigation system that provides real-time assistance to visually impaired individuals by detecting obstacles, recognizing landmarks, and offering audio guidance for safer mobility in public spaces.",
      },
    ],
  },
  {
    name: "Edge Computing",
    icon: "fa-network-wired",
    problems: [
      {
        id: "PSC802",
        title: "Energy-Efficient Edge Computing for Smart IoT Networks",
        description:
          "Low-Power Edge Device for IoT: Develop a low-power edge computing device for real-time data processing in IoT networks, such as smart homes.",
      },
      {
        id: "PSC805",
        title: "Secure Edge Computing for Healthcare Data",
        description:
          "Create an edge computing solution that enables secure, real-time processing of patient health data while ensuring compliance with privacy regulations and reducing dependency on cloud storage.",
      },
    ],
  },
  {
    name: "Student Innovation",
    icon: "fa-lightbulb",
    problems: [
      {
        id: "PS001",
        title: "Harnessing the Power of Student Innovation",
        description:
          "Encouraging Young Minds to Develop Creative, Technology-Driven Solutions that Address Real-World Challenges, Foster Sustainable Development, and Shape a Smarter, More Connected Future.",
      },
    ],
  },
]

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null)

  return (
    <>
      <div className="cards-grid">
        {cardData.map((data, index) => (
          <TiltCard key={index} data={data} onClick={() => setSelectedCard(data)} />
        ))}
      </div>
      {selectedCard && <Popup card={selectedCard} onClose={() => setSelectedCard(null)} />}
    </>
  )
}

const TiltCard = ({ data, onClick }) => {
  return (
    <div onClick={onClick} className="tilt-card">
      <div className="bottom-left"></div>
      <div className="bottom-right"></div>
      <div className="tilt-card-inner">
        <i className={`fa-solid ${data.icon}`}></i>
        <p className="hover-text">{data.name}</p>
      </div>
    </div>
  )
}

const Popup = ({ card, onClose }) => {
  const [expandedProblem, setExpandedProblem] = useState(null)

  const toggleProblem = (index) => {
    setExpandedProblem(expandedProblem === index ? null : index)
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content simple-popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h2>{card.name}</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="popup-body">
          <div className="problems-list">
            {card.problems?.map((problem, index) => (
              <div key={index} className="problem-item">
                <div
                  className={`problem-header ${expandedProblem === index ? "active" : ""}`}
                  onClick={() => toggleProblem(index)}
                >
                  <span className="problem-id">{problem.id}</span>
                  <span className="problem-title">{problem.title}</span>
                  <span className={`arrow ${expandedProblem === index ? "rotated" : ""}`}>▼</span>
                </div>
                {expandedProblem === index && (
                  <div className="problem-content">
                    <p>{problem.description}</p>
                    {problem.requirements && (
                      <div className="requirements">
                        <h4>Requirements:</h4>
                        <ul>
                          {problem.requirements.map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards