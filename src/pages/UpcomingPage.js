import React from "react";
import classes from "./UpcomingPage.module.scss";
import TaskList from "../components/TaskList";

const UpcomingPage = () => {
  const tasks = {
    today: [
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
      { id: 4, title: "Consult accountant", subtasks: null, label: null },
    ],
    tomorrow: [
      { id: 5, title: "Create job posting for SEO specialist" },
      { id: 6, title: "Request design assets for landing page" },
    ],
    thisWeek: [
      { id: 7, title: "Print business card" },
       // Reuse "today" tasks for demo
    ],
  };

  return (
    <>
      <div className={classes.upcoming_tasks}>
        <header className={classes.main_header}>
          <p>
            Upcoming
          </p>
          <div className={classes.item_count}>
              <p>{tasks.today.length + tasks.tomorrow.length + tasks.thisWeek.length}</p>
            </div>
        </header>
        <div className={classes.sections_container}>
          <TaskList title="Today" tasks={tasks.today} />
          <TaskList title="Tomorrow" tasks={tasks.tomorrow} />
          <TaskList title="This Week" tasks={tasks.thisWeek} />
        </div>
      </div>
    </>
  );
};

export default UpcomingPage;
