"use client";

import { motion } from "framer-motion";

const projects = [
    { name: "Weather App", description: "A weather forecast app using OpenWeather API.", link: "#" },
    { name: "Music Player", description: "A web-based music streaming player.", link: "#" },
    { name: "Blog App", description: "A blog platform using Firebase and Express.js.", link: "#" },
    { name: "E-commerce Site", description: "A modern e-commerce web app.", link: "#" },
    { name: "Portfolio Website", description: "A personal portfolio showcasing projects.", link: "#" },
    { name: "Task Manager", description: "A to-do list app with cloud storage.", link: "#" }
];

export default function Projects() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-white py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12 max-w-6xl">
                {projects.map((project, index) => (
                    <motion.a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-sky-900 p-6 rounded-2xl shadow-lg  transition"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                        <p className="text-gray-300">{project.description}</p>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
