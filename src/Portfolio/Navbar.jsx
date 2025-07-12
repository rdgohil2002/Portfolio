import React from "react";

const Navbar = () => {
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <div
      className="fixed top-0 w-full z-50"
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="bg-transparent shadow-md px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold font-serif text-xl capitalize">
          <a
            href="#home"
            className="text-white hover:text-amber-400 transition"
          >
            My Portfolio
          </a>
        </div>

        {/* Navigation Links */}
        <div
          className="hidden md:flex gap-4 font-semibold font-serif capitalize "
          style={{ textDecoration: "none" }}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="px-3 py-2 rounded-lg text-white hover:bg-amber-600 hover:text-white transition"
              style={{ textDecoration: "none" }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
