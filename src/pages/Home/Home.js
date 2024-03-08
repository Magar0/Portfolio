// src/components/Home.js
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { IoLogoVercel } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';

import WhatIDo from '../../components/whatIDo/WhatIDo.js';
import './Home.css';

const Home = () => {

  return (
    <div className={`home-container`}>
      <div className="intro-big-image-container move-animation">
        {/* Intro Section */}
        <div className="intro-container">
          <h1 className="name-title">Rakesh Magar</h1>
          <h3 className="web-developer-title">Full Stack Developer (MERN Stack)</h3>
          <p>Hi, Welcome to my portfolio! I am a proficient Full Stack Developer specializing in the MERN stack, dedicated to delivering high-performance and responsive web applications. I am committed to continuous learning and growth, eager to leverage my technical skills and creative problem-solving abilities to drive the success of the projects I am involved in.
            <span>Let's build something amazing together!</span></p>

          {/* social media links with icons */}
          <div className="social-links">
            <Tooltip title="Linkedin" placement="top-end">
              <a href="https://www.linkedin.com/in/magar0/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} color="#2867B2" />
              </a>
            </Tooltip>
            <Tooltip title="GitHub" placement="top-end">
              <a href="https://github.com/Magar0" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} color="#211F1F" />
              </a>
            </Tooltip>
            <Tooltip title="Vercel" placement="top-end">
              <a href="https://vercel.com/rakesh-magars-projects" target="_blank" rel="noopener noreferrer">
                <IoLogoVercel size={40} color="#211F1F" />
              </a>
            </Tooltip>
            <Tooltip title="Email" placement="top-end">
              <a href="mailto:rakeshmagar0@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={40} color="#D44638" />
              </a>
            </Tooltip>
          </div>
          <div className="bigBtn">
            {/* GitHub Star button */}
            <a href="https://flowcv.com/resume/f92ik9q28t" target="_blank" className="resume-button">
              My Resume
            </a>
          </div>
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
