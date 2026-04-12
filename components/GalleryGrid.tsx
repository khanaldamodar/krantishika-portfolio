"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const GalleryGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Events', 'Interviews', 'Occasions'];

  // Example data structure - replace with your actual images
  const galleryItems = [
    { id: 1, category: 'Events', src: '/gallery/image-1.png' },
    { id: 2, category: 'Interviews', src: '/gallery/image-2.png' },
    { id: 3, category: 'Events', src: '/gallery/image-3.png' },
    { id: 4, category: 'Occasions', src: '/gallery/image-4.png' },
    { id: 5, category: 'Events', src: '/gallery/image-5.png' },
    { id: 6, category: 'Interviews', src: '/gallery/image-6.png' },
    { id: 7, category: 'Occasions', src: '/gallery/image-7.png' },
    { id: 8, category: 'Events', src: '/gallery/image-8.png' },
    { id: 9, category: 'Events', src: '/gallery/image-9.png' },
    { id: 10, category: 'Occasions', src: '/gallery/image-10.png' },
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="w-full py-12 px-6 bg-[#f8f9fa] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-start gap-8 mb-10 border-b border-gray-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-sm font-semibold transition-all relative pb-4 ${
                activeFilter === cat 
                ? 'text-[#001f54]' 
                : 'text-gray-500 hover:text-[#001f54]'
              }`}
            >
              {cat}
              {activeFilter === cat && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#001f54] transition-all" />
              )}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="relative break-inside-avoid rounded-lg overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={item.src}
                alt={item.category}
                width={500}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#001f54]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-medium bg-[#001f54] px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;