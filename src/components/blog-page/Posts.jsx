import { useState } from "react";
import { blogs } from "./Data";
import TertiaryButton from "../buttons/TertiaryButton";
import Pagination from "../pagination/Pagination";

function Posts() {
  const [curPage, setCurPage] = useState(0);
  const itemPerPage = Math.ceil(blogs.length / 2);
  const numPages = Math.ceil(blogs.length / itemPerPage);

  return (
    <div className="flex flex-col gap-14">
      {blogs
        .slice(curPage * itemPerPage, itemPerPage * (curPage + 1))
        .map((blog) => (
          <div key={blog.id} className="flex flex-col 2xl:max-w-[900px] ">
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt=""
                className="block transition-all duration-300 hover:scale-110"
              />
            </div>
            <p className="my-5 inline text-gray-300">
              By <span className="font-bold text-gray-600">{blog.author}</span>{" "}
              | {blog.date} | {blog.category}
            </p>
            <h3 className="mb-4 text-3xl font-bold">{blog.title}</h3>
            <p className="mb-8 font-medium  text-gray-300">{blog.desc}</p>
            <div>
              <TertiaryButton>Read more</TertiaryButton>
            </div>
          </div>
        ))}

      <Pagination
        curPage={curPage}
        numPages={numPages}
        setCurPage={setCurPage}
      />
    </div>
  );
}

export default Posts;
