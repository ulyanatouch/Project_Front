import React, { useEffect, useState } from "react";
import { CategoriesCard } from "../CategoriesCard/CategoriesCard";
import "./Categories.scss";
import { fetchCards } from "../../requests";
import { Link } from 'react-router-dom'
import { Breadcrumbs } from "../BreadCrumbs/BreadCrumbs";

export const Categories = ({isMainPage = false}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards(setCards);
  }, []);

  return (
    <div className="categories-block">
      <Breadcrumbs/>
      <p>Categories</p>
      <div className="categories-cards">
        {(isMainPage ? cards.slice(0, 4) : cards).map((card) => (
          <Link to={`/categories/${card.id}`} key={card.id}>
          <CategoriesCard key={card.id} card={card} />
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
