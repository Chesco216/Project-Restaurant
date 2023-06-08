import React from "react";
import "./EmailCard.css";

export const EmailCard = (props) => {
    const DatesEmail =props.DatesEmail
  return (

    <div className='Emailcard_container'>   
    <div className="title">
            <span>{DatesEmail.title}</span>
          </div>
          <div className="texto">
            <p>{DatesEmail.texto}</p>
          </div>
          <button>
            <div className=".EmailCard-container button">
                Login
            </div>
          </button>
    </div>  

        
  )
};
export default EmailCard;
