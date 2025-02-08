import React from "react";
import { FaGithub, FaInstagram, FaLinkedin,FaEnvelope } from "react-icons/fa"; // Import social icons
import "../css/Footer.css"; // Import CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <p className="fadeIn">Designed & Developed by <span className="FooterName">Ayush Soni</span></p>

        {/* Social Media Icons */}
        <div className="footerIcons fadeIn">
          <a href="https://github.com/ayushsoni155" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ayush-soni-9b2583239" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:ayushsoni6997@gmail.com">
    <FaEnvelope />  {/* Email Icon */}
  </a>
          <a href="https://www.instagram.com/ayushsoni.155" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright Section */}
        <p className="fadeIn">&copy; {new Date().getFullYear()} Ayush Soni. | All Rights Reserved.</p>
      </div>
    </footer>
  );
}
