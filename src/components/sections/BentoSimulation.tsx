"use client";

import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Terminal, Send, Box, Activity, Sliders, ChevronRight, Layers, Compass, Globe, ArrowRight, TrendingUp, Landmark, Map } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const PIPELINE_STATUS = [
  "Site acquisition: Berlin-Mitte - COMPLETED",
  "Environmental permitting: Phase 2 - IN PROGRESS",
  "Financing secured: €42.5M - APPROVED",
  "Architectural tender: Shortlist selected",
  "Market analysis: Bullish forecast"
];

export default function BentoSimulation() {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % PIPELINE_STATUS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="studio" className="py-24 md:py-40 px-6 md:px-20 relative bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col mb-20">
          <div className="flex items-center gap-6 mb-8">
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400">04</span>
            <div className="h-px w-10 bg-gray-200"></div>
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400">Development</span>
          </div>
          <h2 className="text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[0.85] tracking-tighter uppercase max-w-4xl">
            PRECISION <span className="text-gray-300">DEVELOPMENT</span> <br /> 
            & ASSET OPTIMIZATION
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[800px]">
          
          {/* Main Asset View (Big Card) */}
          <motion.div 
            className="lg:col-span-8 bg-white rounded-[3rem] border border-gray-100 overflow-hidden relative group p-1 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full rounded-[2.8rem] overflow-hidden">
              <Image 
                src="/assets/project_skyscraper_1777960712196.png" 
                alt="Real Estate Development" 
                fill 
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
              
              {/* Overlay UI */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Active Asset</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                    <Landmark className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="max-w-md text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Map className="w-4 h-4 text-white/50" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Berlin, Germany</span>
                    </div>
                    <h3 className="text-4xl font-bold uppercase tracking-tighter mb-4">Mitte_Tower_Complex</h3>
                    <p className="text-white/60 text-sm font-medium leading-relaxed">
                      Transforming the urban landscape through high-value architectural assets. 
                      Strategic location, structural excellence, and premium yields.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 items-end">
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Asset Valuation</p>
                      <p className="text-2xl font-bold text-white tracking-tighter">€148.5M</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Projected ROI</p>
                      <p className="text-2xl font-bold text-[#86efac] tracking-tighter">+24.5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Cards Stack */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Pipeline Log Card */}
            <motion.div 
              className="flex-1 bg-black rounded-[3rem] p-10 flex flex-col justify-between relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-start z-10">
                <Terminal className="w-6 h-6 text-zinc-500" />
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Development_Pipeline</span>
              </div>

              <div className="mt-8 space-y-3 z-10">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={logIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="text-white font-mono text-xs md:text-sm tracking-tight"
                  >
                    <span className="text-zinc-600 mr-3">❯</span> {PIPELINE_STATUS[logIndex]}
                  </motion.p>
                </AnimatePresence>
                <p className="text-zinc-800 font-mono text-xs md:text-sm tracking-tight">❯ Tracking landmark acquisitions...</p>
              </div>

              <div className="mt-10 p-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center gap-4 z-10">
                <div className="flex-1 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Inquire_Availability</div>
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-zinc-800/50 rounded-full blur-[60px]" />
            </motion.div>

            {/* Yield / Market Card */}
            <motion.div 
              className="flex-1 bg-white border border-gray-100 rounded-[3rem] p-10 flex flex-col justify-between group hover:border-black transition-colors shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <Activity className="w-5 h-5 text-gray-200 group-hover:text-black animate-pulse" />
              </div>

              <div>
                <h4 className="text-2xl font-bold uppercase tracking-tighter mb-2">Market_Synergy</h4>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest leading-relaxed">
                  Optimizing portfolio yields <br /> through strategic asset selection.
                </p>
              </div>

              <div className="flex items-end justify-between border-t border-gray-100 pt-6">
                <div className="flex gap-1.5">
                  {[0.6, 0.9, 0.4, 0.8, 0.7].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scaleY: 0.2 }}
                      animate={{ scaleY: h }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2, repeatType: "reverse" }}
                      className="w-1.5 bg-gray-200 group-hover:bg-black rounded-full origin-bottom"
                      style={{ height: '40px' }}
                    />
                  ))}
                </div>
                <div className="text-right">
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Annual Yield</span>
                  <span className="text-3xl font-bold tracking-tighter">18.2%</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Banner */}
        <motion.div 
          className="mt-4 bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-black transition-colors shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-black">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-tight">Access Institutional Portfolio</p>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-1">Exclusively for qualified investors</p>
            </div>
          </div>
          <button className="w-full md:w-auto bg-black text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all">
            Investor Portal <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
