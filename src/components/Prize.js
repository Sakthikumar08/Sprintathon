import React from "react";
import "./PrizeStyle.css";
import firstpr from "../assets/1prize.png";
import secondpr from "../assets/2prize.png";
import thirdpr from "../assets/3prize.png";

const Prize = () => {
  return (
    <div className="prize-container">
      

      {/* Scrollable Content */}
      <div className="prize-scroll-container">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center py-5">
  Prize Distribution
</h1>
       

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
         
        </div>
        <div className="prize-pool">
        
          <p>
            🎓Exciting Internship offers with a total stipend of <strong>1,00,000</strong> and<br/> all the participants will receive Course certification vouchers worth <strong>₹16,000</strong> at free of cost.
            <br />
             
          </p>
        </div>
        <div className="prize-pool">
         
          <p>
          Also Best Perfomers will receive exciting Job offers from <span style={{color:"red"}}>DATA PATTERNS</span>!!!!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prize;
