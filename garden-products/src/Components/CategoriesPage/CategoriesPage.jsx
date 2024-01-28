import React, { useEffect, useState } from "react"; // импорт хуков для работы с жизненным циклом компонента и состоянием
import "./CategoriesPage.scss";
import { PagesContainer } from "../PagesContainer/PagesContainer";
import { fetchCategoriesById } from "../../requests"; // импорт функции которая используется для получения данных о категориях товаров
import { useParams } from "react-router-dom"; // импорт хука для извлечения параметров из урла

const CategoriesPage = () => {
  const { id } = useParams(); // хук используется для извлечения параметра айди из текущего урла
  const [productsFromCategories, setCategories] = useState({
    category: {},
    data: [],
  }); // изначальное значение устанавливается здесь
  // этот хук используется для создания состояния productsFromCategories которое будет содержать информацию о категории и связанных с ней товарами.

  useEffect(() => {
    fetchCategoriesById(id, setCategories); // здесь я получаю данные о категориях и товарах с помощью вызова функции
  }, []); // пустой массив зависимостей указывает , что эффект будет выполняться только один раз при монтировании и демонтаже компонента
  return (
    <PagesContainer
      title={productsFromCategories.category.title}
      cardsData={productsFromCategories.data}
    />
  );
};

export { CategoriesPage };

// этот компонент использует хуки для работы с жизненным циклом компонента и состоянием, а также функцию для получения данных о категории и ее товарах, потом полученные данные передаются в компонент PagesContainer который и отображает карточки товаров внутри категории
