import React from "react";

function Job(props) {
  return(
    <div className="job">
      <div className="job__square"></div>
      <div className="job__content">
        <h2 className="job__title">{props.title}</h2>
        <h3 className="job__name">{props.name}</h3>
        <h4 className="job__date">{props.date}</h4>
        <ul className="job__description">
          {props.tasks.map(task => <li className="job__task">{task}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Job;