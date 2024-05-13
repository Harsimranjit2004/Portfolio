import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetInterestQuery,
  useUpdateInterestMutation,
} from "../../features/interestApiSlice";
import uploadImageToCloudinary from "../../Utils/cloundinaryUpload";

const UpdateInterest = () => {
  const navigate = useNavigate();
  const [updateInterest] = useUpdateInterestMutation();
  const { interestId } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: "",
  });
  const [isUploading, setIsUploading] = useState(false);
  const { interest } = useGetInterestQuery(undefined, {
    selectFromResult: ({ data }) => ({
      interest: data?.entities[interestId],
    }),
  });
  useEffect(() => {
    if (interest) {
      setFormData({ ...interest });
    }
  }, [interest]);
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
    await updateInterest({ ...formData });
    navigate("/");
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
              value={formData.title}
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
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
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
              id="img"
              name="img"
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

export default UpdateInterest;
