import React from "react";
import Hero from "../components/Homepage/Hero";
import About from "../components/Homepage/About";
import Projects from "../components/Homepage/Projects";
import Interests from "../components/Homepage/Interests";
import Spinner from "../Utils/Spinner";
import { useGetUserInfoQuery } from "../features/userInfoApiSlice";
const Home = () => {
  const { data, isSuccess } = useGetUserInfoQuery();
  let content = <Spinner />;
  if (isSuccess) {
    content = (
      <div className="Home__main  bg-zinc-900">
        <Hero />
        <About />
        <Projects />
        <Interests />
      </div>
    );
  }

  return content;
};

export default Home;
