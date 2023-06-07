import React from "react";
import "./UbicCardsContainer.css";
import { UbicCard } from "./UbicCard";
import locationss from "../assets/locations.json";
export const UbicCardsContainer = () => {
  return (
    <div className="UbCards-container">
      {locationss.map((locations) => {
        return <UbicCard locations={locations} key={locations.id} />;
      })}
    </div>
  );
};
