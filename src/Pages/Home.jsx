import React from "react";
import Hero from "../components/Homepage/Hero";
import About from "../components/Homepage/About";
const Home = () => {
  return (
    <div className="Home__main  bg-zinc-900">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
