import React, { useState } from "react";
import { CiFootball, CiBasketball, CiBaseball } from "react-icons/ci";
import {
  IoFootballOutline,
  IoTennisballOutline,
  IoBowlingBallOutline,
} from "react-icons/io5";
import { RiBilliardsFill } from "react-icons/ri";
import { PiVolleyballThin } from "react-icons/pi";
import { MdSportsGolf } from "react-icons/md";
import Trending from "./Trending";
import Performance from "./Performance";
const sports = [
  {
    name: "Football",
    icon: <IoFootballOutline size={24} />,
  },
  { name: "Soccer", icon: <CiFootball size={24} /> },
  { name: "Tennis", icon: <IoTennisballOutline size={24} /> },
  { name: "Basketball", icon: <CiBasketball size={24} /> },
  { name: "Cricket", icon: <CiBaseball size={24} /> },
  { name: "Bowling", icon: <IoBowlingBallOutline size={24} /> },
  { name: "Snooker", icon: <RiBilliardsFill size={24} /> },
  { name: "Volley Ball", icon: <PiVolleyballThin size={24} /> },
  { name: "Golf", icon: <MdSportsGolf size={24} /> },
];

const Balls = () => {
  const [selected, setSelected] = useState("Football");
  return (
    <div className="w-full lg:w-2/3 ">
      <div className="  bg-black rounded-3xl flex justify-between items-center mt-6 p-3 gap-4 flex-wrap">
        {sports.map((sport) => (
          <button
            key={sport.name}
            onClick={() => setSelected(sport.name)}
            className={`flex flex-col flex-wrap gap-3 rounded-2xl p-2  text-xs transition-all duration-300 ${
              selected === sport.name
                ? "bg-[#2CC884] text-[#FFFFFF] w-20"
                : "text-[#2CC884] hover:bg-green/50"
            }`}
          >
            <div>{sport.icon}</div>
            <span className="mt-1 text-white">{sport.name}</span>
          </button>
        ))}
      </div>
      <div className="w-full">
        <Trending />
      </div>
      <div className="w-full">
        <Performance />
      </div>
    </div>
  );
};

export default Balls;
