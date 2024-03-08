// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css'; // Import the CSS file
import AnimatedWrapper from '../animatedWrapper/AnimatedWrapper';
import List from './List';

const projectsData = [
  {
    name: 'Stack Overflow Clone (MERN stack)',
    description: ["Developed a feature-rich Q&A responsive platform with over 20 features similar to Stack Overflow.", "Integrated secure user authentication and authorization with sign-up,login, password management, and JWT-based tokens.", "Enabled extensive user interaction with question asking, editing, deletion,voting, answering, and profile management", "Enhanced user experience with dynamic theme personalization (day/night mode, auto-theme based on time/weather).", "Integrated an AI chatbot for interactive learning and engagement, with email OTP verification for secure access.", "Leveraged Stripe Billing API for different subscription.", "Leveraged Node.js, Express.js, Bcrypt.js and other technologies for and a robust and scalable backend foundation. (serving over 15 REST api endpoints)"],
    tags: ["MERN", "React JS", "Node JS", "Express JS", "JWT", "MongoDB"],
    githubLink: 'https://github.com/Magar0/StackOverflow-clone-MERN',
    hostedPageLink: "https://stack-overflow-clone-mern-frontend.vercel.app",
    img: "/images/StackOverflow-Clone.png"
  },
  {
    name: 'Role Based API (Node JS)',
    description: ["Created secure RESTful API with over 10 endpoints using Express.js and MongoDB.", "Enforced user authentication (JWTs) and role-based access control for authorization.", "Comprehensive User Management: Users can view & update profiles, while Admins have full CRUD access.", "Robust Security: Middleware and input validation techniques ensure data integrity."],
    githubLink: 'https://github.com/Magar0/RoleBased-REST-api-using-NodeJs',
    hostedPageLink: "https://role-based-rest-api-using-node-js.vercel.app"
  },
  {
    name: 'Mobile Ordering App  (MERN Stack)',
    description: ["Global state management library, Redux Toolkit is used to store data.", "Displayed in card format and also made responsive with the help of Styled-Component.", "Search by name option available.", "Users can also search for the mobile by filters like price, name, type, processor, memory, OS", "Loading CSS, errror ane handle by using Redux Global State.", "React-router-dom is used to route between pages.", "Dynamic route is used to show product details for each item.", "Infinite Scrolling is used."],
    tags: ['MERN', "MongoDB", "Express JS", "React JS", "NodeJS", "styled-component", "REST Api"],
    githubLink: 'https://github.com/Magar0/MERN-stack-MobileOrderingApplication',
    hostedPageLink: "https://mern-stack-mobile-ordering-application.vercel.app/",
    img: "/images/Thapa-Mobile.png"
  },

  {
    name: 'Mobile-App-UI',
    description: ["A simple UI made using HTML & tailwind CSS"],
    tags: ["HTML", "CSS"],
    githubLink: 'https://github.com/Magar0/Mobile-App-UI',
    hostedPageLink: "https://magar0.github.io/Mobile-App-UI/",
    img: "/images/MobileAppUI.png"
  },
  {
    name: 'Car Search (Next JS)',
    description: ['Developed a user-friendly web application for searching cars.', "Bootstrap used for styling.", "Search , Filter, Pagination,etc. features added.", "Modals, pop over etc used.", "Redux is used to manage Global state.", "Routing is used"],
    tags: ["Next JS", "Redux", "BootStrap"],
    githubLink: 'https://github.com/Magar0/Car-search-Next-js',
    hostedPageLink: "https://car-search-next-js.vercel.app/",
    img: "/images/carSearch.png"

  },
  {
    name: 'React TaskManagement application',
    description: ['Users can read , add, delete and edit task.', "Can change status (completed or not) by clicking on checkbox.", "Visual indication is provided for completed task", "Tailwind CSS used", "Data stored in Local Storage", "Context Hook used for sahring data"],
    tags: ["React JS", "Tailwind CSS", "LocalStorage"],
    githubLink: 'https://github.com/Magar0/React-TaskManagement-application',
    hostedPageLink: "https://magar0.github.io/React-TaskManagement-application",
    img: "/images/Task-Manager.png"

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
                <div className='head'>
                  <h3>{project.name}</h3>
                  <div className='btn-box'>
                    <a href={project.hostedPageLink} target="_blank" rel="noopener noreferrer">
                      Live
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      Code
                    </a>
                  </div>
                </div>

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
                    {
                      project.img &&
                      <div className='project-img-box'>
                        <img src={project.img} className='project-img' alt="pic" />
                      </div>
                    }
                    <br />
                    <a href={project.hostedPageLink} target="_blank" rel="noopener noreferrer">
                      Live
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      Code
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
    </AnimatedWrapper >
  );
};

export default Projects;
