import React, { useState, useEffect } from "react";
import { Api } from "../../services/api";

import Stories from "../../containers/Stories";

import Posts from "../../containers/Posts";

import "./FeedRoute.scss";

const FeedRoute = () => {
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [usersFetched, setUsersFetched] = useState(0);

  const getUserPost = (id) => users.find((user) => user.id === id);

  const listUsers = async () => {
    const users = await Api.get("users");
    setUsers(users);
  };

  const listStories = async () => {
    const stories = await Api.get("stories");
    setStories(stories);
  };

  const listUsersFechted = async () => {
    if (usersFetched >= users.length) return null;
    const postsUser = await Api.get(`users/${users[usersFetched].id}/posts`);
    setPosts([...posts, ...postsUser]);
    setUsersFetched(usersFetched + 1);
    //console.info(users.length, usersFetched);
  };

  useEffect(() => {
    listUsers();
  }, []);

  useEffect(() => {
    listStories();
  }, [users]);

  useEffect(() => {
    listUsersFechted();
  }, [users, usersFetched]);

  return (
    <div data-testid="feed-route">
      {users.length > 0 && stories.length && (
        <Stories stories={stories} getUserHandler={getUserPost} />
      )}
      <Posts
        data={users.length === usersFetched}
        posts={posts}
        getUserHandler={getUserPost}
      />
    </div>
  );
};

export default FeedRoute;
