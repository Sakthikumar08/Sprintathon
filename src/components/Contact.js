import React from 'react';
import Profileimg from '../assets/profile.png';

const staffMembers = [
  {
    name: "Dr. John Doe",
    mobile: "+91 98765 43210",
    email: "johndoe@example.com",
    image: {Profileimg} // Replace with actual image URL
  },
  {
    name: "Prof. Jane Smith",
    mobile: "+91 87654 32109",
    email: "janesmith@example.com",
    image: "https://via.placeholder.com/100" // Replace with actual image URL
  },
  {
    name: "Dr. Emily Johnson",
    mobile: "+91 76543 21098",
    email: "emilyjohnson@example.com",
    image: "https://via.placeholder.com/100" // Replace with actual image URL
  }
];

const Contact = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", flexWrap: "wrap", marginTop: "100px" }}>
      {staffMembers.map((staff, index) => (
        <div key={index} style={{
          border: "1px solid rgb(8, 135, 254)",
          padding: "20px",
          borderRadius:"5px",
          width: "250px",
          textAlign: "center",
          boxShadow: "0px 4px 8px rgb(8, 135, 254,0.3)",
          backgroundColor: "black"
        }}>
          <img src={Profileimg} alt={staff.name} style={{ width: "200px", height: "200px", borderRadius: "", marginBottom: "10px" }} />
          <h3 style={{fontSize:"2rem"}}>{staff.name}</h3>
          <p> <i class="fa-solid fa-phone"></i> {staff.mobile}</p>
          <p><i class="fa-solid fa-envelope"></i> <a href={`mailto:${staff.email}`} >{staff.email}</a></p>
        </div>
      ))}
    </div>
  );
}

export default Contact;
