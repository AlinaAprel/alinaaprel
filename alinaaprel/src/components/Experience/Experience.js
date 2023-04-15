import React from "react";
import '../../blocks/Experience/Experience.css'
import Cover from '../MainPage/Cover';
import Job from './Job';
import Footer from '../Footer';

function Experience() {
  const polarionTasks = [
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet'
  ];

  const epamTasks = [
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet'
  ];

  const myootvTasks = [
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet'
  ];

  return(
    <>
      <Cover />
      <Job 
        title="Polarion (Siemens)" 
        name="Junior frontend developer" 
        date="Июнь 2022 - Октябрь 2022" 
        tasks={polarionTasks}
      />

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