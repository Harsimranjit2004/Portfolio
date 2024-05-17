import React from "react";
import Home from "./Pages/Home";
import LocomotiveScroll from "locomotive-scroll";

import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProjectDetail from "./components/Homepage/ProjectDetail";
import UpdateProject from "./components/Homepage/UpdateProject";
import Admin from "./Pages/Admin";
import UpdateInterest from "./components/Homepage/UpdateInterest";
import About from "./Pages/About";
import BlogDetails from "./components/Blogpage/BlogDetail";
import Contact from "./Pages/Contact";
import Resources from "./components/Blogpage/Resources";
import CreateBlog from "./components/Adminpage/CreateBlog";
import UpdateNotes from "./components/Blogpage/UpdateNotes";
import UpdateBlog from "./components/Blogpage/UpdateBlog";
import UpdateSkill from "./components/Aboutpage/UpdateSkill";
import UpdateEducation from "./components/Aboutpage/UpdateEducation";
import Login from "./Pages/Login";
import { useSelector } from "react-redux";
import { useGetUserInfoQuery } from "./features/userInfoApiSlice";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const PrivateRoute = ({ element, redirectTo }) => {
    return isAuthenticated ? (
      element
    ) : (
      <Navigate to={redirectTo} replace state={{}} />
    );
  };
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="project/:projectId" element={<ProjectDetail />} />
        <Route path="project-update/:projectId" element={<UpdateProject />} />
        <Route
          path="interest-update/:interestId"
          element={<UpdateInterest />}
        />
        <Route
          path="/admin"
          element={<PrivateRoute element={<Admin />} redirectTo="/login" />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Blogs" element={<Resources />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/note-update/:noteId" element={<UpdateNotes />} />
        <Route path="/blog/:blogId" element={<BlogDetails />} />
        <Route path="update-blog/:blogId" element={<UpdateBlog />} />
        <Route path="update-skill/:skillId" element={<UpdateSkill />} />
        <Route
          path="/update-education/:educationId"
          element={<UpdateEducation />}
        />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
