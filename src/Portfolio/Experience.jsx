// import React from "react";

// const experiences = [
//   {
//     role: "MERN Developer",
//     description:
//       "Built and maintained modern, responsive web applications using the MERN stack at Digital Web Weaver, including real-time chat, reusable React components with Tailwind, and secure authentication with JWT.",
//     period: "2024 - Present",
//     color: "from-purple-500 to-indigo-500",
//   },
//   {
//     role: "React Developer",
//     description:
//       "Developed responsive, reusable React components with Tailwind CSS, integrating APIs and ensuring clean, scalable code for user-friendly interfaces. Focused on performance, accessibility, and maintaining clean UI/UX across devices.",
//     period: "2024 - 2025",
//     color: "from-pink-500 to-red-500",
//   },
//   {
//     role: "Node Js Developer",
//     description:
//       "Engineered scalable backend services using Node.js and Express.js, implemented secure RESTful APIs, and managed data with MongoDB and Mongoose. Focused on performance optimization, API documentation, and deployment using cloud platforms like Render and Railway.",
//     period: "2024 - 2025",
//     color: "from-green-500 to-emerald-500",
//   },
// ];

// const ExperienceTimeline = () => {
//   return (
//     <section
//       id="experience"
//       className="min-h-screen w-full bg-slate-900 flex flex-col items-center justify-center px-4 py-12"
//     >
//       <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
//         Experience
//       </h2>
//       <div
//         className="flex flex-col gap-8 max-w-3xl w-full"
//         data-aos="flip-left"
//         data-aos-duration="1000"
//       >
//         {experiences.map((exp, index) => (
//           <div
//             key={index}
//             className={`bg-gradient-to-br ${
//               exp.color
//             } text-white rounded-xl shadow-lg p-5 sm:p-6 flex flex-col sm:flex-row ${
//               index % 2 !== 0 ? "sm:flex-row-reverse" : ""
//             } items-center gap-4 transition-transform transform hover:scale-105 duration-300`}
//           >
//             <div className="flex-1">
//               <h3 className="text-lg font-semibold mb-2">{exp.role}</h3>
//               <p className="text-sm mb-3 text-white/90">{exp.description}</p>
//               <span className="text-xs font-medium">{exp.period}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ExperienceTimeline;

import React, { useEffect, useRef, useState } from "react";

const experiences = [
  {
    role: "MERN Developer",
    description:
      "Built modern web apps with the MERN stack, real-time chat, reusable UI, and secure JWT auth.",
    period: "2024 - 2025",
    color: "bg-purple-500",
    icon: "💻",
  },
  {
    role: "React Developer",
    description:
      "Created responsive, optimized React components using Tailwind CSS and API integration.",
    period: "2024 - 2025",
    color: "bg-pink-500",
    icon: "⚛️",
  },
  {
    role: "Node.js Developer",
    description:
      "Built scalable REST APIs using Node.js and Express, handled MongoDB, and deployed to Render.",
    period: "2024 - 2025",
    color: "bg-yellow-600",
    icon: "🖥️",
  },
];

const ExperienceTimeline = () => {
  const timelineRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = timelineRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const height = rect.height;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const percent = Math.min(
          1,
          Math.max(0, (windowHeight - rect.top) / (height + windowHeight))
        );
        setScrollPercent(percent);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={timelineRef}
      id="experience"
      className="relative min-h-screen py-20 px-4 bg-slate-900 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-14 text-white">Experience</h2>

      <div className="relative max-w-4xl w-full">
        {/* Timeline Line */}
        <div className="absolute left-7 top-0 h-full w-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="w-full bg-gradient-to-b from-purple-500 via-pink-500 to-green-500 transition-all duration-500"
            style={{ height: `${scrollPercent * 100}%` }}
          ></div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-16 pl-16 relative z-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative flex flex-col sm:flex-row gap-6 group transition-all duration-700 ease-in-out items-start `}
              style={{
                opacity: scrollPercent > i * 0.25 ? 1 : 0,
                transform:
                  scrollPercent > i * 0.25
                    ? "translateY(0px)"
                    : "translateY(40px)",
              }}
            >
              {/* Icon */}
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 border-slate-900 shadow-lg ${exp.color} text-white flex items-center justify-center text-lg`}
              >
                {exp.icon}
              </div>

              {/* Experience Card */}
              <div
                className={`${exp.color} bg-opacity-30 p-6 rounded-xl w-full max-w-xl shadow-lg backdrop-blur-sm`}
              >
                <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                <p className="text-sm text-white/80 mb-2">{exp.description}</p>
                <span className="text-xs text-white/60 font-medium">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
