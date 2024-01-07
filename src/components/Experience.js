// src/components/Experience.js
import React, { useState } from 'react';
import './Experience.css'; // Import the CSS file
import AnimatedWrapper from './AnimatedWrapper';

const Experience = () => {
  const [showInternshipDetails, setShowInternshipDetails] = useState(false);

  const handleInternshipClick = () => {
    setShowInternshipDetails(!showInternshipDetails);
  };

  return (
    <AnimatedWrapper>
      <div className="experience-container">
        <div className="experience-header">
          <div className="image-container">
            <img src="/images/mirror.jpg" alt="Internship" className="experience-image" />
          </div>
          <div className="experience-title">
            <h1>Experience</h1>
            <p>I bring hands-on experience through personal project in MERN satck, HTML, CSS, JavaScript, React JS, Next JS, Node JS, Express JS, etc. <br />
              I have gained, solid foundation in programming, data structures, algorithms, and web design through Alma Better. I am passionate about web development and aspire to become a proficient and creative Full Stack Developer who can deliver high-quality solutions for various domains and industries.
            </p>
          </div>
        </div>

        <div className="internship-container" onClick={handleInternshipClick}>
          <h3>Web Development Trainee</h3>
          {showInternshipDetails && (
            <div className="internship-details">
              <p>
                <strong>Full Stack Development</strong><br />
                Almabetter Online
                <br />
                April 2023 - Present
              </p>
            </div>
          )}
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default Experience;
