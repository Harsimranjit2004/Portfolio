import React, { useEffect, useState } from "react";
import {
  useGetSkillsQuery,
  useUpdateSkillsMutation,
} from "../../features/skillsApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import uploadImageToCloudinary from "../../Utils/cloundinaryUpload";
const UpdateSkill = () => {
  const navigate = useNavigate();
  const { skillId } = useParams();
  const [updateSkill] = useUpdateSkillsMutation();
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    text: "",
    value: "",
    icon: "",
  });
  const { skill } = useGetSkillsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      skill: data?.entities[skillId],
    }),
  });
  useEffect(() => {
    setFormData({ ...skill });
  }, [skill]);
  const handleChange = async (e) => {
    const { name, type } = e.target;
    if (type === "file") {
      try {
        setIsUploading(true);
        const file = e.target.files[0];
        const url = await uploadImageToCloudinary(file);
        setFormData({ ...formData, [name]: url });
      } catch (error) {
        console.log("Error uploading image", error);
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
    await updateSkill({ ...formData });
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <fieldset disabled={isUploading}>
          <div className="mb-4">
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              Text
            </label>
            <input
              type="text"
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="value"
              className="block text-sm font-medium text-gray-700"
            >
              Value
            </label>
            <input
              type="text"
              id="value"
              name="value"
              value={formData.value}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="icon"
              className="block text-sm font-medium text-gray-700"
            >
              Icon
            </label>
            <input
              type="file"
              id="icon"
              name="icon"
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

export default UpdateSkill;
