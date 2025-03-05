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
          "Team Size: All participants must be from the same college. The maximum team size is 4, and the minimum team size is 3. Also, the team must contain at least 1 girl.",
          "Pre-Mentoring Session: Participants will be connected with top industry mentors for a pre-mentoring session. Attendance in the online sessions as per the assigned schedule is mandatory.",
          "Components and Tools: Participants must bring their own components and tools required for their project. The organizers will not provide any materials.",
          "Dress Code: Students are requested to dress in professional attire for the hackathon.",
          "Food and Accommodation: Food, snacks, and accommodation will be provided free of cost for the shortlisted participants.",
          "Event Guidelines: Participants are required to follow all instructions and guidance provided by the event organizers and staff members to ensure a smooth and successful hackathon.",
          "Transportation for Outstation Participants: Participants from outside Chennai are responsible for arranging their own transportation, accommodation, and any additional requirements."
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
