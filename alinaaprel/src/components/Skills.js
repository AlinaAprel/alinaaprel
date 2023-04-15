import React from "react";
import '../blocks/Skills/Skills.css';
import Button from './Button';
import { hardSkills, softSkills } from '../scripts/variables.js';

function Skills() {
  return (
    <div className="skills">
      <h2 className="skills__title">Hard Skills</h2>
      <Button button={hardSkills}/>
      <h2 className="skills__title">Soft Skills</h2>
      <Button button={softSkills}/>
    </div>
  );
}

export default Skills;