import React from "react";
import Header from "../components/Header";
import MenuOption from "../components/MenuOption";
import "./MediumSize.css";
const MediumSize = () => {
  return (
    <div className="head">
      <Header />
      <div className="menu-option-container">
        <MenuOption category="Medianas" />
      </div>
    </div>
  );
};

export default MediumSize;
