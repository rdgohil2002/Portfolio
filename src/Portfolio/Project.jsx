import React from "react";
import { motion } from "framer-motion";
import chatapp from "../assets/chatapp.png";
import portfolio from "../assets/portfolio.png";
import gemini from "../assets/gemini.png";

// Example project data
const projects = [
  {
    title: "Chat App",
    description: "A real-time chat app using MERN stack and Socket.IO.",
    image: chatapp,
    link: "https://github.com/rdgohil2002",
  },
  {
    title: "Gemini Clone",
    description:
      "AI chatbot clone using MERN stack, and OpenAI API for smart responses. Includes JWT auth, conversation history, and a clean, responsive UI.",
    image: gemini,
    link: "https://github.com/rdgohil2002",
  },
  {
    title: "Portfolio",
    description: "A modern portfolio built with React and Tailwind CSS.",
    image: portfolio,
    link: "https://github.com/rdgohil2002",
  },
];

const Project = () => {
  return (
    <section
      id="project"
      className="min-h-screen w-full bg-slate-900 flex flex-col items-center justify-center px-4 py-10"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/10 transition-transform"
            data-aos="flip-left"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  {project.description}
                </p>
              </div>
              <a
                style={{ textDecoration: "none" }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-amber-600 hover:bg-amber-500 transition text-white font-medium py-2 px-4 rounded-md text-center"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
