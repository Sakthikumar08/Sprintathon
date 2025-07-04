import React from 'react'

const Aboutus = () => {
  return (
    <div>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center py-5 animate-pulse">
          About us
        </h1>

        <div
          className="mx-auto my-10 md:my-20 p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl max-w-2xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl"
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            border: "2px solid #63cad2",
            backdropFilter: "blur(15px)",
            boxShadow: "0 12px 30px rgba(1, 20, 70, 0.15)",
          }}
        >
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-justify"
            style={{
              color: "#011446",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "500",
              lineHeight: "1.6",
            }}
          >
            Welcome to <strong style={{ color: "#011446", fontWeight: "600" }}>SPRINTATHON'25</strong>, a National-Level Innovation Hackathon designed to bring together the brightest
            minds from across the country to innovate, create, and solve real-world challenges. This event is a dynamic
            platform curated by the Department of ECE at St. Joseph's College of Engineering, empowering young
            innovators, tech enthusiasts, and problem-solvers to build impactful solutions using emerging technologies.
            Whether you're passionate about AI, IoT, Sustainability, or Cybersecurity, SPRINTATHON'25 provides the
            perfect platform to collaborate, compete, and showcase your technical prowess. With expert mentorship,
            industry networking, and an impressive prize pool of{" "}
            <strong
              style={{
                fontWeight: "700",
                color: "#e48127",
                background: "rgba(228, 129, 39, 0.1)",
                padding: "2px 6px",
                borderRadius: "4px",
                border: "1px solid rgba(228, 129, 39, 0.3)",
              }}
            >
              ₹1.75 Lakh
            </strong>
            , along with job offers, paid internships, and certification vouchers, this event promises to be an
            unforgettable learning experience. Are you ready to push boundaries and create the future? Join us at{" "}
            <strong style={{ color: "#011446", fontWeight: "600" }}>SPRINTATHON'25</strong> and turn your ideas into
            reality!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus