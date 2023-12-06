import HeroPages from "../components/hero-pages/HeroPages";
import BlogLayout from "../components/blog-page/BlogLayout";

function Blog() {
  return (
    <main>
      <HeroPages page="Blog" />

      <BlogLayout />
    </main>
  );
}

export default Blog;
