import React from "react";
import Blog from "./Blog";
import { useGetBlogsQuery } from "../../features/blogsApiSlice";

const Blogs = () => {
  const { data } = useGetBlogsQuery(undefined, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  return (
    <div className="work__portfolio gap-5 p-4 pb-6">
      {data?.ids?.map((item, index) => (
        <Blog id={item} key={index} />
      ))}
    </div>
  );
};

export default Blogs;
