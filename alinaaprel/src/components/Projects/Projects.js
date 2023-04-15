import React from "react";
import NewsExplorer from './NewsExplorer';
import Mesto from './Mesto';
import Parallax from './Parallax';
import Cover from '../MainPage/Cover';
import Footer from "../Footer";

function Projects() {
  return (
    <>
      <Cover />
      <NewsExplorer />
      <Mesto />
      <Parallax />
      <Footer />
    </>
  );

}

export default Projects;