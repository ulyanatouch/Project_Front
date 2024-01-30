import React from "react";
import { Link } from "react-router-dom"; // я использую линк для перехода на другие страницы
import "./PagesContainer.scss";
import { SaleCard } from "../SaleCard/SaleCard";

const PagesContainer = ({ title, cardsData = [] }) => { // 'этот компонент принимает два свойства (пропса) - заголовок и массив данных для отображения карточек, по умолчанию установлен в пустой массив если не предоставлены данные
  return ( // возвращаю контейнер страниц
    <div className="pages-container">
      <div className="pages-container__title">{title}</div>
      <div className="pages-container__cards">
        {cardsData.map((card) => {  // использую метод мэп чтобы пройтись по каждой карточке и создать для нее ссылку на страницу продукта
          return (
            <Link to={`/products/${card.id}`} key={card.id}> 
              <SaleCard card={card} /> 
            </Link>   // key использую для идентификации уникальной каждой карточкив массиве, это помогает реакту эффективно обновлять и перерисовывать компоненты при изменении данных
          ); // каждая карточка оборачивается в ссылку и отображается с использованием компонента SaleCard
        })} 
      </div>
    </div>
  );
};
export { PagesContainer }; 
