import React from "react";
import "./CategoriesCard.scss";

const CategoriesCard = ({card}) => {
    const { title, image, id } = card;

  return <div className="categories-card">
    <img src={'http://localhost:3333'+image} alt={`Card` +id} />
    <p>{title}</p>
  </div>;
};

export { CategoriesCard };
