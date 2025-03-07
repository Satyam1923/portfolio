import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Footer = () => {
  return (
    <footer className="bg-white rounded-t-4xl w-screen text-black text-center py-6">
      <div className="flex justify-center space-x-6 mb-4">
        {[
          { icon: faGithub, link: "https://github.com/Satyam1923" },
          {
            icon: faInstagram,
            link: "https://www.instagram.com/_satyam_rathor_/",
          },
          {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/satyam-rathor-6a4b4a257/",
          },
        ].map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 bg-gray-200 text-black rounded-full transition-all duration-300 hover:bg-gray-400 hover:scale-110"
          >
            <FontAwesomeIcon icon={social.icon} className="text-2xl" />
          </a>
        ))}
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Satyam Rathor. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
