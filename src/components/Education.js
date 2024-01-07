// src/components/Education.js
import React, { useState } from 'react';
import './Education.css'; // Import the CSS file
import Certifications from './Certifications';
import AnimatedWrapper from './AnimatedWrapper';

const Education = () => {
  const [selectedDegree, setSelectedDegree] = useState(null);

  const educationDetails = [
    {
      degree: 'BSc',
      subject: 'Mathematics',
      university: 'Jagannath Barooah College',
      address: 'Jorhat,Assam',
      duration: '2018 – 2021',
    },
    {
      degree: 'HSLC',
      subject: 'Science',
      address: 'Jorhat,Assam',
      university: 'Crescent Academy',
    }
  ];

  const handleDegreeClick = (index) => {
    setSelectedDegree(selectedDegree === index ? null : index);
  };

  return (
    <AnimatedWrapper>
      <div>
        <div className="education-header">
          <div className="image-container">
            <img src="/images/Education.jpg" alt="Education" className="education-image" />
          </div>
          <div className="experience-title">
            <h1>Education</h1>
            <p>I hold a BSc Degree from J.B college, Jorhat,Assam , with a noteworthy achievement of 64.6%. Prior to this, I completed a HSLC in science from Crescent Academy, Jorhat, Assam, securing a percentage of 71.8%.<br />
              <br />
              Certified by Almabetter, I've solidified my web development skills. These certifications uniquely position me to tackle the challenges of full-stack web development with confidence and expertise.</p>
          </div>
        </div>
        <div className="education-container">
          <h1>Degrees Received</h1>
          {educationDetails.map((item, index) => (
            <div
              className={`education-item ${selectedDegree === index ? 'selected' : ''}`}
              key={index}
              onClick={() => handleDegreeClick(index)}
            >
              <h2>{item.degree}</h2>
              <div className="details">
                <p className="university">{item.university}</p>
                <p className="address">{item.address}</p>
                <p className="duration">{item.duration}</p>
                {item.percentage && <p className="percentage">{item.percentage}</p>}
                {selectedDegree === index && (
                  <p className="full-form">{item.subject}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* <Certifications /> */}
      </div>
    </AnimatedWrapper>
  );
};

export default Education;
