import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar: React.FC = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faSearch} />
      <input type="text" value="" placeholder="Search in Ugram" />
    </div>
  );
};

export default SearchBar;
