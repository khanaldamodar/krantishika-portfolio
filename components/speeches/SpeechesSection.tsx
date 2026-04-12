"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Speech } from "@/lib/speeches-data";
import { Clock, Tag2, ArrowRight2 } from "iconsax-reactjs";

import Image from "next/image";

interface SpeechesSectionProps {
  speeches: Speech[];
}

const CATEGORY_COLORS: Record<string, string> = {
  Parliament: "bg-[#001f54] text-white",
  Counseling: "bg-emerald-600 text-white",
  Environment: "bg-green-600 text-white",
  Education: "bg-amber-600 text-white",
  "Peace & Society": "bg-purple-700 text-white",
  Governance: "bg-sky-700 text-white",
};

const SpeechCard = ({ speech, index }: { speech: Speech; index: number }) => {
  const colorClass =
    CATEGORY_COLORS[speech.category] ?? "bg-[#001f54] text-white";

  return (
    <Link href={`/speeches/${speech.slug}`} className="group block h-full">
      <article
        className="relative flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm
          transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-[#001f54]/20"
        style={{ animationDelay: `${index * 80}ms` }}
      >
        {/* Card Image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={speech.image}
            alt={speech.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {/* Category Badge on Image */}
          <div className="absolute bottom-4 left-4">
             <span
              className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg ${colorClass}`}
            >
              {speech.category}
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-1 p-6">
          {/* Date row */}
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <span className="text-gray-400 text-xs font-semibold tracking-wider flex items-center gap-1.5 capitalize">
              {speech.date}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[#001f54] text-xl font-bold leading-tight mb-3 group-hover:text-blue-800 transition-colors duration-200 line-clamp-2">
            {speech.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1 mb-5">
            {speech.excerpt}
          </p>

          {/* Footer row */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium lowercase">
              <Clock size={13} />
              {speech.readTime}
            </span>
            <span className="flex items-center gap-1 text-sm text-[#001f54] font-bold group-hover:gap-2 transition-all duration-200">
              Read More
              <ArrowRight2
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default function SpeechesSection({ speeches }: SpeechesSectionProps) {
  const categories = ["All", ...Array.from(new Set(speeches.map((s) => s.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? speeches
      : speeches.filter((s) => s.category === activeCategory);

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-[#001f54] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Words That Matter
          </p>
          <h2 className="text-[#001f54] text-4xl md:text-5xl font-extrabold tracking-tight">
            Speeches &amp; Addresses
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            A collection of addresses delivered in Parliament, at national conferences, and community forums — advocating for justice, equality, and progress.
          </p>
          <div className="mt-6 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#001f54] to-blue-400" />
        </div>


        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border
                ${
                  activeCategory === cat
                    ? "bg-[#001f54] text-white border-[#001f54] shadow-lg shadow-[#001f54]/20"
                    : "bg-white text-[#001f54] border-gray-200 hover:border-[#001f54] hover:shadow-md"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((speech, i) => (
            <SpeechCard key={speech.slug} speech={speech} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No speeches found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
