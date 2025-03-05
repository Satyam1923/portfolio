"use client";

import { FaGithub, FaInstagram, FaEnvelopeOpenText } from "react-icons/fa";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const contacts = [
    { icon: <FaGithub className="text-white" />, name: "GitHub", link: "https://github.com/Satyam1923" },
    { icon: <FaInstagram className="text-pink-500" />, name: "Instagram", link: "https://www.instagram.com/_satyam_rathor_/" },
    { icon: <FaEnvelopeOpenText className="text-blue-400" />, name: "Email", link: "mailto:satyamr1923@gmail.com" }
];

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });

export default function Contact() {
    return (
        <section className="md:h-screen flex flex-col justify-center items-center text-white py-12">
            <h2 className={`text-4xl font-bold mb-8 ${playfair.className}`}>Contact Me</h2>
            <div className="flex gap-8">
                {contacts.map((contact, index) => (
                    <motion.a
                        key={index}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-center"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            className="text-5xl mb-2"
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            {contact.icon}
                        </motion.div>
                        <p >{contact.name}</p>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
