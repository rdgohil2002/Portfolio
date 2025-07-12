import React from "react";
import Navbar from "./Navbar";
import Pdf from "./PDF/Resume.pdf";
import photo from "../assets/photo.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-black flex flex-col md:flex-row items-center justify-center p-6 gap-10">
      {/* Card Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-slate-900 rounded-2xl shadow-2xl max-w-md w-full transition hover:scale-[1.02]">
          <div
            className="p-8 rounded-2xl space-y-6"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
              Welcome to My Portfolio
            </h2>
            <h3 className="text-center text-xl md:text-2xl text-white">
              I am a{" "}
              <span className="text-amber-400 font-semibold">
                <Typewriter
                  words={[
                    "MERN Developer",
                    "React Developer",
                    "Node Developer",
                    "Express Developer",
                    "MonoDB Developer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>
            <a
              href={Pdf}
              download="Resume.pdf"
              style={{ textDecoration: "none" }}
              className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition "
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Image Section with large, colorful glow */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        {/* Colorful glow shadow behind the image */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="h-[28rem] w-[28rem] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-40 blur-[120px]"></div>
        </div>
        <img
          src={photo}
          alt="Profile"
          data-aos="flip-right"
          data-aos-duration="2000"
          className="mask mask-triangle relative rounded-full h-72 w-72 md:h-80 md:w-80 object-cover shadow-2xl border-4 border-amber-600"
        />
      </div>
    </div>
  );
};

export default Home;
