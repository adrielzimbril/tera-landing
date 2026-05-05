"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Featured() {
  return (
    <section className="p-2 md:p-4 pb-24 mb-4 relative bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-[60vh] md:h-[80vh] rounded-[2rem] overflow-hidden relative group"
      >
        <Image 
          src="/assets/featured_jungle_villa.png" 
          alt="Jungle Villa Housing" 
          fill
          sizes="100vw"
          className="object-cover scale-105 transition-transform duration-[1.5s] group-hover:scale-100" 
        />
        
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

        <div className="absolute top-8 left-8 text-white text-xs font-semibold tracking-widest uppercase pointer-events-none">
          Featured Work
        </div>
        <div className="absolute top-8 right-8 text-white text-xs font-semibold tracking-widest uppercase pointer-events-none">
          Tera
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[8vw] md:text-[6vw] leading-none tracking-tighter font-semibold text-white text-center uppercase drop-shadow-lg"
          >
            ALPINE RETREAT<br/>DEVELOPMENT
          </motion.h2>
        </div>

        <div className="absolute bottom-8 left-8 flex gap-3">
          <span className="px-4 py-1.5 rounded-full border border-white/30 text-white text-xs font-medium uppercase tracking-widest backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-colors">Hospitality Asset</span>
        </div>

        <button className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer">
          <ArrowUpRight className="w-6 h-6" />
        </button>
      </motion.div>
    </section>
  );
}
