import React from "react";
import { CiFootball, CiBasketball, CiBaseball } from "react-icons/ci";
import {
  IoFootballOutline,
  IoTennisballOutline,
  IoBowlingBallOutline,
} from "react-icons/io5";
import { RiBilliardsFill } from "react-icons/ri";
import { PiVolleyballThin } from "react-icons/pi";
import { MdSportsGolf } from "react-icons/md";
import { TbFilterDown } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";

const Symbot = () => {
  const stocks = [
    {
      symbol: "AAPL",
      mark: 178.55,
      plOpen: "$175.345",
      plDay: "$358.00",
      name: "ITM APPLE INC COM",
    },
    {
      symbol: "MSFT",
      mark: 332.12,
      plOpen: "$5120",
      plDay: "$358.00",
      name: "ITM APPLE INC COM",
    },
    {
      symbol: "SUBTOTAL",
      mark: "---",
      plOpen: "$716.00",
      plDay: "---",
    },
  ];
  return (
    <div className="bg-black w-full rounded-2xl flex justify-between items-center mt-6 p-6 gap-4 flex-wrap">
      {/* LEFT: Icons horizontally */}
      <div className="flex flex-row flex-wrap gap-4 rounded-2xl p-2 bg-[#3A3A3C] text-3xl text-[#2CC884]">
        <CiFootball />
        <IoFootballOutline />
        <IoTennisballOutline />
        <CiBasketball />
        <CiBaseball />
        <IoBowlingBallOutline />
        <RiBilliardsFill />
        <PiVolleyballThin />
        <MdSportsGolf />
      </div>
      <div className="flex flex-row items-center gap-4 max-w-xs w-full">
        <div className=" rounded-2xl bg-[#3A3A3C] p-4 text-red-600  text-center">
          <FaHeart className="text-center" />
        </div>
        <div className="rounded-2xl relative bg-[#3A3A3C] px-15 py-3 text-gray-500 flex-2 pr-19 text-center">
          Filter
          <TbFilterDown className="absolute text-blue-600 top-1/2  -translate-y-1/2" />
        </div>
      </div>

      <table class="table-auto w-full text-left ">
        <thead>
          <tr className="bg-blue-500 font-display font-medium text-lg rounded-full text-white ">
            <th className="p-3">SYMBOT</th>
            <th className="p-3">MARK</th>
            <th className="p-3">P/L OPEN</th>
            <th className="p-3">P/L DAY</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {stocks.map((stock, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="p-3">
                <div className="text-gray-500 font-bold">{stock.symbol}</div>
                <div className="text-[#2CC884] font-medium text-xs font-display">
                  {stock.name}
                </div>
              </td>
              <td className="p-3">
                <div className="text-md text-[#2CC884]">{stock.mark}</div>
              </td>
              <td className="p-3">
                <div className="text-[#B84136] text-sm">{stock.plOpen}</div>
              </td>
              <td>
                <div className="text-[#2CC884] text-sm">{stock.plDay}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Symbot;
