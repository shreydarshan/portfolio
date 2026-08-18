"use client";

import { motion } from "framer-motion";
import { Lightbulb, Database, BrainCircuit, Code2, Globe } from "lucide-react";

const stages = [
  { id: "idea", label: "Idea", icon: <Lightbulb size={24} />, desc: "Conceptualizing the solution" },
  { id: "data", label: "Data", icon: <Database size={24} />, desc: "Structuring the foundation" },
  { id: "intelligence", label: "Intelligence", icon: <BrainCircuit size={24} />, desc: "Training & Algorithms" },
  { id: "software", label: "Software", icon: <Code2 size={24} />, desc: "Building the interface" },
  { id: "impact", label: "Impact", icon: <Globe size={24} />, desc: "Real-world application" }
];

export function BuildingSystems() {
  return (
    <section id="systems" className="py-24 px-6 md:px-12 bg-[#050506]/40 backdrop-blur-sm relative z-10 border-t border-[#24242b] overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex flex-col items-center text-center pb-6"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-[#F5F5F5]">
            BUILDING <span className="text-[var(--accent)]">SYSTEMS</span>
          </h2>
          <p className="mt-6 text-[#A0A0A8] font-medium max-w-2xl text-lg">
            My development pipeline connects theoretical intelligence with practical software engineering.
          </p>
        </motion.div>

        {/* Pipeline Visual */}
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* Animated connection line (Desktop) */}
          <div className="hidden md:block absolute top-[50px] left-0 right-0 h-[2px] bg-white/10 z-0">
            <motion.div 
              className="h-full bg-gradient-to-r from-transparent via-[var(--accent-light)] to-[var(--accent)]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
            />
          </div>

          {/* Animated connection line (Mobile) */}
          <div className="block md:hidden absolute left-[50px] top-0 bottom-0 w-[2px] bg-white/10 z-0">
            <motion.div 
              className="w-full bg-gradient-to-b from-transparent via-[var(--accent-light)] to-[var(--accent)]"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
            />
          </div>

          {/* Nodes */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-4 relative z-10">
            {stages.map((stage, idx) => (
              <motion.div 
                key={stage.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.3 + (idx * 0.2) }}
                className="group flex md:flex-col items-center gap-6 md:gap-4 w-full md:w-32"
              >
                {/* Node Circle */}
                <div className="relative w-24 h-24 md:w-24 md:h-24 rounded-full bg-[#111111] border-2 border-white/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-white/5 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                  <div className="text-white/50 group-hover:text-white transition-colors duration-300">
                    {stage.icon}
                  </div>
                  {/* Subtle active pulse on hover */}
                  <div className="absolute inset-0 rounded-full border border-[var(--accent)] opacity-0 group-hover:animate-ping" />
                </div>
                
                {/* Node Text */}
                <div className="flex flex-col md:items-center md:text-center">
                  <span className="text-xs font-mono tracking-widest text-[var(--accent)] mb-1">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold uppercase tracking-widest text-[#F5F5F5] group-hover:text-[var(--accent-light)] transition-colors">
                    {stage.label}
                  </h3>
                  <p className="text-xs text-white/50 mt-2 font-medium hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-12 w-48 left-1/2 -translate-x-1/2">
                    {stage.desc}
                  </p>
                  <p className="text-sm text-white/50 mt-1 block md:hidden">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
