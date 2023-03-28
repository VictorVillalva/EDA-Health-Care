import React from "react";
import "../assets/Styles/button2.css";
const Button2 = (props) => {
  return (
    <div className="button2-container button2">
      <button type={`${props.type}`} className="button2-button2 button">
        <a className="button2-text">{props.text}</a>
      </button>
    </div>
  );
};
export default Button2;
