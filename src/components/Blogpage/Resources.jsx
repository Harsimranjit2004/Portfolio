import React, { useState } from "react";
import Navbar from "../Navbar";
import { Tab, Tabs } from "@mui/material";
import Blogs from "./Blogs";
import Notes from "./Notes";
const Resources = () => {
  const [selectedTab, setSelectedTab] = useState("blogs");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Navbar isHomePage={"no"} />
      <div className="mt-[4rem]">
        <h2 className="text-green-500 text-4xl text-center pt-2 pb-2">
          Blogs & Notes
        </h2>
      </div>
      <div className=" text-white w-[70vw] m-auto">
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          textColor="inherit"
          className="text-xl"
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab value="blogs" label="Blogs" />
          <Tab value="notes" label="Notes" />
          {/* <Tab value="notebooks" label="Notebooks" /> */}
        </Tabs>
      </div>
      <div className="main_content">
        {selectedTab === "blogs" && (
          <div className="text-white">
            {" "}
            <Blogs />
          </div>
        )}
        {selectedTab === "notes" && (
          <div className="text-white">
            {" "}
            <Notes />
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
