import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./Footer.css";
const Footer = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="footer-container">
      <div className="tabs">
        <div onClick={() => toggleTab(1)} className="tab">
          <Icon
            className={toggleState === 1 ? "icon active-icon" : "tabs"}
            icon="tabler:home"
            color="#f8b908"
            width="24"
            height="24"
          />
          <span className={toggleState === 1 ? "title active-span" : "tabs"}>
            Inicio
          </span>
        </div>
        <div onClick={() => toggleTab(2)} className="tab">
          <Icon
            className={toggleState === 2 ? "icon active-icon" : "tabs"}
            icon="ion:pizza-outline"
            color="#f8b908"
            width="24"
            height="24"
          />
          <span className={toggleState === 2 ? "title active-span" : "tabs"}>
            Menú
          </span>
        </div>
        <div onClick={() => toggleTab(3)} className="tab">
          <Icon
            className={toggleState === 3 ? "icon active-icon" : "tabs"}
            icon="foundation:comments"
            color="#f8b908"
            width="24"
            height="24"
          />
          <span className={toggleState === 3 ? "title active-span" : "tabs"}>
            Reseñas
          </span>
        </div>
        <div onClick={() => toggleTab(4)} className="tab">
          <Icon
            className={toggleState === 4 ? "icon active-icon" : "tabs"}
            icon="ion:person-outline"
            color="#f8b908"
            width="24"
            height="24"
          />
          <span className={toggleState === 4 ? "title active-span" : "tabs"}>
            Cuenta
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
