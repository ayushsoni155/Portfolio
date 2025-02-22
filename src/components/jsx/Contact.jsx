import React from "react";
import "../css/Contact.css";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const contactDetails = [
    { icon: <FaEnvelope />, label: "Email", value: "ayushsoni6997@gmail.com", link: "mailto:ayushsoni6997@gmail.com" },
    { icon: <FaPhone />, label: "Phone", value: "+91 6266898048", link: "tel:+917869686997" },
    { icon: <FaGithub />, label: "GitHub", value: "ayushsoni155", link: "https://github.com/ayushsoni155" },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "Ayush Soni", link: "https://linkedin.com/in/ayush-soni-9b2583239" },
    { icon: <FaInstagram />, label: "Instagram", value: "@ayushsoni.155", link: "https://www.instagram.com/ayushsoni.155" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Dewas, Madhya Pradesh, India", link: "#" },
  ];

  return (
    <section className="contact-container">
      <h2 className="contact-heading">
        <FaEnvelope className="heading-icon" /> Say Hello!
      </h2>
      <p className="contact-description">
        Drop me a line through these gentle waves—I’d love to chat!
      </p>
      <div className="contact-grid">
        {contactDetails.map((detail, index) => (
          <div className="contact-card" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="contact-icon">{detail.icon}</div>
            <h3>{detail.label}</h3>
            <p>
              {detail.link.startsWith("#") ? (
                detail.value
              ) : (
                <a href={detail.link} target="_blank" rel="noopener noreferrer">
                  {detail.value}
                </a>
              )}
            </p>
            <div className="wave-effect"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;