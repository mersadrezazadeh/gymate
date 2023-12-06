import logo1 from "../../images/testimonials/logo1.png";
import logo2 from "../../images/testimonials/logo2.png";
import logo3 from "../../images/testimonials/logo3.png";
import logo4 from "../../images/testimonials/logo4.png";
import logo5 from "../../images/testimonials/logo5.png";

function Customers() {
  return (
    <div className="grid grid-cols-2 items-center gap-10 2xl:grid-cols-5">
      <img
        src={logo1}
        alt=""
        className="self-center justify-self-center transition-all duration-700 hover:scale-125"
      />
      <img
        src={logo2}
        alt=""
        className="self-center justify-self-center transition-all duration-700 hover:scale-125"
      />
      <img
        src={logo3}
        alt=""
        className="self-center justify-self-center transition-all duration-700 hover:scale-125"
      />
      <img
        src={logo4}
        alt=""
        className="self-center justify-self-center transition-all duration-700 hover:scale-125"
      />
      <img
        src={logo5}
        alt=""
        className="xl:co col-span-2 self-center justify-self-center transition-all duration-700 hover:scale-125 2xl:col-span-1"
      />
    </div>
  );
}

export default Customers;
