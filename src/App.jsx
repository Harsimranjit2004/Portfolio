import React from "react";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full  h-screen">
      {/* <Navbar /> */}
      <Home />
    </div>
  );
};

export default App;
