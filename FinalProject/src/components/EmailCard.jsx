import React from "react";
import "./EmailCard.css";

export const EmailCard = (props) => {
    const DatesEmail =props.DatesEmail
  return (

  <div className='Emailcard_container'>  
        <div className="subtittle">
            <span className="subtittle">Correo</span>
         </div>
         <div className="box_subtittle">  
              <snap className="text_subtittle">saranielsen@gmail.com</snap>  
         </div>
         <div className="subtittle_con">
              <snap className="subtittle_con">Contraseña</snap>
         </div>
         <div className="box_subtittle_con">
              <snap className="text_con">123456789</snap>
         </div>
  
    <button>
    <div className="bouton_login">
            <div className="txt_bouton">
              <span className="txt_bouton">Login</span>
            </div>
    </div>
    </button>
  </div>  

        
  )
};

