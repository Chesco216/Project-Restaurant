import React from "react";
import "./DatesCardContainer.css";
import { DatesCard } from "./DatesCard";
import Dates from "../assets/Dates.json";
export const DatesCardContainer = () => {
  return (
    <div className="DateCard-container">
      {Dates.map((Dates) => {
        return <DatesCard Dates={Dates} key={Dates.id} />;
      })}
    </div>
  );
};
export default DatesCardContainer;