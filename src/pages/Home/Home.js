// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
import WhatIDo from '../../components/whatIDo/WhatIDo.js';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`home-container ${isVisible ? 'fade-in' : ''}`}>
      <div className="intro-big-image-container move-animation">
        {/* Intro Section */}
        <div className="intro-container">
          <h1 className="name-title">Rakesh Magar</h1>
          <h3 className="web-developer-title">Full Stack Developer (MERN Stack)</h3>
          <p>Hi, Welcome to my portfolio! I am a proficient Full Stack Developer specializing in the MERN stack, dedicated to delivering high-performance and responsive web applications. I am committed to continuous learning and growth, eager to leverage my technical skills and creative problem-solving abilities to drive the success of the projects I am involved in.
            <span>Let's build something amazing together!</span></p>

          {/* social media links with icons */}
          <div className="social-links">
            <a href="https://www.linkedin.com/in/magar0/" target="_blank" rel="noopener noreferrer" title="Linkedin">
              <FaLinkedin size={40} color="#2867B2" />
            </a>
            <a href="https://github.com/Magar0" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub size={40} color="#211F1F" />
            </a>
            <a href="mailto:rakeshmagar0@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
              <FaEnvelope size={40} color="#D44638" />
            </a>
          </div>

          {/* GitHub Star button */}
          <a href="https://github.com/Magar0" target="_blank" rel="noopener noreferrer" className="star-button">
            <span className="star-symbol">&#9733;</span> Star Me On Github
          </a>
        </div>

        {/* Big Image Section */}
        <div className="big-image-container">
          <img src="/images/image1.jpg" alt="Big Image" />
        </div>
      </div>

      <WhatIDo />
    </div>
  );
};

export default Home;
