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
          I'm <b>Ayush Soni</b>, from <b>Dewas</b>. I come from a supportive family—my father, <b>Yogesh Soni</b>, works in a private company, and my mother, <b>Arti Soni</b>, is a teacher.
          <br /><br />
          Currently, I'm pursuing a <b>B.Tech in Computer Science Engineering</b> at <b>Mahakal Institute of Technology</b>. I have a strong interest in <b>software development, backend engineering, and problem-solving</b>. Apart from coding, I love <b>hitting the gym, listening to music, and watching movies</b>.
          <br /><br />
          I’m always up for <b>learning new things and challenging myself</b>. My goal is to <b>land a high-paying tech job and build something impactful</b>.
          <br /><br />
          Excited to see where this journey takes me! 🚀
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