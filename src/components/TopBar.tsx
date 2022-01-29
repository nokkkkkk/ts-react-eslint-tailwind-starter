import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import ProfileBar from "./ProfileBar";
import "../style/topbar.css";

const TopBar: React.FC = () => {
  return (
    <div className="topbar">
      <SearchBar />
      <NavBar />
      <ProfileBar />
    </div>
  );
};

export default TopBar;
