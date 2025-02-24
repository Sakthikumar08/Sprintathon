import React from "react";
import "./profileStyle.css"; 
import sakthi from "../assets/profile.png";
import lakshmi from "../assets/lakshmi.png"

const coordinators = [
  { name: "Sakthi Kumar", image: sakthi },
  { name: "Lithin ", image: "https://www.kurukshetraceg.org.in/images/team/Christ.png" },
  { name: "Venky ", image: "https://www.kurukshetraceg.org.in/images/team/Moni.png" },
  { name: "Lakshmi ", image: lakshmi },
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
