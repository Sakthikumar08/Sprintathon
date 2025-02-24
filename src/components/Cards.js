import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import "./CardsStyle.css";
import droneImage from "../assets/icons8-drone-64.png";

const cardData = [
  {
    name: "Clean and Renewable Energy",
    icon: "fa-leaf",
    description: "Automatic Energy Saving System: Develop a centralized monitoring system for street lights that can automatically detect faults like non-functioning lights, current leakage, and cable breakage, reducing reliance on citizen complaints and improving efficiency.",
    additionalInfo: "Solar Efficient System: Build a software platform to monitor and optimize the performance of solar panels, ensuring maximum energy generation and reducing maintenance costs.",
    sdg: "SDG 7: Affordable Energy, SDG 11: Sustainable Cities",
    category: "Hardware/Software"
  },
  { name: "Health", icon: "fa-heartbeat" },
  { name: "Waste Management", icon: "fa-recycle" },
  { name: "Agriculture", icon: "fa-tractor" },
  { name: "Smart Education", icon: "fa-graduation-cap" },
  { name: "Cybersecurity", icon: "fa-lock" },
  { name: "AR & VR", icon: "fa-glasses" },
  { name: "Space Tech & Sat Comm", icon: "fa-satellite" },
  { name: "Ocean Technology", icon: "fa-ship" },
  { name: "Drone Technology", image: droneImage },
  { name: "VLSI", icon: "fa-microchip" },
  { name: "Student Innovation", icon: "fa-lightbulb" },
];

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <div className="cards-grid">
        {cardData.map((data, index) => (
          <TiltCard
            key={index}
            data={data}
            onClick={() => setSelectedCard(data)}
          />
        ))}
      </div>
      {selectedCard && <Popup card={selectedCard} onClose={() => setSelectedCard(null)} />}
    </>
  );
};

const TiltCard = ({ data, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 150, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 150, damping: 10 });
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const { width, height } = rect;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const rX = ((mouseY / height) * 20 - 10) * -1;
    const rY = (mouseX / width) * 20 - 10;
    x.set(rX);
    y.set(rY);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onClick={onClick}
      style={{ transformStyle: "preserve-3d", transform }}
      className="tilt-card"
    >
      <div className="bottom-left"></div>
      <div className="bottom-right"></div>
      <div className="tilt-card-inner">
        {data.image ? (
          <img src={data.image} alt={data.name} className="drone-image" />
        ) : (
          <i className={`fa ${data.icon} icon`}></i>
        )}
        <p className="hover-text">{data.name}</p>
      </div>
    </motion.div>
  );
};

const Popup = ({ card, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>{card.name}</h2>
        {card.description && <p>{card.description}</p>}
        {card.additionalInfo && <p>{card.additionalInfo}</p>}
        {card.sdg && <p><strong>{card.sdg}</strong></p>}
        {card.category && <p><strong>{card.category}</strong></p>}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Cards;
