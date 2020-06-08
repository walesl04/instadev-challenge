import React from "react";

import Post from "../../components/Post";
import Loading from "../../components/Loading";

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    {posts.length > 0 &&
      posts.map((post, index) => {
        return (
          <Post
            key={index}
            postInfo={post}
            userInfo={getUserHandler(post.userId)}
          />
        );
      })}
  </div>
);

export default Loading(Posts);
