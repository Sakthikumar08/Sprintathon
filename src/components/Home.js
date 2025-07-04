
import "./HomePage.css"

import Timer from "./Timer"
import clglogo1 from "../assets/clglogo1.png"
import clglogo2 from "../assets/clglogo22.png"
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
        
        
      </div>
    </section>
  )
}

export default Home
