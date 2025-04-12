"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });

export default function About() {
  const name = "Satyam Rathor";

  return (
    <div className="w-screen h-screen flex items-center  md:justify-center flex-col">
      <motion.h1
        className={`mt-64 md:mt-0 text-5xl md:text-8xl font-semibold ${playfair.className} flex text-center md:static`}
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {name.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>
      <h3 className="bottom-10 left-10 absolute md:bottom-10 md:left-10 text-lg">
        on the go <br />
        full stack web developer
      </h3>
    </div>
  );
}
