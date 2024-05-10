import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { projectApiSlice } from "../../features/projectsApiSlice";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
const Project = ({ id, filter }) => {
  const navigate = useNavigate();
  const { project } = projectApiSlice.useGetProjectQuery(undefined, {
    selectFromResult: ({ data }) => ({
      project: data?.entities[id],
    }),
  });
  console.log(project);
  //   const [deleteProject] = useDeleteProjectMutation();
  //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  //   const handleUpdateButton = () => {
  //     navigate(`/project/${id}`);
  //   };
  //   const handleDelete = () => {
  //     deleteProject({ id });
  //   };
  return (
    <div className="  w-[270px]  p-[1rem] bg-transparent flex flex-col align-center justify-center shadow-[0_1px_5px_rgba(255,_255,_255,_0.7)]">
      <div className=" flex align-center justify-center w-[100%] h-[230px] relative">
        <img
          className="w-full h-full object-cover "
          src={project?.imageUrl}
          alt={project?.title}
        />
        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
          className="work__hover project__flex"
        >
          <a href={project?.projectLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="project__flex"
            >
              <FontAwesomeIcon className="project__icon" icon={faGithub} />
            </motion.div>
          </a>
          <a href={project?.projectLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="project__flex"
            >
              <FontAwesomeIcon className="project__icon" icon={faEye} />
            </motion.div>
          </a>
        </motion.div>
      </div>
      <div className="project__flex project__content">
        <h4 className="bold-text">{project?.title}</h4>
        <p className="p-text" style={{ marginTop: 10 }}>
          {" "}
          {project?.description}
        </p>
        <div className="project__tag project__flex bg-zinc-900 ">
          <p
            className=" font-bold text-green-500"
            style={{ textAlign: "left" }}
          >
            {/* {project?.tags?.[0]} */}
            {filter}
          </p>
        </div>
        {/* {isAuthenticated && (
          <div className="project__admin__button">
            <button onClick={handleUpdateButton}>update</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Project;
