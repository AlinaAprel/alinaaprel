import React from "react";
import '../../blocks/Experience/Experience.css'
import Cover from '../MainPage/Cover';
import Job from './Job';
import Button from '../Button';
import Footer from '../Footer';
import { polarionTasks, polarionSkills, epamTasks, myootvTasks } from '../../scripts/variables.js';

function Experience() {
  return(
    <>
      <Cover />
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

      <Job 
        title="MYOO.TV" 
        name="Организатор, разработчик" 
        date="Июнь 2018 - Апрель 2020" 
        tasks={myootvTasks}
      />
      
      <Footer />
    </>
  );
}

export default Experience;