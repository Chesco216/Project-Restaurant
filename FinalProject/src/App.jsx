import { useState } from "react";
import "./App.css";
import S1 from "./screens/S1";
import Vegetarian from "./screens/Vegetarian";
import BigSize from "./screens/BigSize";
import StadiumSize from "./screens/StadiumSize";
import FamiliarSize from "./screens/FamiliarSize";
import MediumSize from "./screens/MediumSize";

function App() {
  return (
    <div>
      {/* <S1 /> */}
      {/* <MediumSize/>
      <FamiliarSize/>
      <StadiumSize/>
      <BigSize/> */}
      <Vegetarian />
    </div>
  );
}

export default App;
