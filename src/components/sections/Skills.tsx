"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Terminal, Cpu, MonitorPlay, Database } from "lucide-react";

const getIcon = (category: string) => {
  switch(category) {
    case 'programming': return <Terminal size={24} className="text-white/50 group-hover:text-white transition-colors" />;
    case 'aiml': return <Cpu size={24} className="text-white/50 group-hover:text-[var(--accent-light)] transition-colors" />;
    case 'development': return <MonitorPlay size={24} className="text-white/50 group-hover:text-white transition-colors" />;
    case 'databasesTools': return <Database size={24} className="text-white/50 group-hover:text-white transition-colors" />;
    default: return <Terminal size={24} />;
  }
};

const getContext = (category: string) => {
  switch(category) {
    case 'programming': return "Core languages for building efficient algorithms and backends.";
    case 'aiml': return "Training models, data analysis, and building intelligent systems.";
    case 'development': return "Creating responsive, interactive web applications and UIs.";
    case 'databasesTools': return "Managing data, version control, and development environments.";
    default: return "";
  }
};

export function Skills() {
  const entries = Object.entries(skills);
  
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-[#050506]/40 backdrop-blur-sm relative z-10 border-t border-[#24242b]">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center pb-6"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white">
            TECHNICAL <span className="text-white/30">SKILLS</span>
          </h2>
          <div className="w-16 h-[2px] bg-[var(--accent)] mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {entries.map(([category, items], idx) => {
            const formatCategory = (cat: string) => {
              if (cat === 'aiml') return 'AI / ML';
              if (cat === 'databasesTools') return 'Tools & DBs';
              return cat;
            };

            return (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative flex flex-col h-[320px] rounded-2xl bg-[#0D0D10] border ${
                  category === "aiml" ? "border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.05)]" : "border-[#24242B]"
                } p-8 overflow-hidden transition-all hover:border-white/20 hover:-translate-y-1`}
              >
                {/* Background Accent Glow on Hover */}
                <div className="absolute -inset-4 bg-gradient-to-b from-[var(--accent)]/0 to-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
                
                <div className="mb-6 flex items-center justify-between">
                  {getIcon(category)}
                  <span className="text-[10px] font-mono tracking-widest text-white/30 group-hover:text-[var(--accent)] transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#F5F5F5] mb-2">
                  {formatCategory(category)}
                </h3>
                
                <p className="text-sm text-white/50 mb-8 h-10 group-hover:text-white/80 transition-colors">
                  {getContext(category)}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {items.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-[#111111] border border-white/5 rounded-full text-xs font-bold tracking-wider text-white/70 group-hover:border-white/20 group-hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
