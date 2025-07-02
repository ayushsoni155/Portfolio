import React from "react";
import "../css/Project.css";
import { FaExternalLinkAlt, FaCertificate, FaAward } from "react-icons/fa";

const projects = [
  {
    "title": "SkillSyncAI - Placement Preparation App",
    "description": "A smart quiz platform for students to test their knowledge, practice skills, and track progress, featuring a self-made machine learning model that predicts placement probability based on performance.",
    "image": "skillsyncaiSS.png",
    "link": "https://skillsyncai.vercel.app/",
    "technologies": ["HTML","CSS","React","Java - SpringBoot","Node.js","Flask","Python","ML Model","AI APIs","MySQL","Vercel","Render"]
  },
  {
    title: "ByteWise - Student Portal",
    description: "An eCommerce platform for engineering students to access subject notes, buy practical files, and explore free courses with a seamless user experience.",
    image: "bytewiseSS.png",
    link: "https://bytewise24.vercel.app/",
    technologies: ["React", "Express.js", "CSS", "HTML", "MySQL", "Razorpay", "AWS RDS", "Vercel"],
  },
  {
    title: "ByteWise - Admin Panel",
    description: "An admin dashboard for managing students, orders, products, and courses on the ByteWise eCommerce platform, providing an intuitive interface for administrators.",
    image: "adminBytewiseSS.png",
    link: "https://admin-bytewise24.vercel.app/",
    technologies: ["React", "Express.js", "CSS", "HTML", "MySQL", "Razorpay", "AWS RDS", "Vercel"],
  },
  {
    title: "Weather Forecast App",
    description: "A weather forecasting application that provides real-time weather updates, including temperature, humidity, and wind speed, using OpenWeatherMap API.",
    image: "Weather-forcastSS.png",
    link: "https://weather-forcast-murex.vercel.app/",
    technologies: ["React", "OpenWeatherMap API", "CSS", "HTML", "Vercel"],
  },
];

const certificates = [
  { title: "Fundamentals of C and C++ Programming", image: "c&cpp.jpg", link: "https://drive.google.com/file/d/1w2qXvhIbYmlWT1rsJLWPOhHIkgwstpMg/view?usp=drive_link" },
  { title: "Web Components Development using Servlets and JSP", image: "java.png", link: "https://drive.google.com/file/d/1A6OKpR-Hyi47Tts90GCZrXFbfmPVpG1X/view?usp=sharing" },
  { title: "JavaScript - Beginners to Advanced", image: "javascript.png", link: "https://drive.google.com/file/d/1ad8dDtqb61C9PvvWV9hnl6W4INqHm9gh/view?usp=sharing" },
  { title: "Web Designing using HTML5, CSS3, and Bootstrap", image: "webD.png", link: "https://drive.google.com/file/d/1BLsZHV2TAGpL-35kB-ZOr1MuEoI61M7q/view?usp=sharing" },
  { title: "Data Science Workshop and Hands-on", image: "datascience.jpg", link: "https://drive.google.com/file/d/1vp0r-n-rDzBGZdi2IGlSfBvBHbfRDY2e/view?usp=sharing" },
  { title: "Google Cloud Arcade Facilitator Program", image: "gcsb.png", link: "https://drive.google.com/file/d/1jOfg4OOulBLO9EOoMetIymObFzhqyLcC/view?usp=drive_link" } 
  { title: "Machine Learning Workshop and Hands-on", image: "ml.jpg", link: "https://drive.google.com/file/d/1jWaSVorhwz6RsfIPeKgnSKIKBHHeohJV/view?usp=sharing" }
{ title: "ProjectExpo 4.0 1st Price", image: "expo.jpg", link: "https://drive.google.com/file/d/1jTXJusBrRDsePeQ26ijTN0zy7MBQ8Hl5/view?usp=sharing" }
];

const offers = [
  { title: "Internship Offer - Backbenchers Technologies", image: "OfferLetter.jpg", link: "https://drive.google.com/file/d/1vlbKlg4CqueOU1MPlkdR1JOMzDFftn6U/view?usp=sharing" },
];

const getTechColor = (tech) => {
  const colors = {
    "React": "#61DBFB",
    "Express.js": "#000000",
    "MySQL": "#00758F",
    "Razorpay": "#0645AD",
    "AWS RDS": "#FF9900",
    "Vercel": "#000000",
    "Java": "#F89820",
    "OpenWeatherMap API": "#FF4500",
    "CSS": "#1572B6",
    "JavaScript": "#F7DF1E",
    "HTML": "#E34F26",
    "Java - SpringBoot": "#6DB33F",  // SpringBoot’s official green
    "Node.js": "#3C873A",           // Node.js’s dark green
    "Flask": "#00A98F",             // Teal, modern and clean for Flask
    "Python": "#306998",            // Python’s blue from its logo
    "ML Model": "#8A2BE2",          // Vibrant purple for custom ML work
    "AI APIs": "#FF6347",           // Tomato red, bold for AI
    "Render": "#46E3B7"             // Bright cyan, matches Render’s modern vibe
  };
  return colors[tech] || "#888888";
};

const Project = () => {
  return (
    <div className="project-container">
      <h2><FaExternalLinkAlt className="section-icon" /> Projects</h2>
      <div className="grid-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} data-src={project.image} loading="lazy" alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-badge" style={{ backgroundColor: getTechColor(tech) }}>
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project <FaExternalLinkAlt className="link-icon" />
            </a>
          </div>
        ))}
      </div>

      <h2><FaCertificate className="section-icon" /> Certificates</h2>
      <div className="grid-container">
        {certificates.map((cert, index) => (
          <div className="card" key={index}>
            <img src={cert.image} data-src={cert.image} loading="lazy" alt={cert.title} />
            <h3>{cert.title}</h3>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate <FaExternalLinkAlt className="link-icon" />
            </a>
          </div>
        ))}
      </div>

      <h2><FaAward className="section-icon" /> Offer Letters</h2>
      <div className="grid-container">
        {offers.map((offer, index) => (
          <div className="card offer-card" key={index}>
            <img src={offer.image} data-src={offer.image} loading="lazy" alt={offer.title} />
            <h3>{offer.title}</h3>
            <a href={offer.link} target="_blank" rel="noopener noreferrer">
              View Offer <FaExternalLinkAlt className="link-icon" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
