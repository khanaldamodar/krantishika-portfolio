import React from 'react';
import { portfolioData } from '@/lib/portfolio-data';

const ProfessionalRoles = () => {
  const roles = [
    {
      title: portfolioData.workExperience[0].role,
      organization: portfolioData.workExperience[0].organization,
      description: "Defining vision, manifesto, and core structures for one of Nepal's major political parties."
    },
    {
      title: portfolioData.workExperience[1].role,
      organization: "Ministry of Work & Employment",
      description: "Leading labor policy development and employment promotion initiatives through the Shramadhan project."
    },
    {
      title: "Psychosocial Counselor",
      organization: "Calm Convo",
      description: "Providing trauma-informed care and mental health support with a background in psychology and emotional resilience."
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#001035] to-[#001f54] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-start">
        
        {roles.map((role, index) => (
          <div 
            key={index} 
            className={`relative flex flex-col items-center text-center px-8 md:px-12 
              ${index !== roles.length - 1 ? 'md:border-r md:border-white/20' : ''}
            `}
          >
            {/* Organization Tag */}
            <span className="text-blue-300 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 opacity-70">
              {role.organization}
            </span>

            {/* Title */}
            <h3 className="text-white text-xl md:text-2xl font-bold mb-6 leading-tight min-h-[60px] flex items-center">
              {role.title}
            </h3>

            {/* Description */}
            <p className="text-blue-100/80 text-sm md:text-base leading-relaxed font-light">
              {role.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ProfessionalRoles;