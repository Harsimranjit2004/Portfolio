import React from "react";
import Skill from "./Skill";
import { useGetSkillsQuery } from "../../features/skillsApiSlice";

const Skills = () => {
  const { data } = useGetSkillsQuery(undefined, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  return (
    <div className="bg-zinc-900 border-b border-gray-700">
      <div className="text-white">
        <div className="heaind-container">
          <h2 className="p-4 pt-6 text-center text-5xl">
            My <span className="text-green-500">Skills</span>
          </h2>
        </div>
        <div className="main-content work__portfolio gap-5 p-4 pb-6">
          {data?.ids.map((item, index) => (
            <Skill id={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
