import React, { useState } from "react";
import logo from "../assets/Mask group.png";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-20">
      {/* Logo */}
      <div>
        <img
          src={logo}
          alt="Logo"
          className="h-20 ml-40 w-30 mix-blend-multiply"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-4">
        <a
          href="#"
          className="text-white font-medium underline underline-offset-8 decoration-transparent hover:decoration-red-600 transition"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-300 font-medium underline underline-offset-8 decoration-transparent hover:decoration-red-600 transition"
        >
          How it works
        </a>

        {/* 👇 Replaced button with Link */}
        <Link
          to="/login"
          className="bg-[#2B56AA] text-black px-6 py-2 flex items-center gap-2 rounded-full transition hover:bg-[#244b95]"
        >
          <FaUser />
          Sign in
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-10 left-0 w-full flex flex-col items-end space-y-2 py-4 transition-all duration-300">
          <a
            href="#"
            className="text-white font-medium mt-9 mr-21 underline underline-offset-8 decoration-transparent hover:decoration-red-600 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 font-medium underline mr-9 underline-offset-8 decoration-transparent hover:decoration-red-600 transition"
          >
            How it works
          </a>

          {/* 👇 Mobile Sign In Link */}
          <Link
            to="/login"
            className="bg-[#2B56AA] mr-7 text-black px-6 py-2 flex items-center gap-2 rounded-full transition hover:bg-[#244b95]"
          >
            <FaUser />
            Sign in
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
