import React from "react";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/Footer";
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full  h-screen">
      {/* <Navbar /> */}
      <Home />
      <Footer />
    </div>
  );
};

export default App;
