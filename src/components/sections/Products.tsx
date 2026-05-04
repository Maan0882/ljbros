"use client";

import { motion } from "framer-motion";

const products = [
  {
    class: "NP2",
    title: "Light Utility",
    usage: "Non-pressure drainage and irrigation systems.",
    dim: "150mm - 1200mm",
  },
  {
    class: "NP3",
    title: "Medium Infrastructure",
    usage: "Culverts and road crossings with medium traffic.",
    dim: "300mm - 1800mm",
  },
  {
    class: "NP4",
    title: "Heavy Engineering",
    usage: "Highways and extreme load-bearing applications.",
    dim: "300mm - 2000mm",
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-foreground text-sm font-black uppercase tracking-[0.2em]">Precision Inventory</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl text-foreground leading-tight tracking-tight font-black">
              Product <span className="text-gradient">Portfolio.</span>
            </h2>
          </div>
          <p className="text-lg text-muted font-semibold max-w-sm leading-relaxed border-l-4 border-border pl-8">
            Manufactured to exacting IS:458 standards for maximum structural integrity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border-border">
          {products.map((item, index) => (
            <motion.div
              key={item.class}
              initial={{ opacity: 1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 lg:p-10 border-b last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 border-border hover:bg-secondary/20 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Animated Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="relative z-10 flex flex-col h-full flex-1">
                <div className="mb-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent px-3 py-1 bg-accent/5 border border-accent/20 rounded-full">
                      Series {item.class}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-muted group-hover:bg-accent transition-colors" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl mb-4 text-foreground font-black tracking-tighter transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed font-semibold transition-colors duration-500">
                    {item.usage}
                  </p>
                </div>

                <div className="mt-auto space-y-6 pt-6 border-t border-border transition-colors duration-500">
                  <div className="flex justify-between items-center group/spec">
                    <span className="text-[10px] uppercase tracking-widest font-black text-muted group-hover:text-foreground/80">Specifications</span>
                    <span className="text-xs font-black text-foreground group-hover:text-accent transition-colors">{item.dim}</span>
                  </div>
                  <div className="flex justify-between items-center group/spec">
                    <span className="text-[10px] uppercase tracking-widest font-black text-muted group-hover:text-foreground/80">Standards</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      <span className="text-xs font-black text-foreground transition-colors">IS:458</span>
                    </div>
                  </div>
                </div>

                {/* Decorative scanning line on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/20 blur-[1px] animate-[scan_3s_linear_infinite]" />
                </div>
              </div>
              
              {/* Background Number */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center pointer-events-none select-none overflow-hidden translate-y-1/4">
                <div className="text-[6rem] lg:text-[8rem] font-black text-foreground/[0.03] group-hover:text-foreground/[0.05] transition-all duration-700 group-hover:scale-110">
                  {item.class}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
