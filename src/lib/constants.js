import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaBootstrap,
  FaAws,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiGmail,
  Sitailwindcss,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiAntdesign,
  SiShadcnui,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

export const socials = [
  { name: "Github", icon: <FaGithub />, path: "https://github.com/Magar0" },
  {
    name: "Linkedin",
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/magar0/",
  },
  {
    name: "Vercel",
    icon: <IoLogoVercel />,
    path: "https://vercel.com/rakesh-magars-projects",
  },
  { name: "Gmail", icon: <SiGmail />, path: "mailto:rakeshmagar0@gmail.com" },
];

export const about = {
  title: "About me",
  description:
    "Aspiring Full Stack Developer with 4 months of hands-on experience building a live LMS frontend using React JS. Proficient in MERN stack technologies, honed through both practical industry experience and rigorous online training at AlmaBetter.",
  info: [
    {
      name: "Name",
      value: "Rakesh Magar",
    },
    {
      name: "Email",
      value: "rakeshmagar0@gmail.com",
    },
    {
      name: "Phone",
      value: "+91-8431560680",
    },
    {
      name: "WhatsApp",
      value: "+91-8431560680",
    },
    {
      name: "Experience",
      value: "4 month",
    },
    {
      name: "Place",
      value: "Jorhat, Assam, India",
    },
    {
      name: "Languages",
      value: "English, Hindi, Nepali, Assamese",
    },
  ],
};

export const experience = {
  icon: "/img/badge.svg",
  title: "My experience",
  description:
    "Aspiring Full Stack Developer with 4 months of hands-on experience building a live LMS frontend using React JS.",
  items: [
    {
      company: "Devtown",
      position: "Full Stack Developer Intern",
      duration: "April, 2023 - present",
    },
  ],
};

export const education = {
  icon: "/img/badge.svg",
  title: "My Education",
  // description: "I have completed degree in mathematics.",
  items: [
    {
      institution: "Jagannath Barooah College",
      degree: "B.Sc. Mathematics",
      duration: "2018-2021",
    },

    {
      institution: "Alma Better Online",
      degree: "Full Stack Web Development (MERN)",
      duration: "May,2023 - April,2024",
    },
    {
      institution: "Null Class Online",
      degree: "Web Development Internship",
      duration: "Jan,2024 - Feb,2024",
    },
    // {
    //     institution: "Chandigarh University",
    //     degree: "MCA (Online)",
    //     duration: "2024 - present"
    // },
  ],
};

export const skills = {
  icon: "/img/badge.svg",
  title: "My Skills",
  description: "I am specialized in MERN stack",
  items: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaPython />,
      name: "python (basic)",
    },
    {
      icon: <FaJava />,
      name: "java (basic)",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind Css",
    },
    {
      icon: <SiStyledcomponents />,
      name: "Styled Component",
    },
    {
      icon: <SiAntdesign />,
      name: "Antd",
    },
    {
      icon: <SiShadcnui />,
      name: "ShadCn UI",
    },
    {
      icon: <FaNodeJs />,
      name: "node js",
    },
    {
      icon: <SiExpress />,
      name: "Express js",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiMongodb />,
      name: "Mongo DB",
    },
    {
      icon: <SiPostgresql />,
      name: "Postgres sql",
    },
    {
      icon: <SiMysql />,
      name: "My Sql",
    },
  ],
};

