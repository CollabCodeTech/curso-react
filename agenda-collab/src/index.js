import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import GlobalColors from "./styles/settings/colors";

import App from "./App";

// JSX
ReactDOM.render(
  <Fragment>
    <GlobalColors />
    <App />
  </Fragment>,
  document.getElementById("root")
);
