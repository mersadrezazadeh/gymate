import { Link } from "react-router-dom";

function Copyright() {
  return (
    <div className="font-medium text-gray-300">
      <p className=" ">
        Privacy Policy | &copy; <span>{new Date().getFullYear()}</span> Gymat
      </p>
      <p>
        Designed by{" "}
        <Link
          to="https://www.radiustheme.com/"
          target="_blank"
          className="focus text-red"
        >
          RadiusTheme
        </Link>
      </p>
    </div>
  );
}

export default Copyright;
