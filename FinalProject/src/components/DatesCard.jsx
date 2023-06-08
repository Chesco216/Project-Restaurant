import React from "react";
import "./DatesCard.css";

export const DatesCard = (props) => {
    const DatesEmail =props.DatesEmail
  return (

  <div className='DatesCard_container'>  
        <div className="subtittle1">
            <span className="subtittle1">FisrtName</span>
         </div>
        <div className="box_subtittle1">
            <span className="text_box1">Sarah</span>
            
        </div>
        <div className="subtittle2">
              <span className="subtittle2">LastName</span>
        </div>
        <div className="box_subtittle2">
              <span className="text_box2">Nielsen</span>
        </div>
        <div className="subtittle3">
              <span className="subtittle3">Correo</span>
        </div>
        <div className="box_subtittle3">
              <span className="text_box3">saranielsen@gmail.com</span>
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

