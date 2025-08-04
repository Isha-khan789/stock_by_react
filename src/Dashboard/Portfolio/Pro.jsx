import React from "react";
import Img from "../../assets/Socor.png";
import { FaArrowRight } from "react-icons/fa";

const Pro = () => {
  return (
    <div
      className="relative rounded-4xl mt-8 mb-9  w-full p-10 md:p-10 overflow-hidden"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#2CC884]/90 to-green-400/10"></div>

      <div className="p-6 relative rounded-2xl max-w-md text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Become Pro Member
        </h2>
        <p className="mb-4 text-sm md:text-base">
          Why not take advantage of our annual subscription package? Sign up
          today and enjoy all the benefits that come with it for a whole year!
        </p>
        <button className="bg-white text-green-600 font-medium rounded-full px-6 py-2 flex items-center gap-2 hover:bg-green-100 transition">
          Subscribe in $100.00 <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pro;
