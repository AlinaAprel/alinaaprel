import React from "react";
import '../blocks/Button/Button.css';

function Button(props) {
  return(
    <div className="buttons__container">
      {props.button.map((button, index) => {
        return <button key={index} className={button.name}>{button.text}</button>
      })}
    </div>
  );
}

export default Button;