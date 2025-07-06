import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCode,
  faGlobe,
  faCalendarAlt,
  faTools,
  faLightbulb,
  faImages,
  faPlayCircle,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar";
import { projectApiSlice } from "../../features/projectsApiSlice";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { project } = projectApiSlice.useGetProjectQuery(undefined, {
    selectFromResult: ({ data }) => ({
      project: data?.entities[projectId],
    }),
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Custom arrows for slider
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-green-500 transition-all"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-green-500 transition-all"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentImageIndex(next),
    customPaging: i => (
      <div
        className={`w-3 h-3 mx-1 rounded-full ${i === currentImageIndex ? "bg-green-500" : "bg-gray-500"
          }`}
        style={{ transition: "all 0.3s ease" }}
      />
    ),
    dotsClass: "slick-dots custom-dots flex justify-center mt-4"
  };

  if (!project) {
    return (
      <div className="bg-zinc-900 text-white min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-2xl text-green-500">Loading project details...</div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Navbar isHomePage="no" />

      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center px-4">{project.title}</h1>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {project.technologiesUsed.slice(0, 5).map((tech, index) => (
              <span key={index} className="bg-green-500 bg-opacity-80 text-white px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
            {project.technologiesUsed.length > 5 && (
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                +{project.technologiesUsed.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2">
            {/* Project Overview */}
            <div className="bg-zinc-800 rounded-lg p-6 mb-8 shadow-lg transform transition-all hover:shadow-green-500/20">
              <h2 className="text-2xl font-bold text-green-500 mb-4 flex items-center">
                <span className="mr-2">Project Overview</span>
              </h2>
              <p className="text-gray-300 leading-relaxed">{project.details}</p>
            </div>

            {/* Screenshots */}
            <div className="bg-zinc-800 rounded-lg p-6 mb-8 shadow-lg">
              <h2 className="text-2xl font-bold text-green-500 mb-4 flex items-center">
                <FontAwesomeIcon icon={faImages} className="mr-2" />
                <span>Screenshots</span>
              </h2>
              <div className="mb-8">
                <Slider {...settings}>
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="px-1">
                      <img
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-64 md:h-96 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Video Section (if available) */}
            {/* {project.video && project.video.length > 0 && (
              <div className="bg-zinc-800 rounded-lg p-6 mb-8 shadow-lg">
                <h2 className="text-2xl font-bold text-green-500 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />
                  <span>Demo Video</span>
                </h2>
                <div className="relative pt-[56.25%]">
                  <video
                    controls
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  >
                    <source src={project.video[0]} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )} */}
            {project.video && project.video.length > 0 && (
              <div className="bg-zinc-800 rounded-lg p-6 mb-8 shadow-lg">
                <h2 className="text-2xl font-bold text-green-500 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />
                  <span>Demo Video</span>
                </h2>
                <div className="relative pt-[56.25%]">
                  {project.video[0].includes("youtube.com") ||
                    project.video[0].includes("youtu.be") ? (
                    <iframe
                      src={`${project.video[0]}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                      title="Project Demo"
                      allow="autoplay; encrypted-media; clipboard-write; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                    ></iframe>
                  ) : (
                    <video
                      controls
                      autoPlay
                      muted
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      poster={project.imageUrl || undefined}
                    >
                      <source src={project.video[0]} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>
            )}




          </div>

          {/* Right Column - Project Details */}
          <div>
            {/* Project Links */}
            <div className="bg-zinc-800 rounded-lg p-6 mb-8 shadow-lg">
              <h2 className="text-2xl font-bold text-green-500 mb-4">Project Links</h2>
              <div className="flex flex-col gap-4">
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-all"
                  >
                    <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-all"
                  >
                    <FontAwesomeIcon icon={faCode} className="mr-2" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-zinc-800 rounded-lg p-6 mb-8 shadow-lg">
              <h2 className="text-2xl font-bold text-green-500 mb-4">Project Details</h2>

              {project.status && (
                <div className="mb-4">
                  <div className="text-gray-400">Status</div>
                  <div className="flex items-center">
                    <span className={`inline-block w-3 h-3 rounded-full mr-2 ${project.status.toLowerCase() === 'completed' ? 'bg-green-500' :
                      project.status.toLowerCase() === 'in progress' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}></span>
                    <span>{project.status}</span>
                  </div>
                </div>
              )}

              {project.creationDate && (
                <div className="mb-4">
                  <div className="text-gray-400">Creation Date</div>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-gray-500" />
                    <span>{formatDate(project.creationDate)}</span>
                  </div>
                </div>
              )}

              {/* Technologies Used */}
              <div className="mb-4">
                <div className="text-gray-400 mb-2 flex items-center">
                  <FontAwesomeIcon icon={faTools} className="mr-2" />
                  <span>Technologies Used</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologiesUsed.map((tech, index) => (
                    <span key={index} className="bg-zinc-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Highlights */}
            <div className="bg-zinc-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-green-500 mb-4 flex items-center">
                <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
                <span>Highlights</span>
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-green-500 rounded-full min-w-6 h-6 text-white font-medium text-sm mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Projects Button */}
      <div className="container mx-auto px-4 pb-12 flex justify-center">
        <a
          href="/projects"
          className="flex items-center bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
          <span>Back to All Projects</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;