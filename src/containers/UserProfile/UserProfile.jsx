import React from "react";

import Loading from "../../components/Loading";
import ImgPlaceholder from "../../assets/img/placeholder-img.png";

import "./UserProfile.scss";

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              {avatar ? (
                <img src={avatar} alt="" />
              ) : (
                <img src={ImgPlaceholder} alt="" />
              )}
            </div>
            {name && (
              <p className="user__name">
                {name}
                <span>@{username}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading(UserProfile);
