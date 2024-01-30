import React from "react";
import { CheckoutBlock } from "../../Components/CheckoutBlock/CheckoutBlock";
import { DiscountBlock } from "../../Components/DiscountBlock/DiscountBlock";
import { Categories } from "../../Components/Categories/Categories";
import { Sales } from "../../Components/Sales/Sales";
import { Breadcrumbs } from "../../Components/BreadCrumbs/BreadCrumbs";

const MainPage = () => {
  return (
    <div>
      <Breadcrumbs/>
      <CheckoutBlock />
      <Categories isMainPage={true}/>
      <DiscountBlock />
      <Sales />
    </div>
  );
};
export { MainPage };
