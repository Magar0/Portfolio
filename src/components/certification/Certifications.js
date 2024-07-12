// src/components/Certifications.js
import React, { useState } from 'react';
import './Certifications.css'; // Import the CSS file

const Certifications = () => {

    return (
        <div className="certifications-container">
            <h1>Certifications</h1>
            <div className='img-container'>
                <img src="/images/nullclass.png" alt="pic" />
                <img src="/images/AlmaBetter.png" alt="pic" />
            </div>
        </div>
    );
};

export default Certifications;
