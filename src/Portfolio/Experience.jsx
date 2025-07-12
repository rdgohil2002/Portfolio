import React from "react";

const experiences = [
  {
    role: "MERN Developer",
    description:
      "Built and maintained modern, responsive web applications using the MERN stack at Digital Web Weaver, including real-time chat, reusable React components with Tailwind, and secure authentication with JWT.",
    period: "2024 - Present",
    color: "from-purple-500 to-indigo-500",
  },
  {
    role: "React Developer",
    description:
      "Developed responsive, reusable React components with Tailwind CSS, integrating APIs and ensuring clean, scalable code for user-friendly interfaces. Focused on performance, accessibility, and maintaining clean UI/UX across devices.",
    period: "2022 - 2023",
    color: "from-pink-500 to-red-500",
  },
  {
    role: "UI/UX Designer",
    description:
      "Designed clean, accessible, and intuitive user interfaces focusing on user-centered design and modern aesthetic principles.",
    period: "2021 - 2022",
    color: "from-green-500 to-emerald-500",
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
        Experience
      </h2>
      <div
        className="flex flex-col gap-8 max-w-3xl w-full"
        data-aos="flip-left"
        data-aos-duration="1000"
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${
              exp.color
            } text-white rounded-xl shadow-lg p-5 sm:p-6 flex flex-col sm:flex-row ${
              index % 2 !== 0 ? "sm:flex-row-reverse" : ""
            } items-center gap-4 transition-transform transform hover:scale-105 duration-300`}
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">{exp.role}</h3>
              <p className="text-sm mb-3 text-white/90">{exp.description}</p>
              <span className="text-xs font-medium">{exp.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
