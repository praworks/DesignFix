import Header from "@/components/header";
import HeroSection from "@/components/sections/hero";
import WhyAutomateSection from "@/components/sections/why-automate";
import PortfolioSection from "@/components/sections/portfolio";
import TechStackSection from "@/components/sections/tech-stack";
import Footer from "@/components/footer";
import WhatIsDesignAutomationSection from "@/components/sections/what-is-design-automation";
import ServicesSection from "@/components/sections/services";
import CtaSection from "@/components/sections/cta";

export default function GitPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhatIsDesignAutomationSection />
        <WhyAutomateSection />
        <ServicesSection />
        <PortfolioSection />
        <TechStackSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
