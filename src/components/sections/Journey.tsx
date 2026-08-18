"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/data/portfolio";

export function Journey() {
  return (
    <section id="journey" className="py-16 md:py-24 px-6 md:px-12 bg-[var(--charcoal)] text-white relative z-10">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Education Timeline */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-12"
            >
              Education
            </motion.h2>
            
            <div className="relative border-l border-[var(--charcoal)]/20 pl-8 ml-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[var(--background)] border-4 border-[var(--accent)]"></div>
                <div className="text-sm font-bold tracking-widest text-[var(--accent)] mb-2">
                  {education.year}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight">
                  {education.degree}
                </h3>
                <h4 className="text-lg font-medium text-[var(--foreground)]/80 mt-1">
                  {education.specialization}
                </h4>
                <p className="text-[var(--foreground)]/60 mt-2 font-medium tracking-wide">
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
              className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-12"
            >
              Certifications
            </motion.h2>
            
            <div className="flex flex-col gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-[var(--charcoal)]/10 rounded-full group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-colors duration-300">
                    <span className="text-[var(--charcoal)] group-hover:text-white font-black text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)]/80 group-hover:text-[var(--foreground)] transition-colors">
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
