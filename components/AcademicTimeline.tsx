"use client";

import React from 'react';

interface TimelineItemProps {
  title: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem = ({ title, description, isLast }: TimelineItemProps) => (
  <div className="flex gap-8 md:gap-12 group">
    {/* Left Side: Circle and Line */}
    <div className="flex flex-col items-center">
      {/* Circle */}
      <div className="w-16 h-16 md:w-20 md:h-20 bg-[#002d9c] rounded-full shadow-[0_0_20px_rgba(0,0,0,0.3)] shrink-0 transition-transform duration-300 group-hover:scale-110 border border-blue-400/20" />
      
      {/* Dashed Connector Line */}
      {!isLast && (
        <div className="w-0.5 h-24 border-l-2 border-dashed border-blue-400/40 my-2" />
      )}
    </div>

    {/* Right Side: Text Content */}
    <div className="pt-2 md:pt-4">
      <h3 className="text-white text-xl md:text-2xl font-bold mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-blue-100/80 text-sm md:text-base leading-relaxed max-w-2xl font-light">
        {description}
      </p>
    </div>
  </div>
);

const AcademicTimeline = () => {
  const academicData = [
    {
      title: "Master's in Psychosocial Counseling",
      description: "Advanced academic foundation in human psychology and counseling techniques, which currently informs her policy work on national mental health advocacy."
    },
    {
      title: "Bachelor's in Journalism & Communication",
      description: "Developed strong communication skills and public outreach expertise, serving as the basis for her successful career in national media (Galaxy 4K, AP1 TV)."
    },
    {
      title: "Professional Media & Leadership Training",
      description: "Specialized certifications in public speaking, strategic communication, and leadership, bridging her media background with her current role in Parliament."
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-linear-to-br from-[#001035] via-[#001f54] to-[#001035]">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight">
            Academic Background
          </h2>
          <p className="text-blue-200/70 text-sm md:text-base max-w-2xl mx-auto font-light">
            A strong educational foundation that supports leadership, public service, and psychosocial understanding.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="flex flex-col items-start md:items-center justify-center">
          <div className="flex flex-col">
            {academicData.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                description={item.description}
                isLast={index === academicData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicTimeline;