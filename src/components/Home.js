import React from 'react';
import "./HomePage.css";
import sjcelogo from "../assets/sjcelogo1.png"

const Home = () => {
  return (
    <>
     <div className="home-container">
      
   
       <div className='sjcelogo'>
        <img src={sjcelogo} alt=""/>
       </div>
    </div>
    
    </>
  )
}

export default Home
