"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-primary overflow-hidden relative">
      {/* Blueprint lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-accent text-sm font-black uppercase tracking-[0.2em]">Project consultation</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl mb-8 text-background leading-tight tracking-tight font-black transition-colors duration-500">
              Start Your <br />
              <span className="text-accent italic font-light">Precision Build.</span>
            </h2>
            <p className="text-base lg:text-m text-background/60 mb-5 max-w-lg leading-relaxed font-semibold">
              Connect with our technical team to discuss specifications, load-bearing requirements, and logistics for your project.
            </p>
            
            <div className="space-y-8 lg:space-y-12">
              <div className="flex gap-6 lg:gap-8 items-start group">
                <div className="w-12 h-12 lg:w-14 lg:h-14 border-2 border-background/20 flex items-center justify-center text-background flex-shrink-0 group-hover:border-accent transition-colors bg-background/5">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] text-background/40 mb-1 lg:mb-2">Global Headquarters</h4>
                  <p className="text-lg lg:text-xl text-background font-black">Dharmaj, Gujarat, India</p>
                </div>
              </div>
              <div className="flex gap-6 lg:gap-8 items-start group">
                <div className="w-12 h-12 lg:w-14 lg:h-14 border-2 border-background/20 flex items-center justify-center text-background flex-shrink-0 group-hover:border-accent transition-colors bg-background/5">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] text-background/40 mb-1 lg:mb-2">Direct Contact</h4>
                  <p className="text-lg lg:text-xl text-background font-black">+91 999 999 9999</p>
                  <p className="text-lg lg:text-xl text-background font-black">+91 888 888 8888</p>
                </div>
              </div>
              <div className="flex gap-6 lg:gap-8 items-start group">
                <div className="w-12 h-12 lg:w-14 lg:h-14 border-2 border-background/20 flex items-center justify-center text-background flex-shrink-0 group-hover:border-accent transition-colors bg-background/5">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] text-background/40 mb-1 lg:mb-2">Technical Inquiries</h4>
                  <p className="text-lg lg:text-xl text-background font-black">sales@ljbros.com</p>
                </div>
              </div>
            </div>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 1, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-16 bg-card shadow-2xl relative"
          >
            {/* Fine Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-accent -translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-accent translate-x-1 translate-y-1" />

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-foreground">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-secondary border-b-4 border-border px-4 py-4 text-foreground focus:border-accent outline-none transition-all placeholder:text-muted font-bold"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-foreground">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-secondary border-b-4 border-border px-4 py-4 text-foreground focus:border-accent outline-none transition-all placeholder:text-muted font-bold"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-foreground">Project Requirements</label>
                <textarea
                  rows={4}
                  className="w-full bg-secondary border-b-4 border-border px-4 py-4 text-foreground focus:border-accent outline-none transition-all placeholder:text-muted font-bold resize-none"
                  placeholder="Describe your technical specifications..."
                ></textarea>
              </div>

              <button className="w-full py-5 bg-background text-foreground lg:bg-foreground lg:text-background font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-4 group mt-8">
                Request Consultation <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
