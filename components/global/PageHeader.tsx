"use client";

import React from 'react';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png" // Ensure this is in your public folder
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* The Blue Overlay - Matches your image exactly */}
        <div className="absolute inset-0 bg-[#001f54]/80 mix-blend-multiply"></div>
      </div>

      {/* Title Text */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight animate-fade-in">
          {title}
        </h1>
        
        {/* Optional: Simple Breadcrumb (e.g., Home > About) */}
        <div className="mt-4 flex items-center justify-center gap-2 text-blue-200/80 text-sm uppercase tracking-widest font-medium">
          <span>Home</span>
          <span className="w-1 h-1 bg-blue-200/50 rounded-full"></span>
          <span className="text-white">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;