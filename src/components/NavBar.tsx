import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare, faHeart } from "@fortawesome/free-regular-svg-icons";

const NavBar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="m-3">
        <Link to={"/"}>
          <FontAwesomeIcon icon={faHome} size="2x" color="black" />
        </Link>
      </div>
      <div className="m-3">
        <Link to={"/about"}>
          <FontAwesomeIcon icon={faPlusSquare} size="2x" />
        </Link>
      </div>
      <div className="m-3">
        <FontAwesomeIcon icon={faHeart} size="2x" />
      </div>
    </div>
  );
};

export default NavBar;
