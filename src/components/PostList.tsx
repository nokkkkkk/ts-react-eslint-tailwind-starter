/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-use-before-define
import React from "react";
import stag from "../images/stag.png";

const PostList: React.FC = () => {
  // eslint-disable-next-line no-undef

  return (
    <div className="post">
      <div className="image">
        <img className="object-scale-down h-20 w-40" src={stag} alt="???" />
      </div>
      <div className="post-content">
        <h2>Blabla</h2>

        <p>Bla bla bla</p>
        <p>Bla blabla</p>
      </div>
    </div>
  );
};

export default PostList;
