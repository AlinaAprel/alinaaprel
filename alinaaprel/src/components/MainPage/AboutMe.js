import React from "react";
import avatar from '../../images/avatar.jpeg';

function AboutMe() {
  return (
    <>
    <div className="mainpage">
    <img className="mainpage__avatar" src={avatar} alt="avatar"></img>
    <h2 className="mainpage__about">Привет! Меня зовут Алина Апрель, и я frontend разработчик.
     Увлекаюсь программированием с довольно раннего возраста, а свой профессиональный путь начала в 18 лет.
      Закончила Яндекс Практикум и работала в компаниях EPAM и Polarion (Siemens). Пишу на JS es6+, изучаю React и имею опыт c MongoDB, Postman и Figma 
    </h2>
  </div>
  <div className="video">
    <h2 className="video__title">Мои проекты</h2>
    <iframe className="video__iframe" width="560" height="315" src="https://www.youtube.com/embed/uDDJnvg50qw"
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
      clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
  </div>
    </>
  );
}

export default AboutMe;