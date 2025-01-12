import React from "react";
import classes from "./TaskList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TaskList = ({ title, tasks }) => {
  return (
    <>
      <div className={classes.task_section}>
        <header className={classes.section_header}>
          <p>{title}</p>
          <button className={classes.add_task_btn}>
            <FontAwesomeIcon icon={faPlus} /> Add New Task
          </button>
        </header>
        <ul className={classes.task_list}>
          {tasks.map((task) => (
            <li key={task.id} className={classes.task_item}>
              <div className={classes.checkbox_container}>
                <input
                  type="checkbox"
                  id={`task-${task.id}`}
                  className={classes.checkbox_input}
                />
                <label
                  htmlFor={`task-${task.id}`}
                  className={classes.checkbox_label}
                >
                  <span className={classes.custom_checkbox}></span>
                </label>
              </div>
              <div className={classes.task_details}>
                <div className={classes.task_title}>{task.title}</div>
                <div className={classes.task_meta}>
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
                      className={`${classes.label} ${
                        classes[task.label.toLowerCase()]
                      }`}
                    >
                      {task.label}
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
