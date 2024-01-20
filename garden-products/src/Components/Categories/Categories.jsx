import React, { useEffect, useState } from "react";
import { CategoriesCard } from "../CategoriesCard/CategoriesCard";
import "./Categories.scss"

export const Categories = () => {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:3333/categories/all");
        const data = await response.json();
        setCards(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCards();
  }, []);
  
  return (
    <div className="categories-block">
      <p>Categories</p>
      <div className="categories-cards">
      {cards.slice(0, 4).map((card) => (
        <CategoriesCard key={card.id} card={card} />
      ))}
      </div>
    </div>
  );
};

export default Categories;
