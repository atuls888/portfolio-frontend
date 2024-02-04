import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Navitems from "./Navitems";

function Navbar() {
  const [social, setSocial] = useState(false);
  const [navItem, setNavItem] = useState(false);

  return (
    <nav>
      <div
        className={`w-full h-52 absolute top-16 bg-green-600 opacity-5 navColor ${
          navItem ? "block" : "hidden"
        }`}
        // onMouseOut={()=>setNavItem(false)}
      ></div>

      <div className="flex justify-around items-center h-20 " id="navContainer">
        <div id="portfolio">
          <Link
            to="/about"
            className="font-extrabold text-2xl hover:text-green-600"
          >
            Portfolio
          </Link>
        </div>
        <div
          id="menuIcon"
          className={`hidden scale-150 cursor-pointer`}
          onClick={() => setNavItem((prev) => !prev)}
        >
          <MenuIcon />
        </div>
        <Navitems attr={navItem} />
        <ul
          onMouseOver={() => setSocial((prev) => !prev)}
          onMouseOut={() => setSocial((prev) => !prev)}
          className={`cursor-pointer font-extrabold social z-40 w-20 h-8  ${
            navItem ? "block" : "hidden"
          }`}
          style={{ lineHeight: "200%" }}
          id="socialIcon"
        >
          <li className="hover:text-green-600">Social</li>
          {social && (
            <li className="hover:text-green-600">
              <Link
                to="https://www.linkedin.com/in/atul-singh-a662b8110"
                target="_blank"
              >
                LinkedIn
              </Link>
              {/* </span> */}
            </li>
          )}
          {social && (
            <li className="hover:text-green-600">
              <Link to="https://github.com/atuls888" target="_blank">
                Github
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div
        className={`glassEffect w-full h-20 absolute  top-48 -z-10 ${
          navItem ? "block" : "hidden"
        }`}
      ></div>
    </nav>
  );
}

export default Navbar;
