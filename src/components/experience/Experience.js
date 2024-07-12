// src/components/Experience.js
import React, { useState } from 'react';
import './Experience.css';
import AnimatedWrapper from '../animatedWrapper/AnimatedWrapper';
import Certifications from '../certification/Certifications';


const Experience = () => {

  const expDetails = [
    {
      course: "Web Development Trainee (MERN Stack)",
      institute: "Almabetter Online",
      startDate: "April 2023",
      endDate: "May 2024",
      url: "https://certificates.almabetter.com/en/profile/rakeshmagar334891",
      skills: ["Established expertise in full-stack programming.", "Hands on experience in Reactjs, Nextjs, Node JS, Express Js, Sql, MongoDB, etc.", "Implemented authentication and data encryption."]
    },
    {
      course: "Web Development Internship",
      institute: "NullCLass Online",
      startDate: "January 22,2024",
      endDate: "February 22,2024",
      url: "https://nullclass.com/wp-content/uploads/2024/02/Rakesh-Magar-1.png",
      skills: ["Hands on experience on MERN stack, payment integration, authentication.", "Made Q&A platform similar to Stack overflow clone."]
    },
    {
      course: "Full Stack Developer (Full Time Intern)",
      institute: "DevTown",
      startDate: "April 2024",
      endDate: "Present",
      // url: "https://nullclass.com/wp-content/uploads/2024/02/Rakesh-Magar-1.png",
      skills: ["Leveraging React, Styled-Components, Antd , contributed to the development of a new Learning Management System (LMS) website."]
    }
  ]
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

        <div className="internship-container">
          {expDetails.map(item => (
            <>
              <div className="internship-details">
                <a href={item.url} className='link-certificate' title='certificate'>
                  <h3>{item.course}</h3>
                  <p>
                    {item.institute}
                    <br />
                    {item.startDate} - {item.endDate}
                  </p>
                  <ul>
                    {
                      item.skills.map((e, ind) => (
                        <li key={ind} >{e}</li>
                      ))
                    }
                  </ul>
                </a>
              </div>
            </>
          ))}
        </div>
        <Certifications />
      </div>
    </AnimatedWrapper>
  );
};

export default Experience;
