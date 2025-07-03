import React from "react";
import firstpr from "../assets/1prize.png";
import secondpr from "../assets/2prize.png";
import thirdpr from "../assets/3prize.png";

const Prize = () => {
  return (
    <div className="min-h-screen bg-[#0a001f] text-white py-24 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-900 rounded-full filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-900 rounded-full filter blur-[150px] opacity-10"></div>
        <div className="absolute top-1/3 right-1/5 w-64 h-64 bg-blue-900 rounded-full filter blur-[100px] opacity-10"></div>
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium title section */}
        <div className="text-center mb-20">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] via-[#8f00ff] to-[#ff00e6] animate-text">
              PRIZE DISTRIBUTION
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
            Compete for extraordinary rewards that will accelerate your professional journey
          </p>
        </div>

        {/* Elevated prize cards */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10 mb-24">
          {/* 2nd Prize (Silver) */}
          <div className="w-full lg:w-1/4 xl:w-1/3 max-w-md bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] backdrop-blur-lg rounded-2xl p-8 border border-[rgba(192,192,192,0.2)] shadow-lg transition-all duration-500 hover:border-[#c0c0c0] hover:shadow-[0_10px_40px_-5px_rgba(192,192,192,0.3)] hover:-translate-y-2">
            <div className="flex justify-center mb-8">
              <img src={secondpr} alt="Second Prize" className="w-28 h-28 object-contain" />
            </div>
            <div className="text-center">
              <span className="inline-block px-4 py-1 bg-[rgba(192,192,192,0.2)] text-[#c0c0c0] text-sm font-medium rounded-full mb-4 tracking-wider">
                1ST RUNNER-UP
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">₹50,000</h2>
              <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-[#c0c0c0] to-transparent mx-auto mb-6"></div>
              {/* <ul className="space-y-3 text-lg text-gray-300">
                <li className="flex items-center justify-center gap-2">
                  <span>🏆</span> Silver Medal
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span>💼</span> Internship Opportunities
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span>📜</span> Premium Certifications
                </li>
              </ul> */}
            </div>
          </div>

          {/* 1st Prize (Gold) - Center Highlight */}
          <div className="w-full lg:w-1/3 xl:w-2/5 max-w-xl bg-gradient-to-b from-[rgba(255,215,0,0.05)] to-[rgba(255,215,0,0.02)] backdrop-blur-lg rounded-2xl p-10 border border-[rgba(255,215,0,0.3)] shadow-xl transform lg:-translate-y-8 transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(255,215,0,0.4)] hover:-translate-y-10">
            <div className="absolute -top-4 -right-4 bg-[#ffd700] text-black text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow-md">
              TOP PRIZE
            </div>
            <div className="flex justify-center mb-10">
              <img src={firstpr} alt="First Prize" className="w-36 h-36 object-contain" />
            </div>
            <div className="text-center">
              <span className="inline-block px-4 py-1 bg-[rgba(255,215,0,0.2)] text-[#ffd700] text-sm font-medium rounded-full mb-6 tracking-wider">
                CHAMPION
              </span>
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white">₹1,00,000</h2>
              <div className="h-px w-4/5 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent mx-auto mb-8"></div>
              {/* <ul className="space-y-4 text-xl text-gray-300">
                <li className="flex items-center justify-center gap-3">
                  <span>🏆</span> Gold Medal & Trophy
                </li>
                <li className="flex items-center justify-center gap-3">
                  <span>💼</span> Direct Job Offers
                </li>
                <li className="flex items-center justify-center gap-3">
                  <span>🌐</span> Featured on Our Platform
                </li>
                <li className="flex items-center justify-center gap-3">
                  <span>🎓</span> Exclusive Mentorship
                </li>
              </ul> */}
            </div>
          </div>

          {/* 3rd Prize (Bronze) */}
          <div className="w-full lg:w-1/4 xl:w-1/3 max-w-md bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] backdrop-blur-lg rounded-2xl p-8 border border-[rgba(205,127,50,0.2)] shadow-lg transition-all duration-500 hover:border-[#cd7f32] hover:shadow-[0_10px_40px_-5px_rgba(205,127,50,0.3)] hover:-translate-y-2">
            <div className="flex justify-center mb-8">
              <img src={thirdpr} alt="Third Prize" className="w-28 h-28 object-contain" />
            </div>
            <div className="text-center">
              <span className="inline-block px-4 py-1 bg-[rgba(205,127,50,0.2)] text-[#cd7f32] text-sm font-medium rounded-full mb-4 tracking-wider">
                2ND RUNNER-UP
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">₹25,000</h2>
              <div className="h-px w-3/4 bg-gradient-to-r from-transparent via-[#cd7f32] to-transparent mx-auto mb-6"></div>
              {/* <ul className="space-y-3 text-lg text-gray-300">
                <li className="flex items-center justify-center gap-2">
                  <span>🏆</span> Bronze Medal
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span>📚</span> Course Vouchers
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span>🤝</span> Networking Opportunities
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        {/* Premium prize pool section */}
        <div className="bg-gradient-to-r from-[rgba(143,0,255,0.1)] to-[rgba(0,234,255,0.1)] backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-[rgba(255,255,255,0.2)] shadow-2xl mb-16 transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(143,0,255,0.3)]">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#8f00ff] via-[#00eaff] to-[#ff00e6]">
            TOTAL PRIZE POOL: ₹1,75,000
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: "🎓",
                title: "INTERNSHIP PROGRAM",
                content: "Total stipend of ₹1,00,000 for top performers with leading tech companies",
                highlight: "₹1,00,000"
              },
              {
                icon: "📜",
                title: "CERTIFICATION VOUCHERS",
                content: "Premium course certifications worth ₹16,000 for all participants",
                highlight: "₹16,000"
              },
              {
                icon: "💼",
                title: "JOB OPPORTUNITIES",
                content: "Direct hiring from our premium partner DATA PATTERNS",
                highlight: "DATA PATTERNS",
                highlightColor: "text-red-400"
              },
              {
                icon: "🚀",
                title: "CAREER BOOST",
                content: "Exclusive networking with industry leaders and mentors",
                highlight: "Networking"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-[rgba(0,0,0,0.3)] p-6 rounded-xl border border-[rgba(255,255,255,0.1)] hover:border-[rgba(143,0,255,0.3)] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-purple-300">{item.title}</h3>
                    <p className="text-lg text-gray-300">
                      {item.content.split(item.highlight)[0]}
                      <span className={`font-bold ${item.highlightColor || "text-white"}`}>
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
          <p className="text-2xl lg:text-3xl text-purple-200 mb-8 leading-relaxed max-w-4xl mx-auto">
            Elevate your career by competing in this prestigious event with unparalleled rewards
          </p>
         
          <p className="text-sm text-gray-400 mt-6">
            Limited seats available. Applications closing soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prize;