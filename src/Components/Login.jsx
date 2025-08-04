import React, { useState } from "react";
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import stadium from "../assets/Empty_std.png";
// import Sidebar from "../Dashboard/Sidebar";

import logo from "../assets/Mask group.png";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSignIn = () => {
    // Later you will add validation/API call here
    // For now, it navigates directly to dashboard
    navigate("/dashboard/portfolio");
  };

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
            Log in to your account
          </h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl mb-9 bg-[#1C1C1E] text-white outline-none focus:ring-2 ring-blue-500"
          />

          {/* Password with Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 pr-10 mb-9 rounded-xl bg-[#1C1C1E] text-white outline-none focus:ring-2 ring-blue-500"
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
              Remember me
            </label>
            <a href="#" className="text-[#BF212F] hover:underline mb-5">
              Forgot Password?
            </a>
          </div>

          {/* Email Sign In */}
          <button
            onClick={handleSignIn} // attach navigation here
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full text-center"
          >
            Sign in with email
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
            <Link to="/Sign" className="text-[#BF212F] hover:underline">
              Get Started
            </Link>
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
