import React from "react";
import { useState } from "react";
import { useGetProjectQuery } from "../../features/projectsApiSlice";
import { motion } from "framer-motion";
import Project from "./Project";
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCart, setAnimateCart] = useState({ y: 0, opacity: 1 });
  const handleFilter = (item) => {
    setActiveFilter(item);
    setAnimateCart([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCart([{ y: -0, opacity: 1 }]);
    }, 500);
  };
  const { data } = useGetProjectQuery(undefined, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  // console.log(data);
  return (
    <div className=" text-white border-b border-gray-700">
      <div className="heading-container">
        <h1 className="p-4 pt-6 text-center text-5xl">
          My Creative{"  "}
          <span className="text-green-500">Projects</span>
        </h1>
      </div>
      <div className="project__filter">
        {[
          "MERN",
          "C++",
          "Machine Learning",
          "Web Development",
          "Data Science",
          "All",
        ].map((item, index) => (
          <div
            key={`${item}-${index}`}
            onClick={() => handleFilter(item)}
            className={`projects__filter__item ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCart}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="work__portfolio gap-5 p-4 pb-6"
      >
        {data?.ids?.map(
          (item, index) =>
            data?.entities[item].tags.includes(activeFilter) && (
              <Project id={item} key={index} filter={activeFilter} />
            )
        )}
      </motion.div>
    </div>
  );
};
export default Projects;
{
  /* <div className="project__filter"> */
}
{
  /* //             {allUserInfo[0]?.tags?.map( */
}
//                (item, index) => (
//                   <div
//                      key={item}
//                      onClick={() => handleFilter(item)}
//                      className={`projects__filter__item ${
//                         activeFilter === item ? "item-active" : ""
//                      }`}
//                   >
//                      {item}
//                   </div>
//                )
//             )}
//          </div>
// export default Projects;
// import React from "react";
// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { useSelector } from "react-redux";
// import {
//    projectApiSlice,
//    useDeleteProjectMutation,
// } from "../../features/projectApiSlice";
// import { useNavigate } from "react-router-dom";
// import './home.css'
// const Project = ({ id, filter }) => {
//    const navigate = useNavigate();
//    const { project } = projectApiSlice.useGetProjectQuery(undefined, {
//       selectFromResult: ({ data }) => ({
//          project: data?.entities[id],
//       }),
//    });
//    const [deleteProject] = useDeleteProjectMutation();
//    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//    const handleUpdateButton = () => {
//       navigate(`/project/${id}`);
//    };
//    const handleDelete = () => {
//       deleteProject({ id });
//    };
//    return (
//       <div className="work__item project__flex">
//          <div className="work__img project__flex">
//             <img src={require("../../assets/demo.png")} alt={project?.title} />
//             <motion.div
//                whileHover={{ opacity: [0, 1] }}
//                transition={{
//                   duration: 0.25,
//                   ease: "easeInOut",
//                   staggerChildren: 0.5,
//                }}
//                className="work__hover project__flex"
//             >
//                <a href={project?.projectLink} target="_blank" rel="noreferrer">
//                   <motion.div
//                      whileInView={{ scale: [0, 1] }}
//                      whileHover={{ scale: [1, 0.9] }}
//                      transition={{ duration: 0.25 }}
//                      className="project__flex"
//                   >
//                      <FontAwesomeIcon
//                         className="project__icon"
//                         icon={faGithub}
//                      />
//                   </motion.div>
//                </a>
//                <a href={project?.projectLink} target="_blank" rel="noreferrer">
//                   <motion.div
//                      whileInView={{ scale: [0, 1] }}
//                      whileHover={{ scale: [1, 0.9] }}
//                      transition={{ duration: 0.25 }}
//                      className="project__flex"
//                   >
//                      <FontAwesomeIcon className="project__icon" icon={faEye} />
//                   </motion.div>
//                </a>
//             </motion.div>
//          </div>
//          <div className="project__flex project__content">
//             <h4 className="bold-text">{project?.title}</h4>
//             <p className="p-text" style={{ marginTop: 10 }}>
//                {" "}
//                {project?.description}
//             </p>
//             <div className="project__tag project__flex">
//                <p className="p-text" style={{ textAlign: "left" }}>
//                   {/* {project?.tags?.[0]} */}
//                   {filter}
//                </p>
//             </div>
//             {isAuthenticated && (
//                <div className="project__admin__button">
//                   <button onClick={handleUpdateButton}>update</button>
//                   <button onClick={handleDelete}>Delete</button>
//                </div>
//             )}
//          </div>
//       </div>
//    );
// };

// export default Project;
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Project from "./Project";
// import { useGetProjectQuery } from "../../features/projectApiSlice";
// import { useSelector } from "react-redux";
// import { selectAllUserInfo } from "../../features/userInfoApiSlice";
// import './home.css'
// const Projects = () => {
//    const allUserInfo = useSelector(selectAllUserInfo);
//    const [activeFilter, setActiveFilter] = useState("All");
//    const [animateCart, setAnimateCart] = useState({ y: 0, opacity: 1 });
//    const handleFilter = (item) => {
//       setActiveFilter(item);
//       setAnimateCart([{ y: 100, opacity: 0 }]);
//       setTimeout(() => {
//          setAnimateCart([{ y: -0, opacity: 1 }]);
//       }, 500);
//    };

//    const { data } = useGetProjectQuery(undefined, {
//       pollingInterval: 60000,
//       refetchOnFocus: true,
//       refetchOnMountOrArgChange: true,
//    });
//    const content = (
//       <div className="projects__main">
//          <h2 className="p                 rojects__heading">
//             <span>My Creative Projects</span>
//          </h2>
//          <div className="project__filter">
//             {allUserInfo[0]?.tags?.map(
//                (item, index) => (
//                   <div
//                      key={item}
//                      onClick={() => handleFilter(item)}
//                      className={`projects__filter__item ${
//                         activeFilter === item ? "item-active" : ""
//                      }`}
//                   >
//                      {item}
//                   </div>
//                )
//             )}
//          </div>
//          <motion.div
//             animate={animateCart}
//             transition={{ duration: 0.5, delayChildren: 0.5 }}
//             className="work__portfolio"
//          >
//             {data?.ids?.map(
//                (item, index) =>
//                   data?.entities[item].tags.includes(activeFilter) && (
//                      <Project id={item} key={index} filter={activeFilter} />
//                   )
//             )}
//          </motion.div>
//       </div>
//    );
//    return content;
// };

// export default Projects;
