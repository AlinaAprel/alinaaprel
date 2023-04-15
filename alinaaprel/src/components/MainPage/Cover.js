import React from "react";
import coverImg from '../../images/cover-image.png';

function Cover() {
  return(
    <div className="cover">
      <img className="cover__image" src={coverImg} alt="cover"></img>
      <h1 className="cover__title">Расстояний не надо бояться, надо бояться обосраться</h1>
      <p className="cover__description">- Алина Апрель</p>
    </div>
  );
}

export default Cover;