import React from "react";
import Review from "./Review";
import Charts from "./Charts";
import Performance from "./Performance";
import Graphtable from "./Graphtable";
const List = () => {
  return (
    <div className="w-full lg:w-2/3 flex flex-col ">
      <div className="bg-black w-full rounded-4xl flex  items-center justify-between mt-6 p-6">
        <div className="flex flex-col">
          <h2 className="font-bold text-lg font-display">Refer a friend</h2>
          <span className="font-medium text-base">
            You’ll get a free share when they deposit $20.00 or more
          </span>
        </div>
        <button className="bg-[#B84136] rounded-3xl p-8 py-3 text-[#FFFFFF]">
          Add to WatchList
        </button>
      </div>
      <div className="mt-5">
        <Charts />
        <Graphtable />
        <Performance />
      </div>
    </div>
  );
};

export default List;
