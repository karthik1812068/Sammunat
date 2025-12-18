"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO at InnovateTech',
    content: 'LaunchPad completely transformed how we ship our products. The speed and quality are unmatched in the industry.',
    avatar: 'SC'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Lead Designer',
    content: 'The component library is a dream to work with. It allowed us to focus on our unique value proposition instead of basic UI.',
    avatar: 'MR'
  },
  {
    name: 'Elena Gilbert',
    role: 'Founder of Bloom',
    content: 'Scaling became effortless. We went from 0 to 100k users without a single performance hiccup thanks to this platform.',
    avatar: 'EG'
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            What our <span className="text-blue-600">partners</span> say
          </h2>
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-10 rounded-3xl relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-100" />
              <p className="text-gray-700 text-lg italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

