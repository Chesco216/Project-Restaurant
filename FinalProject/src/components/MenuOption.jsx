import React from "react";
import "./MenuOption.css";
import { Icon } from "@iconify/react";
import PizzaCard from "./PizzaCard";
import DrinkCard from "./DrinkCard";
const MenuOption = ({ category }) => {
  return (
    <div className="option-container">
      <div className="type">
        <Icon
          className="back"
          icon="material-symbols:arrow-back-ios-new-rounded"
          color="#58b96d"
          width="24"
          height="24"
        />
        <h2 className="options">{category}</h2>
      </div>
      {category === "Bebidas" ? <DrinkCard /> : <PizzaCard />}
    </div>
  );
};

export default MenuOption;
