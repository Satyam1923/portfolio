"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";


export default function Navbar() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({
    width: "0px",
    transform: "translateX(0px)",
  });

  const [isOpen,setIsOpen] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Socials", path: "/socials" },
  ];

  const navRefs = useRef([]);

  useEffect(() => {
    const index = links.findIndex((link) => link.path === pathname);
    setActiveIndex(index !== -1 ? index : links.length - 1);

    if (navRefs.current[index]) {
      const { offsetWidth, offsetLeft } = navRefs.current[index];
      setSliderStyle({
        width: `${offsetWidth}px`,
        transform: `translateX(${offsetLeft}px)`,
      });
    }
  }, [pathname]);

  const fadeDownAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="flex justify-end">
      <motion.div
        {...fadeDownAnimation}
        className="absolute lg:block top-4 left-5"
      >
        <Image
          src="/sr.svg"
          width={60}
          height={60}
          alt="Logo"
          className="rounded-full filter invert"
        />
      </motion.div>

      <motion.div {...fadeDownAnimation} className="absolute top-5 right-5">
        <div className="relative hidden lg:flex bg-white p-2 rounded-4xl  gap-2 shadow-lg">
          <div
            className="absolute top-0 left-0 mt-0.5 h-11/12 bg-gray-950 rounded-4xl transition-all duration-300"
            style={sliderStyle}
          />

          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              ref={(el) => (navRefs.current[index] = el)}
              className={`relative px-5 py-2 text-base rounded-full transition-all duration-300 ${
                activeIndex === index ? "text-white" : "text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>

      <motion.div {...fadeDownAnimation} className="lg:hidden m-5">
        <Hamburger toggle={setIsOpen} toggled={isOpen}></Hamburger>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-16 z-20 bg-white transform -translate-x-1/2 w-48 rounded-lg flex flex-col items-center p-4 shadow-lg"
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="py-2 text-black text-lg font-semibold transition-colors duration-300 hover:bg-black hover:text-white w-full text-center rounded-md"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}
