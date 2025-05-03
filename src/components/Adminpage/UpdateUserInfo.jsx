// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import {
//   selectAllUserInfos,
//   useUpdateUserInfoMutation,
// } from "../../features/userInfoApiSlice";
// import uploadImageToCloudinary from "../../Utils/cloundinaryUpload";

// const UpdateUserInfo = () => {
//   const allUserInfo = useSelector(selectAllUserInfos);
//   const [updateUserInfo] = useUpdateUserInfoMutation();
//   const [isUploading, setIsUploading] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     phone: "",
//     linkedin: "",
//     twitter: "",
//     kaggle: "",
//     github: "",
//     projects: "",
//     experience: "",
//     tags: "",
//     HomeAbout: "",
//     AboutPage: "",
//     image1: "",
//     image2: "",
//     resume: "",
//   });
//   useEffect(() => {
//     setFormData({ ...allUserInfo?.[0] });
//   }, [allUserInfo]);
//   console.log(formData);
//   const handleChange = async (e) => {
//     const { name, type } = e.target;
//     if (type == "file") {
//       try {
//         setIsUploading(true);
//         const file = e.target.files[0];
//         const url = await uploadImageToCloudinary(file);
//         setFormData({ ...formData, [name]: url });
//       } catch (error) {
//         console.error("Error uploading image:", error);
//       } finally {
//         setIsUploading(false);
//       }
//     } else {
//       const string = e.target.value;
//       let value = "";
//       if (name == "tags") {
//         const tagsArray = string.split(",").map((tag) => tag.trim());
//         value = tagsArray;
//       } else {
//         value = e.target.value;
//       }
//       //   setFormData({ ...formData, [name]: e.target.value });
//       setFormData({ ...formData, [name]: value });
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData)
//     // await updateUserInfo({ ...formData });
//     alert("userInfo updated");
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//         <fieldset disabled={isUploading}>
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="text"
//               id="email"
//               name="email"
//               value={formData?.email}
//               onChange={handleChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="phone"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Phone
//             </label>
//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               value={formData?.phone}
//               onChange={handleChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="linkedin"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Linkedin
//             </label>
//             <input
//               type="text"
//               id="linkedin"
//               name="linkedin"
//               value={formData?.linkedin}
//               onChange={handleChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="twitter"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Twitter
//             </label>
//             <input
//               type="text"
//               id="twitter"
//               name="twitter"
//               value={formData?.twitter}
//               onChange={handleChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="kaggle"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Kaggle
//             </label>
//             <input
//               type="text"
//               id="kaggle"
//               name="kaggle"
//               value={formData?.kaggle}
//               onChange={handleChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="github"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Github
//             </label>
//             <input
//               type="text"
//               id="github"
//               name="github"
//               value={formData?.github}
//               onChange={handleChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="projects"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Project
//             </label>
//             <input
//               type="text"
//               id="projects"
//               name="projects"
//               value={formData?.projects}
//               onChange={handleChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="experience"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Experience
//             </label>
//             <input
//               type="text"
//               id="experience"
//               name="experience"
//               value={formData?.experience}
//               onChange={handleChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="tags"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Tags
//             </label>
//             <input
//               type="text"
//               id="tags"
//               name="tags"
//               value={formData?.tags}
//               onChange={handleChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="HomeAbout"
//               className="block text-sm font-medium text-gray-700"
//             >
//               HomeAbout
//             </label>
//             <textarea
//               type="text"
//               id="HomeAbout"
//               name="HomeAbout"
//               value={formData?.HomeAbout}
//               onChange={handleChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full h-[10rem]"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="AboutPage"
//               className="block text-sm font-medium text-gray-700"
//             >
//               AboutPage
//             </label>
//             <textarea
//               type="text"
//               id="AboutPage"
//               name="AboutPage"
//               value={formData?.AboutPage}
//               onChange={handleChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full h-[10rem]"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="image1"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Image1
//             </label>
//             <input
//               type="file"
//               id="image1"
//               name="image1"
//               onChange={handleChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="image2"
//               className="block text-sm font-medium text-gray-700"
//             >
//               image2
//             </label>
//             <input
//               type="file"
//               id="image2"
//               name="image2"
//               onChange={handleChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="resume"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Resume
//             </label>
//             <input
//               type="text"
//               id="resume"
//               name="resume"
//               value={formData?.resume}
//               onChange={handleChange}
//               className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <button
//               disabled={isUploading}
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Submit
//             </button>
//           </div>
//         </fieldset>
//       </form>
//     </div>
//   );
// };

// export default UpdateUserInfo;
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectAllUserInfos,
  useUpdateUserInfoMutation,
  useGetUserInfoQuery,
} from "../../features/userInfoApiSlice";
import uploadImageToCloudinary from "../../Utils/cloundinaryUpload";

