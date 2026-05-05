"use client";

import { motion } from "motion/react";
import { Instagram, X, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 md:pt-24 pb-8 px-6 md:px-20 relative rounded-t-[3rem] mt-20 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 text-white font-semibold text-3xl tracking-tight mb-8">
              <Image src="/logo.svg" alt="Tera logo" width={40} height={40} className="invert brightness-0" />
              Tera
            </div>
            <p className="text-white/50 max-w-sm mb-8 font-medium">
              We develop landmark real estate and high-value architectural assets for the modern era.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white/70 hover:text-black">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white/70 hover:text-black">
                <X className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white/70 hover:text-black">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-4">Studio</h4>
            <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">About Us</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">Our Team</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">Careers</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">Contact</a>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-4">Portfolio</h4>
            <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">Projects</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">Services</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">Journal</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors font-medium">Awards</a>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-semibold uppercase tracking-widest text-sm mb-4">Contact</h4>
            <p className="text-white/60 font-medium">Kurfürstendamm 21,<br/>10719 Berlin, Germany</p>
            <a href="mailto:invest@tera.development" className="text-white text-xl font-semibold hover:text-white/70 transition-colors mt-4">invest@tera.development</a>
            <a href="tel:+493088913344" className="text-white/60 hover:text-white transition-colors font-medium">+49 30 88913344</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm font-medium uppercase tracking-widest">
          <p>© 2026 Tera Development. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
