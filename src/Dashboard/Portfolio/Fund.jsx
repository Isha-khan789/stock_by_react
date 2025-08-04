import React from "react";

const Fund = () => {
  return (
    <div className="flex items-start flex-col md:flex-row  justify-between w-full rounded-3xl gap-4 p-6 bg-black">
      <div className=" flex flex-col text-[#FFFFFF]">
        <h3 className="font-display  font-normal text-sm md:text-base">
          Welcome to Sports Stock Exchange!
        </h3>
        <span className="font-display font-normal text-lg">
          Your portfolio starts here
        </span>
      </div>
      <button className="rounded-full px-35 text-[#FFFFFF] p-8 py-3 md:text-base bg-[#264B96] font-display ">
        Fund Your Account
      </button>
    </div>
  );
};

export default Fund;
