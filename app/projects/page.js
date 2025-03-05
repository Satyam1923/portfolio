'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import { TbMaximize } from "react-icons/tb";
import { FaLink } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { Playfair_Display } from "next/font/google";

const shadow = { boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" };
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });


const HoverableImage = ({ img, name }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const translateX = useTransform(x, [0, 1], [-10, 10]);
    const translateY = useTransform(y, [0, 1], [-10, 10]);

    const handleMouseMove = (event) => {
        const { clientX, clientY, currentTarget } = event;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const offsetX = (clientX - left) / width;
        const offsetY = (clientY - top) / height;

        x.set(offsetX);
        y.set(offsetY);
    };

    return (
        <motion.div
            className="relative h-3/4 w-2/3 rounded-2xl flex justify-center items-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0.5); y.set(0.5); }}
            style={{ translateX, translateY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
                type: "spring",
                stiffness: 50,
                damping: 10,
                duration: 3
            }}
            exittransition={{
                duration: 1.2,
                ease: "easeInOut"
            }}
        >
            <Image
                src={img}
                alt={name}
                width={1080}
                height={960}
                className="rounded-2xl w-full h-full"
                style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}
            />
        </motion.div>

    );
};


export default function Home() {
    const [hoveredIndex, setHoveredIndex] = useState(0);
    
    const projects = [
        {
            name: "Spring", bgColor: "#b7bdc2", link: "https://spring-music-player.vercel.app/", img: "/spring.png" },
        { name: "Veridoc", bgColor: "#F9D94A", link: "https://crypto-zeta-dun.vercel.app/", img: "/veridoc2.png" },
        { name: "Keeper", bgColor: "#262341", link: "https://keeper-app-rouge.vercel.app/", img: "/keeper.png" }
    ];

    return (
        <div className="flex justify-center items-center flex-col md:flex-row h-screen w-full gap-4 px-4">
            {projects.map(({ name, bgColor, link, img }, index) => (
                <motion.div
                    key={index}
                    className={`md:h-2/3 h-52 relative rounded-4xl flex flex-col justify-center items-center gap-2`}
                    style={{ backgroundColor: bgColor }} 
                    initial={{ width: "10%" }}
                    animate={{ width: hoveredIndex === index ? "66%" : "10%" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onClick={()=>setHoveredIndex(index)}
                >
                    {hoveredIndex === index ? (
                        <HoverableImage img={img} name={name} />
                    ) : <TbMaximize className='w-22 h-12 text-black' />}

                    {hoveredIndex === index && (
                        <motion.div className='absolute w-54 h-24 rounded-tr-4xl text-4xl bottom-0 left-0 flex align-middle items-center bg-[#0a0a0a] '>
                            <div className='relative h-full w-full'>
                                <div className='absolute w-8 h-8 top-0 -translate-y-full bg-[#0a0a0a] z-10' />
                                <div className={`absolute w-8 h-8 top-0 -translate-y-full rounded-bl-full  z-10`} style={{ backgroundColor: bgColor }} />
                                <div className={`p-6 pl-12 text-4xl h-full ${playfair.className}`}>{name}</div>
                                <div className='absolute w-8 h-8 left-full -translate-y-full bg-[#0a0a0a] z-10' />
                                <div className={`absolute w-8 h-8 left-full -translate-y-full rounded-bl-full z-20`} style={{ backgroundColor: bgColor }} />
                            </div>
                        </motion.div>
                    )}
                    {hoveredIndex === index && (
                        <div
                            className="absolute w-20 h-20 rounded-bl-4xl overflow-visible text-4xl top-0 right-0 flex flex-col align-middle items-center bg-[#0a0a0a]"
                        >
                            <div className='relative h-full w-full flex align-middle items-center'>
                                <div className='absolute m-7'><Link href={link}><FaLink className='w-8 h-8' /></Link></div>
                                <div className='absolute w-8 h-8 top-0 bg-[#0a0a0a] -translate-x-full z-10'> </div>
                                <div className={`absolute w-8 h-8 top-0 -translate-x-full rounded-tr-full z-10`} style={{ backgroundColor: bgColor }} ></div>
                                <div className='absolute w-8 h-8 top-full right-0 bg-[#0a0a0a] z-10'></div>
                                <div className={`absolute w-8 h-8 top-full right-0 rounded-tr-full z-10`} style={{ backgroundColor: bgColor }} ></div>
                            </div>
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}

