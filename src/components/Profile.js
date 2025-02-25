import React from "react";
import "./profileStyle.css"; 
import sakthi from "../assets/profile.png";
import lakshmi from "../assets/lakshmin.png";
import Lithin from "../assets/lithin.png";
import pranav from "../assets/pranav.png";
import ajitha from "../assets/ajitha.png";
import Pk from "../assets/prabuk.png"
import shriram from "../assets/shriram.png"
import venky from "../assets/venky.png"

const coordinators = [
  { name: "Sakthi Kumar", image: sakthi },
  { name: "Lithin ", image: Lithin },
  { name: "Pranav", image: pranav },
  { name: "PK ", image: Pk },
  { name: "Venky ", image: venky },
  { name: "Lakshmi ", image: lakshmi },
  { name: "Ajitha", image: ajitha },
  { name: "Shriram", image: shriram },
];

const Profile = () => {
  return (
    <div className="profile-container">
      {coordinators.map((coordinator, index) => (
        <div key={index} className="profile-card">
          <div className="profile-glow"></div>
          <div className="profile-inner">
            <img src={coordinator.image} alt={coordinator.name} className="profile-image" />
            <p className="profile-name">{coordinator.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
