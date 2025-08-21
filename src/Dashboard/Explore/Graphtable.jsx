import React from "react";

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
    <div className="bg-black w-full rounded-2xl flex flex-col mt-6 p-6 gap-4 ">
      <div className=" flex justify-between  mb-2">
        <h2 className=" text-left font-display text-lg font-bold">
          Game Stats
        </h2>
        <h2 className="text-right font-display text-[#2CC884] text-lg font-bold">
          Week 1
        </h2>
      </div>
      <table className="table-auto w-full border-separate border-spacing-y-2  ">
        <thead>
          <tr className="bg-[#2B56AAFF] font-display font-medium text-lg text-white ">
            <th className="p-3 rounded-l-2xl">Opponent</th>
            <th className="p-3">Date</th>
            <th className="p-3">P</th>
            <th className="p-3">PCHG</th>
            <th className="p-3">TB</th>
            <th className="p-3">SB</th>
            <th className="p-3">RUNS</th>
            <th className="p-3">RBI</th>
            <th className="p-3">SO</th>
            <th className="p-3 rounded-r-2xl">WALKS</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {stocks.map((stock, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="p-3">
                <div className="text-gray-500 font-bold">{stock.Opponent}</div>
                <div className="text-[#A0ABB6] font-medium text-xs font-display">
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
