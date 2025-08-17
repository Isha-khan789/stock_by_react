import React from "react";
// import { CiFootball, CiBasketball, CiBaseball } from "react-icons/ci";
// import {
//   IoFootballOutline,
//   IoTennisballOutline,
//   IoBowlingBallOutline,
// } from "react-icons/io5";
// import { RiBilliardsFill } from "react-icons/ri";
// import { PiVolleyballThin } from "react-icons/pi";
// import { MdSportsGolf } from "react-icons/md";
// import { TbFilterDown } from "react-icons/tb";
// import { FaHeart } from "react-icons/fa";

const Graphtable = () => {
  const stocks = Array(4).fill({
    Opponent: "DET",
    Date: "06-15-25",
    P: "$0.23",
    PCHG: "7.49%",
    TB: 6,
    SB: "-",
    RUNS: 3,
    RBI: 3,
    SO: "-",
    WALKS: "-",
  });

  return (
    <div className="bg-black w-full rounded-2xl flex justify-between items-center mt-6 p-6 gap-4 flex-wrap">
      {/* LEFT: Icons horizontally */}
      {/* <div className="flex flex-row flex-wrap gap-4 rounded-2xl p-2 bg-[#3A3A3C] text-3xl text-[#2CC884]">
        <CiFootball />
        <IoFootballOutline />
        <IoTennisballOutline />
        <CiBasketball />
        <CiBaseball />
        <IoBowlingBallOutline />
        <RiBilliardsFill />
        <PiVolleyballThin />
        <MdSportsGolf />
      </div> */}
      {/* <div className="flex flex-row items-center gap-4 max-w-xs w-full">
        <div className=" rounded-2xl bg-[#3A3A3C] p-4 text-red-600  text-center">
          <FaHeart className="text-center" />
        </div>
        <div className="rounded-2xl relative bg-[#3A3A3C] px-15 py-3 text-gray-500 flex-2 pr-19 text-center">
          Filter
          <TbFilterDown className="absolute text-blue-600 top-1/2  -translate-y-1/2" />
        </div>
      </div> */}

      <table class="table-auto w-full text-left ">
        <thead>
          <tr className="bg-[#2B56AAFF] font-display font-medium text-lg rounded-full  text-white ">
            <th className="p-3">Opponent</th>
            <th className="p-3">Date</th>
            <th className="p-3">P</th>
            <th className="p-3">PCHG</th>
            <th className="p-3">TB</th>
            <th className="p-3">SB</th>
            <th className="p-3">RUNS</th>
            <th className="p-3">RBI</th>
            <th className="p-3">SO</th>
            <th className="p-3">WALKS</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {stocks.map((stock, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="p-3">
                <div className="text-gray-500 font-bold">{stock.Opponent}</div>
                <div className="text-[#A0ABB6FF] font-medium text-xs font-display">
                  {stock.name}
                </div>
              </td>
              <td className="p-3">
                <div className="text-md text-[#A0ABB6FF]">{stock.Date}</div>
              </td>
              <td className="p-3">
                <div className="text-[#A0ABB6FF6] text-sm">{stock.P}</div>
              </td>
              <td>
                <div className="text-[#A0ABB6FF] text-sm">{stock.PCHG}</div>
              </td>
              <td>
                <div className="text-[#A0ABB6FF] text-sm">{stock.TB}</div>
              </td>
              <td>
                <div className="text-[#A0ABB6FF] text-sm">{stock.SB}</div>
              </td>
              <td>
                <div className="text-[#A0ABB6FF] text-sm">{stock.RUNS}</div>
              </td>
              <td>
                <div className="text-[#A0ABB6FF] text-sm">{stock.RBI}</div>
              </td>
              <td>
                <div className="text-[#A0ABB6FF] text-sm">{stock.PCHG}</div>
              </td>
              <td>
                <div className="text-[#A0ABB6FF] text-sm">{stock.SO}</div>
              </td>
              <td>
                <div className="text-[#A0ABB6FF] text-sm">{stock.WALKS}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Graphtable;
