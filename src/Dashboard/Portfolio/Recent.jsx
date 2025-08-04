import React from "react";

const Recent = () => {
  return (
    <div>
      <div className="bg-black mt-6 rounded-3xl">
        <h2 className="p-8 font-display font-bold text-lg text-center">
          Recent News
        </h2>
        <div className="relative p-6 py-17 text-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="mb-12 text-gray-500">No News Yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
