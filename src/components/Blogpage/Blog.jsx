import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteBlogsMutation,
  useGetBlogsQuery,
} from "../../features/blogsApiSlice";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blog = ({ id }) => {
  const navigate = useNavigate();
  const { blog } = useGetBlogsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      blog: data?.entities[id],
    }),
  });
  const [deleteBlog] = useDeleteBlogsMutation();
  const handleUpdateButton = () => {
    navigate(`/update-blog/${id}`);
  };
  const handleDeleteButton = () => {
    deleteBlog({ id });
  };
  return (
    <div className="w-[320px] z-[900]">
      <div className="imageContainer w-[100%] h-[200px]">
        <div className="Image m-auto w-[97%] h-[190px] hover:w-[100%] hover:h-[200px] duration-700">
          <img
            src={blog?.imgUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="content">
        <div className="project__flex project__content">
          <h3 className="bold-text text-xl">{blog?.title}</h3>
          <p style={{ marginTop: 10 }}>{blog?.description}</p>
        </div>
      </div>
      <div className="pt-3 flex align-center justify-center">
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="border-2 border-gray-300 hover:gap-5 text-white font-bold py-2 px-8 rounded  flex gap-4"
          onClick={() => navigate(`/blog/${id}`)}
        >
          <div className="ml-1">Read More</div>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <div className="flex gap-5 mt-2">
        <button
          className="bg-green-500 p-2 rounded-full  "
          onClick={handleUpdateButton}
        >
          Update
        </button>
        <button
          className="bg-green-500 p-2 rounded-full"
          onClick={handleDeleteButton}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Blog;
