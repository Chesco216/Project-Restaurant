import React from "react";
import "./PizzaCard.css";
const PizzaCard = () => {
  return (
    <div className="card-container">
      <div className="pizza-card">
        <div className="image-container">
          <img src="../public/static/images/pi1.png" alt="pizza-mexicana" />
        </div>
        <div className="information">
          <h3 className="title-pizza">Mexicana</h3>
          <p className="description">Carne, Chorizo, Cebolla, Jalapeños</p>
          <div className="available">
            <span className="number">3</span>
            <span className="text">Disponible</span>
          </div>
          <span className="price">40Bs</span>
        </div>
      </div>
      <div className="pizza-card">
        <div className="image-container">
          <img src="../public/static/images/pi1.png" alt="pizza-mexicana" />
        </div>
        <div className="information">
          <h3 className="title-pizza">Mexicana</h3>
          <p className="description">Carne, Chorizo, Cebolla, Jalapeños</p>
          <div className="available">
            <span className="number">3</span>
            <span className="text">Disponible</span>
          </div>
          <span className="price">40Bs</span>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
