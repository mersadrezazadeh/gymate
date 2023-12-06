import { useState } from "react";
import { gallery } from "./Data";
import Pagination from "../pagination/Pagination";

const imgStyles = `relative transition-all duration-300 after:absolute after:bottom-1/2 after:right-1/2 after:z-10 after:h-[80%] after:w-[80%] after:translate-x-1/2 after:translate-y-1/2 after:bg-red after:bg-opacity-0 after:transition-all after:duration-300 hover:scale-110 hover:after:bg-opacity-50`;

function Images() {
  const [curPage, setCurPage] = useState(0);
  const itemPerPage = Math.ceil(gallery.length / 2);
  const numPages = Math.ceil(gallery.length / itemPerPage);

  return (
    <section className="px-6 py-32">
      <div className="container">
        <div className=" grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
          {gallery
            .slice(curPage * itemPerPage, itemPerPage * (curPage + 1))
            .map((item) => (
              <div className="overflow-hidden" key={item.id}>
                <div className={imgStyles}>
                  <img src={item.image} alt="" />
                </div>
              </div>
            ))}
        </div>

        <Pagination
          curPage={curPage}
          numPages={numPages}
          setCurPage={setCurPage}
        />
      </div>
    </section>
  );
}

export default Images;
