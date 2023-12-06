import Posts from "./Posts";
import Sidebar from "../blog-page/Sidebar";

function BlogLayout() {
  return (
    <section className="px-6 py-32">
      <div className="container 2xl:flex 2xl:gap-20">
        <Posts />

        <Sidebar />
      </div>
    </section>
  );
}

export default BlogLayout;
