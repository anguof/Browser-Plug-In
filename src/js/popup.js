import "../css/popup.css";
import Pop from "./popup/Pop";
import React from "react";
import { render } from "react-dom";

render(
  <Pop/>,
  window.document.getElementById("app-container")
);
