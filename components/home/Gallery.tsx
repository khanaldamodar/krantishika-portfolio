"use client";

import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  // Array of your image filenames stored in /public/gallery
  const images = [
    'image-1.png', 'image-2.png', 'image-3.png', 
    'image-4.png', 'image-5.png', 'image-6.png', 
    'image-7.png'
  ];

  return (
    <section className="relative min-h-screen w-full py-20 px-6 overflow-hidden font-sans">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Blue Overlay Layer - Using a semi-transparent Navy/Blue */}
        <div className="absolute inset-0 bg-[#001f54]/90 mix-blend-multiply"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-200 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            A visual reflection of leadership, public interaction, community participation, and meaningful social contribution.
          </p>
        </div>

        {/* Responsive Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg group transition-transform duration-500 hover:scale-[1.02] shadow-xl
                ${index === 0 ? 'lg:row-span-2' : ''} 
                ${index === 4 ? 'lg:col-span-2' : ''}
              `}
            >
              <div className="aspect-[4/5] lg:aspect-auto h-full relative min-h-[300px]">
                <Image
                  src={`/gallery/${img}`}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover border-2 border-white/10"
                />
                {/* Subtle Hover Effect */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;