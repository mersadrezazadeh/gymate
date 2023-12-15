import Coaches from "./Coaches";
import Title from "./Title";

function Trainers() {
  return (
    <section className="relative overflow-clip bg-[url('./images/trainers/bg.png')] px-6 py-32 after:absolute after:right-0 after:top-0 after:z-[-1] after:h-96 after:w-full after:animate-float1 after:bg-[url('./images/trainers/bg-attachment.png')] after:bg-right after:bg-no-repeat">
      <div className="container space-y-14">
        <Title />

        <Coaches />
      </div>
    </section>
  );
}

export default Trainers;
