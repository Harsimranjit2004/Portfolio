import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Aboutpage/Hero";
import Skills from "../components/Aboutpage/Skills";
import Education from "../components/Aboutpage/Education";
import Educations from "../components/Aboutpage/Educations";
import Detail from "../components/Aboutpage/Detail";

const About = () => {
  return (
    <div>
      <Navbar isHomePage="no" />
      <Hero />
      <Detail />
      <Skills />
      <Educations />
    </div>
  );
};

export default About;
