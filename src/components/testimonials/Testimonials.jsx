import SecondaryHeading from "../headings/SecondaryHeading";
import TertiaryHeading from "../headings/TertiaryHeading";
import Slider from "./Slider";
import Customers from "./Customers";

function Testimonials() {
  return (
    <section className="overflow-x-clip px-6 py-32 text-center">
      <div className="container space-y-20 xl:space-y-32">
        <div>
          <SecondaryHeading>Testimonials</SecondaryHeading>
          <TertiaryHeading>
            Some reviews from our trusted clients
          </TertiaryHeading>
        </div>

        <Slider />

        <Customers />
      </div>
    </section>
  );
}

export default Testimonials;
