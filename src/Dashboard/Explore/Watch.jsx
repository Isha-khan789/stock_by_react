import React from "react";

const Watch = () => {
  return (
    <div className="w-full lg:w-1/3 flex flex-col ">
      <div className="bg-black mt-6 rounded-3xl h-[350px]">
        <h1 className="p-8 font-display font-bold text-2xl text-center">
          WatchList
        </h1>
        <div className="relative p-6 py-17 text-center ">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="mt-15 text-gray-500">No News Yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Watch;
