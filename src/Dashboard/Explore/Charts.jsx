import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  PointElement,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CiSettings } from "react-icons/ci";
import { MdOutlineCameraAlt } from "react-icons/md";
import { LuTimerReset } from "react-icons/lu";
import { CgMaximizeAlt } from "react-icons/cg";

// import { callback } from "chart.js/helpers";

ChartJs.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  const Data = {
    labels: ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00"],
    datasets: [
      {
        label: "Price",
        data: [
          3000000, 2950000, 2900000, 2850000, 280000000, 275000000, 270000000,
          265000000, 260000000,
        ],
        // data: [30, 25, 29, 34, 32, 38, 35],
        backgroundColor: "rgba(184, 65, 54, 1)",
        borderWidth: 3,
        tension: 0.4,
        borderColor: "rgba(184, 65, 54, 1)", // 🔴 red line

        pointRadius: 3,
        fill: false,
      },
    ],
  };
  const option = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        position: "right",
        ticks: {
          callback: (value) => value.toLocaleString("en-IN"),
        },
      },
      x: {
        ticks: {
          color: "#888",
        },
      },
    },
  };
  return (
    <div className="bg-[black] rounded-2xl  p-4 w-full max-w-5xl mx-auto">
      <div className=" flex items-end justify-between mb-2">
        <div className=" flex   px-8 gap-7 text-gray-400 text-sm">
          {["1D", "2D", "7D", "1M", "2M", "6M", "All"].map((t) => (
            <button
              key={t}
              className={`${
                t === "1D" ? "text-green-500" : "hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex space-x-3 gap-5 px-6 text-gray-400">
          <button>
            <CiSettings size={20} />
          </button>
          <button>
            <LuTimerReset size={20} />
          </button>
          <button>
            <MdOutlineCameraAlt size={20} />
          </button>
          <button>
            <CgMaximizeAlt size={20} />
          </button>
        </div>
      </div>
      <Line data={Data} options={option} />
    </div>
  );
};

export default Charts;
