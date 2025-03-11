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
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiSupabase,
  SiFirebase,
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
  SiLeetcode,
  SiDrizzle,
  SiUpstash,
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
    name: "Leetcode",
    icon: <SiLeetcode />,
    path: "https://leetcode.com/u/Magar0/",
  },
  // {
  //   name: "Vercel",
  //   icon: <IoLogoVercel />,
  //   path: "https://vercel.com/rakesh-magars-projects",
  // },
  { name: "Gmail", icon: <SiGmail />, path: "mailto:rakeshmagar0@gmail.com" },
  {
    name: "Whats App",
    icon: <FaWhatsapp />,
    path: "https://wa.me/+918431560680",
  },
];

export const about = {
  title: "About me",
  description:
    "Aspiring Full Stack Developer with hands-on experience building a live LMS frontend using React JS. Proficient in MERN stack technologies, honed through both practical industry experience and rigorous online training at AlmaBetter.",
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
      company: "Alma Better Online",
      position: "Full Stack Web Development (MERN) Trainee",
      duration: "Jun,2023 - Jan,2024",
      link: "https://certificates.almabetter.com/en/verify/16003696328496",
      certificateImg: "/img/almaBetter.jpg",
    },
    {
      company: "Null Class Online",
      position: "Web Development Trainee",
      duration: "Jan,2024 - Feb,2024",
      certificateImg: "/pdf/NullClass-Web-Development-Experience-Letter.jpg",
      link: "https://www.nullclass.com/certificates/66ea9428801ab9d74b3ae81b",
    },
    {
      company: "Devtown",
      position: "Full Stack Developer Intern",
      duration: "April, 2024 - Aug, 2024",
    },
    {
      company: "YoliDay llp",
      position: "Full Stack Developer Intern",
      duration: "Sept, 2024 - present",
    },
    {
      company: "Smollan",
      position: "Full Stack Developer Intern",
      duration: "Oct, 2024 - Jan, 2025",
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

    // {
    //   institution: "Alma Better Online",
    //   degree: "Full Stack Web Development (MERN)",
    //   duration: "May,2023 - April,2024",
    // },
    {
      institution: "Chandigarh University",
      degree: "MCA (Online)",
      duration: "2024 - present",
    },
    // {
    //   institution: "Null Class Online",
    //   degree: "Web Development Internship",
    //   duration: "Jan,2024 - Feb,2024",
    // },
  ],
};

export const skills = {
  icon: "/img/badge.svg",
  title: "My Skills",
  // description: "I am specialized in MERN stack",
  items: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
      category: "frontend",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
      category: "frontend",
    },
    {
      icon: <FaJs />,
      name: "javascript",
      category: "frontend",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
      category: "frontend",
    },
    {
      icon: <FaPython />,
      name: "python (basic)",
      category: "backend",
    },
    {
      icon: <FaJava />,
      name: "java (basic)",
      category: "backend",
    },
    {
      icon: <FaReact />,
      name: "react js",
      category: "frontend",
    },
    {
      icon: <FaReact />,
      name: "react native",
      category: "frontend",
    },
    {
      icon: <SiNextdotjs />,
      name: "next js",
      category: "frontend",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
      category: "frontend",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind Css",
      category: "frontend",
    },
    {
      icon: <SiStyledcomponents />,
      name: "Styled Component",
      category: "frontend",
    },
    {
      icon: <SiAntdesign />,
      name: "Antd",
      category: "frontend",
    },
    {
      icon: <SiShadcnui />,
      name: "ShadCn UI",
      category: "frontend",
    },
    {
      icon: <FaNodeJs />,
      name: "node js",
      category: "backend",
    },
    {
      icon: <SiExpress />,
      name: "Express js",
      category: "backend",
    },
    {
      icon: <FaAws />,
      name: "AWS",
      category: "backend",
    },
    {
      icon: <SiMongodb />,
      name: "Mongo DB",
      category: "backend",
    },
    {
      icon: <SiPostgresql />,
      name: "Postgres sql",
      category: "backend",
    },
    {
      icon: <SiMysql />,
      name: "My Sql",
      category: "backend",
    },
    {
      icon: <SiSupabase />,
      name: "Supabase",
      category: "backend",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
      category: "backend",
    },
    {
      icon: <SiDrizzle />,
      name: "Drizzle",
      category: "backend",
    },
    {
      icon: <SiUpstash />,
      name: "Drizzle",
      category: "backend",
    },
  ],
};

