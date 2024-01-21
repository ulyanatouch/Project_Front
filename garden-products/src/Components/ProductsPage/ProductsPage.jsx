import React, { useEffect, useState } from "react";
import "./ProductsPage.scss";
import { PagesContainer } from "../PagesContainer/PagesContainer";
import { fetchProducts } from "../../requests";

const ProductsPage = () => {
  const [cards, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return <PagesContainer title="All products" cardsData={cards} />;
};

export { ProductsPage };
