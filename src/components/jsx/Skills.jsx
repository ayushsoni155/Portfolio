import React from "react";
import "../css/Skills.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaJava, FaDatabase, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiExpress, SiC, SiCplusplus } from "react-icons/si";
import { MdLightbulb, MdPeople, MdAccessTime, MdAutorenew, MdChat } from "react-icons/md";

const skillsData = [
  { icon: <SiC />, color: "#A8B9CC", orbit: 1, name: "C" },
  { icon: <SiCplusplus />, color: "#00599C", orbit: 1, name: "C++" },
  { icon: <FaHtml5 />, color: "#E34F26", orbit: 2, name: "HTML" },
  { icon: <FaCss3Alt />, color: "#1572B6", orbit: 2, name: "CSS" },
  { icon: <FaBootstrap />, color: "#7952B3", orbit: 2, name: "Bootstrap" },
  { icon: <FaJs />, color: "#F7DF1E", orbit: 2, name: "JavaScript" },
  { icon: <FaReact />, color: "#61DAFB", orbit: 3, name: "React" },
  { icon: <SiExpress />, color: "#222222", orbit: 3, name: "Express" },
  { icon: <FaNodeJs />, color: "#8CC84B", orbit: 3, name: "Node.js" },
  { icon: <FaJava />, color: "#F89820", orbit: 3, name: "Java" },
  { icon: <SiMysql />, color: "#4479A1", orbit: 3, name: "MySQL" },
  { icon: <FaDatabase />, color: "#4B8BBE", orbit: 3, name: "DBMS" },
];

const softSkills = [
  { icon: <MdLightbulb />, color: "#FFD700", name: "Problem-Solving" },
  { icon: <MdPeople />, color: "#008080", name: "Teamwork" },
  { icon: <MdChat />, color: "#FF5733", name: "Communication" },
  { icon: <MdAccessTime />, color: "#6A0DAD", name: "Time Management" },
  { icon: <MdAutorenew />, color: "#228B22", name: "Adaptability" },
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
          transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
          top: "50%",
          left: "50%",
        }}
      >
        {skill.icon}
        <span className="skill-tooltip">{skill.name}</span>
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
          <div className="orbit orbit-1">{getOrbitElements(1, 80)}</div>
          <div className="orbit orbit-2">{getOrbitElements(2, 120)}</div>
          <div className="orbit orbit-3">{getOrbitElements(3, 160)}</div>
        </div>
      </div>
      <div className="sectionSkillText">
        <div className="skills-text">
          <h2 className="skills-heading">Technical Skills</h2>
          <p className="skills-description">Technologies and tools I’ve mastered.</p>
          <div className="skills-list">
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-item" style={{ backgroundColor: skill.color }}>
                {skill.icon} {skill.name}
              </div>
            ))}
          </div>
        </div>
        <div className="skills-text">
          <h2 className="skills-heading">Soft Skills</h2>
          <p className="skills-description">Interpersonal and professional strengths.</p>
          <div className="skills-list">
            {softSkills.map((skill, index) => (
              <div key={index} className="skill-item" style={{ backgroundColor: skill.color }}>
                {skill.icon} {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;