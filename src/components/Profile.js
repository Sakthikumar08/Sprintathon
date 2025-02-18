import React from "react";
import "./profileStyle.css"; // Import external CSS

const coordinators = [
  { name: "John Doe", image: "https://www.kurukshetraceg.org.in/images/team/Moni.png" },
  { name: "Jane Smith", image: "https://www.kurukshetraceg.org.in/images/team/Christ.png" },
  { name: "Michael Lee", image: "https://www.kurukshetraceg.org.in/images/team/Moni.png" },
  { name: "Emily Davis", image: "https://www.kurukshetraceg.org.in/images/team/Moni.png" },
  { name: "Chris Johnson", image: "https://www.kurukshetraceg.org.in/images/team/Moni.png" },
  { name: "Sophia Brown", image: "https://www.kurukshetraceg.org.in/images/team/Moni.png" },
];

const Profile = () => {
  return (
    <div className="profile-container">
      {coordinators.map((coordinator, index) => (
        <div key={index} className="profile-card">
          <img src={coordinator.image} alt={coordinator.name} className="profile-image" />
          <p className="profile-name">{coordinator.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Profile;
