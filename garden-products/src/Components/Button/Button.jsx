import React from "react";
import './Button.scss' 


const Button = ({buttonClass, text}) => {
const customStyle = `button ${buttonClass}`;
    return (
      <button className={customStyle}>{text}</button>
    );
  };
  
  export { Button };  