import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Global from "./styles/settings";
import Reset from "./styles/generic";
import Base from "./styles/base";

import App from "./App";

// JSX
ReactDOM.render(
  <Fragment>
    <Global.Colors />
    <Global.Size />
    <Reset />
    <Base />
    <App />
  </Fragment>,
  document.getElementById("root")
);
