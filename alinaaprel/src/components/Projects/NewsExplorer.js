import React from "react";
import '../../blocks/projects/NewsExplorer/NewsExplorer.css';

function NewsExplorer() {
  return (
    <div className="newsExplorer">
      <h2 className="newsExplorer__title">NewsExplorer</h2>
      <div className="newsExplorer__content">
        <iframe className="newsExplorer__video" width="605" height="428" src="https://www.youtube.com/embed/00u28dyOpCo"
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        <h3 className="newsExplorer__paragraph">ищи читай сохраняй</h3>
        <div className="newsExplorer__light"></div>
      </div>
      <p className="newsExplorer__description">Cервис, в котором можно найти новости по запросу и сохранить в личном кабинете.</p>
    </div>
  );
}

export default NewsExplorer;