import React from "react";
import { useState } from "react";
import img from "../../assets/EC.png";
import { BsFillTriangleFill } from "react-icons/bs";

const Performance = () => {
  const Player = {
    Image: img,
    Name: "Elly De La Cruz",
    perc: "23.54 % 7d",
  };
  const data = Array(12).fill(Player);
  const [select, setselect] = useState();
  const visibleData = select ? data : data.slice(0, 4);

  return (
    <div className="flex flex-col   justify-between w-full rounded-3xl gap-4 p-6 mt-6 bg-black">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
        <h3 className="font-display text-lg font-bold text-white ">
          Top Performers ($$$-$)
        </h3>
        <button
          onClick={() => setselect(!select)}
          className="font-display text-lg font-bold cursor-pointer"
        >
          View All
        </button>
      </div>

      <div
        className={`grid  ${
          select ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2 md:grid-cols-4"
        } gap-4`}
      >
        {visibleData.map((Player, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#1A1A1D] p-4 rounded-xl "
          >
            <img
              src={Player.Image}
              alt={Player.Name}
              className="w-16 h-16 rounded-full mb-2"
            />
            <p className="text-white font-display font-semibold">
              {Player.Name}
            </p>
            <div className="flex items-center gap-1">
              <BsFillTriangleFill className="w-2.5 h-2.5 text-[#2CC884]" />
              <span className="text-sm text-[#2CC884]">{Player.perc}</span>
            </div>
          </div>
        ))}
        {/* {data.map((Player, index) => (
           
          ))} */}
      </div>
    </div>
  );
};

export default Performance;
