// src/components/Certifications.js
import React, { useState } from 'react';
import './Certifications.css'; // Import the CSS file

const certificationsData = [
  {
    name: '',
    googleDriveLink: '',
    details: '',
  }
];

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);

  const handleCertificationClick = (index) => {
    const certification = certificationsData[index];
    window.open(certification.googleDriveLink, '_blank');
  };

  return (
    <div className="certifications-container">
      <h1>Certifications</h1>
      <div className="certification-list">
        {certificationsData.map((certification, index) => (
          <div
            className={`certification-item ${selectedCertification === index ? 'selected' : ''}`}
            key={index}
            onClick={() => handleCertificationClick(index)}
          >
            <h2>{certification.name}</h2>
          </div>
        ))}
      </div>
      {selectedCertification !== null && (
        <div className="certification-details">
          <p>{certificationsData[selectedCertification].details}</p>
        </div>
      )}
    </div>
  );
};

export default Certifications;
