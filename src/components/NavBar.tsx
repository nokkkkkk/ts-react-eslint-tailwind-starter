import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare, faHeart } from "@fortawesome/free-regular-svg-icons";

const NavBar: React.FC = () => {
  return (
    <div>
      <Link to={"/"}>
        <FontAwesomeIcon icon={faHome} size="2x" color="blue" />
      </Link>
      <Link to={"/about"}>
        <FontAwesomeIcon icon={faPlusSquare} size="2x" />
      </Link>
      <FontAwesomeIcon icon={faHeart} size="2x" />
    </div>
  );
};

export default NavBar;
