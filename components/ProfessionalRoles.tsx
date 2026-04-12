"use client";

import React from 'react';

const ProfessionalRoles = () => {
  const roles = [
    {
      title: "Member of Federal Parliament",
      description: "Serving with commitment to national development, legislative responsibility, and public representation. Focused on policies that strengthen democracy, inclusion, and long-term social progress."
    },
    {
      title: "Central Committee Member",
      description: "Contributing to strategic leadership, policy direction, and organizational development through active participation in key decision-making processes."
    },
    {
      title: "Psychosocial Counselor",
      description: "Supporting individuals and communities through counseling, mental health awareness, and psychosocial guidance that promotes resilience and well-being."
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