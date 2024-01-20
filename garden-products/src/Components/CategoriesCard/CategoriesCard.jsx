import React from "react";
import "./CategoriesCard.scss";

const CategoriesCard = ({card}) => {
    const { title, image, id } = card;

  return <div className="categories-card">
    <img className="categories-card__img" src={'http://localhost:3333'+image} alt={`Card` +id} />
    <div className="categories-card__title">{title}</div>
  </div>;
};

export { CategoriesCard };
