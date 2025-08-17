import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  // Example Data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue",
        data: [120, 190, 300, 500, 200, 300, 450],
        borderColor: "rgba(43, 86, 170, 1)", // line color
        backgroundColor: "rgba(43, 86, 170, 0.2)", // area under curve
        tension: 0.4, // curve smoothness
        fill: true, // fill under line
        pointBackgroundColor: "white",
        pointBorderColor: "rgba(43, 86, 170, 1)",
        pointRadius: 5,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#374151", // text-gray-700
        },
      },
      title: {
        display: true,
        text: "Monthly Revenue (2025)",
        color: "#111827", // text-gray-900
        font: { size: 18, weight: "bold" },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#374151" },
      },
      y: {
        grid: { color: "rgba(0,0,0,0.05)" },
        ticks: { color: "#374151" },
        position: "right",
      },
    },
  };

  return (
    <div className="bg-black p-6 rounded-2xl shadow-md w-full max-w-3xl mx-auto">
      <Line data={data} options={options} />
    </div>
  );
};

export default Charts;
