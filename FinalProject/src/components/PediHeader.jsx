import React from 'react'
import { Icon } from "@iconify/react";
import "./PediHeader.css"
import { NavLink } from 'react-router-dom'

const PediHeader = ({title}) => {
  return (
    <div className="UbiHearder-Container">
      <div className="box-ubicacion">
        <span>{title}</span>
        <NavLink to={'/account'}>
        <Icon
          icon="material-symbols:arrow-back-ios-new-rounded"
          className="icono"
          style={{ color: "#3a8f4d", width: "25px", height: "25px" }}
        />
        </NavLink>
      </div>
    </div>
  )
} 
export default PediHeader;
