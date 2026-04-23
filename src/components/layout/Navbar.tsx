"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-4 lg:py-8"}`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="text-2xl font-serif tracking-tighter hover:opacity-70 transition-opacity">
          LJ Bros<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {["Home", "About", "Products"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] lg:text-[15px] uppercase tracking-[0.2em] font-bold hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
          
          <a
            href="#contact"
            className="px-6 py-2.5 bg-primary text-background text-[12px] lg:text-[14px] uppercase tracking-[0.2em] font-bold rounded-lg hover:bg-accent hover:text-white transition-all shadow-md"
          >
            Enquire
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted && (theme === "dark" ? <Sun size={20} className="text-accent" /> : <Moon size={20} />)}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            {mounted && (theme === "dark" ? <Sun size={20} className="text-accent" /> : <Moon size={20} />)}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-background border-t border-border p-8 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6 text-center">
              {["Home", "About", "Products"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xl font-serif text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 px-8 py-4 bg-primary text-background text-sm font-bold uppercase tracking-widest rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Enquire
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
