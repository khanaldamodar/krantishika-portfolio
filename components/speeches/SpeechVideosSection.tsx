"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { PlayCircle, ArrowCircleRight2, ArrowCircleLeft2 } from "iconsax-reactjs";
import { SpeechVideo } from "@/lib/speeches-data";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SpeechVideosSectionProps {
  videos: SpeechVideo[];
}

export default function SpeechVideosSection({ videos }: SpeechVideosSectionProps) {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden min-h-[620px] flex flex-col justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Speeches Video Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#001f54]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Watch &amp; Listen
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight">
            Speech Videos
          </h2>
          <p className="mt-4 text-blue-200/70 text-base max-w-xl mx-auto">
            Watch key addresses and interviews featuring Krantishikha Dhital speaking on issues that matter most.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-blue-400 to-white/40" />
        </div>

        {/* Slider */}
        <div className="relative group px-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={28}
            slidesPerView={1}
            navigation={{
              nextEl: ".speech-vid-next",
              prevEl: ".speech-vid-prev",
            }}
            pagination={{ clickable: true, el: ".speech-vid-pagination" }}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            className="rounded-xl pb-12"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/card"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover/card:scale-110 transition-transform duration-300 shadow-2xl">
                        <PlayCircle size={48} color="#fff" variant="Bulk" />
                      </div>
                    </div>

                    {/* Bottom text */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-white font-bold text-base leading-tight line-clamp-2">
                        {video.title}
                      </p>
                      <p className="text-blue-200/80 text-xs mt-1">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom nav */}
          <button className="speech-vid-prev absolute left-0 top-1/2 -translate-y-8 z-20 text-white/70 hover:text-white transition-colors hover:scale-110 duration-200">
            <ArrowCircleLeft2 size={44} variant="Bulk" />
          </button>
          <button className="speech-vid-next absolute right-0 top-1/2 -translate-y-8 z-20 text-white/70 hover:text-white transition-colors hover:scale-110 duration-200">
            <ArrowCircleRight2 size={44} variant="Bulk" />
          </button>

          {/* Pagination */}
          <div className="speech-vid-pagination flex justify-center mt-4 gap-2" />
        </div>
      </div>

      {/* Swiper dot styles */}
      <style jsx global>{`
        .speech-vid-pagination .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4) !important;
          opacity: 1 !important;
          width: 8px;
          height: 8px;
        }
        .speech-vid-pagination .swiper-pagination-bullet-active {
          background: white !important;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
