import React from "react";
import back from "../assets/back_std.png";

const About = () => {
  return (
    <div className="bg-black text-white font-display py-16 px-4  md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-boldmb-4">About Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
      </div>
      <div className="bg-[#1877f2] md:flex rounded-4xl overflow-hidden h-90 shadow-lg max-w-8xl mx-auto">
        <div className="md:w-1/2 mt-9 mb-9 mr-9 ml-9">
          <img
            src={back}
            alt="stadium"
            className="w-full object-cover h-full"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center text-white">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut laLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod
          </p>
          <button className="bg-white text-[#1877f2] font-semibold px-14 py-3 rounded-full w-fit hover:scale-105  transition">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
