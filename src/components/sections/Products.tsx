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

        <div className="grid lg:grid-cols-3 gap-0 border-2 border-slate-100">
          {products.map((item, index) => (
            <motion.div
              key={item.class}
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-12 border-b md:border-b-0 md:border-r-2 border-slate-100 hover:bg-slate-50 transition-colors group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-slate-900 font-black text-sm mb-12 flex items-center gap-3 bg-accent/10 w-fit px-4 py-2 rounded-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                  Series {item.class}
                </div>
                
                <h3 className="text-3xl mb-6 text-slate-900 font-black tracking-tight group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-slate-600 mb-16 leading-relaxed font-semibold">
                  {item.usage}
                </p>
                
                <div className="space-y-4 pt-10 border-t-2 border-slate-100">
                  <div className="flex justify-between items-center text-xs uppercase tracking-widest font-black">
                    <span className="text-slate-400">Dimensions</span>
                    <span className="text-slate-900">{item.dim}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs uppercase tracking-widest font-black">
                    <span className="text-slate-400">Certification</span>
                    <span className="text-accent">IS:458 Compliance</span>
                  </div>
                </div>
              </div>
              
              {/* Background Number */}
              <div className="absolute -bottom-10 -right-10 text-[12rem] font-bold text-primary/[0.03] select-none group-hover:text-accent/5 transition-colors">
                {item.class}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
