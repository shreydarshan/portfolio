"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export function Hero() {
  const nameParts = personalInfo.name.split(" ");
  
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden pointer-events-none">
      <div className="container mx-auto z-10 flex flex-col items-center justify-center text-center mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <h1 className="text-7xl sm:text-8xl md:text-[9rem] lg:text-[11rem] font-black tracking-tighter uppercase leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-2xl">
            {nameParts[0]}<br />{nameParts[1]}
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-8 flex flex-col items-center gap-6"
          >
            <div className="px-6 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-md">
              <span className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-[var(--accent-light)]">
                AI/ML Student · Software Developer · Builder
              </span>
            </div>
            <p className="max-w-lg text-base md:text-lg text-white/70 font-medium">
              I build practical software and AI systems focused on solving real-world problems.
            </p>
            
            <a 
              href="#work" 
              className="pointer-events-auto inline-flex items-center gap-2 group interactive-hover uppercase text-sm font-bold tracking-widest mt-4"
            >
              <span>Selected Work</span>
              <span className="w-8 h-8 rounded-full border border-[var(--charcoal)] flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors">
                ↓
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
