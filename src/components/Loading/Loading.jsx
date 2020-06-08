import React from "react";
import PropTypes from "prop-types";

import "./Loading.scss";

const Loading = (Component) => {
  const RunLoading = () => (
    <div className="loading" data-testid="loading">
      <div className="preloader">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      Carregando
    </div>
  );

  const loadingWrapper = (props) =>
    props.data || props.data === undefined ? (
      <div data-testid="loading">
        <Component {...props} />
      </div>
    ) : (
      <RunLoading />
    );

  if (Object.keys(Component).length <= 0 && typeof Component !== "function")
    return <RunLoading />;
  return loadingWrapper;
};

Loading.propTypes = {
  data: PropTypes.bool,
};

Loading.propDefault = {
  data: false,
};

export default Loading;
