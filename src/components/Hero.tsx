"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles, ShieldCheck, Zap, Globe } from 'lucide-react';
import Background3D from './Background3D';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* 3D Background Layer */}
      <Background3D />
      
      {/* Mesh Gradient Overlay for additional depth */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full mesh-gradient" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-blue-100 shadow-xl shadow-blue-500/5 mb-10"
        >
          <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
          <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent uppercase tracking-wider">
            Experience the 3D Web Evolution
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-[11rem] font-black tracking-tighter leading-[0.75] mb-12 select-none">
            <span className="inline-block text-gray-900 drop-shadow-2xl">BEYOND</span><br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 italic px-4 py-2 drop-shadow-sm">
              REALITY
            </span><br />
            <span className="inline-block text-gray-900 drop-shadow-2xl">NOW.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-900/60 mb-12 font-semibold leading-relaxed backdrop-blur-md bg-white/10 px-6 py-4 rounded-[2rem] border border-white/20 shadow-xl shadow-black/5"
        >
          Pushing the boundaries of what's possible on the web. 
          Real-time 3D graphics meet enterprise-grade performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <button className="group relative px-12 py-6 bg-gray-900 text-white rounded-[2rem] font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/20">
            <span className="relative z-10 flex items-center gap-3">
              Explore Now <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          
          <button className="group flex items-center gap-4 px-12 py-6 bg-white/40 backdrop-blur-2xl border border-white/20 rounded-[2rem] font-bold text-xl hover:bg-white transition-all shadow-xl shadow-black/5">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 text-white fill-white ml-1" />
            </div>
            See Showreel
          </button>
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto border-t border-gray-100/50 pt-16"
        >
          {[
            { icon: Zap, label: "0.1s Latency" },
            { icon: ShieldCheck, label: "Fully Encrypted" },
            { icon: Globe, label: "Global Presence" },
            { icon: Sparkles, label: "AI Optimization" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 group">
              <div className="p-4 rounded-2xl bg-slate-50 group-hover:bg-blue-50 transition-colors">
                <item.icon className="w-8 h-8 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-900 transition-colors">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dynamic Floor Shadow */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
    </div>
  );
};

export default Hero;
