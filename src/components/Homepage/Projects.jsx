
import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { useGetProjectQuery } from "../../features/projectApiSlice";

import Project from "./Project";
import { useNavigate } from "react-router-dom";
import { useDeleteProjectMutation, useGetProjectQuery } from "../../features/projectsApiSlice";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Fetch projects using Redux Toolkit Query
  const { data: projects, isLoading } = useGetProjectQuery();
  const projectList = projects?.ids.map((id) => projects.entities[id]) || [];

  // Filtered Projects
  const filteredProjects =
    activeFilter === "All"
      ? projectList
      : projectList.filter((project) =>
          project?.tags?.includes(activeFilter)
        );

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-white text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 text-gray-200 py-12">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-white">
          My Creative <span className="text-green-500">Projects</span>
        </h1>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {["All", "Data Science", "Web Development", "C++", "DevOps"].map(
          (item) => (
            <button
              key={item}
              onClick={() => {
                setActiveFilter(item);
                setCurrentIndex(0); // Reset index on filter change
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === item
                  ? "bg-green-500 text-white"
                  : "bg-zinc-700 hover:bg-green-600 hover:text-white"
              }`}
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-2xl z-10"
        >
          &larr;
        </button>

        <div className="w-full max-w-4xl mx-auto p-4">
          {filteredProjects.length > 0 ? (
            <Project id = {filteredProjects[currentIndex].id} project={filteredProjects[currentIndex]} />
          ) : (
            <p className="text-center text-gray-400">
              No projects found for this category.
            </p>
          )}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-2xl z-10"
        >
          &rarr;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {filteredProjects.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-green-500"
                : "bg-zinc-700 hover:bg-green-400"
            }`}
          ></div>
        ))}
      </div>
   
    </div>
  );
};

export default Projects;
