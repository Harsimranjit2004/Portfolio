import React from "react";
import { Scatter } from "react-chartjs-2";
import "chart.js/auto";
import Chart from "chart.js/auto";

// Custom Plugin to Draw Non-Overlapping Text
const skillTextPlugin = {
  id: "skillText",
  afterDraw: (chart) => {
    const ctx = chart.ctx;
    const textPositions = []; // To store rendered text positions to avoid overlap

    chart.data.datasets.forEach((dataset) => {
      dataset.data.forEach((point, index) => {
        const meta = chart.getDatasetMeta(0).data[index];
        if (meta) {
          let { x, y } = meta.getProps(["x", "y"], true);
          let adjustedY = y - 12; // Default Y offset for text above the point

          // Adjust text position dynamically to avoid overlap
          while (textPositions.some((pos) => Math.abs(pos.x - x) < 30 && Math.abs(pos.y - adjustedY) < 15)) {
            adjustedY -= 15; // Shift the text upwards if overlap is detected
          }

          textPositions.push({ x, y: adjustedY }); // Save new position

          // Draw a subtle background for better readability
          const text = point.skill;
          ctx.save();
          ctx.font = "12px Arial";
          const textWidth = ctx.measureText(text).width;

          ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
          ctx.fillRect(x - textWidth / 2 - 5, adjustedY - 12, textWidth + 10, 16);

          // Draw the text
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.fillText(text, x, adjustedY);
          ctx.restore();
        }
      });
    });
  },
};

Chart.register(skillTextPlugin);

const ScatterSkillChart = () => {
  const data = {
    datasets: [
      {
        label: "Skill Proficiency vs Confidence",
        data: [
          { x: 9, y: 9, skill: "Python" },
          { x: 8, y: 8, skill: "TensorFlow" },
          { x: 8, y: 7, skill: "PyTorch" },
          { x: 7, y: 6, skill: "C++" },
          { x: 6, y: 5, skill: "Java" },
          { x: 7, y: 7, skill: "React" },
          { x: 6, y: 6, skill: "Node.js" },
          { x: 8, y: 8, skill: "NLP" },
          { x: 7, y: 7, skill: "Data Analysis" },
        ],
        backgroundColor: "rgba(33, 197, 93, 0.8)",
        borderColor: "rgba(33, 197, 93, 1)",
        pointRadius: 10,
        pointHoverRadius: 12,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Proficiency Level vs Confidence Level",
        color: "white",
        font: { size: 22 },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const { skill, x, y } = context.raw;
            return `${skill}: Proficiency ${x} | Confidence ${y}`;
          },
        },
      },
      legend: { display: false },
    },
    scales: {
      x: {
        min: 0,
        max: 10,
        title: { display: true, text: "Proficiency Level (1-10)", color: "white" },
        ticks: { color: "white" },
        grid: { color: "gray" },
      },
      y: {
        min: 0,
        max: 10,
        title: { display: true, text: "Confidence Level (1-10)", color: "white" },
        ticks: { color: "white" },
        grid: { color: "gray" },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="h-screen bg-zinc-900 flex flex-col justify-center items-center p-6">
      <h2 className="text-4xl text-white font-bold mb-6">
        My <span className="text-green-500">Skill Insights</span>
      </h2>
      <div className="w-full max-w-4xl h-[500px]">
        <Scatter data={data} options={options} />
      </div>
    </div>
  );
};

export default ScatterSkillChart;
