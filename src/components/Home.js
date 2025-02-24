import React from 'react';
import "./HomePage.css";
import sjcelogo from "../assets/sjcelogo1.png";

function Home() {
  return (
    <div className="home">
      {/* Video Background */}
      <video autoPlay loop muted className="bg-video">
        <source src="/videos/home-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <div className='sjcelogo'>
          <img src={sjcelogo} alt="SJCELogo" />
        </div>

        <h1 className="title"><span>I</span>nnvenio-X</h1>
        <p className="subtitle">A 24 HOURS NATIONAL LEVEL HACKATHON</p>

        <button className="btn">REGISTER NOW</button>
      </div>
      <div>
        <h1 className='about-title'>About us</h1>
        <div className='about-text'>
          <p>Innvenio-X '25 is a National Level Hackathon that challenges innovators, developers, and problem-solvers to create technological solutions for real-world challenges. Taking place on March 27, 2025, the event features problem statements across clean energy, healthcare, cybersecurity, smart agriculture, AR/VR, space technology, ocean monitoring, and more. With a prize pool of ₹1.75 lakh, participants will compete in an intensive 24-hour challenge, gaining access to industry mentorship, cutting-edge resources, and an innovation-driven environment.</p>
        </div>
      </div>
    </div>
  )
}

export default Home;
