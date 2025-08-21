import React from "react";
import Recent from "../Portfolio/Recent";
const Review = () => {
  return (
    <div className="w-full lg:w-1/3 flex flex-col">
      <div className="bg-black mt-3 p-3 rounded-3xl">
        {/* Card content */}
        <div className="flex justify-center mt-3">
          <button className="px-18 py-2 bg-[#2CC884FF] font-display rounded-2xl">
            Buy{" "}
          </button>
          <button className="px-18 py-2 font-display rounded-2xl text-[#FFFFFFFF] bg-gray-800">
            Sell
          </button>
        </div>

        <div className="flex flex-row justify-between text-sm px-4 md:px-6 mt-4 pb-4">
          <span className="font-bold text-md">Number of shares</span>
          <span className="text-gray-300 font-display font-bold text-md">
            0{" "}
          </span>
        </div>
        <div className="flex flex-row justify-between text-sm px-6 pb-6">
          <span className="font-bold text-md">Current price</span>
          <span className="text-white font-display font-normal text-md">
            PredictionStrike
          </span>
        </div>
        <div className="flex flex-row justify-between text-sm px-6 pb-6">
          <span className="font-bold text-md">Account balance </span>
          <span className="text-white font-display font-normal text-md">
            $0.00
          </span>
        </div>

        <div className="flex justify-center px-4 md:px-0">
          <button className="bg-[#264B96] rounded-3xl mb-7 p-3 font-display font-bold sm:w-xs lg:w-[250px] text-lg w-full text-white">
            Review Order
          </button>
        </div>
      </div>
      <div className="mt-1">
        <Recent />
      </div>
    </div>
  );
};

export default Review;
