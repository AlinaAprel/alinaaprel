import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="header">
        <ul className="header__menu">
          <li className="header__nav"><NavLink className="header__nav" to='/'>обо мне</NavLink></li>
          <li className="header__nav"><NavLink className="header__nav" to='/projects'>проекты</NavLink></li>
          <li className="header__nav"><NavLink className="header__nav" to='/experience'>опыт</NavLink></li>
          {/* <li className="header__nav"><NavLink className="header__nav" to='/education'>обучение</NavLink></li> */}
        </ul>
      </div>
    </>

  );
}

export default Header;
