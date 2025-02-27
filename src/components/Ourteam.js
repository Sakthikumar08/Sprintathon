import React from 'react'
import Profile from "./Profile";
import './OurteamStyle.css';
const Ourteam = () => {
  return (
    <div className='ourteam'>
       <video autoPlay loop muted className="background-video">
        <source src="/videos/bg-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Profile />
    </div>
  )
}

export default Ourteam
