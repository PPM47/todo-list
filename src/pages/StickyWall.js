import React from "react";
import classes from "./stickyWall.module.scss";

const StickyWall = () => {
  // Define sticky cards dynamically
  const stickyCards = [
    { id: 1, title: "Social Media", notes: ["Plan social content", "Build content calendar", "Plan promotion and distribution"], color: "yellow" },
    { id: 2, title: "Content Strategy", notes: ["Would need time to get insights (goals, personas, budget, audits).", "Brainstorm on tooling."], color: "blue" },
    { id: 3, title: "Email A/B Tests", notes: ["Subject lines", "Sender", "CTA", "Sending times"], color: "pink" },
    { id: 4, title: "Banner Ads", notes: ["Sizing matters", "Choose distinctive imagery", "The landing page must match the display ad"], color: "orange" },
  ];

  return (
    <div className={classes.stickyWall}>
      <h1 className={classes.title}>Sticky Wall</h1>
      <div className={classes.stickyGrid}>
        {/* Map through stickyCards to create sticky notes dynamically */}
        {stickyCards.map((card) => (
          <div key={card.id} className={`${classes.stickyNote} ${classes[card.color]}`}>
            <h3 className={classes.task_title}>{card.title}</h3>
            {Array.isArray(card.notes) ? (
              <ul>
                {card.notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            ) : (
              <p className={classes.note_p}>{card.notes}</p>
            )}
          </div>
        ))}
        {/* Empty sticky note for adding more */}
        <div className={`${classes.stickyNote} ${classes.empty}`}>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default StickyWall;
