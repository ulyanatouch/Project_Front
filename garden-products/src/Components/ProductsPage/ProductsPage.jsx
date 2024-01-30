import React, { useEffect, useState } from "react";
import "./ProductsPage.scss";
import { PagesContainer } from "../PagesContainer/PagesContainer";
import { fetchProducts } from "../../requests";
import { Breadcrumbs } from "../BreadCrumbs/BreadCrumbs";

const ProductsPage = () => {
  const [cards, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <div>
      <Breadcrumbs/>
    <PagesContainer title="All products" cardsData={cards} />;
    </div>
  )
};

export { ProductsPage };
