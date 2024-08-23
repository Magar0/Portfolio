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
    FaAws
} from "react-icons/fa";
import { SiTypescript, SiGmail, Sitailwindcss, SiNextdotjs, SiTailwindcss, SiStyledcomponents, SiAntdesign, SiShadcnui, SiExpress, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

export const socials = [
    { name: "Github", icon: <FaGithub />, path: 'https://github.com/Magar0' },
    { name: "Linkedin", icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/magar0/' },
    { name: "Vercel", icon: <IoLogoVercel />, path: 'https://vercel.com/rakesh-magars-projects' },
    { name: "Gmail", icon: <SiGmail />, path: 'mailto:rakeshmagar0@gmail.com' },
]


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
        category: "MERN stack",
        title: "Stackoverflow Clone",
        description:
            "Built a full-stack Q&A platform with user authentication, authorization, voting, AI chatbot, email OTP verification and dynamic theming. Implemented Stripe integration for subscription-based features. Leveraged Node.js, Express.js, and Bcrypt.js for backend development.",
        stack: ["MERN", "react js", "node js", "JWT", "stripe", "Open AI", "geolocation", "redux", "SMTP"],
        image: "/img/stackoverflow.png",
        live: "https://stack-overflow-clone-mern-frontend.vercel.app/",
        github: "https://github.com/Magar0/StackOverflow-clone-MERN",
    },
    {
        id: "02",
        category: "backend",
        title: "project 1",
        description: "something so dfnkvfdk fvzck jvczoijvo zdjojv",
        stack: ["html", "css", "javascript"],
        image: "/img/stackoverflow.png",
        live: "https://stack-overflow-clone-mern-frontend.vercel.app/",
        github: "https://github.com/Magar0/StackOverflow-clone-MERN",
    },
    {
        id: "03",
        category: "full stack",
        title: "project 1",
        description: "something so dfnkvfdk fvzck jvczoijvo zdjojv",
        stack: ["html", "css", "javascript"],
        image: "/img/stackoverflow.png",
        live: "https://stack-overflow-clone-mern-frontend.vercel.app/",
        github: "https://github.com/Magar0/StackOverflow-clone-MERN",
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
