import { useState } from "react";
import Image from "./Image";
import Slides from "./Slides";
import Buttons from "./Buttons";

function Slider() {
  const [curSlide, setCurSlide] = useState(0);

  function handlePrev() {
    if (curSlide <= 0) setCurSlide(2);
    else setCurSlide(curSlide - 1);
  }
  function handleNext() {
    if (curSlide >= 2) setCurSlide(0);
    else setCurSlide(curSlide + 1);
  }

  return (
    <div className="relative h-96 bg-gray-600 text-left outline outline-8 outline-offset-[4px] outline-gray-100 md:outline-offset-[16px]">
      <Image />

      <Slides curSlide={curSlide} />

      <Buttons handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
}

export default Slider;
