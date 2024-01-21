import React from "react";
import { Link } from "react-router-dom";
import "./PagesContainer.scss";
import { SaleCard } from "../SaleCard/SaleCard";

const PagesContainer = ({
  title,
  cardsData = [],
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>
        {cardsData.map((card) => {
          return (
            <Link to={`/products/${card.id}`} key={card.id}>
              <SaleCard card={card} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export { PagesContainer };