export const projects = [
  {
    id: "01",
    category: "Full Stack Next JS",
    title: "Library Management Website App",
    description:
      "A production-grade library management platform built with Next.js, TypeScript, and PostgreSQL, featuring role-based access for admin and users. It includes a public-facing app for users and a dedicated admin interface for managing books, users, and workflows. \n Key Features: \n🔹Role-Based Access: Separate interfaces for admins (book/user management) and users (borrowing, tracking). \n 🔹Authentication: Secure onboarding with email notifications. \n 🔹Book Management: Availability tracking, summaries, recommendations. \n 🔹User Profiles: Borrow history, account management, and receipts. \n🔹Optimized Performance: Caching (Upstash Redis), media processing (ImageKit), and rate-limiting.\n 🔹Advanced Backend: Postgres with Drizzle ORM, automated workflows, and database seeding.\n 🔹Modern UI: Built with Tailwind CSS, ShadCN, and 3D effects.\n 🔹A scalable, secure, and efficient system with DDoS protection, complex DB queries, and custom notifications, designed with industry best practices. 🚀",
    stack: [
      "Next Js",
      "PostgreSQL",
      "Upstash",
      "ImageKit",
      "TypeScript",
      "Nodemailer",
      "Tailwind CSS",
    ],
    image: "/img/library-management.png",
    live: "https://book-house-next-js.vercel.app/",
    github: "https://github.com/Magar0/Library-management-system-NextJs",
    youtube: "https://www.youtube.com/watch?v=c5TzKkSxGw4",
  },
  {
    id: "02",
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
    youtube: "https://www.youtube.com/watch?v=cTK_N8U1LRY",
  },
  {
    id: "03",
    category: "React Native App",
    title: "React Native App",
    description:
      "Built a full stack ,video sharing app using React Native. Secure login, dynamic home screen, and easy navigation. Upload and share videos, view profile details, and bookmark favorites. Enjoy efficient search, real-time updates, and smooth animations.",
    stack: ["React-native", "appwork", "native-wind", "Animatable", "Expo"],
    image: "/img/native-app.jpg",
    live: "https://expo.dev/accounts/thapa0/projects/thapa-app/builds/417aec8d-361e-4f97-a2a0-5d712eeabaca",
    github: "https://github.com/Magar0/React-Native-App",
  },
  {
    id: "04",
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
    youtube: "https://youtu.be/IOIUH8iq4BI",
  },
  {
    id: "05",
    category: "Full Stack",
    title: "Todo List- NextJs and NextAuth",
    description:
      "This responsive Todo App, developed with Next.js, provides a robust and user-friendly platform for managing tasks. It integrates modern authentication methods using NextAuth for secure login through Google, GitHub, or custom email/password. With features like real-time updates, efficient state management, and powerful search capabilities, this application is designed to enhance productivity and streamline task management.",
    stack: [
      "Next Js",
      "Next Auth",
      "Formik",
      "SWR",
      "Tailwind CSS",
      "AntD",
      "Mongo DB",
      "Redux Toolkit",
    ],
    image: "/img/todo.png",
    live: "https://todo-list-using-nextjs-mongo-db-next-auth.vercel.app/",
    github: "https://github.com/Magar0/TodoList-using-Nextjs-MongoDB-nextAuth",
  },
  {
    id: "06",
    category: "Full Stack",
    title: "Portfolio using Next JS",
    description:
      "This portfolio app, built using Next.js, showcases a comprehensive overview of my professional journey. It provides a user-friendly interface that highlights your skills, education, experience, and projects. The app leverages MongoDB for efficient data storage and management, ensuring a seamless user experience.",
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
    id: "07",
    category: "full stack",
    title: "School Website using AWS",
    description:
      "Built a scalable web application using Next.js, MySQL, and AWS. Implemented secure image uploads with AWS S3 storage, optimizing website performance through Tailwind CSS and Ant Design integration. AWS EC2 and Nginx were used for hosting",
    stack: ["Next JS", "MySql", "AWS (EC2, RDS)", "Tailwind CSS"],
    image: "/img/school-web.png",
    // live: "#",
    github: "https://github.com/Magar0/Next.js-MySql-AWS-School-Hub",
    youtube: "https://youtu.be/_r_SPHW18NI",
  },
  {
    id: "08",
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
    youtube: "https://youtu.be/jW6uCEWudHY",
  },

  // {
  //   id: "08",
  //   category: "Frontend",
  //   title: "Car Website",
  //   description:
  //     "Developed a fully responsive car website using Bootstrap and Redux. The website features two pages: a main page for browsing cars and a detailed page for each individual car. Redux is used to manage global state.",
  //   stack: ["React JS", "Bootstrap", "Material UI", "Redux"],
  //   image: "/img/car_website.png",
  //   live: "https://car-search-next-js.vercel.app/",
  //   github: "https://github.com/Magar0/Car-search-Next-js",
  // },
  // {
  //   id: "09",
  //   category: "Backend",
  //   title: "RoleBased REST API using NodeJs",
  //   description:
  //     "A RESTful API with user authentication, role-based access control, and secure API endpoints. Implemented user authentication (JWTs) and role-based access control for authorization. Comprehensive User Management: Users can view & update profiles, while Admins have full CRUD access. Robust Security: Middleware and input validation techniques ensure data integrity.",
  //   stack: ["Node JS", "Express JS", "JWT", "Mongo DB", "Postman"],
  //   image: "/img/No_Image_Available.jpg",
  //   // live: "#",
  //   github: "https://github.com/Magar0/RoleBased-REST-api-using-NodeJs",
  // },
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
    link: "mailto:rakeshmagar0@gmail.com",
  },
  {
    icon: <FaWhatsapp />,
    title: "Whats App",
    description: "+91-8431560680",
    link: "https://wa.me/+918431560680",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Jorhat, Assam, India - 785001",
  },
];
