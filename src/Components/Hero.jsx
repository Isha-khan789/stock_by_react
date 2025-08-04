import React from "react";
import Navbar from "./Navbar";
import Back_img from "../assets/back_nav.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section className="relative h-screen w-full font-display  justify-center items-center overflow-hidden text-white">
        <div
          className="absolute inset-0 w-full h-full  bg-cover"
          style={{ backgroundImage: `url(${Back_img}` }}
        ></div>
        {/* export navbar */}

        <div className="relative z-20">
          <Navbar />
        </div>
        {/*  Centered textt*/}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-display lg:text-7xl font-extrabold mb-4">
            The World’s Best
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-6">
            Fantasy Sports Stock Market
          </h2>
          <p className="text-lg md:text-xl font-display mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo.
          </p>
          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-[#D52533] text-white px-26 gap-2 flex items-center rounded-full transition py-3 hover:bg-red-700">
              Get Started
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </section>
      <div className="bg-black h-15"></div>
    </>
  );
};

export default Hero;
