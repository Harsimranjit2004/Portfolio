import React from "react";
import Hero from "../components/Homepage/Hero";
import About from "../components/Homepage/About";
import Projects from "../components/Homepage/Projects";
import Interests from "../components/Homepage/Interests";
const Home = () => {
  return (
    <div className="Home__main  bg-zinc-900">
      <Hero />
      <About />
      <Projects />
      <Interests />
    </div>
  );
};

export default Home;
