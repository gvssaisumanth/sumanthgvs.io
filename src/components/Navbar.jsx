import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, sumanthLogo } from "../assets";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const checkSize = () => {
      // Set your desired threshold (in pixels) here.
      // This example uses 768px as the threshold (typical breakpoint for tablet screens)
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    // Call checkSize initially to set the correct state when component mounts
    checkSize();

    // Set up event listener
    window.addEventListener("resize", checkSize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <nav
      className="bg-white border-white-200 dark:bg-gray-900"
      style={{
        backgroundColor: "#fffff",
        backgroundImage: "linear-gradient(135deg, #000000 100%, #400c55 64%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <img src={sumanthLogo} alt="Logo" className="h-16 w-16 mr-2" />
                {/* <img
                  src={sumanthLogo}
                  className="mr-3 h-[100px] w-[100px]"
                  // className="h-8 mr-3"
                  alt="sumanth Logo"
                /> */}
                <span
                  className="font-semibold text-white text-3xl"
                  style={{ fontFamily: "'Explora', " }}
                >
                  Sumanth
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <a
              href="/"
              className="block text-sm px-2 py-4 text-white bg-black-500 font-semibold"
            >
              Home
            </a>
            <a
              href="#projects"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-white transition duration-300"
            >
              Project
            </a>
            <a
              href="#about"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-white transition duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-white transition duration-300"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <svg
                className=" w-6 h-8 pr-2 text-gray-500 hover:text-white "
                x-show={!isOpen}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          isOpen
            ? "mobile-menu"
            : "hidden mobile-menu"
        }
      >
        <ul className="justify-center items-center">
          <li className="active">
            <a
              href="/"
              className=" block text-sm py-4 px-2 text-gray-500 font-semibold hover:bg-gray-700 hover:text-white transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-700 hover:text-white transition duration-300 justify-center items-cente"
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-700 hover:text-white transition duration-300"
            >
              About
            </a>
          </li>
          <li className="hover:bg-sky-700">
            <a
              href="#contact"
              className="block text-sm px-2 py-4 text-gray-500 hover:bg-gray-700 hover:text-white transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
