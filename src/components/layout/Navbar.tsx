"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-4 lg:py-8"}`}>
      <div className="container-custom px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-serif tracking-tighter hover:opacity-70 transition-opacity">
          LJ Bros<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {["Home", "About", "Products"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] uppercase tracking-[0.2em] font-medium hover:text-accent transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 bg-slate-900 text-white text-[12px] uppercase tracking-[0.2em] font-bold rounded-lg hover:bg-accent transition-all shadow-md"
          >
            Enquire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-t p-8 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6 text-center">
              {["Home", "About", "Products"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xl font-serif"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 px-8 py-4 bg-slate-900 text-white text-sm font-bold uppercase tracking-widest rounded-lg"
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
