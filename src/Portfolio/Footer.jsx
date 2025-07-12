import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 m-0 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Name & Copyright */}
        <div className="text-center md:text-left text-sm font-light">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/rdgohil2002"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:gohilranjit7044@gmail.com"
            className="hover:text-amber-400 transition"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
