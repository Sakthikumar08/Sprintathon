import React from "react";
import "./RuleStyle.css";

const Rules = () => {
  return (
    <div className="rules-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="/videos/bg-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1 className="rules-title">⚡RULES & REGULATIONS</h1>

      <div className="rules-list">
        {[
  "A team should contain a maximum of 4 and a minimum of 3 members, with at least one female participant.",
  "Participants will be connected with top industry mentors for a pre-mentoring session. Attendance in the online sessions as per the assigned schedule is mandatory.",
  "Participants must supply all hardware, software, and other components required for their projects. The organizers will not provide any project-related materials.",
  "All participants are required to inform their parents/guardians about the 24-hour duration of the hackathon.",
  "Participants are responsible for arranging their own transportation to and from the hackathon venue.",
  "The college management and event organizers shall not be held liable for any actions, incidents, or damages that occur outside the boundaries of the official hackathon venue (campus premises). Participants are solely responsible for their conduct and safety when off-campus, including during travel to and from the event.",
  "As this is a 24-hour hackathon, participants are required to remain within the designated venue at all times, except during scheduled breaks or in the event of an emergency.",
  "Food and refreshments will be provided by our college for all hackathon teams. Refreshments will include coffee, tea, and snacks. Water will be available throughout the event.",
  "Students are requested to dress in professional attire for the hackathon.",
  "Participants are required to follow the instructions and guidance provided by the event organizers and staff members to ensure a smooth and successful hackathon."
]
.map((rule, index) => (
          <div key={index} className="rule-card-wrapper">
            {/* Four-Corner Borders Outside */}
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>

            {/* Rule Card */}
            <div className="rule-card">
              <span className="rule-number">#{index + 1}</span>
              <p className="rule-text">{rule}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;
