import React from "react";
import CreateProject from "../components/Adminpage/CreateProject";
import CreateInterest from "../components/Adminpage/CreateInterest";

const Admin = () => {
  return (
    <div>
      <div className="border-b border-gray-700 mb-[60px]">
        <h2 className="text-center text-[30px]">Create new project</h2>
        <CreateProject />
      </div>
      <div className="border-b border-gray-700 mb-[60px]">
        <h2 className="text-center text-[30px]">Create new Interest</h2>
        <CreateInterest />
      </div>
    </div>
  );
};

export default Admin;
