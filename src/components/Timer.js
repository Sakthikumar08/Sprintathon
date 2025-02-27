import React, { useState, useEffect } from "react";
import "./TimeStyle.css"; // Import the correct CSS file

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-03-16T23:59:59"); // Registration closing date
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => calculateTimeLeft(), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="timer-container">
      <div className="timer">
        {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
          const values = Object.values(timeLeft);
          return (
            <div key={index} className="timer-box">
              <span>{String(values[index]).padStart(2, "0")}</span>
              <span className="label">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timer;
