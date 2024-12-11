import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDeleteProjectMutation } from "../../features/projectsApiSlice";

const Project = ({id,  project }) => {

  const navigate = useNavigate();
     const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
     const handleUpdateButton = () => {
        navigate(`/project-update/${id}`);
     };
        const [deleteProject] = useDeleteProjectMutation();
     const handleDelete = () => {
        deleteProject({ id });
     };
console.log(project)
  // Split technologies into an array for better rendering
  const technologies = Array.isArray(project.technologiesUsed)
  ? project.technologiesUsed
  : typeof project.technologiesUsed === "string"
  ? project.technologiesUsed
      .split(",")
      .map((tech) => tech.trim()) // Clean up whitespace
  : ["N/A"];


  return (
    <div className="flex flex-col md:flex-row items-center gap-6 w-full">
      {/* Multimedia Section */}
      <div className="w-full md:w-1/2 h-64 rounded-lg overflow-hidden shadow-lg">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-green-400">{project.title}</h2>
        <p className="text-gray-300">{project.description}</p>

        {/* Highlights */}
        <ul className="text-gray-400 space-y-2 text-sm md:text-left">
          <li>
            <strong className="text-green-400">Technologies:</strong>
            <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-green-300 rounded-full text-xs font-semibold shadow-sm hover:bg-gray-700"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </li>
          <li>
            <strong className="text-green-400">Status:</strong>{" "}
            {project.status || "In Progress"}
          </li>
          
        </ul>

        {/* Know More Button */}
        <div className="flex justify-center md:justify-start">
          <button
            className="mt-4 flex items-center gap-2 w-fit px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-transform hover:scale-105"
            onClick={() => navigate(`/project/${id}`)}
          >
            Know More <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        {isAuthenticated && (
               <div className="project__admin__button">
                  <button onClick={handleUpdateButton}>update</button>
                  <button onClick={handleDelete}>Delete</button>
               </div>
            )}
      </div>
    </div>
  );
};

export default Project;
