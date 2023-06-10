import React from "react";
import { Icon } from "@iconify/react";
import "./PizzaEncabezado.css";
export const PizzaEncabezado = () => {
  return (
    <div className="pizza-signo">
      <div className="box-button">
      <Icon
          icon="ooui:previous-ltr"
          className="icono"
          style={{ color: "#3a8f4d", width: "25px", height: "25px" }}
        />
      </div>
      <span>Pizzas</span>
    </div>
  );
};
