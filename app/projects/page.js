'use client';

import { motion} from 'framer-motion';
import { useState } from 'react';
import { TbMaximize } from "react-icons/tb";
import { FaLink } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
export default function Home() {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const projects = [
        { name: "Spring", bgColor: "bg-cyan-400", link: "https://spring-music-player.vercel.app/", img: "/spring.png" },
        { name: "Veridoc", bgColor: "bg-green-500", link: "https://crypto-zeta-dun.vercel.app/", img: "/veridoc.png" },
        { name: "Keeper", bgColor: "bg-blue-500", link: "https://keeper-app-rouge.vercel.app/", img: "/keeper.png" }
    ];
    return (
        <div className="flex justify-center items-center h-screen w-full gap-4 px-4">
            {projects.map(({ name, bgColor, link, img }, index) => (
                <motion.div
                    key={index}
                    className={`h-2/3 ${bgColor} relative rounded-4xl flex flex-col justify-center items-center gap-2`}
                    initial={{ width: "10%" }}
                    animate={{ width: hoveredIndex === index ? "66%" : "10%" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    onHoverStart={() => setHoveredIndex(index)}
                >
                    {hoveredIndex === index ? (
                        <motion.div
                            initial={{ scale: 0.4 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 0.3,
                                ease: "backInOut",
                                type: "keyframes"
                            }}
                            exit={{ scale: 0.4 }}
                            className="text-black font-bold h-3/4 w-2/3 rounded-2xl bg-white flex justify-center items-center text-2xl"
                        >
                            <Image src={img} alt={name} width={1080} height={960} className="rounded-2xl w-full h-full" />
                        </motion.div>
                    ) : <TbMaximize className='w-22 h-12' />}

                    {hoveredIndex === index && (
                        <motion.div className='absolute rounded-tr-4xl text-4xl bottom-0 left-0 flex align-middle items-center bg-[#0a0a0a] w-1/4 h-1/5'>
                            <div className='relative h-full w-full'>

                                <div className='absolute w-8 h-8 top-0 -translate-y-full bg-[#0a0a0a] z-10' />
                                <div className={`absolute w-8 h-8 top-0 -translate-y-full rounded-bl-full ${bgColor} z-10`} />
                                <div className={`p-6 pl-12 text-4xl h-full ${playfair.className}`}>{name}</div>
                                <div className='absolute w-8 h-8 left-full -translate-y-full bg-[#0a0a0a] z-10' />
                                <div className={`absolute w-8 h-8 left-full -translate-y-full rounded-bl-full ${bgColor} z-10`} />
                            </div>
                        </motion.div>
                    )}
                    {hoveredIndex === index && (
                        <div
                            className="absolute w-24 h-24 rounded-bl-4xl overflow-visible text-4xl top-0 right-0 flex flex-col align-middle items-center bg-[#0a0a0a]"
                        >
                            <div className='relative h-full w-full flex align-middle items-center'>
                                <div className='absolute m-7'><Link href={link}><FaLink className='w-8 h-8' /></Link></div>
                                <div className='absolute w-8 h-8  top-0 bg-[#0a0a0a] -translate-x-full z-10'></div>
                                <div className={`absolute w-8 h-8 top-0 ${bgColor} -translate-x-full rounded-tr-full z-10`}></div>
                                <div className='absolute w-8 h-8 top-full  right-0 bg-[#0a0a0a] z-10'></div>
                                <div className={`absolute w-8 h-8 top-full right-0 ${bgColor} rounded-tr-full z-10`}></div>
                            </div>
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
