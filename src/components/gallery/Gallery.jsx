import Images from "./Images";
import Title from "./Title";

function Gallery() {
  return (
    <section className="overflow-x-clip px-6 py-32">
      <div className="container space-y-10">
        <Title />

        <Images />
      </div>
    </section>
  );
}

export default Gallery;
