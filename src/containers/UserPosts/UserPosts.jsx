import React from "react";

import Post from "../../components/Post";

import Loading from "../../components/Loading";

import "./UserPosts.scss";

const UserPosts = ({ posts }) => (
  <div className="container" data-testid="user-posts">
    <section className="user-posts">
      {posts?.length > 0 ? (
        posts.map((post) => <Post postInfo={post} key={post.id} />)
      ) : (
        <div className="no-posts">
          <div className="no-posts__content">
            Nenhum Post Publicado deste Usuário
          </div>
          <span
            className="no-posts__emoji"
            role="img"
            aria-label="Emoji Triste"
          >
            😭
          </span>
        </div>
      )}
    </section>
  </div>
);

export default Loading(UserPosts);
