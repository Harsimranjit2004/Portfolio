import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { School, Work } from "@mui/icons-material";
import "react-vertical-timeline-component/style.min.css";
import {
  useDeleteEducationMutation,
  useGetEducationQuery,
} from "../../features/educationApiSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Education = ({ id }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const [deleteEducation] = useDeleteEducationMutation();
  const { education } = useGetEducationQuery(undefined, {
    selectFromResult: ({ data }) => ({
      education: data?.entities[id],
    }),
  });
  const { data } = useGetEducationQuery();
  const handleDeleteButton = async () => {
    await deleteEducation({ id });
  };
  const handleUpdateButton = async () => {
    navigate(`/update-education/${id}`);
  };
  const index = Object.keys(data?.entities).indexOf(id);
  const position = index % 2 === 0 ? "right" : "left";
  return (
    // <div className="p-8 bg-zinc-900 text-white">
    <VerticalTimelineElement
      className={
        education?.isEducation == "true"
          ? "vertical-timeline-element--education"
          : "vertical-timeline-element--work"
      }
      contentStyle={{ background: "#21c55d", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #21c55d" }}
      date={education?.date}
      iconStyle={{ background: "#21c55d", color: "#fff" }}
      icon={education?.isEducation == "true" ? <School /> : <Work />}
      position={position}
    >
      <h3 className="vertical-timeline-element-title text-xl font-semibold">
        {education?.title}
      </h3>
      <h4 className="vertical-timeline-element-subtitle text-lg text-gray-200">
        {education?.organizationName}
      </h4>
      <p className="text-gray-100">{education?.paragraph}</p>
      <ul className="list-disc list-inside text-gray-100 mt-2">
        {education?.listItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {isAuthenticated && (
        <div className="flex gap-5 mt-2">
          <button
            className="bg-green-500 p-2 rounded-full"
            onClick={handleDeleteButton}
          >
            Delete
          </button>
          <button
            className="bg-green-500 p-2 rounded-full"
            onClick={handleUpdateButton}
          >
            Update
          </button>
        </div>
      )}
    </VerticalTimelineElement>

    //   {/* Add more elements as needed */}
    // </div>
  );
};

export default Education;
