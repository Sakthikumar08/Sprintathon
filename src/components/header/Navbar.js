import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className={`nav-list ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/domain" onClick={() => setMenuOpen(false)}>Domain</Link>
          </li>
          <li>
            <Link to="/prize" onClick={() => setMenuOpen(false)}>Prize</Link>
          </li>
          <li>
            <Link to="/sponsors" onClick={() => setMenuOpen(false)}>Sponsors</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link to="/rules" onClick={() => setMenuOpen(false)}>Rules</Link>
          </li>
          <li>
            <Link to="/ourteam" onClick={() => setMenuOpen(false)}>Our Team</Link>
          </li>
        </ul>
      </nav>

      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Navbar;
