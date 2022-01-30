import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";

const SearchBar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between pl-3 pr-3">
      <div className="bg-white rounded-full p-2 flex flex-row items-center justify-center m-2">
        <img
          className="object-scale-down h-8 w-8"
          src={logo}
          alt="logo ULaval"
        />
      </div>
      <div className="flex flex-row items-center justify-center m-3 bg-white rounded-full">
        <div className="ml-2 mr-2">
          <FontAwesomeIcon icon={faSearch} color="gray" />
        </div>
        <div className="ml-2 mr-2">
          <input
            className="border-none outline-none"
            type="text"
            value=""
            placeholder="Search on Ugram"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
