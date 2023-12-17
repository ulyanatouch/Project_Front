import React from "react";
import "./Input.scss";

const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <input className="custom-input"
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
    />
  );
};
export { Input };
