"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-midnight-slate/80 backdrop-blur-md py-4 border-b border-lead/20" : "bg-transparent py-6"
      }`}
    >
      <div className="container max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-[21px] font-[360] font-arcadiadisplay text-starlight tracking-[0.01em]">
          TERA
        </Link>
        <nav className="hidden md:flex gap-8 text-[16px] font-[400] text-starlight font-arcadia tracking-[0.01em]">
          <Link href="#concept" className="hover:text-white transition-colors">Concept</Link>
          <Link href="#design" className="hover:text-white transition-colors">Design</Link>
          <Link href="#sustainability" className="hover:text-white transition-colors">Sustainability</Link>
        </nav>
        <button className="px-5 py-2 bg-ghost-blue/20 text-starlight text-[16px] font-[400] font-arcadia rounded-[40px] hover:bg-ghost-blue/30 transition-colors">
          Explore
        </button>
      </div>
    </header>
  );
}
