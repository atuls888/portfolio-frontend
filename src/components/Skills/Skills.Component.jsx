import Chip from "@mui/material/Chip";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useState } from "react";
import { Link } from "react-router-dom";

function Skill({ projectName, description, skills, link, target }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      onMouseOver={() => setHover((prev) => !prev)}
      onMouseOut={() => setHover(false)}
      className="flex flex-col p-10 gap-y-4 mt-10 cardShadow cursor-pointer skillDiv justify-start"
      to={link}
      target={target}
    >
      <div className="text-2xl font-extrabold flex items-center gap-2">
        {projectName}
        <ArrowOutwardIcon
          id="arrow"
          className={`${hover ? "scale-150 animate-spin" : ""} `}
        />
      </div>
      <p className="font-light ">
        {description}
      </p>
      <div className="flex gap-2 font-semibold flex-wrap">
        {skills.map((value) => (
          <Chip label={value} variant="outlined" key={nanoid()} />
        ))}
      </div>
    </Link>
  );
}

Skill.propTypes = {
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  link: PropTypes.string,
  target: PropTypes.string,
};

export default Skill;
// border-gray-400 border-2 border-double
