import React from "react";
import "./UbicCard.css";

export const UbicCard = (props) => {
    const locations =props.locations
  return (
    <div className="Ubcard-container">
      <button>
        <div className="button-container">
          <div className="ubicacion">
            <img src="/static/images/iconoUbi.svg" alt="" />
            <span>{locations.zona}</span>
          </div>
          <div className="direccion">
            <p>{locations.direccion}</p>
          </div>
        </div>
      </button>
    </div>
  );
};
