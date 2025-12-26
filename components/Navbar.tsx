"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, Images } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/gallery", label: "Gallery", icon: Images },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-sm border-b border-[#D4CFC4] shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
            aria-label="Go to homepage"
          >
            <div className="w-12 h-12 rounded-full bg-[#C5A059] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-serif text-xl font-bold">O</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-xl text-[#2D3748] font-semibold">
                Onofre Clan
              </p>
              <p className="text-sm text-[#2D3748]/70 -mt-1">
                Reunion 2025
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-[#2D3748] font-medium text-lg hover:bg-[#C5A059]/10 hover:text-[#C5A059] transition-all duration-200"
                >
                  <Icon size={22} strokeWidth={2} />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl text-[#2D3748] hover:bg-[#C5A059]/10 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#D4CFC4] animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-4 rounded-xl text-[#2D3748] font-medium text-xl hover:bg-[#C5A059]/10 hover:text-[#C5A059] transition-all duration-200"
                  >
                    <Icon size={26} strokeWidth={2} />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
