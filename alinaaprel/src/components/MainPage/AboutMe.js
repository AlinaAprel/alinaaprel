import React from "react";
import avatar from '../../images/avatar.png';

function AboutMe() {
  return (
    <>
    <div className="mainpage">
    <img className="mainpage__avatar" src={avatar} alt="avatar"></img>
    <h2 className="mainpage__about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </h2>
  </div>
  <div className="video">
    <h2 className="video__title">Мои проекты</h2>
    <iframe className="video__iframe" width="560" height="315" src="https://www.youtube.com/embed/00u28dyOpCo"
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
      clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen></iframe>
  </div>
    </>
  );
}

export default AboutMe;