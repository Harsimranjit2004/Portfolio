import React, { useEffect, useState } from "react";
import {
  useGetProjectQuery,
  useUpdateProjectMutation,
} from "../../features/projectsApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import uploadImageToCloudinary from "../../Utils/cloundinaryUpload";

const UpdateProject = () => {
  const navigate = useNavigate();
  const [UpdateProject] = useUpdateProjectMutation();
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    projectLink: "",
    codeLink: "",
    imageUrl: "",
    tags: "",
    technologiesUsed: "",
    status: "",
    highlights: [],
    screenshots: [],
    video: [],
    details: "",
    creationDate: "",
  });
  const { projectId } = useParams();
  const { project } = useGetProjectQuery(undefined, {
    selectFromResult: ({ data }) => ({
      project: data?.entities[projectId],
    }),
  });
  useEffect(() => {
    if (project) {
      setFormData({ ...project });
    }
  }, [project]);

  const handleChange = async (e) => {
    const { name, type } = e.target;
    if (type == "file") {
      if (e.target.files.length == 1) {
        try {
          setIsUploading(true);
          const file = e.target.files[0];
          const url = await uploadImageToCloudinary(file);
          setFormData({ ...formData, [name]: url });
        } catch (error) {
          console.error("Error uploading image:", error);
        } finally {
          setIsUploading(false);
        }
      } else {
        try {
          setIsUploading(true);
          const files = e.target.files;
          const urls = [];
          for (let i = 0; i < files.length; i++) {
            const url = await uploadImageToCloudinary(files[i]);
            urls[i] = url;
          }
          setFormData({ ...formData, [name]: urls });
        } catch (error) {
          console.error("error upload image");
        } finally {
          setIsUploading(false);
        }
      }
    } else {
      //   const value = e.target.value;
      const string = e.target.value;
      let value = "";
      if (
        name == "tags" ||
        name == "technologiesUsed" ||
        name == "highlights"
      ) {
        const tagsArray = string.split(",").map((tag) => tag.trim());
        value = tagsArray;
      } else {
        value = e.target.value;
      }
      //   setFormData({ ...formData, [name]: e.target.value });
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await UpdateProject({ ...formData });
    navigate("/");
    // Handle form submission, e.g., send data to backend or perform validation
  };
  return (
    <div>
      <h2 className="text-center text-[34px]">Update Interest</h2>
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
              value={formData?.title}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData?.description}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="projectLink"
              className="block text-sm font-medium text-gray-700"
            >
              Project Link
            </label>
            <input
              type="text"
              id="projectLink"
              name="projectLink"
              value={formData?.projectLink}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="codeLink"
              className="block text-sm font-medium text-gray-700"
            >
              Code Link
            </label>
            <input
              type="text"
              id="codeLink"
              name="codeLink"
              value={formData?.codeLink}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-700"
            >
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData?.tags}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="technologiesUsed"
              className="block text-sm font-medium text-gray-700"
            >
              Technologies Used
            </label>
            <input
              type="text"
              id="technologiesUsed"
              name="technologiesUsed"
              value={formData?.technologiesUsed}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData?.status}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="highlights"
              className="block text-sm font-medium text-gray-700"
            >
              Highlights
            </label>
            <input
              type="text"
              id="highlights"
              name="highlights"
              value={formData?.highlights}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="details"
              className="block text-sm font-medium text-gray-700"
            >
              Details
            </label>
            <textarea
              id="details"
              name="details"
              value={formData?.details}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="creationDate"
              className="block text-sm font-medium text-gray-700"
            >
              Creation Date
            </label>
            <input
              type="date"
              id="creationDate"
              name="creationDate"
              value={formData?.creationDate}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              // disabled={isUploading}
              type="file"
              id="imageUrl"
              name="imageUrl"
              multiple // Allow multiple file selection
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="screenshots"
              className="block text-sm font-medium text-gray-700"
            >
              Screenshots
            </label>
            <input
              // disabled={isUploading}
              type="file"
              id="screenshots"
              name="screenshots"
              multiple // Allow multiple file selection
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="video"
              className="block text-sm font-medium text-gray-700"
            >
              Video
            </label>
            <input
              // disabled={isUploading}
              type="file"
              id="video"
              name="video"
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
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

export default UpdateProject;
