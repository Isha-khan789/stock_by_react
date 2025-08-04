import React, { useState } from "react";
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import stadium from "../assets/Sign_back.png";

import logo from "../assets/Mask group.png";
const Login = () => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <div className="flex h-screen w-full text-white font-display">
      {/* left side logo panel */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-10 py-8 bg-black">
        <div className="flex justify-start mb-4">
          <img src={logo} alt="Sports Stock Exchange Logo " className="h-26" />
        </div>
        {/* login form */}

        <div className="w-full max-w-md items-center justify-center space y-6">
          <h2 className="text-4xl whitespace-nowrap items-center justify-center font-display font-bold text-center mb-7">
            Register New Account
          </h2>
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="First Name"
              className="r p-3 bg-[#1C1C1E] rounded-full w-full  outline-none focus:ring-2 ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className=" p-3 bg-[#1C1C1E] rounded-full w-full  outline-none focus:ring-2 ring-blue-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-full mb-8 bg-[#1C1C1E] text-white outline-none focus:ring-2 ring-blue-500"
          />

          {/* Password with Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-4 pr-10 mb-9 rounded-full bg-[#1C1C1E] text-white outline-none focus:ring-2 ring-blue-500"
            />
            <button
              type="button "
              onClick={() => setshowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 mb-5">
              <input
                type="checkbox"
                className=" appearance-none   w-4 h-4   border border-green-500 rounded-full    checked:border-transparent focus:outline-none transition "
              />
              By proceeding, you agree to the Terms and Conditions
            </label>
          </div>

          {/* Email Sign In */}
          <button className="w-full block bg-blue-600 hover:bg-blue-700  text-white py-3 rounded-full">
            Sign up with email
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2 my-4">
            <hr className="flex-grow border-gray-700" />
            <span className="text-sm text-gray-400">Or login with</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <button className="w-full flex items-center justify-center gap-2 border border-gray-700 py-2 rounded hover:bg-gray-800">
              <FaGoogle />
              Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-gray-700 py-2 rounded hover:bg-gray-800">
              <FaApple />
              Apple
            </button>
          </div>

          {/* Signup Link */}
          <div className="text-start text-sm text-gray-400 mt-3">
            Don’t have an account?{" "}
            <a href="#" className="text-[#BF212F] hover:underline">
              Login Now
            </a>
          </div>
        </div>
      </div>

      {/* Right Side - Stadium Image */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${stadium})` }}
      ></div>
    </div>
  );
};

export default Login;
