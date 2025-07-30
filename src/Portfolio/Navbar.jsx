// import React from "react";

// const Navbar = () => {
//   const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

//   return (
//     <div
//       className="fixed top-0 w-full z-50"
//       data-aos="fade-down"
//       data-aos-offset="200"
//       data-aos-delay="50"
//       data-aos-duration="1000"
//       data-aos-easing="ease-in-out"
//       data-aos-mirror="true"
//       data-aos-once="false"
//       data-aos-anchor-placement="top-center"
//     >
//       <div className="bg-transparent shadow-md px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="font-bold font-serif text-xl capitalize">
//           <a
//             href="#home"
//             className="text-white hover:text-amber-400 transition"
//             style={{ textDecoration: "none" }}
//           >
//             My Portfolio
//           </a>
//         </div>

//         {/* Navigation Links */}
//         <div
//           className="hidden md:flex gap-4 font-semibold font-serif capitalize "
//           style={{ textDecoration: "none" }}
//         >
//           {navItems.map((item, index) => (
//             <a
//               key={index}
//               href={`#${item.toLowerCase()}`}
//               className="px-3 py-2 rounded-lg text-white hover:bg-amber-600 hover:text-white transition"
//               style={{ textDecoration: "none" }}
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = ["Home", "Experience", "Project", "Skills", "Contact"];

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
          <Link
            style={{ textDecoration: "none" }}
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-white hover:text-amber-400 transition cursor-pointer"
          >
            My Portfolio
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-4 font-semibold font-serif capitalize">
          {navItems.map((item, index) => (
            <Link
              style={{ textDecoration: "none" }}
              key={index}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="text-amber-400"
              className="px-3 py-2 rounded-lg text-white hover:bg-amber-600 transition cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
