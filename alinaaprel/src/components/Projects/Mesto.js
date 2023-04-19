import React from "react";
import '../../blocks/projects/Mesto/Mesto.css';

function Mesto() {
  return(
    <div className="mesto">
      <h2 className="mesto__title">Mesto</h2>
      <div className="mesto__content">
        <iframe className="mesto__video" width="605" height="428" src="https://www.youtube.com/embed/_KaWS2yTIRg"
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        <h3 className="mesto__paragraph">лайкай снимай публикуй</h3>
        <div className="mesto__light"></div>
      </div>
      {/* <p className="mesto__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.</p> */}
    </div>
  );
}

export default Mesto;