"use client";

import React from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { Book, Link as LinkIcon, Edit, UserSquare, Calendar, Location, Call, Sms } from 'iconsax-reactjs';

const Publications = () => {
  return (
    <section className="w-full bg-linear-to-b from-white to-blue-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Research & Publications Column ... */}
          <div className="flex-1 space-y-12">
            <div>
              <h2 className="text-[#001f54] text-3xl font-extrabold mb-8 flex items-center gap-3">
                <Book className="text-blue-600" variant="Bulk" />
                Research & Publications
              </h2>
              
              <div className="space-y-6">
                {portfolioData.research.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="font-bold text-[#001f54] text-lg leading-tight">
                        {item.title}
                      </h3>
                      {item.date && (
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                          {item.date}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[#001f54] text-2xl font-bold mb-6 flex items-center gap-3">
                <Edit className="text-blue-600" variant="Bulk" />
                Featured Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portfolioData.publications.map((pub, index) => (
                  <a 
                    key={index} 
                    href={pub.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white p-5 rounded-xl border border-gray-100 hover:border-blue-200 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">{pub.platform}</span>
                      <h4 className="text-[#001f54] font-bold text-sm group-hover:text-blue-700 transition-colors">
                        {pub.title}
                      </h4>
                    </div>
                    <div className="mt-4 flex items-center text-blue-600 text-xs font-semibold gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Article <LinkIcon size={14} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Volunteering & Leadership Column */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h2 className="text-[#001f54] text-3xl font-extrabold mb-8 flex items-center gap-3">
                <UserSquare className="text-blue-600" variant="Bulk" />
                Volunteering
              </h2>
              <div className="space-y-4">
                {portfolioData.volunteering.map((v, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-1 h-12 bg-blue-600 rounded-full shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#001f54]">{v.role}</h4>
                      <p className="text-sm text-gray-600">{v.organization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#001f54] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
               {/* Decorative Circle */}
               <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
               
               <h3 className="text-xl font-bold mb-6">Contact Information</h3>
               <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <Location size={18} variant="Bulk" />
                    </div>
                    <span>{portfolioData.personalInfo.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <Call size={18} variant="Bulk" />
                    </div>
                    <span>{portfolioData.personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <Sms size={18} variant="Bulk" />
                    </div>
                    <span className="break-all">{portfolioData.personalInfo.email}</span>
                  </div>
                  <div className="pt-4">
                    <a 
                      href={portfolioData.personalInfo.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-[#001f54] px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Publications;
