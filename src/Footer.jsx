import React from 'react';
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const Progmize = () => {
    return (
        <div className="h-500 bg-blue-900 p-2 sm:p-4 font-sans">
            <div className="flex flex-col lg:flex-row gap-4">
             
                <div className='bg-white rounded-lg p-3 sm:p-4 w-full lg:w-3/4'>
                    
                   
                    <div className="flex items-center mb-4 pb-3 border-b-4 border-blue-800">
                        <div className="flex items-center gap-0 sm:gap-1">
                            <img
                                src="/P.png"
                                alt="Logo"
                                className="w-[50px] sm:w-[60px] md:w-[80px] h-auto object-contain"
                            />
                            <div className="sm:ml-1">
                                <span className='font-bold text-blue-800 text-lg sm:text-xl md:text-2xl block leading-none'>rogmize</span>
                                <p className='font-bold text-blue-600 text-xs block leading-none'>Software Solution</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        {/* First Row - 3 Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">

                            {/* Services Card */}
                            <div className="bg-white rounded-lg shadow p-3">
                                <h2 className="text-sm sm:text-base font-bold text-gray-800 mb-2">Services</h2>
                                <ul className="space-y-0.5 text-gray-700 text-xs text-left">
                                    <li className="text-left">- UI / UK</li>
                                    <li className="text-left">- Graphic Design</li>
                                    <li className="text-left">- Website Design & Development</li>
                                    <li className="text-left">- Digital Marketing & SEO/CEO/AEO</li>
                                    <li className="text-left">- Custom Software Development</li>
                                    <li className="text-left">- E-Commerce & CMS Tools</li>
                                    <li className="text-left">- AI Chatting & Customer Support</li>
                                    <li className="text-left">- Legacy System & Modernization</li>
                                    <li className="text-left">- Web & Dockerlab Solutions</li>
                                    <li className="text-left">- Cloud Development & Migration</li>
                                </ul>
                            </div>

                            {/* Industries Card */}
                            <div className="bg-white rounded-lg shadow p-3">
                                <h2 className="text-sm sm:text-base font-bold text-gray-800 mb-2">Industries</h2>
                                <ul className="space-y-0.5 text-gray-700 text-xs text-left">
                                    <li className="text-left">- Shipping & Logistics</li>
                                    <li className="text-left">- Real Estate</li>
                                    <li className="text-left">- E-Commerce</li>
                                    <li className="text-left">- Travel & Hospitality</li>
                                    <li className="text-left">- AI & Blockchain</li>
                                    <li className="text-left">- Social Network</li>
                                </ul>
                            </div>

                            {/* Company Card */}
                            <div className="bg-white rounded-lg shadow p-3">
                                <h2 className="text-sm sm:text-base font-bold text-gray-800 mb-2">Company</h2>
                                <ul className="space-y-0.5 text-gray-700 text-xs text-left">
                                    <li className="text-left">- Abon/Progmize</li>
                                    <li className="text-left">- Our Story</li>
                                    <li className="text-left">- Who We Work With</li>
                                    <li className="text-left">- What We Do</li>
                                    <li className="text-left">- Why Choose Progmize</li>
                                    <li className="text-left">- Our Mission</li>
                                    <li className="text-left">- Our Vision</li>
                                </ul>
                            </div>
                        </div>

                        {/* Second Row - 3 Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                            {/* Rise with Progmize Card */}
                            <div className="bg-white rounded-lg shadow p-3">
                                <h2 className="text-sm sm:text-base font-bold text-gray-800 mb-2">Rise with Progmize</h2>
                                <div className="space-y-0.5 text-gray-700 text-xs text-left">
                                    <div className="text-left">Careers</div>
                                    <div className="text-left">Get Project Estimation</div>
                                    <div className="text-left">Book Appointment</div>
                                </div>
                            </div>

                            {/* Insights Card */}
                            <div className="bg-white rounded-lg shadow p-3">
                                <h2 className="text-sm sm:text-base font-bold text-gray-800 mb-2">Insights</h2>
                                <div className="space-y-0.5 text-gray-700 text-xs text-left">
                                    <div className="text-left">Insights Home</div>
                                    <div className="text-left">Software Development</div>
                                    <div className="text-left">Industry Expertise</div>
                                    <div className="text-left">Innovation</div>
                                    <div className="text-left">Tech</div>
                                    <div className="text-left">Talent & Culture</div>
                                </div>
                            </div>

                            {/* Solutions Card */}
                            <div className="bg-white rounded-lg shadow p-3">
                                <h2 className="text-sm sm:text-base font-bold text-gray-800 mb-2">Solutions</h2>
                                <div className="space-y-0.5 text-gray-700 text-xs text-left">
                                    <div className="text-left">Design Management</div>
                                    <div className="text-left">Shipping Management</div>
                                    <div className="text-left">Barbar Appointment Sys</div>
                                    <div className="text-left">1000+ Solutions catalogue</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

               
                <div className="w-full lg:w-1/4 flex flex-col mt-4 lg:mt-24">
                 
                    <div className="flex justify-center space-x-4 mb-4">
                        <FaWhatsapp className="text-yellow-400 text-lg sm:text-xl" />
                        <FaEnvelope className="text-yellow-400 text-lg sm:text-xl" />
                        <FaLocationArrow className="text-yellow-400 text-lg sm:text-xl" />
                    </div>
                    
                    
                    <div className="border-t border-white mb-4"></div>
                    
                    <div className="rounded-lg shadow-lg p-3 sm:p-4 h-fit">
                        <h2 className="text-base sm:text-lg text-white font-bold mb-3">Contact us</h2>
                        <div className="space-y-2 text-white text-xs sm:text-sm">
                            <div className="flex items-center">
                                <span className="text-white mr-2"><FaWhatsapp className="text-sm sm:text-base"/></span>
                                075120840143
                            </div>
                            <div className="flex items-center">
                                <span className="text-white mr-2"><FaEnvelope className="text-sm sm:text-base"/></span>
                                info@progmize.com
                            </div>
                            <div className="flex items-center">
                                <span className="text-white mr-2"><FaLocationArrow className="text-sm sm:text-base"/></span>
                                Dubai Internet City
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="mt-6 pt-4 border-t border-white">
                <div className="text-center text-white text-xs">
                    <p>© Progmize (NYIT) Institute of Higher Resources</p>
                </div>
            </div>
        </div>
    );
};

export default Progmize;