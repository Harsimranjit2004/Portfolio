import React from "react";
import Navbar from "../Navbar";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import {
  projectApiSlice,
  useGetProjectQuery,
} from "../../features/projectsApiSlice";
import CustomCarousel from "../../Utils/CustomCarousel";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { project } = projectApiSlice.useGetProjectQuery(undefined, {
    selectFromResult: ({ data }) => ({
      project: data?.entities[projectId],
    }),
  });
  console.log(project);
  console.log(project?.screenshots);
  return (
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
        {/* <Carousel
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
          itemClass=""
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
        > */}
        {/* {project?.screenshots.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot}
              alt={`Screenshot ${index + 1}`}
              className="w-full rounded-lg"
            />
          ))} */}
        <CustomCarousel items={project?.screenshots} />
        {/* </Carousel> */}

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
            >
              {project?.codeLink}
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
    </div>
  );
};

export default ProjectDetail;
