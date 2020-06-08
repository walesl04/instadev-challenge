import React from "react";
import { ReactComponent as ErrorSVG } from "../../assets/img/close.svg";
import "./ErrorMessage.scss";

const ErrorMessage = ({ onConfirm }) => (
  <>
    <div className="error-message" data-testid="error-message">
      <ErrorSVG width={120} fill="#900" />
      <br />
      <div className="success-message__content">
        <p>Ocorreu algum problema ao salvar o novo usuário, tente novamente!</p>
        <button type="button" className="btn__default" onClick={onConfirm}>
          OK
        </button>
      </div>
    </div>
  </>
);

export default ErrorMessage;
