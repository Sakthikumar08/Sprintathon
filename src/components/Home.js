import React from 'react';
import "./HomePage.css";
import sjcelogo from "../assets/sjcelogo1.png"

const Home = () => {
  return (
    <>
     <div className="home-container">
      
      <video autoPlay loop muted className="bg-video">
        <source src="/videos/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
       <div className='sjcelogo'>
        <img src={sjcelogo} alt=""/>
       </div>
    </div>
    
    </>
  )
}

export default Home
