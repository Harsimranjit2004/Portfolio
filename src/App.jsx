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
import UpdateInterest from "./components/Homepage/UpdateInterest";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
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
        <Route
          path="interest-update/:interestId"
          element={<UpdateInterest />}
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
