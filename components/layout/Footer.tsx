"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Direct, Call, Location, ArrowRight2 } from 'iconsax-reactjs';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const usefulLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Krantishikha', href: '/about' },
    { name: 'Public Speeches', href: '/speeches' },
    // { name: 'Psychosocial Counselling', href: '/counselling' },
    { name: 'Gallery', href: '/gallery' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/ci.kha.52', icon: <Facebook size="20" variant="Bold" /> },
    { name: 'Instagram', href: 'https://www.instagram.com/krantishikha/', icon: <Instagram size="20" variant="Bold" /> },
  ];

  const contactInfo = [
    { icon: <Direct size="20" variant="Bold" />, label: 'Email', value: 'mp.krantishikhadhital@parliament.gov.np', href: 'mailto:krantishikha@gmail.com' },
    { icon: <Call size="20" variant="Bold" />, label: 'Phone', value: '+977 9868639480', href: 'tel:+9779868639480' },
    { icon: <Location size="20" variant="Bold" />, label: 'Office', value: 'Federal Parliament, Kathmandu', href: '#' },
  ];

  return (
    <footer className="relative w-full bg-white text-[#001f54] pt-16 pb-10 overflow-hidden font-sans border-t border-gray-100">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Identity */}
          <div className="flex flex-col space-y-5 items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-block transform transition hover:scale-105">
              <Image src="/logo.png" alt="Krantishikha Logo" width={180} height={36} className="object-contain" />
            </Link>
            <p className="text-gray-600 text-xs leading-relaxed">
              Member of Federal Parliament (RSP). Dedicated to psychosocial well-being, 
              public leadership, and social responsibility.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#001f54] text-white hover:bg-blue-700 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#001f54] text-xs font-black mb-6 uppercase tracking-[0.2em]">Navigation</h3>
            <ul className="space-y-3 text-center md:text-left">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 hover:text-[#001f54] text-sm font-medium transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#001f54] text-xs font-black mb-6 uppercase tracking-[0.2em]">Contact</h3>
            <div className="flex flex-col space-y-5 w-full overflow-hidden">
              {contactInfo.map((info) => (
                <Link 
                  key={info.label}
                  href={info.href} 
                  className="flex items-center gap-3 text-gray-500 hover:text-[#001f54] transition-all group"
                >
                  <div className="text-[#001f54]/20 group-hover:text-[#001f54] transition-colors shrink-0">
                    {React.cloneElement(info.icon as React.ReactElement)}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{info.label}</span>
                    <span className="text-[13px] font-bold break-all md:break-normal lg:break-all xl:break-normal">{info.value}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#001f54] text-xs font-black mb-6 uppercase tracking-[0.2em]">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4 text-center md:text-left">Subscribe for the latest news.</p>
            <div className="relative w-full max-w-[240px] lg:max-w-full">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-gray-50 border border-gray-100 rounded-full py-3 px-5 text-xs focus:outline-none focus:border-[#001f54] transition-all"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-[#001f54] text-white px-4 rounded-full text-[10px] font-bold hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 w-full italic text-gray-400 text-[10px] text-center md:text-left">
              "The best way to find yourself is to lose yourself in the service of others."
            </div>
          </div>
        </div>



        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p className="font-medium animate-fade-in">© {currentYear} Krantishikha Dhital. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            Designed & Developed by <Link href="#" className="text-[#001f54] font-black hover:text-blue-600 transition-colors uppercase tracking-tight">Shakta Technology</Link>
          </div>
          <div className="flex gap-6 font-semibold">
            <Link href="/privacy" className="hover:text-[#001f54] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#001f54] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;