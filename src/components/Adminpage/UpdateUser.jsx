import React, { useState } from "react";
import {
  selectAllUsers,
  useUpdateUserMutation,
} from "../../features/userApiSlice";
import { useSelector } from "react-redux";

const UpdateUser = () => {
  const user = useSelector(selectAllUsers);
  const [UpdateUser] = useUpdateUserMutation();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await UpdateUser({ id: user?.[0].id, ...formData });
    alert("user updated");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData?.username}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            value={formData?.title}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <button
            //   disabled={isUploading}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
