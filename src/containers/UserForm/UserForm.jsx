import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";
import ErrorMessage from "../../components/ErrorMessage";
import ImgPlaceholder from "../../assets/img/placeholder-img.png";
import { Api } from "../../services/api";

import "./UserForm.scss";

const UserForm = () => {
  const [newProfile, setNewProfile] = useState({
    avatar: "",
    name: "John Done",
    username: "johndoe",
    email: "johndoe@gmail.com",
  });
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setNewProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNewProfile = async (event) => {
    event.preventDefault();
    try {
      // show component ErrorMessage
      if (newProfile.username === "demoerror") {
        throw new Error({
          message: "error",
        });
      }
      await Api.post("users", newProfile);
      setSaved(true);
    } catch (exception) {
      setSaveError(true);
    }
  };

  const { avatar, name, username, email } = newProfile;

  return (
    <>
      {!saved && !saveError && (
        <>
          <section className="profile" data-testid="user-form">
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

          <section className="post__form">
            <div className="container">
              <form action="#" className="post__form__wrapper">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  value={name}
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  onChange={handleInput}
                />

                <label htmlFor="username">Usuário</label>
                <input
                  type="text"
                  value={username}
                  id="username"
                  name="username"
                  placeholder="Seu @nomedeusuario"
                  onChange={handleInput}
                />

                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  value={email}
                  id="email"
                  name="email"
                  placeholder="Seu e-mail"
                  onChange={handleInput}
                />

                <label htmlFor="avatar">
                  Url da Imagem de Perfil (use a url da imagem do Linkedin)
                </label>
                <input
                  type="text"
                  value={avatar}
                  id="avatar"
                  name="avatar"
                  placeholder="http://..."
                  onChange={handleInput}
                />

                <button
                  type="submit"
                  className="submit__btn"
                  onClick={handleNewProfile}
                >
                  Criar Conta
                </button>
              </form>
            </div>
          </section>
        </>
      )}

      {saved && <SuccessMessage onSuccess={() => setSaved(false)} />}
      {saveError && <ErrorMessage onConfirm={() => setSaveError(false)} />}
    </>
  );
};

export default UserForm;