export const projects = [
  {
    id: "01",
    category: "Frontend",
    title: "Live LMS Portal Frontend Development",
    description:
      "During my internship at Devtown, I was responsible for developing the frontend interface of a live learning management system (LMS) portal. My work included implementing key features such as user login, device limitation and profile management. I also created a comprehensive course section with module navigation and video playback, as well as a certificate section for easy sharing and downloading. To enhance the user experience, I integrated a live class calendar for upcoming event visualization and developed a doubt-clearing section for student-teacher interaction.",
    stack: [
      "React Js",
      "Zustand",
      "Antd",
      "Styled-component",
      "fingerprint js",
    ],
    image: "/img/LMSportal.png",
    live: "https://www.learn.devtown.in/auth",
  },
  {
    id: "02",
    category: "MERN stack",
    title: "Stackoverflow Clone",
    description:
      "Built a full-stack Q&A platform with user authentication, authorization, voting, AI chatbot, email OTP verification and dynamic theming. Implemented Stripe integration for subscription-based features. Leveraged Node.js, Express.js, and Bcrypt.js for backend development.",
    stack: [
      "MERN",
      "react js",
      "node js",
      "JWT",
      "stripe",
      "Open AI",
      "geolocation",
      "redux",
      "SMTP",
    ],
    image: "/img/stackoverflow.png",
    live: "https://stack-overflow-clone-mern-frontend.vercel.app/",
    github: "https://github.com/Magar0/StackOverflow-clone-MERN",
  },
  {
    id: "03",
    category: "Full Stack",
    title: "Portfolio using Next JS",
    description:
      "This portfolio app, built using Next.js, showcases a comprehensive overview of your professional journey. It provides a user-friendly interface that highlights your skills, education, experience, and projects. The app leverages MongoDB for efficient data storage and management, ensuring a seamless user experience.",
    stack: [
      "Next JS",
      "Mongo DB",
      "Framer Motion",
      "Shadcn UI",
      "Tailwind CSS",
    ],
    image: "/img/portfolio.png",
    live: "/",
    github: "https://github.com/Magar0/Portfolio.git",
  },
  {
    id: "04",
    category: "full stack",
    title: "School Website using AWS",
    description:
      "Built a scalable web application using Next.js, MySQL, and AWS. Implemented secure image uploads with AWS S3 storage, optimizing website performance through Tailwind CSS and Ant Design integration. AWS EC2 and Nginx were used for hosting",
    stack: ["Next JS", "MySql", "AWS (EC2, RDS)", "Tailwind CSS"],
    image: "/img/school-web.png",
    // live: "#",
    github: "https://github.com/Magar0/Next.js-MySql-AWS-School-Hub",
  },
  {
    id: "05",
    category: "Full Stack",
    title: "Enterntainment App",
    description:
      "Developed a comprehensive video browsing platform using the MERN stack along with a friend. The platform offers a responsive user interface across various devices and incorporates robust user authentication and authorization with Firebase. Users can actively engage with the platform by adding and removing bookmarks. A scalable backend infrastructure was established using Node.js, Express.js, Firebase, and other relevant technologies.",
    stack: [
      "MERN",
      "React JS",
      "Redux Toolkit",
      "Node JS",
      "Express JS",
      "Firebase",
      "Mongo DB",
    ],
    image: "/img/entertainment_app.png",
    live: "https://entertainment--webapp.vercel.app/login/",
    github:
      "https://github.com/Magar0/entertainment-app-AlmaBetter-FinalProject",
  },
  {
    id: "06",
    category: "Full Stack",
    title: "Todo List Next Js",
    description:
      "Made a dynamic todo list app using Next Js, Express Js, MongoDB",
    stack: [
      "Next Js",
      "Tailwind CSS",
      "Express JS",
      "Node JS",
      "Mongo DB",
      "Redux Toolkit",
    ],
    image: "/img/todo.png",
    live: "https://todo-list-next-js-express-js-mongo-db-topaz.vercel.app/",
    github: "https://github.com/Magar0/TodoList-NextJs-ExpressJs-MongoDb",
  },
  // {
  //   id: "07",
  //   category: "Frontend",
  //   title: "Car Website",
  //   description:
  //     "Developed a fully responsive car website using Bootstrap and Redux. The website features two pages: a main page for browsing cars and a detailed page for each individual car. Redux is used to manage global state.",
  //   stack: ["React JS", "Bootstrap", "Material UI", "Redux"],
  //   image: "/img/car_website.png",
  //   live: "https://car-search-next-js.vercel.app/",
  //   github: "https://github.com/Magar0/Car-search-Next-js",
  // },
  {
    id: "07",
    category: "Backend",
    title: "RoleBased REST API using NodeJs",
    description:
      "A RESTful API with user authentication, role-based access control, and secure API endpoints. Implemented user authentication (JWTs) and role-based access control for authorization. Comprehensive User Management: Users can view & update profiles, while Admins have full CRUD access. Robust Security: Middleware and input validation techniques ensure data integrity.",
    stack: ["Node JS", "Express JS", "JWT", "Mongo DB", "Postman"],
    image: "/img/No_Image_Available.jpg",
    // live: "#",
    github: "https://github.com/Magar0/RoleBased-REST-api-using-NodeJs",
  },
];

export const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91-8431560680",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "rakeshmagar0@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Jorhat, Assam, India - 785001",
  },
];
