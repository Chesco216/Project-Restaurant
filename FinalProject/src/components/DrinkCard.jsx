import React from "react";
import "./DrinkCard.css";
const DrinkCard = () => {
  return (
    <div className="drink-card-container">
      <div className="drink-card">
        <div className="drink-img">
          <img
            src="../public/static/images/cocacola.png"
            alt="bebida-cocacola"
          />
        </div>
        <div className="drink-inf">
          <h3 className="title-drink">Coca Cola</h3>
          <p className="inf">2L, 1L, 1.5L, 500ml, 300ml</p>
          <span className="drink-price">15Bs</span>
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
