import React from "react";
import Header from "../components/Header";
import MenuOption from "../components/MenuOption";
const BigSize = () => {
  return (
    <div>
      <Header />
      <div className="container-b">
        <MenuOption category="Grandes" />
      </div>
    </div>
  );
};

export default BigSize;
