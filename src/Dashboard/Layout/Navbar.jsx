import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import pic from "../../assets/Nav_rename.png";

const Navbar = () => {
  return (
    <nav className="p-4 md:p-6  bg-[#2B56AA] flex flex-col md:flex-row justify-between gap-4 items-center rounded-3xl w-full ">
      <div className="flex flex-col text-white">
        <h2 className="font-bold font-secondary text-lg md:text-xl">
          Hi,Coder Fisher
        </h2>
        <span className="text-[#FFFFFF] text-sm">Good Morning!</span>
      </div>
      <div className="relative w-full md:w-1/3">
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-lg" />
        <input
          type="search"
          placeholder="Search..."
          className="pl-10 py-2 pr-4 rounded-xl w-full bg-[#3A5FBF] font-secondary  text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition"
        />
      </div>
      <div className=" flex items-center gap-4 justify-between md:justify-end w-full md:w-auto">
        <div className=" relative flex items-center justify-center w-10 h-10 rounded-full bg-[#3A5FBF]">
          <FaRegBell className="text-white text-lg" />
          <span className="absolute top-1 right-1 w-3 h-3  bg-gradient-to-r from-red-500 to-orange-500 rounded-full border-2 border-[#3A5FBF]" />
        </div>
        <div className="flex items-center gap-2">
          <img
            src={pic}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col text-white">
            <span className="text-sm font-medium">Cody Fisher</span>
            <span className="text-xs text-gray-300">User</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
