"use client";

import React from "react";
import Link from "next/link";
import { Speech } from "@/lib/speeches-data";
import { Clock, Tag2, ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";
import Image from "next/image";

interface SpeechDetailProps {
  speech: Speech;
  allSpeeches: Speech[];
}

const CATEGORY_COLORS: Record<string, string> = {
  Parliament: "bg-[#001f54] text-white",
  Counseling: "bg-emerald-600 text-white",
  Environment: "bg-green-600 text-white",
  Education: "bg-amber-600 text-white",
  "Peace & Society": "bg-purple-700 text-white",
  Governance: "bg-sky-700 text-white",
};

export default function SpeechDetail({ speech, allSpeeches }: SpeechDetailProps) {
  const currentIndex = allSpeeches.findIndex((s) => s.slug === speech.slug);
  const prev = currentIndex > 0 ? allSpeeches[currentIndex - 1] : null;
  const next =
    currentIndex < allSpeeches.length - 1
      ? allSpeeches[currentIndex + 1]
      : null;

  const colorClass =
    CATEGORY_COLORS[speech.category] ?? "bg-[#001f54] text-white";

  return (
    <div className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">

        {/* Back link */}
        <Link
          href="/speeches"
          className="inline-flex items-center gap-2 text-[#001f54] font-bold text-sm mb-12 hover:gap-3 transition-all duration-200 group"
        >
          <ArrowLeft2
            size={18}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          Go Back
        </Link>

        {/* Article card */}
        <article className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,31,84,0.08)] border border-gray-50">
          
          {/* Hero Image */}
          <div className="relative w-full h-[400px]">
            <Image
              src={speech.image}
              alt={speech.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001f54]/40 to-transparent" />
          </div>

          <div className="p-8 md:p-14 relative">
             {/* Category Badge Floating Overlay */}
             <div className="absolute -top-6 left-12">
                <span
                  className={`text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl shadow-xl ${colorClass}`}
                >
                  {speech.category}
                </span>
             </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8 mt-4 text-gray-400">
              <span className="text-sm font-bold tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#001f54]/30" />
                {speech.date}
              </span>
              <span className="flex items-center gap-2 text-sm font-bold tracking-wider capitalize">
                <Clock size={16} />
                {speech.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[#001f54] text-3xl md:text-5xl font-extrabold leading-[1.15] tracking-tight mb-8">
              {speech.title}
            </h1>

            {/* Excerpt / pull quote */}
            <blockquote className="border-l-4 border-[#001f54] bg-[#001f54]/[0.02] rounded-r-2xl px-8 py-6 mb-12">
              <p className="text-[#001f54]/70 text-lg md:text-xl italic font-medium leading-relaxed">
                {speech.excerpt}
              </p>
            </blockquote>

            {/* Speech content */}
            <div
              className="prose prose-lg md:prose-xl max-w-none
                prose-p:text-gray-600 prose-p:leading-[1.8] prose-p:mb-8
                prose-strong:text-[#001f54] prose-strong:font-bold
                prose-headings:text-[#001f54] prose-headings:font-extrabold"
              dangerouslySetInnerHTML={{ __html: speech.content }}
            />

            {/* Tags */}
            <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col gap-4">
              <p className="text-[10px] text-[#001f54]/40 uppercase tracking-[0.3em] font-black">
                Featured Topics
              </p>
              <div className="flex flex-wrap gap-2.5">
                {speech.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-2 text-xs text-[#001f54] bg-[#001f54]/5 border border-[#001f54]/10 px-4 py-2 rounded-xl font-bold hover:bg-[#001f54] hover:text-white transition-all cursor-default"
                  >
                    <Tag2 size={13} variant="Bold" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Prev / Next Navigation */}
        {(prev || next) && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {prev ? (
              <Link
                href={`/speeches/${prev.slug}`}
                className="group flex flex-col bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <span className="flex items-center gap-2 text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-4 group-hover:text-[#001f54] transition-colors">
                  <ArrowLeft2
                    size={14}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                  Previous Address
                </span>
                <p className="text-[#001f54] font-extrabold text-base md:text-lg leading-snug line-clamp-2">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/speeches/${next.slug}`}
                className="group flex flex-col items-end bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-right"
              >
                <span className="flex items-center gap-2 text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-4 group-hover:text-[#001f54] transition-colors">
                  Next Address
                  <ArrowRight2
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <p className="text-[#001f54] font-extrabold text-base md:text-lg leading-snug line-clamp-2">
                  {next.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            href="/speeches"
            className="inline-block bg-[#001f54] text-white px-12 py-4 rounded-2xl font-bold hover:bg-blue-900 transition-all shadow-xl hover:shadow-[#001f54]/20 active:scale-95"
          >
            All Speeches
          </Link>
        </div>
      </div>
    </div>
  );
}
