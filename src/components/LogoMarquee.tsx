"use client";

import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "STRIPE", "VERCEL", "NEXT.JS", "TAILWIND", "REACT", "GITHUB", 
  "OPENAI", "ADOBE", "FIGMA", "AWS", "GOOGLE", "META"
];

const LogoMarquee = () => {
  return (
    <div className="py-20 bg-white overflow-hidden border-y border-gray-100">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 items-center px-10"
        >
          {brands.map((brand, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-gray-100 hover:text-blue-600 transition-colors cursor-default">
              {brand}
            </span>
          ))}
          {/* Duplicate for infinite effect */}
          {brands.map((brand, i) => (
            <span key={`dup-${i}`} className="text-4xl md:text-6xl font-black text-gray-100 hover:text-blue-600 transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoMarquee;

