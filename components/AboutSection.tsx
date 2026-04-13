"use client";

import React from 'react';
import Image from 'next/image';
import { portfolioData } from '@/lib/portfolio-data';
import { Book, Link as LinkIcon, Edit, UserSquare } from 'iconsax-reactjs';

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content: Text Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-[#001f54] text-3xl md:text-4xl font-extrabold tracking-tight">
            Krantishikha Dhital
          </h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base text-justify">
            <p className="font-medium text-[#001f54]/90 italic">
              "Dedicated to addressing social concerns, formulating policy, and exemplifying honesty in leadership."
            </p>
            
            <p>
              {portfolioData.careerSummary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <h4 className="font-bold text-[#001f54] text-sm md:text-base mb-2">Political Leadership</h4>
                <p className="text-xs md:text-sm text-gray-600">
                  As a Central Committee Member of the Rastriya Swatantra Party, Krantishikha plays a vital role in defining the party's vision, ideology, and manifesto for 2082.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <h4 className="font-bold text-[#001f54] text-sm md:text-base mb-2">Public Service</h4>
                <p className="text-xs md:text-sm text-gray-600">
                   Project Head for the Shramadhan App at the Ministry of Work and Employment, focusing on labor policy and employment promotion.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <h4 className="font-bold text-[#001f54] text-sm md:text-base mb-2">Entrepreneurship</h4>
                <p className="text-xs md:text-sm text-gray-600">
                  Founder of Calm Convo Mental Health Counselling Centre and Partner at Khadi Personal Care.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <h4 className="font-bold text-[#001f54] text-sm md:text-base mb-2">Media & Communication</h4>
                <p className="text-xs md:text-sm text-gray-600">
                  Former Prime Time News Presenter at Galaxy Television with a strong background in journalism and public engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content: Overlapping Image Section */}
        <div className="flex-1 relative w-full max-w-[500px] h-[400px] md:h-[500px]">
          
          {/* Main Larger Image (me-2.png) */}
          <div className="absolute right-0 top-0 w-[85%] h-[90%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/me/me-2.png"
              alt="Krantishikha Dhital speaking"
              fill
              className="object-cover"
            />
          </div>

          {/* Smaller Overlapping Image (me-1.png) */}
          <div className="absolute left-0 bottom-4 w-[45%] h-[60%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10 transition-transform duration-500 hover:scale-105">
            <Image
              src="/me/me-1.png"
              alt="Portrait of Krantishikha Dhital"
              fill
              className="object-cover"
            />
          </div>

          {/* Optional: Decorative accent (like the blue shape in original image) */}
          <div className="absolute -z-10 -right-4 -bottom-4 w-24 h-24 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;