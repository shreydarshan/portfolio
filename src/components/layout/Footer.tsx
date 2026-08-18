export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--charcoal)] text-white/50 py-8 px-6 md:px-12 border-t border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm font-bold tracking-widest uppercase">
          &copy; {currentYear} Shrey Darshan
        </div>
        
        <div className="text-xs font-medium tracking-widest uppercase">
          Designed & Built with Next.js & Three.js
        </div>
      </div>
    </footer>
  );
}
