"use client"

import { useState } from "react"
import { Link } from "react-scroll"
import logo from "../../assets/SprtLogo.png"
import "./NavbarStyle.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { id: "home", name: "Home" },
    { id: "timeline", name: "Timeline" },
    { id: "domain", name: "Domains" },
    { id: "rules", name: "Rules" },
    { id: "prize", name: "Prize" },
    { id: "sponsors", name: "Sponsors" },
    { id: "contact", name: "Contact" },
  ]

  return (
    <header className="navbar">
      {/* Brand/Logo */}
      <div className="brand">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Navigation Links */}
      <nav className={`nav-list ${menuOpen ? "active" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                offset={-100}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  )
}

export default Navbar
