// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css'; // Import the CSS file
import AnimatedWrapper from '../animatedWrapper/AnimatedWrapper';
import List from './List';

const projectsData = [
  {
    name: 'Stack Overflow Clone (MERN stack)',
    description: ["Signup & login features.", 'Users can ask ,vote , post and delete questions & answers.', "Edit own profile and change password.", "JWT token used for security.", "Data stored in MongoDB."],
    tags: ["MERN", "React JS", "Node JS", "Express JS", "JWT", "MongoDB"],
    githubLink: 'https://github.com/Magar0/StackOverflow-clone-MERN',
    hostedPageLink: "https://stack-overflow-clone-mern-frontend.vercel.app"
  },
  {
    name: 'Role Based API (Node JS)',
    description: ["Express JS used for making different endpoints.", "Signup and Login for user & admin.", "User can only delete or modify their name.", "Admin can modify/ delete all user details.", "User authentication using JWT.", "Password encrypted.", "Data validated.", "Data stored in MongoDB."],
    tags: ["Node JS", "Express JS", "JWT", "MongoDB", "REST Api"],
    githubLink: 'https://github.com/Magar0/RoleBased-REST-api-using-NodeJs',
    hostedPageLink: "https://role-based-rest-api-using-node-js.vercel.app"
  },
  {
    name: 'Mobile Ordering App  (MERN Stack)',
    description: ['React JS , styled component is used.', "Redux is used to manage state.", "Router is used to navigate different pages.", "Infinte scrolling features added.", "Search and multiple filters are added to find data.", "In the backend Express JS is used to make different endpoints"],
    tags: ['MERN', "MongoDB", "Express JS", "React JS", "NodeJS", "styled-component", "REST Api"],
    githubLink: 'https://github.com/Magar0/MERN-stack-MobileOrderingApplication',
    hostedPageLink: "https://mern-stack-mobile-ordering-application.vercel.app/"
  },

  {
    name: 'Note Taking Rest API (Node JS)',
    description: ['CRUD operation.', "MongoDB database is used", "Data validation and Error habdling done.", "Jest and Supertest is used for testing"],
    tags: ["Node.js", "MongoDB", "Express JS", "Jest", "supertest"],
    githubLink: 'https://github.com/Magar0/CRUD-Api-Node-Js-Express-Js',
    hostedPageLink: "https://crud-api-node-js-express-js.vercel.app/"
  },
  {
    name: 'Car Search (Next JS)',
    description: ['Developed a user-friendly web application for searching cars.', "Bootstrap used for styling.", "Search , Filter, Pagination,etc. features added.", "Modals, pop over etc used.", "Redux is used to manage Global state.", "Routing is used"],
    tags: ["Next JS", "Redux", "BootStrap"],
    githubLink: 'https://github.com/Magar0/Car-search-Next-js',
    hostedPageLink: "https://car-search-next-js.vercel.app/"
  },
  {
    name: 'React TaskManagement application (React JS)',
    description: ['Users can read , add, delete and edit task.', "Can change status (completed or not) by clicking on checkbox.", "Visual indication is provided for completed task", "Tailwind CSS used", "Data stored in Local Storage", "Context Hook used for sahring data"],
    tags: ["React JS", "Tailwind CSS", "LocalStorage"],
    githubLink: 'https://github.com/Magar0/React-TaskManagement-application',
    hostedPageLink: "https://magar0.github.io/React-TaskManagement-application"
  },
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

                    <div className='tags'>
                      {project.tags?.length > 0 && project.tags.map(tag => (
                        <p key={tag}>{tag}</p>
                      ))}
                    </div>
                    <ul>
                      {project.description?.length > 0 && project.description.map((list, ind) => (
                        <List key={ind} data={list} />
                      ))}
                    </ul>

                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                    <a href={project.hostedPageLink} target="_blank" rel="noopener noreferrer">
                      View Hosted Page
                    </a>

                  </div>
                )}
              </div>
            ))}
          </div>
          <a href="https://github.com/Magar0" target="_blank" rel="noopener noreferrer" className="more-projects-button">
            More Projects
          </a>
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default Projects;
