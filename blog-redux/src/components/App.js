import React from "react";
import PostList from "./PostList";
import { fetchPosts } from "../actions";

const App = () => {
  return (
    <div className="ui container">
      <PostList />
    </div>
  );
};

export default App;
