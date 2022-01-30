import React from "react";
import logo from "../images/logo.png";
import family from "../images/family.png";
import friends from "../images/friends.png";
import acquaintances from "../images/acquaintances.png";

const GroupList: React.FC = () => {
  return (
    <div className="bg-white/30 shrink-0 overflow-auto w-72">
      <div className="bg-white/30 m-3 rounded-2xl p-3 flex flex-row justify-around items-center">
        <div className="bg-white rounded-full p-1">
          <img
            className="object-scale-down h-10 w-10"
            src={logo}
            alt="logo ULaval"
          />
        </div>
        <div className="text-sm md:text-lg font-josefin">Me and My profile</div>
      </div>
      <div className="m-3 rounded-2xl p-3 flex flex-row items-center">
        <div className="rounded-full p-1 ml-3 mr-3">
          <img
            className="object-scale-down h-10 w-10"
            src={family}
            alt="logo ULaval"
          />
        </div>
        <div className="text-sm md:text-lg font-josefin ml-3">Family</div>
      </div>
      <div className="m-3 rounded-2xl p-3 flex flex-row items-center">
        <div className="rounded-full p-1 ml-3 mr-3">
          <img
            className="object-scale-down h-10 w-10"
            src={friends}
            alt="logo ULaval"
          />
        </div>
        <div className="text-sm md:text-lg font-josefin ml-3">Friends</div>
      </div>
      <div className="m-3 rounded-2xl p-3 flex flex-row items-center">
        <div className="rounded-full p-1 ml-3 mr-3">
          <img
            className="object-scale-down h-10 w-10"
            src={acquaintances}
            alt="logo ULaval"
          />
        </div>
        <div className="text-sm md:text-lg font-josefin ml-3">
          Acquaintances
        </div>
      </div>
      <div>Everyone pour tester le scroll</div>
      <div>Family</div>
      <div>Friends</div>
      <div>Acquaintances</div>
      <div>Everyone</div>
      <div>Family</div>
      <div>Friends</div>
      <div>Acquaintances</div>
      <div>Everyone</div>
      <div>Family</div>
      <div>Friends</div>
      <div>Acquaintances</div>
      <div>Everyone</div>
      <div>Family</div>
      <div>Friends</div>
      <div>Acquaintances</div>
      <div>Everyone</div>
      <div>Family</div>
      <div>Friends</div>
      <div>Acquaintances</div>
      <div>Everyone</div>
      <div>Family</div>
      <div>Friends</div>
      <div>Acquaintances</div>
      <div>Everyone</div>
    </div>
  );
};

export default GroupList;
