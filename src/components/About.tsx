"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border-8 border-white">
              <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 aspect-[4/5] flex flex-col items-center justify-center text-white p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                
                <Zap className="w-20 h-20 mb-8 animate-bounce text-blue-200" />
                <h3 className="text-4xl font-black text-center mb-6 leading-tight">
                  Born to <br />Accelerate
                </h3>
                <p className="text-center text-blue-100 text-lg">
                  Engineering the future of digital deployment since 2020.
                </p>
                
                <div className="mt-12 flex gap-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-blue-500 flex items-center justify-center font-bold text-xs">
                        U{i}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-bold text-sm">4.9/5 Rating</span>
                    <span className="text-xs text-blue-200">from 2k+ users</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full -z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-50 rounded-full -z-0"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight leading-[1.1]">
              Why teams choose <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">LaunchPad</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We've refined every pixel and line of code so you don't have to. Our platform is the bridge between your ambitious vision and its technical reality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Global Delivery', icon: Globe, desc: 'Sub-second latency everywhere.' },
                { title: 'Secure Ops', icon: ShieldCheck, desc: 'SOC2 & HIPAA compliant ready.' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-colors">
                  <item.icon className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <ul className="mt-10 space-y-4">
              {[
                'Enterprise-grade component architecture',
                'Built-in SEO and performance optimizations',
                'Advanced caching and state management'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-12">
              <button className="bg-gray-50 hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-2xl font-bold transition-all border border-gray-200 inline-flex items-center gap-3">
                Read our technical whitepaper
                <span className="text-blue-600">→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
