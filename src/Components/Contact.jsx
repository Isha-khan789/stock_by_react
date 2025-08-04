import React from "react";
import empty from "../assets/Empty_std.png";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden text-white bg-cover bg-center flex items-center justify-center px-4 py-16"
      style={{ backgroundImage: `url(${empty})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/100 to-black/30 z-0"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Section */}
        <div className="flex-1 space-y-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border-2  border-green-900 mb-4">
              <FaPhoneAlt className="text-green-900 text-2xl" />
            </div>
            <span className="text-lg">+ 1 234 567 8901</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border-2  border-green-900 mb-4">
              <FaEnvelope className="text-green-900 text-2xl" />
            </div>
            <span className="text-lg">info@sportsstockexchange.com</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border-2  border-green-900 mb-4">
              <FaLocationArrow className="text-green-900 text-2xl" />
            </div>
            <span className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmo
            </span>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 space-y-6">
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full p-4 rounded-md bg-[#FFFFFF17] backdrop-blur-md placeholder-white outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-md bg-[#FFFFFF17] backdrop-blur-md placeholder-white outline-none "
          />
          <textarea
            placeholder="Write Message"
            rows={4}
            className="w-full p-4 rounded-md
              bg-[#FFFFFF17] backdrop-blur-md placeholder-white outline-none"
          ></textarea>
          <div className=" flex items-center justify-center">
            <button className="bg-[#2CC884] justify-center hover:bg-green-600 text-center items-center text-white py-3 px-17 font-display rounded-full font-medium transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
