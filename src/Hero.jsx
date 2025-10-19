import React from "react";

export default function Hero() {
  return (
    <section
      className="relative text-white overflow-hidden bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/bg.jpg')",
        height: "auto",
        minHeight: "650px",
        marginTop: "8%",
      }}
    >
    
      <div className="absolute inset-0 bg-gradient-to-b from-[#051b39]/90 to-[#051b39]/95"></div>

  
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 font-[Roboto Mono] flex flex-col justify-center py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 relative">
     
          <div className="text-left flex flex-col justify-center z-30 mt-3 lg:mt-0">
        
            <div className="space-y-2 mb-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1]">
                Powerful
              </h2>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1]">
                Programming,
              </h2>
              <h2 className="pl-4 sm:pl-8 lg:pl-12 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.2]">
                Catalyze
              </h2>
              <h2 className="pl-4 sm:pl-8 lg:pl-12 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.2]">
                Customization
              </h2>
            </div>

            {/* Button */}
           <div className="mb-8 flex justify-start sm:justify-start">
              <button
                className="relative bg-[#FFB81D] text-black font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg hover:bg-[#ffa500] transition-colors duration-300 rounded-lg"
                style={{
                  transform: "skew(-20deg)",
                  boxShadow: "3px 3px 5px rgba(0,0,0,0.3)",
                }}
              >
                <span
                  className="inline-block"
                  style={{ transform: "skew(20deg)" }}
                >
                  BOOK AN APPOINTMENT – IT'S FREE!
                </span>
              </button>
            </div>

           
            <div className="flex flex-col lg:flex-row items-start gap-6 relative">
            
              <div className="relative flex-1 z-30">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-3 lg:mb-2 leading-tight lg:whitespace-nowrap">
                  Auto Shipping - No. 1 ERP Solutions
                </h3>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 lg:mb-4 text-white/90 max-w-lg lg:transform lg:scale-x-110 lg:origin-left">
                  Boost your car shipping business revenue with our advanced
                  Auto Shipping Solutions, built for efficiency and scalability.
                  We deliver powerful features like real-time tracking and
                  automated workflows to streamline operations and maximize
                  profitability.
                </p>

              
                <div className="hidden lg:block absolute left-0 top-[calc(100%+8px)] h-[8px] bg-white w-[169%]"></div>
                <div className="hidden lg:block absolute left-[calc(169%-8px)] top-[calc(100%+8px-95px)] w-[8px] h-[100px] bg-white"></div>
                
                {/* Mobile L shape - same as desktop but smaller */}
                <div className="block lg:hidden absolute left-0 top-[calc(100%+4px)] h-[3px] bg-white w-[100%]"></div>
                <div className="block lg:hidden absolute left-[calc(100%-3px)] top-[calc(100%+4px-40px)] w-[3px] h-[40px] bg-white"></div>
              </div>

              {/* Software Logo - hidden on mobile */}
              <img
                src="/software.png"
                alt="Software"
                className="hidden lg:block w-[280px] object-contain mt-[-60px] mx-auto lg:ml-16 lg:opacity-100 lg:z-auto"
              />
            </div>
          </div>

          {/* RIGHT SIDE — P Logo - hidden on mobile */}
          <div className="hidden lg:flex justify-center lg:justify-end items-start lg:mt-[-300px] relative">
            <img
              src="/P.png"
              alt="P Logo"
              className="w-[500px] lg:opacity-75 lg:z-auto"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 sm:gap-5 mt-8 z-30">
          {[1, 2, 3, 4, 5].map((dot) => (
            <div
              key={dot}
              className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full ${
                dot === 1 ? "bg-[#FFB81D]" : "bg-white/50"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* WhatsApp & Twitter Icons */}
      <div className="absolute bottom-4 left-4 flex flex-col items-center space-y-3 z-30">
        <div className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
          />
        </div>
        <div className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
          <img
            src="/twitter.png"
            alt="Twitter"
            className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
          />
        </div>
      </div>

      {/* Top-right WhatsApp */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
          <img
            src="/whatsapp.png"
            className="w-6 h-6 sm:w-8 sm:h-8"
            alt="WhatsApp"
          />
        </div>
      </div>
    </section>
  );
}