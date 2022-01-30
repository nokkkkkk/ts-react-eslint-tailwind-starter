import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faBell, faCommentDots } from "@fortawesome/free-regular-svg-icons";

const ProfileBar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center m-3">
      <div className="m-2 bg-white rounded-full p-2">
        <FontAwesomeIcon icon={faBell} size="2x" />
      </div>
      <div className="m-2 bg-white rounded-full p-2">
        <FontAwesomeIcon icon={faCommentDots} size="2x" />
      </div>
      <div className="m-2 bg-white rounded-full p-2">
        <FontAwesomeIcon icon={faSortDown} size="2x" />
      </div>
    </div>
  );
};

export default ProfileBar;
