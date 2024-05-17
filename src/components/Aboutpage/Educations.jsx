import React from "react";
import Education from "./Education";
import { useGetEducationQuery } from "../../features/educationApiSlice";
import { VerticalTimeline } from "react-vertical-timeline-component";

const Educations = () => {
  const { data, isLoading } = useGetEducationQuery(undefined, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className="p-8 bg-zinc-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">
        Education & Experience
      </h2>
      {!isLoading && (
        <VerticalTimeline>
          {data?.ids?.map((item, index) => (
            <Education id={item} key={index} />
          ))}
        </VerticalTimeline>
      )}
    </div>
  );
};

export default Educations;
