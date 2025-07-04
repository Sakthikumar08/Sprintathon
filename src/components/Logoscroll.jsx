import React from "react";
import logo1 from "../assets/data.png";
import logo2 from "../assets/sponsor1.png";
import logo3 from "../assets/enthutech.png";
import logo4 from "../assets/sponsor2.png";
import logo5 from "../assets/sponsor4.png";
import logo6 from "../assets/sponsor5.png";
import logo7 from "../assets/sponsor6.png";

const Logoscroll = () => {
  // Use the imported variables directly
  const uniqueIcons = [
    { src: logo1, alt: "Data Logo" },
    { src: logo2, alt: "Sponsor 1" },
    { src: logo3, alt: "Enthutech" },
    { src: logo4, alt: "Sponsor 2" },
    { src: logo5, alt: "Sponsor 4" },
    { src: logo6, alt: "Sponsor 5" },
    { src: logo7, alt: "Sponsor 5" },
    { src: logo1, alt: "Data Logo" },
    { src: logo2, alt: "Sponsor 1" },
    { src: logo3, alt: "Enthutech" },
    { src: logo4, alt: "Sponsor 2" },
    { src: logo5, alt: "Sponsor 4" },
    { src: logo6, alt: "Sponsor 5" },
     { src: logo7, alt: "Sponsor 5" },
     { src: logo2, alt: "Sponsor 1" },
    { src: logo3, alt: "Enthutech" },
    { src: logo4, alt: "Sponsor 2" },
    { src: logo5, alt: "Sponsor 4" },
    { src: logo6, alt: "Sponsor 5" },
     { src: logo7, alt: "Sponsor 5" },
  ];

  // Create enough duplicates for smooth scrolling
  const icons = [...uniqueIcons, ...uniqueIcons, ...uniqueIcons];

  return (
    <div className="w-full overflow-hidden py-5 relative">
      <div className="flex items-center gap-8 md:gap-12 animate-scroll">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon.src} // Now this will reference the actual imported image
            alt={icon.alt}
            className="w-24 h-24 md:w-28 md:h-28 object-contain flex-shrink-0"
          />
        ))}
      </div>
      
      {/* Animation styles */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default Logoscroll;