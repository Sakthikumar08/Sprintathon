"use client"

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
  ]

  return (
    <div
      className="relative py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: "rgba(18, 86, 175, 0.1)", backdropFilter: "blur(0px)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#011446" }}>
            HACKATHON TIMELINE
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ background: "linear-gradient(45deg, #e48127, #63cad2)" }}></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
            style={{
              background: "linear-gradient(to bottom, #63cad2, #011446, #e48127, #011446, #63cad2)",
              boxShadow: "0 0 10px rgba(99, 202, 210, 0.3)",
            }}
          ></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className="relative flex items-center">
                {event.position === "center" ? (
                  // Center Final Event
                  <div className="w-full flex justify-center">
                    <div
                      className="relative px-8 py-6 rounded-xl text-center max-w-md transform transition-all duration-300 hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg, #011446, #e48127)",
                        boxShadow: "0 10px 30px rgba(1, 20, 70, 0.3)",
                      }}
                    >
                      <h3 className="text-xl font-bold text-white">{event.title}</h3>
                      {/* Center Dot */}
                      <div
                        className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full border-4 border-white"
                        style={{
                          background: "#e48127",
                          boxShadow: "0 0 15px rgba(228, 129, 39, 0.6)",
                        }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  // Left and Right Events
                  <div className={`w-full flex ${event.position === "left" ? "justify-start" : "justify-end"}`}>
                    <div className="w-5/12 relative">
                      <div
                        className={`relative p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                          event.position === "left" ? "mr-8" : "ml-8"
                        }`}
                        style={{
                          background: "rgba(255, 255, 255, 0.95)",
                          border: "2px solid #63cad2",
                          boxShadow: "0 8px 25px rgba(1, 20, 70, 0.1)",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        {/* Date Badge */}
                        <div
                          className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-3"
                          style={{
                            background: "linear-gradient(45deg, #937b60, #e48127)",
                            color: "white",
                          }}
                        >
                          {event.date}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold leading-tight" style={{ color: "#011446" }}>
                          {event.title}
                        </h3>

                        {/* Arrow pointing to timeline */}
                        <div
                          className={`absolute top-1/2 transform -translate-y-1/2 ${
                            event.position === "left" ? "-right-4" : "-left-4"
                          }`}
                        >
                          <div
                            className="w-0 h-0"
                            style={{
                              borderTop: "8px solid transparent",
                              borderBottom: "8px solid transparent",
                              [event.position === "left" ? "borderLeft" : "borderRight"]: "8px solid #63cad2",
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Timeline Dot */}
                      <div
                        className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-3 border-white ${
                          event.position === "left" ? "-right-2" : "-left-2"
                        }`}
                        style={{
                          background: "#e48127",
                          boxShadow: "0 0 10px rgba(228, 129, 39, 0.5)",
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .border-3 {
          border-width: 3px;
        }

        /* Smooth animations */
        @media (max-width: 768px) {
          .w-5\\/12 {
            width: 100% !important;
          }
          
          .mr-8, .ml-8 {
            margin: 0 !important;
          }
          
          .-right-2, .-left-2 {
            left: -8px !important;
            right: auto !important;
          }
          
          .-right-4, .-left-4 {
            left: -16px !important;
            right: auto !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Timeline
