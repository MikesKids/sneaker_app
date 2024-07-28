import React from "react";
import "./Card.css";

const Card = ({ image, children }) => {
  return (
  <div className="card">
    {image && <img src={image} alt="Sneaker brand" className="card-image"/>}
  <div className="card-content">
  {children}
  </div>
  </div>);
};

export default Card;
