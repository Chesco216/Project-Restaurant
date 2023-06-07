import React from "react";
import Header from "../components/Header";
import DrinkCard from "../components/DrinkCard";
import MenuOption from "../components/MenuOption";
export const Drinks = () => {
  return (
    <div>
      <Header />
      <div className="container-d">
        <MenuOption category="Bebidas" />
      </div>
    </div>
  );
};
