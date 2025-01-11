import React from "react";
import classes from "./todayTasks.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faPlus,

} from "@fortawesome/free-solid-svg-icons";

const TodayTasks = () => {
  const tasks = [
    { id: 1, title: "Research content ideas", subtasks: null, label: null },
    {
      id: 2,
      title: "Create a database of guest authors",
      subtasks: null,
      label: null,
    },
    {
      id: 3,
      title: "Renew driver's license",
      subtasks: 1,
      label: "Personal",
      date: "23-03-22",
    },
    { id: 4, title: "Consult accountant", subtasks: 3, label: "List 1" },
    { id: 5, title: "Print business card", subtasks: null, label: null },
  ];

  return (
    <>
      <div className={classes.task_list}>
        <div className={classes.task_header_con}>
          <header className={classes.task_header}>
            <h1>Today</h1>
            <div className={classes.item_count}>
              <p>{tasks.length}</p>
            </div>
          </header>
        </div>

        <button className={classes.add_task_btn}><FontAwesomeIcon icon={faPlus} /> Add New Task</button>
        <ul className={classes.tasks}>
          {tasks.map((task) => (
            <li key={task.id} className={classes.task_item}>
              <div className={classes.checkbox_container}>
                <input
                  type="checkbox"
                  id={`task-${task.id}`}
                  className={classes.checkbox_input}
                />
                <label htmlFor={`task-${task.id}`} className={classes.checkbox_label}>
                  <span className={classes.custom_checkbox}></span>
                  
                </label>
              </div>
              <label htmlFor={`task-${task.id}`} className={classes.task_label}>
                <div className={classes.task_title}>{task.title}</div>
                <div className={classes.task_date_subtacks}>
                {task.date && (
                  <span className={classes.task_date}>{task.date}</span>
                )}
                {task.subtasks && (
                  <span className={classes.task_subtasks}>
                    {task.subtasks} Subtasks
                  </span>
                )}
                {task.label && (
                  <span
                    className={`${classes.task_label_chip} ${
                      task.label === "Personal"
                        ? classes.personal
                        : classes.default
                    }`}
                  >
                    {task.label}
                  </span>
                )}
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodayTasks;
