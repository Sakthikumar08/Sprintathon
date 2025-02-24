import React from "react";
import "./PrizeStyle.css";
import firstpr from "../assets/firstpr.png";
import secondpr from "../assets/secondpr.png";
import thirdpr from "../assets/thirdpr.png";

const Prize = () => {
  return (
    <div className="prize-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="/videos/prize-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Scrollable Content */}
      <div className="prize-scroll-container">
        <h1 className="prize-title">🏆 Prize Distribution 🏆</h1>

        {/* Prize Cards */}
        <div className="prize-cards">
          {/* 2nd Prize */}
          <div className="prize-card second-prize">
            <img src={secondpr} alt="2nd Prize" className="prize-img" />
            <h2>🥈 1st Runner-up</h2>
            <p>Prize: ₹50,000</p>
          </div>

          {/* 1st Prize */}
          <div className="prize-card first-prize">
            <img src={firstpr} alt="1st Prize" className="prize-img" />
            <h2>🥇 Winner</h2>
            <p>Prize: ₹1,75,000</p>
          </div>

          {/* 3rd Prize */}
          <div className="prize-card third-prize">
            <img src={thirdpr} alt="3rd Prize" className="prize-img" />
            <h2>🥉 2nd Runner-up</h2>
            <p>Prize: ₹25,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Prize;
