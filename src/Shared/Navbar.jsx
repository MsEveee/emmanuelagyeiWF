import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import menu from "../assets/images/menu.svg"; // Ensure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "product", label: "Our Products" },
    { to: "team", label: "Team" },
    { to: "testimonials", label: "Testimonials" },
    { to: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full  top-0 left-0 z-50 shadow-md transition-all duration-300 ${
        scrolling ? "bg-white opacity-90" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="text-xl font-bold flex ">
          <a href="/" className="text-blue-400">E.A Welding</a>
          <a href="/"> &Fabrication</a>
        </div>

        {/* Menu Button (Mobile) */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {menu ? (
            <img src={menu} alt="Menu Icon" className="w-6 h-6" />
          ) : (
            <span className="text-lg font-bold">☰</span>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center absolute md:static left-0 top-16 w-full md:w-auto bg-[#FBF9FE] md:bg-transparent `}
        >
          <ul className="flex flex-col items-center gap-6 p-4 md:flex-row md:gap-8 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} // Adjusts for navbar height
                  className="text-lg font-medium text-gray-700 hover:text-blue-400 transition duration-200 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
