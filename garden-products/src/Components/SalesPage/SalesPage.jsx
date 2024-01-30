import React, { useEffect, useState } from "react";
import "./SalesPage.scss";
import { PagesContainer } from "../PagesContainer/PagesContainer";
import { fetchProducts } from "../../requests";
import { Breadcrumbs } from "../BreadCrumbs/BreadCrumbs";

const SalesPage = () => {
  const [cards, setProducts] = useState([]);
    const productsWithDiscount = cards.filter((product) => product.discont_price)

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
  <div>
    <Breadcrumbs/>
  <PagesContainer title="All sales" cardsData={productsWithDiscount} />;
  </div>
  )
};

export { SalesPage };
