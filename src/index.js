import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const theme = {
  colorPrimary: "#c69963",
  colorPrimaryDark: "#b28451",
  colorSecondary: "#101d2c",
  colorSecondaryFade: "#101d2cd6",

  colorGreyLight1: "#f9f7f6",
  colorGreyLight2: "#aaa",

  colorGreyDark1: "#54483a",
  colorGreyDark2: "#6d5d4b",

  // FONT VARIABLES
  fontPrimary: "Nunito",
  fontDisplay: "Josefin Sans",

  // RESPONSIVE BREAKPOINTS
  bpLargest: "75em", // 1200px
  bpLarge: "62.5em", // 1000px
  bpMedium: "50em", // 800px;
  bpSmall: "37.5em" // 600px;
};
ReactDOM.render(<App theme={theme} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
