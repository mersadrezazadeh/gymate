import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Buttons({ handlePrev, handleNext }) {
  return (
    <div className="absolute bottom-6 right-5 flex gap-2">
      <button
        className="bg-white p-3 transition-all hover:bg-red hover:text-white"
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </button>

      <button
        className="bg-white p-3 transition-all hover:bg-red hover:text-white"
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Buttons;
