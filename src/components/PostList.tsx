/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-use-before-define
import React from "react";
import stag from "../images/stag.png";

const PostList: React.FC = () => {
  // eslint-disable-next-line no-undef

  return (
    <div className="flex flex-row bg-white rounded-xl m-3 p-3">
      <div className="image">
        <img className="object-scale-down h-80 w-80" src={stag} alt="???" />
      </div>
      <div className="post-content">
        <h2 className="font-yeseva text-3xl">Blabla</h2>

        <p className="font-josefin text-xl">Bla bla bla</p>
        <p className="font-josefin text-xl">Bla blabla</p>
      </div>
    </div>
  );
};

export default PostList;
