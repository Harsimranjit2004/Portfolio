import { useState, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useAddNewLearningMutation } from "../../features/learningsApiSlice";
import uploadImageToCloudinary from "../../Utils/cloundinaryUpload"; // your upload function
import "react-quill/dist/quill.snow.css";

const CreateLearning = () => {
    const [addLearning] = useAddNewLearningMutation();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        author: "",
        tags: "",
        thumbnailUrl: "",
    });

    const [files, setFiles] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const navigate = useNavigate();
    const quill = useRef();

    const handleChange = async (e) => {
        const { name, type, value } = e.target;
        if (type === "file") {
            setIsUploading(true);
            const file = e.target.files[0];
            try {
                const url = await uploadImageToCloudinary(file);
                setFormData({ ...formData, [name]: url });
            } catch (error) {
                console.error("Error uploading image", error);
            } finally {
                setIsUploading(false);
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleAddFile = () => {
        setFiles((prev) => [
            ...prev,
            { name: "", type: "code", content: "" }
        ]);
    };

    const handleFileChange = (index, field, value) => {
        const newFiles = [...files];
        newFiles[index][field] = value;
        setFiles(newFiles);
    };

    const handleRemoveFile = (index) => {
        const newFiles = files.filter((_, idx) => idx !== index);
        setFiles(newFiles);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tagsArray = formData.tags.split(",").map((tag) => tag.trim());
        await addLearning({
            ...formData,
            tags: tagsArray,
            files,
        });
        alert("Learning topic created successfully!");
        navigate("/learning");
    };

    return (
        <div className="p-10 min-h-screen bg-[#1e1e1e] text-white">
            {/* Go Back Button */}
            <button
                onClick={() => navigate("/")}
                className="border border-gray-400 p-2 rounded hover:bg-gray-700 mb-5 flex items-center gap-2"
            >
                <FontAwesomeIcon icon={faArrowRight} rotation={180} />
                Go Back
            </button>

            {/* Form */}
            <div className="bg-[#252525] p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Create New Learning Topic</h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Title */}
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Title"
                        className="w-full p-2 rounded bg-[#1e1e1e] border border-gray-700"
                        required
                    />

                    {/* Description */}
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full p-2 rounded bg-[#1e1e1e] border border-gray-700"
                        rows="4"
                        required
                    />

                    {/* Author */}
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Author"
                        className="w-full p-2 rounded bg-[#1e1e1e] border border-gray-700"
                    />

                    {/* Tags */}
                    <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        placeholder="Tags (comma separated)"
                        className="w-full p-2 rounded bg-[#1e1e1e] border border-gray-700"
                    />

                    {/* Thumbnail Upload */}
                    <div>
                        <label className="text-sm text-gray-400">Thumbnail Image:</label>
                        <input
                            type="file"
                            name="thumbnailUrl"
                            onChange={handleChange}
                            className="block w-full mt-1 text-sm text-gray-400"
                            disabled={isUploading}
                        />
                    </div>

                    {/* Files Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold mt-6 mb-2">Files</h3>
                        {files.map((file, index) => (
                            <div key={index} className="bg-[#1e1e1e] p-3 rounded border border-gray-700 space-y-2">
                                <input
                                    type="text"
                                    placeholder="File Name (example.py)"
                                    value={file.name}
                                    onChange={(e) => handleFileChange(index, "name", e.target.value)}
                                    className="w-full p-2 rounded bg-[#252525] border border-gray-700"
                                />
                                <select
                                    value={file.type}
                                    onChange={(e) => handleFileChange(index, "type", e.target.value)}
                                    className="w-full p-2 rounded bg-[#252525] border border-gray-700"
                                >
                                    <option value="code">Code</option>
                                    <option value="note">Note</option>
                                    <option value="image">Image</option>
                                    <option value="ppt">Presentation</option>
                                    <option value="notebook">Notebook</option>
                                </select>
                                <textarea
                                    placeholder="File Content"
                                    value={file.content}
                                    onChange={(e) => handleFileChange(index, "content", e.target.value)}
                                    className="w-full p-2 rounded bg-[#252525] border border-gray-700"
                                    rows="4"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveFile(index)}
                                    className="text-red-500 text-xs hover:underline"
                                >
                                    Remove File
                                </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={handleAddFile}
                            className="text-green-400 text-sm hover:underline"
                        >
                            + Add File
                        </button>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-white font-bold mt-6"
                    >
                        Create Learning
                    </button>

                </form>
            </div>
        </div>
    );
};

export default CreateLearning;
