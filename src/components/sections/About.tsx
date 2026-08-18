"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative z-10 bg-[#050506]/40 backdrop-blur-sm border-t border-[#24242b]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Text Area (Asymmetric, takes 7 cols on large screens) */}
          <div className="lg:col-span-7 flex flex-col gap-12 lg:pr-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-[#F5F5F5]">
                ABOUT <span className="text-[#A0A0A8]">ME</span>
              </h2>
              <div className="w-16 h-[2px] bg-[var(--accent)]"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <p className="text-2xl md:text-4xl leading-tight font-medium text-[#F5F5F5] tracking-tight">
                I am a B.Tech Computer Science student specializing in <span className="text-[var(--accent-light)]">Artificial Intelligence & Machine Learning</span>.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#A0A0A8]">
                My work combines programming, data, machine learning and software development to solve real-world problems. I am driven by the process of turning complex data into actionable intelligence and reliable systems.
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-10">
                <div className="flex flex-col gap-3 group">
                  <span className="text-[var(--accent)] font-mono text-xs tracking-widest">01</span>
                  <span className="text-[#F5F5F5] uppercase font-bold tracking-wider text-sm group-hover:text-[var(--accent-light)] transition-colors">AI / ML</span>
                </div>
                <div className="flex flex-col gap-3 group">
                  <span className="text-[var(--accent)] font-mono text-xs tracking-widest">02</span>
                  <span className="text-[#F5F5F5] uppercase font-bold tracking-wider text-sm group-hover:text-[var(--accent-light)] transition-colors">Software Dev</span>
                </div>
                <div className="flex flex-col gap-3 group">
                  <span className="text-[var(--accent)] font-mono text-xs tracking-widest">03</span>
                  <span className="text-[#F5F5F5] uppercase font-bold tracking-wider text-sm group-hover:text-[var(--accent-light)] transition-colors">Problem Solving</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="p-8 border border-[#24242b] rounded-2xl glass-panel bg-[#0d0d10]/80 hover:bg-[#111117] transition-colors">
                  <h3 className="text-[var(--accent-light)] font-bold tracking-widest uppercase text-xs mb-3">Background</h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    With a foundation in Computer Science and Engineering, I focus on the intersection of theoretical machine learning and practical software architecture.
                  </p>
                </div>
                <div className="p-8 border border-[#24242b] rounded-2xl glass-panel bg-[#0d0d10]/80 hover:bg-[#111117] transition-colors">
                  <h3 className="text-[var(--accent-light)] font-bold tracking-widest uppercase text-xs mb-3">Approach</h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    I believe the best AI systems are invisible. My goal is to build intelligent software that solves complex problems without overwhelming the user.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Image Area (Asymmetric, takes 5 cols, sticky on desktop) */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-32 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden glass-panel group"
            >
              {/* Image with hover effect (grayscale to color) */}
              <Image 
                src="/images/profile.jpeg"
                alt="Shrey Darshan"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out opacity-80 group-hover:opacity-100 group-hover:scale-105"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
              {/* Fallback styling if image is missing */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/40 -z-10 bg-[#0a0a0a]">
                <p className="text-sm uppercase tracking-widest font-bold">Profile Picture</p>
                <p className="text-xs mt-2">Place image at /images/profile.jpeg</p>
              </div>
              
              {/* Decorative Frame Elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/40 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/40 transition-transform group-hover:-translate-x-1 group-hover:translate-y-1"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/40 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
