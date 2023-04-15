import React from "react";
import '../../blocks/projects/Parallax/Parallax.css';

function Parallax() {
  return (
    <div className="parallax">
      <h2 className="parallax__title">Parallax</h2>
      <div className="parallax__content">
        <iframe className="parallax__video" width="605" height="428" src="https://www.youtube.com/embed/00u28dyOpCo"
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        <h3 className="parallax__paragraph"></h3>
        <div className="parallax__light"></div>
      </div>
      <p className="parallax__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  );
}

export default Parallax;