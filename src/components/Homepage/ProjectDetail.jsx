import React from "react";
import Navbar from "../Navbar";

import {
  projectApiSlice,
  useGetProjectQuery,
} from "../../features/projectsApiSlice";

import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { project } = projectApiSlice.useGetProjectQuery(undefined, {
    selectFromResult: ({ data }) => ({
      project: data?.entities[projectId],
    }),
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const content = (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Navbar isHomePage={"no"} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="mt-[4rem] flex-col "
      >
        <div className="heading text-green-500 text-4xl">
          <h1 className="text-center">{project?.title}</h1>
        </div>
        <div className=" md:w-[60vw] md:h-[40vh] w-[70vw] h-[30vh] bg-red-500 mt-[2rem]">
          <img src={project?.imageUrl} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-[60vw]  w-[70vw]  mt-[1rem] p-4">
          <p>{project?.details}</p>
        </div>
        <div className="md:w-[60vw] w-[70vw] mt-[1rem]">
          <span className="text-green-500 text-3xl">Highlights</span>
          <ul className="list-disc ml-8 mb-4 ">
            {project?.highlights.map((highlight, index) => (
              <li className="pt-4 text-xl" key={index}>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        {project?.video && (
          <div className="md:w-[60vw] w-[70vw] mt-[1rem]">
            <h2 className="text-green-500 text-3xl ">Video:</h2>
            {project?.video && (
              <video
                controls
                muted
                autoPlay
                // infinite
                className="w-full rounded-lg mb-4 pt-6"
              >
                <source src={project.video[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        )}
        <div className="md:w-[60vw] w-[70vw] mt-[1rem]">
          <h2 className="text-green-500 text-3xl">Technologies Used:</h2>
          <ul className="list-disc ml-8 mb-4">
            {project?.technologiesUsed.map((technology, index) => (
              <li className=" pt-4 text-xl" key={index}>
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-[60vw] w-[70vw] mt-[1rem]">
          <h2 className="text-green-500 text-3xl pb-4 ">ScreenShots:</h2>
          <Slider {...settings}>
            {project?.screenshots.map((screenshot, index) => (
              <div key={index}>
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="md:w-[60vw] w-[70vw] mt-[1rem] sm:flex justify-around mb-[2rem]">
          <div className="flex flex-col align-center justify-center">
            <h2 className="text-green-500 text-3xl pb-4 ">Code Link</h2>
            <a href={project?.codeLink} target="_blank" rel="noreferrer">
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="border-2 border-gray-300  text-white font-bold py-2 px-8 rounded  w-fit flex gap-4"
                // onClick={() => navigate(`/project/${id}`)}
              >
                <div className="ml-1"> Link</div>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </div>

          <div className="flex flex-col align-center justify-center">
            <h2 className="text-green-500 text-3xl pb-4 ">Project Link</h2>
            <a href={project?.projectLink} target="_blank" rel="noreferrer">
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="border-2 border-gray-300  text-white w-fit font-bold py-2 px-8 rounded  flex gap-4"
                // onClick={}
              >
                <div className="ml-1"> Link</div>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  return content;
  <div className="bg-zinc-900 text-white min-h-screen">
    <Navbar isHomePage={"no"} />
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{project?.title}</h1>
      <p className="mb-4">{project?.description}</p>

      <h2 className="text-xl font-bold mb-2">Highlights:</h2>
      <ul className="list-disc ml-8 mb-4">
        {project?.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mb-2">Screenshots:</h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="carousel-container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-item"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {project?.screenshots.map((screenshot, index) => (
          <div key={index} className="carousel-image-container">
            <img
              src={screenshot}
              alt={`Screenshot ${index + 1}`}
              className="w-full rounded-lg"
            />
          </div>
        ))}
      </Carousel>

      <h2 className="text-xl font-bold mb-2">Video:</h2>
      {project?.video && (
        <video controls muted className="w-full rounded-lg mb-4">
          <source src={project.video[0]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <h2 className="text-xl font-bold mb-2">More Details:</h2>
      <p>{project?.details}</p>

      <h2 className="text-xl font-bold mb-2">Links:</h2>
      {project?.projectLink && (
        <p>
          <strong>Project Link:</strong>{" "}
          <a
            href={project?.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project?.projectLink}
          </a>
        </p>
      )}
      {project?.codeLink && (
        <p>
          <strong>Code Link:</strong>{" "}
          <a
            href={project?.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 text-white py-2 px-4 rounded-lg hover:bg-green-500 transition-colors"
          >
            View Code
          </a>
        </p>
      )}

      <h2 className="text-xl font-bold mb-2">Technologies Used:</h2>
      <ul className="list-disc ml-8 mb-4">
        {project?.technologiesUsed.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mb-2">Status:</h2>
      <p>{project?.status}</p>

      <h2 className="text-xl font-bold mb-2">Creation Date:</h2>
      <p>{new Date(project?.creationDate).toLocaleDateString()}</p>
    </div>
  </div>;
};

export default ProjectDetail;
