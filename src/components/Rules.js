import React from "react";

const Rules = () => {
  const rules = [
    "Team Size: All participants must be from the same college. The maximum team size is 4, and the minimum team size is 3. Also, the team must contain at least 1 girl.",
    "Pre-Mentoring Session: Participants will be connected with top industry mentors for a pre-mentoring session. Attendance in the online sessions as per the assigned schedule is mandatory.",
    "Components and Tools: Participants must bring their own components and tools required for their project. The organizers will not provide any materials.",
    "Dress Code: Students are requested to dress in professional attire for the hackathon.",
    "Food and Accommodation: Food, snacks, and accommodation will be provided free of cost for the shortlisted participants.",
    "Event Guidelines: Participants are required to follow all instructions and guidance provided by the event organizers and staff members to ensure a smooth and successful hackathon.",
    "Transportation for Outstation Participants: Participants from outside Chennai are responsible for arranging their own transportation, accommodation, and any additional requirements."
  ];

  return (
    <div className="min-h-screen w-full  py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mb-8 sm:mb-12">
        RULES & REGULATIONS
      </h1>

      {/* Rules List */}
      <div className="w-full max-w-4xl space-y-6 sm:space-y-8">
        {rules.map((rule, index) => (
          <div 
            key={index} 
            className="relative w-full group transition-all duration-300"
          >
            {/* Corners */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-purple-500 transition-all duration-300 group-hover:w-6 group-hover:h-6" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-purple-500 transition-all duration-300 group-hover:w-6 group-hover:h-6" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-purple-500 transition-all duration-300 group-hover:w-6 group-hover:h-6" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-purple-500 transition-all duration-300 group-hover:w-6 group-hover:h-6" />

            {/* Rule Card */}
            <div className="flex items-start gap-4 p-5 sm:p-6 bg-[rgba(35,18,39,0.2)] border-2 border-[rgba(255,255,255,0.2)] backdrop-blur-sm rounded transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_20px_rgba(255,0,255,0.8)]">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400">
                #{index + 1}
              </span>
              <p className="flex-1 text-white text-sm sm:text-base md:text-xl">
                {rule}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;