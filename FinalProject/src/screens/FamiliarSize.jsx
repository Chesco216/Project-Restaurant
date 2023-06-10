import React from "react";
import Header from "../components/Header";
import MenuOption from "../components/MenuOption";
const FamiliarSize = () => {
  return (
    <div>
      <Header />
      <div className="container-f">
        <MenuOption category="Familiar" />
      </div>
    </div>
  );
};

export default FamiliarSize;
