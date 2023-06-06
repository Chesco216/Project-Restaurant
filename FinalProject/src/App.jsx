import { useState } from "react";
import "./App.css";
import S1 from "./screens/S1";
import Vegetarian from "./screens/Vegetarian";
import BigSize from "./screens/BigSize";
import StadiumSize from "./screens/StadiumSize";
import FamiliarSize from "./screens/FamiliarSize";
import MediumSize from "./screens/MediumSize";
import { Drinks } from "./screens/Drinks";
import EcoMenu from "./screens/EcoMenu";
import ForYou from "./screens/ForYou";
function App() {
  return (
    <div>
      {/* <S1 /> */}
      {/* 
      <MediumSize/>
      <FamiliarSize/>
      <StadiumSize/>
      <BigSize/>
      
      <Vegetarian />
      <EcoMenu />
      <ForYou />
      */}
      <Drinks />
    </div>
  );
}

export default App;
