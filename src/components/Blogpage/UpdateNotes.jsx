import React, { useEffect, useState } from "react";
import {
  useGetNotesQuery,
  useUpdateNotesMutation,
} from "../../features/notesApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import uploadImageToCloudinary from "../../Utils/cloundinaryUpload";

const UpdateNotes = () => {
  const navigate = useNavigate();
  const [updateNotes] = useUpdateNotesMutation();
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    fileUrl: "",
    imgUrl: "",
  });
  const { noteId } = useParams();
  const { note } = useGetNotesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      note: data?.entities[noteId],
    }),
  });
  useEffect(() => {
    setFormData({ ...note });
  }, [note]);
  const handleChange = async (e) => {
    const { name, type } = e.target;
    if (type === "file") {
      try {
        setIsUploading(true);
        const file = e.target.files[0];
        const url = await uploadImageToCloudinary(file);
        setFormData({ ...formData, [name]: url });
      } catch (error) {
        console.error("Error uploading image", error);
      } finally {
        setIsUploading(false);
      }
    } else {
      const value = e.target.value;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateNotes({ ...formData });
    navigate("/");
  };
  return (
    <div className="h-screen">
      <h2 className="text-center text-[34px]">Update Note</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <fieldset disabled={isUploading}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="img"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              // disabled={isUploading}
              type="file"
              id="imgUrl"
              name="imgUrl"
              // multiple // Allow multiple file selection
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700"
            >
              file URL
            </label>
            <input
              // disabled={isUploading}
              type="file"
              id="fileUrl"
              name="fileUrl"
              // multiple // Allow multiple file selection
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <button
              disabled={isUploading}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateNotes;
