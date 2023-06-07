import React from "react";
import "./MiPedido.css";
import { PediHeader } from "../components/PediHeader";
import { PediContainer } from "../components/PediContainer";
export const MiPedido = () => {
  return (
    <div className="appP">
      <PediHeader title="Mi pedido"/>
      <PediContainer />
    </div>
  );
};
