import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import menuIcon from "../assets/images/menu.svg"; // Renamed for clarity

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navLinks = [
    { to: "/", label: "Home", type: "link" },
    { to: "about", label: "About", type: "scroll" },
    { to: "products", label: "Products", type: "scroll" },
    { to: "team", label: "Team", type: "scroll" },
    { to: "/contact", label: "Contact", type: "link" }, // External navigation
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md opacity-95" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="text-xl font-bold flex">
          <a href="/" className="text-[#A93A01]">E.A Welding</a>
          <a href="/"> & Fabrication</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu Icon" className="w-6 h-6" />
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static left-0 top-16 w-full md:w-auto bg-[#FBF9FE] md:bg-transparent transition-all duration-300 z-50 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 p-4 md:flex-row md:gap-8 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.type === "scroll" ? (
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    hashSpy={true}
                    activeClass="text-blue-500 font-semibold" // Highlight active section
                    className="text-lg font-medium text-gray-700 hover:text-[#A93A01 ] transition duration-200 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </ScrollLink>
                ) : (
                  <a
                    href={link.to}
                    className="text-lg font-medium text-gray-700 hover:text-blue-400 transition duration-200 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
