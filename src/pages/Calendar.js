import React, { useState } from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";

import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import classes from "./Calendar.module.scss";
import "./Calender.scss"
const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events, setEvents] = useState([
    {
      title: "Session 1: Marketing Sprint",
      start: new Date(2022, 1, 14, 9, 0),
      end: new Date(2022, 1, 14, 10, 0),
    },
    {
      title: "Sales Catchup",
      start: new Date(2022, 1, 14, 10, 0),
      end: new Date(2022, 1, 14, 11, 0),
    },
    {
      title: "Renew driver's license",
      start: new Date(2022, 1, 14, 11, 0),
      end: new Date(2022, 1, 14, 12, 0),
    },
    {
      title: "Business lunch w/ Aaron",
      start: new Date(2022, 1, 18, 12, 0),
      end: new Date(2022, 1, 18, 13, 0),
    },
  ]);

  const handleSelectEvent = (event) => {
    alert(`Event: ${event.title}`);
  };

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("Enter event title:");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <>
      <div className={classes.Calendar_main_com}>
        <h1 className={classes.Calendar_h1_}>Calendar</h1>
        <Calendar
          className={classes.Calendar_con}
          localizer={localizer}
          events={events}
          defaultView={Views.WEEK}
          views={["day", "week", "month"]}
          selectable
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          step={30}
          timeslots={2}
          popup
        />
      </div>
    </>
  );
};

export default CalendarPage;
