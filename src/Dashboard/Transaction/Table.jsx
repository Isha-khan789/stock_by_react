import React from "react";
import { GoArrowUpLeft } from "react-icons/go";
import img from "../../assets/table.png";

const transactions = Array(7).fill({
  id: "#12415346512",
  date: "2/5/2022 06:24 AM",
  from: "Marquezz",
  to: { name: "Samuel", img: img },
  amount: "-$455",
  status: "CANCELED",
});

const Table = () => {
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full min-w-[650px] text-sm md:text-base text-left border-collapse">
        <thead>
          <tr className="bg-[#2B56AA] text-white font-display">
            <th className="px-4 md:px-8 py-3 rounded-tl-xl text-lg">
              Transaction ID
            </th>
            <th className="px-4 py-3 text-lg">Date</th>
            <th className="px-4 py-3 text-lg">From</th>
            <th className="px-4 py-3 text-lg">To</th>
            <th className="px-4 py-3 text-lg">Amount</th>
            <th className="px-4 py-3 rounded-tr-xl text-lg">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, index) => (
            <tr key={index} className="bg-black">
              <td className="px-4 py-3 flex items-center gap-3 border-b border-gray-700 align-middle">
                <div className="bg-[#2B56AA] p-2 md:p-4 rounded-2xl shrink-0">
                  <GoArrowUpLeft className="text-black" size={15} />
                </div>
                {t.id}
              </td>
              <td className="px-4 py-3 border-b border-gray-700 align-middle">
                {t.date}
              </td>
              <td className="px-4 py-3 border-b border-gray-700 align-middle">
                {t.from}
              </td>
              <td className="px-4 py-3 flex items-center gap-2 border-b border-gray-700 align-middle">
                <img
                  src={t.to.img}
                  alt={t.to.name}
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full shrink-0"
                />
                {t.to.name}
              </td>
              <td className="px-4 py-3 font-display border-b border-gray-700 align-middle">
                {t.amount}
              </td>
              <td className="px-4 py-3 text-[#2CC884] font-display border-b border-gray-700 align-middle">
                {t.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
