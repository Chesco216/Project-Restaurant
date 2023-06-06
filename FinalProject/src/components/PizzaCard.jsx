import React from "react";
import "./PizzaCard.css";
const PizzaCard = ({ imagen, titulo, descripcion, numero, dispo, precio }) => {
  return (
    <div className="pizza-card">
      <div className="image-container">
        <img src={imagen} alt="pizza-mexicana" />
      </div>
      <div className="information">
        <h3 className="title-pizza">{titulo}</h3>
        <p className="description">{descripcion}</p>
        <div className="available">
          <span className="number">{numero}</span>
          <span className="text">{dispo}</span>
        </div>
        <span className="price">{precio}</span>
      </div>
    </div>
  );
};

export default PizzaCard;
