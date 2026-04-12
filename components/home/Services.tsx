"use client";

import React from 'react';
import { Microphone2, Teacher, Edit2 } from 'iconsax-reactjs';

const Services = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch">
        
        {/* Left Column: Speech */}
        <div className="flex flex-col items-center justify-center p-8 text-center group cursor-pointer">
          <div className="text-[#001f54] mb-6 transition-transform duration-300 group-hover:scale-110">
            <Microphone2 size="64" variant="Bulk" />
          </div>
          <h3 className="text-[#001f54] text-2xl font-bold">Speech</h3>
        </div>

        {/* Center Column: Counseling (Highlighted) */}
        <div className="relative flex flex-col items-center justify-center p-10 text-center bg-[#001f54] rounded-xl shadow-2xl z-10">
          {/* Decorative Side Borders for Desktop */}
          <div className="hidden md:block absolute left-[-40px] top-1/4 bottom-1/4 w-[1px] bg-gray-300"></div>
          <div className="hidden md:block absolute right-[-40px] top-1/4 bottom-1/4 w-[1px] bg-gray-300"></div>
          
          <div className="text-white mb-4">
            <Teacher size="48" variant="Outline" />
          </div>
          <h3 className="text-white text-2xl font-bold mb-4">Counseling</h3>
          <p className="text-blue-100 text-sm leading-relaxed max-w-[250px]">
            Supporting emotional well-being, mental health awareness, and community resilience.
          </p>
        </div>

        {/* Right Column: Message */}
        <div className="flex flex-col items-center justify-center p-8 text-center group cursor-pointer">
          <div className="text-[#001f54] mb-6 transition-transform duration-300 group-hover:scale-110">
            <Edit2 size="64" variant="Bulk" />
          </div>
          <h3 className="text-[#001f54] text-2xl font-bold leading-tight">
            Message to <br className="hidden lg:block" /> Krantishikha
          </h3>
        </div>

      </div>
    </section>
  );
};

export default Services;