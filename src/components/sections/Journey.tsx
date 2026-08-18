"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/data/portfolio";

export function Journey() {
  return (
    <section id="journey" className="py-24 px-6 md:px-12 bg-[#050506]/40 backdrop-blur-sm text-white relative z-10 border-t border-[#24242b]">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-20">
          {/* Education Timeline */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-12 flex items-center gap-4 text-[#F5F5F5]"
            >
              Education
              <div className="h-[2px] flex-grow bg-white/10"></div>
            </motion.h2>
            
            <div className="relative border-l border-white/20 pl-8 ml-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-[#0d0d10] border border-[#24242b] p-8 rounded-2xl hover:bg-[#111117] transition-colors shadow-xl"
              >
                <div className="absolute -left-[41px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0a0a0a] border-4 border-[var(--accent)] shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                <div className="text-xs font-mono font-bold tracking-widest text-[var(--accent)] mb-3 uppercase">
                  {education.year}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-[#F5F5F5]">
                  {education.degree}
                </h3>
                <h4 className="text-lg font-medium text-[var(--accent-light)] mt-2">
                  {education.specialization}
                </h4>
                <p className="text-[#A0A0A8] mt-4 font-medium tracking-wide">
                  {education.institution}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-12 flex items-center gap-4 text-[#F5F5F5]"
            >
              Certifications
              <div className="h-[2px] flex-grow bg-white/10"></div>
            </motion.h2>
            
            <div className="flex flex-col gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-6 p-6 bg-[#0d0d10] border border-[#24242b] rounded-2xl group transition-all duration-300 hover:bg-[#111117] hover:border-white/10 hover:-translate-y-1 shadow-lg"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-[#24242b] rounded-full group-hover:bg-[#1e1e24] group-hover:border-indigo-500/50 transition-colors duration-300 shadow-inner bg-[#050506]">
                    <span className="text-white/50 group-hover:text-indigo-400 font-mono font-bold text-xs tracking-widest transition-colors">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[#D8D8DE] group-hover:text-white transition-colors uppercase">
                    {cert}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
