import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Aboutpage/Hero";
import Skills from "../components/Aboutpage/Skills";
import Education from "../components/Aboutpage/Education";
import Educations from "../components/Aboutpage/Educations";
import Detail from "../components/Aboutpage/Detail";
import { useGetUserInfoQuery } from "../features/userInfoApiSlice";
import Spinner from "../Utils/Spinner";

const About = () => {
  const { data, isSuccess } = useGetUserInfoQuery();
  let content = <Spinner />;
  if (isSuccess) {
    content = (
      <div>
        <Hero />
        <Detail />
        <Skills />
        <Educations />
      </div>
    );
  }

  return content;
};

export default About;
