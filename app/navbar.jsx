"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({
    width: "0px",
    transform: "translateX(0px)",
  });

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

  return (
    <div className="absolute top-5 right-5">
      <div className="relative bg-white p-2 rounded-4xl flex gap-1">
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
    </div>
  );
}
