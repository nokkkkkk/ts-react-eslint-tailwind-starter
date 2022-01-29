/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-use-before-define
import React from "react";
import PostList from "../components/PostList";

const Home: React.FC = () => {
  return (
    <div className="post-list">
      <PostList />
      <PostList />
      <PostList />
      <PostList />
      <PostList />
      <PostList />
      <PostList />
    </div>
  );
};

export default Home;
