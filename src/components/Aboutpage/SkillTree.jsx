import React from "react";
import Tree from "react-d3-tree";

const skillData = {
  name: "My Skills",
  children: [
    {
      name: "Programming Languages",
      children: [
        { name: "C++", attributes: { Proficiency: "90%" } },
        { name: "Java", attributes: { Proficiency: "85%" } },
        { name: "Python", attributes: { Proficiency: "80%" } },
      ],
    },
    {
      name: "Frameworks & Libraries",
      children: [
        { name: "React", attributes: { Proficiency: "85%" } },
        { name: "Node.js", attributes: { Proficiency: "75%" } },
        { name: "Redux", attributes: { Proficiency: "70%" } },
      ],
    },
  ],
};

const SkillTree = () => {
  const containerStyles = { width: "100%", height: "500px" };
  return (
    <div style={containerStyles}>
      <Tree
        data={skillData}
        orientation="vertical"
        pathFunc="straight"
        collapsible={false}
        translate={{ x: 250, y: 50 }}
      />
    </div>
  );
};

export default SkillTree;
