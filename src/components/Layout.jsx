import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import React from "react";

const Layout = () => {
  return (
    <>
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
