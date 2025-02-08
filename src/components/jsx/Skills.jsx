import React from "react";
import "../css/Skills.css";
import {  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaJava, FaDatabase, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiExpress } from "react-icons/si"; 
const skillsData = [
  { icon: 'C', color: "#A8B9CC", orbit: 1 }, // C
  { icon: 'C++', color: "#00599C", orbit: 1 }, // C++
  { icon: <FaHtml5 />, color: "#E34F26", orbit: 2 }, // HTML
  { icon: <FaCss3Alt />, color: "#1572B6", orbit: 2 }, // CSS
  { icon: <FaBootstrap />, color: "#7952B3", orbit: 2 }, // Bootstrap
  { icon: <FaJs />, color: "#F7DF1E", orbit: 2 }, // JavaScript
  { icon: <FaReact />, color: "#61DAFB", orbit: 3 }, // React
  { icon: <SiExpress />, color: "#222222", orbit: 3 }, // Express
  { icon: <FaNodeJs />, color: "#8CC84B", orbit: 3 }, // Node
  { icon: <FaJava />, color: "#F89820", orbit: 3 }, // Java
  { icon: <SiMysql />, color: "#4479A1", orbit: 3 }, // MySQL
  { icon: <FaDatabase />, color: "#4B8BBE", orbit: 3 }, // DBMS
];
const getOrbitElements = (orbit, radius) => {
  const skillsInOrbit = skillsData.filter((skill) => skill.orbit === orbit);
  const angleStep = 360 / skillsInOrbit.length;

  return skillsInOrbit.map((skill, index) => {
    const angle = index * angleStep;
    return (
      <div
        key={skill.name}
        className="skill-circle"
        style={{
          backgroundColor: skill.color,
          transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
        }}
      >
        {skill.icon}
      </div>
    );
  });
};

const Skills = () => {
  return (
    <section className="skills-section">
        
      
      <div className="animSection">
      <div className="skills-container">
        {/* Central Circle */}
        <div className="central-circle">Skills</div>

        {/* Orbit Paths with Rotating Containers */}
        <div className="orbit orbit-1">
          <div className="orbit-container">{getOrbitElements(1, 70)}</div>
        </div>
        <div className="orbit orbit-2">
          <div className="orbit-container">{getOrbitElements(2, 100)}</div>
        </div>
        <div className="orbit orbit-3">
          <div className="orbit-container">{getOrbitElements(3, 130)}</div>
        </div>
      </div>
      </div>
        <div className="sectionSkillText">
      <div className="skills-text">
      <h2 className="skills-heading">Technical Skills</h2>
      <br/>
<h4 className="skills-description">
  These are the technologies and tools I have experience with.
</h4>
<ul className="skills-list">
  <li><b>C, C++</b> - Strong foundation in programming</li>
  <li><b>HTML, CSS, Bootstrap, JavaScript</b> - Frontend development</li>
  <li><b>Java</b> - OOP concepts and backend development</li>
  <li><b>React, Express, Node.js</b> - Full-stack development</li>
  <li><b>MySQL, DBMS</b> - Database management</li>
</ul>
<br/>

<h2 className="skills-heading">Soft Skills</h2>
<br/>
<h4 className="skills-description">
  These are my interpersonal and professional skills.
</h4>
<ul className="skills-list">
  <li><b>Problem-Solving</b> - Ability to analyze and solve complex issues efficiently</li>
  <li><b>Teamwork</b> - Collaborative mindset for effective project execution</li>
  <li><b>Communication</b> - Clear and concise articulation of ideas</li>
  <li><b>Time Management</b> - Efficient handling of multiple tasks and deadlines</li>
  <li><b>Adaptability</b> - Quick learning and flexibility in different environments</li>
</ul>




      </div>
      </div>
    </section>
  );
};

export default Skills;
