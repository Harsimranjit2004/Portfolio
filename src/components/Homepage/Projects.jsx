import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useGetProjectQuery } from "../../features/projectsApiSlice";
import Project from "./Project";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const { data: projects, isLoading } = useGetProjectQuery();
  const projectList = projects?.ids.map((id) => projects.entities[id]) || [];

  const filteredProjects =
    activeFilter === "All"
      ? projectList
      : projectList.filter((project) => project?.tags?.includes(activeFilter));

  // Reset index when filtered projects change
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  const handleNext = useCallback(() => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const handlePrev = useCallback(() => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  }, [filteredProjects.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
    // Resume autoplay after 10 seconds of user inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 10000);
      } else if (e.key === "ArrowRight") {
        handleNext();
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 10000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Auto-scroll effect with pause functionality
  useEffect(() => {
    if (filteredProjects.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [filteredProjects, handleNext, isPaused]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-green-500 border-gray-700 rounded-full animate-spin mb-4"></div>
          <p className="text-white text-2xl">Loading projects...</p>
        </div>
      </div>
    );
  }

  // Empty state
  if (projectList.length === 0) {
    return (
      <div className="bg-zinc-900 text-gray-200 py-12 h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          My Creative <span className="text-green-500">Projects</span>
        </h1>
        <p className="text-xl text-gray-400">No projects available.</p>
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
      <div className="flex justify-center flex-wrap gap-4 mb-8 px-4">
        {["All", "Data Science", "Web Development", "C++", "DevOps"].map(
          (item) => (
            <button
              key={item}
              onClick={() => {
                setActiveFilter(item);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 10000);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeFilter === item
                  ? "bg-green-500 text-white shadow-lg shadow-green-500/20"
                  : "bg-zinc-700 hover:bg-green-600 hover:text-white"
                }`}
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* Carousel */}
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          onClick={() => {
            handlePrev();
            setIsPaused(true);
            setTimeout(() => setIsPaused(false), 10000);
          }}
          aria-label="Previous project"
          className="absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-3xl z-10 bg-zinc-800/70 hover:bg-zinc-700 rounded-full p-2 transition-all hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="w-full max-w-4xl mx-auto p-4">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={filteredProjects[currentIndex].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <Project
                  id={filteredProjects[currentIndex].id}
                  project={filteredProjects[currentIndex]}
                />

                {/* Project counter */}
                <div className="absolute top-4 right-4 bg-zinc-800/80 px-3 py-1 rounded-full text-sm">
                  {currentIndex + 1} / {filteredProjects.length}
                </div>
              </motion.div>
            ) : (
              <p className="text-center text-gray-400 py-16 bg-zinc-800/20 rounded-xl">
                No projects found in the "{activeFilter}" category.
              </p>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={() => {
            handleNext();
            setIsPaused(true);
            setTimeout(() => setIsPaused(false), 10000);
          }}
          aria-label="Next project"
          className="absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-3xl z-10 bg-zinc-800/70 hover:bg-zinc-700 rounded-full p-2 transition-all hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Enhanced Pagination */}
      <div className="flex flex-col items-center mt-6">
        {/* Play/Pause button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="mb-4 text-gray-400 hover:text-white flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 rounded-full px-4 py-2 transition-all"
        >
          {isPaused ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>Resume</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
              <span>Pause</span>
            </>
          )}
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center flex-wrap gap-2 max-w-xl">
          {filteredProjects.map((project, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to project ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                  ? "bg-green-500 transform scale-125"
                  : "bg-zinc-700 hover:bg-green-400"
                }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;