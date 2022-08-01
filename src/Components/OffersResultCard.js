import React from "react";
import "../css/OffersResultCard.scss";
import image from "../assets/imagen.png";

function OffersResultCard({
  isLoggedIn,
  title = "Nombre de la oferta",
  subtitle = "Colombia - Atlántico - Barranquilla",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  button="Editar oferta",
}) {
  return (
    <div className="offersResult">
      <div className="profile">
        <img src={image}></img>
        <p>Nombre de la empresa</p>
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p className="subt">{subtitle}</p>
        <p>{description}</p>
      </div>
      <div className="bt">
        <button>{button}</button>
      </div>
    </div>
  );
}

export default OffersResultCard;
