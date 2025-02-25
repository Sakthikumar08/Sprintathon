import React, { useEffect } from "react";
import "./TimelineStyle.css";

const Timeline = () => {
  const timelineEvents =[
    { "date": "February 26, 2025", "title": "Registrations Open", "description": "Start registering for Sprintathon'25 and form your teams." },
    { "date": "March 16, 2025", "title": "Registrations Close", "description": "Last day to register and finalize your team." },
    { "date": "March 18, 2025", "title": "Shortlisted Teams Announcement", "description": "Teams selected for the next stage will be announced." },
    { "date": "March 20, 2025", "title": "Pre-Mentoring Session", "description": "Industry mentors guide shortlisted teams before the hackathon." },
    { "date": "March 27, 2025", "title": "First & Second Round Evaluation", "description": "Projects will be assessed in multiple evaluation rounds." },
    { "date": "March 28, 2025", "title": "Third Round Evaluation", "description": "Final project evaluations for hardware & software categories." },
    { "date": "March 28, 2025", "title": "Valedictory & Prize Distribution", "description": "Celebrating winners and distributing awards." }
  ];
  

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".timeline-event").forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">Timeline</h1>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="event-date">{event.date}</div>
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
