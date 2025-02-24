import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import "./CardsStyle.css"; // Import CSS file

const cardData = [
  "Card 1",
  "Card 2",
  "Card 3",
  "Card 4",
  "Card 5",
  "Card 6",
  "Card 7",
  "Card 8",
  "Card 9",
  "Card 10",
  "Card 11",
  "Card 12",
];

const Cards = () => {
  return (
    <div className="cards-grid">
      {cardData.map((title, index) => (
        <TiltCard key={index} title={title} />
      ))}
    </div>
  );
};

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const TiltCard = ({ title }) => {
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
      <div className="tilt-card-inner">
        <FiMousePointer className="icon" />
        <p className="hover-text">{title}</p>
      </div>
    </motion.div>
  );
};

export default Cards;
