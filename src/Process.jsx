import React from 'react';

const ProcessCircle = () => {
  const processSteps = [
    {
      number: "01",
      title: "Explore Services",
      description: "Visit our Services page to discover what fits your needs"
    },
    {
      number: "02",
      title: "Submit Your Request",
      description: "Choose a service and share your requirements or book an appointment."
    },
    {
      number: "03",
      title: "Receive Proposal",
      description: "Our team will get back to you with a tailored proposal and competitive quotation."
    },
    {
      number: "04",
      title: "Confirm & Start Project",
      description: "Agree on terms and initiate the project with our expert team."
    },
    {
      number: "05",
      title: "Get Your Solution",
      description: "Receive a market-ready, high-quality solution provided on time and within scope."
    }
  ];

  
  const calculatePosition = (index, radius = 200) => {
    const angle = (index * 72) * (Math.PI / 180); 
    const x = radius * Math.sin(angle);
    const y = -radius * Math.cos(angle);
    return { x, y };
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 md:p-8">
      
      {/* Mobile View - Vertical List */}
      <div className="block md:hidden w-full max-w-md space-y-6">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="flex items-start p-6 bg-white rounded-xl shadow-lg border border-gray-100"
          >
            <div className="flex-shrink-0 w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg mr-4">
              {step.number}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Circular Layout */}
      <div className="hidden md:block relative">
        <div className="relative w-[600px] h-[600px] rounded-full border-2 border-gray-200">
          
          {/* Center Logo */}
          <div className="absolute top-1/2 left-1/2 w-20 h-20  rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg flex items-center justify-center">
            <img
              src="/P.png"
              alt="Logo"
              className="w-50 h-50 object-contain"
            />
          </div>
          
          {/* Connecting Lines */}
          {processSteps.map((_, index) => (
            <div
              key={`line-${index}`}
              className="absolute top-1/2 left-1/2 w-[250px] h-0.5 bg-gray-300 transform origin-left"
              style={{
                transform: `rotate(${index * 72}deg)`
              }}
            ></div>
          ))}
          
      
          {processSteps.map((step, index) => {
            const { x, y } = calculatePosition(index, 250);
            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 w-56 p-6 bg-white rounded-xl shadow-lg border border-gray-100 transform -translate-x-1/2 -translate-y-1/2 hover:shadow-xl hover:scale-105 transition-all duration-300 z-20"
                style={{
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600 mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}

        
          <div className="absolute inset-8 rounded-full  opacity-30"></div>
        </div>

    
        <div className="absolute inset-0">
          {processSteps.map((step, index) => {
            const { x, y } = calculatePosition(index, 180);
            return (
              <div
                key={`number-${index}`}
                className="absolute top-1/2 left-1/2 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg transform -translate-x-1/2 -translate-y-1/2 shadow-lg z-30"
                style={{
                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`
                }}
              >
                {step.number}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessCircle;