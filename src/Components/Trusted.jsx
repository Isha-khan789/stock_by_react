import React from "react";
import stad_img from "../assets/stadium_img.png";
import Carousel from "./Carousel";

const Trusted = () => {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden text-white bg-cover bg-center flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: `url(${stad_img})` }}
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-3xl font-display whitespace-nowrap md:text-5xl lg:text-6xl font-bold mb-4">
          TRUSTED BY HUNDREDS
        </h1>
        <p className="font-normal font-primary text-white/70 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo.
        </p>

        <Carousel />
      </div>
    </div>
  );
};

export default Trusted;
