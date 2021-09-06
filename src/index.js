import React from "react";

import ReactDOM from "react-dom";

import App from "./class.js";

ReactDOM.render(
  <>
    <App name={"gopi"} age={25} grade={["be", "it"]} />
  </>,
  document.getElementById("root")
);
