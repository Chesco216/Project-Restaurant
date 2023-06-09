import React from "react";
import "./MenuAppContainer.css";
import { Menu_App } from "./MenuApp";

const MenuAppContainer = () => {
  return (
<div className="MenuApp-container">
     <Menu_App  menuapp_input="saranielsen@gmail.com"/>
     <Menu_App  menuapp_input="123456789"/>
     <Menu_App  menuapp_input="saranielsen@gmail.com"/>
     <Menu_App  menuapp_input="123456789"/> 
    
</div>
  );
};
export default MenuAppContainer;