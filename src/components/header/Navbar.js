import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="brand">
        <h1>
          <span>INN</span>VENIOX
        </h1>
      </div> 
      
      <nav className={`nav-list ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
              Domain
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
              Sponsors
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} onClick={() => setMenuOpen(false)}>
              Rules
            </Link>
          </li>
        </ul>
      </nav>

      <button className="btn">Register</button>

      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Navbar;
