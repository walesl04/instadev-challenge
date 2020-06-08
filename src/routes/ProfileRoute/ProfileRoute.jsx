import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../services/api";

import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";

const ProfileRoute = () => {
  const params = useParams();
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const { username } = params;
      const profileSelected = await Api.get(`users?search=${username}`);
      if (profileSelected?.length > 0) setProfile(profileSelected[0]);
    };
    getProfile();
  }, [params]);

  useEffect(() => {
    const getPosts = async () => {
      const { id } = profile;
      if (!id) return null;
      const publishedPosts = await Api.get(`users/${id}/posts`);
      setPosts(publishedPosts);
    };
    getPosts();
  }, [profile]);

  return (
    <>
      <div data-testid="profile-route">
        <UserProfile data={Object.keys(profile).length > 0} {...profile} />
        <UserPosts data={Array.isArray(posts)} posts={posts} />
      </div>
    </>
  );
};

export default ProfileRoute;
