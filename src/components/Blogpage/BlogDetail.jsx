import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useGetBlogsQuery } from "../../features/blogsApiSlice";
import { useParams } from "react-router-dom";
import formatDate from "../../Utils/convertDate";

const BlogDetail = () => {
  const { blogId } = useParams();
  const [date, setDate] = useState("");

  const { blog } = useGetBlogsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      blog: data?.entities[blogId],
    }),
  });
console.log(blog?.content)
  useEffect(() => {
    if (blog?.createdAt) setDate(formatDate(blog?.createdAt));
  }, [blog]);

  return (
    <div className="bg-zinc-900 text-gray-200 min-h-screen">
      {/* Navbar */}
      <Navbar isHomePage={"no"} />

      {/* Header Section */}
      <header className="w-full bg-zinc-800 py-12 shadow-lg">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {blog?.title}
          </h1>
          <p className="text-lg text-gray-400">
            {date} • Written by{" "}
            <span className="text-green-400 font-semibold">{blog?.author}</span>
          </p>
        </div>
      </header>

      {/* Blog Layout */}
      <main className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
        {/* Table of Contents */}
        <aside className="hidden lg:block sticky top-24 h-fit">
          <div className="bg-zinc-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-green-400 mb-4">
              Table of Contents
            </h3>
            <ul className="space-y-4">
              {blog?.tableContent?.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-400 hover:text-green-400 cursor-pointer transition-all duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Blog Content */}
        <article className="bg-zinc-800 p-8 rounded-lg shadow-lg">
          <div
            className="prose prose-invert max-w-none leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          />
        </article>
      </main>
    </div>
  );
};

export default BlogDetail;
