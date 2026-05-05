"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "CEO, LUMINA ESTATES",
    content: "Working with Tera was a transformative experience. Their ability to blend structural prestige with strategic urban placement completely reimagined our commercial portfolio. Their approach to landmark assets sets them apart.",
    rating: 5,
  },
  {
    name: "Marcus Thorne",
    role: "PRIVATE CLIENT",
    content: "The team's visionary approach to our landmark development was extraordinary. They created a structure that is both a high-yield asset and a structural masterpiece. True leaders in urban development.",
    rating: 5,
  },
  {
    name: "Arthur Vance",
    role: "Founding Partner, V-Holdings",
    content: "Tera's ability to translate market intelligence into structural prestige is unmatched. Their rigor is visible in every asset and development phase.",
    rating: 5,
  },
  {
    name: "Elena Rossi",
    role: "Chief Architect, Horizon Urban",
    content: "The precision in their architectural narrative gave our project an instant public presence. They understand the weight of landmark structures.",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    const card = rail?.querySelector<HTMLElement>("[data-testimonial-card]");
    if (!rail || !card) return;

    const gap = 32;
    rail.scrollTo({
      left: active * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  }, [active]);

  return (
    <>
      <section id="testimonials" className="bg-black py-24 md:py-32 relative overflow-hidden rounded-[3rem] mx-2 md:mx-4 mb-4">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight uppercase text-white max-w-4xl">
              FIND WHAT OUR <br />
              <span className="text-zinc-600">CLIENTS SAY</span> ABOUT <br />
              US.
            </h2>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setActive((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 text-white transition-all cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setActive((current) => (current + 1) % TESTIMONIALS.length)}
                className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 text-white transition-all cursor-pointer"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="relative">
            <div
              ref={railRef}
              className="flex gap-8 overflow-x-auto scroll-smooth pb-12 no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {TESTIMONIALS.map((t, index) => (
                <motion.article
                  key={t.name}
                  data-testimonial-card
                  className={`min-w-[85vw] md:min-w-[500px] lg:min-w-[550px] p-8 md:p-12 rounded-[2.5rem] border border-zinc-800/50 transition-all duration-700 bg-zinc-900/50 backdrop-blur-sm ${active === index ? 'border-zinc-700 bg-zinc-900/80' : 'opacity-40 grayscale'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Stars */}
                      <div className="flex gap-1 mb-8">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>

                      <p className="text-lg md:text-xl font-medium leading-relaxed tracking-tight text-white mb-12">
                        &ldquo;{t.content}&rdquo;
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-zinc-700 flex-shrink-0 shadow-inner overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-zinc-600 to-zinc-800" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t.name}</h4>
                        <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mt-0.5">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2 mt-4">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-1 transition-all duration-500 rounded-full ${active === index ? 'w-10 bg-white' : 'w-2 bg-zinc-800 hover:bg-zinc-700'} cursor-pointer`}
                  aria-label={`Go to testimonial ${index + 1}`}
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
