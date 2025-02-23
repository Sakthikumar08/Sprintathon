import React from 'react';
import Profileimg from '../assets/profile.png';
import "./ContactStyle.css";

const staffMembers = [
  {
    name: "Dr. Sakthi",
    mobile: "+91 98765 43210",
    email: "johndoe@example.com",
    image: Profileimg // Replace with actual image URL
  },
  {
    name: "Prof. Sakthi",
    mobile: "+91 87654 32109",
    email: "janesmith@example.com",
    image: Profileimg // Replace with actual image URL
  },
  {
    name: "Dr. Sakthi",
    mobile: "+91 76543 21098",
    email: "emilyjohnsn@example.com",
    image: Profileimg // Replace with actual image URL
  }
];

const Contact = () => {
  return (
    <div className='contact'>
      <div className='cont-item'>
        <h1 className='cont-head'>Staff Co-ordinator</h1>
        <div className="staff-container">
          {staffMembers.map((staff, index) => (
            <div key={index} className="staff-card">
              <img src={staff.image} alt={staff.name} className="staff-img" />
              <h3 className="staff-name">{staff.name}</h3>
              <p><i className="fa-solid fa-phone"></i> {staff.mobile}</p>
              <p><i className="fa-solid fa-envelope"></i> <a href={`mailto:${staff.email}`} >{staff.email}</a></p>
            </div>
          ))}
        </div>
      </div>

      <div className='cont-item'>
        <h1 className='cont-head'>Student Co-ordinator</h1>
        <div className="staff-container">
          {staffMembers.map((staff, index) => (
            <div key={index} className="staff-card">
              <img src={staff.image} alt={staff.name} className="staff-img" />
              <h3 className="staff-name">{staff.name}</h3>
              <p><i className="fa-solid fa-phone"></i> {staff.mobile}</p>
              <p> <a href={`mailto:${staff.email}`} > <i className="fa-solid fa-envelope"></i>{staff.email}</a></p>
            </div>
          ))}
        </div>
      </div>
       <div className='contact-us' >
      <div className="connect-section">
                <h2>CONNECT</h2>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?..."
                        width="100%"
                        height="200"
                        allowFullScreen=""
                        loading="lazy" alt=""
                    />
                </div>
                <div className="contact-info">
                    <h3>General Inquiries :</h3>
                    <div className='contact-info-org'><p>Sakthikumar P </p><p>+91 95666 74323</p></div>
                    <div className='contact-info-org'><p>Virat Kohli </p><p>+91 9555 74323</p></div>
                   
                </div>
            </div>
            <div className="contact-form-section">
                <h2>CONTACT US</h2>
                <div className="toggle-buttons">
                    {/* <button className="active">Query</button>
                    <button>Collaborate</button> */}
                </div>
                <form>
                <div class="input-container">
                      <i class="fas fa-user"></i>
                      <input type="text" placeholder="Name" />
                  </div>

                  <div class="input-container">
                      <i class="fas fa-phone"></i>
                      <input type="text" placeholder="Mobile" />
                  </div>

                  <div class="input-container">
                      <i class="fas fa-envelope"></i>
                      <input type="email" placeholder="Email" />
                  </div>

                  <div class="input-container">
                      <i class="fas fa-comment-dots"></i>
                      <textarea placeholder="Your Message"></textarea>
                  </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            </div>
    </div>
  );
}

export default Contact;
