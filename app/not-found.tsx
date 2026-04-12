"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ArrowLeft } from 'iconsax-reactjs';


export default function NotFound() {
  return (
    <div className="relative w-full min-h-screen bg-white flex items-center justify-center px-6 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-xl w-full text-center">
        {/* 404 Visual */}
        <div className="relative mb-12 animate-fade-in">
          <h1 className="text-[150px] md:text-[200px] font-black leading-none text-[#001f54]/5 tracking-tighter select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
               {/* Using the logo as a centerpiece for the 404 page */}
               <div className="absolute inset-0 bg-[#001f54] rounded-full scale-10 hover:scale-100 transition-transform duration-700 opacity-5" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <Image 
                   src="/logo.png" 
                   alt="Logo" 
                   width={300} 
                   height={60} 
                   className="object-contain opacity-20 grayscale brightness-50"
                 />
               </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#001f54] tracking-tight">
            Page Not Found
          </h2>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/" 
              className="group flex items-center gap-2 bg-[#001f54] text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/10 active:scale-95 text-lg"
            >
              <Home variant="Bold" />
              Back to Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="group flex items-center gap-2 border border-gray-200 text-[#001f54] px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all active:scale-95 text-lg"
            >
              <ArrowLeft />
              Go Back
            </button>
          </div>
        </div>

        {/* Suggested Links */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
            Helpful Links
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-[#001f54]">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/speeches" className="hover:underline">Speeches</Link>
            <Link href="/gallery" className="hover:underline">Gallery</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
