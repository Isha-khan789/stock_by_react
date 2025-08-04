import React from "react";
import { TbFilterDown } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";

const History = () => {
  return (
    <div className="flex flex-col mt-7">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
        <h3 className="font-display text-3xl font-bold text-white ">
          Transactions History
        </h3>
        <div className="flex flex-row items-center gap-4 max-w-xs w-full">
          <div className="rounded-2xl relative bg-[#FFFFFF1A]  px-10 py-3 text-[#747681] flex-2 pr-10 text-center">
            Filter
            <TbFilterDown className="absolute left-4  top-1/2  -translate-y-1/2" />
          </div>
          <div className="rounded-xl relative flex items-center gap-2 font-display   bg-[#FFFFFF1A] px-10 py-3 whitespace-nowrap text-[#747681] flex-2 pr-10 text-center">
            April 11 - April 24
            <CiCalendarDate className="absolute left-4 gap-2  top-1/2  -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
