import React from "react";
import { CheckoutBlock } from "../../Components/CheckoutBlock/CheckoutBlock";
import { DiscountBlock } from "../../Components/DiscountBlock/DiscountBlock";
import { Categories } from "../../Components/Categories/Categories";
import { Sales } from "../../Components/Sales/Sales";

const MainPage = () => {
  return (
    <div>
      <CheckoutBlock />
      <Categories />
      <DiscountBlock />
      <Sales />
    </div>
  );
};
export { MainPage };
