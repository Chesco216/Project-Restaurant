import React from "react";
import "./EmailCardContainer.css";
import { EmailCard } from "./EmailCard";
import DatesEmail from "../assets/DatesEmail.json";
export const EmailCardContainer = () => {
  return (
    <div className="EmailCard-container">
      {DatesEmail.map((DatesEmail) => {
        return <EmailCard DatesEmail={DatesEmail} key={DatesEmail.id} />;
      })}
    </div>
  );
};
export default EmailCardContainer;