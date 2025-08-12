import React, { useState } from "react";
import { FaStarAndCrescent, FaRegUser } from "react-icons/fa";
import { FaShieldVirus } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import Input from "./Input";

const Sub = () => {
  const menuItems = [
    {
      key: "personal",
      title: "Personal Information",
      icon: FaRegUser,
    },
    {
      key: "login",
      title: "Login Services",
      icon: FaShieldVirus,
    },
    {
      key: "timezone",
      title: "Timezone",
      icon: AiOutlineGlobal,
    },
    {
      key: "security",
      title: "Security",
      icon: FiLock,
    },
  ];
  const [select, setSelect] = useState("personal");
  return (
    <div className="flex flex-col min-h-screen  md:flex-row gap-6 p-6">
      <aside className="w-full lg:w-1/3 bg-black rounded-xl  p-5 flex flex-col justify-between ">
        <div>
          <div className="mb-4">
            <div className="bg-[#2CC88445] text-[#2CC884FF] flex items-center justify-between gap-3 px-6 py-5 rounded-xl text-sm font-bold font-display">
              <FaStarAndCrescent />
              Subscription Status: <strong>Yearly</strong>
            </div>
          </div>
          {menuItems.map((item) => (
            <div
              key={item.key}
              onClick={() => setSelect(item.key)}
              className={`cursor-pointer rounded-xl px-7 py-3 flex  items-center gap-4 mt-4 w-full ${
                select === item.key ? "bg-[#2E58A6]" : "bg-black"
              } `}
            >
              <div
                className={`w-14 h-14 min-w-[56px] min-h-[56px] rounded-full  flex items-center justify-center ${
                  select === item.key ? "bg-white" : "bg-[#2B56AA]"
                }`}
              >
                <item.icon
                  className={` text-xl ${
                    select === item.key ? "text-[#2E58A6]" : "text-white"
                  }`}
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base leading-tight whitespace-nowrap">
                  {item.title}
                </h3>
                <p className="text-sm text-white leading-tight whitespace-nowrap">
                  Est arcu pharetra proin pellentesque
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="mt-9">
            <button
              className="w-full bg-[#FF0041] text-white font-semibold text-sm py-3 rounded-xl  flex items-center justify-center gap-2"
              onClick={() => console.log("Delete clicked")}
            >
              <MdDeleteOutline className="text-lg" />
              Delete Account
            </button>
          </div>
        </div>
      </aside>
      <div className="w-full lg:w-[751px]">
        <Input />
      </div>
    </div>
  );
};

export default Sub;
