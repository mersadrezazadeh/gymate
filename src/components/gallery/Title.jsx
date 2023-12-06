import SecondaryHeading from "../headings/SecondaryHeading";
import TertiaryHeading from "../headings/TertiaryHeading";

function Title() {
  return (
    <div className="text-center">
      <SecondaryHeading>Gymat gallery</SecondaryHeading>
      <TertiaryHeading>Our workplace gallery</TertiaryHeading>
      <p className="mx-auto max-w-[65ch] font-medium text-gray-300">
        Our Workplace Gallery features modern office, team collaboration, and
        fun culture. Attracts talents and showcases company&apos;s work
        atmosphere.
      </p>
    </div>
  );
}

export default Title;
