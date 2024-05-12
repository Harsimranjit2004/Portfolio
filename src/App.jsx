import React from "react";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProjectDetail from "./components/Homepage/ProjectDetail";
import UpdateProject from "./components/Homepage/UpdateProject";
import Admin from "./Pages/Admin";
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
        <Route path="project-update/:projectId" element={<UpdateProject />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default App;
