"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  const nameParts = personalInfo.name.split(" ");
  
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center px-6 md:px-12 overflow-hidden pointer-events-none">
      <div className="container mx-auto z-10 flex flex-col items-center justify-center text-center mt-20 md:mt-0">
        
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Top Label */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 px-6 py-2 border border-white/10 rounded-full glass-panel"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[var(--accent-light)]">
              AI/ML Student · Software Developer · Builder
            </span>
          </motion.div>

          {/* Typography */}
          <h1 className="text-[clamp(4rem,10vw,120px)] leading-[0.9] font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/20 drop-shadow-2xl">
            {nameParts[0]}<br />
            <span className="text-white/80">{nameParts[1]}</span>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 flex flex-col items-center gap-10 max-w-2xl"
          >
            <p className="text-base md:text-xl text-white/60 font-medium leading-relaxed">
              I build practical software and AI systems focused on solving real-world problems.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pointer-events-auto">
              <a 
                href="#work" 
                className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <div className="absolute inset-0 bg-[var(--accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">View My Work</span>
                <ArrowRight size={16} className="relative z-10 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full transition-all hover:border-white/50 hover:bg-white/5 flex items-center gap-3"
              >
                <span>Let's Connect</span>
                <Mail size={16} className="group-hover:text-[var(--accent-light)] transition-colors" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
