import React from "react";
import Get from "./Get";
import Symbot from "./Symbot";

const Refer = () => {
  return (
    <div className="w-full lg:w-2/3 ">
      <div className="bg-black w-full rounded-4xl flex  items-center justify-between mt-6 p-6">
        <div className="flex flex-col">
          <h2 className="font-bold text-lg font-display">Refer a friend</h2>
          <span className="font-medium text-base">
            You’ll get a free share when they deposit $20.00 or more
          </span>
        </div>
        <button className="bg-[#B84136] rounded-3xl p-8 py-3 text-[#FFFFFF]">
          Copy code
        </button>
      </div>
      <div className="w-full">
        <Get />
      </div>
      <div className="w-full">
        <Symbot />
      </div>
    </div>
  );
};

export default Refer;
