"use client";

import { useRef, MouseEvent, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";

const slides = [
  {
    id: 1,
    title1: "LANDMARK",
    title2: "ASSETS",
    subtitle: "Strategic real estate development focused on high-yield landmark structures in prime urban locations.",
    image: "/assets/hero_modern_villa.png",
    tags: ["Development", "Institutional"]
  },
  {
    id: 2,
    title1: "PREMIUM",
    title2: "PORTFOLIO",
    subtitle: "Managing a curated collection of high-value architectural assets for global institutional investors.",
    image: "/assets/project_commercial.png",
    tags: ["Investment", "Asset Management"]
  },
  {
    id: 3,
    title1: "STRUCTURAL",
    title2: "PRESTIGE",
    subtitle: "Structural innovation meeting market intelligence to maximize long-term asset value.",
    image: "/assets/featured_jungle_villa.png",
    tags: ["Strategy", "Premium"]
  }
];

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position values for the tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth the mouse movement
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse position to rotation (-3 to 3 degrees)
  const rotateX = useTransform(mouseY, [-1, 1], [3, -3]);
  const rotateY = useTransform(mouseX, [-1, 1], [-3, 3]);

  // Map mouse position to image movement (parallax)
  const imageMoveX = useTransform(mouseX, [-1, 1], [-20, 20]);
  const imageMoveY = useTransform(mouseY, [-1, 1], [-20, 20]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    
    // Calculate relative mouse position (-1 to 1)
    const relativeX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relativeY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <>
      <section className="relative w-full p-2 md:p-4 h-[95vh] md:h-[90vh] flex flex-col">
        <div 
          ref={wrapperRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setIsHovered(true)}
          className="relative w-full h-full rounded-[2.5rem] overflow-hidden group bg-[#0a0a0a]"
        >
          {/* Parallax Image Layer */}
          <motion.div 
            style={{ 
              rotateX, 
              rotateY, 
              x: imageMoveX,
              y: imageMoveY,
              scale: isHovered ? 1.15 : 1.1 
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image 
                  src={slides[activeSlide].image}
                  alt={slides[activeSlide].title1} 
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover" 
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
          </motion.div>

          {/* Static UI Layer */}
          <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">
            {/* Navigation Placeholder - Removed, handled by global Navbar */}
            <div className="w-full h-24 pointer-events-none" />

            {/* Center Hero Text */}
            <div className="flex-1 flex flex-col items-center justify-center px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center"
                >
                  <h1 className="text-[12vw] md:text-[8vw] leading-[0.82] tracking-tighter font-bold text-white text-center uppercase">
                    <span className="block text-white/90">
                      {slides[activeSlide].title1}
                    </span>
                    <span className="block">
                      {slides[activeSlide].title2}
                    </span>
                  </h1>
                  <p className="mt-8 md:mt-10 text-white/70 text-sm md:text-lg max-w-lg text-center font-medium leading-relaxed">
                    {slides[activeSlide].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Area */}
            <div className="w-full p-6 md:p-12 flex justify-between items-end">
              <div className="flex gap-4 pointer-events-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    className="flex gap-4"
                  >
                    {slides[activeSlide].tags.map((tag, idx) => (
                      <span key={idx} className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-[0.2em] cursor-default">
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex gap-3 pointer-events-auto">
                <button 
                  onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                  className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer group"
                >
                  <ArrowLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                  className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-all cursor-pointer group"
                >
                  <ArrowRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 pointer-events-auto">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
                    activeSlide === idx ? "w-12 bg-white" : "w-3 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intersection Line */}
      <div className="w-full border-t border-gray-100 relative">
        <div className="dot top-0 left-0"></div>
        <div className="dot top-0 left-full"></div>
      </div>
    </>
  );
}
