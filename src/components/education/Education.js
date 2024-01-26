// src/components/Education.js
import React, { useState } from 'react';
import './Education.css'; // Import the CSS file
import AnimatedWrapper from '../animatedWrapper/AnimatedWrapper';

const Education = () => {
  const [selectedDegree, setSelectedDegree] = useState(null);

  const educationDetails = [
    {
      degree: 'BSc',
      subject: 'Mathematics',
      institute: 'Jagannath Barooah College',
      address: 'Jorhat,Assam',
      duration: '2018 – 2021',
      percentage: '64.6%'
    },
    {
      degree: 'HS',
      subject: 'Science',
      address: 'Jorhat,Assam',
      institute: 'Crescent Academy',
      percentage: '71.8%'
    },
    {
      degree: 'HSLC',
      subject: null,
      address: 'Jorhat,Assam',
      institute: 'Royal Oak High School',
      percentage: '80%'
    },
    {
      degree: 'Web Development',
      subject: "Full Stack Developer (MERN)",
      address: 'Online',
      institute: 'Alma Better',
      duration: '2023-present',
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
            <p>I hold a BSc Degree from J.B college, Jorhat,Assam. Prior to this, I completed a HSLC in science from Crescent Academy, Jorhat, Assam.<br />
              <br />
              Doing Certification course by Almabetter, I've solidified my web development skills. These uniquely position me to tackle the challenges of full-stack web development with confidence and expertise.</p>
          </div>
        </div>
        <div className="education-container">
          <h1>Education Details</h1>
          {educationDetails.map((item, index) => (
            <div
              className={`education-item ${selectedDegree === index ? 'selected' : ''}`}
              key={index}
              onClick={() => handleDegreeClick(index)}
            >
              <h2>{item.degree}</h2>
              <div className="details">
                <p className="university">{item.institute} {item?.duration && <i>({item?.duration})</i>}</p>
                <p className="address">{item.address}</p>
                {item.percentage && <p className="percentage">{item.percentage}</p>}
                {selectedDegree === index && (
                  <p className="full-form">{item?.subject}</p>
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
