import React, { useEffect } from "react";
import "./TimelineStyle.css";

const Timeline = () => {
  const timelineEvents = [
    { date: "March 1, 2025", title: "Registrations Open", description: "Start registering for Sprintathon'25 and form your teams." },
    { date: "March 10, 2025", title: "Registrations Close", description: "Last day to register and finalize your team." },
    { date: "March 15, 2025", title: "Hackathon Begins", description: "Coding officially starts! Work on your innovative solutions." },
    { date: "March 16, 2025", title: "Checkpoint Submission", description: "Submit your progress for review." },
    { date: "March 17, 2025", title: "Final Submission", description: "Submit your final project and documentation." },
    { date: "March 18, 2025", title: "Evaluation & Results", description: "Judging, winner announcements, and awards." }
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
