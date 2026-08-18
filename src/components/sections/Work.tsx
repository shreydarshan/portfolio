"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const SwarmTrafficVisual = () => {
  return (
    <div className="absolute inset-0 bg-[#07070a] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>
      
      <div className="absolute w-full h-24 bg-[#111116] border-y border-white/10 flex items-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
         <div className="w-full h-1 border-t-2 border-dashed border-white/20"></div>
      </div>
      
      <div className="absolute h-full w-24 bg-[#111116] border-x border-white/10 flex justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
         <div className="h-full w-1 border-l-2 border-dashed border-white/20"></div>
      </div>
      
      <div className="absolute w-6 h-6 bg-indigo-500/10 rounded-sm border border-indigo-500/30 flex flex-wrap gap-1 p-1 z-10 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-75"></div>
        <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
      </div>
      
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`eb-${i}`}
          className="absolute w-3 h-1.5 bg-white/80 rounded-sm shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          style={{ top: 'calc(50% + 6px)' }}
          animate={{ x: [-200 - (i * 100), 200 + (i * 50)] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: i * 1.5 }}
        />
      ))}

      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`wb-${i}`}
          className="absolute w-3 h-1.5 bg-white/80 rounded-sm shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          style={{ top: 'calc(50% - 12px)' }}
          animate={{ x: [300 + (i * 120), -300 - (i * 60)] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: i * 1.2 }}
        />
      ))}

      {[0, 1].map((i) => (
        <motion.div
          key={`sb-${i}`}
          className="absolute w-1.5 h-3 bg-red-400 rounded-sm shadow-[0_0_10px_rgba(248,113,113,0.6)]"
          style={{ left: 'calc(50% - 12px)', top: `calc(50% - ${24 + (i * 20)}px)` }}
        />
      ))}

      {[0, 1, 2].map((i) => (
        <motion.div
          key={`nb-${i}`}
          className="absolute w-1.5 h-3 bg-red-400 rounded-sm shadow-[0_0_10px_rgba(248,113,113,0.6)]"
          style={{ left: 'calc(50% + 6px)', top: `calc(50% + ${24 + (i * 20)}px)` }}
        />
      ))}
      
      <motion.div
        className="absolute w-4 h-2 bg-blue-400 rounded-sm shadow-[0_0_15px_rgba(96,165,250,0.8)] z-20"
        style={{ top: 'calc(50% + 6px)' }}
        animate={{ x: [-300, 300] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
      />
    </div>
  );
};

export function Work() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProject = projects[activeIdx];

  return (
    <section id="work" className="py-24 px-6 md:px-12 relative z-10 border-t border-[#24242b] bg-[#050506]/40 backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-[#F5F5F5]">
            SELECTED WORK
          </h2>
          <span className="text-sm font-bold tracking-widest text-[var(--accent-light)]">
            03 PROJECTS
          </span>
        </motion.div>

        {/* Compact Showcase Area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:h-[600px]">
          
          {/* Navigation Sidebar */}
          <div className="flex flex-row lg:flex-col gap-4 lg:w-1/4 overflow-x-auto no-scrollbar pb-4 lg:pb-0">
            {projects.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex-shrink-0 text-left px-6 py-4 rounded-xl border transition-all duration-300 ${
                  activeIdx === idx 
                  ? "bg-white/10 border-white/20 shadow-lg" 
                  : "bg-transparent border-transparent hover:bg-white/5"
                }`}
              >
                <div className="text-xs font-bold tracking-widest mb-1 opacity-50">
                  0{idx + 1}
                </div>
                <div className={`text-lg md:text-xl font-bold uppercase tracking-wide ${activeIdx === idx ? "text-[#F5F5F5]" : "text-white/70"}`}>
                  {project.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Project Detail */}
          <div className="lg:w-3/4 h-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full flex flex-col rounded-2xl border border-[#24242B] bg-[#0D0D10] overflow-hidden shadow-2xl"
              >
                
                {/* Visual Area (Top 60-70%) */}
                <div className="relative w-full h-[300px] lg:h-[400px] border-b border-white/10 bg-[#111]">
                  {activeProject.id === "lumen-books" || activeProject.id === "anda-vyapar" ? (
                    <Image 
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      className="object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />
                  ) : activeProject.id === "swarm-traffic" ? (
                    <SwarmTrafficVisual />
                  ) : null}
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                      {activeProject.category}
                    </span>
                  </div>
                </div>

                {/* Details Area (Bottom 30-40%) */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2">{activeProject.title}</h3>
                    <p className="text-sm md:text-base text-[#A0A0A8] font-medium max-w-2xl">
                      {activeProject.shortDescription}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-6">
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.slice(0, 4).map(tech => (
                        <span key={tech} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white/5 border border-white/10 text-white/60 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                      {activeProject.githubUrl && (
                        <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors">
                          <GithubIcon size={16} /> GITHUB
                        </a>
                      )}
                      {activeProject.liveUrl && (
                        <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold tracking-widest text-[var(--accent-light)] hover:text-white transition-colors">
                          <ExternalLink size={16} /> LIVE
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
