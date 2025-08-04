import React from "react";
import stadiumImg from "../assets/Socor.png";
import { FaArrowRight } from "react-icons/fa";
import back_std from "../assets/back_std.png";
import shopping from "../assets/shopping-bag.png";
import speed from "../assets/speedometer.png";
import dolllar from "../assets/sack-dollar.png";
import Box from "../assets/box.png";

const Works = () => {
  const data = [
    {
      title: "Choose Your Assets",
      description:
        "Select from a wide range of players, teams, and coaches across different sports to build your portfolio, just like picking stocks in a traditional market.",
      image: Box,
    },
    {
      title: "Track Real-Time Performance",
      description:
        "Values fluctuate daily based on live stats, game results, and performance metrics—stay updated and analyze trends to make smart moves.",
      image: speed,
    },
    {
      title: "Buy, Sell, and Trade",
      description:
        "Engage in a dynamic marketplace where you can buy low, sell high, and trade assets to maximize your returns and stay ahead of the competition.",
      image: shopping,
    },
    {
      title: "Compete and Earn",
      description:
        "Whether you're in it for fun or profit, this market blends strategy and sports knowledge, offering a thrilling experience for fans and investors alike.",
      image: dolllar,
    },
  ];

  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen flex flex-col items-center justify-center">
      {/* Subscription Box with Stadium Background */}
      <div
        className="relative rounded-2xl mt-16 mb-9 w-full max-w-7xl p-8 md:p-10 overflow-hidden"
        style={{
          backgroundImage: `url(${stadiumImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-green-400/10"></div>

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

      {/* Responsive Background Image Section */}
      {/* Full-width background container */}
      <div className="w-full relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${back_std})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content inside centered container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              How it Works
            </h2>
            <p className="text-gray-300 text-base font-display md:text-lg mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </div>

          <div className="grid grid-cols-1 font-display md:grid-cols-4 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500 mb-4">
                  <img src={item.image} alt={item.title} className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
