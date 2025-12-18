"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Smartphone, 
  Shield, 
  Layers, 
  BarChart3, 
  Globe, 
  Cpu,
  MousePointer2,
  Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureCard = ({ title, description, icon: Icon, className, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={cn(
      "group relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100",
      className
    )}
  >
    <div className="relative z-10">
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
        <Icon className="h-7 w-7 transition-transform group-hover:scale-110" />
      </div>
      <h3 className="mb-3 text-2xl font-black tracking-tight text-gray-900">{title}</h3>
      <p className="text-lg leading-relaxed text-gray-500">{description}</p>
    </div>
    <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-50 opacity-0 transition-all group-hover:opacity-100 group-hover:scale-150" />
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 flex flex-col items-end text-right">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-[0.3em] text-blue-600"
          >
            Capabilities <div className="h-px w-12 bg-blue-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 lg:w-2/3"
          >
            FEATURES THAT <span className="text-blue-600">REDEFINE</span> PERFORMANCE.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6">
          <FeatureCard
            title="Edge Performance"
            description="Global distribution with sub-millisecond latency for every user, everywhere."
            icon={Zap}
            className="md:col-span-3"
            delay={0.1}
          />
          <FeatureCard
            title="Ironclad Security"
            description="End-to-end encryption and real-time threat detection built-in."
            icon={Shield}
            className="md:col-span-3"
            delay={0.2}
          />
          <FeatureCard
            title="Mobile First"
            description="Perfect responsiveness across all devices and screen sizes."
            icon={Smartphone}
            className="md:col-span-2"
            delay={0.3}
          />
          <FeatureCard
            title="Advanced AI"
            description="Automated optimizations that learn from your traffic patterns."
            icon={Cpu}
            className="md:col-span-2"
            delay={0.4}
          />
          <FeatureCard
            title="Analytics Pro"
            description="Deep insights into your user journey with zero performance overhead."
            icon={BarChart3}
            className="md:col-span-2"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
