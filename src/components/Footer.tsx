"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Github, Instagram, Twitter, Zap, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-gray-900 p-2 rounded-xl">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl font-black text-gray-900 tracking-tighter uppercase italic">
                Launch<span className="text-blue-600">Pad.</span>
              </span>
            </div>
            <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10">
              The platform for those who refuse to settle for average. 
              Engineering excellence in every pixel.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Facebook, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-[0.3em] mb-8">Ecosystem</h4>
            <ul className="space-y-4">
              {['Components', 'Integrations', 'Pricing', 'Documentation'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-blue-600 font-bold transition-all flex items-center group">
                    {item}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-x-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-[0.3em] mb-8">Company</h4>
            <ul className="space-y-4">
              {['Our Story', 'Careers', 'Brand', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-blue-600 font-bold transition-all flex items-center group">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-[0.3em] mb-8">Legal</h4>
            <ul className="space-y-4">
              {['Privacy', 'Terms', 'Cookies', 'Security'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-blue-600 font-bold transition-all flex items-center group">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400 font-bold text-sm tracking-widest uppercase">
            © {new Date().getFullYear()} LaunchPad Global. All systems operational.
          </p>
          <div className="flex gap-10">
            <span className="text-xs font-black text-gray-300 uppercase tracking-widest">Built with Next.js 15</span>
            <span className="text-xs font-black text-gray-300 uppercase tracking-widest">Deployed on Vercel Edge</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
