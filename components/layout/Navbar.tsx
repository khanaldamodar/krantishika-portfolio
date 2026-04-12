"use client";

import { usePathname } from 'next/navigation';
import { Instagram, Facebook, Xrp, HamburgerMenu, CloseCircle } from 'iconsax-reactjs';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Speeches', href: '/speeches' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
               {/* Replace with <Image src="/logo.png" ... /> */}
               <Image src="/logo.png" alt="Logo" width={200} height={40} className="object-cover"/>
            </div>
           
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${
                    isActive 
                      ? 'text-[#001f54] font-bold border-b-2 border-[#001f54]' 
                      : 'text-gray-500 hover:text-[#001f54]'
                  } transition-all duration-200 text-[15px] pb-1`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Social Icons (The Blue Pill) */}
          <div className="hidden md:flex items-center gap-4 bg-[#001f54] px-6 py-2.5 rounded-full shadow-lg">
            <Link href="https://www.instagram.com/krantishikha/" className="text-white hover:scale-110 transition-transform">
              <Instagram size="20" variant="Linear"/>
            </Link>
            <Link href="https://www.facebook.com/ci.kha.52" className="text-white hover:scale-110 transition-transform">
              <Facebook size="20" variant="Linear"/>
            </Link>
            <Link href="https://x.com/krantishikha" className="text-white hover:scale-110 transition-transform">
              <Xrp size="20" variant="Linear"/>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#001f54] p-2 transition-colors"
            >
              {isOpen ? <CloseCircle size="32" variant="Linear" /> : <HamburgerMenu size="32" variant="Linear" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-gray-50 px-6 py-8 space-y-6 shadow-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-semibold transition-colors ${
                  isActive ? 'text-[#001f54]' : 'text-gray-800 hover:text-[#001f54]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="flex items-center gap-8 pt-6 border-t border-gray-100">
            <Link href="https://www.instagram.com/krantishikha/" className="text-[#001f54] hover:scale-110 transition-transform">
            <Instagram size="24" className="text-[#001f54]" variant="Linear" />
            </Link>
            <Link href="https://www.facebook.com/ci.kha.52" className="text-[#001f54] hover:scale-110 transition-transform">
              <Facebook size="24" className="text-[#001f54]" variant="Linear" />
            </Link>
            <Link href="https://x.com/krantishikha" className="text-[#001f54] hover:scale-110 transition-transform">
              <Xrp size="24" className="text-[#001f54]" variant="Linear" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;