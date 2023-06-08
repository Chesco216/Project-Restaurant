import React from "react";

import "./Sing-in.css";

const Singin = () => {
  return (
    <div className="Font2">
    <div className="tittle2">
    <div className="box-tittle2">
    <img src="../static/logo2.png" alt="" />
      <div className="restaunrant-tittle2">
        <span className="restaurant">PIZZA GOOOL</span>
        <input type="text"  className="texto" />
      </div>
      <span className="Share-snap2">El usuario fue correctamente registrado</span>
      
    </div>
      <button>
            <div className="back_container_button2">
            <div className="back-txt2">
              <span className="back-txt2">Volver</span>
              
            </div>
            </div>
       </button>
        
      </div>
    </div>
  );
};

export default Singin;
