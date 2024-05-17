import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useGetBlogsQuery } from "../../features/blogsApiSlice";
import { useParams } from "react-router-dom";
import formatDate from "../../Utils/convertDate";

const BlogDetail = () => {
  const [date, setDate] = useState();
  const { blogId } = useParams();
  const { blog } = useGetBlogsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      blog: data?.entities[blogId],
    }),
  });
  useEffect(() => {
    setDate(formatDate(blog?.createdAt));
  }, [blog]);

  return (
    <div className="bg-zinc-900">
      <Navbar isHomePage={"no"} />
      <div className="mt-[4rem] flex align-center justify-center ">
        <div className="headingContainer">
          <div className="imgContainer w-screen h-[300px]  ">
            <img
              src={blog?.imgUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <h2 className="z-[900] mt-4  text-6xl text-center text-white">
              {blog?.title}
            </h2>
          </div>
          <div className="grid lg:grid-cols-3  mt-3 md:pr-10 md:pl-10  gap-4 text-white px-5 border-t border-gray-700">
            <div className="md:col-span-2   lg:border-r border-gray-700 ">
              <div className="md:p-10 p-4 border-b border-gray-700">
                <h2 className="pt-10 text-2xl">Introduction</h2>
                <p className="text-left pt-4">{blog?.description}</p>
              </div>
              <div>
                <div
                  className="md:p-10  p-4 border-gray-700"
                  dangerouslySetInnerHTML={{ __html: blog?.content }}
                />
              </div>
            </div>
            <div className=" col-span-1">
              <div className="md:p-10 p-3">
                <div className="publication-row flex align-center justify-center">
                  <div className=" w-full p-4">
                    <h4 className="text-gray-500">Publication Date</h4>
                    <h2>{date}</h2>
                  </div>
                  <div className="w-full p-4">
                    <h4 className="text-gray-500">Category</h4>
                    <h2>{blog?.category}</h2>
                  </div>
                </div>
                <div className="reading-row flex align-center justify-center">
                  <div className="w-full p-4">
                    <h4 className="text-gray-500">Reading Time</h4>
                    <h2>{blog?.readingTime}</h2>
                  </div>
                  <div className="w-full p-4">
                    <h4 className="text-gray-500">Author Name</h4>
                    <h2>{blog?.author}</h2>
                  </div>
                </div>
              </div>
              <div className="lg:grid hidden p-10">
                <h4 className="text-gray-500">Table of Contents</h4>
                <div className=" glass p-2 line-height-3 mt-4">
                  <ul>
                    {blog?.tableContent?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
