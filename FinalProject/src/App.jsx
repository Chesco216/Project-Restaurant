import { useState } from "react";
import "./App.css";
import Home from "./screens/Home";
import MenuHome from "./screens/MenuHome";
import InfoScreen from "./screens/InfoScreen";
import LeftMenu from "../src/components/LeftMenu";

function App() {
  return (
    <div>
      {/* <Home/> */}
      <MenuHome />
      {/* <LeftMenu /> */}
      {/* <InfoScreen /> */}
    </div>
  );
}

export default App;
