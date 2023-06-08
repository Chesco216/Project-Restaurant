import React from "react";
import "./DatesCard.css";

export const DatesCard = (props) => {
    const Dates =props.Dates
  return (

    <div className='.Datecard-container'>   
        <div className="title">
            <span>{Dates.title}</span>
          </div>
        <div className="texto">
            <p>{Dates.texto}</p>
          </div>
          <button>
            <div className=".sign-in_container_button">
               <h1>Sign in</h1> 
            </div>
          </button>
          <button>
            <div className=".login_container_button2">
                <h1>Login</h1>
            </div>
          </button>
    </div>  

        
  )
};
export default DatesCard;