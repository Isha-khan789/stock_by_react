import React from "react";
import imgE from "../assets/EC.png";
import feeImg from "../assets/fee_img.png";

const Athlete = () => {
  const athleteCard = () => (
    <div className=" bg-[#2C2C2E]   rounded-xl p-4 text-white flex flex-col items-center gap-2 shadow-md">
      <img
        src={imgE}
        alt="Athlete"
        className="h-19 w-19 rounded-full object-cover"
      />
      <p className="font-semibold text-sm">Elly De La Cruz</p>
      <p className="text-green-400 text-xs">
        23.54% <span className="text-white">7d</span>
      </p>
    </div>
  );

  const feeCard = () => (
    <div className="bg-[#3A3A3C] rounded-xl p-4 text-white flex flex-col items-center gap-2 shadow-md">
      <img src={feeImg} alt="Fee" className="h-25 w-25 object-contain" />
      <p className="text-sm">12% Fee</p>
    </div>
  );

  return (
    <div className="w-full flex flex-col md:flex-row gap-px bg-black min-h-screen">
      {/* Athletes */}
      <div className="bg-[#121212] w-full md:w-1/2 p-8 flex flex-col">
        <h2 className="text-3xl font-black text-white mb-2 mt-19 text-center">
          All Your Favorite Athletes
        </h2>
        <p className="text-white/70 font-semibold mb-9 mt-5 text-lg text-center max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {athleteCard()}
          {athleteCard()}
          {athleteCard()}
          {athleteCard()}
        </div>
      </div>

      {/* Fees */}
      <div className=" bg-[#1C1C1E] w-full md:w-1/2 p-8 flex flex-col">
        <h2 className="text-3xl font-black mt-19 text-white mb-2 text-center">
          Lowest Fees in Sports
        </h2>
        <p className="text-white/70 font-semibold mb-9 mt-5 text-lg text-center max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {feeCard()}
          {feeCard()}
          {feeCard()}
          {feeCard()}
        </div>
      </div>
    </div>
  );
};

export default Athlete;
