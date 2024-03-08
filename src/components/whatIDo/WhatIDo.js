// src/components/WhatIDo.js
import React from 'react';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiVisualstudio, DiBootstrap, DiNodejsSmall, DiMongodb } from 'react-icons/di';
import { FaGithub } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandMysql } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import './WhatIDo.css';

const WhatIDo = () => {
  return (
    <div className="what-i-do-container">
      <div className="left-section">
        <img src="/images/image2.jpg" alt="img" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      </div>
      <div className="right-section">
        <h1>What I Do?</h1>
        <h2>Technologies & Tools:</h2>
        <div className="tech-icons">
          <DiHtml5 size={56} color="#E44D26" title="HTML5" />
          <DiCss3 size={56} color="#1572B6" title="CSS3" />
          <DiJavascript1 size={56} color="#F0DB4F" title="JavaScript" />
          <DiReact size={56} color="#61DAFB" title="React.js" />
          <TbBrandNextjs size={56} color="white" fill='black' title="Next JS" />
          <DiBootstrap size={56} color="#563D7C" title="Bootstrap" />
          <SiTailwindcss size={56} color="#40b4e7" title="TailwindCSS" />
          <DiNodejsSmall size={56} color="#8CC84B" title="Node.js" />
          <TbBrandMysql size={56} color="#40b4e7" title="MySql" />
          <DiMongodb size={56} color="#47A248" title="MongoDB" />
          <FaGithub size={48} color="#211F1F" title="GitHub" />
          <DiVisualstudio size={56} color="#007ACC" title="VS Code" />
        </div>
        <ul>
          <li>MERN stack</li>
          <li>HTML, CSS , JavaScript</li>
          <li>BootStrap, Tailwind CSS, SASS, JQuery</li>
          <li>ReactJS, Next.js, Redux, Styled-component</li>
          <li>Node JS, Express JS, Rest API</li>
          <li>SQL, MariaDB, MySql, MongoDB</li>
          <li>DSA, Testing, Json Web Token</li>
          <li>GitHub, Netlify, Vercel, Postman, VS Code</li>
          <li>Python and PHP (Basic)</li>
        </ul>
      </div>
    </div>
  );
};

export default WhatIDo;
