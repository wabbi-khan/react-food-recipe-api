import React from "react";
import "./RecipeTile.css";
export default function RecipeTile({ recipe }) {
  return (
    <div className="recipeTile">
      <img
        className="recipeTile-img"
        src={recipe["recipe"]["image"]}
        alt="banner"
      />
      <p className="recipeTile-name"> {recipe["recipe"]["label"]} </p>
    </div>
  );
}
