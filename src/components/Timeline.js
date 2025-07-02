import React from "react";

const Timeline = () => {
  const events = [
    {
      date: "JULY 2, 2025",
      title: "REGISTRATION STARTS",
      position: "left",
    },
    {
      date: "JULY 20, 2025",
      title: "REGISTRATION ENDS",
      position: "right",
    },
    {
      date: "JULY 24, 2025",
      title: "ANNOUNCEMENT OF SHORTLISTED TEAMS",
      position: "left",
    },
    {
      date: "JULY 27, 2025",
      title: "PRE MENTORING SESSION FOR SHORTLISTED TEAMS",
      position: "right",
    },
    {
      date: "AUG 6, 2025",
      title: "HACKATHON BEGINS AT St.JOSEPH'S CAMPUS",
      position: "left",
    },
    {
      date: "AUG 6, 2025",
      title: "FIRST AND SECOND ROUND OF EVALUATION",
      position: "right",
    },
    {
      date: "AUG 7, 2025",
      title: "THIRD ROUND OF EVALUATION",
      position: "left",
    },
    {
      date: "AUG 7, 2025",
      title: "VALEDICTORY AND PRIZE DISTRIBUTION",
      position: "right",
    },
    {
      title: "THE END OF HACKATHON",
      position: "center",
    },
  ];

  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">
          HACKATHON TIMELINE
        </h2>
        
        {/* Timeline line - position changes on mobile */}
        <div className="absolute left-4 sm:left-1/2 w-1 h-[535px] sm:h-[820px] bg-purple-500 sm:transform sm:-translate-x-1/2"></div>
        
        {/* Timeline items */}
        <div className="relative space-y-8 pl-8 sm:pl-0">
          {events.map((event, index) => (
            <div
              key={index}
              className={`flex ${
                event.position === "left" 
                  ? "justify-start sm:justify-start" 
                  : event.position === "right" 
                    ? "justify-start sm:justify-end" 
                    : "justify-center"
              }`}
            >
              <div
                className={`w-full sm:w-5/12 p-4 sm:p-6 rounded-lg ${
                  event.position === "center" 
                    ? "bg-purple-600 text-center w-full sm:max-w-md mx-auto" 
                    : "bg-gray-800 border border-purple-400"
                } relative`}
              >
                {/* Dot on timeline - position changes on mobile */}
                {event.position !== "center" && (
                  <div
                    className={`absolute top-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-500 transform -translate-y-1/2 ${
                      event.position === "left" 
                        ? "-left-8 sm:-right-6 sm:left-auto" 
                        : "-left-8 sm:-left-6"
                    }`}
                  ></div>
                )}
                
                {event.date && (
                  <p className="text-sm sm:text-base text-purple-300 font-semibold mb-1 sm:mb-2">
                    {event.date}
                  </p>
                )}
                <h3 className={`text-sm sm:text-xl font-bold ${
                  event.position === "center" ? "text-white" : "text-white"
                }`}>
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;