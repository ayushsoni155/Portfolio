import React from "react";
import "../css/About.css";
import { FaGraduationCap, FaDumbbell, FaCode, FaMusic, FaFilm } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      {/* Profile Section */}
      <div className="profile-card">
        <img src="./ayushImg.jpg" alt="Profile" className="profile-img" />
        <h2 id="mainName">Ayush Soni</h2>
        <p>
          I’m Ayush Soni, a <b>B.Tech student in Computer Science Engineering</b> at Mahakal Institute of Technology, Ujjain. I’m from Dewas and love <b>building software, working on backend systems, and solving problems</b>. I’ve learned a lot from my studies and projects, and I’m good at <b>coding and finding smart solutions</b>.
          <br /><br />
          I want to work at a great company where I can use my skills to do <b>important work</b>. I’m hardworking, quick to learn, and ready to take on challenges. In my free time, I like going to the gym, listening to music, and watching movies.
          <br /><br />
          My goal is to get a <b>well-paying tech job</b> and grow into a strong professional.
        </p>
      </div>

      <div id="temp">
        {/* Education Section */}
        <div className="education">
          <h2><FaGraduationCap className="section-icon" /> Education</h2>
          <div className="edu-item">
            <h3>B.Tech in Computer Science and Engineering</h3>
            <p>Mahakal Institute of Technology, Ujjain (M.P)<br />2022 - 2026</p>
          </div>
          <div className="edu-item">
            <h3>Higher Secondary (M.P. Board)</h3>
            <p>Padmaja Higher Secondary School, Dewas (M.P)<br />2021 - 2022 (PCM)</p>
          </div>
          <div className="edu-item">
            <h3>Secondary (M.P. Board)</h3>
            <p>Morning Star School, Dewas (M.P)<br />2019 - 2020</p>
          </div>
        </div> 

        {/* Hobbies Section */}
        <div className="hobbies">
          <h2>Hobbies</h2>
          <div className="hobby-list">
            <div className="hobby-item gym"><FaDumbbell /> Gym Training</div>
            <div className="hobby-item coding"><FaCode /> Coding & Development</div>
            <div className="hobby-item music"><FaMusic /> Listening to Music</div>
            <div className="hobby-item movie"><FaFilm /> Watching Movies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;