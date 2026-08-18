"use client";

import { motion } from "framer-motion";
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
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>
      
      {/* Horizontal Road */}
      <div className="absolute w-full h-24 bg-[#111116] border-y border-white/10 flex items-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
         {/* Lanes */}
         <div className="w-full h-1 border-t-2 border-dashed border-white/20"></div>
      </div>
      
      {/* Vertical Road */}
      <div className="absolute h-full w-24 bg-[#111116] border-x border-white/10 flex justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
         {/* Lanes */}
         <div className="h-full w-1 border-l-2 border-dashed border-white/20"></div>
      </div>
      
      {/* Intersection Node */}
      <div className="absolute w-6 h-6 bg-indigo-500/10 rounded-sm border border-indigo-500/30 flex flex-wrap gap-1 p-1 z-10 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-75"></div>
        <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
      </div>
      
      {/* 
        Simulating deterministic lane traffic.
        Lane 1: Eastbound (bottom half of horizontal road)
        Lane 2: Westbound (top half of horizontal road)
        Lane 3: Southbound (left half of vertical road)
        Lane 4: Northbound (right half of vertical road)
      */}
      
      {/* Eastbound Vehicles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`eb-${i}`}
          className="absolute w-3 h-1.5 bg-white/80 rounded-sm shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          style={{ top: 'calc(50% + 6px)' }}
          animate={{ x: [-200 - (i * 100), 200 + (i * 50)] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: i * 1.5 }}
        />
      ))}

      {/* Westbound Vehicles */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`wb-${i}`}
          className="absolute w-3 h-1.5 bg-white/80 rounded-sm shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          style={{ top: 'calc(50% - 12px)' }}
          animate={{ x: [300 + (i * 120), -300 - (i * 60)] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: i * 1.2 }}
        />
      ))}

      {/* Southbound Vehicles (Waiting at Red Light) */}
      {[0, 1].map((i) => (
        <motion.div
          key={`sb-${i}`}
          className="absolute w-1.5 h-3 bg-red-400 rounded-sm shadow-[0_0_10px_rgba(248,113,113,0.6)]"
          style={{ 
            left: 'calc(50% - 12px)',
            // Fixed positions waiting at the intersection line
            top: `calc(50% - ${24 + (i * 20)}px)` 
          }}
        />
      ))}

      {/* Northbound Vehicles (Waiting at Red Light) */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`nb-${i}`}
          className="absolute w-1.5 h-3 bg-red-400 rounded-sm shadow-[0_0_10px_rgba(248,113,113,0.6)]"
          style={{ 
            left: 'calc(50% + 6px)',
            // Fixed positions waiting at the intersection line
            top: `calc(50% + ${24 + (i * 20)}px)` 
          }}
        />
      ))}
      
      {/* Priority/Emergency Vehicle (Blue Glow) */}
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
  return (
    <section id="work" className="py-16 md:py-24 px-6 md:px-12 relative bg-[var(--background)]">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between border-b border-[var(--charcoal)]/10 pb-6"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            SELECTED WORK
          </h2>
          <span className="text-sm font-bold tracking-widest text-[var(--accent)] hidden sm:block">
            03 FEATURED PROJECTS
          </span>
        </motion.div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <div className="text-xs font-bold tracking-widest text-[var(--accent)]">
                  0{index + 1} — {project.title.toUpperCase()}
                </div>
                <p className="text-sm font-medium tracking-wide text-[var(--foreground)]/60">
                  {project.category}
                </p>
              </div>

              {/* Project Visual */}
              <div className="relative w-full aspect-video bg-[var(--charcoal)]/5 overflow-hidden rounded-md border border-[var(--charcoal)]/10 shadow-sm">
                {project.id === "lumen-books" || project.id === "anda-vyapar" ? (
                   // If the user hasn't added the image yet, Next.js Image component will throw an error or show broken image.
                   // We will use standard img tag with an error fallback, or just next/image assuming the user places it.
                   // To ensure it doesn't break development before the user adds the files, we provide a clean fallback.
                   <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
                     <Image 
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                        onError={(e) => {
                          // Hide the broken image icon if the image doesn't exist yet
                          e.currentTarget.style.display = 'none';
                        }}
                     />
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 -z-10">
                        <p className="text-sm uppercase tracking-widest font-bold">Image Placeholder</p>
                        <p className="text-xs mt-2">Save image to {project.image}</p>
                     </div>
                   </div>
                ) : project.id === "swarm-traffic" ? (
                   <SwarmTrafficVisual />
                ) : null}
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <p className="text-lg md:text-xl font-medium leading-relaxed text-[var(--foreground)]/90">
                    {project.shortDescription}
                  </p>
                </div>
                
                <div className="lg:col-span-4 flex flex-col gap-6 lg:items-end">
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {project.technologies.slice(0, 5).map(tech => (
                      <span key={tech} className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-[var(--charcoal)]/5 text-[var(--charcoal)] rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6 mt-1">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold tracking-wider hover:text-[var(--accent)] transition-colors">
                        <GithubIcon size={16} /> GITHUB
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold tracking-wider hover:text-[var(--accent)] transition-colors">
                        <ExternalLink size={16} /> LIVE DEMO
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
