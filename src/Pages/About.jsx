import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Aboutpage/Hero";
import Skills from "../components/Aboutpage/Skills";
import Education from "../components/Aboutpage/Education";
import Educations from "../components/Aboutpage/Educations";
import Detail from "../components/Aboutpage/Detail";
import { useGetUserInfoQuery } from "../features/userInfoApiSlice";
import Spinner from "../Utils/Spinner";
import SkillsBubbleChart from "../components/Aboutpage/SkillsBubbleChart";
import SkillTree from "../components/Aboutpage/SkillTree";

import ScatterSkillChart from "../components/Aboutpage/ScatterSkillChart";
import SkillsPage from "../components/Aboutpage/Skilldetail";

const About = () => {
  const { data, isSuccess } = useGetUserInfoQuery();
  let content = <Spinner />;
  if (isSuccess) {
    content = (
      <div>
        <Hero />
        <Detail />
        {/* <Skills /> */}
        <SkillsPage/>
        <Educations />
        {/* <SkillsBubbleChart/> */}
        {/* <SkillTree/> */}
        {/* <ScatterSkillChart/> */}
      </div>
    );
  }

  return content;
};

export default About;
