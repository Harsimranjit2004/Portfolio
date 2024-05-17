import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectAllUserInfos,
  useUpdateUserInfoMutation,
} from "../../features/userInfoApiSlice";
import uploadImageToCloudinary from "../../Utils/cloundinaryUpload";

const UpdateUserInfo = () => {
  const allUserInfo = useSelector(selectAllUserInfos);
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    linkedin: "",
    twitter: "",
    kaggle: "",
    github: "",
    projects: "",
    experience: "",
    tags: "",
    HomeAbout: "",
    AboutPage: "",
    image1: "",
    image2: "",
    resume: "",
  });
  useEffect(() => {
    setFormData({ ...allUserInfo?.[0] });
  }, [allUserInfo]);
  console.log(formData);
  const handleChange = async (e) => {
    const { name, type } = e.target;
    if (type == "file") {
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
      const string = e.target.value;
      let value = "";
      if (name == "tags") {
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
    await updateUserInfo({ ...formData });
    alert("userInfo updated");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <fieldset disabled={isUploading}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData?.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData?.phone}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="linkedin"
              className="block text-sm font-medium text-gray-700"
            >
              Linkedin
            </label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              value={formData?.linkedin}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="twitter"
              className="block text-sm font-medium text-gray-700"
            >
              Twitter
            </label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              value={formData?.twitter}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="kaggle"
              className="block text-sm font-medium text-gray-700"
            >
              Kaggle
            </label>
            <input
              type="text"
              id="kaggle"
              name="kaggle"
              value={formData?.kaggle}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="github"
              className="block text-sm font-medium text-gray-700"
            >
              Github
            </label>
            <input
              type="text"
              id="github"
              name="github"
              value={formData?.github}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="projects"
              className="block text-sm font-medium text-gray-700"
            >
              Project
            </label>
            <input
              type="text"
              id="projects"
              name="projects"
              value={formData?.projects}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Experience
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData?.experience}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
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
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="HomeAbout"
              className="block text-sm font-medium text-gray-700"
            >
              HomeAbout
            </label>
            <textarea
              type="text"
              id="HomeAbout"
              name="HomeAbout"
              value={formData?.HomeAbout}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full h-[10rem]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="AboutPage"
              className="block text-sm font-medium text-gray-700"
            >
              AboutPage
            </label>
            <textarea
              type="text"
              id="AboutPage"
              name="AboutPage"
              value={formData?.AboutPage}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full h-[10rem]"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image1"
              className="block text-sm font-medium text-gray-700"
            >
              Image1
            </label>
            <input
              type="file"
              id="image1"
              name="image1"
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image2"
              className="block text-sm font-medium text-gray-700"
            >
              image2
            </label>
            <input
              type="file"
              id="image2"
              name="image2"
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700"
            >
              Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
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

export default UpdateUserInfo;
