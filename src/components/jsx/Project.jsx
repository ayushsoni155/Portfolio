import React from "react";
import "../css/Project.css";

const projects = [
    {
        title: "ByteWise - Student Portal",
        description: "An eCommerce platform for engineering students to access subject notes, buy practical files, and explore free courses with a seamless user experience.",
        image: "bytewiseSS.png",
        link: "https://bytewise24.vercel.app/",
        technologies: ["React", "Express.js", "MySQL", "Razorpay", "AWS RDS", "Vercel"]
    },
    {
        title: "ByteWise - Admin Panel",
        description: "An admin dashboard for managing students, orders, products, and courses on the ByteWise eCommerce platform, providing an intuitive interface for administrators.",
        image: "adminBytewiseSS.png",
        link: "https://admin-bytewise24.vercel.app/",
        technologies: ["React", "Express.js", "MySQL", "Razorpay", "AWS RDS", "Vercel"]
    },
    {
        title: "EmoChat - AI Chat App",
        description: "An AI-powered real-time chat application that detects user emotions via the front camera and dynamically changes the chat background based on mood.",
        image: "emochat.png",
        link: "#",
        technologies: ["React", "Java", "WebRTC", "AI", "Socket.io", "MySQL"]
    },
    {
        title: "Weather Forecast App",
        description: "A weather forecasting application that provides real-time weather updates, including temperature, humidity, and wind speed, using OpenWeatherMap API.",
        image: "weather-forcast.png",
        link: "https://weather-forcast-murex.vercel.app/",
        technologies: ["React", "OpenWeatherMap API", "CSS", "JavaScript"]
    }
];

const certificates = [
    { title: "Fundamentals of C and C++ Programming", image: "c&cpp.jpg", link: "https://drive.google.com/file/d/1w2qXvhIbYmlWT1rsJLWPOhHIkgwstpMg/view?usp=drive_link" },
    { title: "Web Components Development using Servlets and JSP", image: "java.png", link: "https://drive.google.com/file/d/1A6OKpR-Hyi47Tts90GCZrXFbfmPVpG1X/view?usp=sharing" },
    { title: "JavaScript - Beginners to Advanced", image: "javascript.png", link: "https://drive.google.com/file/d/1ad8dDtqb61C9PvvWV9hnl6W4INqHm9gh/view?usp=sharing" },
    { title: "Web Designing using HTML5, CSS3, and Bootstrap", image: "webD.png", link: "https://drive.google.com/file/d/1BLsZHV2TAGpL-35kB-ZOr1MuEoI61M7q/view?usp=sharing" },
    { title: "Data Science Workshop and Hands-on", image: "datascience.jpg", link: "https://drive.google.com/file/d/1vp0r-n-rDzBGZdi2IGlSfBvBHbfRDY2e/view?usp=sharing" }
];

const offers = [
    { title: "Internship Offer - Backbenchers technologies", image: "OfferLetter.jpg", link: "https://drive.google.com/file/d/1vlbKlg4CqueOU1MPlkdR1JOMzDFftn6U/view?usp=sharing" }
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
        "WebRTC": "#D04A02",
        "AI": "#FFD700",
        "Socket.io": "#010101",
        "OpenWeatherMap API": "#FF4500",
        "CSS": "#1572B6",
        "JavaScript": "#F7DF1E"
    };
    return colors[tech] || "#888888";
};

const Project = () => {
    return (
        <div className="project-container">
            <h2>Projects</h2>
            <div className="grid-container">
                {projects.map((project, index) => (
                    <div className="card" key={index}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="tech-badge" style={{ backgroundColor: getTechColor(tech) }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>

            <br />
            <h2>Certificates</h2>
            <div className="grid-container">
                {certificates.map((cert, index) => (
                    <div className="card" key={index}>
                        <img src={cert.image} alt={cert.title} />
                        <h3>{cert.title}</h3>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
                    </div>
                ))}
            </div>

            <br />
            <h2>Offer Letters</h2>
            <div className="grid-container">
                {offers.map((offer, index) => (
                    <div className="card offer-card" key={index}>
                        <img src={offer.image} alt={offer.title} />
                        <h3>{offer.title}</h3>
                        <a href={offer.link} target="_blank" rel="noopener noreferrer">View Offer</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
