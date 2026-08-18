"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Systems", href: "#systems" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple scroll spy
      const sections = links.map(link => link.name.toLowerCase());
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      if (window.scrollY < 100) {
        current = ""; // At top
      }
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050505]/70 backdrop-blur-md border-b border-white/5 shadow-lg" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="#home" className="text-xl font-black tracking-widest uppercase hover:text-[var(--accent)] transition-colors">
          SD.
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm">
          {links.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a 
                key={link.name}
                href={link.href}
                className={`text-[12px] font-bold tracking-[0.15em] uppercase transition-all duration-300 relative px-2 py-1 ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--accent)] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>
        
        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2 text-white bg-white/5 rounded-md border border-white/10"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-[#050505]/95 z-50 flex flex-col pt-24 px-8"
          >
            <button 
              className="absolute top-6 right-6 p-2 text-white bg-white/5 rounded-md border border-white/10"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
            <nav className="flex flex-col gap-6 mt-8">
              {links.map((link, i) => {
                const isActive = activeSection === link.name.toLowerCase();
                return (
                  <motion.a 
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`text-3xl font-black tracking-widest uppercase border-b border-white/5 pb-4 flex items-center justify-between ${
                      isActive ? "text-white" : "text-white/50"
                    }`}
                  >
                    {link.name}
                    {isActive && <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />}
                  </motion.a>
                );
              })}
            </nav>
            
            <div className="mt-auto mb-12 flex justify-center gap-6">
              <a href="https://github.com/shreydarshan" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-xs tracking-widest font-bold">GITHUB</a>
              <a href="https://linkedin.com/in/shrey-darshan-69431732a" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-xs tracking-widest font-bold">LINKEDIN</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
