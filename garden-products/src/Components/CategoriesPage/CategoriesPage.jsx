import React, { useEffect, useState } from "react";
import "./CategoriesPage.scss";
import { PagesContainer } from "../PagesContainer/PagesContainer";
import { fetchCategoriesById } from "../../requests";
import { useParams } from "react-router-dom";

const CategoriesPage = () => {
  const {id} = useParams();
  const [productsFromCategories, setCategories] = useState({category: {}, data: []});

  useEffect(() => {
    fetchCategoriesById(id, setCategories);
  }, []);
return <PagesContainer title={productsFromCategories.category.title} cardsData={productsFromCategories.data} />;
};

export { CategoriesPage };
