import TertiaryButton from "../buttons/TertiaryButton";
import sidebar from "../../images/blog-page/sidebar.webp";

function Banner() {
  return (
    <div className="relative">
      <img src={sidebar} alt />
      <div className="absolute bottom-32 left-20 z-10">
        <TertiaryButton>Purchase now</TertiaryButton>
      </div>
      <p className="absolute left-0 top-10 bg-white px-8 py-4 text-4xl font-bold uppercase">
        Gymat
      </p>
      <p className="absolute left-10 top-32 z-10 text-2xl font-medium capitalize text-white">
        <span className="text-8xl font-bold">34%</span>
        <br />
        Flat discount
      </p>
    </div>
  );
}

export default Banner;
