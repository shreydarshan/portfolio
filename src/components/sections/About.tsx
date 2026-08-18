"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12 bg-white relative z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-[var(--charcoal)]"
            >
              ABOUT <span className="text-[var(--accent)]">ME</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full aspect-square max-w-md rounded-lg overflow-hidden bg-gray-100 shadow-md border border-gray-200"
            >
              {/* If image missing, Next.js Image throws error in dev. The onError trick prevents breaking the layout */}
              <Image 
                src="/images/profile.jpg"
                alt="Shrey Darshan"
                fill
                className="object-cover"
                onError={(e) => e.currentTarget.style.display = 'none'}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 -z-10 bg-gray-50">
                <p className="text-sm uppercase tracking-widest font-bold">Profile Picture</p>
                <p className="text-xs mt-2">Save as /images/profile.jpg</p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col justify-center pt-2 lg:pt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert"
            >
              <p className="text-xl md:text-2xl leading-relaxed font-medium text-[var(--foreground)]/80">
                I am a B.Tech Computer Science & Engineering student specializing in Artificial Intelligence & Machine Learning, interested in building practical software and intelligent systems.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed font-medium text-[var(--foreground)]/80 mt-6">
                My work combines programming, data, machine learning and software development to solve real-world problems.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-12 text-[var(--foreground)]/70 uppercase tracking-widest text-xs font-bold border-t border-[var(--charcoal)]/10 pt-8">
                <div className="flex flex-col gap-2">
                  <span className="text-[var(--accent)]">01 /</span>
                  <span>AI & ML</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[var(--accent)]">02 /</span>
                  <span>Software Development</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[var(--accent)]">03 /</span>
                  <span>Problem Solving</span>
                </div>
              </div>
              
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
