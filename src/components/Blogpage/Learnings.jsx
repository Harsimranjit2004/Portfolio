import { Link } from "react-router-dom";
import { FileCode, FileText, FileImage } from "lucide-react";
import { useGetLearningsQuery } from "../../features/learningsApiSlice"; // <-- important

const Learnings = () => {
    const { data: learnings, isLoading, isError } = useGetLearningsQuery();
    console.log(learnings)
    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
    }

    if (isError) {
        return <div className="min-h-screen flex items-center justify-center text-white">Failed to load learnings.</div>;
    }
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };
    const topics = Object.values(learnings.entities);

    return (
        <div className="min-h-screen bg-[#1e1e1e] text-white p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {topics.map((topic) => (
                    <Link
                        to={`/learning/${topic.id}`}
                        key={topic.id}
                        className="bg-[#252525] border border-gray-700 rounded-lg p-6 hover:border-green-400 transition-all hover:transform hover:scale-105"
                    >
                        <div className="flex flex-col items-center">
                            <div className={`bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                                <FileCode className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-medium mb-2 text-center">{topic.title}</h3>
                            <p className="text-gray-400 text-sm mb-2">{topic.category || "Uncategorized"}</p>
                            <div className="flex justify-between w-full text-xs text-gray-400 mt-4">
                                <span>{formatDate(topic.updatedAt) || "Unknown date"}</span>
                                <span>{topic.files?.length || 0} files</span>
                            </div>
                        </div>
                        {isAuthenticated && (
                            <div className="flex gap-5 mt-2">
                                <button
                                    className="bg-green-500 p-2 rounded-full"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>

                            </div>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default Learnings