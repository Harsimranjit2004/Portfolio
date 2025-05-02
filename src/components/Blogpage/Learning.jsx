import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FileCode, FileText, FileImage, Book, ChevronRight, FileBarChart2, Presentation } from "lucide-react";
import { useDeleteLearningMutation, useGetLearningsQuery } from "../../features/learningsApiSlice"; // <-- very important
import FileViewer from "./FileViewer";
import { useSelector } from "react-redux";

const LearningDetail = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const { topicId } = useParams();
    const { data: learnings, isLoading, isError } = useGetLearningsQuery();

    const [activeFile, setActiveFile] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
    }

    if (isError || !learnings?.entities[topicId]) {
        return (
            <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Topic Not Found</h1>
                <Link to="/learning" className="text-green-400 hover:underline">
                    Back to Learning
                </Link>
            </div>
        );
    }
    const [deleteLearning] = useDeleteLearningMutation();
    const handleDelete = () => {
        deleteLearning({ topicId })
    }
    const topic = learnings.entities[topicId];
    const currentFile = topic.files[activeFile];

    const getFileIcon = (fileName) => {
        const ext = fileName.split('.').pop().toLowerCase();
        if (["py", "js", "cpp", "java"].includes(ext)) return <FileCode size={16} />;
        if (["md", "txt"].includes(ext)) return <FileText size={16} />;
        if (["png", "jpg", "jpeg", "gif"].includes(ext)) return <FileImage size={16} />;
        if (["ipynb", "json"].includes(ext)) return <FileBarChart2 size={16} />;
        if (["ppt", "pptx"].includes(ext)) return <Presentation size={16} />;
        return <Book size={16} />;
    };

    const filteredFiles = topic.files.filter(file => {
        if (!file || !file.name) return false;
        return file.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="min-h-screen bg-[#1e1e1e] text-white flex flex-col">
            {/* Breadcrumb */}
            <header className="border-b border-gray-700 py-3 sticky top-0 bg-[#1e1e1e] z-10">
                <div className="flex items-center px-4 gap-2 text-sm text-gray-400">
                    <Link to="/blogs" className="hover:underline">Learning</Link>
                    <ChevronRight size={14} />
                    <span>{topic.title}</span>
                    <ChevronRight size={14} />
                    <span className="text-white">{currentFile.name}</span>
                </div>
            </header>

            {/* Body */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-64 border-r border-gray-700 bg-[#252525] flex flex-col">
                    {/* Search */}
                    <div className="p-3">
                        <input
                            type="text"
                            placeholder="Search files..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-2 rounded bg-[#1e1e1e] border border-gray-700 text-white placeholder-gray-400 text-sm"
                        />
                    </div>

                    {/* Files List */}
                    <div className="flex-1 overflow-auto p-2 space-y-1">
                        {filteredFiles.map((file, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveFile(topic.files.indexOf(file))}
                                className={`w-full flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition ${activeFile === topic.files.indexOf(file) ? "bg-gray-700" : ""
                                    }`}
                            >
                                {getFileIcon(file.name)}
                                <span className="truncate">{file.name}</span>
                            </button>
                        ))}
                        {filteredFiles.length === 0 && (
                            <p className="text-center text-gray-500 text-xs">No files found</p>
                        )}
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-auto p-4 animate-fadeIn">
                    <FileViewer file={currentFile} />
                </div>

            </div>
        </div>
    );
};

export default LearningDetail;
