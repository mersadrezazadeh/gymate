import Title from "./Title";
import Cards from "./Cards";

function Blog() {
  return (
    <section className="overflow-x-clip px-6 py-32">
      <div className="container space-y-16">
        <Title />

        <Cards />
      </div>
    </section>
  );
}

export default Blog;
