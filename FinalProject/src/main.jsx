import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import S1 from "./screens/S1.jsx";
import "./index.css";
import Vegetarian from "./screens/Vegetarian.jsx";
import MediumSize from "./screens/MediumSize.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <S1 /> */}
    <Vegetarian />
    {/* <MediumSize /> */}
  </React.StrictMode>
);
