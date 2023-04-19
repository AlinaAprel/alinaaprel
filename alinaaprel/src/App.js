import React from "react";
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from "./components/MainPage/MainPage";
import Projects from './components/Projects/Projects';
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage />}></Route>
        <Route exact path='/projects' element={<Projects />}></Route>
        <Route exact path='/experience' element={<Experience />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
