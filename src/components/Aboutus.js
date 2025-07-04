import React from 'react'

const Aboutus = () => {
  return (
    <div>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-center mb-2 mt-8 md:mt-12 animate-pulse">
          About us
        </h1>

        <div className="bg-white/95 backdrop-blur-sm mx-auto my-10 md:my-20 p-6 md:p-8 rounded-lg border-2 border-blue-200 max-w-xl sm:max-w-xl md:max-w-3xl lg:max-w-5xl shadow-lg">
          <p className="font-mono text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-loose md:leading-loose text-justify text-gray-800 font-medium">
            Welcome to SPRINTATHON'25, a National-Level Innovation Hackathon designed to bring together the brightest
            minds from across the country to innovate, create, and solve real-world challenges. This event is a dynamic
            platform curated by the Department of ECE at St. Joseph's College of Engineering, empowering young
            innovators, tech enthusiasts, and problem-solvers to build impactful solutions using emerging technologies.
            Whether you're passionate about AI, IoT, Sustainability, or Cybersecurity, SPRINTATHON'25 provides the
            perfect platform to collaborate, compete, and showcase your technical prowess. With expert mentorship,
            industry networking, and an impressive prize pool of ₹1.75 Lakh, along with job offers, paid internships,
            and certification vouchers, this event promises to be an unforgettable learning experience. Are you ready to
            push boundaries and create the future? Join us at SPRINTATHON'25 and turn your ideas into reality!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus