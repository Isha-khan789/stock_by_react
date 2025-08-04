import React from "react";
import Recent from "./Recent";

const Deposit = () => {
  return (
    <div className="w-full lg:w-1/3 flex flex-col">
      <div className="bg-black mt-6 rounded-3xl">
        {/* Card content */}
        <h2 className="p-5 font-display font-bold text-lg text-center">
          Make a Deposit
        </h2>
        <div className="flex flex-row justify-between text-sm px-4 md:px-6 pb-4">
          <span className="font-bold text-md">Processed by</span>
          <span className="text-[#2CC884] font-display font-bold text-md">
            Manage Account
          </span>
        </div>
        <div className="flex flex-row justify-between text-sm px-6 pb-6">
          <span className="font-bold text-md">To</span>
          <span className="text-white font-display font-normal text-md">
            PredictionStrike
          </span>
        </div>
        <div className="flex flex-row justify-between text-sm px-6 pb-6">
          <span className="font-bold text-md">Current Balance </span>
          <span className="text-white font-display font-normal text-md">
            $0.00
          </span>
        </div>
        <div className="flex flex-row justify-between text-sm px-6 pb-6">
          <span className="font-bold text-md">Amount</span>
          <span className="text-[#757575] font-display font-normal text-md">
            $0.00
          </span>
        </div>
        <div className="flex justify-center px-4 md:px-0">
          <button className="bg-[#264B96] rounded-3xl mb-7 p-3 font-display font-bold sm:w-xs lg:w-[250px] text-lg w-full text-white">
            Fund Your Account
          </button>
        </div>
      </div>

      {/* ✅ Place Recent here, outside the card but inside the width container */}
      <div className="mt-1">
        <Recent />
      </div>
    </div>
  );
};

export default Deposit;
