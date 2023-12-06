import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaRegEnvelope,
  FaAngleUp,
} from "react-icons/fa6";

const imageBoxStyles = `relative h-72 w-full bg-[url('./images/trainers/bg-coach.png')] bg-cover bg-no-repeat before:absolute before:z-10 before:h-full before:w-full 
before:bg-top before:bg-no-repeat before:grayscale before:transition-all before:duration-700 hover:before:grayscale-0`;

const textBoxStyles = `relative space-y-3 rounded-b-md bg-white bg-center py-7 text-center shadow-xl before:absolute before:right-1/2 before:top-[-26px] before:z-10 before:h-8 before:w-28 before:translate-x-1/2 before:bg-[url('./images/trainers/shape.png')] before:bg-no-repeat after:absolute after:bottom-0 after:right-1/2 after:h-1 after:w-10 after:translate-x-1/2 after:bg-red after:transition-all after:duration-500 hover:after:w-full after:hover:rounded-b-md`;

const iconStyles = `transition-all duration-300 hover:text-red`;

function Coaches() {
  return (
    <div className="grid gap-10 xl:grid-cols-2 2xl:grid-cols-3">
      {/* 01 */}
      <div className="flex cursor-pointer flex-col">
        <div
          className={`${imageBoxStyles} before:bg-[url('./images/trainers/coach1.png')]`}
        ></div>
        <div className={textBoxStyles}>
          <FaAngleUp className="absolute right-1/2 top-[-13px] z-10 translate-x-1/2 text-xl" />
          <h4 className="text-2xl font-bold">John Lewis</h4>
          <p className="font-medium text-gray-350">Yoga Trainer</p>
          <div className="flex justify-center gap-4 text-lg text-gray-350">
            <FaFacebookF className={iconStyles} />
            <FaXTwitter className={iconStyles} />
            <FaInstagram className={iconStyles} />
            <FaRegEnvelope className={iconStyles} />
          </div>
        </div>
      </div>

      {/* 02 */}
      <div className="flex cursor-pointer flex-col">
        <div
          className={`${imageBoxStyles} before:bg-[url('./images/trainers/coach2.png')]`}
        ></div>
        <div className={textBoxStyles}>
          <FaAngleUp className="absolute right-1/2 top-[-13px] z-10 translate-x-1/2 text-xl" />
          <h4 className="text-2xl font-bold">Jonathan Doe</h4>
          <p className="font-medium text-gray-350">Crossfit Trainer</p>
          <div className="flex justify-center gap-4 text-lg text-gray-350">
            <FaFacebookF className={iconStyles} />
            <FaXTwitter className={iconStyles} />
            <FaInstagram className={iconStyles} />
            <FaRegEnvelope className={iconStyles} />
          </div>
        </div>
      </div>

      {/* 03 */}
      <div className="flex cursor-pointer flex-col xl:col-span-2 xl:w-1/2 xl:justify-self-center 2xl:col-span-1 2xl:w-full">
        <div
          className={`${imageBoxStyles} before:bg-[url('./images/trainers/coach3.png')]`}
        ></div>
        <div className={textBoxStyles}>
          <FaAngleUp className="absolute right-1/2 top-[-13px] z-10 translate-x-1/2 text-xl" />
          <h4 className="text-2xl font-bold">Anna June</h4>
          <p className="font-medium text-gray-350">Personal Trainer</p>
          <div className="flex justify-center gap-4 text-lg text-gray-350">
            <FaFacebookF className={iconStyles} />
            <FaXTwitter className={iconStyles} />
            <FaInstagram className={iconStyles} />
            <FaRegEnvelope className={iconStyles} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coaches;
