"use client";

import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function CTA() {
  return (
    <>
      <section id="cta" className="py-24 md:py-40 relative overflow-hidden bg-white">
        {/* Navigation Placeholder - Removed, handled by global Navbar */}
        <div className="w-full flex items-center justify-between p-6 md:p-10 opacity-0 pointer-events-none">
          <div className="flex items-center gap-2 text-white font-semibold text-2xl tracking-tight">
            <img src="/logo.svg" alt="Tera logo" width={36} height={36} />
            Tera
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
                Contact Us
              </div>
              <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[0.9] tracking-tighter uppercase mb-12">
                HAVE AN <span className="text-gray-300">ASSET?</span> <br /> 
                LET'S SCALE <br /> 
                IT TOGETHER.
              </h2>
              
              <div className="grid gap-8 mt-12">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Email us</p>
                    <a href="mailto:invest@tera.development" className="text-xl font-semibold">invest@tera.development</a>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Call us</p>
                    <a href="tel:+493088913344" className="text-xl font-semibold">+49 30 88913344</a>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm border border-gray-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Visit us</p>
                    <p className="text-xl font-semibold">Kurfürstendamm 21, 10719 Berlin, Germany</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square md:aspect-[4/5] lg:aspect-square rounded-[3rem] overflow-hidden group shadow-2xl"
            >
              <img 
                src="/assets/project_skyscraper_1777960712196.png" 
                alt="Studio interior" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 flex items-center justify-center">
                <button className="bg-white text-black px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-110 active:scale-95 transition-all shadow-2xl flex items-center gap-3">
                  Discuss Acquisition <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intersection Line */}
      <div className="w-full border-t border-gray-200/60 relative">
        <div className="dot top-0 left-0"></div>
        <div className="dot top-0 left-full"></div>
      </div>
    </>
  );
}
