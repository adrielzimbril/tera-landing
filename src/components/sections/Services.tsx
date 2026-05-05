"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const services = [
  {
    id: "01",
    title: "Development",
    description: "Urban acquisition and development models for prime landmark structures in high-value markets.",
    image: "/assets/service_exterior.png",
  },
  {
    id: "02",
    title: "Investment",
    description: "Maximizing long-term asset valuation through strategic architectural positioning and structural prestige.",
    image: "/assets/fb6415fd-bf4d-4ccf-8e9d-7ab445e99207_1600w.jpg",
  },
  {
    id: "03",
    title: "Intelligence",
    description: "Deep market analysis of urban trends and structural potential in elite real estate sectors.",
    image: "/assets/005600e5-f6ab-4e59-bc86-eaeb02797dfa_1600w.jpg",
  },
  {
    id: "04",
    title: "Management",
    description: "Comprehensive asset management for institutional portfolios focusing on landmark architectural assets.",
    image: "/assets/7f78131e-65e9-49b2-aa1f-ccc33e28df9f_1600w.webp",
  }
];

export default function Services() {
  const [activeItem, setActiveItem] = useState(services[0].id);

  return (
    <>
      <section className="py-24 md:py-32 px-6 md:px-20 relative bg-white">
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-6 mb-8">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">03</span>
            <div className="h-px w-8 bg-gray-200"></div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">Expertise</span>
          </div>
          <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold uppercase tracking-tight max-w-2xl leading-[1.1]">
            WE OFFER WIDE RANGE <br /><span className="text-gray-300">OF SERVICES</span>
          </h3>
        </div>

        <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[650px] gap-4">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              layout
              className={`relative overflow-hidden rounded-[2.5rem] cursor-pointer flex flex-col lg:flex-row border border-gray-100 ${
                activeItem === service.id 
                  ? 'flex-[4] h-[450px] lg:h-auto shadow-2xl' 
                  : 'h-24 lg:h-auto lg:flex-1'
              }`}
              onMouseEnter={() => setActiveItem(service.id)}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Background Image */}
              <motion.div layout className="absolute inset-0 w-full h-full">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover transition-all duration-1000 ${
                    activeItem === service.id ? 'scale-100' : 'scale-110 opacity-40 grayscale blur-[2px]'
                  }`} 
                />
                <div className={`absolute inset-0 transition-colors duration-700 ${activeItem === service.id ? 'bg-black/20' : 'bg-black/40 hover:bg-black/20'}`}></div>
              </motion.div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-row lg:flex-col justify-between items-center lg:items-start z-10 pointer-events-none">
                {/* Top Number */}
                <motion.span layout className="text-white font-bold text-2xl tracking-tighter shrink-0">{service.id}</motion.span>
                
                {/* Bottom Text */}
                <div className="flex flex-1 items-end lg:w-full justify-end lg:justify-start overflow-hidden">
                  <AnimatePresence mode="wait">
                    {activeItem === service.id ? (
                      <motion.div 
                        key="active"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-4"
                      >
                        <h4 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tight leading-none">{service.title}</h4>
                        <p className="text-white/80 text-sm md:text-lg max-w-md font-medium leading-relaxed">{service.description}</p>
                      </motion.div>
                    ) : (
                      <motion.h4 
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-white text-xl font-bold uppercase lg:whitespace-nowrap lg:-rotate-90 lg:origin-left lg:mb-24 tracking-widest opacity-60"
                      >
                        {service.title}
                      </motion.h4>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
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
