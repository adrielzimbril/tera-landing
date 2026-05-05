"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { X, Menu, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Project", href: "#projects" },
    { name: "Service", href: "#services" },
    { name: "Studio", href: "#process" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'} ${isOpen ? 'z-[120]' : 'z-[100]'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between pointer-events-auto">
            {/* Logo */}
            <div className="flex items-center gap-2 text-white font-bold text-2xl tracking-tighter cursor-pointer group">
              <div className="relative w-9 h-9">
                <Image src="/logo.svg" alt="Tera logo" fill sizes="40px" className="group-hover:rotate-12 transition-transform duration-500 invert brightness-0" />
              </div>
              <span className="hidden sm:block">Tera</span>
            </div>

            {/* Desktop Menu - Visible only on Desktop */}
            <div className="hidden lg:flex items-center gap-8 bg-white backdrop-blur-2xl rounded-full px-10 py-3.5 text-black text-[11px] font-bold uppercase tracking-[0.2em]">
              {navLinks.map((link, idx) => (
                <div key={link.name} className="flex items-center gap-8">
                  <a href={link.href} className="hover:text-black/70 transition-colors">{link.name}</a>
                  {idx !== navLinks.length - 1 && <span className="text-white/20">/</span>}
                </div>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button className="hidden md:block bg-white text-black px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 cursor-pointer">
                Let's Talk
              </button>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer relative z-[110]"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-black z-[105] flex flex-col justify-center px-10"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-white text-5xl font-bold uppercase tracking-tighter"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 bg-white text-black px-8 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em]"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
