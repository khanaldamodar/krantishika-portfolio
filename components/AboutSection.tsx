"use client";

import React from 'react';
import Image from 'next/image';

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
            <p className="font-medium">
              Krantishikha Dhital is a dedicated public leader, social advocate, and counselor 
              committed to serving society through responsible leadership and meaningful action. 
              Her work combines legislative responsibility, organizational leadership, and 
              psychosocial support, creating impact across both policy and community levels.
            </p>
            
            <p>
              As a Member of Federal Parliament, she actively contributes to national discussions, 
              policy development, and representation of public concerns. As a Central Committee Member, 
              she participates in strategic leadership, decision-making, and strengthening institutional 
              values. Alongside her political and organizational responsibilities, her role as a 
              Psychosocial Counselor reflects a deep commitment to emotional well-being, mental health 
              awareness, and human-centered support.
            </p>

            <p>
              Originally from Rolpa, the historic heart of Nepal's social transformations, Krantishikha 
              has always been driven by a desire to represent the voices of the unheard. Before her 
              transition into the Federal Parliament, she established herself as a prominent media 
              personality and journalist, working with major networks including Galaxy 4K, AP1 TV, 
              and Janata TV. Her ability to communicate complex social issues was further 
              highlighted when she won the title of Miss Globe Nepal in 2018.
            </p>

            <p>
              As a youthful and dynamic lawmaker from the Rastriya Swatantra Party (RSP), she is a 
              vocal advocate for structural changes in Nepal's mental health policy. Her unique 
              perspective as a trained psychosocial counselor allows her to bridge the gap between 
              human emotional needs and legislative action, ensuring that "mental health for all" 
              is not just a slogan, but a lived reality for every citizen of Nepal.
            </p>
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