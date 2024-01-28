import React from "react";
import "./CategoriesCard.scss";

const CategoriesCard = ({ card }) => {
  // компонент принимает объект card в качестве свойства(пропс)
  const { title, image, id } = card; // этот объект содержит информацию title, image, id

  return (
    <div className="categories-card">
      <img
        className="categories-card__img"
        src={"http://localhost:3333" + image}
        alt={`Card` + id}
      />
      <div className="categories-card__title">{title}</div>
    </div>
  ); // компонент возвращает JSX разметку(структуру карточки категории товаров)
};

export { CategoriesCard };

// этот компонент нужен для структурированного отображения информации о категории товаров в виде карточки
