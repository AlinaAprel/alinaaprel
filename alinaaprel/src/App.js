import React from "react";
import './index.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";
import Projects from './components/Projects/Projects';
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <ul className="header__menu">
          <li className="header__nav"><NavLink className="header__nav" to='/'>обо мне</NavLink></li>
          <li className="header__nav"><NavLink className="header__nav" to='/projects'>проекты</NavLink></li>
          <li className="header__nav"><NavLink className="header__nav" to='/experience'>опыт</NavLink></li>
          <li className="header__nav"><NavLink className="header__nav" to='/education'>обучение</NavLink></li>
        </ul>
      </div>
      <Routes>
        <Route exact path='/' element={<MainPage />}></Route>
        <Route exact path='/projects' element={<Projects />}></Route>
        <Route exact path='/experience' element={<Experience />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
