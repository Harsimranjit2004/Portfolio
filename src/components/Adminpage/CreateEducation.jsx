import React, { useState } from "react";
import { useAddNewEducationMutation } from "../../features/educationApiSlice";

const CreateEducation = () => {
  const [addEducation] = useAddNewEducationMutation();
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    isEducation: "",
    organizationName: "",
    paragraph: "",
    listItem: "",
  });
  const handleChange = async (e) => {
    const { name, type } = e.target;
    let value = "";
    if (name == "listItem") {
      const string = e.target.value;
      const tagsArray = string.split(",").map((tag) => tag.trim());
      value = tagsArray;
    } else {
      value = e.target.value;
    }
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEducation({ ...formData });
  };
  return (
    <div>
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
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="text"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="isEducation"
              className="block text-sm font-medium text-gray-700"
            >
              IsEducation
            </label>
            <input
              type="text"
              id="isEducation"
              name="isEducation"
              value={formData.isEducation}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="organizationName"
              className="block text-sm font-medium text-gray-700"
            >
              organizationName
            </label>
            <input
              type="text"
              id="organizationName"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="paragraph"
              className="block text-sm font-medium text-gray-700"
            >
              paragraph
            </label>
            <input
              type="text"
              id="paragraph"
              name="paragraph"
              value={formData.paragraph}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="listItem"
              className="block text-sm font-medium text-gray-700"
            >
              listItem
            </label>
            <input
              type="text"
              id="listItem"
              name="listItem"
              value={formData.listItem}
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

export default CreateEducation;
