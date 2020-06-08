import React, { useState } from "react";

import Story from "../../components/Story";

import "./Stories.scss";

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [selectedStorie, setSelectedStorie] = useState({});
  const [profileSelected, setProfileSelected] = useState({});

  const findStorie = (id) => stories.find((storie) => storie.id === id);

  const selectStorie = ({ id, userId }) => {
    const storie = findStorie(id);
    const profile = getUserHandler(userId);
    setSelectedStorie(storie);
    setProfileSelected(profile);
    setShowStory(!showStory);
  };

  return (
    <>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((storie, index) => {
            const profile = getUserHandler(storie.userId);

            return (
              <button
                key={storie.id}
                onClick={() => selectStorie(storie)}
                className={`user__thumb ${
                  index === 0 && "user__thumb--hasNew"
                }`}
              >
                <div className="user__thumb__wrapper">
                  <img src={profile.avatar} alt="" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {showStory && (
        <Story
          story={selectedStorie}
          user={profileSelected}
          handleClose={() => setShowStory(!showStory)}
        />
      )}
    </>
  );
};

export default Stories;
