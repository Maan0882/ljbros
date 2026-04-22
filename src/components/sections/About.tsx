"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[3px] bg-accent" />
              <span className="text-slate-900 text-sm font-black uppercase tracking-[0.2em]">Engineering Legacy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 lg:mb-10 text-slate-900 leading-tight tracking-tight font-black">
              Defining the <br />
              Standard of <br />
              <span className="text-accent">Strength.</span>
            </h2>
            <p className="text-lg text-slate-700 mb-12 leading-relaxed font-semibold">
              Since 1998, we have mastered the art of reinforced concrete. Our manufacturing facility in Bhiwadi is a testament to precision, utilizing advanced vertical casting technology that exceeds IS:458 requirements.
            </p>
            
            <div className="space-y-5">
              {['ISI Certified Production', 'High-Density V-Casting', 'Automated Curing Systems'].map((item) => (
                <div key={item} className="flex items-center gap-4 text-base font-black text-slate-900">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-8"
          >
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl mt-12">
              <Image src="/images/factory.png" alt="Manufacturing Precision" fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
              <Image src="/images/product.png" alt="Technical Excellence" fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>
            
            {/* Architectural Callout */}
            <div className="col-span-2 p-8 md:p-12 bg-white border border-slate-200 mt-4 md:mt-8">
              <div className="grid md:grid-cols-3 gap-12">
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">99.8%</div>
                  <div className="text-[10px] text-muted font-bold uppercase tracking-widest">Precision Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">1.2M+</div>
                  <div className="text-[10px] text-muted font-bold uppercase tracking-widest">Meters Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">ISO</div>
                  <div className="text-[10px] text-muted font-bold uppercase tracking-widest">Process Quality</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
