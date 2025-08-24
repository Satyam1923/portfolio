"use client";

import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap,
    FaGitAlt, FaGithub, FaGoogle
} from "react-icons/fa";
import {
    SiC, SiCplusplus, SiPython, SiFirebase, SiExpress, SiTailwindcss,
    SiRedux, SiUbuntu, SiPostman, SiMysql, SiArduino, SiPostgresql, SiNextdotjs,
    SiMongodb, SiGooglecloud, SiDocker, SiLangchain
} from "react-icons/si";
import { motion } from "framer-motion";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

const skills = [
    { icon: <SiC className="text-blue-700" />, name: "C", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    { icon: <SiCplusplus className="text-blue-500" />, name: "C++", link: "https://isocpp.org/" },
    { icon: <SiPython className="text-yellow-400" />, name: "Python", link: "https://www.python.org/" },

    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { icon: <FaReact className="text-blue-400" />, name: "React.js", link: "https://react.dev/" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js", link: "https://nextjs.org/" },
    { icon: <SiRedux className="text-purple-600" />, name: "Redux Toolkit", link: "https://redux-toolkit.js.org/" },
    { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap", link: "https://getbootstrap.com/" },
    { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS", link: "https://tailwindcss.com/" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js", link: "https://nodejs.org/" },
    { icon: <SiExpress className="text-gray-400" />, name: "Express.js", link: "https://expressjs.com/" },
    { icon: <SiMongodb className="text-green-600" />, name: "MongoDB", link: "https://www.mongodb.com/" },
    { icon: <SiPostgresql className="text-blue-600" />, name: "PostgreSQL", link: "https://www.postgresql.org/" },
    { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase", link: "https://firebase.google.com/" },
    { icon: <SiGooglecloud className="text-blue-500" />, name: "Google Cloud", link: "https://cloud.google.com/" },
    { icon: <SiDocker className="text-blue-400" />, name: "Docker", link: "https://www.docker.com/" },
    { icon: <SiLangchain className="text-yellow-500" />, name: "LangChain", link: "https://www.langchain.com/" },
    { icon: <FaGitAlt className="text-red-600" />, name: "Git", link: "https://git-scm.com/" },
    { icon: <FaGithub className="text-white" />, name: "GitHub", link: "https://github.com/" },
    { icon: <SiPostman className="text-orange-400" />, name: "Postman", link: "https://www.postman.com/" },
    { icon: <SiUbuntu className="text-orange-500" />, name: "Linux", link: "https://ubuntu.com/" },
    { icon: <SiArduino className="text-teal-600" />, name: "Arduino", link: "https://www.arduino.cc/" }
];

export default function Skills() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-white py-12">
            <h2 className={`text-3xl md:5xl font-bold mb-8 ${playfair.className}`}>My Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6 md:px-12 max-w-7xl">
                {skills.map((skill, index) => (
                    <motion.a
                        key={index}
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-center"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 1, type: "spring" }}
                    >
                        <motion.div className="text-5xl mb-2">
                            {skill.icon}
                        </motion.div>
                        <p>{skill.name}</p>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
