"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Skills() {
  const entries = Object.entries(skills);
  
  return (
    <section id="skills" className="py-16 md:py-24 px-6 md:px-12 bg-white relative z-10 border-t border-[var(--charcoal)]/10">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between border-b border-[var(--charcoal)]/10 pb-6"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-[var(--charcoal)]">
            TECHNICAL <span className="text-[var(--accent)]">SKILLS</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16`}
        >
          {entries.map(([category, items]) => {
            const formatCategory = (cat: string) => {
              if (cat === 'aiml') return 'AI / ML';
              if (cat === 'databasesTools') return 'Tools & DBs';
              return cat;
            };

            return (
              <motion.div key={category} variants={item} className="flex flex-col">
                <h3 className="text-sm uppercase tracking-widest text-[var(--foreground)]/50 mb-6 border-b border-[var(--charcoal)]/10 pb-4">
                  {formatCategory(category)}
                </h3>
                <ul className="flex flex-col gap-3 text-lg font-medium text-[var(--charcoal)]">
                  {items.map(skill => (
                    <li key={skill} className="hover:text-[var(--accent)] transition-colors">{skill}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
