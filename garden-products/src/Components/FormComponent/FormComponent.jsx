import React, { useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import "./FormComponent.scss";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (newValue) => {
    setFormData({
      ...formData,
      name: newValue,
      phoneNumber: newValue,
      email: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("", formData);
  };

  return (
    <form className="form-block" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <Input
        type="tel"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        placeholder="Phone number"
      />
      <Input
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <Button
        buttonClass="secondary"
        text="Get a discount"
      />
    </form>
  );
};

export { FormComponent };
