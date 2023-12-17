import React from "react";
import "./DiscountBlock.scss";
import hands from "../../assets/images/hands.svg";
import { FormComponent } from "../FormComponent/FormComponent";

const DiscountBlock = () => {
  return (
    <div className="discount-block">
      <h1 className="discount-block__title">5% off on the first order</h1>

      <div className="discount-block__content">
        <img src={hands} alt="hands" />
        <FormComponent />
      </div>
    </div>
  );
};
export { DiscountBlock };
