import SocialLinks from "../footer/SocialLinks";

const headingStyles = `relative mb-4 mt-6 pb-2 text-xl font-bold capitalize before:absolute before:bottom-0 before:h-1 before:w-16 before:bg-red`;

function Info() {
  return (
    <div>
      <h3 className="mb-4 text-3xl font-bold">
        We are here for help you To Shape Your Body
      </h3>
      <p className="font-medium text-gray-300">
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic types etting.type specimen It has survived not
        only five centuries, but also the type specimen book.
      </p>
      <div className="grid 2xl:grid-cols-2 2xl:gap-y-8">
        <div>
          <h4 className={headingStyles}>Tehran, Iran</h4>
          <address className="font-medium not-italic text-gray-300">
            7th Golestan St,
            <br /> Pasdaran St, Tehran
          </address>
        </div>
        <div>
          <h4 className={headingStyles}>Opening Hours</h4>
          <p className="whitespace-nowrap font-medium text-gray-300">
            Mon to Fri: 7:30 am — 1:00 am
          </p>
          <p className="whitespace-nowrap font-medium text-gray-300">
            Mon to Fri: 7:30 am — 1:00 am
          </p>
        </div>
        <div>
          <h4 className={headingStyles}>Information</h4>
          <a
            href="tel:+98-21-225-429-71"
            className="block font-medium text-gray-300"
          >
            +98-21-225-429-71
          </a>
          <a
            href="mailto:example@gymate.com"
            className="block font-medium text-gray-300"
          >
            example@gymate.com
          </a>
        </div>
        <div>
          <h4 className={headingStyles}>Follow Us On</h4>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Info;
