import firstpr from "../assets/1prize.png"
import secondpr from "../assets/2prize.png"
import thirdpr from "../assets/3prize.png"

const Prize = () => {
  return (
    <div
      className="min-h-screen py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden"
      style={{background:"rgba(18, 86, 175, 0.1)",}}
    >
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full filter blur-[120px] opacity-10"
          style={{ background: "#011446" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full filter blur-[150px] opacity-10"
          style={{ background: "#e48127" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/5 w-64 h-64 rounded-full filter blur-[100px] opacity-10"
          style={{ background: "#63cad2" }}
        ></div>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium title section */}
        <div className="text-center mb-20">

          <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span
              className="text-transparent bg-clip-text"
              style={{
                background: "linear-gradient(45deg, #011446, #e48127)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >

              PRIZE DISTRIBUTION
            </span>
          </h1>
          <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: "#937b60" }}>
            Compete for extraordinary rewards that will accelerate your professional journey
          </p>
        </div>

        {/* Elevated prize cards */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10 mb-24">
          {/* 2nd Prize (Silver) */}
          <div
            className="w-full lg:w-1/4 xl:w-1/3 max-w-md rounded-2xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-2"
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              border: "2px solid #63cad2",
              backdropFilter: "blur(15px)",
            }}
          >
            <div className="flex justify-center mb-8">
              <img src={secondpr || "/placeholder.svg"} alt="Second Prize" className="w-28 h-28 object-contain" />
            </div>
            <div className="text-center">
              <span
                className="inline-block px-4 py-1 text-sm font-medium rounded-full mb-4 tracking-wider"
                style={{ background: "rgba(99, 202, 210, 0.2)", color: "#011446" }}
              >
                1ST RUNNER-UP
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#011446" }}>
                ₹50,000
              </h2>
              <div
                className="h-px w-3/4 mx-auto mb-6"
                style={{ background: "linear-gradient(to right, transparent, #63cad2, transparent)" }}
              ></div>
            </div>
          </div>

          {/* 1st Prize (Gold) - Center Highlight */}
          <div
            className="w-full lg:w-1/3 xl:w-2/5 max-w-xl rounded-2xl p-10 shadow-xl transform lg:-translate-y-8 transition-all duration-500 hover:-translate-y-10"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              border: "3px solid #e48127",
              backdropFilter: "blur(15px)",
            }}
          >
            <div
              className="absolute -top-4 -right-4 text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow-md"
              style={{ background: "#e48127", color: "white" }}
            >
              TOP PRIZE
            </div>
            <div className="flex justify-center mb-10">
              <img src={firstpr || "/placeholder.svg"} alt="First Prize" className="w-36 h-36 object-contain" />
            </div>
            <div className="text-center">
              <span
                className="inline-block px-4 py-1 text-sm font-medium rounded-full mb-6 tracking-wider"
                style={{ background: "rgba(228, 129, 39, 0.2)", color: "#011446" }}
              >
                CHAMPION
              </span>
              <h2 className="text-5xl lg:text-6xl font-bold mb-8" style={{ color: "#011446" }}>
                ₹1,00,000
              </h2>
              <div
                className="h-px w-4/5 mx-auto mb-8"
                style={{ background: "linear-gradient(to right, transparent, #e48127, transparent)" }}
              ></div>
            </div>
          </div>

          {/* 3rd Prize (Bronze) */}
          <div
            className="w-full lg:w-1/4 xl:w-1/3 max-w-md rounded-2xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-2"
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              border: "2px solid #937b60",
              backdropFilter: "blur(15px)",
            }}
          >
            <div className="flex justify-center mb-8">
              <img src={thirdpr || "/placeholder.svg"} alt="Third Prize" className="w-28 h-28 object-contain" />
            </div>
            <div className="text-center">
              <span
                className="inline-block px-4 py-1 text-sm font-medium rounded-full mb-4 tracking-wider"
                style={{ background: "rgba(147, 123, 96, 0.2)", color: "#011446" }}
              >
                2ND RUNNER-UP
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#011446" }}>
                ₹25,000
              </h2>
              <div
                className="h-px w-3/4 mx-auto mb-6"
                style={{ background: "linear-gradient(to right, transparent, #937b60, transparent)" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Premium prize pool section */}
        <div
          className="rounded-3xl p-10 lg:p-12 shadow-2xl mb-16 transition-all duration-700"
          style={{ background: "rgba(255, 255, 255, 0.9)", border: "2px solid #011446", backdropFilter: "blur(15px)" }}
        >
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(45deg, #011446, #e48127)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            TOTAL PRIZE POOL: ₹1,75,000
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: "🎓",
                title: "INTERNSHIP PROGRAM",
                content: "Interships stipend worth ₹1,00,000",
                highlight: "₹1,00,000",
              },
              {
                icon: "📜",
                title: "CERTIFICATION VOUCHERS",
                content: "Free course Vouchers worth ₹16,000 for all from DADB",
                highlight: "₹16,000",
              },
              {
                icon: "💼",
                title: "JOB OPPORTUNITIES",
                content: "Exciting Job offers from DATA PATTERNS for Top performers",
                highlight: "DATA PATTERNS",
                highlightColor: "#e48127",
              },
              {
                icon: "🚀",
                title: "CAREER BOOST",
                content: "Exclusive networking with industry leaders and mentors",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl transition-colors duration-300"
                style={{ background: "rgba(1, 20, 70, 0.05)", border: "1px solid rgba(1, 20, 70, 0.1)" }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: "#011446" }}>
                      {item.title}
                    </h3>
                    <p className="text-lg" style={{ color: "#000000" }}>
                      {item.content.split(item.highlight)[0]}
                      <span className="font-bold" style={{ color: item.highlightColor || "#e48127" }}>
                        {item.highlight}
                      </span>
                      {item.content.split(item.highlight)[1]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive CTA */}
        <div className="text-center mt-20">
          <p className="text-2xl lg:text-3xl mb-8 leading-relaxed max-w-4xl mx-auto" style={{ color: "#937b60" }}>
           Boost your career by taking part in this exciting event that offers amazing rewards
          </p>

        </div>
      </div>
    </div>
  )
}

export default Prize
