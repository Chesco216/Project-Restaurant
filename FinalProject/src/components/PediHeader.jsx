import React from 'react'
import { Icon } from "@iconify/react";
import "./PediHeader.css"
export const PediHeader = () => {
  return (
    <div className="UbiHearder-Container">
      <div className="box-ubicacion">
        <span>Mi pedido</span>
        <Icon
          icon="ooui:previous-ltr"
          className="icono"
          style={{ color: "#3a8f4d", width: "25px", height: "25px" }}
        />
      </div>
    </div>
  )
}