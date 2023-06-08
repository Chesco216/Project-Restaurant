import React from "react";

import "./ShareLink.css";

const ShareLink = () => {
  return (
    <div className="Font">
      <div className="tittle">
      <div className="box-tittle">
      <img src="../static/logo2.png" alt="" />
        <div className="restaunrant-tittle">
          <span className="restaurant">PIZZA GOOOL</span>
          <input type="text"  className="texto" />
        </div>
        <span className="Share-snap">Invita a todos tus amigos a disfrutar de un fabulosa Pizza!!!</span>
        
      </div>
      {/*<div className="vec">
      <img src="../static/image.png" alt="vec" />
  </div>*/}
        
      </div>
    </div>
  );
};

export default ShareLink;