const UpdateUserInfo = () => {
  const { refetch } = useGetUserInfoQuery();
  const allUserInfo = useSelector(selectAllUserInfos);
  const [updateUserInfo, { isLoading: isUpdating, isSuccess, isError, error }] = useUpdateUserInfoMutation();

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
    tags: [],
    HomeAbout: "",
    AboutPage: "",
    image1: "",
    image2: "",
    resume: "",
  });

  useEffect(() => {
    if (allUserInfo && allUserInfo.length > 0) {
      const userInfo = allUserInfo[0];
      console.log("Received user data:", userInfo);

      // Make sure we have the ID for updating
      setFormData({
        ...userInfo,
        // Ensure id is set correctly
        id: userInfo._id || userInfo.id,
        // Handle tags properly
        tags: Array.isArray(userInfo.tags) ? userInfo.tags :
          typeof userInfo.tags === 'string' ? userInfo.tags.split(',').map(tag => tag.trim()) : []
      });
    }
  }, [allUserInfo]);

  const handleChange = async (e) => {
    const { name, type } = e.target;

    if (type === "file") {
      if (!e.target.files || !e.target.files[0]) return;

      try {
        setIsUploading(true);
        const file = e.target.files[0];
        const url = await uploadImageToCloudinary(file);
        setFormData(prev => ({ ...prev, [name]: url }));
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload file");
      } finally {
        setIsUploading(false);
      }
    }
    else if (name === "tags") {
      const tagsValue = e.target.value;
      const tagsArray = tagsValue.split(",").map(tag => tag.trim()).filter(Boolean);
      setFormData(prev => ({ ...prev, [name]: tagsArray }));
    }
    else {
      setFormData(prev => ({ ...prev, [name]: e.target.value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure we have an ID
    if (!formData.id && !formData._id) {
      alert("Error: No ID found for this record");
      return;
    }

    try {
      // Make sure to include the ID field that matches what your backend expects
      const dataToSubmit = {
        ...formData,
        id: formData.id || formData._id // Make sure at least one is present
      };

      console.log("Submitting data:", dataToSubmit);

      // Use await with the mutation to properly catch errors
      const result = await updateUserInfo(dataToSubmit).unwrap();
      console.log("Update successful:", result);
      alert("User info updated successfully!");
      refetch();
    } catch (err) {
      console.error("Failed to update:", err);
      alert(`Update failed: ${err.message || "Unknown error"}`);
    }
  };

  // Display tags as comma separated string in the input
  const displayTags = Array.isArray(formData?.tags)
    ? formData.tags.join(", ")
    : formData?.tags || "";

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Profile Information</h2>

      {/* Show API status */}
      {isError && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          Error: {error?.data?.message || error?.error || "Failed to update"}
        </div>
      )}

      {isSuccess && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Profile updated successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <fieldset disabled={isUploading || isUpdating}>
          {/* Debug info - Remove in production */}
          <div className="mb-4 p-2 bg-gray-100 rounded text-xs">
            <strong>Debug:</strong> ID: {formData?.id || formData?._id || "None"}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData?.email || ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData?.phone || ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
              LinkedIn
            </label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              value={formData?.linkedin || ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
              Twitter
            </label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              value={formData?.twitter || ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="kaggle" className="block text-sm font-medium text-gray-700">
              Kaggle
            </label>
            <input
              type="text"
              id="kaggle"
              name="kaggle"
              value={formData?.kaggle || ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="github" className="block text-sm font-medium text-gray-700">
              GitHub
            </label>
            <input
              type="text"
              id="github"
              name="github"
              value={formData?.github || ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="projects" className="block text-sm font-medium text-gray-700">
              Projects
            </label>
            <input
              type="text"
              id="projects"
              name="projects"
              value={formData?.projects || ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
              Experience
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData?.experience || ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
              Tags (comma separated)
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={displayTags}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="React, Node.js, MongoDB"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="HomeAbout" className="block text-sm font-medium text-gray-700">
              Home About Text
            </label>
            <textarea
              id="HomeAbout"
              name="HomeAbout"
              value={formData?.HomeAbout || ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full h-[10rem]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="AboutPage" className="block text-sm font-medium text-gray-700">
              About Page Text
            </label>
            <textarea
              id="AboutPage"
              name="AboutPage"
              value={formData?.AboutPage || ""}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full h-[10rem]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image1" className="block text-sm font-medium text-gray-700">
              Profile Image
            </label>
            {formData?.image1 && (
              <div className="mb-2">
                <img
                  src={formData.image1}
                  alt="Current profile"
                  className="w-20 h-20 object-cover rounded-md"
                />
              </div>
            )}
            <input
              type="file"
              id="image1"
              name="image1"
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image2" className="block text-sm font-medium text-gray-700">
              Secondary Image
            </label>
            {formData?.image2 && (
              <div className="mb-2">
                <img
                  src={formData.image2}
                  alt="Secondary profile"
                  className="w-20 h-20 object-cover rounded-md"
                />
              </div>
            )}
            <input
              type="file"
              id="image2"
              name="image2"
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
              Resume
            </label>
            {formData?.resume && (
              <div className="mb-2">
                <a
                  href={formData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Current Resume
                </a>
              </div>
            )}
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
              type="submit"
              disabled={isUploading || isUpdating}
              className={`${isUploading || isUpdating
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
                } text-white font-bold py-2 px-4 rounded w-full`}
            >
              {isUploading
                ? "Uploading..."
                : isUpdating
                  ? "Updating..."
                  : "Update Profile"}
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateUserInfo;
