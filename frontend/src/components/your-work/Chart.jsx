import React from "react";
import "./chart.scss";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
const Chart1 = () => {
  const data = {
    labels: ["7/2023", "8/2023", "9/2023", "10/2023", "11/2023", "12/2023"],
    datasets: [
      {
        label: "計画",
        data: [10, 11, 14, 9, 21, 9],
        backgroundColor: "#264ECA",
      },
      {
        label: "完了",
        data: [5, 5, 7, 2, 13, 6],
        backgroundColor: "#08D604",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="chart">
      <div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart1;
