import React from "react";
import "./SaleCard.scss";

const SaleCard = ({ product }) => {
  const { title, image, id, discont_price, price } = product;

  return (
    <div className="product-card">
      <img
        className="product-card__img"
        src={"http://localhost:3333" + image}
        alt={`Product` + id}
      />
      <div className="product-card__details">
        <div className="product-card__title">{title}</div>
        <div className="product-card__price-block">
          <div className="product-card__discount">
            ${!discont_price ? price : discont_price}
          </div>

          <div className="product-card__price">
            {discont_price ? "$" + discont_price : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export { SaleCard };
