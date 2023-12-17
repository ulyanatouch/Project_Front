import React from "react";
import './Button.scss' 


const Button = ({buttonClass, text}) => {
const customStyle = `button ${buttonClass}`;
    return (
      <div>
        <button className={customStyle}>{text}</button>
      </div>
    );
  };
  
  export { Button };  