import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import ProfileBar from "./ProfileBar";

const TopBar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between w-full bg-robins-egg-blue-500/20 top-0 fixed h-14">
      <SearchBar />
      <NavBar />
      <ProfileBar />
    </div>
  );
};

export default TopBar;
