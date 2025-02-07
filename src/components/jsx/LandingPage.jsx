import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../css/LandingPage.css";

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
        <h2>
          Hello, I'm <span id="portred">Ayush Soni</span>
        </h2>
        <p>
  A Passionate <span className="highlight">Full-Stack Developer</span> Crafting Digital Experiences.
</p>
<p>
  Building Scalable and Interactive Web Applications.
</p>


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
