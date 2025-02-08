import React, { useState, useEffect } from "react";
import "../css/Header.css"; // Importing the CSS file
import { FaBars } from "react-icons/fa"; // Importing the Font Awesome icon
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  // Detect screen size change
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Close menu on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle the side navigation menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu and scroll to top when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return (
    <header>
      <div className="admin-navbar">
        {/* Logo
        <div className="logo">
          <h2>My Website</h2>
        </div> */}

        {/* Small screen: Menu icon */}
        {isSmallScreen && (
          <div className={isMenuOpen?"menu-iconOpen":"menu-icon"} onClick={toggleMenu}>
            {isMenuOpen?"X":<FaBars />}
          </div>
        )}

        {/* Large screen: Normal Navbar */}
        {!isSmallScreen && (
          <nav className="desktop-nav">
            <ul>
              <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/About" onClick={handleLinkClick}>About</Link></li>
              <li><Link to="/Skills" onClick={handleLinkClick}>Skills</Link></li>
              <li><Link to="/User" onClick={handleLinkClick}>Projects</Link></li>
              <li><Link to="/Feedback" onClick={handleLinkClick}>Contacts</Link></li>
              <li><Link to="/Product" onClick={handleLinkClick}>CV</Link></li>
            </ul>
          </nav>
        )}

        {/* Small screen: Side Navbar */}
        {isSmallScreen && (
          <nav className={`side-nav ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/About" onClick={handleLinkClick}>About</Link></li>
              <li><Link to="/Skills" onClick={handleLinkClick}>Skills</Link></li>
              <li><Link to="/User" onClick={handleLinkClick}>Projects</Link></li>
              <li><Link to="/Feedback" onClick={handleLinkClick}>Contacts</Link></li>
              <li><Link to="/Product" onClick={handleLinkClick}>CV</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
