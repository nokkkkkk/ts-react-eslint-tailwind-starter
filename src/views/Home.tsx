/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-use-before-define
import React from "react";
import PostList from "../components/PostList";

const Home: React.FC = () => {
  return (
    <div className="Post-list ml-3 mr-3 overflow-auto w-full">
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
