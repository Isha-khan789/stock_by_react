import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Mask group.png";
import { LuSearchCheck, LuBriefcase } from "react-icons/lu";
import { TiDocumentText } from "react-icons/ti";
import { IoMdSettings } from "react-icons/io";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";
import Portfolio from "../Portfolio/Portfolio";

const Sidebar = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname.toLowerCase() === path.toLowerCase();
  const toggleSidebar = () => setIsCollapse(!isCollapse);

  const menuItems = [
    {
      icon: <LuBriefcase className="w-6 h-6" />,
      text: "Portfolio",
      path: "/dashboard/portfolio",
    },
    {
      icon: <LuSearchCheck className="w-5 h-5" />,
      text: "Explore",
      path: "/dashboard/explore",
    },
    {
      icon: <TiDocumentText className="w-5 h-5" />,
      text: "Transactions",
      path: "/dashboard/transaction",
    },
    {
      icon: <IoMdSettings className="w-5 h-5" />,
      text: "Account setting",
      path: "/dashboard/account ",
    },
  ];

  return (
    <div
      className={`h-screen top-0 flex  flex-col text-white transition-all duration-300 sticky bg-black ${
        isCollapse ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        {!isCollapse && <img src={logo} alt="Logo" className="h-19 ml-6" />}
        <button
          onClick={toggleSidebar}
          className="text-white hover:bg-gray-800 rounded-full p-2"
        >
          {isCollapse ? (
            <HiOutlineChevronDoubleRight className="w-5 h-5" />
          ) : (
            <HiOutlineChevronDoubleLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="p-4 flex flex-col">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center gap-4 p-2 rounded-xl cursor-pointer transition-colors ${
                isActive(item.path)
                  ? "bg-[#2CC884] text-white"
                  : "hover:bg-gray-800"
              }`}
            >
              {React.cloneElement(item.icon, {
                className: `w-6 h-6 ${
                  isActive(item.path) ? "text-white" : "text-[#2CC884]"
                }`,
              })}
              <Link
                to={item.path}
                className={`font-display font-medium text-lg transition-opacity ${
                  isCollapse ? "opacity-0 w-0 absolute" : "opacity-100"
                }`}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
