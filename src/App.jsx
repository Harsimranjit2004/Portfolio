import React from "react";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProjectDetail from "./components/Homepage/ProjectDetail";
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    // <div className="w-full  h-screen">
    //   {/* <Navbar /> */}
    //   <Home />
    //   <Footer />
    // </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="project/:projectId" element={<ProjectDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
