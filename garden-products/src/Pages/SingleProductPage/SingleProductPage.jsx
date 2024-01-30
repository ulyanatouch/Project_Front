import React, { useEffect, useState } from "react";
import { fetchProductById } from "../../requests"; // эту функцию я использую для запроса данных по id
import { useParams } from "react-router-dom"; // импорт хука для извлечения параметров из урлы
import { Button } from "../../Components/Button/Button";
import { Counter } from "../../Components/Counter/Counter";
import "./SingleProductPage.scss";

const SingleProductPage = () => {
  const [product, setProduct] = useState({}); // здесь я создаю состояние продукт которое содержит информацию о продукте, а начальное значение состояния устанавливается в объект который не содержит никаких данных. т.е формально product является пустым объектом
  const { id } = useParams(); // этот хук я использую для извлечения параметра id (т.е. продукта который должен быть изображен на этой странице)

  useEffect(() => {
    fetchProductById(id, setProduct);
  }, []);

  const getPriceDisplay = () => {
    return product.discont_price ? product.discont_price : product.price;
  };

  return (
    <div className="single-page-block">
      <div className="single-page-block__image">
        <img
          src={`http://localhost:3333${product.image}`}
          alt={`Product${product.id}`}
        />
      </div>
      <div className="single-page-block-info">
        <div className="single-page-block-info__title">{product.title}</div>
        <div className="block-price">
          <div className="block-price__price">{product.price}</div>
          <div className="block-price__discont_price">${getPriceDisplay()}</div>
          <div className="block-price__sumdiscount"></div>
        </div>
        <div className="single-page-block-info__frame">
          <Counter />
          <Button buttonClass="primary" text="Add to cart" />
        </div>
        <div className="single-page-block-info__description">
          {product.description}
        </div>
      </div>
    </div>
  );
};

export { SingleProductPage };

// это страница для отображения информации о конкретном продукте.
