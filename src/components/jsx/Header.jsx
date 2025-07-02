import React, { useState, useEffect } from "react";
import "../css/Header.css";
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector("header").classList.add("scrolled");
      } else {
        document.querySelector("header").classList.remove("scrolled");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth <= 768;
      setIsSmallScreen(smallScreen);
      if (!smallScreen) setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <div className="admin-navbar">
        {/* Logo */}
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src="/Logo.png" alt="Ayush Soni" className="logo-image" />
          </Link>
        </div>

        {/* Menu Icon for Small Screens */}
        {isSmallScreen && (
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}

        {/* Desktop Navigation */}
        {!isSmallScreen && (
          <nav className="desktop-nav">
            <ul>
              <li><Link to="/" onClick={handleLinkClick}><FaHome className="nav-icon" /> Home</Link></li>
              <li><Link to="/About" onClick={handleLinkClick}><FaUser className="nav-icon" /> About</Link></li>
              <li><Link to="/Skills" onClick={handleLinkClick}><FaCode className="nav-icon" /> Skills</Link></li>
              <li><Link to="/Project" onClick={handleLinkClick}><FaProjectDiagram className="nav-icon" /> Projects</Link></li>
              <li><Link to="/Contact" onClick={handleLinkClick}><FaEnvelope className="nav-icon" /> Contacts</Link></li>
              <li><Link to="https://drive.google.com/file/d/1jflOScOx8lhOwOWP_4BMVyJd-AMAd9cW/view?usp=drive_link" onClick={handleLinkClick}><FaFileAlt className="nav-icon" /> CV</Link></li>
            </ul>
          </nav>
        )}

        {/* Side Navigation for Small Screens */}
        {isSmallScreen && (
          <nav className={`side-nav ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li><Link to="/" onClick={handleLinkClick}><FaHome className="nav-icon" /> Home</Link></li>
              <li><Link to="/About" onClick={handleLinkClick}><FaUser className="nav-icon" /> About</Link></li>
              <li><Link to="/Skills" onClick={handleLinkClick}><FaCode className="nav-icon" /> Skills</Link></li>
              <li><Link to="/Project" onClick={handleLinkClick}><FaProjectDiagram className="nav-icon" /> Projects</Link></li>
              <li><Link to="/Contact" onClick={handleLinkClick}><FaEnvelope className="nav-icon" /> Contacts</Link></li>
              <li><Link to="https://drive.google.com/file/d/1jflOScOx8lhOwOWP_4BMVyJd-AMAd9cW/view?usp=drive_link" onClick={handleLinkClick}><FaFileAlt className="nav-icon" /> CV</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
