"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { PlayCircle, ArrowCircleRight2, ArrowCircleLeft2 } from 'iconsax-reactjs';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VideoSlider = () => {
  // Replace these with your actual YouTube Video IDs
  const videos = [
    { id: 'video3', youtubeId: 'o9V3RaS4kig', title: 'Interview 3' },
    { id: 'video1', youtubeId: 'VZbgmCpLZ9A', title: 'Interview 1' },
    { id: 'video2', youtubeId: 'sN45lbCVIcs', title: 'Interview 2' },
    { id: 'video4', youtubeId: 'XXBrXUS-fNU', title: 'Interview 4' },
  ];

  return (
    <section className="relative h-70 w-full py-20 px-6 overflow-hidden min-h-[600px] flex flex-col justify-center">
      {/* Background with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Background"
          fill
          className="object-cover"
        
        />
        <div className="absolute inset-0 bg-[#001f54]/90 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h2 className="text-white text-4xl font-bold text-center mb-12">Videos</h2>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.next-btn',
              prevEl: '.prev-btn',
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            className="rounded-xl"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl group/item">
                  {/* YouTube Thumbnail Link */}
                  <a 
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/item:bg-black/40 transition-all">
                      <PlayCircle size="80" color="#fff" variant="Bulk" className="drop-shadow-2xl" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="prev-btn absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowCircleLeft2 size="45" variant="Bulk" />
          </button>
          <button className="next-btn absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowCircleRight2 size="45" variant="Bulk" />
          </button>
        </div>
      </div>

      {/* Inline styles to fix Swiper bullet colors */}
      <style jsx global>{`
        .swiper-pagination-bullet { background: white !important; }
        .swiper-pagination-bullet-active { background: #3b82f6 !important; }
      `}</style>
    </section>
  );
};

export default VideoSlider;