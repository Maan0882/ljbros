"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
      {/* Structural Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block" />
      <div className="absolute top-0 right-0 w-full h-full lg:w-1/3 bg-primary/[0.02] -z-10" />
      
      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 xl:col-span-8"
          >
            <div className="flex items-center gap-4 mb-6 lg:mb-8">
              <div className="w-10 lg:w-12 h-[2px] bg-accent" />
              <span className="text-slate-900 text-[10px] lg:text-sm font-black uppercase tracking-[0.2em]">
                Excellence in Engineering
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 lg:mb-10 leading-[0.95] font-black text-slate-900 tracking-tighter break-words">
              Precision <br />
              <span className="text-gradient">Infrastructure.</span>
            </h1>
            
            <p className="text-base lg:text-xl text-slate-700 max-w-xl mb-10 lg:mb-12 leading-relaxed font-semibold">
              LJ Bros delivers high-density reinforced concrete solutions for the most demanding national infrastructure projects. Engineered for decades of performance.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <a
                href="#products"
                className="px-10 py-5 bg-slate-900 text-white text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-accent transition-all shadow-xl shadow-slate-200"
              >
                View Inventory
              </a>
              <div className="flex items-center gap-6 px-6 py-3 bg-slate-50 border border-slate-100 rounded-sm">
                <div>
                  <div className="text-base font-black text-slate-900">IS:458 Certified</div>
                  <div className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Quality Assurance</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 xl:col-span-4"
          >
            <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl group">
              <Image
                src="/images/hero.png"
                alt="Precision RCC Pipes"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              
              {/* Overlay Stat */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 p-6 lg:p-8 bg-white/95 backdrop-blur-sm border-l-4 border-accent">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1 tracking-tighter">25+</div>
                <div className="text-[9px] lg:text-[10px] text-muted font-bold uppercase tracking-[0.2em]">Years of Manufacturing</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Text */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="rotate-90 origin-left text-[10px] uppercase tracking-[0.5em] text-slate-300 font-bold">
          Precision Engineering // Concrete Solutions
        </div>
      </div>
    </section>
  );
}
