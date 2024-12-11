import React from "react";
import { Bubble } from "react-chartjs-2";
import "chart.js/auto";

const SkillsBubbleChart = () => {
  const data = {
    datasets: [
      {
        label: "Skills Proficiency",
        data: [
          { x: 1, y: 5, r: 20, skill: "C++" },     // Bubble size (r) = Proficiency
          { x: 2, y: 7, r: 25, skill: "Java" },
          { x: 3, y: 6, r: 35, skill: "React" },
          { x: 4, y: 8, r: 30, skill: "Node.js" },
          { x: 5, y: 4, r: 15, skill: "Redux" },
          { x: 6, y: 6, r: 40, skill: "Python" },
        ],
        backgroundColor: "rgba(33, 197, 93, 0.5)", // Semi-transparent green
        borderColor: "#21c55d",                   // Border color
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: { color: "white" }, // Legend color
      },
      title: {
        display: true,
        text: "Skill Proficiency Bubble Chart",
        color: "white",
        font: {
          size: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const skill = context.raw.skill;
            return `${skill}: Proficiency ${context.raw.r * 2}%`; // Tooltip displays skill name and value
          },
        },
      },
    },
    scales: {
      x: {
        title: { display: true, text: "Experience Level", color: "white" },
        ticks: { color: "white" },
      },
      y: {
        title: { display: true, text: "Usage Frequency", color: "white" },
        ticks: { color: "white" },
      },
    },
  };

  return (
    <div className="h-screen bg-zinc-900 flex flex-col justify-center items-center p-6">
      <h2 className="text-4xl text-white font-bold mb-6">
        My <span className="text-green-500">Skills</span>
      </h2>
      <div className="w-full max-w-4xl h-[500px]">
        <Bubble data={data} options={options} />
      </div>
    </div>
  );
};

export default SkillsBubbleChart;
