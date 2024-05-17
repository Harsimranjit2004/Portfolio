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
      <h2 className="p-4 pt-6 text-center text-5xl">
        Education & <span className="text-green-500">Experience</span>
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
