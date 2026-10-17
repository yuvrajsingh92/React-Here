import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-gray-800 px-6 py-4 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left Side: Logo */}
        <div className="text-2xl font-bold tracking-wide cursor-pointer text-cyan-400">
          Ayush
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          ></span>
        </button>

        {/* Right Side: Navigation Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-cyan-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="transition-colors duration-300 hover:text-cyan-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="transition-colors duration-300 hover:text-cyan-400"
            >
              Product Page
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="transition-colors duration-300 hover:text-cyan-400"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="transition-colors duration-300 hover:text-cyan-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      <div
        className={`absolute left-0 top-full w-full bg-gray-800 transition-all duration-300 ease-in-out md:hidden shadow-lg ${
          isOpen
            ? "opacity-100 visible h-auto border-t border-gray-700 py-4"
            : "opacity-0 invisible h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 font-medium">
          <li>
            <Link
              className="block py-2 transition-colors duration-300 hover:text-cyan-400"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 transition-colors duration-300 hover:text-cyan-400"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 transition-colors duration-300 hover:text-cyan-400"
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 transition-colors duration-300 hover:text-cyan-400"
              to="/product"
              onClick={() => setIsOpen(false)}
            >
              Product Page
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
