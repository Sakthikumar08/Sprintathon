import React from 'react';
import "./HomePage.css";
import sjcelogo from "../assets/sjcelogo1.png";
import Timeline from "./Timeline"

function Home() {
  return (
    <div className="home">
      {/* Video Background */}
      <video autoPlay loop muted className="bg-video">
        <source src="/videos/bg-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <div className='sjcelogo'>
          <img src={sjcelogo} alt="SJCELogo" />
        </div>

        <h1 className="title"><span>S</span>printathon'25</h1>
        <p className='sub-tit'>A Sprint to Revolution</p>
        <p className="subtitle">A 24 HOUR NATIONAL LEVEL INNOVATION SPRINT</p>

        <a href="https://forms.gle/bF1p6XJcMhRRZ9F46" ><button className="btn">REGISTER NOW</button></a>
      </div>
      <Timeline />
      <div>
        <h1 className='about-title'>About us</h1>
        <div className='about-text'>
          <p>Welcome to SPRINTATHON 25, a National-Level Hackathon designed to bring together the brightest minds from across the country to innovate, create, and solve real-world challenges.

Hosted by St. Joseph's College of Engineering, Department of ECE, this hackathon serves as a launchpad for young innovators, tech enthusiasts, and problem-solvers to develop impactful solutions using emerging technologies.

Whether you're passionate about AI, IoT, Drone Technology, Sustainability, or Cybersecurity,  SPRINTATHON 25 provides the perfect platform to collaborate, compete, and showcase your technical prowess. With expert mentorship, industry networking, and an impressive prize pool of ₹3.15 Lakh, this event promises to be an unforgettable learning experience.

Are you ready to push boundaries and create the future? Join us at SPRINTATHON 25 and turn your ideas into reality!</p>
        </div>
      </div>
    </div>
  )
}

export default Home;
