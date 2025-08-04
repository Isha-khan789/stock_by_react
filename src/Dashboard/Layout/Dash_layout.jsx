import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Dash_layout = () => {
  return (
    <div className="flex h-screen bg-[#3A3A3C] overflow-y-auto no-scrollbar">
      <Sidebar />
      <div className="flex-1 p-4">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dash_layout;
//  className="flex min-h-screen bg-[#3A3A3C] overflow-y-auto no-scrollbar h-[calc(100vh-4rem)] p-4
