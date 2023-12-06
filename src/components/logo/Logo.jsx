import { Link } from "react-router-dom";
import logoWhite from "../../images/logo/logo.svg";
import logoBlack from "../../images/logo/logo-footer.svg";

function Logo({ size = "w-full", type = "white" }) {
  return (
    <Link to="/" className="focus inline-block">
      <img
        src={`${type === "black" ? logoBlack : logoWhite}`}
        alt="gymate logo"
        className={`h-auto ${size}`}
      />
    </Link>
  );
}

export default Logo;
