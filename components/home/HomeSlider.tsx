"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/me/hero.png",
    title: "Krantishikha Dhital",
    subtitle: "Psychosocial Counselor | Senior Communications Professional | Political Leader",
    description: "Dedicated to addressing social concerns, formulating national policy, and providing trauma-informed psychosocial support for a resilient society.",
  }
];

export default function HomeSlider() {
  return (
    <section className="relative w-full h-[380px] md:h-[600px] lg:h-[800px] bg-white overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/linen.png')" }}>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          nextEl: ".home-next",
          prevEl: ".home-prev",
        }}
        pagination={{
          clickable: true,
          el: ".home-pagination",
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center overflow-hidden">
              {/* Desktop Only: Large Navy Circle (Top Right Corner) */}
              <div className="hidden lg:block absolute top-[-150px] right-[-150px] w-[800px] h-[800px] bg-[#001f54] rounded-full -z-20"></div>
              
              {/* Content Container */}
              <div className="relative max-w-7xl mx-auto w-full px-4 md:px-12 lg:px-24 flex flex-row items-center justify-between gap-4 z-20 h-full">
                
                {/* Left Side: Text Area - Compact on mobile */}
                <div className="flex-[1.6] lg:flex-[1.4] text-left z-30 pt-4 md:pt-0">
                  <h1 className="text-[#001f54] text-2xl md:text-5xl lg:text-7xl font-black tracking-tight mb-2 md:mb-4 animate-slide-up leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-[#001f54] text-[11px] md:text-xl font-bold mb-3 md:mb-8 max-w-[200px] md:max-w-xl opacity-90 leading-snug">
                    {slide.subtitle}
                  </h2>
                  
                  {/* Divider Line */}
                  <div className="w-10 md:w-24 h-0.5 md:h-1.5 bg-[#001f54] mb-4 md:mb-10 rounded-full" />
                  
                  {/* Description - Hidden on small mobile to avoid UI mess */}
                  <p className="hidden md:block text-gray-600 text-lg lg:text-xl leading-relaxed max-w-lg mb-12 font-medium">
                    {slide.description}
                  </p>
                  
                  <Link
                    href="/about"
                    className="inline-block border border-[#001f54] md:border-2 text-[#001f54] px-5 md:px-10 py-1.5 md:py-3.5 rounded-full font-bold hover:bg-[#001f54] hover:text-white transition-all duration-300 shadow-md md:shadow-lg shadow-[#001f54]/10 active:scale-95 text-[11px] md:text-lg"
                  >
                    Details
                  </Link>
                </div>

                <div className="relative flex-1 flex justify-end z-10 lg:translate-x-12 xl:translate-x-20 h-full items-center lg:items-end">
                  {/* Mobile & Tablet Background: Centered Navy Circle behind person */}
                  <div className="lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] md:w-[450px] h-[160px] md:h-[450px] bg-[#001f54] rounded-full -z-10 opacity-100" />
                  
                  {/* Desktop Background: Light Blue Halo */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-100/40 rounded-full -z-10" />
                  
                  {/* Person Image */}
                  <div className="relative w-[130px] md:w-[400px] h-[200px] md:h-[400px] lg:w-[500px] lg:h-[550px] xl:w-[780px] xl:h-[880px] lg:left-20 xl:left-40 lg:top-10 xl:top-20 shrink-0">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-contain lg:object-bottom drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] lg:drop-shadow-[-20px_45px_45px_rgba(0,0,0,0.15)]"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>




        ))}
      </Swiper>


      {/* Navigation Buttons (Bottom Right) */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-4">
        <button className="home-prev w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-[#001f54] hover:bg-[#001f54] hover:text-white hover:border-[#001f54] transition-all cursor-pointer bg-white/50 backdrop-blur-sm">
          <ArrowLeft2 size={20} />
        </button>
        <button className="home-next w-12 h-12 rounded-full border border-gray-200 bg-[#001f54] flex items-center justify-center text-white hover:bg-blue-900 transition-all cursor-pointer">
          <ArrowRight2 size={20} />
        </button>
      </div>

      {/* Pagination Container (Bottom Left) */}
      <div className="absolute bottom-12 left-12 z-20 flex items-center gap-3">
        <div className="home-pagination !w-auto" />
      </div>

      {/* Custom Styles for Pagination */}
      <style jsx global>{`
        .home-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #001f54 !important;
          opacity: 0.2;
          transition: all 0.3s ease;
          border-radius: 4px;
        }
        .home-pagination .swiper-pagination-bullet-active {
          width: 32px;
          opacity: 1 !important;
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}
