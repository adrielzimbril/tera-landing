import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import BentoSimulation from "@/components/sections/BentoSimulation";
import Featured from "@/components/sections/Featured";
import TestimonialSlider from "@/components/sections/TestimonialSlider";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative max-w-7xl mx-auto border-x border-gray-200/60 min-h-screen flex flex-col overflow-x-hidden">
      {/* Grid Intersections (Mini Squares) */}
      <div className="dot top-0 left-0"></div>
      <div className="dot top-0 left-full"></div>
      
      <Navbar />

      <Hero />
      
      <Projects />
      
      <Services />

      <BentoSimulation />
      
      <Featured />

      <TestimonialSlider />

      <CTA />
      
      <Footer />
    </div>
  );
}
