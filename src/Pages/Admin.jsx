import React from "react";
import CreateProject from "../components/Adminpage/CreateProject";
import CreateInterest from "../components/Adminpage/CreateInterest";
import CreateNotes from "../components/Adminpage/CreateNotes";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="pt-3 flex align-center justify-center border-b border-gray-700 pb-[60px]">
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="border-2 border-gray-300 hover:gap-5 text-zinc-900 font-bold py-2 px-8 rounded  flex gap-4"
          onClick={() => navigate(`/create-blog`)}
        >
          <div className="ml-1"> Create Blog</div>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="border-b border-gray-700 pb-[60px]">
        <h2 className="text-center text-[30px]">Create new project</h2>
        <CreateProject />
      </div>
      <div className="border-b border-gray-700 pb-[60px]">
        <h2 className="text-center text-[30px]">Create new Interest</h2>
        <CreateInterest />
      </div>
      <div className="border-b border-gray-700 pb-[60px]">
        <h2 className="text-center text-[30px]">Create new Notes</h2>
        <CreateNotes />
      </div>
    </div>
  );
};

export default Admin;
