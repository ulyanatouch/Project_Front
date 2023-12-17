import React from "react";
import "./CheckoutBlock.scss";
import { Button } from "../Button/Button";

const CheckoutBlock = () => {
  return (
    <div className="checkout-block">
      <h1>Amazing Discounts on Garden Products!</h1>
      <Button buttonClass='primary' text='Check out'/>
    </div>
  );
};

export { CheckoutBlock};
