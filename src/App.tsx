import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { AboutUs } from "./components/about-us";
import { EventFormats } from "./components/event-formats";
import { Pricing } from "./components/pricing";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { CallToAction } from "./components/call-to-action";
import { Footer } from "./components/footer";
import { MagneticButton } from "./components/magnetic-button";
import { ScrollReveal } from "./components/scroll-reveal";
import { VisitorPlot } from "./components/visitor-plot";
import { AnnoyingCTA } from "./components/annoying-cta";
import { Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/about-page";
import { FormatsPage } from "./pages/formats-page";

export default function App() {
  React.useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal-section");
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Background blobs */}
      <div className="blob w-[500px] h-[500px] rounded-full bg-primary-200 top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="blob w-[600px] h-[600px] rounded-full bg-secondary-200 bottom-0 right-0 translate-x-1/3 translate-y-1/3"></div>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            
            <ScrollReveal>
              <VisitorPlot />
            </ScrollReveal>
            
            <ScrollReveal>
              <Pricing />
            </ScrollReveal>
            
            <ScrollReveal>
              <Testimonials />
            </ScrollReveal>
            
            <ScrollReveal>
              <CallToAction />
            </ScrollReveal>
          </main>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/formats" element={<FormatsPage />} />
      </Routes>
      
      <Footer />
      
      {/* Floating contact button */}
      <MagneticButton />
      
      {/* Annoying CTA buttons */}
      <AnnoyingCTA />
    </div>
  );
}