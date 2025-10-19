import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope,  FaBars, FaTimes } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="absolute top-0 left-0 w-full z-50 text-white font-[Roboto Mono]"
      style={{
        background: `linear-gradient(20deg, rgba(3,17,43,0.89) 0%, rgba(1,11,27,0.89) 100%), url('/bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "inset 0 0 0 10px rgba(5,27,57,0.8)",
      }}
    >
      <nav className="flex justify-between items-center px-6 md:px-10 py-4">
       
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[150px] md:w-[200px] h-auto object-contain"
          />
        </div>

        {/* (Desktop) */}
        <div className="flex flex-col items-end w-full max-w-[1400px]">
       
          <div className="hidden md:flex justify-between items-center w-full text-sm font-medium border-b border-white/20 pb-2">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="bg-white/15 rounded-full p-2">
                  <FaWhatsapp className="text-white text-sm" />
                </span>
                 <div className="flex items-center gap-2">
                <span className="bg-white/15 rounded-full p-2">
                  <FaLocationArrow className="text-white text-sm" />
                </span>
              
              </div>
                +971 50 894 0143
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-white/15 rounded-full p-2">
                  <FaEnvelope className="text-white text-sm" />
                </span>
                info@progmize.com
              </div>
             
            </div>

            
            <div className="flex items-center gap-3">
              <button className="bg-[#f7a100] text-black font-semibold px-3 py-1 rounded-md hover:bg-[#ffb400] transition">
                Eng
              </button>
              <button className="border border-white/40 px-3 py-1 rounded-md hover:bg-[#f7a100] hover:text-black transition">
                عربى
              </button>
            </div>
          </div>

          
          <div className="hidden md:flex justify-between items-center w-full mt-2">
            <ul className="flex gap-20 text-2xl font-semibold tracking-wide">
              <li className="hover:text-[#f7a100] cursor-pointer transition-colors duration-300">
                Services
              </li>
              <li className="hover:text-[#f7a100] cursor-pointer transition-colors duration-300">
                Industries
              </li>
              <li className="hover:text-[#f7a100] cursor-pointer transition-colors duration-300">
                About Us
              </li>
              <li className="hover:text-[#f7a100] cursor-pointer transition-colors duration-300">
                Careers
              </li>
            </ul>

             <button
              className="relative text-black font-bold px-10 py-3 shadow-md transition duration-300"
              style={{
                background: "#FFB81D",
                borderRadius: "6px",
                boxShadow: "2px 2px 1px rgba(0,0,0,0.25)",
                transform: "skewX(-10deg)",
              }}
            >
              <span className="block transform skew-x-[10deg]">GET QUOTE</span>
            </button>
          </div>
        </div>

        {/*  Mobile Menu Toggle */}
        <div className="md:hidden ml-auto z-50">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#02132c]/95 backdrop-blur-md py-6 border-t border-white/20 space-y-6 animate-fadeIn">
          
          <div className="flex flex-col items-center gap-3 text-sm border-b border-white/20 pb-3 w-[90%] text-center">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-2">
                <span className="bg-white/15 rounded-full p-2">
                  <FaWhatsapp className="text-white text-sm" />
                </span>
                <div className="flex items-center justify-center gap-2">
                <span className="bg-white/15 rounded-full p-2">
                  <FaLocationArrow className="text-white text-sm" />
                </span>
              
              </div>
                +971 50 894 0143
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="bg-white/15 rounded-full p-2">
                  <FaEnvelope className="text-white text-sm" />
                </span>
                info@progmize.com
              </div>
              
            </div>

            
            <div className="flex items-center justify-center gap-3 mt-2">
              <button className="bg-[#f7a100] text-black font-semibold px-3 py-1 rounded-md hover:bg-[#ffb400] transition text-xs">
                Eng
              </button>
              <button className="border border-white/40 px-3 py-1 rounded-md hover:bg-[#f7a100] hover:text-black transition text-xs">
                عربى
              </button>
            </div>
          </div>

        
          <ul className="flex flex-col items-center gap-5 text-lg font-semibold">
            <li className="hover:text-[#f7a100] cursor-pointer">Services</li>
            <li className="hover:text-[#f7a100] cursor-pointer">Industries</li>
            <li className="hover:text-[#f7a100] cursor-pointer">About Us</li>
            <li className="hover:text-[#f7a100] cursor-pointer">Careers</li>
          </ul>

           
          <button
            className="relative text-black font-bold px-10 py-3 shadow-md transition duration-300"
            style={{
              background: "#FFB81D",
              borderRadius: "6px",
              boxShadow: "2px 2px 1px rgba(0,0,0,0.25)",
              transform: "skewX(-10deg)",
            }}
          >
            <span className="block transform skew-x-[10deg]">GET QUOTE</span>
          </button>
        </div>
      )}
    </header>
  );
}
