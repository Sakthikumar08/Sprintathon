import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import "./CardsStyle.css";
import droneImage from "../assets/icons8-drone-64.png"; // Ensure this image exists in your assets folder

const cardData = [
  { name: "Clean and Renewable Energy", icon: "fa-leaf" },
  { name: "Health", icon: "fa-heartbeat" },
  { name: "Waste Management", icon: "fa-recycle" },
  { name: "Agriculture", icon: "fa-tractor" },
  { name: "Smart Education", icon: "fa-graduation-cap" },
  { name: "Cybersecurity", icon: "fa-lock" },
  { name: "AR & VR", icon: "fa-glasses" },
  { name: "Space Tech & Sat Comm", icon: "fa-satellite" },
  { name: "Ocean Technology", icon: "fa-ship" },
  { name: "Drone Technology", image: droneImage }, // Added image for Drone Technology
  { name: "VLSI", icon: "fa-microchip" },
  { name: "Student Innovation", icon: "fa-lightbulb" },
];

const Cards = () => {
  return (
    <div className="cards-grid">
      {cardData.map((data, index) => (
        <TiltCard key={index} name={data.name} icon={data.icon} image={data.image} />
      ))}
    </div>
  );
};

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ name, icon, image }) => {
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

    const rX = ((mouseY / height) * ROTATION_RANGE - HALF_ROTATION_RANGE) * -1;
    const rY = (mouseX / width) * ROTATION_RANGE - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="tilt-card"
    >
      {/* Bottom Corners */}
  <div className="bottom-left"></div>
  <div className="bottom-right"></div>

  <div className="tilt-card-inner">
    {image ? (
      <img src={image} alt={name} className="drone-image" />
    ) : (
      <i className={`fa ${icon} icon`}></i>
    )}
    <p className="hover-text">{name}</p>
  </div>
    </motion.div>
  );
};

export default Cards;
