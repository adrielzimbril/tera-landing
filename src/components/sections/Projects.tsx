"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    title: "Berlin Mitte Tower",
    category: "Mixed-Use",
    description: "A high-value skyscraper in Berlin's central district, combining structural prestige with premium yields.",
    image: "/assets/project_skyscraper_1777960712196.png",
  },
  {
    id: "02",
    title: "Nordic Waterfront",
    category: "Residential",
    description: "Luxury waterfront development in Oslo, managed as a prime residential asset for institutional investors.",
    image: "/assets/project_museum_1777960679580.png",
  },
  {
    id: "03",
    title: "Alpine Retreat",
    category: "Hospitality",
    description: "Five-star mountain resort development focusing on structural innovation and exclusive placement.",
    image: "/assets/project_observatory_1777960697792.png",
  },
  {
    id: "04",
    title: "London Glass Pavilion",
    category: "Commercial",
    description: "Strategic office and retail asset in London's financial district, optimized for long-term valuation.",
    image: "/assets/project_commercial.png",
  },
];

export default function Projects() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % PROJECTS.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    const card = rail?.querySelector<HTMLElement>("[data-project-card]");
    if (!rail || !card) return;

    const gap = 24;
    rail.scrollTo({
      left: active * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  }, [active]);

  return (
    <>
      <section id="projects" className="bg-white py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">02</span>
                <div className="h-px w-8 bg-gray-200"></div>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">Portfolio</span>
              </div>
              <h2 className="text-[clamp(2.5rem,8vw,4rem)] font-semibold leading-[0.9] tracking-tight uppercase">
                ASSET <span className="text-gray-300">PORTFOLIO</span>
              </h2>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setActive((current) => (current - 1 + PROJECTS.length) % PROJECTS.length)}
                className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer group"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              <button 
                onClick={() => setActive((current) => (current + 1) % PROJECTS.length)}
                className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-all cursor-pointer group"
                aria-label="Next project"
              >
                <ArrowRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="relative">
            <div
              ref={railRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-12 no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {PROJECTS.map((project, index) => (
                <motion.article
                  key={project.id}
                  data-project-card
                  className="min-w-[85vw] md:min-w-[700px] lg:min-w-[850px] group relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 border border-gray-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-cover transition-transform duration-[1.5s] ease-out ${active === index ? 'scale-100' : 'scale-110 opacity-70'}`}
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-4 py-2 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* Progress Bar (Visible only for active) */}
                    <AnimatePresence>
                      {active === index && (
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 5, ease: "linear" }}
                          className="absolute bottom-0 left-0 h-1 w-full bg-black z-20 origin-left"
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="max-w-xl">
                      <h3 className="text-3xl md:text-4xl font-semibold uppercase mb-3 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-300 transition-all">
                      View Project <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2 mt-8">
              {PROJECTS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-1 transition-all duration-500 ${active === index ? 'w-12 bg-black' : 'w-4 bg-gray-200 hover:bg-gray-400'} cursor-pointer`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
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
