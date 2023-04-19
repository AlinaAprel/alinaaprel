import React from "react";
import '../../blocks/Experience/Experience.css'
import Job from './Job';
import Button from '../Button';
import Skills from '../Skills';
import Footer from '../Footer';

import { 
  polarionTasks,
  polarionSkills,
  epamTasks,
  epamSkills,
  myootvTasks,
  myootvSkills } from '../../scripts/variables.js';

function Experience() {
  return(
    <>
      <Job 
        title="Polarion (Siemens)" 
        name="Junior frontend developer" 
        date="Июнь 2022 - Октябрь 2022" 
        tasks={polarionTasks}
      />
      <Button button={polarionSkills}/>

      <Job 
        title="EPAM" 
        name="Trainee frontend developer" 
        date="Сентябрь 2021 - Май 2022" 
        tasks={epamTasks}
      />
      <Button button={epamSkills}/>

      <Job 
        title="MYOO.TV" 
        name="Организатор, разработчик" 
        date="Июнь 2018 - Апрель 2020" 
        tasks={myootvTasks}
      />
      <Button button={myootvSkills}/>
      
      <Skills />
      <Footer />
    </>
  );
}

export default Experience;