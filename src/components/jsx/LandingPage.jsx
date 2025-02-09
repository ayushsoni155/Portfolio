import React from "react";
import "../css/LandingPage.css";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();
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
        <p>Building Scalable and Interactive Web Applications.</p>
        
        {/* "About Me" Button */}
        <button className="aboutMeBtn" onClick={() => navigate("/About")}>
      More about Me
    </button>

      </div>
          </div>

  );
}
