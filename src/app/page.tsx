import Header from "@/components/header";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import WhyAutomateSection from "@/components/sections/why-automate";
import SolutionsSection from "@/components/sections/solutions";
import PortfolioSection from "@/components/sections/portfolio";
import TechStackSection from "@/components/sections/tech-stack";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/footer";
import ReverseEngineeringSection from "@/components/sections/reverse-engineering";
import SolidworksOptimizationSection from "@/components/sections/solidworks-optimization";
import WhatIsDesignAutomationSection from "@/components/sections/what-is-design-automation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhatIsDesignAutomationSection />
        <WhyAutomateSection />
        <SolutionsSection />
        <ReverseEngineeringSection />
        <SolidworksOptimizationSection />
        <PortfolioSection />
        <TechStackSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
