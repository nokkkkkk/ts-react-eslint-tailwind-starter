import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faBell, faCommentDots } from "@fortawesome/free-regular-svg-icons";

const ProfileBar: React.FC = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faBell} />
      <FontAwesomeIcon icon={faCommentDots} />
      <FontAwesomeIcon icon={faSortDown} />
    </div>
  );
};

export default ProfileBar;
