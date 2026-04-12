"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left: Image Container with Decorative Element */}
        <div className="relative flex-1 w-full flex justify-center lg:justify-start">
          {/* Decorative Blue Box behind image */}
          <div className="absolute top-10 -right-4 lg:right-4 w-full h-full bg-[#001f54] rounded-2xl -z-10 translate-x-4 translate-y-4 max-w-[400px]"></div>
          
          <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/me/me-2.png" // Using your existing photo path
              alt="Krantishikha Dhital"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="flex-[1.2] space-y-6">
          <h2 className="text-[#001f54] text-3xl md:text-5xl font-extrabold tracking-tight">
            Krantishikha Dhital
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base text-justify">
            <p className="font-medium text-lg text-gray-800">
              Krantishikha Dhital is a Member of the Federal Parliament of Nepal representing the 
              Rastriya Swatantra Party (RSP) through the Proportional Representation system.
            </p>
            
            <p>
              A central committee member of RSP, her legislative journey is rooted in advocating 
              for the Khas Arya cluster and structural reforms in mental health services. 
              With a background from Rolpa, her transition from media and journalism (Galaxy 4K, 
              AP1 TV) to the parliament reflects her commitment to giving a voice to the unheard.
            </p>

            <p className="text-gray-500">
              Alongside her political and organizational responsibilities, her role as a 
              Psychosocial Counselor reflects a deep commitment to emotional well-being, 
              mental health awareness...
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <Link 
              href="/about" 
              className="inline-block bg-[#001f54] text-white px-10 py-3 rounded-full font-bold hover:bg-blue-900 transition-all shadow-lg hover:shadow-blue-900/20 active:scale-95"
            >
              Know More
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;