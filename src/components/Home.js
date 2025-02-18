import React from 'react';
import "./HomePage.css";
import logo1 from "../assets/logo1.jpg"
import logo2 from "../assets/logo2.jpg";
import sjcelogo from "../assets/sjcelogo1.png";
import "./ButtonStyle.css";

function Home() {
  return (
    <div className="home">
     

      <div className="content">
      
        <div className='sjcelogo'>
          <img src={sjcelogo} alt ="" />
        </div>

        <h1 className="title" ><span >I</span>nnvenio-X</h1>
        <p className="subtitle" >A 24 HOURS NATIONAL LEVEL HACKATHON</p>

        <button className="btn">REGISTER NOW</button>
      </div>
    </div>
  )
}

export default Home