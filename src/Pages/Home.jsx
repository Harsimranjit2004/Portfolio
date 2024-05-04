import React from "react";
import Hero from "../components/Homepage/Hero";
import About from "../components/Homepage/About";
import Projects from "../components/Homepage/Projects";
const Home = () => {
  return (
    <div className="Home__main  bg-zinc-900">
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Home;
