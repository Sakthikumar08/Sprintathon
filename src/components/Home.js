import React from 'react';
import "./HomePage.css";


const Home = () => {
  return (
    <>
     <div className="home-container">
      
      <video autoPlay loop muted className="bg-video">
        <source src="/videos/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='clg-name'>
        <div className='home-img'></div>
        <div></div>
        <div className='home-img'></div>
      </div>
    </div>
    </>
  )
}

export default Home
