import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import social media icons
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
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
