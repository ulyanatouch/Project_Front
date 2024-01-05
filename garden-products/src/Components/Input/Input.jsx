import React from "react";
import "./Input.scss";

const Input = ({type, value, onChange, placeholder}) => {
  return (
      <div className="custom-input-container">
          <input
              className="custom-input"
              type={type}
              value={value}
              onChange={(event) => onChange(event.target.value)}
              placeholder={placeholder}
          />
      </div>
  );
};
export {Input};