import React from "react";
import "../css/Skills.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaJava, FaDatabase, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiExpress, SiC, SiCplusplus } from "react-icons/si";
import { MdLightbulb, MdPeople, MdAccessTime, MdAutorenew, MdChat } from "react-icons/md";


const skillsData = [
  { icon: <SiC />, color: "#A8B9CC", orbit: 1 }, // C
  { icon: <SiCplusplus />, color: "#00599C", orbit: 1 }, // C++
  { icon: <FaHtml5 />, color: "#E34F26", orbit: 2 }, // HTML
  { icon: <FaCss3Alt />, color: "#1572B6", orbit: 2 }, // CSS
  { icon: <FaBootstrap />, color: "#7952B3", orbit: 2 }, // Bootstrap
  { icon: <FaJs />, color: "#F7DF1E", orbit: 2 }, // JavaScript
  { icon: <FaReact />, color: "#61DAFB", orbit: 3 }, // React
  { icon: <SiExpress />, color: "#222222", orbit: 3 }, // Express
  { icon: <FaNodeJs />, color: "#8CC84B", orbit: 3 }, // Node.js
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
        key={index}
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
          <div className="central-circle">Skills</div>
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
          <br />
          <h4 className="skills-description">These are the technologies and tools I have experience with.</h4>
          <br />
          <div className="skills-list">
          <div className="c">C</div>
        <div className="cpp">C++</div>
        <div className="html"><FaHtml5 /> HTML</div>
        <div className="css"><FaCss3Alt /> CSS</div>
        <div className="bootstrap"><FaBootstrap /> Bootstrap</div>
        <div className="js"><FaJs /> JavaScript</div>
        <div className="java"><FaJava /> Java</div>
        <div className="react"><FaReact /> React</div>
        <div className="express"><SiExpress /> Express</div>
        <div className="node"><FaNodeJs /> Node.js</div>
        <div className="mysql"><SiMysql /> MySQL</div>

          </div>
        </div>
        <div className="skills-text">
          <h2 className="skills-heading">Soft Skills</h2>
          <br />
          <h4 className="skills-description">These are my interpersonal and professional skills.</h4>
          <br />
          <div className="skills-list">
          <div className="problem-solving"><MdLightbulb /> Problem-Solving</div>
        <div className="teamwork"><MdPeople /> Teamwork</div>
        <div className="communication"><MdChat /> Communication</div>
        <div className="time-management"><MdAccessTime /> Time Management</div>
        <div className="adaptability"><MdAutorenew /> Adaptability</div>          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
