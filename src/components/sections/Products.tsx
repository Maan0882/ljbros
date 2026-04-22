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
    <section id="products" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-slate-900 text-sm font-black uppercase tracking-[0.2em]">Precision Inventory</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl text-slate-900 leading-tight tracking-tight font-black">
              Product <span className="text-gradient">Portfolio.</span>
            </h2>
          </div>
          <p className="text-lg text-slate-700 font-semibold max-w-sm leading-relaxed border-l-4 border-slate-200 pl-8">
            Manufactured to exacting IS:458 standards for maximum structural integrity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border border-slate-100">
          {products.map((item, index) => (
            <motion.div
              key={item.class}
              initial={{ opacity: 1, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 lg:p-14 border-b last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 border-slate-100 hover:bg-slate-900 transition-all duration-500 overflow-hidden"
            >
              {/* Animated Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent px-3 py-1 bg-accent/5 border border-accent/20 rounded-full">
                      Series {item.class}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-accent transition-colors" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl mb-6 text-slate-900 font-black tracking-tighter group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-base text-slate-500 group-hover:text-slate-400 leading-relaxed font-semibold transition-colors duration-500">
                    {item.usage}
                  </p>
                </div>

                <div className="mt-auto space-y-6 pt-10 border-t border-slate-100 group-hover:border-slate-800 transition-colors duration-500">
                  <div className="flex justify-between items-center group/spec">
                    <span className="text-[10px] uppercase tracking-widest font-black text-slate-400 group-hover:text-slate-500">Specifications</span>
                    <span className="text-xs font-black text-slate-900 group-hover:text-accent transition-colors">{item.dim}</span>
                  </div>
                  <div className="flex justify-between items-center group/spec">
                    <span className="text-[10px] uppercase tracking-widest font-black text-slate-400 group-hover:text-slate-500">Standards</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      <span className="text-xs font-black text-slate-900 group-hover:text-white transition-colors">IS:458</span>
                    </div>
                  </div>
                </div>

                {/* Decorative scanning line on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/20 blur-[1px] animate-[scan_3s_linear_infinite]" />
                </div>
              </div>
              
              {/* Background Number */}
              <div className="absolute -bottom-8 -right-8 text-[12rem] font-black text-slate-900/[0.03] group-hover:text-accent/[0.05] select-none transition-all duration-700 group-hover:-translate-x-4 group-hover:-translate-y-4">
                {item.class}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
