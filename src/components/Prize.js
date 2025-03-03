import React from "react";
import "./PrizeStyle.css";
import firstpr from "../assets/1prize.png";
import secondpr from "../assets/2prize.png";
import thirdpr from "../assets/3prize.png";

const Prize = () => {
  return (
    <div className="prize-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="/videos/bg-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Scrollable Content */}
      <div className="prize-scroll-container">
        <h1 className="prize-title">Prize Distribution 🏆</h1>

        {/* Prize Cards Section */}
        <div className="prize-cards">
          {/* 2nd Prize */}
          <div className="prize-card second-prize">
            <img src={secondpr} alt="" className="prize-img" />
            
            <h2>1st Runner-up</h2>
            <p>Prize: ₹50,000</p>
          </div>

          {/* 1st Prize */}
          <div className="prize-card first-prize">
          <img src={firstpr} alt="" className="prize-img"/>
           
            <h2>Winner</h2>
            <p>Prize: ₹1,00,000</p>
          </div>

          {/* 3rd Prize */}
          <div className="prize-card third-prize">
          <img src={thirdpr} alt="" className="prize-img"/>
            
            <h2>2nd Runner-up</h2>
            <p>Prize: ₹25,000</p>
          </div>
        </div>
       

        {/* Prize Pool Section */}
        <div className="prize-pool">
          <h2>Prize Pool of ₹1,75,000 </h2>
          <p>
            🎓 Exciting Internship Offers with a Total Stipend of ₹2,24,000 💼 <br />
            🎟 Course Certification Vouchers Worth <strong>$20,000</strong> for All Participants!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prize;
