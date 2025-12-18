"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]"
            >
              Let&apos;s build something <br />
              <span className="text-blue-500">extraordinary.</span>
            </motion.h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-lg">
              Our engineering team is ready to help you scale. Reach out for a custom architectural review or integration support.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email our specialists', value: 'engineering@launchpad.io', color: 'text-blue-400', bg: 'bg-blue-400/10' },
                { icon: MessageSquare, label: '24/7 Priority Support', value: 'Live on dashboard', color: 'text-purple-400', bg: 'bg-purple-400/10' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center border border-white/5`}>
                    <item.icon className={`h-7 w-7 ${item.color}`} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-xl font-bold text-white">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] p-10 md:p-12 border border-white/10 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                        placeholder="Elon Musk"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Work Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                        placeholder="elon@spacex.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Inquiry Type</label>
                    <select id="subject" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white appearance-none">
                      <option className="bg-gray-900">Technical Partnership</option>
                      <option className="bg-gray-900">Enterprise Licensing</option>
                      <option className="bg-gray-900">Developer Support</option>
                    </select>
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-blue-900/20"
                  >
                    Send Proposal
                    <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8 border border-green-500/30">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">Message Received!</h3>
                  <p className="text-gray-400 text-lg max-w-sm">
                    Our engineering lead will review your proposal and get back to you within 4 business hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 text-blue-400 font-bold hover:text-blue-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
