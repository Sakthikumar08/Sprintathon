import "./HomePage.css"
import Timeline from "./Timeline"
import Timer from "./Timer"
import clglogo1 from "../assets/clglogo1.png"
import clglogo2 from "../assets/clglogo2.png"
import logo from "../assets/SprtLogo.png"

function Home() {
  return (
    <section id="home">
      <div className="home">
        <div className="content">
          <div className="college-header">
            <div className="flex justify-center items-center py-1 px-6">
              <div className="flex items-center justify-between w-full max-w-screen-xl text-white">
                {/* Left Logo */}
                <div className="w-1/5 flex justify-start">
                  <img src={clglogo1 || "/placeholder.svg"} alt="College Logo 1" className="h-28 w-auto" />
                </div>

                {/* Center Text */}
                <div className="text-center w-4/5">
                  <h2 className="text-2xl md:text-3xl font-bold uppercase text-black">
                    St. Joseph's College of Engineering
                  </h2>
                  <h3 className="text-lg md:text-xl text-[#011446] font-semibold mt-2">(An Autonomous Institution)</h3>
                  <p className="text-base md:text-lg mt-1 text-black font-bold">St. Joseph's Group of Institutions</p>
                  <p className="text-base md:text-lg text-black">OMR, Chennai – 119.</p>
                </div>

                {/* Right Logo */}
                <div className="w-1/5 flex justify-end">
                  <img src={clglogo2 || "/placeholder.svg"} alt="College Logo 2" className="h-28 w-auto" />
                </div>
              </div>
            </div>
          </div>

          <h2 className="subtitle-dep">Department of Electronics and Communication Engineering</h2>

          <div className="title">
            <img src={logo || "/placeholder.svg"} alt="sprintathon" />
          </div>

          <div className="tagline">
            <h3>A SPRINT TO REVOLUTION</h3>
          </div>

          <p className="subtitle">A 24 HOUR NATIONAL LEVEL INNOVATION HACKATHON</p>

          <a href="https://forms.gle/bF1p6XJcMhRRZ9F46">
            <button className="btn">REGISTER NOW</button>
          </a>
          <Timer />
        </div>
        <Timeline />
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-center mb-2 mt-8 md:mt-12 animate-pulse">
            About us
          </h1>

          <div className="bg-purple-900/40 mx-auto my-10 md:my-20 p-6 md:p-8 rounded-lg border border-purple-900 max-w-xl sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
            <p className="font-mono text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed sm:leading-loose md:leading-loose text-justify">
              Welcome to SPRINTATHON'25, a National-Level Innovation Hackathon designed to bring together the brightest minds from
              across the country to innovate, create, and solve real-world challenges. This event is a dynamic platform curated by the 
              Department of ECE at St. Joseph's College of Engineering, empowering young innovators, tech enthusiasts, and problem-solvers 
              to build impactful solutions using emerging technologies. Whether
              you're passionate about AI, IoT, Sustainability, or Cybersecurity, SPRINTATHON'25
              provides the perfect platform to collaborate, compete, and showcase your technical prowess. With expert
              mentorship, industry networking, and an impressive prize pool of ₹1.75 Lakh, along with job offers, paid internships, and certification vouchers, this event promises to be an
              unforgettable learning experience. Are you ready to push boundaries and create the future? Join us at
              SPRINTATHON'25 and turn your ideas into reality!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
