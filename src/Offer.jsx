import React from "react";

export default function WhatWeOffer() {
  const mainServices = [
    {
      title: "Custom Software Development",
      description: "Our Custom Software Development services are designed to bring your unique business ideas to life, aligning perfectly with your goals, and processes.",
      image: "/custom.jpg"
    },
    {
      title: "Legacy System Modernization",
      description: "Outdated systems can hold your business back. With our Legacy System Modernization solutions, we help you transition from inefficient structures to up-to-date standard designs.",
      image: "/legacy.jpg"
    },
    {
      title: "E-commerce & CMS Tools",
      description: "Our custom E-Commerce solutions, built on Shopify, WordPress, and other CMS tools, offer secure payment integrations to help your business grow.",
      image: "/ecommerce.jpg"
    },
    {
      title: "Web3 & Blockchain Solutions",
      description: "Develop next-gen digital solutions with Web3 and blockchain technologies that ensure transparency, security, and efficiency. We build scalable decentralized systems for modern business needs.",
      image: "/blockchain.jpg"
    },
    {
      title: "Digital Marketing & SEO/OEO/AEO",
      description: "Enhance your online visibility with targeted digital marketing strategies that combine SEO, GEO-targeting, and AEO techniques. We deliver customized campaigns to increase traffic and user engagement.",
      image: "https://www.forecom-solutions.com/hubfs/What-is-SEO-and-how-it-can-help-your-business.png"
    },
    {
      title: "Website Design & Development",
      description: "Your website is your digital face. We design stunning, user-friendly, and responsive Websites and Mobile Applications tailored to your needs.",
      image: "/design&dev.png"
    },
     {
      title: "AI Chat & Customer Support",
      description: "Transform customer experiences with AI-powered chat systems offering real-time support, instant and intelligent responses, and seamless communication.",
      image: "/chatAi.png"
    },
    {
      title: "UI/UX & Graphic Design",
      description: "UI/UX design is the key to digital success. We deliver engaging digital experiences with intuitive UI/UX and creative graphic design solutions that enhance usability, brand appeal, and user satisfaction.",
      image: "/uiux.jpg"
    },
    {
      title: "Cloud Development & Migration",
      description: "Legacy infrastructure limits growth. We provide cloud-native and migration solutions that modernize systems for better scalability, security, flexibility, and performance across platforms.",
      image: "/cloud.png"
    }
  ];

  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            WHAT WE OFFER
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Future-ready <span className="font-bold text-black">Digital Systems</span> tailored to empower industries through innovation, automation, and seamless <span className="font-bold text-black">user experiences</span> across <span className="font-bold text-black">Web</span> and <span className="font-bold text-black">Mobile</span> platforms.
          </p>

          {/* Divider Line */}
          <div className="mt-8 lg:mt-12 w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Featured Services Section */}
        <div className="mb-16 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12 lg:mb-16">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                {/* Service Image - Fixed size for all images */}
                <div className="w-full h-48 bg-gray-100 flex justify-center items-center p-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-300 h-300 object-contain"
                  />
                </div>
                
                {/* Text Content with Grey Background */}
                <div className="bg-gray-300 p-6 lg:p-8 h-64 lg:h-72 flex flex-col justify-center">
                  {/* Service Content */}
                  <h3 className="text-xl lg:text-2xl font-bold text-blue-900 mb-4 lg:mb-6 text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-base lg:text-lg text-center">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>

          

          {/* View All Button */}
          <div className="text-center">
            <button 
              className="relative bg-[#FFB81D] text-black font-bold px-8 lg:px-12 py-3 lg:py-4 text-lg hover:bg-[#ffa500] transition-colors duration-300"
              style={{
                clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                boxShadow: "3px 3px 5px rgba(0,0,0,0.3)",
              }}
            >
              VIEW ALL
            </button>

       
          </div>
               {/* V-Shape Divider Line */}
          <div className="flex justify-center mb-12 lg:mb-16 mt-5">
            <div className="relative w-32 h-1">
              <div className="absolute left-0 top-0 w-1/2 h-1 bg-blue-500 transform -skew-x-45"></div>
              <div className="absolute right-0 top-0 w-1/2 h-1 bg-blue-500 transform skew-x-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}