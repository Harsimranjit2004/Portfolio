import React from "react";
import {
  useDeleteNotesMutation,
  useGetNotesQuery,
} from "../../features/notesApiSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Note = ({ id }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const { note } = useGetNotesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      note: data?.entities[id],
    }),
  });
  const [deleteNote] = useDeleteNotesMutation();
  const handleUpdateButton = () => {
    navigate(`/note-update/${id}`);
  };
  const handleDeleteButton = () => {
    deleteNote({ id });
  };
  console.log(note?.fileUrl);
  return (
    <div className="w-[320px] z-[900]">
      <div className="imageContainer w-[100%] h-[200px]">
        <div className="Image m-auto w-[97%] h-[190px] hover:w-[100%] hover:h-[200px] duration-700">
          <a href={note?.fileUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={note?.imgUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          </a>
        </div>
      </div>
      <div className="content">
        <div className="project__flex project__content">
          <h3 className="bold-text text-xl">{note?.title}</h3>
          <p className="" style={{ marginTop: 10 }}>
            {" "}
            {note?.description}
          </p>
          {/* <div className="project__tag project__flex bg-zinc-900 ">
            <p
              className=" font-bold text-green-500"
              style={{ textAlign: "left" }}
            >
              {/* {project?.tags?.[0]} */}
          {/* {filter} */}
          {/* </p>
          </div> */}{" "}
        </div>
      </div>
      {isAuthenticated && (
        <div className="flex gap-5 mt-2">
          <button
            className="bg-green-500 p-2 rounded-full  "
            onClick={handleUpdateButton}
          >
            Update
          </button>
          <button
            className="bg-green-500 p-2 rounded-full"
            onClick={handleDeleteButton}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Note;
