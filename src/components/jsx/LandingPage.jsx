import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons
import "../css/LandingPage.css"; // Importing the CSS file

export default function LandingPage() {
  return (
    <div className="landingPageContainer">
      {/* Irregular Shape with Image */}
      <div className="shapeContainer">
        <div className="irregularShape">
          <img src="/myimg.png" alt="Ayush" className="profileImage" />
        </div>
      </div>

      {/* Text Section */}
      <div className="landingText">
        <h2>Welcome to <span id="portred">My Portfolio</span></h2>
        <p>Myself <span>Ayush Soni</span></p>

        {/* Social Media Icons */}
        <div className="socialIcons">
          <a href="https://github.com/ayushsoni155" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ayush-soni-9b2583239" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/ayushsoni.155" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
