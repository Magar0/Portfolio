// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css'; // Import the CSS file
import AnimatedWrapper from './AnimatedWrapper';

const projectsData = [
  {
    name: 'Mobile Ordering App  (Full Stack)',
    description: '',
    duration: '2023',
    technologies: 'Technologies: MERN stack (MongoDB ,Express, React, NodeJS), styled-component',
    githubLink: 'https://github.com/Magar0/MERN-stack-MobileOrderingApplication'
  },
  {
    name: 'My Portfolio Website (FrontEnd)',
    description: 'My Portfolio Website serves as a digital showcase of my skills, projects, and experiences. Explore my journey in technology through a curated collection of projects and discover the diverse range of skills I bring to the table.',
    duration: '2024',
    technologies: 'Technologies: React, HTML, CSS, JavaScript',
    githubLink: '#',
  },

  {
    name: 'Note Taking Rest API (BackEnd)',
    description: 'REST api used for CRUD operation using Mongo DB',
    duration: '2024',
    technologies: 'Technologies: Node.js, MongoDB, Express.js, Jest, supertest',
    githubLink: 'https://github.com/Magar0/CRUD-Api-Node-Js-Express-Js',
  },
  {
    name: 'Car Search (FrontEnd)',
    description: 'Developed a user-friendly web application for searching cars.',
    duration: '2023',
    technologies: 'Technologies: Next JS, Redux, BootStrap',
    githubLink: 'https://github.com/Magar0/Car-search-Next-js',
  },
  {
    name: 'React TaskManagement application (FrontEnd)',
    description: 'Task management app (add,delete,edit, mark complete, due date, etc. features).',
    duration: '2023',
    technologies: 'Technologies: React JS, Tailwind CSS, LocalStorage',
    githubLink: 'https://github.com/Magar0/React-TaskManagement-application',
  },
  // Add more projects as needed
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <AnimatedWrapper>
      <div className="projects-container">
        <div className="projects-header">
          <div className="image-container">
            <img src="/images/project.jpg" alt="project" className="project-image" />
          </div>
          <div className="experience-title">
            <h1>Projects</h1>
            <p>
              Explore my dynamic portfolio featuring projects that seamlessly integrate the latest technologies. Each project reflects a commitment to innovation and user-centric experiences. My best experience is creating Full Stack projects and deploying them to web applications .
              <br />
              <br />
              Discover the seamless fusion of innovation and technology in my portfolio, where each project is a testament to my commitment to pushing the boundaries of what's achievable in the digital landscape.
            </p>
          </div>
        </div>
        <div className="projects-content">
          <div className="project-grid">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className={`project-item ${selectedProject === index ? 'selected' : ''}`}
                onClick={() => handleProjectClick(index)}
              >
                <h3>{project.name}</h3>
                {selectedProject === index && (
                  <div className="project-details">
                    <p>{project.description}</p>
                    <p>{project.duration}</p>
                    <p>{project.technologies}</p>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <a href="https://github.com/Ujwaldevgade" target="_blank" rel="noopener noreferrer" className="more-projects-button">
            More Projects
          </a>
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default Projects;
