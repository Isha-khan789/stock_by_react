import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import pic from "../../assets/Nav_rename.png";
import logo from "../../assets/Mask group.png"; // <-- your logo

const Navbar = () => {
  const [Open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="p-4 md:p-6 hidden md:flex bg-[#2B56AA] flex-col md:flex-row justify-between gap-4 items-center rounded-3xl w-full">
        {/* Left side */}
        <div className="flex items-center gap-4 text-white">
          <div className="flex flex-col">
            <h2 className="font-bold font-secondary text-lg md:text-xl">
              Hi, Coder Fisher
            </h2>
            <span className="text-[#FFFFFF] text-sm">Good Morning!</span>
          </div>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-1/3">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-lg" />
          <input
            type="search"
            placeholder="Search..."
            className="pl-10 py-2 pr-4 rounded-xl w-full bg-[#3A5FBF] font-secondary text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition"
          />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 justify-between md:justify-end w-full md:w-auto">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#3A5FBF]">
            <FaRegBell className="text-white text-lg" />
            <span className="absolute top-1 right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full border-2 border-[#3A5FBF]" />
          </div>
          <div className="flex items-center gap-2">
            <img
              src={pic}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col text-white">
              <span className="text-sm font-medium">Cody Fisher</span>
              <span className="text-xs text-gray-300">User</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar Top Row */}
      <div className=" md:hidden relative flex items-center justify-end p-4 overflow-hidden">
        <img
          src={logo}
          alt="Logo"
          className="h-16 mt-3 w-auto absolute left-1/2 -translate-x-1/2"
        />
        <button
          onClick={() => setOpen(!Open)}
          className="text-[#2B56AA] text-2xl focus:outline-none"
        >
          <BsThreeDotsVertical />
        </button>
      </div>

      {/* Mobile Menu */}
      {Open && (
        <div className="mt-2 flex flex-col gap-4 bg-[#3A5FBF] p-4 rounded-xl md:hidden">
          <div className="flex flex-col text-white">
            <h2 className="font-bold font-secondary text-lg">
              Hi, Coder Fisher
            </h2>
            <span className="text-[#FFFFFF] text-sm">Good Morning!</span>
          </div>

          {/* Search */}
          <div className="relative w-full">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-lg" />
            <input
              type="search"
              placeholder="Search..."
              className="pl-10 py-2 pr-4 rounded-xl w-full bg-[#2B56AA] font-secondary text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition"
            />
          </div>

          {/* Bell + Profile */}
          <div className="flex items-center justify-between">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#2B56AA]">
              <FaRegBell className="text-white text-lg" />
              <span className="absolute top-1 right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full border-2 border-[#2B56AA]" />
            </div>
            <div className="flex  items-center gap-2">
              <img
                src={pic}
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex-col text-white">
                <span className="text-sm font-medium">Cody Fisher</span>
                <span className="text-xs text-gray-300">User</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
