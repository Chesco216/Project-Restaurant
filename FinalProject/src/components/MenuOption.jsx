import React from "react";
import "./MenuOption.css";
import { Icon } from "@iconify/react";
import PizzaCard from "./PizzaCard";
import DrinkCard from "./DrinkCard";
import sizesM from "../assets/sizem.json";
const MenuOption = ({ category }) => {
  let content;
  if (category === "Bebidas") {
    content = <DrinkCard />;
  } else {
    content = sizesM.map((medium) => (
      <PizzaCard
        imagen={medium.imgsrc}
        titulo={medium.title}
        descripcion={medium.description}
        numero={medium.number}
        dispo={medium.disponibility}
        precio={medium.price}
        key={medium.id}
      />
    ));
  }
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
      <div className="pizza-card-container">{content}</div>
    </div>
  );
};

export default MenuOption;
