import React from 'react'
import { Icon } from "@iconify/react";
import "./PediHeader.css"

const PediHeader = ({title}) => {
  return (
    <div className="UbiHearder-Container">
      <div className="box-ubicacion">
        <span>{title}</span>
        <Icon
          icon="material-symbols:arrow-back-ios-new-rounded"
          className="icono"
          style={{ color: "#3a8f4d", width: "25px", height: "25px" }}
        />
      </div>
    </div>
  )
} 
export default PediHeader