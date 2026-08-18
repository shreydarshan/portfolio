"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

// Custom SVG Icons to avoid lucide-react export issues
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 bg-[var(--charcoal)] text-white relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-white/10 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
              LET'S BUILD <br />
              <span className="text-white/40">TOGETHER.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-medium">
              Looking for opportunities to build practical software and intelligent systems.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-start md:items-end gap-4"
          >
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-2xl md:text-3xl font-bold hover:text-[var(--accent-light)] transition-colors flex items-center gap-2"
            >
              {personalInfo.email}
              <ArrowUpRight size={28} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-8"
        >
          <div className="text-white/40 font-bold uppercase tracking-widest text-sm">
            © {new Date().getFullYear()} {personalInfo.name}
          </div>
          
          <div className="flex items-center gap-8">
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest text-sm font-bold"
            >
              <LinkedinIcon /> LinkedIn
            </a>
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest text-sm font-bold"
            >
              <GithubIcon /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
