import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Navitems({ attr }) {
  return (
    <div
      className={`flex gap-x-10 font-semibold ${
        attr ? "block" : "hidden"
      } navDiv z-40`}
      id="navMenu"
    >
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `cursor-pointer hover:text-green-600 ${
            isActive ? "text-green-600" : ""
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/skills"
        className={({ isActive }) =>
          `cursor-pointer hover:text-green-600 ${
            isActive ? "text-green-600" : ""
          }`
        }
      >
        Projects
      </NavLink>
      {/* <NavLink
        to="/experience"
        className={({ isActive }) =>
          `cursor-pointer hover:text-green-600 ${
            isActive ? "text-green-600" : ""
          }`
        }
      >
        Experience
      </NavLink> */}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `cursor-pointer hover:text-green-600 ${
            isActive ? "text-green-600" : ""
          }`
        }
      >
        Contact
      </NavLink>
    </div>
  );
}

Navitems.propTypes = {
  attr: PropTypes.bool.isRequired,
};

export default Navitems;
