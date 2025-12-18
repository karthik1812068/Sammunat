"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-[100] transition-all duration-500",
      scrolled 
        ? "bg-white/80 backdrop-blur-2xl py-3 border-b border-gray-100/50 shadow-[0_2px_40px_rgba(0,0,0,0.02)]" 
        : "bg-transparent py-6"
    )}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-gray-900 p-2.5 rounded-[1rem] transition-all group-hover:rotate-[10deg] group-hover:scale-110">
                <Zap className="h-5 w-5 text-white" />
              </div>
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tighter uppercase italic">
              Launch<span className="text-blue-600">Pad.</span>
            </span>
          </motion.div>
          
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex items-center space-x-10">
              {['Features', 'Stats', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-black text-gray-500 hover:text-blue-600 transition-colors uppercase tracking-[0.15em]"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="h-6 w-px bg-gray-100" />
            <button className="group relative flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10">Join the Waitlist</span>
              <ChevronRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-3 rounded-2xl bg-gray-50 text-gray-900 border border-gray-100 shadow-sm transition-all hover:bg-gray-100 active:scale-90"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 lg:hidden shadow-2xl"
          >
            <div className="px-6 py-10 space-y-6">
              {['Features', 'Stats', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)} 
                  className="block text-3xl font-black text-gray-900 hover:text-blue-600 transition-all uppercase tracking-tight"
                >
                  {item}
                </a>
              ))}
              <div className="pt-6">
                <button className="w-full bg-blue-600 text-white px-8 py-5 rounded-[2rem] font-black text-xl shadow-2xl shadow-blue-100">
                  Join the Waitlist
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
